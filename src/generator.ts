import fs from "fs-extra";
import yaml from "js-yaml";
import path from "path";
import { Liquid } from "liquidjs";
import { camelCase, memoize, upperFirst, last } from "lodash";
import { GeneratorOpts, GeneratorOptsSchema } from "./generator-options";
import { fieldTypeMappings } from "./field-type-mappings";
import { Column, Table, TblsSchema } from "./tbls-types";

interface FieldTmplInput {
    name: string;
    columnName: string;
    columnType: string;
}

export class Generator {
    protected engine = new Liquid();
    protected fieldTypeMappings = fieldTypeMappings;
    protected opts: GeneratorOpts;

    constructor(opts: GeneratorOpts) {
        this.opts = GeneratorOptsSchema.parse(opts);
    }

    protected getTemplatePath = memoize(() => {
        return path.join(__dirname, "template.ts.liquid");
    });

    protected getParsedTemplate = memoize(async () => {
        const rawTemplate = await fs.readFile(this.getTemplatePath(), "utf8");
        return this.engine.parse(rawTemplate);
    });

    async generate() {
        const rawSchema = await fs.readFile(
            path.resolve(this.opts.schemaPath),
            "utf8"
        );
        const schema = TblsSchema.parse(yaml.load(rawSchema));
        await Promise.all(
            schema.tables.map(async (table) => {
                await this.generateTableMapper(table);
            })
        );
    }

    async generateTableMapper(table: Table) {
        const fields: FieldTmplInput[] = table.columns.map((col) => ({
            name: this.getFieldNameForColumn(col),
            columnName: col.name,
            columnType: this.getFieldType(table.name, col),
        }));
        const primaryKey = this.extractPrimaryKey(table, fields);
        const filePath = this.getOutputFilePath(table);
        const dbConnectionSource = this.getConnectionSourceImportPath(filePath);
        const tmplInput = {
            dbConnectionSource,
            className: this.getClassNameFromTableName(table.name),
            tableName: table.name,
            fields,
            primaryKey,
        };
        const output = await this.postProcessOutput(
            await this.engine.render(
                await this.getParsedTemplate(),
                await this.preProcessTemplateInput(tmplInput)
            ),
            table
        );
        await fs.ensureDir(path.dirname(filePath));
        if (this.opts.dryRun) {
            console.log(`Will populate ${filePath} with:`);
            console.log(output);
            console.log("---");
        } else {
            await fs.writeFile(filePath, output);
        }
    }

    protected getConnectionSourceImportPath(outputFilePath: string) {
        const relPath = path.relative(
            path.dirname(outputFilePath),
            path.resolve(this.opts.connectionSourcePath)
        );
        return path.join(
            path.dirname(relPath),
            path.basename(relPath, path.extname(relPath))
        );
    }

    protected async preProcessTemplateInput(input: any) {
        return input;
    }

    protected async postProcessOutput(output: string, _table: Table) {
        return output;
    }

    protected getClassNameFromTableName(tableName: string) {
        return upperFirst(camelCase(last(tableName.split('.')))) + 'Table';
    }

    protected getFieldNameForColumn(col: Column) {
        return camelCase(col.name);
    }

    protected getFieldType(tableName: string, col: Column) {
        const mapping = this.fieldTypeMappings.find(
            (it) =>
                doesMatchNameOrPattern(it.columnName, col.name) &&
                doesMatchNameOrPattern(it.tableName, tableName) &&
                doesMatchNameOrPattern(it.columnType, col.type)
        );
        return mapping?.fieldType ?? "custom";
    }

    protected getOutputFilePath(table: Table) {
        const fileName = this.getOutputFileName(table);
        return path.join(this.opts.outputDirPath, fileName);
    }

    protected getOutputFileName(table: Table) {
        return this.getClassNameFromTableName(table.name) + ".ts";
    }

    protected extractPrimaryKey(table: Table, fields: FieldTmplInput[]) {
        const pkConstraint = table.constraints.find(
            (it) => it.type === "PRIMARY KEY"
        );
        if (pkConstraint && pkConstraint.columns.length === 1) {
            const fieldIdx = fields.findIndex(
                (it) => it.columnName === pkConstraint.columns[0]
            );
            if (fieldIdx >= 0) {
                const [field] = fields.splice(fieldIdx, 1);
                return field;
            }
        }
        return undefined;
    }
}

const doesMatchNameOrPattern = (
    matcher: undefined | string | RegExp,
    target: string
) => {
    if (matcher == null) return true;
    if (typeof matcher === "string") return matcher === target;
    return target.match(matcher);
};
