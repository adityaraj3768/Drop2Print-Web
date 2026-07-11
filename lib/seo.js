/**
 * Single source of truth for site-wide SEO.
 *
 * Every page's metadata and every JSON-LD block derives from these
 * constants so titles, URLs and brand facts never drift apart —
 * inconsistent structured data is a common cause of rich-result loss.
 */

export const SITE_URL = "https://www.drop2print.com";
export const SITE_NAME = "Drop2Print";
export const SITE_TAGLINE = "Print From Anywhere, Pick Up Near You";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.drop2print.app";
export const APP_STORE_URL =
  "https://apps.apple.com/in/app/drop2print/id6779613155";

export const SUPPORT_EMAIL = "support@drop2print.com";
export const PARTNERS_EMAIL = "";

/**
 * High-intent queries this product genuinely answers. Google ignores the
 * keywords <meta>, but these phrases are also woven through titles,
 * descriptions and on-page copy — which is what actually ranks.
 */
export const KEYWORDS = [
  "online document printing India",
  "print documents online",
  "print shop near me",
  "xerox shop near me",
  "print PDF online",
  "printout near me",
  "upload and print documents",
  "document printing app",
  "print from phone",
  "student assignment printing",
  "remote printing service",
  "Drop2Print",
];

/** Default social-share image (absolute URL required by most crawlers). */
export const OG_IMAGE = {
  url: `${SITE_URL}/web-app-manifest-512x512.png`,
  width: 512,
  height: 512,
  alt: "Drop2Print — upload documents from your phone, pick up prints at a shop near you",
};

/* ── JSON-LD builders ────────────────────────────────────────────────── */

/** Organization — brand identity, logo and support channels. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/web-app-manifest-512x512.png`,
    email: SUPPORT_EMAIL,
    sameAs: [PLAY_STORE_URL, APP_STORE_URL],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SUPPORT_EMAIL,
        availableLanguage: ["en", "hi"],
      },
    ],
    areaServed: { "@type": "Country", name: "India" },
  };
}

/** WebSite — names the site in the Google knowledge panel / sitelinks. */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/**
 * MobileApplication — powers app rich results (name, price, stars).
 * The aggregateRating mirrors the genuine Play Store reviews shipped in
 * data/reviews.json; update both together.
 */
export function mobileAppJsonLd({ ratingValue, ratingCount }) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: SITE_NAME,
    operatingSystem: "ANDROID, IOS",
    applicationCategory: "UtilitiesApplication",
    description:
      "Upload documents from your phone and pick up prints at a nearby print shop in minutes. PDF printing, secure Razorpay payments, files auto-deleted after printing.",
    installUrl: PLAY_STORE_URL,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    ...(ratingValue && ratingCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(ratingValue),
            ratingCount: String(ratingCount),
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
  };
}

/** FAQPage — makes the how-it-works FAQs eligible for FAQ rich results. */
export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** HowTo — step-by-step rich result for the printing flow. */
export function howToJsonLd(steps) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to print documents with Drop2Print",
    description:
      "Upload documents from your phone, choose a nearby print shop, pay securely and pick up your prints in minutes.",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  };
}

/** BreadcrumbList — breadcrumb trail under the result title in SERPs. */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Renders JSON-LD into a <script> tag. Server component — the structured
 * data is present in the initial HTML, no JS execution needed to see it.
 */
export function JsonLd({ data }) {
  const blocks = Array.isArray(data) ? data : [data];
  return blocks.map((block, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
    />
  ));
}
