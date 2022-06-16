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

[field-mappings.ts:30](https://github.com/lorefnon/ts-sql-codegen/blob/311f9c8/src/field-mappings.ts#L30)

___

### columnType

• **columnType**: `undefined` \| ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match column type (in database)

#### Inherited from

z.TypeOf.columnType

#### Defined in

[field-mappings.ts:36](https://github.com/lorefnon/ts-sql-codegen/blob/311f9c8/src/field-mappings.ts#L36)

___

### generatedField

• **generatedField**: ``false`` \| { `name`: `undefined` \| ``null`` \| `string` ; `type`: `undefined` \| ``null`` \| { dbTypeName?: string \| null \| undefined; tsTypeName?: string \| null \| undefined; adapter?: { importPath?: string \| null \| undefined; name: string; } \| null \| undefined; }  }

Can be used to customize the field name or type mapping

Set to false to omit mapping of this field

#### Inherited from

z.TypeOf.generatedField

#### Defined in

[field-mappings.ts:43](https://github.com/lorefnon/ts-sql-codegen/blob/311f9c8/src/field-mappings.ts#L43)

___

### tableName

• **tableName**: `undefined` \| ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match table name

#### Inherited from

z.TypeOf.tableName

#### Defined in

[field-mappings.ts:33](https://github.com/lorefnon/ts-sql-codegen/blob/311f9c8/src/field-mappings.ts#L33)
