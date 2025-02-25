[ts-sql-codegen](../README.md) / TableInclusion

# Interface: TableInclusion

## Hierarchy

- `input`\<typeof `TableInclusionSchema`\>

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

z.input.exclude

#### Defined in

[src/generator-options.ts:14](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator-options.ts#L14)

___

### include

• `Optional` **include**: ``null`` \| (`string` \| `RegExp`)[]

Tables to be included - identified by qualified table name
or regular expression

#### Inherited from

z.input.include

#### Defined in

[src/generator-options.ts:9](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator-options.ts#L9)
