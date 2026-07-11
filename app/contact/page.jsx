import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CmykDots from "@/components/CmykDots";
import ContactForm from "@/components/ContactForm";
import {
  SUPPORT_EMAIL,
  PARTNERS_EMAIL,
  breadcrumbJsonLd,
  JsonLd,
} from "@/lib/seo";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Drop2Print. Questions, feedback, bug reports or print-shop partnerships — email support@drop2print.com and we'll reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Drop2Print",
    description:
      "Questions, feedback or partnerships — reach out and we'll get back to you within 24 hours.",
  },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email us",
    value: SUPPORT_EMAIL,
    desc: "We reply within 24 hours",
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: Phone,
    title: "Call us",
    value: "+91 78569 07707",
    desc: "We're happy to help",
    href: "tel:+917856907707",
  },
  {
    icon: Clock,
    title: "Support hours",
    value: "Mon – Sat, 9 AM – 6 PM",
    desc: "Indian Standard Time",
    href: null,
  },
  {
    icon: MapPin,
    title: "Where we are",
    value: "India",
    desc: "Serving print shops across the country",
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="grain min-h-screen bg-ink text-paper font-sans overflow-x-clip">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-14 md:pt-44 md:pb-20">
          <div className="grid-lines absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
            <div className="rise inline-flex items-center gap-2.5 mb-8" style={{ animationDelay: "0.05s" }}>
              <CmykDots size={5} />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-paper-dim">
                Contact
              </span>
            </div>
            <h1 className="rise font-display font-medium text-[clamp(36px,6vw,64px)] leading-[1.05] tracking-tight mb-6" style={{ animationDelay: "0.15s" }}>
              Say hello.
              <em className="text-accent-soft font-normal"> We read everything.</em>
            </h1>
            <p className="rise text-paper-dim text-[16px] max-w-md mx-auto leading-relaxed" style={{ animationDelay: "0.3s" }}>
              A question, a bug, an idea, or a partnership — whatever it is,
              we&rsquo;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Info cards */}
        <section className="pb-10 md:pb-14" aria-label="Contact details">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <Reveal key={info.title} delay={i * 90}>
                    <div className="h-full p-7 rounded-2xl bg-ink-2 border border-paper/[0.07] text-center transition-colors duration-300 hover:border-paper/[0.14]">
                      <span className="grid place-items-center w-11 h-11 rounded-full bg-paper/[0.04] border border-paper/[0.08] text-paper-dim mx-auto mb-5">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <h2 className="font-display text-[17px] text-paper mb-1.5">
                        {info.title}
                      </h2>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="link-underline text-accent-soft text-[13.5px] font-medium no-underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-paper-dim text-[13.5px] font-medium">
                          {info.value}
                        </p>
                      )}
                      <p className="text-muted text-[12px] mt-1.5">{info.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 md:py-20" aria-label="Send us a message">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Left */}
              <Reveal className="md:col-span-2">
                <h2 className="font-display font-medium text-[clamp(24px,3vw,32px)] tracking-tight mb-4">
                  Send us a note
                </h2>
                <p className="text-paper-dim text-[14px] leading-relaxed mb-8">
                  Fill this in and it opens a ready-made email in your mail app —
                  addressed, formatted, done. We reply within 24 hours.
                </p>
                <div className="hidden md:flex items-center gap-3 text-muted text-[12px] uppercase tracking-[0.18em]">
                  <CmykDots size={4} />
                  No forms into the void
                </div>
              </Reveal>

              {/* Right */}
              <Reveal delay={120} className="md:col-span-3">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Partner CTA */}
        <section className="py-16 md:py-24 border-t border-paper/[0.06]" aria-label="Partner with us">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <Reveal>
              <div className="relative rounded-3xl bg-paper text-ink p-9 md:p-12 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-[0.12]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #0a0a0c 1.4px, transparent 1.6px)",
                    backgroundSize: "12px 12px",
                  }}
                />
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div>
                    <h2 className="font-display text-[clamp(24px,3vw,32px)] mb-3">
                      Own a print shop?
                    </h2>
                    <p className="text-ink/65 text-[14.5px] max-w-md leading-relaxed">
                      Partner with Drop2Print to receive prepaid remote orders and
                      grow your customer base. Join our network of printing
                      partners.
                    </p>
                  </div>
                  <a
                    href={`mailto:${PARTNERS_EMAIL}`}
                    className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-ink text-paper font-semibold text-[14px] no-underline transition-all duration-300 hover:bg-accent whitespace-nowrap shrink-0"
                  >
                    Become a partner
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
