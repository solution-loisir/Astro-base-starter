import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

const site = "https://yourdomain.com";

// https://astro.build/config
export default defineConfig({
  site,
  prefetch: false,
  integrations: [
    sitemap({
      filter: page => !page.includes(`${site}/secret/`)
    }), 
    mdx()
  ],
  markdown: {
    syntaxHighlight: "prism"
  },
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 2%")),
        drafts: {
          nesting: true
        }
      }
    },
    build: {
      cssMinify: "lightningcss"
    }
  }
});