# Astro Starter Kit
An opiniated starter theme for general purpose content websites. It provides a base structure to build on. This is not a fully styled theme.

## Features
* Sitemap through [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/). The sitemap is linked inside of `BaseLayout` head as well as in the `robots.txt`.
* MDX through [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
* Lightning CSS as a Vite transformer
* Web manifest. Needs to be configure at `src/config/manifest.json`. Also provides default page `title` and `description`.
* Generate favicons in `public/images/favicons` with a one time script `generate-favicons`. See `generate-favicons.js` for script details. The generated favicons are already linked in the BaseLayout head. Usage:

```sh
npm run generate-favicons path/to/source.png
```
* Removing unused global style with Purgecss in production
* Prism for code highlighting
* Generate pages from `src/content/pages` through `src/pages/[...path].astro` using `src/layouts/PageLayout.astro`. For pages frontmatter definition see `src/content/config.ts`
* Aliasing relevant directories in `src`. For details see `tsconfig.json`
* Set `prefetch` to `true` or assign a config object to use a prefetch strategy. See https://docs.astro.build/en/guides/prefetch/ 
* Default Open Graph image located in `public/images/`
* A `404` page located at `src/pages/404.astro`. Produces a custom `404` page when supported by your hosting provider.
* Custom DOM library for light scripting. Check it out in `src/lib/dom.ts`. May be used in `Astro` components as so:
```html
<ol data-ref="my-list"></ol>

<script>
    import { ref, insertHTML } from "@dom";

    let markup = `
        <li>Item one</li>
        <li>Item two</li>
    `;

    insertHTML(markup, ref("my-list"));
</script>
```

## How to use
1. Click the "Use this template" button.
2. Clone the newly created repo.
3. Navigate to the directory.
4. Install dependencies.
5. Replace the url with your production domain:
    * On the `site` property inside of `astro.config.mjs`.
    * In `public/robots.txt`.
6. Tweek `src/config/manifest.json` according to your configuration. Will provide default page `title` and `description`.
7. Replace default Open Graph image in `public/images/` with your site specific OG image. You may have to modify OG image width and height. Optimal OG image dimesion is 1200 x 630.

## Style
This theme is adopting an approach to css inspired by [CUBE CSS](https://cube.fyi/) and [Every Layout](https://every-layout.dev/). The main variation here is that [blocks](https://cube.fyi/block.html) and [exceptions](https://cube.fyi/exception.html) usully lives in the `.astro` components.