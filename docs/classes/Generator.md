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
- [resolvePath](Generator.md#resolvepath)
- [shouldProcess](Generator.md#shouldprocess)
- [wrapType](Generator.md#wraptype)

## Constructors

### constructor

• **new Generator**(`opts`): [`Generator`](Generator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GeneratorOpts`](../interfaces/GeneratorOpts.md) |

#### Returns

[`Generator`](Generator.md)

#### Defined in

[src/generator.ts:81](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L81)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`\<`HandlebarsTemplateDelegate`\<`any`\>\> & `MemoizedFunction`

#### Defined in

[src/generator.ts:94](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L94)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => \{ `columnName?`: ``null`` \| `string` \| `RegExp` ; `columnType?`: ``null`` \| `string` \| `RegExp` ; `comment?`: ``null`` \| `string` ; `generatedField`: ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }  }  } & `undefined` \| ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }  }  } ; `tableName?`: ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[src/generator.ts:86](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L86)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[src/generator.ts:90](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L90)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[src/generator.ts:79](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L79)

___

### naming

• `Protected` **naming**: `NamingOptions`

#### Defined in

[src/generator.ts:76](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L76)

___

### opts

• `Protected` **opts**: [`GeneratorOpts`](../interfaces/GeneratorOpts.md)

#### Defined in

[src/generator.ts:75](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L75)

___

### writtenFiles

• `Private` **writtenFiles**: `Set`\<`string`\>

#### Defined in

[src/generator.ts:78](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L78)

## Methods

### accumulateImports

▸ **accumulateImports**(`imports`, `defaultImports`): `ImportTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `imports` | `Map`\<`string`, `Set`\<`string`\>\> |
| `defaultImports` | `Map`\<`string`, `Set`\<`string`\>\> |

#### Returns

`ImportTmplInput`[]

#### Defined in

[src/generator.ts:379](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L379)

___

### doesColumnHaveDefault

▸ **doesColumnHaveDefault**(`tableName`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment?` | ``null`` \| `string` |
| `col.default?` | `any` |
| `col.name` | `string` |
| `col.nullable?` | `boolean` |
| `col.type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/generator.ts:590](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L590)

___

### extractTableName

▸ **extractTableName**(`configTableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configTableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:718](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L718)

___

### findPrimaryKey

▸ **findPrimaryKey**(`table`): ``null`` \| \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

``null`` \| \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }

#### Defined in

[src/generator.ts:688](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L688)

___

### formatComment

▸ **formatComment**(`comments`): ``null`` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `comments` | (`undefined` \| ``null`` \| `string`)[] |

#### Returns

``null`` \| `string`[]

#### Defined in

[src/generator.ts:335](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L335)

___

### generate

▸ **generate**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/generator.ts:108](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L108)

___

### generateTableMapper

▸ **generateTableMapper**(`table`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/generator.ts:299](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L299)

___

### getAdapterImportPath

▸ **getAdapterImportPath**(`adapter`, `outputFilePath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | [`ImportedItem`](../interfaces/ImportedItem.md) |
| `outputFilePath` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:464](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L464)

___

### getAdapterImports

▸ **getAdapterImports**(`outputFilePath`, `fields`): `ImportTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputFilePath` | `string` |
| `fields` | `FieldTmplInput`[] |

#### Returns

`ImportTmplInput`[]

#### Defined in

[src/generator.ts:360](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L360)

___

### getCamelCasedTableName

▸ **getCamelCasedTableName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:559](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L559)

___

### getColComment

▸ **getColComment**(`tableName`, `col`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment?` | ``null`` \| `string` |
| `col.default?` | `any` |
| `col.name` | `string` |
| `col.nullable?` | `boolean` |
| `col.type` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/generator.ts:621](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L621)

___

### getColMappingInput

▸ **getColMappingInput**(`tableName`, `didGenerateRepo`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `didGenerateRepo` | `boolean` |

#### Returns

`any`

#### Defined in

[src/generator.ts:866](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L866)

___

### getColMappingObjName

▸ **getColMappingObjName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:758](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L758)

___

### getColSetName

▸ **getColSetName**(`tableName`, `tableKind`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

``null`` \| `string`

#### Defined in

[src/generator.ts:854](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L854)

___

### getColumnsObjectName

▸ **getColumnsObjectName**(`tableName`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:533](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L533)

___

### getConnectionSourceImportPath

▸ **getConnectionSourceImportPath**(`outputFilePath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputFilePath` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:346](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L346)

___

### getCrudRepoName

▸ **getCrudRepoName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:499](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L499)

___

### getFieldInput

▸ **getFieldInput**(`col`, `table`, `pkCol`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `Object` |
| `col.comment?` | ``null`` \| `string` |
| `col.default?` | `any` |
| `col.name` | `string` |
| `col.nullable?` | `boolean` |
| `col.type` | `string` |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `pkCol` | ``null`` \| \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  } |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `columnMethod` | `ColumnMethod` |
| `columnName` | `string` |
| `comment` | ``null`` \| `string`[] |
| `fieldType` | [`GeneratedFieldType`](../interfaces/GeneratedFieldType.md) |
| `hasDefault` | `boolean` |
| `includeDBTypeWhenIsOptional` | `boolean` |
| `isOptional` | `boolean` |
| `isPK` | `boolean` |
| `name` | `string` |

#### Defined in

[src/generator.ts:222](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L222)

___

### getFieldNameForColumn

▸ **getFieldNameForColumn**(`tableName`, `col`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment?` | ``null`` \| `string` |
| `col.default?` | `any` |
| `col.name` | `string` |
| `col.nullable?` | `boolean` |
| `col.type` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:632](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L632)

___

### getFieldType

▸ **getFieldType**(`tableName`, `col`): [`GeneratedFieldType`](../interfaces/GeneratedFieldType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment?` | ``null`` \| `string` |
| `col.default?` | `any` |
| `col.name` | `string` |
| `col.nullable?` | `boolean` |
| `col.type` | `string` |

#### Returns

[`GeneratedFieldType`](../interfaces/GeneratedFieldType.md)

#### Defined in

[src/generator.ts:646](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L646)

___

### getFieldsInput

▸ **getFieldsInput**(`table`, `pkCol`): `FieldTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `pkCol` | ``null`` \| \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  } |

#### Returns

`FieldTmplInput`[]

#### Defined in

[src/generator.ts:214](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L214)

___

### getIdPrefix

▸ **getIdPrefix**(`table`): `undefined` \| ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/generator.ts:323](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L323)

___

### getImportPathForOutputPath

▸ **getImportPathForOutputPath**(`filePath`, `importPath`, `importedItem`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `importPath` | `string` |
| `importedItem` | [`ImportedItem`](../interfaces/ImportedItem.md) |

#### Returns

`string`

#### Defined in

[src/generator.ts:447](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L447)

___

### getInsertableRowTypeName

▸ **getInsertableRowTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:728](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L728)

___

### getInsertableValuesTypeName

▸ **getInsertableValuesTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:746](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L746)

___

### getOutputFileName

▸ **getOutputFileName**(`table`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:684](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L684)

___

### getOutputFilePath

▸ **getOutputFilePath**(`table`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:679](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L679)

___

### getPascalCasedTableName

▸ **getPascalCasedTableName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:555](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L555)

___

### getRepoInput

▸ **getRepoInput**(`tableName`, `tableKind`, `pkField?`): ``null`` \| `RepoInput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |
| `pkField?` | `FieldTmplInput` |

#### Returns

``null`` \| `RepoInput`

#### Defined in

[src/generator.ts:266](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L266)

___

### getRowTypeInputs

▸ **getRowTypeInputs**(`tableName`, `tableKind`, `mapperClassName`, `imports`): `any`

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

[src/generator.ts:780](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L780)

___

### getRowTypePrefix

▸ **getRowTypePrefix**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:517](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L517)

___

### getSelectedRowTypeName

▸ **getSelectedRowTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:722](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L722)

___

### getSelectedValuesTypeName

▸ **getSelectedValuesTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:740](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L740)

___

### getTableKind

▸ **getTableKind**(`table`): ``null`` \| `TableKind`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

``null`` \| `TableKind`

#### Defined in

[src/generator.ts:149](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L149)

___

### getTableMapperClassName

▸ **getTableMapperClassName**(`tableName`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:505](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L505)

___

### getTableMapperInstName

▸ **getTableMapperInstName**(`tableName`, `tableKind`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

``null`` \| `string`

#### Defined in

[src/generator.ts:860](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L860)

___

### getTableMapperInstanceName

▸ **getTableMapperInstanceName**(`tableName`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:521](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L521)

___

### getTableTemplateInput

▸ **getTableTemplateInput**(`table`, `tableKind`, `filePath`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |
| `filePath` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/generator.ts:158](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L158)

___

### getTypeImports

▸ **getTypeImports**(`outputFilePath`, `fields`, `generateRepo`): `ImportTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputFilePath` | `string` |
| `fields` | `FieldTmplInput`[] |
| `generateRepo` | `boolean` |

#### Returns

`ImportTmplInput`[]

#### Defined in

[src/generator.ts:399](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L399)

___

### getTypeWrapper

▸ **getTypeWrapper**(`typeName`): `undefined` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |

#### Returns

`undefined` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }

#### Defined in

[src/generator.ts:710](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L710)

___

### getUpdatableRowTypeName

▸ **getUpdatableRowTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:734](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L734)

___

### getUpdatableValuesTypeName

▸ **getUpdatableValuesTypeName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:752](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L752)

___

### getUtilImports

▸ **getUtilImports**(`colSetName`, `generateRepo`): `ImportTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `colSetName` | ``null`` \| `string` |
| `generateRepo` | `boolean` |

#### Returns

`ImportTmplInput`[]

#### Defined in

[src/generator.ts:435](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L435)

___

### getValuesTypeInputs

▸ **getValuesTypeInputs**(`tableName`, `tableKind`, `mapperClassName`, `imports`): `any`

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

[src/generator.ts:820](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L820)

___

### getWrappedTypeInput

▸ **getWrappedTypeInput**(`name`, `baseExpr`, `imports`, `isInterface?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `baseExpr` | `string` | `undefined` |
| `imports` | `ImportTmplInput`[] | `undefined` |
| `isInterface` | `boolean` | `false` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `expr` | `string` |
| `isInterface` | `boolean` |
| `name` | `string` |

#### Defined in

[src/generator.ts:762](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L762)

___

### isColumnComputed

▸ **isColumnComputed**(`tableName`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment?` | ``null`` \| `string` |
| `col.default?` | `any` |
| `col.name` | `string` |
| `col.nullable?` | `boolean` |
| `col.type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/generator.ts:606](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L606)

___

### isColumnOmitted

▸ **isColumnOmitted**(`tableName`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment?` | ``null`` \| `string` |
| `col.default?` | `any` |
| `col.name` | `string` |
| `col.nullable?` | `boolean` |
| `col.type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/generator.ts:563](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L563)

___

### isColumnOptional

▸ **isColumnOptional**(`tableName`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `col` | `Object` |
| `col.comment?` | ``null`` \| `string` |
| `col.default?` | `any` |
| `col.name` | `string` |
| `col.nullable?` | `boolean` |
| `col.type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/generator.ts:574](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L574)

___

### postProcessOutput

▸ **postProcessOutput**(`output`, `_table`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `string` |
| `_table` | `Object` |
| `_table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `_table.comment?` | ``null`` \| `string` |
| `_table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `_table.name` | `string` |
| `_table.type` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/generator.ts:488](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L488)

___

### preProcessTemplateInput

▸ **preProcessTemplateInput**(`input`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/generator.ts:484](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L484)

___

### resolvePath

▸ **resolvePath**(`relPath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `relPath` | `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:101](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L101)

___

### shouldProcess

▸ **shouldProcess**(`table`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints` | \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/generator.ts:128](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L128)

___

### wrapType

▸ **wrapType**(`typeExpr`, `wrapper?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeExpr` | `string` |
| `wrapper?` | ``null`` \| `string` |

#### Returns

`string`

#### Defined in

[src/generator.ts:705](https://github.com/lorefnon/ts-sql-codegen/blob/194c41c/src/generator.ts#L705)
