"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SUPPORT_EMAIL } from "@/lib/seo";

const inputClasses =
  "w-full px-5 py-3.5 rounded-xl bg-paper/[0.03] border border-paper/[0.09] text-paper text-[14px] placeholder:text-muted focus:border-accent/50 focus:bg-paper/[0.05] outline-none transition-all duration-200";

/**
 * Contact form — client island. No form backend: composes the message in
 * the visitor's own mail app so nothing silently disappears.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Drop2Print] ${formData.subject}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n—\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-12 rounded-3xl bg-ink-2 border border-emerald-400/20 text-center">
        <span className="grid place-items-center w-16 h-16 rounded-full bg-emerald-400/10 text-emerald-400 mx-auto mb-6">
          <CheckCircle2 size={28} strokeWidth={1.5} />
        </span>
        <h3 className="font-display text-[24px] text-paper mb-3">
          Your email app should be open
        </h3>
        <p className="text-paper-dim text-[14px] max-w-sm mx-auto leading-relaxed">
          Hit send there and it lands straight in our inbox. If nothing
          opened, write to us directly at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-accent-soft no-underline link-underline"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-8 px-6 py-3 rounded-full bg-paper/[0.05] border border-paper/[0.1] text-paper-dim hover:text-paper text-[13px] font-semibold cursor-pointer transition-colors"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-7 md:p-9 rounded-3xl bg-ink-2 border border-paper/[0.07]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-name" className="block text-paper-dim text-[12px] font-semibold uppercase tracking-wider mb-2.5">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-paper-dim text-[12px] font-semibold uppercase tracking-wider mb-2.5">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="contact-subject" className="block text-paper-dim text-[12px] font-semibold uppercase tracking-wider mb-2.5">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="How can we help?"
          className={inputClasses}
        />
      </div>

      <div className="mb-7">
        <label htmlFor="contact-message" className="block text-paper-dim text-[12px] font-semibold uppercase tracking-wider mb-2.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us more…"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-paper text-ink font-semibold text-[14px] cursor-pointer border-none transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_8px_40px_rgba(124,108,255,0.35)]"
      >
        Compose the email
        <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
