import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CmykDots from "@/components/CmykDots";

/** 404 — served with a real 404 status by static hosts (out/404.html),
    and noindexed so dead URLs never enter the index. */
export const metadata = {
  title: "404 — Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="grain min-h-screen bg-ink text-paper font-sans flex flex-col overflow-x-clip">
      <Navbar />

      <main className="relative flex-1 flex items-center justify-center overflow-hidden">
        <div className="grid-lines absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[280px] bg-accent/[0.08] rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />

        <div className="relative text-center px-5 py-24 max-w-lg mx-auto">
          <div className="rise inline-flex mb-6" style={{ animationDelay: "0.05s" }}>
            <CmykDots size={5} />
          </div>

          <p className="rise font-display font-medium text-[clamp(100px,20vw,170px)] leading-none tracking-tight text-paper" style={{ animationDelay: "0.1s" }}>
            4<em className="text-accent-soft font-normal">0</em>4
          </p>

          <h1 className="rise font-display text-[clamp(22px,3vw,30px)] text-paper mt-4 mb-4" style={{ animationDelay: "0.25s" }}>
            This page went out of print.
          </h1>

          <p className="rise text-paper-dim text-[15px] leading-relaxed mb-10 max-w-sm mx-auto" style={{ animationDelay: "0.4s" }}>
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been
            moved. Let&rsquo;s get you back to a fresh copy.
          </p>

          <div className="rise" style={{ animationDelay: "0.55s" }}>
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-paper text-ink font-semibold text-[14px] no-underline transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_8px_40px_rgba(124,108,255,0.35)]"
            >
              <Home size={16} />
              Back to home
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
