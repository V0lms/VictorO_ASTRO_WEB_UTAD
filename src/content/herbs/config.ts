import { defineCollection, z } from "astro:content";

const herbs = defineCollection({
    schema: z.object({
        name: z.string(),
        brand: z.string(),
        img: z.string(),
        ingredient: z.array(z.string()),
        description: z.string(),
        buy: z.string().url(),
    })
})

export const collection = { herbs }