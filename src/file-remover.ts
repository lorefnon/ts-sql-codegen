import fs from "node:fs/promises";
import * as z from "zod";
import { glob } from "glob";
import path from "path/posix";
import prompts from "prompts";
import { GeneratorOptsSchema } from "./generator-options";
import { Logger } from "./logger"

export class FileRemover {
    constructor(
        private opts: z.output<typeof GeneratorOptsSchema>,
        private writtenFiles: Set<string>,
        private logger: Logger
    ) { }
    public async removeExtraneousFiles() {
        if (!this.opts.removeExtraneous || this.opts.removeExtraneous === 'never') {
            return;
        }
        const paths = await glob('*', {
            cwd: path.resolve(this.opts.outputDirPath)
        });
        const extraneousPaths = paths.filter(p => !this.writtenFiles.has(p))
        if (!extraneousPaths.length) {
            return
        }
        let pathsToDelete: string[] = []
        if (this.opts.removeExtraneous === 'all') {
            pathsToDelete = extraneousPaths
        } else if (this.opts.removeExtraneous === 'interactively') {
            const { selection } = await prompts({
                type: 'select',
                name: 'selection',
                message: `${extraneousPaths.length} extraneous files found after code generation. Select ones to delete:`,
                choices: [
                    { title: 'All', value: '$all' },
                    { title: 'None', value: '$none' },
                    { title: 'Select Individually', value: '$pick' }
                ]
            })
            switch (selection) {
                case '$all': {
                    pathsToDelete = extraneousPaths
                    break;
                }
                case '$pick': {
                    const { candidates } = await prompts({
                        type: 'multiselect',
                        name: 'candidates',
                        message: `Select files to delete:`,
                        choices: extraneousPaths.map(value => ({ title: value, value })),
                        hint: '- Space to select. Return to submit'
                    })
                    pathsToDelete.push(...candidates)
                    break;
                }
            }
        }
        this.logger.info(`Deleting ${pathsToDelete.length} files: `, pathsToDelete.join(', '))
        await Promise.all(pathsToDelete.map((p) =>
            fs.rm(path.join(this.opts.outputDirPath, p), {
                recursive: true
            }))
        )
    }
}
