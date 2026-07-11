"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal wrapper.
 * Fades + rises content into view once, the first time it enters the viewport.
 * Respects prefers-reduced-motion (content shows immediately).
 *
 * SEO note: children are always present in the server-rendered HTML —
 * this component only animates opacity/transform, it never withholds
 * content from crawlers.
 *
 * `bare` — the wrapper never hides itself; it only toggles `reveal-visible`
 * so children can run their own choreography (e.g. the paper deck fan).
 * Content stays visible even if the observer never fires.
 */
export default function Reveal({ children, delay = 0, className = "", bare = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reduced-motion users get content immediately, no observer needed.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${bare ? "" : "reveal"} ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
