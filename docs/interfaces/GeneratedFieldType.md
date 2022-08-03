[ts-sql-codegen](../README.md) / GeneratedFieldType

# Interface: GeneratedFieldType

## Hierarchy

- `TypeOf`<typeof `GeneratedFieldTypeSchema`\>

  ↳ **`GeneratedFieldType`**

## Table of contents

### Properties

- [adapter](GeneratedFieldType.md#adapter)
- [dbType](GeneratedFieldType.md#dbtype)
- [kind](GeneratedFieldType.md#kind)
- [tsType](GeneratedFieldType.md#tstype)

## Properties

### adapter

• **adapter**: `undefined` \| ``null`` \| { `importPath`: `undefined` \| ``null`` \| `string` ; `isDefault`: `undefined` \| ``null`` \| `boolean` ; `isRelative`: `undefined` \| ``null`` \| `boolean` ; `name`: `string`  }

Specify a type adapter for the generated field.

If not present, we will attempt to use GeneratorOpts.common.typeAdapter.importPath or throw if absent.

#### Inherited from

z.TypeOf.adapter

#### Defined in

[field-mappings.ts:82](https://github.com/lorefnon/ts-sql-codegen/blob/76587ea/src/field-mappings.ts#L82)

___

### dbType

• **dbType**: `undefined` \| ``null`` \| { `name`: `string`  }

This name is a database type identifier as expected by ts-sql-query

These names are not database specific and may not match FieldMappingSchema.columnType eg. for database level type (which tbls outputs in the schema yaml) can be varchar but the columnType that ts-sql-query uses will be 'string'

#### Inherited from

z.TypeOf.dbType

#### Defined in

[field-mappings.ts:66](https://github.com/lorefnon/ts-sql-codegen/blob/76587ea/src/field-mappings.ts#L66)

___

### kind

• **kind**: `undefined` \| ``null`` \| ``"custom"`` \| ``"enum"``

Specify that this field uses a custom database type or an enum type

#### Inherited from

z.TypeOf.kind

#### Defined in

[field-mappings.ts:60](https://github.com/lorefnon/ts-sql-codegen/blob/76587ea/src/field-mappings.ts#L60)

___

### tsType

• **tsType**: `undefined` \| ``null`` \| { `importPath`: `undefined` \| ``null`` \| `string` ; `isDefault`: `undefined` \| ``null`` \| `boolean` ; `isRelative`: `undefined` \| ``null`` \| `boolean` ; `name`: `string`  }

If present, used as a generic type argument to field factory. This is typically useful when
dealing with custom database types or enum types.

If importPath is not present, then an import will not be added. This can result in a compile time error
if the type is not globally available.

#### Inherited from

z.TypeOf.tsType

#### Defined in

[field-mappings.ts:75](https://github.com/lorefnon/ts-sql-codegen/blob/76587ea/src/field-mappings.ts#L75)
