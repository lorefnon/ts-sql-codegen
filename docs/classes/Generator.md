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
- [extractTableName](Generator.md#extracttablename)
- [findPrimaryKey](Generator.md#findprimarykey)
- [formatComment](Generator.md#formatcomment)
- [generate](Generator.md#generate)
- [generateTableMapper](Generator.md#generatetablemapper)
- [getAdapterImportPath](Generator.md#getadapterimportpath)
- [getAdapterImports](Generator.md#getadapterimports)
- [getCamelCasedTableName](Generator.md#getcamelcasedtablename)
- [getColComment](Generator.md#getcolcomment)
- [getColMappingInput](Generator.md#getcolmappinginput)
- [getColMappingObjName](Generator.md#getcolmappingobjname)
- [getColSetName](Generator.md#getcolsetname)
- [getColumnsObjectName](Generator.md#getcolumnsobjectname)
- [getConnectionSourceImportPath](Generator.md#getconnectionsourceimportpath)
- [getCrudRepoName](Generator.md#getcrudreponame)
- [getFieldInput](Generator.md#getfieldinput)
- [getFieldNameForColumn](Generator.md#getfieldnameforcolumn)
- [getFieldType](Generator.md#getfieldtype)
- [getFieldsInput](Generator.md#getfieldsinput)
- [getIdPrefix](Generator.md#getidprefix)
- [getImportPathForOutputPath](Generator.md#getimportpathforoutputpath)
- [getInsertableRowTypeName](Generator.md#getinsertablerowtypename)
- [getInsertableValuesTypeName](Generator.md#getinsertablevaluestypename)
- [getOutputFileName](Generator.md#getoutputfilename)
- [getOutputFilePath](Generator.md#getoutputfilepath)
- [getPascalCasedTableName](Generator.md#getpascalcasedtablename)
- [getRepoInput](Generator.md#getrepoinput)
- [getRowTypeInputs](Generator.md#getrowtypeinputs)
- [getRowTypePrefix](Generator.md#getrowtypeprefix)
- [getSelectedRowTypeName](Generator.md#getselectedrowtypename)
- [getSelectedValuesTypeName](Generator.md#getselectedvaluestypename)
- [getTableKind](Generator.md#gettablekind)
- [getTableMapperClassName](Generator.md#gettablemapperclassname)
- [getTableMapperInstName](Generator.md#gettablemapperinstname)
- [getTableMapperInstanceName](Generator.md#gettablemapperinstancename)
- [getTableTemplateInput](Generator.md#gettabletemplateinput)
- [getTypeImports](Generator.md#gettypeimports)
- [getTypeWrapper](Generator.md#gettypewrapper)
- [getUpdatableRowTypeName](Generator.md#getupdatablerowtypename)
- [getUpdatableValuesTypeName](Generator.md#getupdatablevaluestypename)
- [getUtilImports](Generator.md#getutilimports)
- [getValuesTypeInputs](Generator.md#getvaluestypeinputs)
- [getWrappedTypeInput](Generator.md#getwrappedtypeinput)
- [isColumnComputed](Generator.md#iscolumncomputed)
- [isColumnOmitted](Generator.md#iscolumnomitted)
- [isColumnOptional](Generator.md#iscolumnoptional)
- [postProcessOutput](Generator.md#postprocessoutput)
- [preProcessTemplateInput](Generator.md#preprocesstemplateinput)
- [shouldProcess](Generator.md#shouldprocess)
- [wrapType](Generator.md#wraptype)

## Constructors

### constructor

• **new Generator**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GeneratorOpts`](../interfaces/GeneratorOpts.md) |

#### Defined in

[src/generator.ts:81](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L81)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`<`HandlebarsTemplateDelegate`<`any`\>\> & `MemoizedFunction`

#### Defined in

[src/generator.ts:94](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L94)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => { `columnName`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `columnType`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `comment`: `undefined` \| ``null`` \| `string` ; `generatedField`: `Object` ; `tableName`: `undefined` \| ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[src/generator.ts:86](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L86)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[src/generator.ts:90](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L90)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[src/generator.ts:79](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L79)

___

### naming

• `Protected` **naming**: `NamingOptions`

#### Defined in

[src/generator.ts:76](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L76)

___

### opts

• `Protected` **opts**: [`GeneratorOpts`](../interfaces/GeneratorOpts.md)

#### Defined in

[src/generator.ts:75](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L75)

___

### writtenFiles

• `Private` **writtenFiles**: `Set`<`string`\>

#### Defined in

[src/generator.ts:78](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L78)

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

[src/generator.ts:363](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L363)

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

[src/generator.ts:574](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L574)

___

### extractTableName

▸ `Protected` **extractTableName**(`configTableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configTableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:702](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L702)

___

### findPrimaryKey

▸ `Protected` **findPrimaryKey**(`table`): ``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  }

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

``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  }

#### Defined in

[src/generator.ts:672](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L672)

___

### formatComment

▸ `Protected` **formatComment**(`comments`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `comments` | (`undefined` \| ``null`` \| `string`)[] |

#### Returns

``null`` \| `string`

#### Defined in

[src/generator.ts:324](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L324)

___

### generate

▸ **generate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/generator.ts:99](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L99)

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

[src/generator.ts:288](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L288)

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

[src/generator.ts:448](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L448)

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

[src/generator.ts:344](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L344)

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

[src/generator.ts:543](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L543)

___

### getColComment

▸ `Protected` **getColComment**(`tableName`, `col`): `undefined` \| `string`

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

`undefined` \| `string`

#### Defined in

[src/generator.ts:605](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L605)

___

### getColMappingInput

▸ `Protected` **getColMappingInput**(`tableName`, `didGenerateRepo`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `didGenerateRepo` | `boolean` |

#### Returns

`any`

#### Defined in

[src/generator.ts:835](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L835)

___

### getColMappingObjName

▸ `Protected` **getColMappingObjName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:742](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L742)

___

### getColSetName

▸ `Protected` **getColSetName**(`tableName`, `tableKind`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

``null`` \| `string`

#### Defined in

[src/generator.ts:823](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L823)

___

### getColumnsObjectName

▸ `Protected` **getColumnsObjectName**(`tableName`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:517](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L517)

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

[src/generator.ts:333](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L333)

___

### getCrudRepoName

▸ `Protected` **getCrudRepoName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:483](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L483)

___

### getFieldInput

▸ `Protected` **getFieldInput**(`col`, `table`, `pkCol`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `Object` |
| `col.comment` | `undefined` \| ``null`` \| `string` |
| `col.default` | `any` |
| `col.name` | `string` |
| `col.nullable` | `undefined` \| `boolean` |
| `col.type` | `string` |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `pkCol` | ``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  } |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `columnMethod` | `ColumnMethod` |
| `columnName` | `string` |
| `comment` | ``null`` \| `string` |
| `fieldType` | [`GeneratedFieldType`](../interfaces/GeneratedFieldType.md) |
| `hasDefault` | `boolean` |
| `includeDBTypeWhenIsOptional` | `boolean` |
| `isOptional` | `boolean` |
| `isPK` | `boolean` |
| `name` | `string` |

#### Defined in

[src/generator.ts:211](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L211)

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

[src/generator.ts:616](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L616)

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

[src/generator.ts:630](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L630)

___

### getFieldsInput

▸ `Protected` **getFieldsInput**(`table`, `pkCol`): `FieldTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { type: string; name: string; nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; }[] |
| `table.comment` | `undefined` \| ``null`` \| `string` |
| `table.constraints` | { type: string; name: string; table: string; columns: string[]; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; comment?: string \| null \| undefined; }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `pkCol` | ``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  } |

#### Returns

`FieldTmplInput`[]

#### Defined in

[src/generator.ts:203](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L203)

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

[src/generator.ts:312](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L312)

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

[src/generator.ts:431](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L431)

___

### getInsertableRowTypeName

▸ `Protected` **getInsertableRowTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:712](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L712)

___

### getInsertableValuesTypeName

▸ `Protected` **getInsertableValuesTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:730](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L730)

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

[src/generator.ts:668](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L668)

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

[src/generator.ts:663](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L663)

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

[src/generator.ts:539](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L539)

___

### getRepoInput

▸ `Protected` **getRepoInput**(`tableName`, `tableKind`, `pkField?`): ``null`` \| `RepoInput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |
| `pkField?` | `FieldTmplInput` |

#### Returns

``null`` \| `RepoInput`

#### Defined in

[src/generator.ts:255](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L255)

___

### getRowTypeInputs

▸ `Protected` **getRowTypeInputs**(`tableName`, `tableKind`, `mapperClassName`, `imports`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |
| `mapperClassName` | `string` |
| `imports` | `ImportTmplInput`[] |

#### Returns

`any`

#### Defined in

[src/generator.ts:763](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L763)

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

[src/generator.ts:501](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L501)

___

### getSelectedRowTypeName

▸ `Protected` **getSelectedRowTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:706](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L706)

___

### getSelectedValuesTypeName

▸ `Protected` **getSelectedValuesTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:724](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L724)

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

[src/generator.ts:140](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L140)

___

### getTableMapperClassName

▸ `Protected` **getTableMapperClassName**(`tableName`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:489](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L489)

___

### getTableMapperInstName

▸ `Protected` **getTableMapperInstName**(`tableName`, `tableKind`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

``null`` \| `string`

#### Defined in

[src/generator.ts:829](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L829)

___

### getTableMapperInstanceName

▸ `Protected` **getTableMapperInstanceName**(`tableName`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:505](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L505)

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

[src/generator.ts:148](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L148)

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

[src/generator.ts:383](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L383)

___

### getTypeWrapper

▸ `Protected` **getTypeWrapper**(`typeName`): `undefined` \| { `importPath`: `undefined` \| ``null`` \| `string` ; `isDefault`: `undefined` \| ``null`` \| `boolean` ; `isRelative`: `undefined` \| ``null`` \| `boolean` ; `name`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |

#### Returns

`undefined` \| { `importPath`: `undefined` \| ``null`` \| `string` ; `isDefault`: `undefined` \| ``null`` \| `boolean` ; `isRelative`: `undefined` \| ``null`` \| `boolean` ; `name`: `string`  }

#### Defined in

[src/generator.ts:694](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L694)

___

### getUpdatableRowTypeName

▸ `Protected` **getUpdatableRowTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:718](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L718)

___

### getUpdatableValuesTypeName

▸ `Protected` **getUpdatableValuesTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:736](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L736)

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

[src/generator.ts:419](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L419)

___

### getValuesTypeInputs

▸ `Protected` **getValuesTypeInputs**(`tableName`, `tableKind`, `mapperClassName`, `imports`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |
| `mapperClassName` | `string` |
| `imports` | `ImportTmplInput`[] |

#### Returns

`any`

#### Defined in

[src/generator.ts:794](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L794)

___

### getWrappedTypeInput

▸ `Protected` **getWrappedTypeInput**(`name`, `baseExpr`, `imports`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `baseExpr` | `string` |
| `imports` | `ImportTmplInput`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `expr` | `string` |
| `name` | `string` |

#### Defined in

[src/generator.ts:746](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L746)

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

[src/generator.ts:590](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L590)

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

[src/generator.ts:547](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L547)

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

[src/generator.ts:558](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L558)

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

[src/generator.ts:472](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L472)

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

[src/generator.ts:468](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L468)

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

[src/generator.ts:119](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L119)

___

### wrapType

▸ `Protected` **wrapType**(`typeExpr`, `wrapper?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeExpr` | `string` |
| `wrapper?` | ``null`` \| `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:689](https://github.com/lorefnon/ts-sql-codegen/blob/8731713/src/generator.ts#L689)
