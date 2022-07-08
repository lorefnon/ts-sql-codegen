import * as z from "zod";

export const StrOrRegExpSchema = z.string().or(z.instanceof(RegExp));

/**
 * Matching criteria specified as string or regex
 */
export type StrOrRegExp = z.TypeOf<typeof StrOrRegExpSchema>;

export const ImportedItemSchema = z.object({

    /** Name of import */
    name: z.string(),

    /** Path from which we should import */
    importPath: z.string().nullish(),

    /**
     * Whether this is a default import
     *
     * @default false
     */
    isDefault: z.boolean().nullish(),

    /**
     * Whether this is a relative import
     *
     * @default true 
     */
    isRelative: z.boolean().nullish()
});

/**
 * Specifies options to construct an import
 *
 * Note that unless isRelative is specified as false, the import will be
 * resolved relative to the cwd from where generator is invoked and
 * then converted to a relative path relative to the generated file
 *
 * Examples: 
 *    When generated file is located at src/db/tables/some-table.ts and generator
 *    is run from project root
 *
 *    Config: `{ name: "FooAdapter", importPath: 'src/db/adapters/foo-adapter'}`
 *    Generates:  `import { FooAdapter } from '../adapters/foo-adapter'`
 *
 *    Config: `{ name: "FooAdapter", isDefault: true, importPath: 'src/db/adapters/foo-adapter'}`
 *    Generates: `import FooAdapter from '../adapters/foo-adapter'`
 *
 *    Config: `{ name: "FooAdapter", isRelative: false, importPath: 'external-lib/foo-adapter'}`
 *    Generates: `import { FooAdapter } from '../adapters';`
 *
 */
export interface ImportedItem extends z.TypeOf<typeof ImportedItemSchema> {}

export const GeneratedFieldTypeSchema = z.object({
    /**
     * Specify that this field uses a custom database type or an enum type
     */
    kind: z.enum(["custom", "enum"]).nullish(),
    /**
     * This name is a database type identifier as expected by ts-sql-query
     *
     * These names are not database specific and may not match FieldMappingSchema.columnType eg. for database level type (which tbls outputs in the schema yaml) can be varchar but the columnType that ts-sql-query uses will be 'string'
     */
    dbType: z.object({ name: z.string() }).nullish(),

    /**
     * If present, used as a generic type argument to field factory. This is typically useful when
     * dealing with custom database types or enum types.
     *
     * If importPath is not present, then an import will not be added. This can result in a compile time error
     * if the type is not globally available.
     */
    tsType: ImportedItemSchema.nullish(),

    /**
     * Specify a type adapter for the generated field.
     *
     * If not present, we will attempt to use GeneratorOpts.common.typeAdapter.importPath or throw if absent.
     */
    adapter: ImportedItemSchema.nullish(),
});

export interface GeneratedFieldType
    extends z.TypeOf<typeof GeneratedFieldTypeSchema> {}

export const GeneratedFieldSchema = z.object({
    type: GeneratedFieldTypeSchema.nullish(),
    name: z.string().nullish(),
    isComputed: z.boolean().nullish(),
    isOptional: z.boolean().nullish(),
    hasDefault: z.boolean().nullish()
});

/**
 * Specifies options for the generated field mapping
 *
 * The options here are ts-sql-query specific
 */
export interface GeneratedField extends z.TypeOf<typeof GeneratedFieldSchema> {}

export const FieldMappingSchema = z.object({
    /** Optional criteria (string or regex) to match column name */
    columnName: StrOrRegExpSchema.nullish(),

    /** Optional criteria (string or regex) to match table name */
    tableName: StrOrRegExpSchema.nullish(),

    /**
     * Optional criteria (string or regex) to match column type (in database)
     *
     * This will be used to match against the type name as
     * present in the tbls output schema yaml file.
     */
    columnType: StrOrRegExpSchema.nullish(),

    /**
     * Can be used to customize the field name or type mapping
     * in the generated field.
     *
     * Set to false to omit mapping of this field
     */
    generatedField: GeneratedFieldSchema.or(z.literal(false)),
});

export interface FieldMapping extends z.TypeOf<typeof FieldMappingSchema> {}

export const fieldMappings: FieldMapping[] = [
    {
        columnType: /(character|varchar|text)/,
        generatedField: { type: { dbType: { name: "string" } } },
    },
    {
        columnType: /bool/,
        generatedField: { type: { dbType: { name: "boolean" } } },
    },
    {
        columnType: /bigint|bigserial/,
        generatedField: { type: { dbType: { name: "bigint" } } },
    },
    {
        columnType: /int/,
        generatedField: { type: { dbType: { name: "int" } } },
    },
    {
        columnType: /^uuid$/,
        generatedField: { type: { dbType: { name: "uuid" } } },
    },
    {
        columnType: /(timestamp|datetime)/,
        generatedField: { type: { dbType: { name: "localDateTime" } } },
    },
    {
        columnType: /date/,
        generatedField: { type: { dbType: { name: "localDate" } } },
    },
    {
        columnType: /time/,
        generatedField: { type: { dbType: { name: "localTime" } } },
    },
    {
        columnType: /(double|float)/,
        generatedField: { type: { dbType: { name: "double" } } },
    },
];
