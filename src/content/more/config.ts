import { defineCollection, z } from "astro:content";

const more = defineCollection({
    schema: z.object({
        name: z.string(),
        brand: z.string(),
        img: z.string(),
        description: z.string(),
        buy: z.string().url(),
    })
})

export const collection = { more }