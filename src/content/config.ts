import { defineCollection, z } from "astro:content";

const review = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    // Transform string to Date object
    note: z.number(),
    spotifyUrl: z.string().optional(),
    releaseDate: z
      .string()
      .optional()
      .or(z.date())
      .transform((val) => (val ? new Date(val) : new Date())),
    reviewDate: z
      .string()
      .optional()
      .or(z.date())
      .transform((str) => (str ? new Date(str) : undefined)),
    cover: z.string().optional(),
  }),
});

export const collections = { review };
