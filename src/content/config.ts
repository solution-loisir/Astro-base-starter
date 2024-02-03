import { z, defineCollection } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number()
  })
});

export const collections = {
  "pages": pages,
};