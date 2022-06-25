[ts-sql-codegen](../README.md) / TableInclusion

# Interface: TableInclusion

## Hierarchy

- `TypeOf`<typeof `TableInclusionSchema`\>

  ↳ **`TableInclusion`**

## Table of contents

### Properties

- [exclude](TableInclusion.md#exclude)
- [include](TableInclusion.md#include)

## Properties

### exclude

• **exclude**: `undefined` \| ``null`` \| (`string` \| `RegExp`)[]

Tables to be excluded - identified by qualified table name
or regular expression

#### Inherited from

z.TypeOf.exclude

#### Defined in

[generator-options.ts:14](https://github.com/lorefnon/ts-sql-codegen/blob/f52c780/src/generator-options.ts#L14)

___

### include

• **include**: `undefined` \| ``null`` \| (`string` \| `RegExp`)[]

Tables to be included - identified by qualified table name
or regular expression

#### Inherited from

z.TypeOf.include

#### Defined in

[generator-options.ts:9](https://github.com/lorefnon/ts-sql-codegen/blob/f52c780/src/generator-options.ts#L9)
