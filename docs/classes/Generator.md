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

[generator.ts:73](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L73)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`<`HandlebarsTemplateDelegate`<`any`\>\> & `MemoizedFunction`

#### Defined in

[generator.ts:85](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L85)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => { `columnName`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `columnType`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `generatedField`: ``false`` \| { type?: { kind?: "custom" \| "enum" \| null \| undefined; dbType?: { name: string; } \| null \| undefined; tsType?: { importPath?: string \| null \| undefined; isDefault?: boolean \| null \| undefined; isRelative?: boolean \| ... 1 more ... \| undefined; name: string; } \| null \| undefined; adapter?: { ...; } \| ... 1 more ... ... ; `tableName`: `undefined` \| ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[generator.ts:77](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L77)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[generator.ts:81](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L81)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[generator.ts:71](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L71)

___

### opts

• `Protected` **opts**: [`GeneratorOpts`](../interfaces/GeneratorOpts.md)

#### Defined in

[generator.ts:70](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L70)

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

[generator.ts:298](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L298)

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

[generator.ts:434](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L434)

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

[generator.ts:521](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L521)

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

[generator.ts:256](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L256)

___

### generate

▸ **generate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[generator.ts:90](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L90)

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

[generator.ts:134](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L134)

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

[generator.ts:359](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L359)

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

[generator.ts:279](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L279)

___

### getClassNameFromTableName

▸ `Protected` **getClassNameFromTableName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:387](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L387)

___

### getColumnsObjectNameFromTableName

▸ `Protected` **getColumnsObjectNameFromTableName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:399](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L399)

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

[generator.ts:268](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L268)

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

[generator.ts:465](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L465)

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

[generator.ts:479](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L479)

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

[generator.ts:244](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L244)

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

[generator.ts:345](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L345)

___

### getInstanceNameFromTableName

▸ `Protected` **getInstanceNameFromTableName**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:395](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L395)

___

### getOutputFileName

▸ `Protected` **getOutputFileName**(`table`): `string`

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

`string`

#### Defined in

[generator.ts:517](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L517)

___

### getOutputFilePath

▸ `Protected` **getOutputFilePath**(`table`): `string`

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

`string`

#### Defined in

[generator.ts:512](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L512)

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

[generator.ts:403](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L403)

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

[generator.ts:391](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L391)

___

### getTableKind

▸ `Protected` **getTableKind**(`table`): ``null`` \| ``"Table"`` \| ``"View"``

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

``null`` \| ``"Table"`` \| ``"View"``

#### Defined in

[generator.ts:126](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L126)

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

[generator.ts:318](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L318)

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

[generator.ts:450](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L450)

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

[generator.ts:407](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L407)

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

[generator.ts:418](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L418)

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

[generator.ts:383](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L383)

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

[generator.ts:379](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L379)

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

[generator.ts:105](https://github.com/lorefnon/ts-sql-codegen/blob/26005c2/src/generator.ts#L105)
