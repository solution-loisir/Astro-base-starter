import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";


export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [
    sitemap(), 
    mdx()
  ],
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist("defaults")),
        drafts: {
          nesting: true
        }
      }
    }
  },
});