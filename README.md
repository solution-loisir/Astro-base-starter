# Astro Starter Kit
A slightly opiniated starter theme for general purpose content websites.

## Features
* Sitemap through [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/). The sitemap is linked inside of BaseLayout head as well as in the robots.txt.
* MDX through [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
* Lightning CSS as a Vite transformer using Browserslist's `defaults`
* Generate favicons with a one time script `generate-favicons`. The generated favicons are already linked in the BaseLayout head. Usage:

```sh
npm run generate-favicons path/to/source.png
```

## How to use
1. Click the "Use this template" button.
2. Clone the newly created repo.
3. Navigate to the directory.
4. Install dependencies.
5. Replace the url with your production domain:
    * On the `site` property inside of `astro.config.mjs`.
    * In `public/robots.txt`.