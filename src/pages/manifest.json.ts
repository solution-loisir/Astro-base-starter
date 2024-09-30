import { manifest } from "@config/manifest";

export function GET() {

  return new Response(
    JSON.stringify({
      short_name: manifest.title,
      name: manifest.longTitle,
      description: manifest.description,
      icons: [
        {
          src: "/images/favicons/android-chrome-192x192.png",
          type: "image/png",
          sizes: "192x192"
        },
        {
          src: "/images/favicons/android-chrome-512x512.png",
          type: "image/png",
          sizes: "512x512"
        }
      ],
      start_url: manifest.startURL,
      background_color: manifest.background,
      display: manifest.display,
      scope: manifest.scope,
      theme_color: manifest.theme
    })
  )
}