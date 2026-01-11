import * as z from "zod";

export const ColumnSchema = z.object({
    name: z.string(),
    type: z.string(),
    nullable: z.boolean().optional(),
    default: z.any().nullish(),
    comment: z.string().nullish(),
});

export type Column = z.TypeOf<typeof ColumnSchema>;

export const ConstraintSchema = z.object({
    name: z.string(),
    type: z.string(),
    table: z.string(),
    columns: z.string().array(),
    referencedTable: z.string().nullish(),
    referencedColumns: z.string().array().nullish(),
    comment: z.string().nullish(),
});

export const EnumsSchema = z.object({
    name: z.string(),
    values: z.string().array(),
});

export type Enum = z.TypeOf<typeof EnumsSchema>;

export const TableSchema = z.object({
    name: z.string(),
    type: z.string(),
    columns: ColumnSchema.array(),
    constraints: ConstraintSchema.array().nullish(),
    comment: z.string().nullish()
});

export type Table = z.TypeOf<typeof TableSchema>;

export const TblsSchema = z.object({
    name: z.string(),
    tables: TableSchema.array(),
    enums: EnumsSchema.array().nullish(),
});

