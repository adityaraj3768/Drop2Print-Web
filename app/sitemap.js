import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Generated sitemap — emitted as /sitemap.xml at build time.
 * Only lists routes that actually exist (the old hand-written sitemap
 * pointed crawlers at /shops and /policy, which 404).
 */
export default function sitemap() {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/how-it-works/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/delete-account/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
