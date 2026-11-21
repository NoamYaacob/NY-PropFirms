"use client";

import { useCallback, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
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
  useScrolled,
} from "@/components/design/chrome";
import { PriceSection } from "@/components/design/prices";

const RULE_LINKS = [
  "Apex Rules",
  "Account Comparison",
  "EOD vs Intraday",
  "Evaluation Rules",
  "Performance Account Rules",
  "Payout Rules",
  "Latest Apex Updates",
] as const;

const TOOLS = [
  ["Consistency", "A payout condition on the Performance Account. The sheet below is a sample shell."],
  ["Drawdown Distance Calculator", "Informational distance from the balance to the level. Nothing else."],
  ["Payout eligibility", "The gate before a payout can be requested. Sample only, on a later page."],
  ["Position size", "The contract cap for the account you actually hold. It will not size an order."],
  ["Account comparison", "Size beside size, after the figures are read from Apex again."],
  ["Account-path picker", "Evaluation or Performance Account. EOD or Intraday. The card on this page is the sample."],
] as const;

const SIZES = ["25K", "50K", "100K", "150K"] as const;

export function OptionA() {
  return (
    <div className="opt-a">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <HeaderA />
      <main id="content">
        <HeroA />
        <ToolIndex />
        <DrawdownEssay />
        <ConsistencySheet />
        <PriceSection variant="briefing" />
        <MidCta />
        <Contents />
      </main>
      <SiteFooter current="a" />
    </div>
  );
}

function HeaderA() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useLockBody(open);
  useEscape(open || rulesOpen, () => {
    setOpen(false);
    setRulesOpen(false);
  });

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] transition-colors duration-200"
      style={{
        backgroundColor: scrolled || open ? "var(--surface-overlay)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--surface-border)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-header)" : "none",
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 md:px-8">
        <Logo href="/design/a" />
        <div className="flex items-center gap-1">
          <nav className="hidden items-center lg:flex" aria-label="Main">
            <BarLink label="Home" />
            <div
              className="relative"
              onMouseEnter={() => setRulesOpen(true)}
              onMouseLeave={() => setRulesOpen(false)}
            >
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-1 px-3 text-sm"
                style={{ color: "var(--text-secondary)" }}
                aria-expanded={rulesOpen}
                aria-haspopup="true"
                onClick={() => setRulesOpen((value) => !value)}
              >
                Rules
                <ChevronDown size={14} aria-hidden />
              </button>
              {rulesOpen ? (
                <div
                  className="absolute left-0 top-full z-10 min-w-64 py-2"
                  style={{
                    backgroundColor: "var(--surface-overlay)",
                    border: "1px solid var(--surface-border-strong)",
                    boxShadow: "var(--shadow-header)",
                  }}
                >
                  {RULE_LINKS.map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="block px-4 py-2.5 text-sm"
                      style={{ color: "var(--text-primary)" }}
                      onClick={(event) => {
                        event.preventDefault();
                        setRulesOpen(false);
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            <BarLink label="Trading Calculators" />
            <BarLink label="FAQ" />
            <BarLink label="About & Affiliate Disclosure" />
          </nav>
          <ThemeToggle locale="en" />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden"
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
        <div className="fixed inset-0 top-16 z-[90] overflow-y-auto lg:hidden" style={{ backgroundColor: "var(--surface-base)" }}>
          <NavLinks
            className="flex flex-col px-5 py-4"
            itemClassName="block py-3 text-xl"
            style={{ color: "var(--text-primary)" }}
            onNavigate={close}
          />
        </div>
      ) : null}
    </header>
  );
}

function BarLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="inline-flex min-h-11 items-center px-3 text-sm"
      style={{ color: "var(--text-secondary)" }}
      onClick={(event) => event.preventDefault()}
    >
      {label}
    </a>
  );
}

function HeroA() {
  return (
    <section
      className="relative flex min-h-[100dvh] items-start px-5 pb-16 pt-24 md:items-center md:px-8"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 80% -10%, rgba(201,168,76,0.14) 0%, transparent 60%), var(--surface-base)",
      }}
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-[1120px] gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--gold-400)" }}>
            NY Prop Firms
          </p>
          <h1
            className="rise mt-4 max-w-[14ch] text-[2.7rem] font-medium leading-[1.02] tracking-[-0.02em] md:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            Know the account before you open it.
          </h1>
          <p className="serif mt-5 max-w-xl text-lg font-normal italic leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            An independent reading of Apex Trader Funding for US futures traders. End-of-day drawdown and intraday trailing
            drawdown are different rules, and an evaluation is not a Performance Account. Apex does not endorse this site.
          </p>
          <div className="mt-6">
            <ReferralCode />
          </div>
          <DisclosedCta className="mt-6 max-w-md" buttonClassName="rounded-md" ctaId="design_a_hero" trackLabel="Continue to Apex Trader Funding">
            Continue to Apex Trader Funding
          </DisclosedCta>
        </div>
        <div className="md:col-span-5">
          <PathCard />
        </div>
      </div>
    </section>
  );
}

function PathCard() {
  const [account, setAccount] = useState<"evaluation" | "pa">("evaluation");
  const [drawdown, setDrawdown] = useState<"eod" | "intraday">("eod");
  const [size, setSize] = useState<(typeof SIZES)[number]>("50K");

  return (
    <aside
      className="p-5 md:p-6"
      style={{
        backgroundColor: "var(--surface-raised)",
        border: "1px solid var(--gold-edge)",
        boxShadow: "0 0 0 1px rgba(201,168,76,0.12)",
      }}
      aria-label="Account-path picker sample"
    >
      <p className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold-400)" }}>
        Account-path picker
      </p>
      <div className="mt-4">
        <HelperNote scope={scopeLine(account, drawdown)} />
      </div>
      <fieldset className="mt-5">
        <legend className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Account
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          <Choice pressed={account === "evaluation"} onClick={() => setAccount("evaluation")}>
            Evaluation
          </Choice>
          <Choice pressed={account === "pa"} onClick={() => setAccount("pa")}>
            Performance Account
          </Choice>
        </div>
      </fieldset>
      <fieldset className="mt-4">
        <legend className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Drawdown
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          <Choice pressed={drawdown === "eod"} onClick={() => setDrawdown("eod")}>
            EOD
          </Choice>
          <Choice pressed={drawdown === "intraday"} onClick={() => setDrawdown("intraday")}>
            Intraday
          </Choice>
        </div>
      </fieldset>
      <fieldset className="mt-4">
        <legend className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Size
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {SIZES.map((item) => (
            <Choice key={item} pressed={size === item} onClick={() => setSize(item)}>
              {item}
            </Choice>
          ))}
        </div>
      </fieldset>
      <dl className="mt-5 space-y-2 border-t pt-4 text-[15px]" style={{ borderColor: "var(--surface-border)" }}>
        <Row term="Selected size" value={size} />
        <Row term="Drawdown distance" value="[verified figure]" />
        <Row term="Contract cap" value="[verified figure]" />
      </dl>
      <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>
        Sample shell. It does not calculate.
      </p>
    </aside>
  );
}

function Choice({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className="min-h-11 px-3 text-sm"
      style={{
        backgroundColor: pressed ? "var(--gold-500)" : "transparent",
        color: pressed ? "#1a1408" : "var(--text-primary)",
        border: `1px solid ${pressed ? "var(--gold-500)" : "var(--surface-border-strong)"}`,
      }}
    >
      {children}
    </button>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt style={{ color: "var(--text-secondary)" }}>{term}</dt>
      <dd className="serif text-lg" style={{ color: "var(--text-primary)" }}>
        {value}
      </dd>
    </div>
  );
}

function ToolIndex() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-20 md:px-8" aria-labelledby="tools-heading">
      <h2 id="tools-heading" className="text-4xl font-medium tracking-[-0.02em]" style={{ color: "var(--text-primary)" }}>
        Tools this desk will hold
      </h2>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        Six helpers, none of them live on this preview. Where a panel appears, it is a sample and it names the account it is
        pretending to describe.
      </p>
      <ol className="mt-10 border-t" style={{ borderColor: "var(--surface-border)" }}>
        {TOOLS.map(([title, copy], index) => (
          <li
            key={title}
            className="grid gap-2 border-b py-5 md:grid-cols-12 md:items-baseline"
            style={{ borderColor: "var(--surface-border)" }}
          >
            <span className="serif text-lg italic md:col-span-1" style={{ color: "var(--gold-400)" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="serif text-2xl font-medium md:col-span-4" style={{ color: "var(--text-primary)" }}>
              {title}
            </h3>
            <p className="text-[15px] leading-relaxed md:col-span-7" style={{ color: "var(--text-secondary)" }}>
              {copy}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function DrawdownEssay() {
  return (
    <section className="border-y" style={{ borderColor: "var(--surface-border)", backgroundColor: "var(--surface-subtle)" }}>
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <article>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold-400)" }}>
            End of day
          </p>
          <h2 className="mt-3 text-4xl font-medium leading-none tracking-[-0.02em]" style={{ color: "var(--text-primary)" }}>
            Marked from the close.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            On an EOD evaluation, the drawdown level is taken from the closing balance and then watched during the next
            session. A daily loss limit, where that evaluation has one, pauses trading for the rest of the session. It does
            not by itself fail the evaluation. Touching the drawdown level does.
          </p>
        </article>
        <article>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold-400)" }}>
            Intraday
          </p>
          <h2 className="mt-3 text-4xl font-medium leading-none tracking-[-0.02em]" style={{ color: "var(--text-primary)" }}>
            Following the session.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            On an intraday evaluation, the level follows the highest balance during the session, including open profit, and
            it does not step back down. That evaluation has no daily loss limit. Crossing the trailing level can fail it.
          </p>
        </article>
        <figure className="md:col-span-2">
          <SessionSketch />
          <figcaption className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Illustration only, not a calculator and not an account result. Confirm the wording on Apex&apos;s help center
            before you rely on it.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function SessionSketch() {
  return (
    <svg viewBox="0 0 720 160" className="h-auto w-full" role="img" aria-label="Two sample level lines, one stepped at the close and one ratcheting through the session.">
      <line x1="24" y1="128" x2="696" y2="128" stroke="var(--surface-border-strong)" />
      <path d="M40 96 H250 V64 H680" fill="none" stroke="var(--gold-500)" strokeWidth="1.5" />
      <path d="M40 112 H160 V88 H300 V56 H680" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" />
      <text x="40" y="28" fill="var(--gold-400)" fontSize="13">
        EOD level, flat until the close
      </text>
      <text x="360" y="48" fill="var(--text-primary)" fontSize="13">
        Intraday level, up only
      </text>
    </svg>
  );
}

function ConsistencySheet() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-20 md:px-8" aria-labelledby="consistency-heading">
      <h2 id="consistency-heading" className="text-4xl font-medium tracking-[-0.02em]" style={{ color: "var(--text-primary)" }}>
        Consistency, as a sample sheet
      </h2>
      <div
        className="mt-8 grid gap-8 p-6 md:grid-cols-2 md:p-8"
        style={{ backgroundColor: "var(--surface-raised)", borderTop: "2px solid var(--gold-500)" }}
      >
        <HelperNote scope="Applies to the Performance Account and to EOD. It does not apply to an evaluation or to Intraday." />
        <div>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Sample shell. It does not calculate. Losing days are part of the net on the current reading of this site. The
            threshold itself is still a placeholder.
          </p>
          <dl className="mt-5 space-y-3">
            <SheetRow term="Largest day" />
            <SheetRow term="Net since last approved payout" />
            <SheetRow term="Threshold" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function SheetRow({ term }: { term: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b pb-2" style={{ borderColor: "var(--surface-border)" }}>
      <dt className="text-[15px]" style={{ color: "var(--text-secondary)" }}>
        {term}
      </dt>
      <dd className="serif text-xl" style={{ color: "var(--text-primary)" }}>
        [verified figure]
      </dd>
    </div>
  );
}

function MidCta() {
  return (
    <section className="border-t" style={{ borderColor: "var(--surface-border)" }} aria-labelledby="mid-cta-heading">
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-8">
        <h2 id="mid-cta-heading" className="text-4xl font-medium tracking-[-0.02em]" style={{ color: "var(--text-primary)" }}>
          If you decide to use Apex
        </h2>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Referral code NOAM is optional. Read the rules for the account you buy, on Apex&apos;s own pages.
        </p>
        <DisclosedCta className="mt-8 max-w-md" buttonClassName="rounded-md" ctaId="design_a_mid" trackLabel="Explore Apex accounts">
          Explore Apex accounts
        </DisclosedCta>
      </div>
    </section>
  );
}

function Contents() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 pb-20 md:px-8" aria-labelledby="contents-heading">
      <h2 id="contents-heading" className="text-4xl font-medium tracking-[-0.02em]" style={{ color: "var(--text-primary)" }}>
        What the English site will hold
      </h2>
      <ol className="mt-8 columns-1 gap-x-16 md:columns-2">
        {[
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
        ].map((label, index) => (
          <li key={label} className="mb-3 flex gap-4 break-inside-avoid text-[17px]" style={{ color: "var(--text-primary)" }}>
            <span className="serif italic" style={{ color: "var(--gold-400)" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <a href="#" onClick={(event) => event.preventDefault()} style={{ color: "inherit" }}>
              {label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
