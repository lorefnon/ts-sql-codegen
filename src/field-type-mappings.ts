export interface FieldTypeMapping {
    columnName?: string | RegExp;
    tableName?: string | RegExp;
    columnType?: string | RegExp;
    fieldType: string;
}

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
