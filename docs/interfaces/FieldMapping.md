[ts-sql-codegen](../README.md) / FieldMapping

# Interface: FieldMapping

## Hierarchy

- `TypeOf`\<typeof `FieldMappingSchema`\>

  ↳ **`FieldMapping`**

## Table of contents

### Properties

- [columnName](FieldMapping.md#columnname)
- [columnType](FieldMapping.md#columntype)
- [comment](FieldMapping.md#comment)
- [generatedField](FieldMapping.md#generatedfield)
- [tableName](FieldMapping.md#tablename)

## Properties

### columnName

• `Optional` **columnName**: ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match column name

#### Inherited from

z.TypeOf.columnName

#### Defined in

[src/field-mappings.ts:105](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/field-mappings.ts#L105)

___

### columnType

• `Optional` **columnType**: ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match column type (in database)

This will be used to match against the type name as
present in the tbls output schema yaml file.

#### Inherited from

z.TypeOf.columnType

#### Defined in

[src/field-mappings.ts:116](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/field-mappings.ts#L116)

___

### comment

• `Optional` **comment**: ``null`` \| `string`

#### Inherited from

z.TypeOf.comment

#### Defined in

[src/field-mappings.ts:126](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/field-mappings.ts#L126)

___

### generatedField

• **generatedField**: ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }  }  } & `undefined` \| ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }  }  }

Can be used to customize the field name or type mapping
in the generated field.

Set to false to omit mapping of this field

#### Inherited from

z.TypeOf.generatedField

#### Defined in

[src/field-mappings.ts:124](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/field-mappings.ts#L124)

[src/field-mappings.ts:124](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/field-mappings.ts#L124)

___

### tableName

• `Optional` **tableName**: ``null`` \| `string` \| `RegExp`

Optional criteria (string or regex) to match table name

#### Inherited from

z.TypeOf.tableName

#### Defined in

[src/field-mappings.ts:108](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/field-mappings.ts#L108)
