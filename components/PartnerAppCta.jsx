"use client";

import { useEffect, useState } from "react";
import { Smartphone, ArrowRight } from "lucide-react";
import { PARTNERS_EMAIL } from "@/lib/seo";

const PARTNER_APP_CONFIG_URL = "https://www.jsonkeeper.com/b/R3FB8";

/**
 * Partner-app download button. The only runtime-dynamic piece of the
 * home page, isolated as a small client island so the rest of the page
 * stays fully server-rendered for crawlers.
 */
export default function PartnerAppCta() {
  const [partnerApp, setPartnerApp] = useState({
    loading: true,
    version: null,
    apkUrl: "",
    error: false,
  });

  useEffect(() => {
    let isActive = true;

    const fetchPartnerAppConfig = async () => {
      try {
        const response = await fetch(PARTNER_APP_CONFIG_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch partner app config");

        const data = await response.json();
        const version = Number(data?.version);
        const apkUrl = typeof data?.apk_url === "string" ? data.apk_url : "";
        const hasValidData =
          Number.isFinite(version) && version > 0 && apkUrl.length > 0;

        if (!isActive) return;

        if (!hasValidData) {
          setPartnerApp({ loading: false, version: null, apkUrl: "", error: true });
          return;
        }
        setPartnerApp({ loading: false, version, apkUrl, error: false });
      } catch {
        if (isActive) {
          setPartnerApp({ loading: false, version: null, apkUrl: "", error: true });
        }
      }
    };

    fetchPartnerAppConfig();
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="flex flex-col items-start gap-4">
      {partnerApp.loading ? (
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-ink/[0.06] text-ink/50 text-[14px] font-medium">
          <span className="spin inline-block w-4 h-4 border-2 border-ink/20 border-t-ink/60 rounded-full" />
          Checking partner app availability…
        </div>
      ) : partnerApp.apkUrl ? (
        <a
          href={partnerApp.apkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-ink text-paper font-semibold text-[15px] no-underline transition-all duration-300 hover:bg-accent hover:shadow-[0_8px_40px_rgba(124,108,255,0.4)]"
        >
          <Smartphone size={17} />
          Download the Partner App
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      ) : (
        <a
          href={`mailto:${PARTNERS_EMAIL}`}
          className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-ink text-paper font-semibold text-[15px] no-underline transition-all duration-300 hover:bg-accent"
        >
          Write to {PARTNERS_EMAIL}
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
      {partnerApp.apkUrl ? (
        <span className="text-ink/45 text-[12.5px] pl-2">
          Version {partnerApp.version} · Android APK · Free for shops
        </span>
      ) : !partnerApp.loading ? (
        <span className="text-ink/45 text-[12.5px] pl-2">
          The partner app download is briefly offline — we&rsquo;ll set you up by email.
        </span>
      ) : null}
    </div>
  );
}
