import fs from "node:fs";
import path from "node:path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CmykDots from "@/components/CmykDots";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const PARTNER_POLICIES_UPDATED = "06 October 2026";

/** Inline **bold** only — all the policy text needs. */
function inline(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? (
      <strong key={i} className="text-paper font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

/** Minimal renderer for the ## / ### / bullets / numbered / paragraph subset. */
function parse(md) {
  const blocks = [];
  let list = null;
  const flush = () => {
    if (list) blocks.push(list);
    list = null;
  };
  for (const raw of md.split("\n")) {
    const line = raw.trimEnd();
    let m;
    if (!line.trim()) {
      flush();
    } else if ((m = line.match(/^## (.+)/))) {
      flush();
      blocks.push({ type: "h2", text: m[1] });
    } else if ((m = line.match(/^### (.+)/))) {
      flush();
      blocks.push({ type: "h3", text: m[1] });
    } else if ((m = line.match(/^\* (.+)/))) {
      if (!list || list.type !== "ul") {
        flush();
        list = { type: "ul", items: [] };
      }
      list.items.push(m[1]);
    } else if ((m = line.match(/^\d+\. (.+)/))) {
      if (!list || list.type !== "ol") {
        flush();
        list = { type: "ol", items: [] };
      }
      list.items.push(m[1]);
    } else {
      // consecutive plain lines form one paragraph with line breaks
      const last = blocks[blocks.length - 1];
      if (!list && last?.type === "p") last.lines.push(line);
      else {
        flush();
        blocks.push({ type: "p", lines: [line] });
      }
    }
  }
  flush();
  return blocks;
}

const DOCS = [
  {
    id: "privacy",
    file: "privacy.md",
    label: "Privacy Policy",
    title: "Partner App Privacy Policy",
  },
  {
    id: "terms",
    file: "terms.md",
    label: "Terms & Conditions",
    title: "Partner Terms and Conditions",
  },
];

function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    if (b.type === "h2")
      return (
        <h3 key={i} className="font-display text-[20px] text-paper mt-10 mb-4 pt-7 border-t border-paper/[0.07]">
          {b.text}
        </h3>
      );
    if (b.type === "h3")
      return (
        <h4 key={i} className="text-[14px] font-semibold text-accent-soft mt-7 mb-3">
          {b.text}
        </h4>
      );
    if (b.type === "ul")
      return (
        <ul key={i} className="list-disc pl-5 mb-4 space-y-1 marker:text-accent">
          {b.items.map((it, j) => (
            <li key={j}>{inline(it)}</li>
          ))}
        </ul>
      );
    if (b.type === "ol")
      return (
        <ol key={i} className="list-decimal pl-5 mb-4 space-y-1 marker:text-accent">
          {b.items.map((it, j) => (
            <li key={j}>{inline(it)}</li>
          ))}
        </ol>
      );
    return (
      <p key={i} className="mb-4">
        {b.lines.map((l, j) => (
          <span key={j}>
            {j > 0 && <br />}
            {inline(l)}
          </span>
        ))}
      </p>
    );
  });
}

export default function PartnerPolicy() {
  const docs = DOCS.map((d) => ({
    ...d,
    blocks: parse(fs.readFileSync(path.join(process.cwd(), "content/partner", d.file), "utf8")),
  }));

  return (
    <div className="grain min-h-screen bg-ink text-paper font-sans overflow-x-clip">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Partner Policies", path: "/partner-policies" },
        ])}
      />
      <Navbar />
      <main>
        <section className="relative pt-36 pb-10 md:pt-44 md:pb-14">
          <div className="grid-lines absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8">
            <div className="inline-flex items-center gap-2.5 mb-8">
              <CmykDots size={5} />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-paper-dim">
                Partner App
              </span>
            </div>
            <h1 className="font-display font-medium text-[clamp(32px,5vw,52px)] leading-[1.08] tracking-tight mb-5">
              Partner Policies
            </h1>
            <p className="text-paper-dim text-[15px] max-w-md leading-relaxed mb-4">
              The Privacy Policy and Terms and Conditions for printing partners using the Drop2Print Partner App.
            </p>
            <p className="text-muted text-[12.5px] mb-8">
              Effective {PARTNER_POLICIES_UPDATED} · Last updated {PARTNER_POLICIES_UPDATED}
            </p>
            <nav aria-label="Partner policy documents" className="inline-flex p-1 gap-1 rounded-full bg-paper/[0.04] border border-paper/[0.07]">
              {DOCS.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  className="px-5 py-2.5 rounded-full text-[13.5px] font-semibold no-underline text-paper-dim hover:bg-paper hover:text-ink transition-colors"
                >
                  {d.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {docs.map((d) => (
          <article key={d.id} id={d.id} className="scroll-mt-24 pb-16 md:pb-20">
            <div className="max-w-3xl mx-auto px-5 md:px-8 text-paper-dim text-[14.5px] leading-[1.8]">
              <h2 className="font-display font-medium text-[clamp(26px,4vw,36px)] text-paper tracking-tight mb-6">
                {d.title}
              </h2>
              <Blocks blocks={d.blocks} />
            </div>
          </article>
        ))}
      </main>
      <Footer />
    </div>
  );
}
