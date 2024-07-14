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

• **new Generator**(`opts`): [`Generator`](Generator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GeneratorOpts`](../interfaces/GeneratorOpts.md) |

#### Returns

[`Generator`](Generator.md)

#### Defined in

[src/generator.ts:82](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L82)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`\<`HandlebarsTemplateDelegate`\<`any`\>\> & `MemoizedFunction`

#### Defined in

[src/generator.ts:95](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L95)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => \{ `columnName?`: ``null`` \| `string` \| `RegExp` ; `columnType?`: ``null`` \| `string` \| `RegExp` ; `comment?`: ``null`` \| `string` ; `generatedField`: ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }  }  } & `undefined` \| ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  }  }  } ; `tableName?`: ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[src/generator.ts:87](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L87)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[src/generator.ts:91](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L91)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[src/generator.ts:80](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L80)

___

### naming

• `Protected` **naming**: `NamingOptions`

#### Defined in

[src/generator.ts:77](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L77)

___

### opts

• `Protected` **opts**: [`GeneratorOpts`](../interfaces/GeneratorOpts.md)

#### Defined in

[src/generator.ts:76](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L76)

___

### writtenFiles

• `Private` **writtenFiles**: `Set`\<`string`\>

#### Defined in

[src/generator.ts:79](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L79)

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

[src/generator.ts:370](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L370)

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

[src/generator.ts:581](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L581)

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

[src/generator.ts:709](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L709)

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

[src/generator.ts:679](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L679)

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

[src/generator.ts:329](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L329)

___

### generate

▸ **generate**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/generator.ts:102](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L102)

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

[src/generator.ts:293](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L293)

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

[src/generator.ts:455](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L455)

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

[src/generator.ts:351](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L351)

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

[src/generator.ts:550](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L550)

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

[src/generator.ts:612](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L612)

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

[src/generator.ts:857](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L857)

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

[src/generator.ts:749](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L749)

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

[src/generator.ts:845](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L845)

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

[src/generator.ts:524](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L524)

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

[src/generator.ts:340](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L340)

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

[src/generator.ts:490](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L490)

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

[src/generator.ts:216](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L216)

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

[src/generator.ts:623](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L623)

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

[src/generator.ts:637](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L637)

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

[src/generator.ts:208](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L208)

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

[src/generator.ts:317](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L317)

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

[src/generator.ts:438](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L438)

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

[src/generator.ts:719](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L719)

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

[src/generator.ts:737](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L737)

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

[src/generator.ts:675](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L675)

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

[src/generator.ts:670](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L670)

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

[src/generator.ts:546](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L546)

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

[src/generator.ts:260](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L260)

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

[src/generator.ts:771](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L771)

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

[src/generator.ts:508](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L508)

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

[src/generator.ts:713](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L713)

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

[src/generator.ts:731](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L731)

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

[src/generator.ts:143](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L143)

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

[src/generator.ts:496](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L496)

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

[src/generator.ts:851](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L851)

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

[src/generator.ts:512](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L512)

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

[src/generator.ts:152](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L152)

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

[src/generator.ts:390](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L390)

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

[src/generator.ts:701](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L701)

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

[src/generator.ts:725](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L725)

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

[src/generator.ts:743](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L743)

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

[src/generator.ts:426](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L426)

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

[src/generator.ts:811](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L811)

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

[src/generator.ts:753](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L753)

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

[src/generator.ts:597](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L597)

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

[src/generator.ts:554](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L554)

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

[src/generator.ts:565](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L565)

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

[src/generator.ts:479](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L479)

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

[src/generator.ts:475](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L475)

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

[src/generator.ts:122](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L122)

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

[src/generator.ts:696](https://github.com/lorefnon/ts-sql-codegen/blob/1247d8a/src/generator.ts#L696)
