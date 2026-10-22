import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const writing = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/writing', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    // one-line summary for lists and the article header
    dek: z.string(),
    // longer summary for search engines and link previews
    description: z.string(),
    date: z.coerce.date(),
    topic: z.string(),
    series: z.object({ name: z.string(), part: z.number(), of: z.number() }).optional(),
    shortAnswer: z.string(),
    cites: z.array(z.object({ code: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
})

export const collections = { writing }
