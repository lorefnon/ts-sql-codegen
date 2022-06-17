[ts-sql-codegen](../README.md) / GeneratedField

# Interface: GeneratedField

## Hierarchy

- `TypeOf`<typeof `GeneratedFieldSchema`\>

  ↳ **`GeneratedField`**

## Table of contents

### Properties

- [isComputed](GeneratedField.md#iscomputed)
- [name](GeneratedField.md#name)
- [type](GeneratedField.md#type)

## Properties

### isComputed

• **isComputed**: `undefined` \| ``null`` \| `boolean`

#### Inherited from

z.TypeOf.isComputed

#### Defined in

[field-mappings.ts:56](https://github.com/lorefnon/ts-sql-codegen/blob/e632c03/src/field-mappings.ts#L56)

___

### name

• **name**: `undefined` \| ``null`` \| `string`

#### Inherited from

z.TypeOf.name

#### Defined in

[field-mappings.ts:55](https://github.com/lorefnon/ts-sql-codegen/blob/e632c03/src/field-mappings.ts#L55)

___

### type

• **type**: `undefined` \| ``null`` \| { `adapter`: `undefined` \| ``null`` \| { importPath?: string \| null \| undefined; name: string; } ; `dbType`: `undefined` \| ``null`` \| { name: string; } ; `kind`: `undefined` \| ``null`` \| ``"custom"`` \| ``"enum"`` ; `tsType`: `undefined` \| ``null`` \| { importPath?: string \| null \| undefined; name: string; }  }

#### Inherited from

z.TypeOf.type

#### Defined in

[field-mappings.ts:54](https://github.com/lorefnon/ts-sql-codegen/blob/e632c03/src/field-mappings.ts#L54)
