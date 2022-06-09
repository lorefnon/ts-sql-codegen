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
    console.log('ts-sql-codegen')
    console.log('')
    console.log('Usage: ')
    console.log('Step 1: Generate yaml schema file from database')
    console.log('  Example: tbls out postgres://postgres:password@localhost:5432/testdb -t yaml -o schema.yaml')
    console.log('Step 2: Pass this schema file to ts-sql-query-tbls-codegen')
    console.log('  Example: ts-sql-query-tbls-codegen --schema ./schema.yaml --output-dir ./src/generated --connection-source ./src/db/connection-source')
    console.log('Above options are default, so you can also just run ts-sql-query-tbls-codegen')
    console.log('')
    console.log('Note: ')
    console.log('- All paths are relative to cwd')
}

