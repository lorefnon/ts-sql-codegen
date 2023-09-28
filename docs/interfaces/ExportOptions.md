[ts-sql-codegen](../README.md) / ExportOptions

# Interface: ExportOptions

## Hierarchy

- `TypeOf`<typeof `ExportOptionsSchema`\>

  ↳ **`ExportOptions`**

## Table of contents

### Properties

- [columnTypeMappingInterface](ExportOptions.md#columntypemappinginterface)
- [crudRepository](ExportOptions.md#crudrepository)
- [extractedColumns](ExportOptions.md#extractedcolumns)
- [rowTypes](ExportOptions.md#rowtypes)
- [tableClasses](ExportOptions.md#tableclasses)
- [tableInstances](ExportOptions.md#tableinstances)
- [valuesTypes](ExportOptions.md#valuestypes)

## Properties

### columnTypeMappingInterface

• **columnTypeMappingInterface**: `boolean`

Additionally export a column types mapping useful for constructing filter type
for dynamic conditions.

Example:
    export type UserCols = {
        id: 'int'
        name: 'string'
    }

#### Inherited from

z.TypeOf.columnTypeMappingInterface

#### Defined in

[src/generator-options.ts:102](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L102)

[src/generator-options.ts:102](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L102)

___

### crudRepository

• **crudRepository**: `boolean`

Generate a repository class to simplify common single-table CRUD operations

This is currently only supported for tables having an id column as primary key

#### Inherited from

z.TypeOf.crudRepository

#### Defined in

[src/generator-options.ts:109](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L109)

[src/generator-options.ts:109](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L109)

___

### extractedColumns

• **extractedColumns**: `boolean`

Additionally export the extracted columns (Useful for select * queries etc.)

Example:
    export const tUserCols = extractColumnsFrom(tUser)

#### Inherited from

z.TypeOf.extractedColumns

#### Defined in

[src/generator-options.ts:90](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L90)

[src/generator-options.ts:90](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L90)

___

### rowTypes

• **rowTypes**: `boolean`

Additionally export the row types associated with table

Example:
    import { InsertableRow, UpdatableRow, SelectedRow } from "ts-sql-query/extras/types"

    export class UserTable extends Table<DBConnection, "User"> { ... }

    // Type of user row that can be used for insert
    // Here computed columns will not be present and columns with defaults will be optional
    export type UserIRow = InsertableRow<UserTable>

    // Type of user row that can be used for update
    // Here computed columns will not be present and all fields will be optional
    export type UserURow = UpdatableRow<UserTable>

    // Type of user row that is returned from select
    // Here computed columns will be present, only nullable fields will be optional
    export type UserSRow = SelectedRow<UserTable>

#### Inherited from

z.TypeOf.rowTypes

#### Defined in

[src/generator-options.ts:59](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L59)

[src/generator-options.ts:59](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L59)

___

### tableClasses

• **tableClasses**: `boolean`

If set to false, prevents the table class from getting exported

This is useful in conjunction with tableInstances, if you only want to
export the table instance

#### Inherited from

z.TypeOf.tableClasses

#### Defined in

[src/generator-options.ts:36](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L36)

[src/generator-options.ts:36](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L36)

___

### tableInstances

• **tableInstances**: `boolean`

In addition to the table class, also expose instantiated instance of table class

Example:
    export class UserTable extends Table<DBConnection, "User"> { ... }

    export const tUserTable = new UserTable() // <----

#### Inherited from

z.TypeOf.tableInstances

#### Defined in

[src/generator-options.ts:28](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L28)

[src/generator-options.ts:28](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L28)

___

### valuesTypes

• **valuesTypes**: `boolean`

Additionally export the value types associated with table

Example:
    import { InsertableValues, UpdatableValues, SelectedValues } from "ts-sql-query/extras/types"

    export class UserTable extends Table<DBConnection, "User"> { ... }

    // Type of user values that can be used for insert
    // Here computed columns will not be present and columns with defaults will be optional
    export type InsertableUser = InsertableValues<UserTable>

    // Type of user values that can be used for update
    // Here computed columns will not be present and all fields will be optional
    export type UpdatableUser = UpdatableValues<UserTable>

    // Type of user values that is returned from select
    // Here computed columns will be present, only nullable fields will be optional
    export type User = SelectedValues<UserTable>

#### Inherited from

z.TypeOf.valuesTypes

#### Defined in

[src/generator-options.ts:82](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L82)

[src/generator-options.ts:82](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator-options.ts#L82)
