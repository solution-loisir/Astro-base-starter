import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/pages/"}),
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

export const collections = { pages };