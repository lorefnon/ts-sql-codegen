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

- [findPrimaryKey](Generator.md#findprimarykey)
- [generate](Generator.md#generate)
- [generateTableMapper](Generator.md#generatetablemapper)
- [getAdapterImportPath](Generator.md#getadapterimportpath)
- [getAdapterImports](Generator.md#getadapterimports)
- [getClassNameFromTableName](Generator.md#getclassnamefromtablename)
- [getConnectionSourceImportPath](Generator.md#getconnectionsourceimportpath)
- [getFieldNameForColumn](Generator.md#getfieldnameforcolumn)
- [getFieldType](Generator.md#getfieldtype)
- [getInstanceNameFromTableName](Generator.md#getinstancenamefromtablename)
- [getOutputFileName](Generator.md#getoutputfilename)
- [getOutputFilePath](Generator.md#getoutputfilepath)
- [getRelativeImportPath](Generator.md#getrelativeimportpath)
- [getTypeImports](Generator.md#gettypeimports)
- [isColumnComputed](Generator.md#iscolumncomputed)
- [isColumnOmitted](Generator.md#iscolumnomitted)
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

[generator.ts:72](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L72)

## Properties

### getCompiledTemplate

• `Protected` **getCompiledTemplate**: () => `Promise`<`HandlebarsTemplateDelegate`<`any`\>\> & `MemoizedFunction`

#### Defined in

[generator.ts:84](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L84)

___

### getFieldMappings

• `Protected` **getFieldMappings**: () => { `columnName`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `columnType`: `undefined` \| ``null`` \| `string` \| `RegExp` ; `generatedField`: ``false`` \| { type?: { kind?: "custom" \| "enum" \| null \| undefined; dbType?: { name: string; } \| null \| undefined; tsType?: { importPath?: string \| null \| undefined; name: string; } \| null \| undefined; adapter?: { ...; } \| ... 1 more ... \| undefined; } \| null \| undefined; name?: string \| ... 1 more ... \| undefined; isComputed?:... ; `tableName`: `undefined` \| ``null`` \| `string` \| `RegExp`  }[] & `MemoizedFunction`

#### Defined in

[generator.ts:76](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L76)

___

### getTemplatePath

• `Protected` **getTemplatePath**: () => `string` & `MemoizedFunction`

#### Defined in

[generator.ts:80](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L80)

___

### logger

• **logger**: `Logger` = `console`

#### Defined in

[generator.ts:70](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L70)

___

### opts

• `Protected` **opts**: [`GeneratorOpts`](../interfaces/GeneratorOpts.md)

#### Defined in

[generator.ts:69](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L69)

## Methods

### findPrimaryKey

▸ `Protected` **findPrimaryKey**(`table`): `undefined` \| ``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`undefined` \| ``null`` \| { `comment`: `undefined` \| ``null`` \| `string` ; `default`: `any` ; `name`: `string` ; `nullable`: `undefined` \| `boolean` ; `type`: `string`  }

#### Defined in

[generator.ts:399](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L399)

___

### generate

▸ **generate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[generator.ts:89](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L89)

___

### generateTableMapper

▸ `Protected` **generateTableMapper**(`table`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generator.ts:125](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L125)

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

[generator.ts:287](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L287)

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

[generator.ts:231](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L231)

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

[generator.ts:308](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L308)

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

[generator.ts:220](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L220)

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

[generator.ts:342](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L342)

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

[generator.ts:357](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L357)

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

[generator.ts:312](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L312)

___

### getOutputFileName

▸ `Protected` **getOutputFileName**(`table`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:395](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L395)

___

### getOutputFilePath

▸ `Protected` **getOutputFilePath**(`table`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:390](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L390)

___

### getRelativeImportPath

▸ `Protected` **getRelativeImportPath**(`filePath`, `cwdRelImportPath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `cwdRelImportPath` | `string` |

#### Returns

`string`

#### Defined in

[generator.ts:277](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L277)

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

[generator.ts:253](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L253)

___

### isColumnComputed

▸ `Protected` **isColumnComputed**(`tableName`, `col`): `undefined` \| `boolean`

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

`undefined` \| `boolean`

#### Defined in

[generator.ts:327](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L327)

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

[generator.ts:316](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L316)

___

### postProcessOutput

▸ `Protected` **postProcessOutput**(`output`, `_table`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `string` |
| `_table` | `Object` |
| `_table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `_table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `_table.name` | `string` |
| `_table.type` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[generator.ts:304](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L304)

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

[generator.ts:300](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L300)

___

### shouldProcess

▸ `Protected` **shouldProcess**(`table`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Object` |
| `table.columns` | { nullable?: boolean \| undefined; default?: any; comment?: string \| null \| undefined; type: string; name: string; }[] |
| `table.constraints` | { comment?: string \| null \| undefined; referencedTable?: string \| null \| undefined; referencedColumns?: string[] \| null \| undefined; type: string; name: string; table: string; columns: string[]; }[] |
| `table.name` | `string` |
| `table.type` | `string` |

#### Returns

`boolean`

#### Defined in

[generator.ts:104](https://github.com/lorefnon/ts-sql-codegen/blob/c99c53b/src/generator.ts#L104)
