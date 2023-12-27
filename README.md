# Astro Starter Kit
A slightly opiniated starter theme for general purpose content websites.

## Features
* Sitemap through [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
* MDX through [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
* Lightning CSS as a Vite transformer using Browserslist's `defaults`
* Generate favicons with a one time script `generate-favicons`. The generated favicons are already linked in the BaseLayout head. Usage:

```sh
npm run generate-favicons path/to/source.png
```