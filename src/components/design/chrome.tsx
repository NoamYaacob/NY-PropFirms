"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { GoLink } from "@/components/analytics/GoLink";

export const NAV_ITEMS = [
  "Home",
  "Apex Rules",
  "Account Comparison",
  "EOD vs Intraday",
  "Evaluation Rules",
  "Performance Account Rules",
  "Payout Rules",
  "Trading Calculators",
  "FAQ",
  "Latest Apex Updates",
  "About & Affiliate Disclosure",
] as const;

const PREVIEWS = [
  { href: "/design/a", id: "a", label: "Briefing" },
  { href: "/design/b", id: "b", label: "Desk" },
  { href: "/design/c", id: "c", label: "House" },
] as const;

export type PreviewId = (typeof PREVIEWS)[number]["id"];

export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}

export function useEscape(active: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, onEscape]);
}

export function Logo({ href }: { href: string }) {
  return (
    <Link href={href} className="inline-flex items-baseline gap-1.5 font-semibold tracking-tight" dir="ltr">
      <span style={{ color: "var(--gold-300)" }}>NY</span>
      <span style={{ color: "var(--text-primary)" }}>PROP FIRMS</span>
    </Link>
  );
}

export function NavLinks({
  className,
  itemClassName,
  style,
  onNavigate,
}: {
  className?: string;
  itemClassName?: string;
  style?: CSSProperties;
  onNavigate?: () => void;
}) {
  return (
    <ul className={className}>
      {NAV_ITEMS.map((label) => (
        <li key={label}>
          <a
            href="#"
            className={itemClassName}
            style={style}
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.();
            }}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function DisclosedCta({
  ctaId,
  trackLabel,
  children,
  className = "",
  buttonClassName = "",
  align = "start",
}: {
  ctaId: string;
  trackLabel: string;
  children: ReactNode;
  className?: string;
  buttonClassName?: string;
  align?: "start" | "stretch";
}) {
  return (
    <div className={`flex flex-col ${align === "stretch" ? "items-stretch" : "items-start"} ${className}`}>
      <p className="text-[15px] leading-snug" style={{ color: "var(--text-secondary)" }}>
        Ad: I earn a commission if you use my code NOAM.
      </p>
      <p className="text-[15px] leading-snug mt-1" style={{ color: "var(--text-secondary)" }}>
        Disclosure: I&apos;m an Apex affiliate.
      </p>
      <p className="risk-line mt-1">
        Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
      </p>
      <GoLink
        ctaId={ctaId}
        trackLabel={trackLabel}
        className={`mt-4 inline-flex w-full items-center justify-center min-h-11 px-5 text-center text-[15px] font-semibold transition-colors sm:w-auto ${buttonClassName}`}
        style={{ backgroundColor: "var(--gold-500)", color: "#1a1408" }}
      >
        {children}
      </GoLink>
    </div>
  );
}

export function ReferralCode({ tone = "serif" }: { tone?: "serif" | "mono" | "grotesk" }) {
  const [copied, setCopied] = useState(false);

  function copyCode() {
    const done = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText("NOAM").then(done, () => setCopied(false));
    }
  }

  const codeClass =
    tone === "mono" ? "mono text-base tracking-[0.08em]" : tone === "grotesk" ? "text-xl font-semibold tracking-[0.04em]" : "serif text-2xl";

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="text-[15px] leading-snug" style={{ color: "var(--text-primary)" }}>
        Referral code <span className={codeClass}>NOAM</span>
      </p>
      <button
        type="button"
        onClick={copyCode}
        className="min-h-11 px-3 text-sm underline-offset-4 hover:underline"
        style={{ color: "var(--text-primary)" }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export function HelperNote({ scope }: { scope: string }) {
  return (
    <div>
      <p className="text-[15px] leading-snug font-semibold" style={{ color: "var(--text-primary)" }}>
        unofficial helper, not advice
      </p>
      <p className="text-[15px] leading-snug mt-1" style={{ color: "var(--text-primary)" }}>
        {scope}
      </p>
    </div>
  );
}

export function scopeLine(account: "evaluation" | "pa", drawdown: "eod" | "intraday") {
  const accountText = account === "evaluation" ? "the evaluation" : "the Performance Account";
  const otherAccount = account === "evaluation" ? "a Performance Account" : "an evaluation";
  const drawdownText = drawdown === "eod" ? "EOD" : "Intraday";
  const otherDrawdown = drawdown === "eod" ? "Intraday" : "EOD";
  return `Applies to ${accountText} and to ${drawdownText}. It does not apply to ${otherAccount} or to ${otherDrawdown}.`;
}

export function SiteFooter({ current }: { current: PreviewId }) {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--surface-border)", backgroundColor: "var(--surface-subtle)" }}
    >
      <div className="mx-auto max-w-[1120px] px-5 py-12 md:px-8">
        <Logo href={`/design/${current}`} />
        <div className="mt-6 max-w-3xl space-y-3">
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
            NY Prop Firms is an independent site. It is not owned by, operated by, or endorsed by Apex Trader Funding.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
            Referral code NOAM. Using it is optional.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Ad: I earn a commission if you use my code NOAM.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Disclosure: I&apos;m an Apex affiliate.
          </p>
          <p className="risk-line">
            Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Design preview. Not indexed.
          </p>
          <nav aria-label="Other design directions" className="flex flex-wrap gap-x-4 gap-y-2">
            {PREVIEWS.map((preview) => (
              <Link
                key={preview.id}
                href={preview.href}
                aria-current={preview.id === current ? "page" : undefined}
                className="text-sm min-h-11 inline-flex items-center"
                style={{ color: preview.id === current ? "var(--gold-300)" : "var(--text-primary)" }}
              >
                {preview.id.toUpperCase()} · {preview.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} NY Prop Firms
        </p>
      </div>
    </footer>
  );
}
