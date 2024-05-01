interface Manifest {
  title: string,
  subtitle: string,
  description: string,
  display: "fullscreen" | "standalone" | "minimal-ui" | "browser",
  background: `#${string}`,
  theme: `#${string}`,
  startURL: string,
  scope: string,
  colorShemes: "normal" | "light" | "dark" | "light dark" | "dark light" | "only light"
}

export const manifest: Manifest = {
  title: "Astro base starter",
  subtitle: "An Astro framework starter theme.",
  description: "A slightly opiniated starter theme for general purpose content websites.",
  display: "standalone",
  background: "#ffffff",
  theme: "#000000",
  startURL: "/",
  scope: "/",
  colorShemes: "light"
}