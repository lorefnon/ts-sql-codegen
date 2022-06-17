import path from "path";
import fs from "fs-extra";
import { FieldMapping, Generator } from "../src";
import snap from "mocha-snap";

const schemaPath = path.join(__dirname, "test.schema.yaml");
const connectionSourcePath = path.join(__dirname, "connection-source");
const outputDirPath = path.join(__dirname, "generated");

const fieldMappings: FieldMapping[] = [
    {
        columnType: "genre",
        generatedField: {
            type: {
                kind: "enum",
                tsType: {
                    name: "Genre",
                    importPath: path.join(__dirname, "types"),
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
                    importPath: path.join(__dirname, "types"),
                },
                adapter: {
                    name: 'ChapterMetadataAdapter',
                    importPath: path.join(__dirname, 'adapter')
                }
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

    it("generates code from schema", async () => {
        const generator = new Generator({
            schemaPath,
            connectionSourcePath,
            outputDirPath,
            fieldMappings,
        });
        await generator.generate();
        await snap(await readAllGenerated());
    });

    it("allows omitting specific tables and fields", async () => {
        const generator = new Generator({
            schemaPath,
            connectionSourcePath,
            outputDirPath,
            tables: {
                include: [/authors/, "books"],
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
