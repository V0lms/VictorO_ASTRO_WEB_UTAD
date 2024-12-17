import { defineCollection, z } from "astro:content";

const pots = defineCollection({
    schema: z.object({
        name: z.string(),
        brand: z.string(),
        img: z.string(),
        description: z.string(),
        buy: z.string().url(),
    })
})

export const collection = { pots }