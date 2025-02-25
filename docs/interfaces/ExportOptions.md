[ts-sql-codegen](../README.md) / ExportOptions

# Interface: ExportOptions

## Hierarchy

- `input`\<typeof `ExportOptionsSchema`\>

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

• `Optional` **columnTypeMappingInterface**: `boolean`

Additionally export a column types mapping useful for constructing filter type
for dynamic conditions.

Example:
    export type UserCols = {
        id: 'int'
        name: 'string'
    }

#### Inherited from

z.input.columnTypeMappingInterface

#### Defined in

[src/generator-options.ts:113](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator-options.ts#L113)

___

### crudRepository

• `Optional` **crudRepository**: `boolean`

Generate a repository class to simplify common single-table CRUD operations

This is currently only supported for tables having an id column as primary key

#### Inherited from

z.input.crudRepository

#### Defined in

[src/generator-options.ts:120](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator-options.ts#L120)

___

### extractedColumns

• `Optional` **extractedColumns**: `boolean`

Additionally export the extracted columns (Useful for select * queries etc.)

Example:
    export const tUserCols = extractColumnsFrom(tUser)

#### Inherited from

z.input.extractedColumns

#### Defined in

[src/generator-options.ts:101](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator-options.ts#L101)

___

### rowTypes

• `Optional` **rowTypes**: `boolean` \| \{ `asInterface`: `boolean`  }

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

z.input.rowTypes

#### Defined in

[src/generator-options.ts:70](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator-options.ts#L70)

___

### tableClasses

• `Optional` **tableClasses**: `boolean`

If set to false, prevents the table class from getting exported

This is useful in conjunction with tableInstances, if you only want to
export the table instance

#### Inherited from

z.input.tableClasses

#### Defined in

[src/generator-options.ts:47](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator-options.ts#L47)

___

### tableInstances

• `Optional` **tableInstances**: `boolean`

In addition to the table class, also expose instantiated instance of table class

Example:
    export class UserTable extends Table<DBConnection, "User"> { ... }

    export const tUserTable = new UserTable() // <----

#### Inherited from

z.input.tableInstances

#### Defined in

[src/generator-options.ts:39](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator-options.ts#L39)

___

### valuesTypes

• `Optional` **valuesTypes**: `boolean` \| \{ `asInterface`: `boolean`  }

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

z.input.valuesTypes

#### Defined in

[src/generator-options.ts:93](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator-options.ts#L93)
