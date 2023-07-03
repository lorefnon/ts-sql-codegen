# ts-sql-codegen

This utility generates [table mapper classes](https://ts-sql-query.readthedocs.io/en/stable/connection-tables-views/#mapping-the-tables) for [ts-sql-query](https://ts-sql-query.readthedocs.io/en/stable/) by inspecting a database through [tbls](https://github.com/k1LoW/tbls).

While it is possible to use ts-sql-query without any code-generation, we have to manually keep the table-mappings in sync with the database which is burdensome.

With this utility, this mapping can be derived from the database itself as part of build process, eliminating the manual effort, reducing room for erroneous mapping and enabling true end-to-end type-safety.

The code-generation process is highly customizable and almost all the defaults (which are sensible for most databases) can be configured if needed.

## Features

1. Generate clean typescript table/view mappers from database schema
1. Ability to include/exclude tables/fields
1. Ability to customize field types and type adapters
1. Idiomatic pascal-cased/camel-cased table/field name mapping by default and ability to customize names if desired.
1. Auto-detection & mapping of computed fields, primary key columns.
1. Automatic documentation propagation from SQL comments

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
const { Generator } = require('ts-sql-codegen');

const options = {
   schemaPath: './schema.yaml',
   connectionSourcePath: './connection-source.ts'
}
const generator = new Generator(options);
await generator.generate();
```

Refer to [Generator](./docs/classes/Generator.md) and [GeneratorOpts](./docs/interfaces/GeneratorOpts.md) for available options.

The [test suite](./test/test.ts) also has examples of more complex customizations.

For advanced use-cases (eg. custom templates, pre/post processing of generated code
 and custom logic for table/column/field mapping) it is recommended to extend the Generator class in project.
We intend to keep the customization options that the constructor accepts focussed on primary common use-cases.

## Suggested workflow

This utility is expected to be used in a database-first workflow, where the developers first plan and implement the database level changes, and then adapt their code for the updated schema.

1. Use a database migration system for versioned database schema evolution. You are free to choose a migration utility that you like (eg. dbmate, liquibase, flyway etc.) - if you are starting out we recommend dbmate, a simple and easy to use solution.
1. Integrate the following steps into your build lifecycle
    1. Use migration utility to update database schema
        eg. `dbmate up`
    1. Dump yaml representation of schema through tbls
        eg. `tbls out postgres://localhost:5432/mydb -t yaml -o schema.yaml`
    1. Generate code using ts-sql-codegen
        eg. `ts-sql-codegen --schema ./schema.yaml --remove-extraneous`
1. Use generated table mappers in your application

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
        // Similarly exclude can be used to blacklist
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
        // The import paths are resolved relative to cwd, and converted
        // to relative paths wrt the generated file
        //
        // Generated code will include an import like this:
        //     import { ClassParticipationPolicyAdapter, ClassParticipationPolicy } from '../adapters';
        generatedField: {
            type: {
                kind: 'custom',
                adapter: {
                    name: "ClassParticipationPolicyAdapter",
                    importPath: "src/db/adapters",
                },
                tsType: {
                    name: "ClassParticipationPolicy",
                    importPath: "src/db/adapters",
                },
                dbType: {
                    name: 'class_participation_policy'
                }
            },
        },
    },
    {
        // Alternatively, the field matching criteria
        // can point to specific column of a specific table
        tableName: "classrooms",
        columnName: 'participation_policy',
        // Instead of exact strings above, we could also use regular expressions

        generatedField: { ... }
    }
  ]
}
```

### Multiple databases/schema

The codegenerator does not have any special support for multi-db or multi-schema scenarios.

You can simply run ts-sql-codegen multiple times for different databases/different schema.

#### Filtering tables by schema

The tbls schema dump contains table names with schema prefix. We can target this prefix in table inclusion criteria:

```ts
const options = {
  tables: {
    include: [/^public\..*/]
  }
}
```

This can be helpful, for instance, if we want tables from different schema to be generated with different configurations or different output directories.

#### Disambiguating tables in multi-schema scenarios

Use of `tableMapping.useQualifiedTableName=true` is recommended when the application can simultaneously use tables from multiple schema

```ts
const options = {
  tableMapping: {
    useQualifiedTableName: true
  }
}
```

With this option the output looks like:

```ts
export class AuthorsTable extends Table<DBConnection, 'PublicAuthorsTable'> {
    //                                                 ~~~~~~
    //                                                   ^
    // .. fields ...
    constructor() {
        super('public.authors')
        //     ~~~~~~~
        //        ^
    }
}
```

#### Specifying id prefix for multi-db scenarios

Use of idPrefix is recommended to ensure that table ids passed to ts-sql-query is unique when application can connect to tables with same name from multiple databases.

```ts
const options = {
  tableMapping: {
    idPrefix: 'ReportingDB'
  }
}
```

With this option the output looks like:

```ts
export class AuthorsTable extends Table<DBConnection, 'ReportingDBAuthorsTable'> {
    //                                                 ~~~~~~~~~~~
    //                                                     ^
    // .. fields ...
    constructor() {
        super('authors')
    }
}
```

This option will override the id prefix derived from schema name if `tableMapping.useQualifiedTableName` is true.

#### Remove extraneous files

By default, we don't delete any files. So, if you generate mappers for some tables, and then delete those tables from database, the corresponding mapper files will be left behind.

If you pass `removeExtraneous: true` generator option, we will remove any extraneous files. If you enable this, you will need to ensure that the output directory is used only by ts-sql-codegen and you never add any additional files there yourself.

## Known Limitations

1. Only databases which are supported by both ts-sql-query and tbls can be supported.
1. While ts-sql-codegen works with many databases and adapters, this utility has been tested only with postgresql & sqlite. Please report bugs if you face issues with other databases.
1. Enum/custom type inspection support is currently limited - it is required to manually specify typescript types and adapters for now.
1. Typescript is assumed - plain js projects are not supported currently

## Contributing

Thanks for your interest in contributing to this project. Pull requests and feature enhancements are welcome.

This utility is being used in projects with many tables, so backward incompatible changes in generated code are highly undesirable.

Feature flags are recommended for aspects which are not beneficial to all/most users.

Code-generation should be last resort - if some feature can be supported in ts-sql-query itself, we recommending contributing there.
