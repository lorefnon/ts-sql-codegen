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
- [writtenFiles](Generator.md#writtenfiles)

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
- [getCrudRepoNameFromTableName](Generator.md#getcrudreponamefromtablename)
- [getFieldNameForColumn](Generator.md#getfieldnameforcolumn)
- [getFieldType](Generator.md#getfieldtype)
- [getIdPrefix](Generator.md#getidprefix)
- [getImportPathForOutputPath](Generator.md#getimportpathforoutputpath)
- [getInstanceNameFromTableName](Generator.md#getinstancenamefromtablename)
- [getOutputFileName](Generator.md#getoutputfilename)
- [getOutputFilePath](Generator.md#getoutputfilepath)
- [getPascalCasedTableName](Generator.md#getpascalcasedtablename)
- [getRepoInput](Generator.md#getrepoinput)
- [getRowTypePrefix](Generator.md#getrowtypeprefix)
- [getTableKind](Generator.md#gettablekind)
- [getTableTemplateInput](Generator.md#gettabletemplateinput)
- [getTypeImports](Generator.md#gettypeimports)
- [getUtilImports](Generator.md#getutilimports)
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

[src/generator.ts:76](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L76)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`<`HandlebarsTemplateDelegate`<`any`\>\> & `MemoizedFunction`

#### Defined in

[src/generator.ts:89](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L89)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => { `columnName`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `columnType`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `generatedField`: `Object` ; `tableName`: `undefined` \| ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[src/generator.ts:81](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L81)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[src/generator.ts:85](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L85)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[src/generator.ts:74](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L74)

___

### naming

• `Protected` **naming**: `NamingOptions`

#### Defined in

[src/generator.ts:71](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L71)

___

### opts

• `Protected` **opts**: [`GeneratorOpts`](../interfaces/GeneratorOpts.md)

#### Defined in

[src/generator.ts:70](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L70)

___

### writtenFiles

• `Private` **writtenFiles**: `Set`<`string`\>

#### Defined in

[src/generator.ts:73](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L73)

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

[src/generator.ts:379](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L379)

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

[src/generator.ts:571](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L571)

___

### findPrimaryKey

▸ `Protected` **findPrimaryKey**(`table`): `undefined` \| ``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`undefined` \| ``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  }

#### Defined in

[src/generator.ts:658](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L658)

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

[src/generator.ts:337](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L337)

___

### generate

▸ **generate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/generator.ts:94](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L94)

___

### generateTableMapper

▸ `Protected` **generateTableMapper**(`table`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/generator.ts:301](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L301)

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

[src/generator.ts:461](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L461)

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

[src/generator.ts:360](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L360)

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

[src/generator.ts:540](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L540)

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

[src/generator.ts:500](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L500)

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

[src/generator.ts:520](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L520)

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

[src/generator.ts:349](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L349)

___

### getCrudRepoNameFromTableName

▸ `Protected` **getCrudRepoNameFromTableName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:496](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L496)

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

[src/generator.ts:602](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L602)

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

[src/generator.ts:616](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L616)

___

### getIdPrefix

▸ `Protected` **getIdPrefix**(`table`): `undefined` \| ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/generator.ts:325](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L325)

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

[src/generator.ts:447](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L447)

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

[src/generator.ts:512](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L512)

___

### getOutputFileName

▸ `Protected` **getOutputFileName**(`table`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:654](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L654)

___

### getOutputFilePath

▸ `Protected` **getOutputFilePath**(`table`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:649](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L649)

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

[src/generator.ts:536](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L536)

___

### getRepoInput

▸ `Protected` **getRepoInput**(`tableName`, `tableKind`, `pkField?`): ``null`` \| { `className`: `string` ; `methods`: `Record`<`string`, `string`\>  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |
| `pkField?` | `FieldTmplInput` |

#### Returns

``null`` \| { `className`: `string` ; `methods`: `Record`<`string`, `string`\>  }

#### Defined in

[src/generator.ts:268](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L268)

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

[src/generator.ts:508](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L508)

___

### getTableKind

▸ `Protected` **getTableKind**(`table`): ``null`` \| `TableKind`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

``null`` \| `TableKind`

#### Defined in

[src/generator.ts:134](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L134)

___

### getTableTemplateInput

▸ `Protected` **getTableTemplateInput**(`table`, `tableKind`, `filePath`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |
| `filePath` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/generator.ts:142](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L142)

___

### getTypeImports

▸ `Protected` **getTypeImports**(`outputFilePath`, `fields`, `generateRepo`): `ImportTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputFilePath` | `string` |
| `fields` | `FieldTmplInput`[] |
| `generateRepo` | `boolean` |

#### Returns

`ImportTmplInput`[]

#### Defined in

[src/generator.ts:399](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L399)

___

### getUtilImports

▸ `Protected` **getUtilImports**(`colSetName`, `generateRepo`): `ImportTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `colSetName` | ``null`` \| `string` |
| `generateRepo` | `boolean` |

#### Returns

`ImportTmplInput`[]

#### Defined in

[src/generator.ts:435](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L435)

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

[src/generator.ts:587](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L587)

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

[src/generator.ts:544](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L544)

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

[src/generator.ts:555](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L555)

___

### postProcessOutput

▸ `Protected` **postProcessOutput**(`output`, `_table`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `string` |
| `_table` | `Object` |
| `_table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `_table.comment` | `undefined` \| ``null`` \| `string` |
| `_table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `_table.name` | `string` |
| `_table.type` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generator.ts:485](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L485)

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

[src/generator.ts:481](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L481)

___

### shouldProcess

▸ `Protected` **shouldProcess**(`table`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/generator.ts:114](https://github.com/lorefnon/ts-sql-codegen/blob/21e0df5/src/generator.ts#L114)
