import * as z from "zod";

const StrOrRegExpSchema = z.string().or(z.instanceof(RegExp));

export const FieldTypeMappingSchema = z.object({
    columnName: StrOrRegExpSchema.nullish(),
    tableName: StrOrRegExpSchema.nullish(),
    columnType: StrOrRegExpSchema.nullish(),
    fieldType: z.string(),
});

export interface FieldTypeMapping
    extends z.TypeOf<typeof FieldTypeMappingSchema> {}

export const fieldTypeMappings: Readonly<FieldTypeMapping[]> = Object.freeze([
    {
        columnType: /(character|varchar|text)/,
        fieldType: "string",
    },
    {
        columnType: /bool/,
        fieldType: "boolean",
    },
    {
        columnType: /bigint|bigserial/,
        fieldType: "bigint",
    },
    {
        columnType: /int/,
        fieldType: "int",
    },
    {
        columnType: /^uuid$/,
        fieldType: "uuid",
    },
    {
        columnType: /(timestamp|datetime)/,
        fieldType: "localDateTime",
    },
    {
        columnType: /date/,
        fieldType: "localDate",
    },
    {
        columnType: /time/,
        fieldType: "localTime",
    },
]);
