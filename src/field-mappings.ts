import * as z from "zod";

export const StrOrRegExpSchema = z.string().or(z.instanceof(RegExp));

export const GeneratedFieldTypeSchema = z.object({
    name: z.string(),
    adapter: z
        .object({
            name: z.string(),
            importPath: z.string(),
        })
        .nullish(),
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
        generatedField: { type: { name: "string" } },
    },
    {
        columnType: /bool/,
        generatedField: { type: { name: "boolean" } },
    },
    {
        columnType: /bigint|bigserial/,
        generatedField: { type: { name: "bigint" } },
    },
    {
        columnType: /int/,
        generatedField: { type: { name: "int" } },
    },
    {
        columnType: /^uuid$/,
        generatedField: { type: { name: "uuid" } },
    },
    {
        columnType: /(timestamp|datetime)/,
        generatedField: { type: { name: "localDateTime" } },
    },
    {
        columnType: /date/,
        generatedField: { type: { name: "localDate" } },
    },
    {
        columnType: /time/,
        generatedField: { type: { name: "localTime" } },
    },
];
