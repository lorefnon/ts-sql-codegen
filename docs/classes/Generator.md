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

[src/generator.ts:81](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L81)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`\<`HandlebarsTemplateDelegate`\<`any`\>\> & `MemoizedFunction`

#### Defined in

[src/generator.ts:94](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L94)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => \{ `columnName?`: ``null`` \| `string` \| `RegExp` ; `columnType?`: ``null`` \| `string` \| `RegExp` ; `comment?`: ``null`` \| `string` ; `generatedField`: ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }  }  } & `undefined` \| ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }  }  } ; `tableName?`: ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[src/generator.ts:86](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L86)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[src/generator.ts:90](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L90)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[src/generator.ts:79](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L79)

___

### naming

• `Protected` **naming**: `NamingOptions`

#### Defined in

[src/generator.ts:76](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L76)

___

### opts

• `Protected` **opts**: [`GeneratorOpts`](../interfaces/GeneratorOpts.md)

#### Defined in

[src/generator.ts:75](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L75)

___

### writtenFiles

• `Private` **writtenFiles**: `Set`\<`string`\>

#### Defined in

[src/generator.ts:78](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L78)

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

[src/generator.ts:381](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L381)

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

[src/generator.ts:592](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L592)

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

[src/generator.ts:720](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L720)

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

[src/generator.ts:690](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L690)

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

[src/generator.ts:337](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L337)

___

### generate

▸ **generate**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/generator.ts:108](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L108)

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

[src/generator.ts:299](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L299)

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

[src/generator.ts:466](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L466)

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

[src/generator.ts:362](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L362)

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

[src/generator.ts:561](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L561)

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

[src/generator.ts:623](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L623)

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

[src/generator.ts:868](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L868)

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

[src/generator.ts:760](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L760)

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

[src/generator.ts:856](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L856)

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

[src/generator.ts:535](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L535)

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

[src/generator.ts:348](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L348)

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

[src/generator.ts:501](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L501)

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

[src/generator.ts:222](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L222)

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

[src/generator.ts:634](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L634)

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

[src/generator.ts:648](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L648)

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

[src/generator.ts:214](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L214)

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

[src/generator.ts:325](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L325)

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

[src/generator.ts:449](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L449)

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

[src/generator.ts:730](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L730)

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

[src/generator.ts:748](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L748)

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

[src/generator.ts:686](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L686)

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

[src/generator.ts:681](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L681)

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

[src/generator.ts:557](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L557)

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

[src/generator.ts:266](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L266)

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

[src/generator.ts:782](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L782)

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

[src/generator.ts:519](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L519)

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

[src/generator.ts:724](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L724)

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

[src/generator.ts:742](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L742)

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

[src/generator.ts:149](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L149)

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

[src/generator.ts:507](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L507)

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

[src/generator.ts:862](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L862)

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

[src/generator.ts:523](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L523)

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

[src/generator.ts:158](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L158)

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

[src/generator.ts:401](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L401)

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

[src/generator.ts:712](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L712)

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

[src/generator.ts:736](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L736)

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

[src/generator.ts:754](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L754)

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

[src/generator.ts:437](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L437)

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

[src/generator.ts:822](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L822)

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

[src/generator.ts:764](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L764)

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

[src/generator.ts:608](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L608)

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

[src/generator.ts:565](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L565)

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

[src/generator.ts:576](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L576)

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

[src/generator.ts:490](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L490)

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

[src/generator.ts:486](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L486)

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

[src/generator.ts:101](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L101)

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

[src/generator.ts:128](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L128)

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

[src/generator.ts:707](https://github.com/lorefnon/ts-sql-codegen/blob/b77777f/src/generator.ts#L707)
