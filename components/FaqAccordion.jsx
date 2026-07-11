"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

/**
 * FAQ accordion — client island for the open/close interaction.
 * Answers are always in the DOM (collapsed with CSS grid rows, never
 * removed), so crawlers index the full Q&A text that also backs the
 * page's FAQPage structured data.
 */
function FaqItem({ faq, open, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        open ? "border-accent/30 bg-accent/[0.04]" : "border-paper/[0.07] bg-ink-2"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="font-display text-[16.5px] text-paper">{faq.q}</span>
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
          <p className="px-6 pb-5 text-paper-dim text-[14px] leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ faqs }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <Reveal key={faq.q} delay={i * 60}>
          <FaqItem
            faq={faq}
            open={openFaq === i}
            onToggle={() => setOpenFaq(openFaq === i ? null : i)}
          />
        </Reveal>
      ))}
    </div>
  );
}
