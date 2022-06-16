import * as z from "zod";

export const StrOrRegExpSchema = z.string().or(z.instanceof(RegExp));

export const AdapterSchema = z.object({
    name: z.string(),
    importPath: z.string().nullish(),
});

export interface Adapter extends z.TypeOf<typeof AdapterSchema> {}

export const GeneratedFieldTypeSchema = z.object({
    kind: z.enum([
        'custom',
        'enum'
    ]).nullish(),
    dbTypeName: z.string().nullish(),
    tsTypeName: z.string().nullish(),
    adapter: AdapterSchema.nullish(),
});

export interface GeneratedFieldType
    extends z.TypeOf<typeof GeneratedFieldTypeSchema> {}

export const GeneratedFieldSchema = z.object({
    type: GeneratedFieldTypeSchema.nullish(),
    name: z.string().nullish(),
    isComputed: z.boolean().nullish()
});

export interface GeneratedField extends z.TypeOf<typeof GeneratedFieldSchema> {}

export const FieldMappingSchema = z.object({
    /** Optional criteria (string or regex) to match column name */
    columnName: StrOrRegExpSchema.nullish(),

    /** Optional criteria (string or regex) to match table name */
    tableName: StrOrRegExpSchema.nullish(),

    /** Optional criteria (string or regex) to match column type (in database) */
    columnType: StrOrRegExpSchema.nullish(),

    /**
     * Can be used to customize the field name or type mapping
     *
     * Set to false to omit mapping of this field
     */
    generatedField: GeneratedFieldSchema.or(z.literal(false)),
});

export interface FieldMapping extends z.TypeOf<typeof FieldMappingSchema> {}

export const fieldMappings: FieldMapping[] = [
    {
        columnType: /(character|varchar|text)/,
        generatedField: { type: { dbTypeName: "string" } },
    },
    {
        columnType: /bool/,
        generatedField: { type: { dbTypeName: "boolean" } },
    },
    {
        columnType: /bigint|bigserial/,
        generatedField: { type: { dbTypeName: "bigint" } },
    },
    {
        columnType: /int/,
        generatedField: { type: { dbTypeName: "int" } },
    },
    {
        columnType: /^uuid$/,
        generatedField: { type: { dbTypeName: "uuid" } },
    },
    {
        columnType: /(timestamp|datetime)/,
        generatedField: { type: { dbTypeName: "localDateTime" } },
    },
    {
        columnType: /date/,
        generatedField: { type: { dbTypeName: "localDate" } },
    },
    {
        columnType: /time/,
        generatedField: { type: { dbTypeName: "localTime" } },
    },
    {
        columnType: /double/,
        generatedField: { type: { dbTypeName: "double" } },
    },
];
