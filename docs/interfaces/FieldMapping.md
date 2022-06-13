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

[field-mappings.ts:25](https://github.com/lorefnon/ts-sql-codegen/blob/f0ff5e7/src/field-mappings.ts#L25)

___

### columnType

• **columnType**: `undefined` \| ``null`` \| `string` \| `RegExp`

#### Inherited from

z.TypeOf.columnType

#### Defined in

[field-mappings.ts:27](https://github.com/lorefnon/ts-sql-codegen/blob/f0ff5e7/src/field-mappings.ts#L27)

___

### generatedField

• **generatedField**: `Object` = `GeneratedFieldSchema`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `undefined` \| ``null`` \| `string` |
| `type` | `undefined` \| ``null`` \| { dbTypeName?: string \| null \| undefined; tsTypeName?: string \| null \| undefined; adapter?: { importPath?: string \| null \| undefined; name: string; } \| null \| undefined; } |

#### Inherited from

z.TypeOf.generatedField

#### Defined in

[field-mappings.ts:28](https://github.com/lorefnon/ts-sql-codegen/blob/f0ff5e7/src/field-mappings.ts#L28)

___

### tableName

• **tableName**: `undefined` \| ``null`` \| `string` \| `RegExp`

#### Inherited from

z.TypeOf.tableName

#### Defined in

[field-mappings.ts:26](https://github.com/lorefnon/ts-sql-codegen/blob/f0ff5e7/src/field-mappings.ts#L26)
