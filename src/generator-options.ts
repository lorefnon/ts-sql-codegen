import * as z from "zod";
import { FieldMappingSchema, ImportedItemSchema, StrOrRegExpSchema } from "./field-mappings";

export const InclusionSchema = z.object({
    /**
     * Entry to be included - identified by qualified table or type name
     * or regular expression
     */
    include: StrOrRegExpSchema.array().nullish(),
    /**
     * Entry to be excluded - identified by qualified table or type name
     * or regular expression
     */
    exclude: StrOrRegExpSchema.array().nullish(),
});

export interface Inclusion extends z.input<typeof InclusionSchema> {}

export const ExportTypesOptionsSchema = z.object({
    /**
     * If enabled, instead of type alias we will generate interfaces
     *
     * This can make type errors more succinct.
     */
    asInterface: z.boolean(),
});

export interface ExportTypesOptions extends z.input<typeof ExportTypesOptionsSchema> {}

export const ExportOptionsSchema = z.object({
    /**
     * In addition to the table class, also expose instantiated instance of table class
     *
     * Example:
     *     export class UserTable extends Table<DBConnection, "User"> { ... }
     *
     *     export const tUserTable = new UserTable() // <----
     */
    tableInstances: z.boolean().default(false),

    /**
     * If set to false, prevents the table class from getting exported
     *
     * This is useful in conjunction with tableInstances, if you only want to
     * export the table instance
     */
    tableClasses: z.boolean().default(true),

    /**
     * Additionally export the row types associated with table
     *
     * Example:
     *     import { InsertableRow, UpdatableRow, SelectedRow } from "ts-sql-query/extras/types"
     *
     *     export class UserTable extends Table<DBConnection, "User"> { ... }
     *
     *     // Type of user row that can be used for insert
     *     // Here computed columns will not be present and columns with defaults will be optional
     *     export type UserIRow = InsertableRow<UserTable>
     *
     *     // Type of user row that can be used for update
     *     // Here computed columns will not be present and all fields will be optional
     *     export type UserURow = UpdatableRow<UserTable>
     *
     *     // Type of user row that is returned from select
     *     // Here computed columns will be present, only nullable fields will be optional
     *     export type UserSRow = SelectedRow<UserTable>
     *
     */
    rowTypes: z.boolean().or(ExportTypesOptionsSchema).default(false),

    /**
     * Additionally export the value types associated with table
     *
     * Example:
     *     import { InsertableValues, UpdatableValues, SelectedValues } from "ts-sql-query/extras/types"
     *
     *     export class UserTable extends Table<DBConnection, "User"> { ... }
     *
     *     // Type of user values that can be used for insert
     *     // Here computed columns will not be present and columns with defaults will be optional
     *     export type InsertableUser = InsertableValues<UserTable>
     *
     *     // Type of user values that can be used for update
     *     // Here computed columns will not be present and all fields will be optional
     *     export type UpdatableUser = UpdatableValues<UserTable>
     *
     *     // Type of user values that is returned from select
     *     // Here computed columns will be present, only nullable fields will be optional
     *     export type User = SelectedValues<UserTable>
     *
     */
    valuesTypes: z.boolean().or(ExportTypesOptionsSchema).default(false),

    /**
     * Additionally export the extracted columns (Useful for select * queries etc.)
     *
     * Example:
     *     export const tUserCols = extractColumnsFrom(tUser)
     */
    extractedColumns: z.boolean().default(false),

    /**
     * Additionally export a column types mapping useful for constructing filter type
     * for dynamic conditions.
     *
     * Example:
     *     export type UserCols = {
     *         id: 'int'
     *         name: 'string'
     *     }
     */
    columnTypeMappingInterface: z.boolean().default(false),

    /**
     * Generate a repository class to simplify common single-table CRUD operations
     *
     * This is currently only supported for tables having an id column as primary key
     */
    crudRepository: z.boolean().default(false),
});

export interface ExportOptions extends z.input<typeof ExportOptionsSchema> {}

export const NamingOptionsSchema = z.object({
    /**
     * Prefix to be used in the name of the constant that represents an enumeration
     */
    enumConstantNamePrefix: z.string().default('k'),
    /**
     * Suffix to be used in the name of the constant that represents an enumeration
     */
    enumConstantNameSuffix: z.string().default(''),
    /**
     * Prefix to be used in the name of the type that represents an enumeration
     */
    enumTypeNamePrefix: z.string().default(''),
    /**
     * Suffix to be used in the name of the type that represents an enumeration
     */
    enumTypeNameSuffix: z.string().default(''),
    /**
     * Prefix to be used in the name of the class that reprecents a table
     */
    tableClassNamePrefix: z.string().default(''),
    /**
     * Suffix to be used in the name of the class that reprecents a table
     */
    tableClassNameSuffix: z.string().default('Table'),
    /**
     * Prefix to be used in the name of the class that reprecents a view
     */
    viewClassNamePrefix: z.string().default(''),
    /**
     * Suffix to be used in the name of the class that reprecents a view
     */
    viewClassNameSuffix: z.string().default('Table'),
    /**
     * Prefix to be used in the name of the instance of the class that reprecents a table
     */
    tableInstanceNamePrefix: z.string().default('t'),
    /**
     * Suffix to be used in the name of the instance of the class that reprecents a table
     */
    tableInstanceNameSuffix: z.string().default(''),
    /**
     * Prefix to be used in the name of the instance of the class that reprecents a view
     */
    viewInstanceNamePrefix: z.string().default('t'),
    /**
     * Suffix to be used in the name of the the instance of class that reprecents a view
     */
    viewInstanceNameSuffix: z.string().default(''),
    /**
     * Prefix to be used in the name of the InsertableRow type
     */
    insertableRowTypeNamePrefix: z.string().default(''),
    /**
     * Suffix to be used in the name of the InsertableRow type
     */
    insertableRowTypeNameSuffix: z.string().default('IRow'),
    /**
     * Prefix to be used in the name of the UpdatableRow type
     */
    updatableRowTypeNamePrefix: z.string().default(''),
    /**
     * Suffix to be used in the name of the UpdatableRow type
     */
    updatableRowTypeNameSuffix: z.string().default('URow'),
    /**
     * Prefix to be used in the name of the SelectedRow type
     */
    selectedRowTypeNamePrefix: z.string().default(''),
    /**
     * Suffix to be used in the name of the SelectedRow type
     */
    selectedRowTypeNameSuffix: z.string().default('SRow'),
    /**
     * Prefix to be used in the name of the InsertableValues type
     */
    insertableValuesTypeNamePrefix: z.string().default('Insertable'),
    /**
     * Suffix to be used in the name of the InsertableValues type
     */
    insertableValuesTypeNameSuffix: z.string().default(''),
    /**
     * Prefix to be used in the name of the UpdatableValues type
     */
    updatableValuesTypeNamePrefix: z.string().default('Updatable'),
    /**
     * Suffix to be used in the name of the UpdatableValues type
     */
    updatableValuesTypeNameSuffix: z.string().default(''),
    /**
     * Prefix to be used in the name of the SelectedValues type
     */
    selectedValuesTypeNamePrefix: z.string().default(''),
    /**
     * Suffix to be used in the name of the SelectedValues type
     */
    selectedValuesTypeNameSuffix: z.string().default(''),
    /**
     * Prefix to be used in the name of the const with the column list of a table
     */
    tableColumnsNamePrefix: z.string().default('t'),
    /**
     * Suffix to be used in the name of the const with the column list of a table
     */
    tableColumnsNameSuffix: z.string().default('Cols'),
    /**
     * Prefix to be used in the name of the const with the column list of a view
     */
    viewColumnsNamePrefix: z.string().default('t'),
    /**
     * Suffix to be used in the name of the const with the column list of a view
     */
    viewColumnsNameSuffix: z.string().default('Cols'),

    columnTypeMappingInterfaceNameSuffix: z.string().default('Cols'),

    crudRepositoryClassNamePrefix: z.string().default(''),

    crudRepositoryClassNameSuffix: z.string().default('CrudRepo'),
});

export interface NamingOptions extends z.input<typeof NamingOptionsSchema> {}

export const CommonTypeAdapterOptionsSchema = z.object({
    /**
     * Common import path to be used for type adapters
     * when no specific import path is specified at field level
     */
    importPath: z.string(),
});

export interface CommonTypeAdapterOptions
    extends z.input<typeof CommonTypeAdapterOptionsSchema> {}

export const TableMappingSchema = z.object({
    /**
     * Specify a prefix that will be prepended to the table name passed as generic parameter to Table type
     * This can be used for disambiguation when there can be multiple tables from different schema etc.
     */
    idPrefix: z.string().nullish(),
    /**
     * Include the schema name in the table identifier passed to ts-sql-query
     */
    useQualifiedTableName: z.boolean().nullish(),
});

export interface TableMapping extends z.input<typeof TableMappingSchema> {}

export const CommonPrimaryKeyOptionsSchema = z.object({
    /**
     * Name of primary key column
     */
    name: z.string().nullish(),
    /**
     * If primary key column is auto-generated
     */
    isAutoGenerated: z.boolean().nullish(),
});

export interface CommonPrimaryKeyOptions
    extends z.input<typeof CommonPrimaryKeyOptionsSchema> {}

export const CommonCustomTypesOptionsSchema = z.object({
    /**
     * Path from where custom types will be imported by default
     *
     * Relative to cwd
     */
    importPath: z.string(),
});

export interface CommonCustomTypesOptions
    extends z.input<typeof CommonCustomTypesOptionsSchema> {}

export const CommonOptionsSchema = z.object({
    /** @see CommonCustomTypesOptions */
    customTypes: CommonCustomTypesOptionsSchema.nullish(),

    /** @see CommonPrimaryKeyOptions */
    typeAdapter: CommonTypeAdapterOptionsSchema.nullish(),

    /** @see CommonCustomTypesOptions */
    primaryKey: CommonPrimaryKeyOptionsSchema.nullish(),
});

export interface CommonOptions extends z.input<typeof CommonOptionsSchema> {}

export const RawContentSchema = z.object({
    /** Raw content injected before generated code in each file */
    before: z.string().nullish(),

    /** Raw content injected after generated code in each file */
    after: z.string().nullish()
});

export interface RawContent extends z.input<typeof RawContentSchema> {}

export const TypeWrapperSchema = z.object({
    typeName: StrOrRegExpSchema,
    wrapper: ImportedItemSchema
});

export const OutputImportOptionsSchema = z.object({
    extension: z.string().nullish(),
});

export const OutputOptionsSchema = z.object({
    import: OutputImportOptionsSchema.nullish(),
});

export const ConnectionSourceOptionsSchema = z.object({ 
    path: z.string().nullish(),
    resolveRelative: z.boolean().nullish(),
});

export interface ConnectionSourceOptions extends z.input<typeof ConnectionSourceOptionsSchema> {}

export const GeneratorOptsSchema = z.object({
    /** Root path of module - used for resolving relative paths. If unspecified, assumed to be cwd */
    moduleRoot: z.string().nullish(),

    /** Simulate the generation and print the outcome without actually modifying any files */
    dryRun: z.boolean().nullish(),

    /** Path to yaml schema dumped by tbls */
    schemaPath: z
        .string()
        .nullish()
        .transform((it) => it ?? "schema.yaml"),

    /** 
     * Path to module that exports DBConnection object used in table mappers 
     * @deprecated
     * @see connectionSource
     */
    connectionSourcePath: z
        .string()
        .nullish()
        .transform((it) => it ?? "src/db/connection-source.ts"),

    /**
     * Connection source configuration
     * @see ConnectionSourceOptions
     */
    connectionSource: ConnectionSourceOptionsSchema.nullish(),

    /** Path to output directory where a typescript class file will be generated for each table */
    outputDirPath: z
        .string()
        .nullish()
        .transform((it) => it ?? "src/generated"),

    /**
     * Customize how table columns are mapped to typescript fields
     *
     * @see FieldMapping
     */
    fieldMappings: FieldMappingSchema.array().nullish(),

    /**
     * Customize how tables are mapped
     *
     * @see TableMapping
     */
    tableMapping: TableMappingSchema.nullish(),

    /**
     * Restrict the generator to process only a subset of tables
     * available
     *
     * @see Inclusion
     */
    tables: InclusionSchema.nullish(),

    /**
     * Restrict the generator to process only a subset of enums
     * available
     *
     * @see Inclusion
     */
    enums: InclusionSchema.nullish(),

    /**
     * Shared options that affect all generated output
     */
    output: OutputOptionsSchema.nullish(),

    /**
     * Customize what all entities are exported from generated file
     *
     * @see ExportOptions
     */
    export: ExportOptionsSchema.partial().nullish(),

    /**
     * Convenience utility for common cases where all tables
     * follow same conventions
     *
     * See {@link CommonOptions}
     */
    common: CommonOptionsSchema.nullish(),

    /**
     * Customize the naming rules of the generated items
     *
     * See NamingOptions
     */
    naming: NamingOptionsSchema.partial().nullish(),

    /**
     * The fields marked as "custom", "customComparable" or "enum" receive a second generic
     * argument that need to be the same of the db type in the database or redefined for the field
     * If you set to true this property that second generic argument will be generated.
     */
    includeDBTypeWhenIsOptional: z.boolean().nullish(),

    /**
     * Remove extraneous files after code generation completes - this prevents you from
     * having to manually clean up files after eg. any table has been deleted, but it is
     * your responsibility to ensure that the outputDir used solely for files generated through
     * this utility and all files are written as part of single run.
     *
     * Defauls to retaining all extraneous files.
     */
    removeExtraneous: z.enum([
        'never',
        'interactively',
        'all'
    ]).nullish(),

    /**
     * Support injection of raw content in the generated files.
     * This is useful for adding things like eslint-disable, additional exports etc.
     *
     * @see RawContent
     */
    rawContent: RawContentSchema.nullish(),

    /**
     * Wrap inferred types before exporting - this is useful to restrict
     * the types used for insert/update etc. beyond what the database permits.
     *
     * Eg. We can hint that updatedAt must be set whenever record is updated
     *
     * @see TypeWapper
     */
    typeWrappers: TypeWrapperSchema.array().nullish(),
});

/**
 * Generator options
 */
export interface GeneratorOpts extends z.input<typeof GeneratorOptsSchema> {}
