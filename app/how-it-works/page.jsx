import Link from "next/link";
import {
  Upload,
  Search,
  CreditCard,
  Package,
  Settings,
  Check,
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Store,
  Printer,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CmykDots from "@/components/CmykDots";
import FaqAccordion from "@/components/FaqAccordion";
import {
  PLAY_STORE_URL,
  faqJsonLd,
  howToJsonLd,
  breadcrumbJsonLd,
  JsonLd,
} from "@/lib/seo";

export const metadata = {
  title: "How It Works — Print Documents Online in 6 Steps",
  description:
    "How Drop2Print works: upload PDFs and documents from your phone, choose print settings, pick a nearby print shop, pay securely with UPI or card, and collect your printout in minutes.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    url: "/how-it-works",
    title: "How Drop2Print Works — Upload, Print, Pick Up",
    description:
      "Upload documents, choose a nearby print shop, pay securely, and pick up your prints in minutes.",
  },
};

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "Upload your documents",
    desc: "Open the Drop2Print app and upload your files — PDFs, images, Word documents and more, straight from your gallery, file manager or cloud storage.",
    details: [
      "Supports PDF, JPG, PNG and DOCX",
      "Upload up to 50 pages at once",
      "Preview every document before ordering",
    ],
  },
  {
    num: "02",
    icon: Settings,
    title: "Choose print settings",
    desc: "Decide exactly how your pages should come out — page range, copies, colour or black & white, single or double-sided, paper size.",
    details: [
      "Colour or black & white",
      "A4, A3 and Letter sizes",
      "Single or double-sided",
    ],
  },
  {
    num: "03",
    icon: Search,
    title: "Find a nearby shop",
    desc: "Browse print shops around you on a live map. Compare prices, check ratings, and see estimated wait times before you pick.",
    details: [
      "Live map of nearby shops",
      "Transparent pricing and ratings",
      "Opening hours and availability",
    ],
  },
  {
    num: "04",
    icon: CreditCard,
    title: "Pay securely",
    desc: "Check out with Razorpay — UPI, debit and credit cards, net banking, and popular wallets. Confirmation is instant.",
    details: [
      "Payments secured by Razorpay",
      "UPI, cards and net banking",
      "Instant payment confirmation",
    ],
  },
  {
    num: "05",
    icon: Printer,
    title: "The shop prints your order",
    desc: "The shop receives your order the moment you pay and starts printing. Follow the status live from the app.",
    details: [
      "Real-time order tracking",
      "Notification when it's ready",
      "Chat directly with the shop",
    ],
  },
  {
    num: "06",
    icon: Package,
    title: "Pick up and go",
    desc: "Walk in, show your order ID or QR code, and walk out with your pages. That's the whole trip.",
    details: [
      "Quick pickup by ID or QR",
      "Ready within minutes",
      "No standing in queues",
    ],
  },
];

const faqs = [
  {
    q: "What file formats are supported?",
    a: "We support PDF, JPG, PNG, and DOCX files. More formats coming soon.",
  },
  {
    q: "How long does printing take?",
    a: "Most orders are ready within 5–15 minutes after payment, depending on the shop and queue.",
  },
  {
    q: "Is my document data secure?",
    a: "Yes. All files are encrypted during transfer and automatically deleted from our servers after order completion.",
  },
  {
    q: "Can I cancel an order?",
    a: "You can cancel before the shop starts printing. Once printing begins, cancellation may not be possible.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, debit/credit cards, net banking, and digital wallets through Razorpay.",
  },
];

export default function HowItWorks() {
  return (
    <div className="grain min-h-screen bg-ink text-paper font-sans overflow-x-clip">
      {/* FAQ + HowTo rich results, breadcrumb trail in SERPs */}
      <JsonLd
        data={[
          faqJsonLd(faqs),
          howToJsonLd(steps),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "How It Works", path: "/how-it-works" },
          ]),
        ]}
      />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
          <div className="grid-lines absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
            <div className="rise inline-flex items-center gap-2.5 mb-8" style={{ animationDelay: "0.05s" }}>
              <CmykDots size={5} />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-paper-dim">
                How it works
              </span>
            </div>
            <h1 className="rise font-display font-medium text-[clamp(36px,6vw,64px)] leading-[1.05] tracking-tight mb-6" style={{ animationDelay: "0.15s" }}>
              From upload to pickup,
              <br />
              <em className="text-accent-soft font-normal">in six small moves.</em>
            </h1>
            <p className="rise text-paper-dim text-[16px] max-w-md mx-auto leading-relaxed" style={{ animationDelay: "0.3s" }}>
              Drop2Print makes printing as easy as ordering food. Here&rsquo;s the
              whole journey, step by step.
            </p>
          </div>
        </section>

        {/* Steps timeline */}
        <section className="py-14 md:py-20" aria-label="Step-by-step walkthrough">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <div className="relative">
              <div
                className="absolute left-[27px] md:left-[31px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-paper/10 to-transparent"
                aria-hidden="true"
              />

              <ol className="flex flex-col gap-14 md:gap-20 list-none p-0 m-0">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.num}>
                      <Reveal delay={60}>
                        <div className="relative flex gap-6 md:gap-10">
                          <div className="relative z-10 shrink-0">
                            <div className="grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-ink-3 border border-paper/10 text-paper-dim shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                              <Icon size={22} strokeWidth={1.6} />
                            </div>
                          </div>

                          <div className="flex-1 pt-1">
                            <div className="flex items-baseline gap-4 mb-3">
                              <span className="font-display italic text-[15px] text-accent-soft">
                                Step {step.num}
                              </span>
                              {i === steps.length - 1 && (
                                <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                                  Done ✓
                                </span>
                              )}
                            </div>
                            <h2 className="font-display text-[24px] md:text-[28px] text-paper leading-snug mb-3">
                              {step.title}
                            </h2>
                            <p className="text-paper-dim text-[14.5px] leading-relaxed mb-5 max-w-lg">
                              {step.desc}
                            </p>
                            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                              {step.details.map((d) => (
                                <li key={d} className="flex items-center gap-3 text-[13px] text-paper-dim">
                                  <span className="grid place-items-center w-4.5 h-4.5 rounded-full bg-emerald-400/10 text-emerald-400 shrink-0">
                                    <Check size={10} strokeWidth={3} />
                                  </span>
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* For users & shops */}
        <section className="py-16 md:py-24 border-t border-paper/[0.06]" aria-label="For users and print shops">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-4">
              <Reveal>
                <div className="group h-full p-9 rounded-3xl bg-ink-2 border border-paper/[0.07] transition-colors duration-300 hover:border-paper/[0.15]">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-paper text-ink mb-7">
                    <Smartphone size={21} strokeWidth={1.75} />
                  </span>
                  <h2 className="font-display text-[26px] text-paper mb-3">For you</h2>
                  <p className="text-paper-dim text-[14.5px] leading-relaxed mb-7 max-w-sm">
                    Download the app, create an account, and start printing
                    remotely. No more forwarding files to the shop&rsquo;s
                    WhatsApp and waiting for a blue tick.
                  </p>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-2 text-paper text-[14px] font-medium no-underline"
                  >
                    Download the app <ArrowUpRight size={15} />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="group h-full p-9 rounded-3xl bg-paper text-ink transition-transform duration-300">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-ink text-paper mb-7">
                    <Store size={21} strokeWidth={1.75} />
                  </span>
                  <h2 className="font-display text-[26px] mb-3">For print shops</h2>
                  <p className="text-ink/65 text-[14.5px] leading-relaxed mb-7 max-w-sm">
                    Partner with Drop2Print to receive prepaid remote orders, grow
                    your customer base, and clear the crowd at your counter.
                  </p>
                  <Link
                    href="/contact"
                    className="link-underline inline-flex items-center gap-2 text-ink text-[14px] font-semibold no-underline"
                  >
                    Become a partner <ArrowUpRight size={15} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 border-t border-paper/[0.06]" aria-label="Frequently asked questions">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <Reveal className="text-center mb-12">
              <CmykDots size={5} className="mb-6" />
              <h2 className="font-display font-medium text-[clamp(28px,4vw,42px)] tracking-tight">
                Questions, <em className="text-accent-soft font-normal">answered.</em>
              </h2>
            </Reveal>

            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 border-t border-paper/[0.06] overflow-hidden" aria-label="Get started">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.08] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
            <Reveal>
              <h2 className="font-display font-medium text-[clamp(30px,4.5vw,50px)] tracking-tight leading-[1.1] mb-6">
                Skip the line.
                <em className="text-accent-soft font-normal"> Save the time.</em>
              </h2>
              <p className="text-paper-dim text-[15px] max-w-md mx-auto mb-10">
                Download Drop2Print and experience the easiest way to print
                documents near you.
              </p>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 pl-7 pr-6 py-4 rounded-full bg-paper text-ink font-semibold text-[15px] no-underline transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_8px_40px_rgba(124,108,255,0.35)]"
              >
                Get started free
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
