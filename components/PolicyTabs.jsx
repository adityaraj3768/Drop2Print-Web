"use client";

import { useState } from "react";
import { ShieldCheck, FileText, Plus, AlertTriangle } from "lucide-react";
import { policies } from "@/lib/policies";

const tabIcons = { privacy: ShieldCheck, terms: FileText };

function SectionCard({ sec, open, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        open ? "border-accent/30 bg-accent/[0.04]" : "border-paper/[0.07] bg-ink-2"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4.5 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="flex items-center gap-4 md:gap-5 min-w-0">
          <span
            className={`font-display italic text-[15px] shrink-0 transition-colors duration-300 ${
              open ? "text-accent-soft" : "text-muted"
            }`}
          >
            {sec.number}
          </span>
          <span className="min-w-0">
            <span className="block font-display text-[16.5px] text-paper truncate">
              {sec.title}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.14em] text-muted mt-0.5">
              {sec.tag}
            </span>
          </span>
        </span>
        <span
          className={`grid place-items-center w-7 h-7 rounded-full border shrink-0 transition-all duration-300 ${
            open
              ? "rotate-45 border-accent/40 text-accent-soft"
              : "border-paper/15 text-paper-dim"
          }`}
        >
          <Plus size={14} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-400 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 pb-6 md:pl-[4.4rem]">
            {sec.content && (
              <p className="text-paper-dim text-[14px] leading-[1.8]">{sec.content}</p>
            )}
            {sec.subsections && (
              <div className="mt-2 flex flex-col gap-3">
                {sec.subsections.map((sub) => (
                  <div
                    key={sub.title}
                    className="p-4.5 rounded-xl bg-paper/[0.03] border border-paper/[0.05]"
                  >
                    <p className="flex items-center gap-2.5 text-[13px] font-semibold text-accent-soft mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {sub.title}
                    </p>
                    <p className="text-paper-dim text-[13.5px] leading-relaxed">{sub.body}</p>
                  </div>
                ))}
              </div>
            )}
            {sec.note && (
              <div className="mt-4 flex items-start gap-3 px-4 py-3 rounded-xl bg-yellow-dot/[0.07] border border-yellow-dot/20 text-[13px] text-yellow-dot">
                <AlertTriangle size={15} className="shrink-0 mt-0.5" />
                {sec.note}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Privacy / Terms tab switcher.
 *
 * SEO: BOTH policies render into the HTML on the server; the inactive tab
 * is toggled with the `hidden` attribute rather than unmounted, so the
 * complete Privacy Policy AND Terms & Conditions text is always present
 * for crawlers — a requirement for Play Store / App Store review links.
 * Accordion bodies collapse with CSS grid rows and also stay in the DOM.
 */
export default function PolicyTabs() {
  const [tab, setTab] = useState("privacy");
  const [open, setOpen] = useState(null);

  const switchTab = (key) => {
    if (key === tab) return;
    setTab(key);
    setOpen(null);
  };

  return (
    <>
      {/* Tabs */}
      <div className="max-w-3xl mx-auto px-5 md:px-8 mb-8">
        <div
          role="tablist"
          aria-label="Policy documents"
          className="rise inline-flex p-1 gap-1 rounded-full bg-paper/[0.04] border border-paper/[0.07]"
          style={{ animationDelay: "0.5s" }}
        >
          {Object.entries(policies).map(([key, val]) => {
            const Icon = tabIcons[key];
            const active = tab === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active}
                onClick={() => switchTab(key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold cursor-pointer border-none transition-all duration-300 ${
                  active
                    ? "bg-paper text-ink"
                    : "bg-transparent text-paper-dim hover:text-paper"
                }`}
              >
                <Icon size={15} strokeWidth={1.75} />
                {val.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sections — both policies stay mounted; inactive one is hidden */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          {Object.entries(policies).map(([key, val]) => (
            <div
              key={key}
              hidden={tab !== key}
              className="rise flex flex-col gap-3"
              style={{ animationDelay: "0.05s" }}
            >
              <h2 className="sr-only">{val.label}</h2>
              {val.sections.map((sec, i) => (
                <SectionCard
                  key={sec.number}
                  sec={sec}
                  open={tab === key && open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
