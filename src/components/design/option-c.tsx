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
  useScrolled,
} from "@/components/design/chrome";
import { PriceSection } from "@/components/design/prices";

const SIZES = ["25K", "50K", "100K", "150K"] as const;

const TOOLS = [
  {
    id: "consistency",
    label: "Consistency",
    account: "pa" as const,
    drawdown: "eod" as const,
    note: "Largest day against the net since the last approved payout. The threshold stays a placeholder.",
  },
  {
    id: "drawdown",
    label: "Drawdown Distance Calculator",
    account: "evaluation" as const,
    drawdown: "intraday" as const,
    note: "Informational distance from the balance to the level.",
  },
  {
    id: "payout",
    label: "Payout eligibility",
    account: "pa" as const,
    drawdown: "eod" as const,
    note: "The gate before a request. This preview does not say a payout is available.",
  },
  {
    id: "size",
    label: "Position size",
    account: "pa" as const,
    drawdown: "intraday" as const,
    note: "A contract cap for the account in hand. It does not size an order.",
  },
  {
    id: "compare",
    label: "Account comparison",
    account: "evaluation" as const,
    drawdown: "eod" as const,
    note: "Size beside size. Every figure on this preview is still unverified.",
  },
  {
    id: "path",
    label: "Account-path picker",
    account: "evaluation" as const,
    drawdown: "intraday" as const,
    note: "Which rulebook you are walking into: evaluation or Performance Account, EOD or Intraday.",
  },
];

export function OptionC() {
  return (
    <div className="opt-c">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <HeaderC />
      <main id="content">
        <HeroC />
        <Split />
        <Sizes />
        <PriceSection variant="house" />
        <ToolStage />
        <Faq />
        <MidCta />
      </main>
      <SiteFooter current="c" />
    </div>
  );
}

function HeaderC() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useLockBody(open);
  useEscape(open, close);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100]"
        style={{
          backgroundColor: open ? "var(--surface-base)" : scrolled ? "var(--surface-overlay)" : "transparent",
          borderBottom: scrolled && !open ? "1px solid var(--surface-border)" : "1px solid transparent",
        }}
      >
        <div className="flex h-16 items-center justify-between px-5 md:px-8">
          <Logo href="/design/c" />
          <div className="flex items-center gap-2">
            <ThemeToggle locale="en" />
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-semibold tracking-[0.14em] uppercase"
              style={{ color: "var(--text-primary)" }}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-[90] overflow-y-auto px-6 pb-16 pt-24 md:px-16" style={{ backgroundColor: "var(--surface-base)" }}>
          <NavLinks
            className="mx-auto flex max-w-3xl flex-col"
            itemClassName="block border-b py-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl"
            style={{ color: "var(--text-primary)", borderColor: "var(--surface-border)" }}
            onNavigate={close}
          />
        </div>
      ) : null}
    </>
  );
}

function HeroC() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col px-5 pb-10 pt-24 md:px-10"
      style={{
        background:
          "radial-gradient(ellipse 55% 40% at 100% 0%, rgba(201,168,76,0.16) 0%, transparent 55%), var(--surface-base)",
      }}
    >
      <p
        className="pointer-events-none absolute left-6 top-32 hidden origin-top-left -rotate-90 text-xs font-semibold tracking-[0.35em] uppercase xl:block"
        style={{ color: "var(--gold-400)" }}
      >
        NY Prop Firms
      </p>
      <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col xl:pl-10">
        <p className="text-xs font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--gold-400)" }}>
          For US futures traders
        </p>
        <h1
          className="rise mt-4 max-w-[12ch] text-[3.1rem] font-semibold leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-8xl"
          style={{ color: "var(--text-primary)" }}
        >
          Rules before the session.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          NY Prop Firms reads Apex Trader Funding in plain English. Independent. Not endorsed by Apex.
        </p>
        <div className="mt-auto pt-10 max-w-md">
          <div className="rule-draw mb-5 h-px w-full" style={{ backgroundColor: "var(--gold-500)" }} />
          <ReferralCode tone="grotesk" />
          <DisclosedCta className="mt-5" ctaId="design_c_hero" trackLabel="Continue to Apex Trader Funding">
            Continue to Apex Trader Funding
          </DisclosedCta>
        </div>
      </div>
    </section>
  );
}

function Split() {
  return (
    <section className="grid md:grid-cols-2" aria-labelledby="split-heading">
      <h2 id="split-heading" className="sr-only">
        EOD and Intraday
      </h2>
      <article className="px-5 py-16 md:px-10 md:py-24" style={{ backgroundColor: "var(--surface-raised)" }}>
        <p className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--gold-400)" }}>
          EOD
        </p>
        <h3 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.04em] md:text-6xl" style={{ color: "var(--text-primary)" }}>
          From the close.
        </h3>
        <p className="mt-6 max-w-md text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          The evaluation level is marked from the closing balance, then watched the next session. A daily loss limit
          pauses that session. It does not, by itself, fail the evaluation. The drawdown level can.
        </p>
      </article>
      <article
        className="border-t px-5 py-16 md:border-l md:border-t-0 md:px-10 md:py-24"
        style={{ borderColor: "var(--gold-500)", backgroundColor: "var(--surface-base)" }}
      >
        <p className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--gold-400)" }}>
          Intraday
        </p>
        <h3 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.04em] md:text-6xl" style={{ color: "var(--text-primary)" }}>
          Through the session.
        </h3>
        <p className="mt-6 max-w-md text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          The level follows the high of the session, including open profit, and it does not come back down. The evaluation
          has no daily loss limit. Crossing the trailing level can fail it.
        </p>
      </article>
    </section>
  );
}

function Sizes() {
  return (
    <section className="px-5 py-16 md:px-10 md:py-24" aria-labelledby="sizes-heading">
      <div className="mx-auto max-w-[1240px]">
        <h2 id="sizes-heading" className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--gold-400)" }}>
          Account sizes
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-px md:grid-cols-4" style={{ backgroundColor: "var(--surface-border)" }}>
          {SIZES.map((size) => (
            <article key={size} className="px-4 py-8 md:px-6 md:py-12" style={{ backgroundColor: "var(--surface-base)" }}>
              <p className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl" style={{ color: "var(--text-primary)" }}>
                {size}
              </p>
              <p className="mt-4 text-[15px] leading-snug" style={{ color: "var(--text-secondary)" }}>
                Drawdown distance [verified figure]
              </p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-[15px]" style={{ color: "var(--text-secondary)" }}>
          Names already used on this site. Figures stay unverified in this preview.
        </p>
      </div>
    </section>
  );
}

function ToolStage() {
  const [active, setActive] = useState<(typeof TOOLS)[number]>(TOOLS[0]);
  const [account, setAccount] = useState(TOOLS[0].account);
  const [drawdown, setDrawdown] = useState(TOOLS[0].drawdown);

  function select(tool: (typeof TOOLS)[number]) {
    setActive(tool);
    setAccount(tool.account);
    setDrawdown(tool.drawdown);
  }

  return (
    <section className="border-y" style={{ borderColor: "var(--surface-border)", backgroundColor: "var(--surface-subtle)" }} aria-labelledby="stage-heading">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="stage-heading" className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl" style={{ color: "var(--text-primary)" }}>
            One desk. Six samples.
          </h2>
          <div className="mt-6 flex flex-col" role="tablist" aria-label="Sample tools">
            {TOOLS.map((tool) => {
              const selected = tool.id === active.id;
              return (
                <button
                  key={tool.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => select(tool)}
                  className="min-h-11 border-b py-3 text-left text-lg font-medium"
                  style={{
                    borderColor: "var(--surface-border)",
                    color: selected ? "var(--gold-300)" : "var(--text-primary)",
                  }}
                >
                  {tool.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-4" role="tabpanel">
          <HelperNote scope={scopeLine(account, drawdown)} />
          <p className="mt-6 text-2xl font-medium leading-snug tracking-[-0.03em] md:text-3xl" style={{ color: "var(--text-primary)" }}>
            {active.note}
          </p>
          <p className="mt-6 text-5xl font-semibold tracking-[-0.04em]" style={{ color: "var(--gold-300)" }}>
            [verified figure]
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <StageChoice pressed={account === "evaluation"} onClick={() => setAccount("evaluation")}>
              Evaluation
            </StageChoice>
            <StageChoice pressed={account === "pa"} onClick={() => setAccount("pa")}>
              Performance Account
            </StageChoice>
            <StageChoice pressed={drawdown === "eod"} onClick={() => setDrawdown("eod")}>
              EOD
            </StageChoice>
            <StageChoice pressed={drawdown === "intraday"} onClick={() => setDrawdown("intraday")}>
              Intraday
            </StageChoice>
          </div>
          <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
            Sample shell. It does not calculate.
          </p>
        </div>
      </div>
    </section>
  );
}

function StageChoice({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className="min-h-11 px-3 text-sm font-medium"
      style={{
        backgroundColor: pressed ? "var(--text-primary)" : "transparent",
        color: pressed ? "var(--surface-base)" : "var(--text-primary)",
        border: "1px solid var(--surface-border-strong)",
      }}
    >
      {children}
    </button>
  );
}

function Faq() {
  const items = [
    {
      q: "Is this Apex's website?",
      a: "No. NY Prop Firms is independent. Apex Trader Funding does not endorse it. The affiliate relationship is disclosed beside every link to Apex.",
    },
    {
      q: "Are these real-money accounts?",
      a: "No. Apex evaluations and Performance Accounts are simulated. Futures trading still involves substantial risk of loss.",
    },
    {
      q: "What is NOAM?",
      a: "Referral code NOAM. Using it is optional. Apex's Help Center lists its rules by account type and size and does not list separate rules for referral codes. Check the rules for the exact account you buy.",
    },
  ];
  return (
    <section className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl" style={{ color: "var(--text-primary)" }}>
        Before you ask.
      </h2>
      <div className="mt-10 divide-y" style={{ borderColor: "var(--surface-border)" }}>
        {items.map((item) => (
          <article key={item.q} className="grid gap-3 py-6 md:grid-cols-12">
            <h3 className="text-xl font-medium md:col-span-4" style={{ color: "var(--text-primary)" }}>
              {item.q}
            </h3>
            <p className="text-[16px] leading-relaxed md:col-span-8" style={{ color: "var(--text-secondary)" }}>
              {item.a}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MidCta() {
  return (
    <section className="px-5 pb-20 md:px-10" aria-labelledby="mid-c">
      <div className="mx-auto max-w-[1240px] border-t pt-12" style={{ borderColor: "var(--gold-500)" }}>
        <h2 id="mid-c" className="max-w-[14ch] text-5xl font-semibold leading-[0.92] tracking-[-0.045em] md:text-7xl" style={{ color: "var(--text-primary)" }}>
          If you decide to use Apex.
        </h2>
        <p className="mt-5 max-w-xl text-lg" style={{ color: "var(--text-secondary)" }}>
          Referral code NOAM is optional. Read the rules for the account you buy, on Apex&apos;s own pages.
        </p>
        <DisclosedCta className="mt-8 max-w-md" ctaId="design_c_mid" trackLabel="Explore Apex accounts">
          Explore Apex accounts
        </DisclosedCta>
      </div>
    </section>
  );
}
