[ts-sql-codegen](../README.md) / TableInclusion

# Interface: TableInclusion

## Hierarchy

- `TypeOf`\<typeof `TableInclusionSchema`\>

  ↳ **`TableInclusion`**

## Table of contents

### Properties

- [exclude](TableInclusion.md#exclude)
- [include](TableInclusion.md#include)

## Properties

### exclude

• `Optional` **exclude**: ``null`` \| (`string` \| `RegExp`)[]

Tables to be excluded - identified by qualified table name
or regular expression

#### Inherited from

z.TypeOf.exclude

#### Defined in

[src/generator-options.ts:14](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator-options.ts#L14)

___

### include

• `Optional` **include**: ``null`` \| (`string` \| `RegExp`)[]

Tables to be included - identified by qualified table name
or regular expression

#### Inherited from

z.TypeOf.include

#### Defined in

[src/generator-options.ts:9](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator-options.ts#L9)
