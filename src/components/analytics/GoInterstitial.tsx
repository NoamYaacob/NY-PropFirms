"use client";

import { useEffect } from "react";
import { allowlistedAffiliateUrl } from "@/lib/affiliate";

const DESTINATION = allowlistedAffiliateUrl();

export function GoInterstitial() {
  useEffect(() => {
    if (!DESTINATION) return;
    let left = false;
    const go = () => {
      if (left) return;
      left = true;
      window.location.replace(DESTINATION);
    };

    const originalFetch = window.fetch.bind(window);
    window.fetch = ((input: RequestInfo | URL, init?: RequestInit) => {
      const response = originalFetch(input, init);
      const target = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
      if (target.includes("/_vercel/insights/view")) {
        // The pageview request has started. keepalive lets it finish after we leave.
        window.setTimeout(go, 250);
      }
      return response;
    }) as typeof window.fetch;

    // Analytics can be blocked, or the script can refuse a headless browser.
    // Leave anyway so the interstitial is never a dead end.
    const cap = window.setTimeout(go, 1600);
    return () => {
      window.fetch = originalFetch;
      window.clearTimeout(cap);
    };
  }, []);

  if (!DESTINATION) {
    return (
      <main className="container-page py-16">
        <p style={{ color: "var(--text-primary)" }}>This link is unavailable.</p>
      </main>
    );
  }

  return (
    <main className="container-page py-16 max-w-xl">
      <p className="text-sm leading-relaxed" lang="en" style={{ color: "var(--text-secondary)" }}>
        Independent site. I&apos;m an Apex Trader Funding affiliate and may earn a commission if you use code NOAM.{" "}
        <strong style={{ color: "var(--text-primary)" }}>#ad</strong>
      </p>
      <p className="text-sm leading-relaxed mt-3" lang="he" dir="rtl" style={{ color: "var(--text-secondary)" }}>
        #פרסומת · גילוי נאות: NOAM הוא קוד ההפניה שלנו, וייתכן שנקבל עמלה אם תשתמשו בו או בקישורי Apex באתר. השימוש בקוד אינו חובה.
      </p>
      <p className="mt-6 text-base font-semibold" style={{ color: "var(--text-primary)" }}>
        Continuing to Apex…
      </p>
      <p className="mt-4">
        <a
          href={DESTINATION}
          rel="sponsored nofollow noopener"
          className="underline"
          style={{ color: "var(--teal-400)" }}
        >
          Continue to Apex (affiliate link)
        </a>
      </p>
    </main>
  );
}
