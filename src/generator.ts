import fs from "fs-extra";
import Handlebars from "handlebars";
import { register } from "hbs-dedent-helper";
import yaml from "js-yaml";
import path from "path";
import { camelCase, memoize, upperFirst, last } from "lodash";
import { GeneratorOpts, GeneratorOptsSchema } from "./generator-options";
import { fieldMappings, GeneratedFieldType } from "./field-mappings";
import { Column, Table, TblsSchema } from "./tbls-types";

type Logger = Record<
    "debug" | "info" | "warn" | "error",
    (...args: any[]) => void
>;

register();

interface FieldTmplInput {
    name: string;
    columnName: string;
    fieldType: GeneratedFieldType;
}

/**
 * Generator class for programmatic codegen.
 *
 * Most common usage involves creating an instance and calling generate function:
 *
 * ```ts
 * const options = {
 *    schemaPath: './schema.yaml',
 *    connectionSourcePath: './connection-source.ts'
 * }
 * const generator = new Generator(options);
 * await generator.generate();
 * ```
 *
 * See [GeneratorOpts](../interfaces/GeneratorOpts.md) for configuration options.
 *
 * For advanced use-cases, you can extend this class.
 * This enables you to use custom templates, pre/post processing of generated code
 * and custom logic for table/column/field mapping.
 */
export class Generator {
    protected opts: GeneratorOpts;
    public logger: Logger = console;

    constructor(opts: GeneratorOpts) {
        this.opts = GeneratorOptsSchema.parse(opts);
    }

    protected getFieldMappings = memoize(() => {
        return (this.opts.fieldMappings ?? []).concat(fieldMappings);
    });

    protected getTemplatePath = memoize(() => {
        return path.join(__dirname, "template.ts.hbs");
    });

    protected getCompiledTemplate = memoize(async () => {
        const rawTemplate = await fs.readFile(this.getTemplatePath(), "utf8");
        return Handlebars.compile(rawTemplate);
    });

    async generate() {
        const rawSchema = await fs.readFile(
            path.resolve(this.opts.schemaPath),
            "utf8"
        );
        const schema = TblsSchema.parse(yaml.load(rawSchema));
        await Promise.all(
            schema.tables.map(async (table) => {
                if (this.shouldProcess(table)) {
                    await this.generateTableMapper(table);
                }
            })
        );
    }

    protected shouldProcess(table: Table) {
        const filter = this.opts.tables;
        if (
            filter?.include &&
            filter.include.findIndex((it) =>
                doesMatchNameOrPattern(it, table.name)
            ) < 0
        ) {
            return false;
        }
        if (
            filter?.exclude &&
            filter.exclude.findIndex((it) =>
                doesMatchNameOrPattern(it, table.name)
            ) < 0
        ) {
            return false;
        }
        return true;
    }

    protected async generateTableMapper(table: Table) {
        const fields: FieldTmplInput[] = table.columns.map((col) => ({
            name: this.getFieldNameForColumn(table.name, col),
            columnName: col.name,
            fieldType: this.getFieldType(table.name, col),
        }));
        const tableName = last(table.name.split("."));
        const primaryKey = this.extractPrimaryKey(table, fields);
        const filePath = this.getOutputFilePath(table);
        const dbConnectionSource = this.getConnectionSourceImportPath(filePath);
        const adapters = this.getAdapterImports(filePath, fields);
        const templateInput = await this.preProcessTemplateInput({
            tableName,
            dbConnectionSource,
            className: this.getClassNameFromTableName(table.name),
            fields,
            primaryKey,
            adapters,
        });
        const template = await this.getCompiledTemplate();
        const output = await this.postProcessOutput(
            template(templateInput),
            table
        );
        await fs.ensureDir(path.dirname(filePath));
        if (this.opts.dryRun) {
            this.logger.info(`Will populate ${filePath} with:`);
            this.logger.info(output);
            this.logger.info("---");
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

    protected getAdapterImports(
        outputFilePath: string,
        fields: FieldTmplInput[]
    ) {
        const imports = new Map<string, Set<string>>();
        for (const field of fields) {
            const adapter = field.fieldType?.adapter;
            if (!adapter) continue;
            const relImportPath =
                adapter.importPath ?? this.opts.common?.typeAdapter?.importPath;
            if (!relImportPath) {
                throw new Error(
                    `Unable to resolve import path for type adapter: ${JSON.stringify(
                        adapter
                    )}`
                );
            }
            const importPath = path.relative(
                path.dirname(outputFilePath),
                path.resolve(relImportPath)
            );
            const adapterImports = imports.get(importPath) ?? new Set<string>();
            imports.set(importPath, adapterImports);
            adapterImports.add(adapter.name);
            if (field.fieldType.tsTypeName)
                adapterImports.add(field.fieldType.tsTypeName);
        }
        return [...imports.entries()].map(([importPath, importedSet]) => ({
            importPath,
            imported: [...importedSet],
        }));
    }

    protected async preProcessTemplateInput(input: any) {
        return input;
    }

    protected async postProcessOutput(output: string, _table: Table) {
        return output;
    }

    protected getClassNameFromTableName(tableName: string) {
        return upperFirst(camelCase(last(tableName.split(".")))) + "Table";
    }

    protected getFieldNameForColumn(tableName: string, col: Column) {
        const mapping = this.getFieldMappings().find(
            (it) =>
                it.generatedField?.name &&
                doesMatchNameOrPattern(it.columnName, col.name) &&
                doesMatchNameOrPattern(it.tableName, tableName) &&
                doesMatchNameOrPattern(it.columnType, col.type)
        );
        return mapping?.generatedField?.name ?? camelCase(col.name);
    }

    protected getFieldType(tableName: string, col: Column): GeneratedFieldType {
        const mapping = this.getFieldMappings().find(
            (it) =>
                it.generatedField?.type &&
                doesMatchNameOrPattern(it.columnName, col.name) &&
                doesMatchNameOrPattern(it.tableName, tableName) &&
                doesMatchNameOrPattern(it.columnType, col.type)
        );
        if (!mapping) {
            throw new Error(
                `Failed to infer field type for ${tableName}.${col.name}`
            );
        }
        const dbTypeName = mapping.generatedField.type?.dbTypeName ?? col.type;
        let tsTypeName = mapping.generatedField.type?.tsTypeName;
        if (mapping.generatedField?.type?.adapter && !tsTypeName) {
            tsTypeName = upperFirst(camelCase(dbTypeName));
        }
        return {
            ...mapping.generatedField.type,
            dbTypeName,
            tsTypeName,
        };
    }

    protected getOutputFilePath(table: Table) {
        const fileName = this.getOutputFileName(table);
        return path.join(this.opts.outputDirPath, fileName);
    }

    protected getOutputFileName(table: Table) {
        return this.getClassNameFromTableName(table.name) + ".ts";
    }

    protected extractPrimaryKey(table: Table, fields: FieldTmplInput[]) {
        let fieldIdx = -1;
        let isAutoGenerated =
            this.opts.common?.primaryKey?.isAutoGenerated ?? false;
        const commonPKColName = this.opts.common?.primaryKey?.name;
        if (commonPKColName) {
            fieldIdx = table.columns.findIndex(
                (it) => it.name === commonPKColName
            );
        }
        if (fieldIdx < 0) {
            const pkConstraint = table.constraints.find(
                (it) => it.type === "PRIMARY KEY"
            );
            if (pkConstraint && pkConstraint.columns.length === 1) {
                fieldIdx = fields.findIndex(
                    (it) => it.columnName === pkConstraint.columns[0]
                );
            }
        }
        if (fieldIdx >= 0) {
            const [field] = fields.splice(fieldIdx, 1);
            return { ...field, isAutoGenerated };
        }
        return undefined;
    }
}

const doesMatchNameOrPattern = (
    matcher: undefined | null | string | RegExp,
    target: string
) => {
    if (matcher == null) return true;
    if (typeof matcher === "string") {
        const matcherParts = matcher.split(".");
        const targetParts = target.split(".");
        for (let i = 0; i < matcherParts.length; i++) {
            if (
                targetParts[targetParts.length - 1 - i] !==
                matcherParts[matcherParts.length - 1 - i]
            ) {
                return false;
            }
        }
        return true;
    }
    return target.match(matcher);
};
