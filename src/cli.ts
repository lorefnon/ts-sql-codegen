#!/usr/bin/env node

import minimist from 'minimist'
import { ZodError } from 'zod'
import { Generator } from "./generator"

main().catch(e => {
    console.error(e);
    if (e instanceof ZodError) {
        printHelp();
    }
    process.exit(1);
})

async function main() {
    const argv = minimist(process.argv.slice(2));
    if (argv.help) {
        printHelp();
        return;
    }
   const generator = new Generator({
       dryRun: argv['dry-run'],
       schemaPath: argv['schema'] ?? argv['s'],
       connectionSourcePath: argv['connection-source'] ?? argv['c'],
       outputDirPath: argv['output-dir'] ?? argv['o']
   });
   await generator.generate();
}


async function printHelp() {
    console.log(`
    ts-sql-codegen is a simple utility for generating table mappers for relational databases
    
    Installation:

    Step 1: Install tbls and ensure it is available in path
      Refer: https://github.com/k1LoW/tbls#install
    Step 2: Install ts-sql-codegen'
      npm i --dev ts-sql-codegen

    Note:
      - Global installation (npm i -g ts-sql-codegen) can be convenient, but is preferrable
        to have ts-sql-codegen as a project dependency to avoid versioning issues.

    Usage: 

    After every database schema change:

    Step 1: Generate yaml schema file from database using tbls 
      Example: tbls out postgres://postgres:password@localhost:5432/testdb -t yaml -o schema.yaml
    Step 2: Pass this schema file to ts-sql-codegen
      Example: ts-sql-codegen --schema ./schema.yaml --output-dir ./src/generated --connection-source ./src/db/connection-source
    Above options are default, so you can also just run ts-sql-codegen

    Note: 
    - All paths are relative to cwd

    `)
}

