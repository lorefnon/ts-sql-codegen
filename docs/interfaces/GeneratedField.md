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

[src/field-mappings.ts:93](https://github.com/lorefnon/ts-sql-codegen/blob/fa545e4/src/field-mappings.ts#L93)

___

### isComputed

• **isComputed**: `undefined` \| ``null`` \| `boolean`

#### Inherited from

z.TypeOf.isComputed

#### Defined in

[src/field-mappings.ts:91](https://github.com/lorefnon/ts-sql-codegen/blob/fa545e4/src/field-mappings.ts#L91)

___

### isOptional

• **isOptional**: `undefined` \| ``null`` \| `boolean`

#### Inherited from

z.TypeOf.isOptional

#### Defined in

[src/field-mappings.ts:92](https://github.com/lorefnon/ts-sql-codegen/blob/fa545e4/src/field-mappings.ts#L92)

___

### name

• **name**: `undefined` \| ``null`` \| `string`

#### Inherited from

z.TypeOf.name

#### Defined in

[src/field-mappings.ts:90](https://github.com/lorefnon/ts-sql-codegen/blob/fa545e4/src/field-mappings.ts#L90)

___

### type

• **type**: `undefined` \| ``null`` \| { `adapter`: `undefined` \| ``null`` \| { name: string; importPath?: string \| null \| undefined; isDefault?: boolean \| null \| undefined; isRelative?: boolean \| null \| undefined; } ; `dbType`: `undefined` \| ``null`` \| { name: string; } ; `kind`: `undefined` \| ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` ; `tsType`: `undefined` \| ``null`` \| { name: string; importPath?: string \| null \| undefined; isDefault?: boolean \| null \| undefined; isRelative?: boolean \| null \| undefined; }  }

#### Inherited from

z.TypeOf.type

#### Defined in

[src/field-mappings.ts:89](https://github.com/lorefnon/ts-sql-codegen/blob/fa545e4/src/field-mappings.ts#L89)
