import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    id: z.string()
  })
})

export const collections = { posts }