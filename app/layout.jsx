import { Fraunces, Inter } from "next/font/google";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  KEYWORDS,
  OG_IMAGE,
  organizationJsonLd,
  webSiteJsonLd,
  JsonLd,
} from "@/lib/seo";
import "./globals.css";

/* Self-hosted via next/font: fonts ship from our own origin with
   `font-display: swap` — no third-party request, no layout shift. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Site-wide metadata. Every page inherits this and overrides only what
 * differs (title, description, canonical, OG) — so no page can ship
 * without complete meta tags.
 */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Print documents online in India. Upload PDFs from your phone with Drop2Print, choose a nearby print shop, pay securely, and pick up your printout in minutes — no queues.",
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: SITE_URL,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Upload documents from your phone, pick up prints at a shop near you in minutes. Available on Google Play and the App Store.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Upload documents from your phone, pick up prints at a shop near you in minutes.",
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: { title: SITE_NAME },
  verification: {
    other: { "msvalidate.01": "8A6265500E28A73CCCB3C561D56CCDBB" },
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {/* Brand + site identity, present in the raw HTML of every page */}
        <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
