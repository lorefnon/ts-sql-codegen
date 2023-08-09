import * as z from "zod";

export const ImportedItemSchema = z.object({

    /** Name of import */
    name: z.string(),

    /** Path from which we should import */
    importPath: z.string().nullish(),

    /**
     * Whether this is a default import
     *
     * @default false
     */
    isDefault: z.boolean().nullish(),

    /**
     * Whether this is a relative import
     *
     * @default true
     */
    isRelative: z.boolean().nullish()
});

/**
 * Specifies options to construct an import
 *
 * Note that unless isRelative is specified as false, the import will be
 * resolved relative to the cwd from where generator is invoked and
 * then converted to a relative path relative to the generated file
 *
 * Examples:
 *    When generated file is located at src/db/tables/some-table.ts and generator
 *    is run from project root
 *
 *    Config: `{ name: "FooAdapter", importPath: 'src/db/adapters/foo-adapter'}`
 *    Generates:  `import { FooAdapter } from '../adapters/foo-adapter'`
 *
 *    Config: `{ name: "FooAdapter", isDefault: true, importPath: 'src/db/adapters/foo-adapter'}`
 *    Generates: `import FooAdapter from '../adapters/foo-adapter'`
 *
 *    Config: `{ name: "FooAdapter", isRelative: false, importPath: 'external-lib/foo-adapter'}`
 *    Generates: `import { FooAdapter } from '../adapters';`
 *
 */
export interface ImportedItem extends z.TypeOf<typeof ImportedItemSchema> {}

