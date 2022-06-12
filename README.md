# ts-sql-codegen

Utility to generate table classes for [ts-sql-query](https://ts-sql-query.readthedocs.io/en/stable/) by inspecting a database through [tbls](https://github.com/k1LoW/tbls).

## Installation:

**Step 1:** Install tbls and ensure it is available in path

  Refer: https://github.com/k1LoW/tbls#install


**Step 2:** Install ts-sql-codegen

  `npm i --dev ts-sql-codegen`

### Note:

  - Global installation (`npm i -g ts-sql-codegen`) can be convenient, but is preferrable
    to have ts-sql-codegen as a project dependency to avoid versioning issues.

## Usage (CLI): 

After every database schema change:

**Step 1:** Generate yaml schema file from database using tbls 

  **Example:** `tbls out postgres://postgres:password@localhost:5432/testdb -t yaml -o schema.yaml`


**Step 2:** Pass this schema file to ts-sql-codegen

  **Example:** `ts-sql-codegen --schema ./schema.yaml --output-dir ./src/generated --connection-source ./src/db/connection-source`

### Note: 

- All paths are relative to cwd

- Above options are default, so you can also just run ts-sql-codegen


## Usage (Programmatic):

Programmatic usage enables a wider set of customization options. 

**Example:**

```
const options = {
   schemaPath: './schema.yaml',
   connectionSourcePath: './connection-source.ts',
   fieldMappings: [
    { tableName: 'user', columnName: 'followerCount', fieldType: 'int' }
   ]
}
const generator = new Generator(options);
await generator.generate();
```

Refer to [Generator](./docs/classes/Generator.md) and [GeneratorOpts](./docs/interfaces/GeneratorOpts.md) for available options.

For advanced use-cases (eg. custom templates, pre/post processing of generated code 
 and custom logic for table/column/field mapping) it is recommended to extend the Generator class to keep the customization options focussed on major common use-cases.


