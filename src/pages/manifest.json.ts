import { manifest } from "@config/manifest";

export function GET() {

  return new Response(
    JSON.stringify({
      short_name: manifest.title,
      name: manifest.title + ". " + manifest.subtitle,
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
      start_url: "/",
      background_color: manifest.background,
      display: manifest.display,
      scope: "/",
      theme_color: manifest.theme
    })
  )
}