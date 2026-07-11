/**
 * Tiny CMYK dot cluster — the Drop2Print print-house brand motif.
 * Server component: pure markup, ships no JavaScript.
 */
export default function CmykDots({ size = 5, gap = "gap-1.5", className = "" }) {
  const style = { width: size, height: size };
  return (
    <span className={`inline-flex items-center ${gap} ${className}`} aria-hidden="true">
      <span className="rounded-full bg-cyan-dot" style={style} />
      <span className="rounded-full bg-magenta-dot" style={style} />
      <span className="rounded-full bg-yellow-dot" style={style} />
      <span className="rounded-full bg-paper" style={style} />
    </span>
  );
}
