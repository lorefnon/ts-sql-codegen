# ts-sql-codegen

This utility generates [table mapper classes](https://ts-sql-query.readthedocs.io/en/stable/connection-tables-views/#mapping-the-tables) for [ts-sql-query](https://ts-sql-query.readthedocs.io/en/stable/) by inspecting a database through [tbls](https://github.com/k1LoW/tbls).

While it is possible to use ts-sql-query without any code-generation, we have to manually keep the table-mappings in sync with the database which is burdensome.

With this utility, this mapping can be derived from the database itself as part of build process, eliminating the manual effort, reducing room for erroneous mapping and enabling true end-to-end type-safety.

The code-generation process is highly customizable and almost all the defaults (which are sensible for most databases) can be configured if needed.

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

```ts
const options = {
   schemaPath: './schema.yaml',
   connectionSourcePath: './connection-source.ts'
}
const generator = new Generator(options);
await generator.generate();
```

Refer to [Generator](./docs/classes/Generator.md) and [GeneratorOpts](./docs/interfaces/GeneratorOpts.md) for available options.

For advanced use-cases (eg. custom templates, pre/post processing of generated code 
 and custom logic for table/column/field mapping) it is recommended to extend the Generator class in project.
We intend to keep the customization options that the constructor accepts focussed on primary common use-cases.

## Recipies

### Generating mappers for a subset of available tables or fields

```ts
const options = {
    schemaPath,
    connectionSourcePath,
    outputDirPath,
    tables: {
        // Include only whitelisted tables
        include: [/authors/, "books"],
        // Similar exclude can be used to blacklist
    },
    fieldMappings: [
        {
            tableName: "authors",
            columnName: "name",
            // Ignore this field when generating table mapper
            generatedField: false,
        }
    ]
}
```

:warning: We don't do anything to ensure that database operations will succeed with included columns. Eg. if any omitted columns are mandatory they will cause inserts to fail. 

### Custom DB types

ts-sql-query supports custom database types through [type-adapters](https://ts-sql-query.readthedocs.io/en/stable/column-types/#type-adapters).

You can configure the code-generator to use type-adapters for specific columns or specific database types through field mappings.

```ts
const options = {
  schemaPath: './schema.yaml',
  connectionSourcePath: './connection-source.ts',
  common: {
      typeAdapter: {
          // Path from where adapters will be imported by default
          importPath: "src/db/adapters",
      },
  },
  fieldMappings: [
    {
        // Field matching criteria: 
        //
        // Match any column of any table where column type in database
        // is the class_participation_policy custom type
        columnType: "class_participation_policy",

        // For fields matched by above criteria,
        // use the ClassParticipationPolicyAdapter type adapter
        // which you will have to implement. 
        // 
        // You will need to ensure
        // that from above importPath (src/db/adapters) we are able to import: 
        //   1. The adapter itself (ClassParticipationPolicyAdapter)
        //   2. The typescript type which the mapped column will use (this will be used as generic type argument for column)
        //
        // Generated code will include an import like this:
        //     import { ClassParticipationPolicyAdapter, ClassParticipationPolicy } from '../adapters';
        //
        // The next example shows how to pick specific names instead of the default type names
        // that are conventionally derived (by pascal-casing) from database column type
        generatedField: {
            type: {
                adapter: {
                    name: "ClassParticipationPolicyAdapter",
                },
            },
        },
    },
    {
        // Alternatively, the field matching criteria
        // can point to specific column of a specific table
        tableName: "classrooms",
        columnName: 'participation_policy',
        // Instead of exact strings above, we could also use regular expressions

        generatedField: {
            type: {
                // We can specify the typescript type
                // which will be used for the mapped field 
                tsTypeName: 'ClassParticipationPolicy',

                // And also the database type name passed to ts-sql-query
                dbTypeName: 'class_participation_policy',

                adapter: {
                    name: "ClassParticipationPolicyAdapter",
                    // We can specify an importPath for this which
                    // will override the common import path
                    importPath: 'src/db/adapters/ClassParticipationPolicyAdapter'
                },
            },
        },
    }
  ]
}
```
