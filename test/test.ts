import path from "path";
import fs from "fs-extra";
import { Generator } from "../src";
import snap from "mocha-snap";

const schemaPath = path.join(__dirname, "test.schema.yaml");
const outputDirPath = path.join(__dirname, "generated");
const connectionSourcePath = path.join(__dirname, "connection-source");

const readOutput = (name: string) =>
    fs.readFile(path.join(outputDirPath, `${name}.ts`), "utf8");

describe("Generator", () => {
    before(async () => {
        await fs.remove(outputDirPath);
    });

    after(async () => {
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

${await readOutput("ChaptersTable")}`
        );
    });
});
