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

[field-mappings.ts:59](https://github.com/lorefnon/ts-sql-codegen/blob/2a68dde/src/field-mappings.ts#L59)

___

### columnType

• **columnType**: `undefined` \| ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match column type (in database)

This will be used to match against the type name as
present in the tbls output schema yaml file.

#### Inherited from

z.TypeOf.columnType

#### Defined in

[field-mappings.ts:70](https://github.com/lorefnon/ts-sql-codegen/blob/2a68dde/src/field-mappings.ts#L70)

___

### generatedField

• **generatedField**: ``false`` \| { `isComputed`: `undefined` \| ``null`` \| `boolean` ; `name`: `undefined` \| ``null`` \| `string` ; `type`: `undefined` \| ``null`` \| { kind?: "custom" \| "enum" \| null \| undefined; dbType?: { name: string; } \| null \| undefined; tsType?: { importPath?: string \| null \| undefined; name: string; } \| null \| undefined; adapter?: { ...; } \| ... 1 more ... \| undefined; }  }

Can be used to customize the field name or type mapping
in the generated field.

Set to false to omit mapping of this field

#### Inherited from

z.TypeOf.generatedField

#### Defined in

[field-mappings.ts:78](https://github.com/lorefnon/ts-sql-codegen/blob/2a68dde/src/field-mappings.ts#L78)

___

### tableName

• **tableName**: `undefined` \| ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match table name

#### Inherited from

z.TypeOf.tableName

#### Defined in

[field-mappings.ts:62](https://github.com/lorefnon/ts-sql-codegen/blob/2a68dde/src/field-mappings.ts#L62)
