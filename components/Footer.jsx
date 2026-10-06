import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CmykDots from "./CmykDots";
import StoreBadges from "./StoreBadges";
import { SUPPORT_EMAIL, PARTNERS_EMAIL } from "@/lib/seo";
import logo from "@/public/logo-nav.png";

/**
 * Site footer. Server component — all links are plain crawlable HTML,
 * grouped under a semantic <footer> landmark with labelled nav sections.
 */
const columns = [
  {
    title: "Product",
    links: [
      { label: "How It Works", to: "/how-it-works" },
      { label: "Get the App", href: "#get-app" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Privacy & Terms", to: "/privacy" },
      { label: "Partner Policies", to: "/partner-policies" },
      { label: "Delete Account", to: "/delete-account" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
      { label: PARTNERS_EMAIL, href: `mailto:${PARTNERS_EMAIL}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-paper/[0.06] bg-ink-2 overflow-hidden">
      {/* Oversized ghost logotype */}
      <div
        aria-hidden="true"
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display font-semibold text-[22vw] leading-none text-paper/[0.02] whitespace-nowrap select-none pointer-events-none"
      >
        Drop2Print
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 no-underline mb-5">
              <span className="relative grid place-items-center w-9 h-9 rounded-lg overflow-hidden">
                <Image
                  src={logo}
                  alt="Drop2Print logo"
                  className="w-full h-full object-cover"
                />
                <span className="absolute -bottom-1 -right-1">
                  <CmykDots size={3} gap="gap-[2px]" />
                </span>
              </span>
              <span className="font-display text-[19px] tracking-tight text-paper">
                Drop2Print
              </span>
            </Link>
            <p className="font-display text-[22px] leading-snug text-paper-dim max-w-[300px] mb-6">
              Print from anywhere.
              <em className="text-paper"> Pick up around the corner.</em>
            </p>
            <div className="flex items-center gap-3 text-muted text-[12px] tracking-wide uppercase">
              <CmykDots size={4} />
              Made in India
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav
              key={col.title}
              aria-label={`${col.title} links`}
              className="md:col-span-2 md:last:col-span-3"
            >
              <h4 className="text-muted text-[11px] font-semibold uppercase tracking-[0.18em] mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link
                        href={l.to}
                        className="group inline-flex items-center gap-1 text-paper-dim hover:text-paper text-[13.5px] no-underline transition-colors duration-200"
                      >
                        {l.label}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-1 text-paper-dim hover:text-paper text-[13.5px] no-underline transition-colors duration-200"
                      >
                        {l.label}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Get the app */}
        <div
          id="get-app"
          className="scroll-mt-24 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          <span className="text-muted text-[11px] font-semibold uppercase tracking-[0.18em]">
            Get the app
          </span>
          <div className="md:ml-auto">
            <StoreBadges />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-paper/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-muted text-[12px]">
            © {new Date().getFullYear()} Drop2Print. All rights reserved.
          </span>
          <span className="text-muted text-[12px]">
            Governed by the laws of India.
          </span>
        </div>
      </div>
    </footer>
  );
}
