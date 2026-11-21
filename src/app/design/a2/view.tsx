"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Check, Copy, Menu, X } from "lucide-react";
import { GoLink } from "@/components/analytics/GoLink";
import { scopeLine, useEscape, useLockBody, useScrolled } from "@/components/design/chrome";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV = [
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

const STAMP = "Nov 21, 2026, 12:00 PM ET";

const TICKER = [
  ["NQ", "$20"],
  ["MNQ", "$2"],
  ["ES", "$50"],
  ["MES", "$5"],
] as const;

const POINT: Record<(typeof TICKER)[number][0], number> = {
  NQ: 20,
  MNQ: 2,
  ES: 50,
  MES: 5,
};

const PLANS = [
  { name: "50K", path: "EOD evaluation", hidden: false },
  { name: "50K", path: "Intraday evaluation", hidden: false },
  { name: "100K", path: "EOD evaluation", hidden: true },
] as const;

export function OptionA2({ fontClass }: { fontClass: string }) {
  return (
    <div className={`a2 ${fontClass}`}>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <Ticker />
      <main id="content">
        <Hero />
        <Stats />
        <Calculators />
        <Prices />
        <MidCta />
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <Link href="/design/a2" className="a2-logo inline-flex items-baseline gap-1.5" dir="ltr">
      <span style={{ color: "var(--a2-gold)" }}>NY</span>
      <span style={{ color: "var(--a2-strong)" }}>PROP FIRMS</span>
    </Link>
  );
}

function Header() {
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useLockBody(open);
  useEscape(open, close);

  return (
    <header
      className="sticky top-0 z-[100]"
      style={{
        background: scrolled || open ? "var(--surface-overlay)" : "color-mix(in srgb, var(--surface-base) 78%, transparent)",
        borderBottom: "1px solid var(--surface-border)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[1180px] items-center justify-between gap-4 px-4 md:px-6">
        <Logo />
        <div className="flex items-center gap-1">
          <nav className="hidden items-center lg:flex" aria-label="Main">
            <a className="px-3 text-[15px]" style={{ color: "var(--a2-text)" }} href="#calculators">
              Calculators
            </a>
            <a className="px-3 text-[15px]" style={{ color: "var(--a2-text)" }} href="#prices">
              Prices
            </a>
          </nav>
          <ThemeToggle locale="en" />
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold"
            style={{ color: "var(--a2-strong)" }}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t px-4 py-3 md:px-6" style={{ borderColor: "var(--surface-border)", background: "var(--surface-overlay)" }} aria-label="Sections">
          <ul className="mx-auto grid max-w-[1180px] gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {NAV.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="block py-2.5 text-[16px] font-medium"
                  style={{ color: "var(--a2-strong)" }}
                  onClick={(event) => {
                    event.preventDefault();
                    close();
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function Ticker() {
  const row = [...TICKER, ...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="a2-ticker" aria-label="CME point values, per point">
      <div className="a2-ticker-track a2-mono text-[13px]" style={{ color: "var(--a2-strong)" }}>
        {row.map(([symbol, value], index) => (
          <span key={`${symbol}-${index}`} className="inline-flex items-center gap-3 px-3">
            <span style={{ color: "var(--a2-gold)" }}>CME</span>
            {symbol} {value}
            <span style={{ color: "var(--a2-text)" }}>per point</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-[1180px] items-start gap-6 px-4 py-6 md:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-7">
      <div>
        <p className="text-[13px] font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--a2-gold)" }}>
          For US futures traders
        </p>
        <p className="a2-wordmark mt-2" style={{ color: "var(--a2-strong)" }}>
          <span style={{ color: "var(--a2-gold)" }}>NY</span> PROP FIRMS
        </p>
        <h1 className="mt-3 max-w-[16ch] text-[2rem] md:text-[2.7rem]">The account, before the session.</h1>
        <p className="mt-3 max-w-xl text-[16px] leading-snug" style={{ color: "var(--a2-text)" }}>
          An independent desk for Apex Trader Funding. EOD and Intraday are different paths. Apex does not endorse this site.
        </p>
        <div className="mt-4">
          <ReferralCode />
        </div>
        <CtaCluster className="mt-4 max-w-md" ctaId="design_a2_hero" trackLabel="Continue to Apex Trader Funding">
          Continue to Apex Trader Funding
        </CtaCluster>
      </div>
      <EquityCard />
    </section>
  );
}

function EquityCard() {
  return (
    <article className="a2-card overflow-hidden p-4" aria-label="Illustrative equity path and EOD level">
      <div className="flex items-center justify-between gap-3">
        <p className="a2-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: "var(--a2-gold)" }}>
          Illustrative path · EOD level
        </p>
        <span className="a2-mono rounded-full px-2 py-1 text-[11px]" style={{ color: "#1a1408", background: "var(--gold-500)" }}>
          Sample
        </span>
      </div>
      <svg viewBox="0 0 420 150" className="mt-2 h-[150px] w-full" role="img" aria-label="Illustrative path with a stepped EOD level. Not an account result.">
        <defs>
          <linearGradient id="a2fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[40, 78, 116].map((y) => (
          <line key={y} x1="12" y1={y} x2="408" y2={y} stroke="var(--surface-border)" />
        ))}
        <path d="M12 120 C 50 118, 70 86, 110 80 S 170 108, 210 92 S 270 48, 320 62 S 370 78, 408 46 L 408 150 L 12 150 Z" fill="url(#a2fill)" />
        <path d="M12 120 C 50 118, 70 86, 110 80 S 170 108, 210 92 S 270 48, 320 62 S 370 78, 408 46" fill="none" stroke="var(--a2-strong)" strokeWidth="1.7" pathLength={1} className="a2-draw" />
        <path d="M12 132 H 150 V 104 H 280 V 78 H 408" fill="none" stroke="var(--gold-500)" strokeWidth="1.7" />
      </svg>
      <p className="mt-1 text-[15px] leading-snug" style={{ color: "var(--a2-strong)" }}>
        Illustrative path. Not an account result. The gold line is a sample EOD level, not a forecast.
      </p>
    </article>
  );
}

function Stats() {
  const series = [
    { label: "Illustrative marks", value: "Sample", points: [4, 6, 5, 8, 7, 9, 8] },
    { label: "EOD level", value: "Stepped", points: [3, 3, 3, 6, 6, 6, 8] },
    { label: "NQ point value", value: "$20", points: [8, 8, 8, 8, 8, 8, 8] },
  ];
  return (
    <section className="mx-auto max-w-[1180px] px-4 pb-2 md:px-6" aria-label="Sample reference marks">
      <div className="grid gap-3 sm:grid-cols-3">
        {series.map((item) => (
          <article key={item.label} className="a2-card flex items-center justify-between gap-3 px-4 py-3">
            <div>
              <p className="a2-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: "var(--a2-gold)" }}>
                {item.label}
              </p>
              <p className="mt-1 text-2xl font-extrabold tracking-[-0.04em]" style={{ color: "var(--a2-strong)" }}>
                {item.value}
              </p>
            </div>
            <Spark points={item.points} />
          </article>
        ))}
      </div>
      <p className="mt-2 text-[15px]" style={{ color: "var(--a2-text)" }}>
        Illustrative marks only. NQ $20, MNQ $2, ES $50, and MES $5 are CME point values.
      </p>
    </section>
  );
}

function Spark({ points }: { points: number[] }) {
  const w = 96;
  const h = 32;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const d = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * w;
      const y = h - ((point - min) / (max - min || 1)) * (h - 6) - 3;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="a2-spark" aria-hidden>
      <path d={d} />
    </svg>
  );
}

function Calculators() {
  return (
    <section id="calculators" className="mx-auto grid max-w-[1180px] gap-4 px-4 py-6 md:px-6 lg:grid-cols-2">
      <DistancePanel />
      <MultiplierPanel />
    </section>
  );
}

function DistancePanel() {
  const [account, setAccount] = useState<"evaluation" | "pa">("evaluation");
  const [drawdown, setDrawdown] = useState<"eod" | "intraday">("eod");
  const level = drawdown === "eod" ? "M 8 118 H 150 V 86 H 292" : "M 8 118 H 70 V 98 H 140 V 74 H 210 V 58 H 292";

  return (
    <article className="a2-card p-4">
      <PanelHead kicker="Drawdown Distance Calculator" chip="Distance only" />
      <div className="mt-3 flex flex-wrap gap-2">
        <Chip pressed={account === "evaluation"} onClick={() => setAccount("evaluation")}>
          Evaluation
        </Chip>
        <Chip pressed={account === "pa"} onClick={() => setAccount("pa")}>
          Performance Account
        </Chip>
        <Chip pressed={drawdown === "eod"} onClick={() => setDrawdown("eod")}>
          EOD
        </Chip>
        <Chip pressed={drawdown === "intraday"} onClick={() => setDrawdown("intraday")}>
          Intraday
        </Chip>
      </div>
      <svg viewBox="0 0 300 140" className="mt-3 h-[140px] w-full" role="img" aria-label="Sample distance from a path to the level. Informational only.">
        <path d="M8 100 C 40 100, 60 70, 100 66 S 150 96, 190 78 S 240 46, 292 58" fill="none" stroke="var(--a2-strong)" strokeWidth="1.6" />
        <path d={level} fill="none" stroke="var(--gold-500)" strokeWidth="1.6" />
        <text x="8" y="132" fill="var(--a2-text)" fontSize="11">
          {drawdown === "eod" ? "level steps at the close" : "level follows the session"}
        </text>
      </svg>
      <p className="a2-mono mt-2 text-3xl font-medium" style={{ color: "var(--a2-strong)" }}>
        [verified figure]
      </p>
      <p className="mt-2 text-[15px] font-semibold" style={{ color: "var(--a2-strong)" }}>
        unofficial helper, not advice
      </p>
      <p className="text-[15px] leading-snug" style={{ color: "var(--a2-strong)" }}>
        {scopeLine(account, drawdown)}
      </p>
      <p className="mt-1 text-[15px] leading-snug" style={{ color: "var(--a2-text)" }}>
        Informational distance only. Sample shell. It does not calculate.
      </p>
    </article>
  );
}

function MultiplierPanel() {
  const [symbol, setSymbol] = useState<(typeof TICKER)[number][0]>("NQ");
  const [count, setCount] = useState(1);
  const [points, setPoints] = useState(4);
  const safeCount = Number.isFinite(count) ? count : 0;
  const safePoints = Number.isFinite(points) ? points : 0;
  const product = safeCount * safePoints * POINT[symbol];

  return (
    <article className="a2-card p-4">
      <PanelHead kicker="Contract Multiplier & Apex Cap Reference" chip="N × pts × $/pt" />
      <div className="mt-3 flex flex-wrap gap-2">
        {TICKER.map(([name]) => (
          <Chip key={name} pressed={symbol === name} onClick={() => setSymbol(name)}>
            {`${name} $${POINT[name]}`}
          </Chip>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Field label="N" value={count} onChange={setCount} />
        <Field label="Points" value={points} onChange={setPoints} />
      </div>
      <p className="a2-mono mt-3 text-[13px]" style={{ color: "var(--a2-text)" }}>
        {safeCount} × {safePoints} × ${POINT[symbol]}
      </p>
      <p className="mt-1 text-[15px] font-semibold" style={{ color: "var(--a2-strong)" }}>
        Illustrative product
      </p>
      <p className="a2-mono text-3xl" style={{ color: "var(--a2-strong)" }}>
        ${product}
      </p>
      <p className="mt-2 text-[15px] font-semibold" style={{ color: "var(--a2-strong)" }}>
        unofficial helper, not advice
      </p>
      <p className="text-[15px] leading-snug" style={{ color: "var(--a2-strong)" }}>
        Illustrative product of N, points, and the CME point value. It does not apply to an evaluation or a Performance Account, and it does not apply to EOD or Intraday.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-[15px]" style={{ color: "var(--a2-strong)" }}>
          <caption className="mb-2 text-left text-[15px] font-semibold">Apex cap reference · sample</caption>
          <thead>
            <tr className="a2-mono text-[12px]" style={{ color: "var(--a2-text)" }}>
              <th className="py-1 pr-3 font-normal">Size</th>
              <th className="py-1 pr-3 font-normal">EOD</th>
              <th className="py-1 font-normal">Intraday</th>
            </tr>
          </thead>
          <tbody>
            {["25K", "50K", "100K", "150K"].map((size) => (
              <tr key={size} className="border-t" style={{ borderColor: "var(--surface-border)" }}>
                <td className="py-1.5 pr-3">{size}</td>
                <td className="py-1.5 pr-3">[verified figure]</td>
                <td className="py-1.5">[verified figure]</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[15px]" style={{ color: "var(--a2-text)" }}>
        Source:{" "}
        <a href="#" className="underline" style={{ color: "var(--a2-strong)" }} onClick={(event) => event.preventDefault()}>
          Apex help center (sample)
        </a>
        . Caps stay separate from the multiplier. Figures are not verified in this preview.
      </p>
    </article>
  );
}

function PanelHead({ kicker, chip }: { kicker: string; chip: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b pb-3" style={{ borderColor: "var(--surface-border)" }}>
      <h2 className="text-[1.15rem] font-extrabold tracking-[-0.04em]" style={{ color: "var(--a2-strong)" }}>
        {kicker}
      </h2>
      <span className="a2-mono shrink-0 rounded-full px-2 py-1 text-[11px]" style={{ color: "var(--a2-gold)", border: "1px solid var(--a2-line)" }}>
        {chip}
      </span>
    </div>
  );
}

function Chip({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: string }) {
  return (
    <button type="button" className="a2-chip a2-mono" aria-pressed={pressed} onClick={onClick}>
      {children}
    </button>
  );
}

function Field({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="block">
      <span className="a2-mono text-[12px]" style={{ color: "var(--a2-text)" }}>
        {label}
      </span>
      <input
        className="a2-mono mt-1 w-full rounded-xl border px-3 py-2 text-[16px]"
        style={{
          color: "var(--a2-strong)",
          background: "var(--surface-base)",
          borderColor: "var(--surface-border-strong)",
        }}
        inputMode="numeric"
        value={Number.isFinite(value) ? value : 0}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function Prices() {
  return (
    <section id="prices" className="mx-auto max-w-[1180px] px-4 py-6 md:px-6">
      <h2 className="text-3xl md:text-4xl">Prices, by plan and path</h2>
      <p className="mt-2 max-w-2xl text-[16px]" style={{ color: "var(--a2-text)" }}>
        Sample pricing, verified figures pending. A figure that is unverified or expired is not shown.
      </p>
      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article key={`${plan.name}-${plan.path}`} className="a2-card flex flex-col p-5" data-price-state={plan.hidden ? "hidden" : "sample"}>
            <p className="a2-mono text-[12px] tracking-[0.12em] uppercase" style={{ color: "var(--a2-gold)" }}>
              {plan.hidden ? "Unverified" : "Sample"}
            </p>
            <h3 className="mt-2 text-4xl">{plan.name}</h3>
            <p className="text-[16px]" style={{ color: "var(--a2-text)" }}>
              {plan.path}
            </p>
            {plan.hidden ? (
              <p className="mt-6 text-[18px] font-semibold leading-snug" style={{ color: "var(--a2-strong)" }}>
                See current pricing on Apex&apos;s site
              </p>
            ) : (
              <dl className="mt-5 space-y-4">
                <PriceRow label="Apex list price" value="$XXX" />
                <PriceRow label={`Apex sale price (per Apex, as of ${STAMP})`} value="$XXX" />
                <PriceRow label="Activation fee" value="$XXX" />
              </dl>
            )}
            <p className="mt-auto pt-5 text-[15px] leading-snug" style={{ color: "var(--a2-strong)" }}>
              Last updated {STAMP} · Source:{" "}
              <a href="#" className="underline" style={{ color: "var(--a2-strong)" }} onClick={(event) => event.preventDefault()}>
                Apex pricing page
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[15px] leading-snug" style={{ color: "var(--a2-text)" }}>
        {label}
      </dt>
      <dd className="a2-mono mt-1 text-3xl" style={{ color: "var(--a2-strong)" }}>
        {value}
      </dd>
    </div>
  );
}

function MidCta() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-8 md:px-6" aria-labelledby="a2-mid">
      <div className="a2-card p-5 md:p-6">
        <h2 id="a2-mid" className="text-3xl md:text-4xl">
          If you decide to use Apex
        </h2>
        <p className="mt-2 max-w-xl text-[16px]" style={{ color: "var(--a2-text)" }}>
          Referral code NOAM is optional. Read the rules for the account on Apex&apos;s own pages.
        </p>
        <div className="mt-4">
          <ReferralCode />
        </div>
        <CtaCluster className="mt-4 max-w-md" ctaId="design_a2_mid" trackLabel="Explore Apex Accounts">
          Explore Apex Accounts
        </CtaCluster>
      </div>
    </section>
  );
}

function CtaCluster({
  ctaId,
  trackLabel,
  className = "",
  children,
}: {
  ctaId: string;
  trackLabel: string;
  className?: string;
  children: string;
}) {
  return (
    <div className={className}>
      <p className="a2-legal">Ad: I earn a commission if you use my code NOAM.</p>
      <p className="a2-legal mt-1">Disclosure: I&apos;m an Apex affiliate.</p>
      <p className="a2-risk mt-1">Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.</p>
      <GoLink ctaId={ctaId} trackLabel={trackLabel} className="a2-btn">
        {children}
      </GoLink>
    </div>
  );
}

function ReferralCode() {
  const [copied, setCopied] = useState(false);

  function copyCode() {
    const done = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText("NOAM").then(done, () => setCopied(false));
      return;
    }
    setCopied(false);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <p className="text-[16px]" style={{ color: "var(--a2-strong)" }}>
        Referral code <span className="a2-mono text-2xl font-medium tracking-[0.08em]">NOAM</span>
      </p>
      <button
        type="button"
        onClick={copyCode}
        className="inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-[15px] font-semibold"
        style={{ color: "#1a1408", background: "var(--gold-500)" }}
        aria-label={copied ? "Copied" : "Copy referral code NOAM"}
      >
        {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--surface-border)", background: "var(--surface-subtle)" }}>
      <div className="mx-auto max-w-[1180px] px-4 py-8 md:px-6">
        <Logo />
        <div className="mt-4 max-w-3xl space-y-2">
          <p className="text-[16px]" style={{ color: "var(--a2-strong)" }}>
            NY Prop Firms is independent. Apex Trader Funding does not endorse this site.
          </p>
          <p className="text-[16px]" style={{ color: "var(--a2-strong)" }}>
            Referral code NOAM. Using it is optional.
          </p>
          <p className="a2-legal">Ad: I earn a commission if you use my code NOAM.</p>
          <p className="a2-legal">Disclosure: I&apos;m an Apex affiliate.</p>
          <p className="a2-risk">Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.</p>
        </div>
        <nav className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[15px]" aria-label="Other previews">
          {[
            ["/design/a", "A"],
            ["/design/b", "B"],
            ["/design/c", "C"],
            ["/design/a2", "A2"],
          ].map(([href, label]) => (
            <Link key={href} href={href} style={{ color: href === "/design/a2" ? "var(--a2-gold)" : "var(--a2-strong)" }}>
              {label}
            </Link>
          ))}
        </nav>
        <p className="mt-4 text-[15px]" style={{ color: "var(--a2-text)" }}>
          © {new Date().getFullYear()} NY Prop Firms · Design preview. Not indexed.
        </p>
      </div>
    </footer>
  );
}
