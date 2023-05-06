[ts-sql-codegen](../README.md) / FieldMapping

# Interface: FieldMapping

## Hierarchy

- `TypeOf`<typeof `FieldMappingSchema`\>

  ↳ **`FieldMapping`**

## Table of contents

### Properties

- [columnName](FieldMapping.md#columnname)
- [columnType](FieldMapping.md#columntype)
- [generatedField](FieldMapping.md#generatedfield)
- [tableName](FieldMapping.md#tablename)

## Properties

### columnName

• **columnName**: `undefined` \| ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match column name

#### Inherited from

z.TypeOf.columnName

#### Defined in

[src/field-mappings.ts:105](https://github.com/lorefnon/ts-sql-codegen/blob/a9c6e02/src/field-mappings.ts#L105)

___

### columnType

• **columnType**: `undefined` \| ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match column type (in database)

This will be used to match against the type name as
present in the tbls output schema yaml file.

#### Inherited from

z.TypeOf.columnType

#### Defined in

[src/field-mappings.ts:116](https://github.com/lorefnon/ts-sql-codegen/blob/a9c6e02/src/field-mappings.ts#L116)

___

### generatedField

• **generatedField**: `Object`

Can be used to customize the field name or type mapping
in the generated field.

Set to false to omit mapping of this field

#### Inherited from

z.TypeOf.generatedField

#### Defined in

[src/field-mappings.ts:124](https://github.com/lorefnon/ts-sql-codegen/blob/a9c6e02/src/field-mappings.ts#L124)

[src/field-mappings.ts:124](https://github.com/lorefnon/ts-sql-codegen/blob/a9c6e02/src/field-mappings.ts#L124)

___

### tableName

• **tableName**: `undefined` \| ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match table name

#### Inherited from

z.TypeOf.tableName

#### Defined in

[src/field-mappings.ts:108](https://github.com/lorefnon/ts-sql-codegen/blob/a9c6e02/src/field-mappings.ts#L108)
