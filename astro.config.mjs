import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";


export default defineConfig({
  site: "https://yourdomain.com",
  integrations: [
    sitemap(), 
    mdx()
  ],
  markdown: {
    syntaxHighlight: "prism",
  },
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