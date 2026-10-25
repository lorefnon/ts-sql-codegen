import * as z from "zod";

export type Genre = 'fantasy' | 'sci-fi' | 'horror';
export type Format = "Audio-Book" | "Digital" | "Physical";

export const ChapterMetadataSchema = z.object({
    a: z.string(),
    b: z.string().optional() 
})

export type ChapterMetadata = z.TypeOf<typeof ChapterMetadataSchema>;
