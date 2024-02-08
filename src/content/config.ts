import { z, defineCollection } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /**
     * @description Determines the order inside of `MainNav` component. Set to a negative number to prevent entry in `MainNav`.
     */
    order: z.number(),
    /**
     * @description Set to false to prevent the page to build.
     */
    build: z.boolean()
  })
});

export const collections = {
  "pages": pages,
};