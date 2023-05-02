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

[src/generator.ts:75](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L75)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`<`HandlebarsTemplateDelegate`<`any`\>\> & `MemoizedFunction`

#### Defined in

[src/generator.ts:88](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L88)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => { `columnName`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `columnType`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `generatedField`: `Object` ; `tableName`: `undefined` \| ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[src/generator.ts:80](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L80)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[src/generator.ts:84](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L84)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[src/generator.ts:73](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L73)

___

### naming

• `Protected` **naming**: `NamingOptions`

#### Defined in

[src/generator.ts:70](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L70)

___

### opts

• `Protected` **opts**: [`GeneratorOpts`](../interfaces/GeneratorOpts.md)

#### Defined in

[src/generator.ts:69](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L69)

___

### writtenFiles

• `Private` **writtenFiles**: `Set`<`string`\>

#### Defined in

[src/generator.ts:72](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L72)

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

[src/generator.ts:323](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L323)

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

[src/generator.ts:490](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L490)

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

[src/generator.ts:577](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L577)

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

[src/generator.ts:281](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L281)

___

### generate

▸ **generate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/generator.ts:93](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L93)

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

[src/generator.ts:141](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L141)

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

[src/generator.ts:384](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L384)

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

[src/generator.ts:304](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L304)

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

[src/generator.ts:459](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L459)

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

[src/generator.ts:419](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L419)

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

[src/generator.ts:439](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L439)

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

[src/generator.ts:293](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L293)

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

[src/generator.ts:521](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L521)

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

[src/generator.ts:535](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L535)

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

[src/generator.ts:269](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L269)

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

[src/generator.ts:370](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L370)

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

[src/generator.ts:431](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L431)

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

[src/generator.ts:573](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L573)

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

[src/generator.ts:568](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L568)

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

[src/generator.ts:455](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L455)

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

[src/generator.ts:427](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L427)

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

[src/generator.ts:133](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L133)

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

[src/generator.ts:343](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L343)

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

[src/generator.ts:506](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L506)

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

[src/generator.ts:463](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L463)

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

[src/generator.ts:474](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L474)

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

[src/generator.ts:408](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L408)

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

[src/generator.ts:404](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L404)

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

[src/generator.ts:113](https://github.com/lorefnon/ts-sql-codegen/blob/8103e62/src/generator.ts#L113)
