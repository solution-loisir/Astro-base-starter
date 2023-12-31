import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

const site = "https://yourdomain.com";

export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: (page) => page !== `${site}/policy/`,
    }), 
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