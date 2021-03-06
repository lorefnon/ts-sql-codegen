[ts-sql-codegen](../README.md) / GeneratedField

# Interface: GeneratedField

Specifies options for the generated field mapping

The options here are ts-sql-query specific

## Hierarchy

- `TypeOf`<typeof `GeneratedFieldSchema`\>

  ↳ **`GeneratedField`**

## Table of contents

### Properties

- [hasDefault](GeneratedField.md#hasdefault)
- [isComputed](GeneratedField.md#iscomputed)
- [isOptional](GeneratedField.md#isoptional)
- [name](GeneratedField.md#name)
- [type](GeneratedField.md#type)

## Properties

### hasDefault

• **hasDefault**: `undefined` \| ``null`` \| `boolean`

#### Inherited from

z.TypeOf.hasDefault

#### Defined in

[field-mappings.ts:93](https://github.com/lorefnon/ts-sql-codegen/blob/86aae36/src/field-mappings.ts#L93)

___

### isComputed

• **isComputed**: `undefined` \| ``null`` \| `boolean`

#### Inherited from

z.TypeOf.isComputed

#### Defined in

[field-mappings.ts:91](https://github.com/lorefnon/ts-sql-codegen/blob/86aae36/src/field-mappings.ts#L91)

___

### isOptional

• **isOptional**: `undefined` \| ``null`` \| `boolean`

#### Inherited from

z.TypeOf.isOptional

#### Defined in

[field-mappings.ts:92](https://github.com/lorefnon/ts-sql-codegen/blob/86aae36/src/field-mappings.ts#L92)

___

### name

• **name**: `undefined` \| ``null`` \| `string`

#### Inherited from

z.TypeOf.name

#### Defined in

[field-mappings.ts:90](https://github.com/lorefnon/ts-sql-codegen/blob/86aae36/src/field-mappings.ts#L90)

___

### type

• **type**: `undefined` \| ``null`` \| { `adapter`: `undefined` \| ``null`` \| { importPath?: string \| null \| undefined; isDefault?: boolean \| null \| undefined; isRelative?: boolean \| null \| undefined; name: string; } ; `dbType`: `undefined` \| ``null`` \| { name: string; } ; `kind`: `undefined` \| ``null`` \| ``"custom"`` \| ``"enum"`` ; `tsType`: `undefined` \| ``null`` \| { importPath?: string \| null \| undefined; isDefault?: boolean \| null \| undefined; isRelative?: boolean \| null \| undefined; name: string; }  }

#### Inherited from

z.TypeOf.type

#### Defined in

[field-mappings.ts:89](https://github.com/lorefnon/ts-sql-codegen/blob/86aae36/src/field-mappings.ts#L89)
