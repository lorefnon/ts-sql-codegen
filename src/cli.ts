#!/usr/bin/env node

import minimist from "minimist";
import { ZodError } from "zod";
import { Generator } from "./generator";
import fs from "fs/promises";
import path from "path";
import Handlebars from "handlebars";

main().catch((e) => {
    console.error(e);
    if (e instanceof ZodError) {
        printHelp();
    }
    process.exit(1);
});

async function main() {
    const argv = minimist(process.argv.slice(2));
    if (argv.help || argv.h) {
        await printHelp();
        return;
    }
    if (argv.version || argv.v) {
        await printVersion();
        return;
    }
    const generator = new Generator({
        dryRun: argv["dry-run"],
        schemaPath: argv["schema"] ?? argv["s"],
        connectionSourcePath: argv["connection-source"] ?? argv["c"],
        outputDirPath: argv["output-dir"] ?? argv["o"],
    });
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
