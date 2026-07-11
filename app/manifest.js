import { SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

/** Generated web app manifest — emitted as /manifest.webmanifest. */
export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "Print documents online — upload from your phone, pick up at a nearby print shop in minutes.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#0a0a0c",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
