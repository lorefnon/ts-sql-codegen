import * as z from "zod";

export type Genre = 'fantasy' | 'scifi' | 'horror';

export const ChapterMetadataSchema = z.object({
    a: z.string(),
    b: z.string().optional() 
})

export type ChapterMetadata = z.TypeOf<typeof ChapterMetadataSchema>;
