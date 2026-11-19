"use client";

import { useState } from "react";
import { GoLink } from "@/components/analytics/GoLink";
import { SourceLink } from "@/components/en/blocks";

export function AffiliateCodeBox({ position }: { position: "en_home_box" | "en_faq_box" }) {
  const [copied, setCopied] = useState(false);

  function copyCode() {
    const done = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText("NOAM").then(done, () => setCopied(false));
    }
  }

  return (
    <section
      className="rounded-xl p-5 md:p-6 mb-5 scroll-mt-24"
      id="code"
      aria-labelledby="code-h"
      style={{
        backgroundColor: "var(--gold-900)",
        border: "2px solid var(--gold-edge)",
      }}
    >
      <span
        className="inline-block text-xs font-extrabold tracking-wide px-2 py-1 rounded"
        style={{ backgroundColor: "var(--gold-500)", color: "var(--text-inverse)" }}
      >
        #ad · AFFILIATE DISCLOSURE
      </span>
      <h2 id="code-h" className="text-2xl font-bold mt-3 mb-3" style={{ color: "var(--text-primary)" }}>
        If you decide Apex fits you
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>
          <strong style={{ color: "var(--text-primary)" }}>I&apos;m an Apex Trader Funding affiliate.</strong> If you use code{" "}
          <strong style={{ color: "var(--text-primary)" }}>NOAM</strong> at checkout, or buy through the affiliate link below, I may earn a referral commission. NOAM is a referral code, and using it is optional. The code and link don&apos;t change any rule. Apex runs its own promotions, so compare the checkout price with and without the code.
        </p>
        <p>
          <span
            className="inline-flex items-center gap-2 font-mono font-bold text-xl px-3 py-2 rounded-lg"
            dir="ltr"
            style={{
              border: "1px dashed var(--gold-400)",
              color: "var(--gold-300)",
              backgroundColor: "var(--surface-base)",
            }}
          >
            NOAM
            <button
              type="button"
              onClick={copyCode}
              className="font-sans text-xs font-semibold rounded-md px-2.5 py-1.5"
              style={{ backgroundColor: "var(--gold-500)", color: "var(--text-inverse)" }}
            >
              {copied ? "Copied" : "Copy code"}
            </button>
          </span>
        </p>
        <p>
          <GoLink
            ctaId={position}
            className="inline-flex items-center font-semibold rounded-lg px-4 py-2.5 text-sm"
            style={{ backgroundColor: "var(--gold-500)", color: "var(--text-inverse)" }}
          >
            Go to Apex (affiliate link) →
          </GoLink>
        </p>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Prices and promotions change often and aren&apos;t shown here on purpose. Read the rules on Apex&apos;s own pages before you buy:{" "}
          <SourceLink id="eod_eval">EOD Evaluations</SourceLink>
          {" · "}
          <SourceLink id="intra_eval">Intraday Evaluations</SourceLink>.
        </p>
      </div>
    </section>
  );
}
