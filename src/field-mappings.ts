import * as z from "zod";

export const StrOrRegExpSchema = z.string().or(z.instanceof(RegExp));

/**
 * Matching criteria specified as string or regex
 */
export type StrOrRegExp = z.TypeOf<typeof StrOrRegExpSchema>;

export const ImportedItemSchema = z.object({
    name: z.string(),
    importPath: z.string().nullish(),
});

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
});

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
