import Link from "next/link";
import {
  Upload,
  Printer,
  MapPin,
  Zap,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  FileText,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Store,
  BookOpen,
  FileBadge,
  FlaskConical,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CmykDots from "@/components/CmykDots";
import PartnerAppCta from "@/components/PartnerAppCta";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  PLAY_STORE_URL,
  mobileAppJsonLd,
  JsonLd,
} from "@/lib/seo";
import playStoreReviews from "@/data/reviews.json";

/* ── Page metadata — the home page owns the primary search snippet ──── */
export const metadata = {
  // Absolute title: the homepage carries the brand + primary keyword phrase.
  title: { absolute: `${SITE_NAME} — ${SITE_TAGLINE} | Online Document Printing India` },
  description:
    "Print documents online with Drop2Print. Upload assignments, notes and PDFs from your phone, choose a nearby print shop, pay securely with UPI, and pick up your printout in minutes — no queues.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Upload documents from your phone, pick up prints at a shop near you in minutes. Available on Google Play and the App Store.",
  },
};

/* Aggregate rating derived from the real Play Store reviews we ship —
   structured data and visible content always agree. */
const ratingCount = playStoreReviews.length;
const ratingValue = ratingCount
  ? (
      playStoreReviews.reduce((sum, r) => sum + r.rating, 0) / ratingCount
    ).toFixed(1)
  : null;

const steps = [
  {
    num: "01",
    title: "Pick a shop",
    desc: "Browse real print shops near you. Compare prices, ratings and wait times before you commit.",
  },
  {
    num: "02",
    title: "Upload",
    desc: "Drop in your PDFs, images or docs and choose your print settings — copies, colour, sides, size.",
  },
  {
    num: "03",
    title: "Pay securely",
    desc: "UPI, cards, net banking — handled by Razorpay. Your order hits the shop's queue instantly.",
  },
  {
    num: "04",
    title: "Walk in, walk out",
    desc: "Show your order ID or QR at the counter. Your pages are waiting, warm off the press.",
  },
];

const features = [
  {
    icon: Upload,
    title: "Upload straight from your phone",
    desc: "Gallery, files or cloud — no forwarding PDFs to the shop's WhatsApp and hoping for a blue tick.",
  },
  {
    icon: Printer,
    title: "Printed in minutes",
    desc: "Files land in the shop's queue the moment you pay. Most orders are ready in 5–15 minutes.",
  },
  {
    icon: MapPin,
    title: "Real shops, nearby",
    desc: "A live map of local print shops with pricing, ratings and opening hours.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    desc: "Files are encrypted in transit and automatically deleted once your order is complete.",
  },
  {
    icon: Zap,
    title: "Skip the line, save the time",
    desc: "Order from the hostel, the bus, the back bench. The only walking you do is to pick up.",
  },
  {
    icon: Clock,
    title: "Order any time",
    desc: "Place orders 24/7 — shops pick them up the moment they open.",
  },
];

const audiences = [
  {
    icon: GraduationCap,
    label: "College students",
    text: "Assignments, practical files and 9 AM submissions — printed on the way to class, not instead of it.",
  },
  {
    icon: Briefcase,
    label: "Professionals",
    text: "Client decks, contracts and invoices, ready at the shop nearest your next meeting.",
  },
  {
    icon: Store,
    label: "Print shops",
    text: "A steady stream of prepaid orders, a cleaner queue, and customers who walk in only to collect.",
  },
];

const marqueeItems = [
  "Print from anywhere",
  "Skip the line",
  "Save the time",
  "Don't lose aura",
  "Pick up & go",
];

/* The paper deck — real things people print, dealt like a hand of cards */
const paperDocs = [
  {
    icon: BookOpen,
    file: "Lecture-notes.pdf",
    kind: "Study notes",
    meta: "56 pages · B&W",
    rot: -12,
    ty: 30,
    mobileHidden: true,
  },
  {
    icon: GraduationCap,
    file: "Assignment_final.pdf",
    kind: "Coursework",
    meta: "24 pages · A4",
    rot: -6,
    ty: 10,
  },
  {
    icon: Briefcase,
    file: "Resume.pdf",
    kind: "Career",
    meta: "2 pages · Colour",
    rot: 0,
    ty: 0,
  },
  {
    icon: FileBadge,
    file: "Admit-card.pdf",
    kind: "Exams",
    meta: "1 page · Colour",
    rot: 6,
    ty: 10,
  },
  {
    icon: FlaskConical,
    file: "Practical-file.pdf",
    kind: "Lab work",
    meta: "64 pages · 1-sided",
    rot: 12,
    ty: 30,
    mobileHidden: true,
  },
];

export default function Home() {
  return (
    <div className="grain min-h-screen bg-ink text-paper font-sans overflow-x-clip">
      {/* App rich-result data: name, platforms, price, real review rating */}
      <JsonLd data={mobileAppJsonLd({ ratingValue, ratingCount })} />

      <Navbar />

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28" aria-label="Introduction">
          <div className="grid-lines absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-1/4 -left-40 w-[480px] h-[480px] bg-accent/[0.07] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
              {/* Copy */}
              <div className="lg:col-span-7">
                <div className="rise inline-flex items-center gap-2.5 mb-8" style={{ animationDelay: "0.05s" }}>
                  <CmykDots size={5} />
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-paper-dim">
                    Made for college life
                  </span>
                </div>

                <h1 className="rise font-display font-medium text-[clamp(42px,7vw,76px)] leading-[1.02] tracking-[-0.02em] mb-7" style={{ animationDelay: "0.08s" }}>
                  Don&rsquo;t lose aura
                  <br />
                  <em className="text-accent-soft font-normal">
                    waiting in line.
                  </em>
                </h1>

                <p className="rise text-paper-dim text-[16px] md:text-[17px] leading-relaxed max-w-[460px] mb-10" style={{ animationDelay: "0.16s" }}>
                  Upload from your bed, the bus, or the 8:59 panic. Your pages
                  are ready before you are — no forwarding files to the
                  shop&rsquo;s WhatsApp, no &ldquo;bhaiya, ek print&rdquo;, no
                  line.
                </p>

                <div className="rise flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ animationDelay: "0.24s" }}>
                  <Link
                    href="/how-it-works"
                    className="link-underline text-paper-dim hover:text-paper text-[14.5px] font-medium no-underline transition-colors"
                  >
                    See how it works
                  </Link>
                </div>

                <div className="rise mt-12 flex items-center gap-6 text-muted text-[12.5px]" style={{ animationDelay: "0.32s" }}>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                    Live on Android &amp; iOS
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck size={14} className="text-paper-dim" />
                    Files auto-deleted after printing
                  </span>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                <div className="rise relative" style={{ animationDelay: "0.2s" }}>
                  {/* Floating paper receipt */}
                  <div
                    className="float-slower absolute -left-16 top-16 hidden sm:block w-[150px] rounded-lg bg-paper text-ink p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-10"
                    style={{ "--tilt": "-7deg" }}
                    aria-hidden="true"
                  >
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <CmykDots size={3} gap="gap-[3px]" />
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-ink/50 mb-1">
                      Order #2481
                    </p>
                    <p className="text-[13px] font-display mb-2">Resume.pdf</p>
                    <div className="border-t border-dashed border-ink/20 pt-2 flex justify-between text-[10px] text-ink/60">
                      <span>2 pages · B&amp;W</span>
                      <span className="font-semibold text-ink">₹6</span>
                    </div>
                  </div>

                  {/* Floating ready chip */}
                  <div
                    className="float-slow absolute -right-8 md:-right-14 bottom-28 hidden sm:flex items-center gap-2.5 rounded-full bg-ink-3 border border-paper/10 pl-2.5 pr-4 py-2.5 shadow-[0_16px_50px_rgba(0,0,0,0.5)] z-10"
                    style={{ "--tilt": "3deg" }}
                    aria-hidden="true"
                  >
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-emerald-400/15 text-emerald-400">
                      <CheckCircle2 size={15} />
                    </span>
                    <div>
                      <p className="text-[11.5px] font-semibold text-paper leading-tight">Ready for pickup</p>
                      <p className="text-[10px] text-muted leading-tight">Gupta Xerox · 250 m away</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative w-[290px] md:w-[310px] rounded-[2.6rem] border border-paper/[0.12] bg-ink-2 p-2.5 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                    <div className="rounded-[2rem] bg-[#0c0c11] overflow-hidden border border-paper/[0.05]">
                      {/* Status bar */}
                      <div className="flex items-center justify-between px-6 pt-4 pb-3">
                        <span className="text-[10px] text-muted">9:41</span>
                        <span className="w-16 h-4.5 rounded-full bg-ink border border-paper/[0.07]" />
                        <CmykDots size={3} gap="gap-[3px]" />
                      </div>

                      {/* App header */}
                      <div className="px-5 pb-4">
                        <p className="text-[10.5px] text-muted mb-0.5">Good morning 👋</p>
                        <p className="font-display text-[17px] text-paper">What are we printing?</p>
                      </div>

                      {/* Upload dropzone */}
                      <div className="mx-5 mb-3 rounded-xl border border-dashed border-accent/40 bg-accent/[0.06] px-4 py-5 text-center">
                        <Upload size={17} className="mx-auto mb-1.5 text-accent-soft" />
                        <p className="text-[11px] text-paper-dim">Tap to upload documents</p>
                      </div>

                      {/* File row */}
                      <div className="mx-5 mb-3 rounded-xl bg-paper/[0.04] border border-paper/[0.06] px-3.5 py-3 flex items-center gap-3">
                        <span className="grid place-items-center w-8 h-8 rounded-lg bg-magenta-dot/10 text-magenta-dot shrink-0">
                          <FileText size={14} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[11.5px] text-paper truncate">Assignment_final(2).pdf</p>
                          <p className="text-[9.5px] text-muted">14 pages · A4 · Double-sided</p>
                        </div>
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      </div>

                      {/* Settings chips */}
                      <div className="mx-5 mb-3 flex gap-1.5">
                        {["B&W", "A4", "2 copies"].map((chip) => (
                          <span key={chip} className="px-2.5 py-1 rounded-full bg-paper/[0.05] border border-paper/[0.08] text-[9.5px] text-paper-dim">
                            {chip}
                          </span>
                        ))}
                      </div>

                      {/* Printing status */}
                      <div className="mx-5 mb-4 rounded-xl bg-paper/[0.03] border border-paper/[0.06] px-3.5 py-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10.5px] text-paper-dim inline-flex items-center gap-1.5">
                            <Printer size={11} className="text-accent-soft" />
                            Printing at Gupta Xerox
                          </span>
                          <span className="text-[9.5px] text-emerald-400">~4 min</span>
                        </div>
                        <div className="h-1 rounded-full bg-paper/[0.07] overflow-hidden">
                          <div className="print-progress h-full rounded-full bg-gradient-to-r from-accent to-accent-soft" style={{ width: "62%" }} />
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mx-5 mb-6 rounded-xl bg-paper text-ink py-3 text-center text-[12px] font-semibold">
                        Track order
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ MARQUEE ═══════════ */}
        <div className="relative border-y border-paper/[0.06] bg-ink-2 py-5 overflow-hidden" aria-hidden="true">
          <div className="marquee-track items-center gap-10">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-10 shrink-0">
                <span className="font-display text-[17px] text-paper-dim italic">{item}</span>
                <CmykDots size={4} />
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════ PAPER DECK — what gets printed here ═══════════ */}
        <section className="py-24 md:py-32 overflow-hidden" aria-label="What gets printed">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal className="text-center mb-14 md:mb-20">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-muted mb-4">
                What gets printed here
              </p>
              <h2 className="font-display font-medium text-[clamp(30px,4.5vw,48px)] leading-tight tracking-tight">
                Notes. Assignments. Resumes.
                <br />
                <em className="text-accent-soft font-normal">
                  If it fits on paper, it prints here.
                </em>
              </h2>
            </Reveal>

            <Reveal bare>
              <div className="flex justify-center items-end pt-4 pb-8">
                {paperDocs.map((d, i) => {
                  const Icon = d.icon;
                  const fromCenter = Math.abs(i - 2);
                  return (
                    <div
                      key={d.file}
                      className={`paper-doc shrink-0 w-32 h-44 md:w-44 md:h-60 -ml-14 first:ml-0 md:-ml-8 md:first:ml-0 p-3.5 md:p-5 flex-col cursor-default ${
                        d.mobileHidden ? "hidden md:flex" : "flex"
                      }`}
                      style={{
                        "--rot": `${d.rot}deg`,
                        "--rot0": `${d.rot * 0.25}deg`,
                        "--ty": `${d.ty}px`,
                        "--gx": `${(2 - i) * 62}%`,
                        "--d": `${fromCenter * 130}ms`,
                        zIndex: 3 - fromCenter,
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="grid place-items-center w-7 h-7 rounded-md bg-ink/[0.06] text-ink/70">
                          <Icon size={14} strokeWidth={1.75} />
                        </span>
                        <CmykDots size={3} gap="gap-[3px]" className="mr-5 opacity-70" />
                      </div>
                      <p className="font-display text-[12.5px] md:text-[15px] leading-snug text-ink truncate">
                        {d.file}
                      </p>
                      <p className="text-[9px] md:text-[10px] text-ink/45 uppercase tracking-[0.14em] mt-1 mb-3">
                        {d.kind}
                      </p>
                      <div className="paper-doc-lines flex-1 rounded-sm" />
                      <div className="mt-3 pt-2.5 border-t border-dashed border-ink/20 text-center text-[9.5px] md:text-[10.5px] text-ink/55">
                        {d.meta}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={250}>
              <p className="text-center text-muted text-[13px] mt-6">
                …and everything in between — forms, admit cards, invoices, boarding passes.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ MANIFESTO ═══════════ */}
        <section className="py-24 md:py-32" aria-label="Our story">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <Reveal>
              <CmykDots size={5} className="mb-8" />
              <p className="font-display text-[clamp(24px,4vw,40px)] leading-[1.3] text-paper-dim">
                9:00 baje ki submission, aur 8:57 pe xerox waale bhaiya ke yahan
                line — <em className="text-paper">hum sab wahan khade the.</em>{" "}
                Drop2Print se file pehle bhejo, print pehle se ready — bas{" "}
                <em className="text-paper">pickup karo aur seedha class.</em>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ STEPS ═══════════ */}
        <section className="py-20 md:py-28 border-t border-paper/[0.06]" aria-label="How it works in four steps">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal className="mb-16">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-muted mb-4">
                    The process
                  </p>
                  <h2 className="font-display font-medium text-[clamp(30px,4.5vw,48px)] leading-tight tracking-tight">
                    Four steps.
                    <em className="text-accent-soft font-normal"> That&rsquo;s the whole app.</em>
                  </h2>
                </div>
                <Link
                  href="/how-it-works"
                  className="group inline-flex items-center gap-2 text-paper-dim hover:text-paper text-[14px] font-medium no-underline transition-colors shrink-0"
                >
                  The full walkthrough
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-paper/[0.08]">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 90}>
                  <div className="group h-full px-1 md:px-6 first:md:pl-1 py-10 border-b md:border-b-0 lg:border-r border-paper/[0.08] lg:last:border-r-0 transition-colors duration-300 hover:bg-paper/[0.02]">
                    <p className="font-display text-[44px] leading-none text-paper/[0.14] mb-8 transition-colors duration-500 group-hover:text-accent-soft/60">
                      {step.num}
                    </p>
                    <h3 className="font-display text-[21px] text-paper mb-3">{step.title}</h3>
                    <p className="text-paper-dim text-[13.5px] leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FEATURES ═══════════ */}
        <section className="py-20 md:py-28 border-t border-paper/[0.06] bg-ink-2" aria-label="Why Drop2Print">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal className="mb-16 text-center">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-muted mb-4">
                Why Drop2Print
              </p>
              <h2 className="font-display font-medium text-[clamp(30px,4.5vw,48px)] leading-tight tracking-tight">
                Built like a good print —
                <br />
                <em className="text-accent-soft font-normal">sharp, clean, no smudges.</em>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} delay={(i % 3) * 90}>
                    <div className="group h-full p-7 rounded-2xl bg-ink border border-paper/[0.06] transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      <span className="grid place-items-center w-11 h-11 rounded-xl bg-paper/[0.04] border border-paper/[0.07] text-paper-dim mb-6 transition-all duration-300 group-hover:bg-accent/10 group-hover:border-accent/25 group-hover:text-accent-soft">
                        <Icon size={19} strokeWidth={1.75} />
                      </span>
                      <h3 className="font-display text-[18px] text-paper mb-2">{f.title}</h3>
                      <p className="text-paper-dim text-[13.5px] leading-relaxed">{f.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ WHO IT'S FOR ═══════════ */}
        <section className="py-20 md:py-28 border-t border-paper/[0.06]" aria-label="Who Drop2Print is for">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal className="mb-16">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-muted mb-4">
                Who it&rsquo;s for
              </p>
              <h2 className="font-display font-medium text-[clamp(30px,4.5vw,48px)] leading-tight tracking-tight max-w-xl">
                Anyone who has ever said
                <em className="text-accent-soft font-normal"> &ldquo;I just need one printout.&rdquo;</em>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {audiences.map((a, i) => {
                const Icon = a.icon;
                return (
                  <Reveal key={a.label} delay={i * 100}>
                    <div className="h-full p-8 rounded-2xl bg-ink-2 border border-paper/[0.06] transition-colors duration-300 hover:border-paper/[0.14]">
                      <div className="flex items-center justify-between mb-8">
                        <span className="grid place-items-center w-11 h-11 rounded-full bg-paper text-ink">
                          <Icon size={19} strokeWidth={1.75} />
                        </span>
                        <span className="font-display text-[13px] italic text-muted">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-[22px] text-paper mb-3">{a.label}</h3>
                      <p className="text-paper-dim text-[14px] leading-relaxed">{a.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ PLAY STORE REVIEWS ═══════════ */}
        {/* Real reviews from data/reviews.json — the same data feeds the
            MobileApplication aggregateRating structured data above. */}
        {playStoreReviews.length > 0 && (
          <section className="py-20 md:py-28 border-t border-paper/[0.06]" aria-label="User reviews">
            <div className="max-w-6xl mx-auto px-5 md:px-8">
              <Reveal className="mb-16 text-center">
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-muted mb-4">
                  From the Play Store
                </p>
                <h2 className="font-display font-medium text-[clamp(30px,4.5vw,48px)] leading-tight tracking-tight">
                  Don&rsquo;t take our word for it.
                  <br />
                  <em className="text-accent-soft font-normal">Take theirs.</em>
                </h2>
              </Reveal>

              {/* Moving carousel — duplicate the list so the track loops seamlessly */}
              <div
                className="relative overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
                  maskImage:
                    "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
                }}
              >
                <div className="marquee-track gap-4 py-2" style={{ animationDuration: "90s" }}>
                  {[...playStoreReviews, ...playStoreReviews].map((r, i) => (
                    <div
                      key={`${r.id}-${i}`}
                      // The duplicated half is pure visual continuity — hide
                      // it from crawlers and screen readers.
                      aria-hidden={i >= playStoreReviews.length ? "true" : undefined}
                      className="shrink-0 w-[300px] sm:w-[340px] flex flex-col p-6 rounded-2xl bg-ink-2 border border-paper/[0.06]"
                    >
                      <div
                        className="flex gap-1 mb-4"
                        aria-label={`${r.rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star
                            key={si}
                            size={13}
                            className={
                              si < r.rating
                                ? "text-yellow-dot fill-yellow-dot"
                                : "text-paper/15"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-paper-dim text-[14px] leading-relaxed mb-5 line-clamp-4">
                        &ldquo;{r.text}&rdquo;
                      </p>
                      <div className="mt-auto">
                        <p className="text-paper font-semibold text-[13.5px]">
                          {r.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-12">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-paper-dim hover:text-paper text-[13.5px] font-medium no-underline"
                >
                  Read more on Google Play <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ PARTNER SHOPS ═══════════ */}
        <section id="become-partner" className="py-20 md:py-28 border-t border-paper/[0.06] scroll-mt-24" aria-label="For print shop partners">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div className="relative rounded-3xl bg-paper text-ink p-9 md:p-14 overflow-hidden">
                {/* halftone corner texture */}
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.12]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #0a0a0c 1.4px, transparent 1.6px)",
                    backgroundSize: "12px 12px",
                  }}
                />
                <div className="relative grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-ink/50 mb-4">
                      For print shops
                    </p>
                    <h2 className="font-display font-medium text-[clamp(28px,4vw,42px)] leading-tight tracking-tight mb-5">
                      Run a print shop?
                      <em className="font-normal"> Put it on the map.</em>
                    </h2>
                    <p className="text-ink/65 text-[15px] leading-relaxed max-w-md">
                      Join the Drop2Print partner network and receive prepaid
                      orders straight to your counter — no file transfers over
                      WhatsApp, no crowd at the desk.
                    </p>
                  </div>

                  <PartnerAppCta />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="relative py-28 md:py-36 border-t border-paper/[0.06] overflow-hidden" aria-label="Download Drop2Print">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/[0.08] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
            <Reveal>
              <CmykDots size={5} className="mb-8" />
              <h2 className="font-display font-medium text-[clamp(34px,5.5vw,60px)] leading-[1.08] tracking-tight mb-6">
                Print from anywhere.
                <br />
                <em className="text-accent-soft font-normal">
                  Pick up around the corner.
                </em>
              </h2>
              <p className="text-paper-dim text-[15.5px] max-w-md mx-auto mb-10 leading-relaxed">
                Download Drop2Print — upload tonight, pick up on the way to
                class. Every print shop nearby, now your personal printer.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
