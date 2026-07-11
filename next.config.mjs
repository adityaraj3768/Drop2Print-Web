/** @type {import('next').NextConfig} */
const nextConfig = {
  // A stray package-lock.json exists in the user home directory; pin the
  // tracing root so Next treats this folder as the project root.
  outputFileTracingRoot: import.meta.dirname,

  // Static export — every route pre-rendered to plain HTML at build time.
  // Crawlers receive complete markup (title, meta, JSON-LD, content) with
  // zero JavaScript required. Deployable on any static host.
  output: "export",

  // Static export has no image-optimization server.
  images: { unoptimized: true },

  // `/how-it-works/` → how-it-works/index.html — stable canonical URLs on
  // static hosts (no 301 hops between slash/no-slash variants).
  trailingSlash: true,
};

export default nextConfig;
