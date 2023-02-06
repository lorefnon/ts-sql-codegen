[ts-sql-codegen](../README.md) / ImportedItem

# Interface: ImportedItem

Specifies options to construct an import

Note that unless isRelative is specified as false, the import will be
resolved relative to the cwd from where generator is invoked and
then converted to a relative path relative to the generated file

Examples: 
   When generated file is located at src/db/tables/some-table.ts and generator
   is run from project root

   Config: `{ name: "FooAdapter", importPath: 'src/db/adapters/foo-adapter'}`
   Generates:  `import { FooAdapter } from '../adapters/foo-adapter'`

   Config: `{ name: "FooAdapter", isDefault: true, importPath: 'src/db/adapters/foo-adapter'}`
   Generates: `import FooAdapter from '../adapters/foo-adapter'`

   Config: `{ name: "FooAdapter", isRelative: false, importPath: 'external-lib/foo-adapter'}`
   Generates: `import { FooAdapter } from '../adapters';`

## Hierarchy

- `TypeOf`<typeof `ImportedItemSchema`\>

  ↳ **`ImportedItem`**

## Table of contents

### Properties

- [importPath](ImportedItem.md#importpath)
- [isDefault](ImportedItem.md#isdefault)
- [isRelative](ImportedItem.md#isrelative)
- [name](ImportedItem.md#name)

## Properties

### importPath

• **importPath**: `undefined` \| ``null`` \| `string`

Path from which we should import

#### Inherited from

z.TypeOf.importPath

#### Defined in

[src/field-mappings.ts:16](https://github.com/lorefnon/ts-sql-codegen/blob/d38c7e4/src/field-mappings.ts#L16)

___

### isDefault

• **isDefault**: `undefined` \| ``null`` \| `boolean`

Whether this is a default import

**`Default`**

false

#### Inherited from

z.TypeOf.isDefault

#### Defined in

[src/field-mappings.ts:23](https://github.com/lorefnon/ts-sql-codegen/blob/d38c7e4/src/field-mappings.ts#L23)

___

### isRelative

• **isRelative**: `undefined` \| ``null`` \| `boolean`

Whether this is a relative import

**`Default`**

true

#### Inherited from

z.TypeOf.isRelative

#### Defined in

[src/field-mappings.ts:30](https://github.com/lorefnon/ts-sql-codegen/blob/d38c7e4/src/field-mappings.ts#L30)

___

### name

• **name**: `string`

Name of import

#### Inherited from

z.TypeOf.name

#### Defined in

[src/field-mappings.ts:13](https://github.com/lorefnon/ts-sql-codegen/blob/d38c7e4/src/field-mappings.ts#L13)
