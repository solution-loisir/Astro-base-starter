import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import purgecss from "astro-purgecss";

const site = "https://yourdomain.com";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: page => page !== `${site}/policy/`
    }), 
    mdx(), 
    purgecss()
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