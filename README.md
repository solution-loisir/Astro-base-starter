# Astro Starter Kit
An opiniated starter theme for general purpose content websites. It provides a base structure to build on. This is not a fully styled theme.

## Features
* Sitemap through [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/). The sitemap is linked inside of `BaseLayout` head as well as in the `robots.txt`.
* MDX through [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
* Lightning CSS as a Vite transformer using Browserslist's `defaults`
* Web manifest. Needs to be configure at `src/config/manifest.json`. Also provides default page title and description.
* Generate favicons in `public/images/favicons` with a one time script `generate-favicons`. See `generate-favicons.js` for script details. The generated favicons are already linked in the BaseLayout head. Usage:

```sh
npm run generate-favicons path/to/source.png
```
* Removing unused global style with Purgecss in production
* Prism for code highlighting
* Generate pages from `content/pages` through `pages/[...path].astro` using `layouts/PageLayout.astro`. For pages frontmatter definition see `content/config.ts`
* Aliasing relevant directories in `src`. For details see `tsconfig.json`

## How to use
1. Click the "Use this template" button.
2. Clone the newly created repo.
3. Navigate to the directory.
4. Install dependencies.
5. Replace the url with your production domain:
    * On the `site` property inside of `astro.config.mjs`.
    * In `public/robots.txt`.
6. Tweek `src/config/manifest.json` according to your configuration. Will provide default page title and description.

## Style
This theme is adopting an approach to css inspired by [CUBE CSS](https://cube.fyi/) and [Every Layout](https://every-layout.dev/). The main variation here is that [blocks](https://cube.fyi/block.html) and [exceptions](https://cube.fyi/exception.html) usully lives in the `.astro` components.