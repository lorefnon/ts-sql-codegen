[ts-sql-codegen](../README.md) / ExportOptions

# Interface: ExportOptions

## Hierarchy

- `TypeOf`<typeof `ExportOptionsSchema`\>

  ↳ **`ExportOptions`**

## Table of contents

### Properties

- [rowTypes](ExportOptions.md#rowtypes)
- [tableClasses](ExportOptions.md#tableclasses)
- [tableInstances](ExportOptions.md#tableinstances)

## Properties

### rowTypes

• **rowTypes**: `boolean`

In addition to table class also export the row types associated with table

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

[generator-options.ts:59](https://github.com/lorefnon/ts-sql-codegen/blob/7c76b75/src/generator-options.ts#L59)

___

### tableClasses

• **tableClasses**: `boolean`

If set to false, prevents the table class from getting exported

This is useful in conjunction with tableInstances, if you only want to
export the table instance

#### Inherited from

z.TypeOf.tableClasses

#### Defined in

[generator-options.ts:36](https://github.com/lorefnon/ts-sql-codegen/blob/7c76b75/src/generator-options.ts#L36)

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

[generator-options.ts:28](https://github.com/lorefnon/ts-sql-codegen/blob/7c76b75/src/generator-options.ts#L28)
