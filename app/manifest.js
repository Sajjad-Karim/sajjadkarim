import { siteConfig } from "@/config/site";

export default function manifest() {
  return {
    name: siteConfig.applicationName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0C10",
    theme_color: "#0A0C10",
    lang: "en",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  };
}
