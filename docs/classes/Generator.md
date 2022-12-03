[ts-sql-codegen](../README.md) / Generator

# Class: Generator

Generator class for programmatic codegen.

Most common usage involves creating an instance and calling generate function:

```ts
const options = {
   schemaPath: './schema.yaml',
   connectionSourcePath: './connection-source.ts'
}
const generator = new Generator(options);
await generator.generate();
```

See [GeneratorOpts](../interfaces/GeneratorOpts.md) for configuration options.

For advanced use-cases, you can extend this class.
This enables you to use custom templates, pre/post processing of generated code
and custom logic for table/column/field mapping.

## Table of contents

### Constructors

- [constructor](Generator.md#constructor)

### Properties

- [getCompiledTemplate](Generator.md#getcompiledtemplate)
- [getFieldMappings](Generator.md#getfieldmappings)
- [getTemplatePath](Generator.md#gettemplatepath)
- [logger](Generator.md#logger)
- [naming](Generator.md#naming)
- [opts](Generator.md#opts)

### Methods

- [accumulateImports](Generator.md#accumulateimports)
- [doesColumnHaveDefault](Generator.md#doescolumnhavedefault)
- [findPrimaryKey](Generator.md#findprimarykey)
- [formatComment](Generator.md#formatcomment)
- [generate](Generator.md#generate)
- [generateTableMapper](Generator.md#generatetablemapper)
- [getAdapterImportPath](Generator.md#getadapterimportpath)
- [getAdapterImports](Generator.md#getadapterimports)
- [getCamelCasedTableName](Generator.md#getcamelcasedtablename)
- [getClassNameFromTableName](Generator.md#getclassnamefromtablename)
- [getColumnsObjectNameFromTableName](Generator.md#getcolumnsobjectnamefromtablename)
- [getConnectionSourceImportPath](Generator.md#getconnectionsourceimportpath)
- [getFieldNameForColumn](Generator.md#getfieldnameforcolumn)
- [getFieldType](Generator.md#getfieldtype)
- [getIdPrefix](Generator.md#getidprefix)
- [getImportPathForOutputPath](Generator.md#getimportpathforoutputpath)
- [getInstanceNameFromTableName](Generator.md#getinstancenamefromtablename)
- [getOutputFileName](Generator.md#getoutputfilename)
- [getOutputFilePath](Generator.md#getoutputfilepath)
- [getPascalCasedTableName](Generator.md#getpascalcasedtablename)
- [getRowTypePrefix](Generator.md#getrowtypeprefix)
- [getTableKind](Generator.md#gettablekind)
- [getTypeImports](Generator.md#gettypeimports)
- [isColumnComputed](Generator.md#iscolumncomputed)
- [isColumnOmitted](Generator.md#iscolumnomitted)
- [isColumnOptional](Generator.md#iscolumnoptional)
- [postProcessOutput](Generator.md#postprocessoutput)
- [preProcessTemplateInput](Generator.md#preprocesstemplateinput)
- [shouldProcess](Generator.md#shouldprocess)

## Constructors

### constructor

• **new Generator**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GeneratorOpts`](../interfaces/GeneratorOpts.md) |

#### Defined in

[generator.ts:75](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L75)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`<`HandlebarsTemplateDelegate`<`any`\>\> & `MemoizedFunction`

#### Defined in

[generator.ts:88](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L88)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => { `columnName`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `columnType`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `generatedField`: ``false`` \| { type?: { kind?: "custom" \| "customComparable" \| "enum" \| null \| undefined; dbType?: { name: string; } \| null \| undefined; tsType?: { importPath?: string \| null \| undefined; isDefault?: boolean \| ... 1 more ... \| undefined; isRelative?: boolean \| ... 1 more ... \| undefined; name: string; } \| null \| undefined; adapt... ; `tableName`: `undefined` \| ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[generator.ts:80](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L80)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[generator.ts:84](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L84)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[generator.ts:73](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L73)

___

### naming

• `Protected` **naming**: `NamingOptions`

#### Defined in

[generator.ts:72](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L72)

___

### opts

• `Protected` **opts**: [`GeneratorOpts`](../interfaces/GeneratorOpts.md)

#### Defined in

[generator.ts:71](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L71)

## Methods

### accumulateImports

▸ `Private` **accumulateImports**(`imports`, `defaultImports`): `ImportTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `imports` | `Map`<`string`, `Set`<`string`\>\> |
| `defaultImports` | `Map`<`string`, `Set`<`string`\>\> |

#### Returns

`ImportTmplInput`[]

#### Defined in

[generator.ts:313](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L313)

___

### doesColumnHaveDefault

▸ `Protected` **doesColumnHaveDefault**(`tableName`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment` | `undefined` \| ``null`` \| `string` |
| `col.default` | `any` |
| `col.name` | `string` |
| `col.nullable` | `undefined` \| `boolean` |
| `col.type` | `string` |

#### Returns

`boolean`

#### Defined in

[generator.ts:473](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L473)

___

### findPrimaryKey

▸ `Protected` **findPrimaryKey**(`table`): `undefined` \| ``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`undefined` \| ``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  }

#### Defined in

[generator.ts:560](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L560)

___

### formatComment

▸ `Protected` **formatComment**(`comment`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `comment` | `undefined` \| ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Defined in

[generator.ts:271](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L271)

___

### generate

▸ **generate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[generator.ts:93](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L93)

___

### generateTableMapper

▸ `Protected` **generateTableMapper**(`table`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generator.ts:137](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L137)

___

### getAdapterImportPath

▸ `Protected` **getAdapterImportPath**(`adapter`, `outputFilePath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | [`ImportedItem`](../interfaces/ImportedItem.md) |
| `outputFilePath` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:374](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L374)

___

### getAdapterImports

▸ `Protected` **getAdapterImports**(`outputFilePath`, `fields`): `ImportTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputFilePath` | `string` |
| `fields` | `FieldTmplInput`[] |

#### Returns

`ImportTmplInput`[]

#### Defined in

[generator.ts:294](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L294)

___

### getCamelCasedTableName

▸ `Private` **getCamelCasedTableName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:442](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L442)

___

### getClassNameFromTableName

▸ `Protected` **getClassNameFromTableName**(`tableName`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[generator.ts:402](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L402)

___

### getColumnsObjectNameFromTableName

▸ `Protected` **getColumnsObjectNameFromTableName**(`tableName`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[generator.ts:422](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L422)

___

### getConnectionSourceImportPath

▸ `Protected` **getConnectionSourceImportPath**(`outputFilePath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputFilePath` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:283](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L283)

___

### getFieldNameForColumn

▸ `Protected` **getFieldNameForColumn**(`tableName`, `col`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment` | `undefined` \| ``null`` \| `string` |
| `col.default` | `any` |
| `col.name` | `string` |
| `col.nullable` | `undefined` \| `boolean` |
| `col.type` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:504](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L504)

___

### getFieldType

▸ `Protected` **getFieldType**(`tableName`, `col`): [`GeneratedFieldType`](../interfaces/GeneratedFieldType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment` | `undefined` \| ``null`` \| `string` |
| `col.default` | `any` |
| `col.name` | `string` |
| `col.nullable` | `undefined` \| `boolean` |
| `col.type` | `string` |

#### Returns

[`GeneratedFieldType`](../interfaces/GeneratedFieldType.md)

#### Defined in

[generator.ts:518](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L518)

___

### getIdPrefix

▸ `Protected` **getIdPrefix**(`table`): `undefined` \| ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[generator.ts:259](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L259)

___

### getImportPathForOutputPath

▸ `Protected` **getImportPathForOutputPath**(`filePath`, `importPath`, `importedItem`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `importPath` | `string` |
| `importedItem` | [`ImportedItem`](../interfaces/ImportedItem.md) |

#### Returns

`string`

#### Defined in

[generator.ts:360](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L360)

___

### getInstanceNameFromTableName

▸ `Protected` **getInstanceNameFromTableName**(`tableName`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[generator.ts:414](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L414)

___

### getOutputFileName

▸ `Protected` **getOutputFileName**(`table`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[generator.ts:556](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L556)

___

### getOutputFilePath

▸ `Protected` **getOutputFilePath**(`table`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[generator.ts:551](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L551)

___

### getPascalCasedTableName

▸ `Private` **getPascalCasedTableName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:438](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L438)

___

### getRowTypePrefix

▸ `Protected` **getRowTypePrefix**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:410](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L410)

___

### getTableKind

▸ `Protected` **getTableKind**(`table`): ``null`` \| `TableKind`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

``null`` \| `TableKind`

#### Defined in

[generator.ts:129](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L129)

___

### getTypeImports

▸ `Protected` **getTypeImports**(`outputFilePath`, `fields`): `ImportTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputFilePath` | `string` |
| `fields` | `FieldTmplInput`[] |

#### Returns

`ImportTmplInput`[]

#### Defined in

[generator.ts:333](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L333)

___

### isColumnComputed

▸ `Protected` **isColumnComputed**(`tableName`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment` | `undefined` \| ``null`` \| `string` |
| `col.default` | `any` |
| `col.name` | `string` |
| `col.nullable` | `undefined` \| `boolean` |
| `col.type` | `string` |

#### Returns

`boolean`

#### Defined in

[generator.ts:489](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L489)

___

### isColumnOmitted

▸ `Protected` **isColumnOmitted**(`tableName`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment` | `undefined` \| ``null`` \| `string` |
| `col.default` | `any` |
| `col.name` | `string` |
| `col.nullable` | `undefined` \| `boolean` |
| `col.type` | `string` |

#### Returns

`boolean`

#### Defined in

[generator.ts:446](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L446)

___

### isColumnOptional

▸ `Protected` **isColumnOptional**(`tableName`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment` | `undefined` \| ``null`` \| `string` |
| `col.default` | `any` |
| `col.name` | `string` |
| `col.nullable` | `undefined` \| `boolean` |
| `col.type` | `string` |

#### Returns

`boolean`

#### Defined in

[generator.ts:457](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L457)

___

### postProcessOutput

▸ `Protected` **postProcessOutput**(`output`, `_table`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `string` |
| `_table` | `Object` |
| `_table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `_table.comment` | `undefined` \| ``null`` \| `string` |
| `_table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `_table.name` | `string` |
| `_table.type` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[generator.ts:398](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L398)

___

### preProcessTemplateInput

▸ `Protected` **preProcessTemplateInput**(`input`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[generator.ts:394](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L394)

___

### shouldProcess

▸ `Protected` **shouldProcess**(`table`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`boolean`

#### Defined in

[generator.ts:108](https://github.com/lorefnon/ts-sql-codegen/blob/7570018/src/generator.ts#L108)
