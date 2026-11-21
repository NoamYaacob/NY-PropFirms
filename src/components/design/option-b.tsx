"use client";

import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  DisclosedCta,
  HelperNote,
  Logo,
  NavLinks,
  ReferralCode,
  SiteFooter,
  scopeLine,
  useEscape,
  useLockBody,
} from "@/components/design/chrome";
import { PriceSection } from "@/components/design/prices";

const SIZES = ["25K", "50K", "100K", "150K"] as const;

export function OptionB() {
  return (
    <div className="opt-b">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
        <Sidebar />
        <div className="min-w-0">
          <MobileBar />
          <main id="content">
            <Workspace />
            <Comparison />
            <Prices />
            <PayoutTicket />
            <MidCta />
          </main>
          <SiteFooter current="b" />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside
      className="sticky top-0 hidden h-screen flex-col border-r px-5 py-6 lg:flex"
      style={{ borderColor: "var(--surface-border)", backgroundColor: "var(--surface-raised)" }}
    >
      <Logo href="/design/b" />
      <p className="mono mt-3 text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--gold-400)" }}>
        Rules desk
      </p>
      <nav className="mt-6 flex-1 overflow-y-auto" aria-label="Main">
        <NavLinks
          className="flex flex-col"
          itemClassName="block py-2 text-[13px] leading-snug"
          style={{ color: "var(--text-primary)" }}
        />
      </nav>
      <div className="mt-4 border-t pt-4" style={{ borderColor: "var(--surface-border)" }}>
        <ThemeToggle locale="en" />
      </div>
    </aside>
  );
}

function MobileBar() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useLockBody(open);
  useEscape(open, close);

  return (
    <div className="lg:hidden">
      <div
        className="sticky top-0 z-[100] flex h-14 items-center justify-between border-b px-4"
        style={{ backgroundColor: "var(--surface-overlay)", borderColor: "var(--surface-border)" }}
      >
        <Logo href="/design/b" />
        <div className="flex items-center">
          <ThemeToggle locale="en" />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center"
            style={{ color: "var(--text-primary)" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-0 top-14 z-[90] overflow-y-auto px-5 py-4" style={{ backgroundColor: "var(--surface-base)" }}>
          <NavLinks
            className="flex flex-col"
            itemClassName="block border-b py-3 text-lg"
            style={{ color: "var(--text-primary)", borderColor: "var(--surface-border)" }}
            onNavigate={close}
          />
        </div>
      ) : null}
    </div>
  );
}

function Workspace() {
  const [account, setAccount] = useState<"evaluation" | "pa">("evaluation");
  const [drawdown, setDrawdown] = useState<"eod" | "intraday">("eod");

  return (
    <section
      className="grid min-h-[100dvh] items-start gap-8 px-4 py-6 md:px-8 md:py-8 lg:grid-cols-2 lg:items-center"
      style={{ backgroundColor: "var(--surface-base)" }}
    >
      <div>
        <p className="mono text-[11px] tracking-[0.18em] uppercase" style={{ color: "var(--gold-400)" }}>
          NYPF · Sample drawing · Not a live account
        </p>
        <h1 className="rise mt-3 max-w-[14ch] text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl" style={{ color: "var(--text-primary)" }}>
          Open the rule the way you open a chart.
        </h1>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Independent rules desk for Apex Trader Funding. Apex does not endorse this site.
        </p>
        <div className="mt-5">
          <ReferralCode tone="mono" />
        </div>
        <DisclosedCta className="mt-5 max-w-md" ctaId="design_b_hero" trackLabel="Continue to Apex Trader Funding">
          Continue to Apex Trader Funding
        </DisclosedCta>
      </div>
      <div>
        <div className="flex flex-wrap gap-2">
          <DeskChoice pressed={account === "evaluation"} onClick={() => setAccount("evaluation")}>
            Evaluation
          </DeskChoice>
          <DeskChoice pressed={account === "pa"} onClick={() => setAccount("pa")}>
            Performance Account
          </DeskChoice>
          <DeskChoice pressed={drawdown === "eod"} onClick={() => setDrawdown("eod")}>
            EOD
          </DeskChoice>
          <DeskChoice pressed={drawdown === "intraday"} onClick={() => setDrawdown("intraday")}>
            Intraday
          </DeskChoice>
        </div>
        <div
          className="mt-4 border"
          style={{ borderColor: "var(--surface-border-strong)", backgroundColor: "var(--surface-raised)" }}
        >
          <div className="flex items-center justify-between gap-3 border-b px-3 py-2" style={{ borderColor: "var(--surface-border)" }}>
            <span className="mono text-[11px] tracking-[0.14em] uppercase" style={{ color: "var(--text-secondary)" }}>
              Drawdown Distance Calculator
            </span>
            <span className="mono text-[11px] text-right" style={{ color: "var(--gold-400)" }}>
              {drawdown === "eod" ? "Level steps at the close" : "Level ratchets and does not fall"}
            </span>
          </div>
          <div className="h-[150px] sm:h-[210px] lg:h-[240px]">
            <DrawdownChart mode={drawdown} />
          </div>
        </div>
        <div className="mt-4">
          <HelperNote scope={scopeLine(account, drawdown)} />
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            Informational distance only. Sample shell. It does not calculate.
          </p>
        </div>
      </div>
    </section>
  );
}

function DeskChoice({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className="mono min-h-11 px-3 text-[12px] tracking-wide"
      style={{
        backgroundColor: pressed ? "var(--gold-500)" : "var(--surface-raised)",
        color: pressed ? "#1a1408" : "var(--text-primary)",
        border: `1px solid ${pressed ? "var(--gold-500)" : "var(--surface-border-strong)"}`,
      }}
    >
      {children}
    </button>
  );
}

function DrawdownChart({ mode }: { mode: "eod" | "intraday" }) {
  const level = mode === "eod" ? "M 16 132 H 210 V 96 H 364" : "M 16 132 H 90 V 108 H 170 V 78 H 250 V 62 H 364";
  return (
    <svg viewBox="0 0 380 168" className="h-full w-full" role="img" aria-label="Sample drawing of distance from a balance path to the drawdown level. Informational only.">
      {[40, 80, 120].map((y) => (
        <line key={y} x1="12" y1={y} x2="368" y2={y} stroke="var(--surface-border)" />
      ))}
      <path
        d="M16 120 C 50 120, 70 78, 110 74 S 160 108, 200 86 S 260 48, 310 58 S 340 70, 364 46"
        fill="none"
        stroke="var(--text-primary)"
        strokeWidth="1.6"
        pathLength={1}
        className="draw"
      />
      <path d={level} fill="none" stroke="var(--gold-500)" strokeWidth="1.6" />
      <text x="16" y="156" fill="var(--text-secondary)" fontSize="11">
        session, no scale
      </text>
      <text x="200" y="156" fill="var(--gold-400)" fontSize="11">
        distance to the level
      </text>
    </svg>
  );
}

function Comparison() {
  return (
    <section className="border-t px-4 py-16 md:px-8" style={{ borderColor: "var(--surface-border)" }} aria-labelledby="compare-heading">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 id="compare-heading" className="text-3xl font-medium tracking-[-0.03em]" style={{ color: "var(--text-primary)" }}>
          Account comparison
        </h2>
        <p className="mono text-[11px] tracking-[0.14em] uppercase" style={{ color: "var(--gold-400)" }}>
          Four sizes · sample labels
        </p>
      </div>
      <div className="mt-6 max-w-2xl">
        <HelperNote scope="Applies to the evaluation and to EOD. It does not apply to a Performance Account or to Intraday." />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {SIZES.map((size, index) => (
          <article
            key={size}
            className="border p-4"
            style={{
              backgroundColor: "var(--surface-raised)",
              borderColor: index === 1 ? "var(--gold-edge)" : "var(--surface-border)",
            }}
          >
            <p className="mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--text-secondary)" }}>
              Size 0{index + 1}
            </p>
            <h3 className="mt-3 text-4xl font-medium tracking-[-0.04em]" style={{ color: "var(--text-primary)" }}>
              {size}
            </h3>
            <dl className="mt-5 space-y-3 text-[15px]">
              <div className="flex items-baseline justify-between gap-3 border-t pt-3" style={{ borderColor: "var(--surface-border)" }}>
                <dt style={{ color: "var(--text-secondary)" }}>Drawdown distance</dt>
                <dd style={{ color: "var(--text-primary)" }}>[verified figure]</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 border-t pt-3" style={{ borderColor: "var(--surface-border)" }}>
                <dt style={{ color: "var(--text-secondary)" }}>Contract cap</dt>
                <dd style={{ color: "var(--text-primary)" }}>[verified figure]</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <ul className="mono mt-8 grid gap-2 text-[13px] md:grid-cols-2" style={{ color: "var(--text-secondary)" }}>
        <li>Consistency — named here, not calculated</li>
        <li>Payout eligibility — sample ticket below</li>
        <li>Drawdown Distance Calculator — informational distance only</li>
        <li>Position size — a separate helper, not part of the distance reading</li>
        <li>Account-path picker — evaluation or PA, EOD or Intraday</li>
      </ul>
    </section>
  );
}

function Prices() {
  return <PriceSection variant="desk" />;
}

function PayoutTicket() {
  return (
    <section className="px-4 pb-4 md:px-8" aria-labelledby="payout-heading">
      <div
        className="grid gap-8 border p-5 md:grid-cols-2 md:p-6"
        style={{ borderColor: "var(--surface-border-strong)", backgroundColor: "var(--surface-overlay)" }}
      >
        <div>
          <p className="mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--gold-400)" }}>
            Payout eligibility
          </p>
          <h2 id="payout-heading" className="mt-2 text-3xl font-medium tracking-[-0.03em]" style={{ color: "var(--text-primary)" }}>
            A ticket, not a verdict.
          </h2>
          <div className="mt-4">
            <HelperNote scope="Applies to the Performance Account and to EOD. It does not apply to an evaluation or to Intraday." />
          </div>
        </div>
        <dl>
          {["Qualifying days", "Safety net", "Consistency"].map((term) => (
            <div key={term} className="flex items-center justify-between gap-4 border-b py-3" style={{ borderColor: "var(--surface-border)" }}>
              <dt className="mono text-[12px] tracking-wide" style={{ color: "var(--text-secondary)" }}>
                {term}
              </dt>
              <dd className="text-[15px]" style={{ color: "var(--text-primary)" }}>
                [verified figure]
              </dd>
            </div>
          ))}
          <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>
            Sample shell. It does not calculate, and it does not say that a payout is available.
          </p>
        </dl>
      </div>
    </section>
  );
}

function MidCta() {
  return (
    <section className="px-4 py-16 md:px-8" aria-labelledby="mid-b">
      <div className="border px-5 py-8 md:px-8" style={{ borderColor: "var(--gold-edge)", backgroundColor: "var(--surface-raised)" }}>
        <p className="mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--gold-400)" }}>
          Route
        </p>
        <h2 id="mid-b" className="mt-2 text-3xl font-medium tracking-[-0.03em]" style={{ color: "var(--text-primary)" }}>
          If you decide to use Apex
        </h2>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Referral code NOAM is optional. Read the rules for the account you buy, on Apex&apos;s own pages.
        </p>
        <div className="mt-4">
          <ReferralCode tone="mono" />
        </div>
        <DisclosedCta className="mt-6 max-w-md" ctaId="design_b_mid" trackLabel="Explore Apex accounts">
          Explore Apex accounts
        </DisclosedCta>
      </div>
    </section>
  );
}
