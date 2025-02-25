[ts-sql-codegen](../README.md) / GeneratedField

# Interface: GeneratedField

Specifies options for the generated field mapping

The options here are ts-sql-query specific

## Hierarchy

- `TypeOf`\<typeof `GeneratedFieldSchema`\>

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

• `Optional` **hasDefault**: ``null`` \| `boolean`

#### Inherited from

z.TypeOf.hasDefault

#### Defined in

[src/field-mappings.ts:93](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/field-mappings.ts#L93)

___

### isComputed

• `Optional` **isComputed**: ``null`` \| `boolean`

#### Inherited from

z.TypeOf.isComputed

#### Defined in

[src/field-mappings.ts:91](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/field-mappings.ts#L91)

___

### isOptional

• `Optional` **isOptional**: ``null`` \| `boolean`

#### Inherited from

z.TypeOf.isOptional

#### Defined in

[src/field-mappings.ts:92](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/field-mappings.ts#L92)

___

### name

• `Optional` **name**: ``null`` \| `string`

#### Inherited from

z.TypeOf.name

#### Defined in

[src/field-mappings.ts:90](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/field-mappings.ts#L90)

___

### type

• `Optional` **type**: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }  }

#### Inherited from

z.TypeOf.type

#### Defined in

[src/field-mappings.ts:89](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/field-mappings.ts#L89)
