import path from "path";
import fs from "fs-extra";
import { FieldMapping, Generator } from "../src";
import { isEqual, omit } from "lodash";
import snap from "mocha-snap";
import assert from "assert";
import { getConnection } from "./helpers/connection-source";
import { extractColumnsFrom } from "ts-sql-query/extras/utils";

const schemaPath = path.join(__dirname, "data/test.schema.yaml");
const connectionSourcePath = path.join(__dirname, "helpers/connection-source");
const outputDirPath = path.join(__dirname, "generated");

const fieldMappings: FieldMapping[] = [
  {
    columnType: "genre",
    generatedField: {
      type: {
        kind: "enum",
        tsType: {
          name: "Genre",
          importPath: path.join(__dirname, "helpers/types"),
        },
      },
    },
  },
  {
    tableName: "chapters",
    columnName: "metadata",
    generatedField: {
      type: {
        kind: "custom",
        dbType: { name: "jsonb" },
        tsType: {
          name: "ChapterMetadata",
          importPath: path.join(__dirname, "helpers/types"),
        },
        adapter: {
          name: "ChapterMetadataAdapter",
          importPath: path.join(__dirname, "helpers/adapters"),
        },
      },
    },
  },
];

describe("Generator", () => {
  beforeEach(async () => {
    await fs.remove(outputDirPath);
  });

  afterEach(async () => {
    await fs.remove(outputDirPath);
  });

  [undefined, true, false].forEach((useQualifiedTableName) => {
    it(`generates code from schema with useQualifiedTablePrefix: ${useQualifiedTableName}`, async () => {
      const generator = new Generator({
        schemaPath,
        connectionSourcePath,
        outputDirPath,
        fieldMappings,
        tableMapping: useQualifiedTableName ? {
            useQualifiedTableName
        } : undefined
      });
      await generator.generate();
      await snap(await readAllGenerated());
      if (process.env.DATABASE_URL) {
        const conn = getConnection();
        await conn
          .transaction(async () => {
            // prettier-ignore
            // @ts-ignore
            const { AuthorsTable } = await import( "./generated/AuthorsTable");
            // prettier-ignore
            // @ts-ignore
            const { BooksTable } = await import( "./generated/BooksTable");
            const authorsTable = new AuthorsTable();
            const { id } = await conn
              .insertInto(authorsTable)
              .set({
                id: 2,
                name: "Brandon Sanderson",
              })
              .returning({
                id: authorsTable.id,
              })
              .executeInsertOne();
            assert(id === 2);
            await conn
              .insertInto(new BooksTable())
              .set({
                name: "Mistborn",
                authorId: id,
              })
              .executeInsert();
            // prettier-ignore
            // @ts-ignore
            const { AuthorBooksTable } = await import( "./generated/AuthorBooksTable");
            // prettier-ignore
            // @ts-ignore
            const { ChaptersTable } = await import( "./generated/ChaptersTable");
            const authorBooksTable = new AuthorBooksTable();
            const authorBooks = await conn
              .selectFrom(authorBooksTable)
              .select(extractColumnsFrom(authorBooksTable) as any)
              .executeSelectMany();
            console.log(authorBooks.map((it) => omit(it, ["id"])));
            assert(
              isEqual(
                authorBooks.map((it) => omit(it, ["id"])),
                [
                  {
                    name: "Unsouled",
                    authorId: 1,
                    authorName: "Will Wight",
                  },
                  {
                    name: "Mistborn",
                    authorId: 2,
                    authorName: "Brandon Sanderson",
                  },
                ]
              )
            );
            const chaptersTable = new ChaptersTable();
            const chapters = await conn
              .selectFrom(chaptersTable)
              .select(extractColumnsFrom(chaptersTable) as any)
              .executeSelectMany();
            console.log("chapters:", chapters);
            assert(
              isEqual(
                chapters.map(({ bookId, ...it }) => it),
                [
                  {
                    id: 1,
                    name: "Chapter 01",
                    metadata: { a: "test" },
                  },
                ]
              )
            );
            const newChapter = { ...chapters[0] };
            delete newChapter.id;
            newChapter.name = "Chapter 02";
            await conn
              .insertInto(chaptersTable)
              .set(newChapter as any)
              .executeInsert();
            throw new Error("CANCEL_TRX");
          })
          .catch((e) => {
            if (e.message !== "CANCEL_TRX") throw e;
            console.info("Ignoring transaction error: ", e);
          });
      }
    });
  });

  it("allows omitting specific tables and fields", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      tables: {
        include: [/authors/, "books"],
      },
      tableMapping: {
        idPrefix: "Public",
      },
      fieldMappings: [
        ...fieldMappings,
        {
          tableName: "authors",
          columnName: "name",
          generatedField: false,
        },
        {
          tableName: "books",
          columnName: "time_to_read",
          generatedField: {
            type: {
              dbType: { name: "int" },
            },
            name: "readTime",
          },
        },
      ],
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("allows exporting instances", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      fieldMappings,
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });

  it("allows non-relative and default import paths", async () => {
    const generator = new Generator({
      schemaPath,
      connectionSourcePath,
      outputDirPath,
      export: {
        tableInstances: true,
        tableClasses: false,
      },
      fieldMappings: [
        {
          columnType: "genre",
          generatedField: {
            type: {
              kind: "enum",
              tsType: {
                name: "Genre",
                importPath: path.join(__dirname, "helpers/types"),
                isDefault: true,
              },
            },
          },
        },
        {
          tableName: "chapters",
          columnName: "metadata",
          generatedField: {
            type: {
              kind: "custom",
              dbType: { name: "jsonb" },
              tsType: {
                name: "ChapterMetadata",
                importPath: "some-lib/ChapterMetadata",
                isDefault: true,
                isRelative: false,
              },
              adapter: {
                name: "ChapterMetadataAdapter",
                importPath: "some-other-lib",
                isRelative: false,
              },
            },
          },
        },
      ],
    });
    await generator.generate();
    await snap(await readAllGenerated());
  });
});

const readAllGenerated = async () => {
  const fList = await fs.readdir(outputDirPath);
  return (
    await Promise.all(
      fList.map(async (fName) => {
        const content = await fs.readFile(
          path.join(outputDirPath, fName),
          "utf8"
        );
        return [`// ${fName} :\n${content}`];
      })
    )
  ).join("\n\n");
};
