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

#### Inherited from

z.TypeOf.columnName

#### Defined in

field-mappings.ts:24

___

### columnType

• **columnType**: `undefined` \| ``null`` \| `string` \| `RegExp`

#### Inherited from

z.TypeOf.columnType

#### Defined in

field-mappings.ts:26

___

### generatedField

• **generatedField**: `Object` = `GeneratedFieldSchema`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `undefined` \| ``null`` \| `string` |
| `type` | `undefined` \| ``null`` \| { adapter?: { name: string; importPath: string; } \| null \| undefined; name: string; } |

#### Inherited from

z.TypeOf.generatedField

#### Defined in

field-mappings.ts:27

___

### tableName

• **tableName**: `undefined` \| ``null`` \| `string` \| `RegExp`

#### Inherited from

z.TypeOf.tableName

#### Defined in

field-mappings.ts:25
