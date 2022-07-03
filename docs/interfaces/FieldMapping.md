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

[field-mappings.ts:103](https://github.com/lorefnon/ts-sql-codegen/blob/7c76b75/src/field-mappings.ts#L103)

___

### columnType

• **columnType**: `undefined` \| ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match column type (in database)

This will be used to match against the type name as
present in the tbls output schema yaml file.

#### Inherited from

z.TypeOf.columnType

#### Defined in

[field-mappings.ts:114](https://github.com/lorefnon/ts-sql-codegen/blob/7c76b75/src/field-mappings.ts#L114)

___

### generatedField

• **generatedField**: ``false`` \| { `isComputed`: `undefined` \| ``null`` \| `boolean` ; `name`: `undefined` \| ``null`` \| `string` ; `type`: `undefined` \| ``null`` \| { kind?: "custom" \| "enum" \| null \| undefined; dbType?: { name: string; } \| null \| undefined; tsType?: { importPath?: string \| null \| undefined; isDefault?: boolean \| null \| undefined; isRelative?: boolean \| ... 1 more ... \| undefined; name: string; } \| null \| undefined; adapter?: { ...; } \| ... 1 more ... \| undefin...  }

Can be used to customize the field name or type mapping
in the generated field.

Set to false to omit mapping of this field

#### Inherited from

z.TypeOf.generatedField

#### Defined in

[field-mappings.ts:122](https://github.com/lorefnon/ts-sql-codegen/blob/7c76b75/src/field-mappings.ts#L122)

___

### tableName

• **tableName**: `undefined` \| ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match table name

#### Inherited from

z.TypeOf.tableName

#### Defined in

[field-mappings.ts:106](https://github.com/lorefnon/ts-sql-codegen/blob/7c76b75/src/field-mappings.ts#L106)
