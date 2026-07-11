import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CmykDots from "@/components/CmykDots";
import PolicyTabs from "@/components/PolicyTabs";
import { POLICIES_UPDATED } from "@/lib/policies";
import { SUPPORT_EMAIL, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata = {
  title: "Privacy Policy & Terms",
  description:
    "Read Drop2Print's Privacy Policy and Terms & Conditions. Learn how we collect, use, and protect your data when using our online document printing service in India.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "Drop2Print — Privacy Policy & Terms",
    description:
      "Learn how Drop2Print handles your data and the terms of using our printing service.",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="grain min-h-screen bg-ink text-paper font-sans overflow-x-clip">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy & Terms", path: "/privacy" },
        ])}
      />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-10 md:pt-44 md:pb-14">
          <div className="grid-lines absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8">
            <div className="rise inline-flex items-center gap-2.5 mb-8" style={{ animationDelay: "0.05s" }}>
              <CmykDots size={5} />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-paper-dim">
                The fine print
              </span>
            </div>
            <h1 className="rise font-display font-medium text-[clamp(32px,5vw,52px)] leading-[1.08] tracking-tight mb-5" style={{ animationDelay: "0.15s" }}>
              Privacy &amp; Terms,
              <em className="text-accent-soft font-normal"> in plain language.</em>
            </h1>
            <p className="rise text-paper-dim text-[15px] max-w-md leading-relaxed mb-4" style={{ animationDelay: "0.3s" }}>
              How Drop2Print handles your data, and the rules that govern our
              service.
            </p>
            <p className="rise text-muted text-[12.5px]" style={{ animationDelay: "0.4s" }}>
              Last updated {POLICIES_UPDATED}
            </p>
          </div>
        </section>

        {/* Tabs + sections (both policies server-rendered for crawlers) */}
        <PolicyTabs />

        {/* Contact */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <Reveal>
              <div className="p-7 md:p-9 rounded-3xl bg-ink-2 border border-paper/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h2 className="font-display text-[22px] text-paper mb-2">
                    Have questions?
                  </h2>
                  <p className="text-paper-dim text-[13.5px] max-w-sm leading-relaxed">
                    If anything here is unclear — our policies, privacy practices
                    or legal terms — write to us directly.
                  </p>
                </div>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-paper text-ink font-semibold text-[13.5px] no-underline transition-all duration-300 hover:bg-accent hover:text-white whitespace-nowrap shrink-0"
                >
                  <Mail size={15} />
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
