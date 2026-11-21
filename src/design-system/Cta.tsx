"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { GoLink } from "@/components/analytics/GoLink";
import { CtaDisclosures } from "./Blocks";
import { CODE_LABEL, CTA_HEADING, LINK_LABEL } from "./strings";

/** Copies the text "NOAM" only. Toast says "Copied" only. */
export function ReferralCode() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );
  function flash() {
    setCopied(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2200);
  }
  function legacyCopy() {
    try {
      const area = document.createElement("textarea");
      area.value = "NOAM";
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      if (ok) flash();
    } catch {
      /* no toast when nothing was copied */
    }
  }
  function copyCode() {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText("NOAM").then(flash, legacyCopy);
      return;
    }
    legacyCopy();
  }
  return (
    <div className="ds-code">
      <p className="ds-code-label">{CODE_LABEL}</p>
      <div className="ds-code-row">
        <span className="ds-mono ds-code-val" aria-hidden>
          NOAM
        </span>
        <div className="relative">
          <button type="button" onClick={copyCode} className="ds-copy" aria-label="Copy referral code NOAM">
            {copied ? <Check size={18} aria-hidden /> : <Copy size={18} aria-hidden />}
            Copy
          </button>
          <span className={`ds-toast ${copied ? "ds-toast-on" : ""}`} role="status" aria-live="polite">
            {copied ? "Copied" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * The one restrained CTA block. DOM order: CODE_CAVEAT, AD_LINE, DISC_LINE, RISK_COMPACT, then the copy control, then the button.
 * `ctaId` is the AF-plan id (en_mid_cta is home-only). The affiliate URL is never built here; GoLink goes through /go/apex/<src>.
 */
export function CtaBlock({ ctaId, intro, showCode = true, id }: { ctaId: string; intro?: ReactNode; showCode?: boolean; id?: string }) {
  return (
    <section id={id} className="ds-section" aria-labelledby={`${ctaId}-h`}>
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <div className="ds-card ds-glow ds-cta">
          <div>
            <h2 id={`${ctaId}-h`} className="ds-h2">
              {CTA_HEADING}
            </h2>
            {intro ? <div className="ds-cta-intro">{intro}</div> : null}
            <CtaDisclosures />
          </div>
          <div className="ds-plaque">
            {showCode ? <ReferralCode /> : null}
            <GoLink ctaId={ctaId} trackLabel={LINK_LABEL} className="ds-btn">
              {LINK_LABEL}
            </GoLink>
          </div>
        </div>
      </div>
    </section>
  );
}
