import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/** Generated robots.txt — allow everything, point crawlers at the sitemap. */
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
