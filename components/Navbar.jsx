"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import CmykDots from "./CmykDots";
import logo from "@/public/logo-nav.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
  { to: "/#become-partner", label: "Become a Partner" },
];

/** Match pathname against a link target, tolerant of the trailing slash
    that static export adds to every route. */
const isActive = (pathname, to) =>
  pathname === to || pathname === `${to}/`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation (adjust-state-during-render pattern)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileOpen(false);
  }

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-paper/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-5 md:px-8"
      >
        <div className="flex items-center justify-between h-[68px]">
          {/* Logotype */}
          <Link href="/" className="group flex items-center gap-3 no-underline">
            <span className="relative grid place-items-center w-9 h-9 rounded-lg overflow-hidden transition-transform duration-300 group-hover:-rotate-6">
              <Image
                src={logo}
                alt="Drop2Print logo"
                className="w-full h-full object-cover"
                priority
              />
              <span className="absolute -bottom-1 -right-1">
                <CmykDots size={3} gap="gap-[2px]" />
              </span>
            </span>
            <span className="font-display text-[19px] tracking-tight text-paper">
              Drop2Print
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.to);
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  aria-current={active ? "page" : undefined}
                  className={`link-underline text-[13.5px] font-medium tracking-wide no-underline transition-colors duration-200 ${
                    active ? "text-paper" : "text-paper-dim hover:text-paper"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="#get-app"
              className="group inline-flex items-center gap-1.5 pl-4 pr-3 py-2 rounded-full bg-paper text-ink text-[13px] font-semibold no-underline transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Get the app
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-paper/10 bg-paper/[0.04] text-paper-dim hover:text-paper transition-colors"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — full-height sheet */}
      <div
        className={`md:hidden fixed inset-x-0 top-[68px] bottom-0 transition-all duration-400 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full bg-ink/97 backdrop-blur-2xl px-6 pt-8 flex flex-col">
          {navLinks.map((link, i) => {
            const active = isActive(pathname, link.to);
            return (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                aria-current={active ? "page" : undefined}
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
                className={`py-4 border-b border-paper/[0.06] font-display text-[26px] no-underline transition-all duration-500 ${
                  mobileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } ${active ? "text-paper" : "text-paper-dim"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="#get-app"
            onClick={() => setMobileOpen(false)}
            style={{ transitionDelay: mobileOpen ? "280ms" : "0ms" }}
            className={`mt-8 inline-flex items-center justify-center gap-2 py-4 rounded-full bg-paper text-ink font-semibold text-[15px] no-underline transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Get the app <ArrowUpRight size={16} />
          </a>
          <div className="mt-auto pb-10 flex items-center gap-3 text-muted text-[12px]">
            <CmykDots size={4} />
            Don&rsquo;t lose aura waiting in line.
          </div>
        </div>
      </div>
    </header>
  );
}
