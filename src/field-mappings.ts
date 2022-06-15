import * as z from "zod";

export const StrOrRegExpSchema = z.string().or(z.instanceof(RegExp));

export const AdapterSchema = z.object({
    name: z.string(),
    importPath: z.string().nullish(),
});

export interface Adapter extends z.TypeOf<typeof AdapterSchema> {}

export const GeneratedFieldTypeSchema = z.object({
    dbTypeName: z.string().nullish(),
    tsTypeName: z.string().nullish(),
    adapter: AdapterSchema.nullish(),
});

export interface GeneratedFieldType
    extends z.TypeOf<typeof GeneratedFieldTypeSchema> {}

export const GeneratedFieldSchema = z.object({
    type: GeneratedFieldTypeSchema.nullish(),
    name: z.string().nullish(),
});

export const FieldMappingSchema = z.object({
    columnName: StrOrRegExpSchema.nullish(),
    tableName: StrOrRegExpSchema.nullish(),
    columnType: StrOrRegExpSchema.nullish(),
    generatedField: GeneratedFieldSchema,
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
];
