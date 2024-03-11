#!/usr/bin/env node

import { parseArgs } from "util";
import { ZodError } from "zod";
import { Generator } from "./generator";
import fs from "fs/promises";
import path from "path";
import Handlebars from "handlebars";
import { GeneratorOpts } from "./generator-options";

main().catch((e) => {
    console.error(e);
    if (e instanceof ZodError) {
        printHelp();
    }
    process.exit(1);
});

async function main() {
    const { values: argv } = parseArgs({
        options: {
            'help': { type: 'boolean', short: 'h' },
            'version': { type: 'boolean', short: 'v' },
            'dry-run': { type: 'boolean' },
            'schema': { type: 'string', short: 's' },
            'connection-source': { type: 'string', short: 'c' },
            'output-dir': { type: 'string', short: 'o' },
            'output-import-ext': { type: 'string' },
            'remove-extraneous': { type: 'string' },
            'export-table-instances': { type: 'boolean' },
            'export-row-types': { type: 'boolean' },
            'export-table-classes': { type: 'boolean' },
            'export-values-types': { type: 'boolean' },
            'export-extracted-columns': { type: 'boolean' }
        }
    });
    if (argv.help) {
        await printHelp();
        return;
    }
    if (argv.version) {
        await printVersion();
        return;
    }
    const generator = new Generator({
        dryRun: argv["dry-run"],
        schemaPath: argv["schema"],
        connectionSourcePath: argv["connection-source"],
        outputDirPath: argv["output-dir"],
        removeExtraneous: argv["remove-extraneous"] ?? "never",
        output: {
            import: {
                extension: argv["output-import-ext"],
            }
        },
        export: {
            tableInstances: argv['export-table-instances'],
            tableClasses: argv['export-table-classes'],
            rowTypes: argv['export-row-types'],
            valuesTypes: argv['export-values-types'],
            extractedColumns: argv['export-extracted-columns']
        }
    } as GeneratorOpts);
    await generator.generate();
}

async function printVersion() {
    const manifest = await readManifest();
    console.log(`${manifest.name} version ${manifest.version}`);
}

async function printHelp() {
    const helpTemplate = await compileHelpTemplate();
    const templateInput = await readManifest();
    console.log(helpTemplate(templateInput));
}

async function readManifest(): Promise<any> {
    const rawManifest = await fs.readFile(
        path.join(__dirname, "../package.json"),
        "utf8"
    );
    return JSON.parse(rawManifest);
}

async function compileHelpTemplate () {
    const templatePath = path.join(__dirname, "help.hbs");
    const templateContent = await fs.readFile(templatePath, 'utf8');
    return Handlebars.compile(templateContent);
}
