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

[src/generator.ts:82](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L82)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`\<`HandlebarsTemplateDelegate`\<`any`\>\> & `MemoizedFunction`

#### Defined in

[src/generator.ts:95](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L95)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => \{ `columnName?`: ``null`` \| `string` \| `RegExp` ; `columnType?`: ``null`` \| `string` \| `RegExp` ; `comment?`: ``null`` \| `string` ; `generatedField`: ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ... \| ... \| ... ; `isDefault?`: ... \| ... \| ... \| ... ; `isRelative?`: ... \| ... \| ... \| ... ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ... \| ... \| ... ; `isDefault?`: ... \| ... \| ... \| ... ; `isRelative?`: ... \| ... \| ... \| ... ; `name`: `string`  }  }  } ; `tableName?`: ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[src/generator.ts:87](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L87)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[src/generator.ts:91](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L91)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[src/generator.ts:80](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L80)

___

### naming

• `Protected` **naming**: `NamingOptions`

#### Defined in

[src/generator.ts:77](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L77)

___

### opts

• `Protected` **opts**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `common?` | ``null`` \| \{ `customTypes?`: ``null`` \| \{ `importPath`: `string`  } ; `primaryKey?`: ``null`` \| \{ `isAutoGenerated?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string`  } ; `typeAdapter?`: ``null`` \| \{ `importPath`: `string`  }  } | Convenience utility for common cases where all tables follow same conventions See [CommonOptions](../interfaces/CommonOptions.md) |
| `connectionSource?` | ``null`` \| \{ `path?`: ``null`` \| `string` ; `resolveRelative?`: ``null`` \| `boolean`  } | Connection source configuration **`See`** ConnectionSourceOptions |
| `connectionSourcePath` | `string` | Path to module that exports DBConnection object used in table mappers **`Deprecated`** **`See`** connectionSource |
| `dryRun?` | ``null`` \| `boolean` | Simulate the generation and print the outcome without actually modifying any files |
| `export?` | ``null`` \| \{ `columnTypeMappingInterface?`: `boolean` ; `crudRepository?`: `boolean` ; `extractedColumns?`: `boolean` ; `rowTypes?`: `boolean` \| \{ `asInterface`: `boolean`  } ; `tableClasses?`: `boolean` ; `tableInstances?`: `boolean` ; `valuesTypes?`: `boolean` \| \{ `asInterface`: `boolean`  }  } | Customize what all entities are exported from generated file **`See`** ExportOptions |
| `fieldMappings?` | ``null`` \| \{ `columnName?`: ``null`` \| `string` \| `RegExp` ; `columnType?`: ``null`` \| `string` \| `RegExp` ; `comment?`: ``null`` \| `string` ; `generatedField`: ``false`` \| \{ `hasDefault?`: ``null`` \| `boolean` ; `isComputed?`: ``null`` \| `boolean` ; `isOptional?`: ``null`` \| `boolean` ; `name?`: ``null`` \| `string` ; `type?`: ``null`` \| \{ `adapter?`: ``null`` \| \{ `importPath?`: ... \| ... \| ... ; `isDefault?`: ... \| ... \| ... \| ... ; `isRelative?`: ... \| ... \| ... \| ... ; `name`: `string`  } ; `dbType?`: ``null`` \| \{ `name`: `string`  } ; `kind?`: ``null`` \| ``"custom"`` \| ``"customComparable"`` \| ``"enum"`` \| ``"customInt"`` \| ``"customDouble"`` \| ``"customUuid"`` \| ``"customLocalDate"`` \| ``"customLocalTime"`` \| ``"customLocalDateTime"`` ; `tsType?`: ``null`` \| \{ `importPath?`: ... \| ... \| ... ; `isDefault?`: ... \| ... \| ... \| ... ; `isRelative?`: ... \| ... \| ... \| ... ; `name`: `string`  }  }  } ; `tableName?`: ``null`` \| `string` \| `RegExp`  }[] | Customize how table columns are mapped to typescript fields **`See`** FieldMapping |
| `includeDBTypeWhenIsOptional?` | ``null`` \| `boolean` | The fields marked as "custom", "customComparable" or "enum" receive a second generic argument that need to be the same of the db type in the database or redefined for the field If you set to true this property that second generic argument will be generated. |
| `moduleRoot?` | ``null`` \| `string` | Root path of module - used for resolving relative paths. If unspecified, assumed to be cwd |
| `naming?` | ``null`` \| \{ `columnTypeMappingInterfaceNameSuffix?`: `string` ; `crudRepositoryClassNamePrefix?`: `string` ; `crudRepositoryClassNameSuffix?`: `string` ; `insertableRowTypeNamePrefix?`: `string` ; `insertableRowTypeNameSuffix?`: `string` ; `insertableValuesTypeNamePrefix?`: `string` ; `insertableValuesTypeNameSuffix?`: `string` ; `selectedRowTypeNamePrefix?`: `string` ; `selectedRowTypeNameSuffix?`: `string` ; `selectedValuesTypeNamePrefix?`: `string` ; `selectedValuesTypeNameSuffix?`: `string` ; `tableClassNamePrefix?`: `string` ; `tableClassNameSuffix?`: `string` ; `tableColumnsNamePrefix?`: `string` ; `tableColumnsNameSuffix?`: `string` ; `tableInstanceNamePrefix?`: `string` ; `tableInstanceNameSuffix?`: `string` ; `updatableRowTypeNamePrefix?`: `string` ; `updatableRowTypeNameSuffix?`: `string` ; `updatableValuesTypeNamePrefix?`: `string` ; `updatableValuesTypeNameSuffix?`: `string` ; `viewClassNamePrefix?`: `string` ; `viewClassNameSuffix?`: `string` ; `viewColumnsNamePrefix?`: `string` ; `viewColumnsNameSuffix?`: `string` ; `viewInstanceNamePrefix?`: `string` ; `viewInstanceNameSuffix?`: `string`  } | Customize the naming rules of the generated items See NamingOptions |
| `output?` | ``null`` \| \{ `import?`: ``null`` \| \{ `extension?`: ``null`` \| `string`  }  } | Shared options that affect all generated output |
| `outputDirPath` | `string` | Path to output directory where a typescript class file will be generated for each table |
| `rawContent?` | ``null`` \| \{ `after?`: ``null`` \| `string` ; `before?`: ``null`` \| `string`  } | Support injection of raw content in the generated files. This is useful for adding things like eslint-disable, additional exports etc. **`See`** RawContent |
| `removeExtraneous?` | ``null`` \| ``"never"`` \| ``"interactively"`` \| ``"all"`` | Remove extraneous files after code generation completes - this prevents you from having to manually clean up files after eg. any table has been deleted, but it is your responsibility to ensure that the outputDir used solely for files generated through this utility and all files are written as part of single run. Defauls to retaining all extraneous files. |
| `schemaPath` | `string` | Path to yaml schema dumped by tbls |
| `tableMapping?` | ``null`` \| \{ `idPrefix?`: ``null`` \| `string` ; `useQualifiedTableName?`: ``null`` \| `boolean`  } | Customize how tables are mapped **`See`** TableMapping |
| `tables?` | ``null`` \| \{ `exclude?`: ``null`` \| (`string` \| `RegExp`)[] ; `include?`: ``null`` \| (`string` \| `RegExp`)[]  } | Restrict the generator to process only a subset of tables available **`See`** TableInclusion |
| `typeWrappers?` | ``null`` \| \{ `typeName`: `string` \| `RegExp` = StrOrRegExpSchema; `wrapper`: \{ `importPath?`: ``null`` \| `string` ; `isDefault?`: ``null`` \| `boolean` ; `isRelative?`: ``null`` \| `boolean` ; `name`: `string`  } = ImportedItemSchema }[] | Wrap inferred types before exporting - this is useful to restrict the types used for insert/update etc. beyond what the database permits. Eg. We can hint that updatedAt must be set whenever record is updated **`See`** TypeWapper |

#### Defined in

[src/generator.ts:76](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L76)

___

### writtenFiles

• `Private` **writtenFiles**: `Set`\<`string`\>

#### Defined in

[src/generator.ts:79](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L79)

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

[src/generator.ts:383](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L383)

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

[src/generator.ts:594](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L594)

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

[src/generator.ts:722](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L722)

___

### findPrimaryKey

▸ **findPrimaryKey**(`table`): ``null`` \| \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

``null`` \| \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }

#### Defined in

[src/generator.ts:692](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L692)

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

[src/generator.ts:338](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L338)

___

### generate

▸ **generate**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/generator.ts:109](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L109)

___

### generateTableMapper

▸ **generateTableMapper**(`table`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/generator.ts:300](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L300)

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

[src/generator.ts:468](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L468)

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

[src/generator.ts:364](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L364)

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

[src/generator.ts:563](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L563)

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

[src/generator.ts:625](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L625)

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

[src/generator.ts:870](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L870)

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

[src/generator.ts:762](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L762)

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

[src/generator.ts:858](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L858)

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

[src/generator.ts:537](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L537)

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

[src/generator.ts:349](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L349)

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

[src/generator.ts:503](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L503)

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
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
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

[src/generator.ts:223](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L223)

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

[src/generator.ts:636](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L636)

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

[src/generator.ts:650](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L650)

___

### getFieldsInput

▸ **getFieldsInput**(`table`, `pkCol`): `FieldTmplInput`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `pkCol` | ``null`` \| \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  } |

#### Returns

`FieldTmplInput`[]

#### Defined in

[src/generator.ts:215](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L215)

___

### getIdPrefix

▸ **getIdPrefix**(`table`): `undefined` \| ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/generator.ts:326](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L326)

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

[src/generator.ts:451](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L451)

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

[src/generator.ts:732](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L732)

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

[src/generator.ts:750](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L750)

___

### getOutputFileName

▸ **getOutputFileName**(`table`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:688](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L688)

___

### getOutputFilePath

▸ **getOutputFilePath**(`table`, `tableKind`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |

#### Returns

`string`

#### Defined in

[src/generator.ts:683](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L683)

___

### getPascalCasedTableName

▸ **getPascalCasedTableName**(`tableName`): `Capitalize`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`Capitalize`\<`string`\>

#### Defined in

[src/generator.ts:559](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L559)

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

[src/generator.ts:267](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L267)

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

[src/generator.ts:784](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L784)

___

### getRowTypePrefix

▸ **getRowTypePrefix**(`tableName`): `Capitalize`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`Capitalize`\<`string`\>

#### Defined in

[src/generator.ts:521](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L521)

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

[src/generator.ts:726](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L726)

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

[src/generator.ts:744](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L744)

___

### getTableKind

▸ **getTableKind**(`table`): ``null`` \| `TableKind`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

``null`` \| `TableKind`

#### Defined in

[src/generator.ts:150](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L150)

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

[src/generator.ts:509](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L509)

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

[src/generator.ts:864](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L864)

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

[src/generator.ts:525](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L525)

___

### getTableTemplateInput

▸ **getTableTemplateInput**(`table`, `tableKind`, `filePath`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |
| `tableKind` | `TableKind` |
| `filePath` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/generator.ts:159](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L159)

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

[src/generator.ts:403](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L403)

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

[src/generator.ts:714](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L714)

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

[src/generator.ts:738](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L738)

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

[src/generator.ts:756](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L756)

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

[src/generator.ts:439](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L439)

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

[src/generator.ts:824](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L824)

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

[src/generator.ts:766](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L766)

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

[src/generator.ts:610](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L610)

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

[src/generator.ts:567](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L567)

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

[src/generator.ts:578](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L578)

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
| `_table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `_table.name` | `string` |
| `_table.type` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/generator.ts:492](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L492)

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

[src/generator.ts:488](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L488)

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

[src/generator.ts:102](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L102)

___

### shouldProcess

▸ **shouldProcess**(`table`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | \{ `comment?`: ``null`` \| `string` ; `default?`: `any` ; `name`: `string` ; `nullable?`: `boolean` ; `type`: `string`  }[] |
| `table.comment?` | ``null`` \| `string` |
| `table.constraints?` | ``null`` \| \{ `columns`: `string`[] ; `comment?`: ``null`` \| `string` ; `name`: `string` ; `referencedColumns?`: ``null`` \| `string`[] ; `referencedTable?`: ``null`` \| `string` ; `table`: `string` ; `type`: `string`  }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/generator.ts:129](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L129)

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

[src/generator.ts:709](https://github.com/lorefnon/ts-sql-codegen/blob/7fbf2a8eefc564235a09365113d5ea88b70cfc39/src/generator.ts#L709)
