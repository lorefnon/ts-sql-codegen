import path from "path";
import fs from "fs-extra";
import { Generator } from "../src";
import snap from "mocha-snap";

const schemaPath = path.join(__dirname, "test.schema.yaml");
const connectionSourcePath = path.join(__dirname, "connection-source");
const outputDirPath = path.join(__dirname, "generated");

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
        });
        await generator.generate();
        await snap(`
// AuthorsTable.ts:

${await readOutput("AuthorsTable")}

// BooksTable.ts:

${await readOutput("BooksTable")}

// ChaptersTable.ts: 

${await readOutput("ChaptersTable")}`);
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
                            dbTypeName: "int",
                        },
                        name: "readTime",
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

const readOutput = (name: string) =>
    fs.readFile(path.join(outputDirPath, `${name}.ts`), "utf8");
