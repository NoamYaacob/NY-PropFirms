"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy, Menu, Minus, Plus, X } from "lucide-react";
import { GoLink } from "@/components/analytics/GoLink";
import { scopeLine, useEscape, useLockBody, useScrolled } from "@/components/design/chrome";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

/* Canonical strings, per compliance/en_site_rules_policy.md v2. */
const HDR_BAR = "#ad · Affiliate site: I may earn a commission if you use code NOAM or an affiliate link. Not financial advice.";
const DISC_LINE = "Disclosure: I'm an Apex affiliate.";
const AD_LINE = "Ad: I earn a commission if you use my code NOAM.";
const CODE_CAVEAT = "Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.";
const RISK_COMPACT = "Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.";
const FTR_FULL =
  "#ad · Affiliate disclosure: Independent site, not affiliated with or endorsed by Apex Trader Funding. I earn a commission if you use code NOAM or an affiliate link. Apex's Help Center lists its rules by account type and size. Not financial or investment advice. Futures trading involves substantial risk of loss. Evaluations and Performance Accounts (PAs) are simulated. Official Apex pages control.";

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

const STAMP = "<date time ET>";

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

/* Evaluation contract caps. Source: Apex Help Center "position sizing, evaluation",
   fetched 2026-11-21 (research/en_rule_slots_2026-11.md rows S04/S26, status FILLED).
   Same for EOD and Intraday evaluations. Evaluation only; PA caps scale by tier and are not shown here. */
const CAP_SOURCE = "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/";
const CAP_CHECKED = "Nov 21, 2026";
const CAPS = [
  ["25K", 4],
  ["50K", 6],
  ["100K", 8],
  ["150K", 12],
] as const;

const PLANS = [
  { name: "50K", path: "EOD evaluation", hidden: false },
  { name: "50K", path: "Intraday evaluation", hidden: false },
  { name: "100K", path: "EOD evaluation", hidden: true },
] as const;

/* Deterministic illustrative candles. Not market data. */
type Candle = { o: number; h: number; l: number; c: number; v: number };
const CANDLES: Candle[] = (() => {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const out: Candle[] = [];
  let price = 40;
  for (let i = 0; i < 34; i += 1) {
    const o = price;
    const drift = i < 20 ? 0.5 : 0.9;
    const c = o + (rnd() - 0.42) * 9 + drift;
    const h = Math.max(o, c) + rnd() * 4;
    const l = Math.min(o, c) - rnd() * 4;
    out.push({ o, h, l, c, v: 0.25 + rnd() * 0.75 });
    price = c;
  }
  return out;
})();

export function OptionA2({ fontClass }: { fontClass: string }) {
  return (
    <div className={`a2 ${fontClass}`}>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <p className="a2-hdrbar">{HDR_BAR}</p>
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

function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <Link href="/design/a2" className={`a2-logo ${size === "lg" ? "a2-logo-lg" : ""}`} dir="ltr" aria-label="NY Prop Firms">
      <span className="a2-gold-text">NY</span>
      <span>PROP FIRMS</span>
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
        background: scrolled || open ? "var(--surface-overlay)" : "color-mix(in srgb, var(--surface-base) 82%, transparent)",
        borderBottom: "1px solid var(--surface-border)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1180px] items-center justify-between gap-3 px-4 md:px-6">
        <Logo />
        <div className="flex items-center gap-1">
          <nav className="hidden items-center lg:flex" aria-label="Main">
            <a className="px-3 text-[15px] font-medium" style={{ color: "var(--a2-strong)" }} href="#calculators">
              Calculators
            </a>
            <a className="px-3 text-[15px] font-medium" style={{ color: "var(--a2-strong)" }} href="#prices">
              Price cards
            </a>
          </nav>
          <ThemeToggle locale="en" />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 px-2 text-sm font-semibold"
            style={{ color: "var(--a2-strong)" }}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
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
      <div className="a2-ticker-track a2-mono text-[14px]" style={{ color: "var(--a2-strong)" }}>
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
    <section className="a2-hero mx-auto grid max-w-[1180px] items-center gap-5 px-4 pb-4 pt-5 md:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-8 lg:pt-8">
      <div>
        <p className="a2-eyebrow">For US futures traders</p>
        <p className="a2-wordmark mt-2" aria-hidden>
          <span className="a2-gold-text">NY</span>
          <span className="a2-silver-text">PROP FIRMS</span>
        </p>
        <h1 className="mt-3 text-[1.7rem] md:text-[2.2rem]">Futures prop rules, decoded.</h1>
        <p className="mt-3 max-w-xl text-[17px] leading-snug" style={{ color: "var(--a2-text)" }}>
          An independent desk about Apex Trader Funding rules. EOD and Intraday are different paths. Apex does not endorse this site.
        </p>
        <div className="mt-3 max-w-xl">
          <p className="a2-legal">{DISC_LINE}</p>
          <p className="a2-risk mt-1">{RISK_COMPACT}</p>
        </div>
        <a href="#calculators" className="a2-btn a2-btn-inline">
          Open the calculators <ArrowRight size={18} aria-hidden />
        </a>
      </div>
      <ChartCard />
    </section>
  );
}

function ChartCard() {
  const W = 560;
  const H = 270;
  const left = 14;
  const right = 14;
  const top = 16;
  const priceBottom = 196;
  const volTop = 210;
  const volBottom = 258;
  const lows = CANDLES.map((c) => c.l);
  const highs = CANDLES.map((c) => c.h);
  const min = Math.min(...lows);
  const max = Math.max(...highs);
  const y = (p: number) => priceBottom - ((p - min) / (max - min)) * (priceBottom - top);
  const step = (W - left - right) / CANDLES.length;
  const x = (i: number) => left + step * i + step / 2;
  const bw = Math.max(4, step * 0.56);

  /* Illustrative EOD level: trails the highest close by a fixed gap and only moves at each "close" (every 6 candles). */
  const gap = 11;
  let hwm = -Infinity;
  let levelPath = "";
  let lastLevel = 0;
  CANDLES.forEach((c, i) => {
    hwm = Math.max(hwm, c.c);
    if (i % 6 === 5 || i === 0) lastLevel = hwm - gap;
    const ly = y(lastLevel).toFixed(1);
    levelPath += `${i === 0 ? "M" : "L"}${(x(i) - step / 2).toFixed(1)} ${ly} L${(x(i) + step / 2).toFixed(1)} ${ly} `;
  });

  return (
    <article className="a2-card a2-glow overflow-hidden" aria-label="Illustrative candlestick chart with a stepped EOD level">
      <div className="a2-bar">
        <span className="a2-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <p className="a2-mono a2-bar-title">Illustrative path · EOD level</p>
        <span className="a2-pill a2-pill-solid a2-mono">Sample</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label="Illustrative candlesticks with a gold stepped EOD level. Not market data and not an account result.">
        <defs>
          <linearGradient id="a2lvl" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f3dd94" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="a2area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((n) => (
          <line key={n} x1={left} x2={W - right} y1={top + ((priceBottom - top) / 4) * n} y2={top + ((priceBottom - top) / 4) * n} stroke="var(--a2-grid)" />
        ))}
        {CANDLES.map((c, i) => {
          const up = c.c >= c.o;
          const bodyTop = y(Math.max(c.o, c.c));
          const bodyH = Math.max(2, Math.abs(y(c.o) - y(c.c)));
          return (
            <g key={i}>
              <line x1={x(i)} x2={x(i)} y1={y(c.h)} y2={y(c.l)} stroke={up ? "var(--a2-up)" : "var(--a2-down)"} strokeWidth="1.4" />
              <rect
                x={x(i) - bw / 2}
                y={bodyTop}
                width={bw}
                height={bodyH}
                rx="1"
                fill={up ? "var(--a2-up)" : "var(--surface-base)"}
                stroke={up ? "var(--a2-up)" : "var(--a2-down)"}
                strokeWidth="1.4"
              />
              <rect x={x(i) - bw / 2} y={volBottom - c.v * (volBottom - volTop)} width={bw} height={c.v * (volBottom - volTop)} rx="1" fill="var(--a2-vol)" />
            </g>
          );
        })}
        <path d={levelPath} fill="none" stroke="var(--a2-up)" strokeWidth="2.4" strokeLinejoin="round" />
        <text x={left + 4} y={volTop - 4} fill="var(--a2-text)" fontSize="12" className="a2-mono">
          VOLUME
        </text>
      </svg>
      <div className="a2-legend">
        <span>
          <i className="a2-key a2-key-up" /> Up
        </span>
        <span>
          <i className="a2-key a2-key-down" /> Down
        </span>
        <span>
          <i className="a2-key a2-key-lvl" /> Sample EOD level
        </span>
      </div>
      <p className="px-4 pb-3 text-[15px] leading-snug" style={{ color: "var(--a2-strong)" }}>
        Illustrative candles. Not market data, not an account result, not a forecast.
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
    <section className="mx-auto max-w-[1180px] px-4 pb-1 md:px-6" aria-label="Sample reference marks">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {series.map((item) => (
          <article key={item.label} className="a2-card flex items-center justify-between gap-3 px-4 py-2.5">
            <div>
              <p className="a2-mono a2-kicker">{item.label}</p>
              <p className="mt-1 text-[1.7rem] font-extrabold leading-none tracking-[-0.04em]" style={{ color: "var(--a2-strong)" }}>
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
      <CmeSource />
    </section>
  );
}

function Spark({ points }: { points: number[] }) {
  const w = 96;
  const h = 34;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const d = points
    .map((point, index) => {
      const px = (index / (points.length - 1)) * w;
      const py = h - ((point - min) / (max - min || 1)) * (h - 8) - 4;
      return `${index === 0 ? "M" : "L"}${px.toFixed(1)} ${py.toFixed(1)}`;
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
    <section id="calculators" className="mx-auto grid max-w-[1180px] gap-4 px-4 py-5 md:px-6 lg:grid-cols-2">
      <DistancePanel />
      <MultiplierPanel />
    </section>
  );
}

function ToolFoot() {
  return (
    <div className="a2-toolfoot">
      <p className="a2-legal">{DISC_LINE}</p>
      <p className="a2-risk">{RISK_COMPACT}</p>
    </div>
  );
}

function DistancePanel() {
  const [account, setAccount] = useState<"evaluation" | "pa">("evaluation");
  const [drawdown, setDrawdown] = useState<"eod" | "intraday">("eod");
  const level = drawdown === "eod" ? "M 10 128 H 130 V 104 H 250 V 82 H 360" : "M 10 128 H 60 V 116 H 110 V 98 H 170 V 84 H 230 V 68 H 290 V 54 H 360";

  return (
    <article className="a2-card a2-term" aria-labelledby="a2-dist">
      <div className="a2-bar">
        <span className="a2-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <h2 id="a2-dist" className="a2-bar-title a2-bar-h">
          Drawdown Distance Calculator
        </h2>
        <span className="a2-pill a2-mono">Distance only</span>
      </div>
      <div className="a2-term-body">
        <div className="a2-seg-row">
          <div className="a2-seg" role="group" aria-label="Account">
            <Seg pressed={account === "evaluation"} onClick={() => setAccount("evaluation")}>
              Evaluation
            </Seg>
            <Seg pressed={account === "pa"} onClick={() => setAccount("pa")}>
              Performance Account
            </Seg>
          </div>
          <div className="a2-seg" role="group" aria-label="Drawdown type">
            <Seg pressed={drawdown === "eod"} onClick={() => setDrawdown("eod")}>
              EOD
            </Seg>
            <Seg pressed={drawdown === "intraday"} onClick={() => setDrawdown("intraday")}>
              Intraday
            </Seg>
          </div>
        </div>
        <div className="a2-screen">
          <svg viewBox="0 0 370 150" preserveAspectRatio="none" className="a2-screen-svg" role="img" aria-label="Sample distance between a path and the level. Informational only.">
            {[30, 70, 110].map((gy) => (
              <line key={gy} x1="10" x2="360" y1={gy} y2={gy} stroke="var(--a2-grid)" vectorEffect="non-scaling-stroke" />
            ))}
            <path d="M10 112 C 40 110, 62 84, 100 80 S 160 104, 200 88 S 262 52, 300 60 S 336 64, 360 40" fill="none" stroke="var(--a2-strong)" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
            <path d={level} fill="none" stroke="var(--gold-500)" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
            <line x1="360" x2="360" y1="40" y2={drawdown === "eod" ? 82 : 54} stroke="var(--a2-gold)" strokeWidth="1.6" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
          </svg>
          <p className="a2-screen-note">{drawdown === "eod" ? "level steps at the close" : "level follows the session"}</p>
        </div>
        <div className="a2-readout">
          <span className="a2-mono a2-kicker">Distance</span>
          <span className="a2-mono a2-readout-val">[sourced figure]</span>
        </div>
        <p className="mt-3 text-[15px] font-semibold" style={{ color: "var(--a2-strong)" }}>
          Unofficial helper, not advice; Apex's system decides.
        </p>
        <p className="text-[15px] leading-snug" style={{ color: "var(--a2-strong)" }}>
          {scopeLine(account, drawdown)}
        </p>
        <p className="mt-1 text-[15px] leading-snug" style={{ color: "var(--a2-text)" }}>
          Informational distance only. Sample shell. It does not calculate.
        </p>
        <ToolFoot />
      </div>
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
    <article className="a2-card a2-term" aria-labelledby="a2-mult">
      <div className="a2-bar">
        <span className="a2-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <h2 id="a2-mult" className="a2-bar-title a2-bar-h">
          Contract Multiplier &amp; Apex Cap Reference
        </h2>
        <span className="a2-pill a2-mono">N × pts × $/pt</span>
      </div>
      <div className="a2-term-body">
        <div className="a2-seg" role="group" aria-label="CME contract">
          {TICKER.map(([name]) => (
            <Seg key={name} pressed={symbol === name} onClick={() => setSymbol(name)}>
              {`${name} $${POINT[name]}`}
            </Seg>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Stepper label="N" value={count} onChange={setCount} min={0} />
          <Stepper label="Points" value={points} onChange={setPoints} min={0} />
        </div>
        <div className="a2-readout mt-3">
          <span className="a2-mono a2-kicker">Notional P&L move</span>
          <span className="a2-mono a2-readout-val">${product.toLocaleString("en-US")}</span>
          <span className="a2-mono a2-readout-eq">
            {safeCount} × {safePoints} × ${POINT[symbol]}
          </span>
        </div>
        <p className="mt-3 text-[15px] font-semibold" style={{ color: "var(--a2-strong)" }}>
          Unofficial helper, not advice; Apex's system decides.
        </p>
        <p className="text-[15px] leading-snug" style={{ color: "var(--a2-strong)" }}>
          N × P points on {symbol} = ${product.toLocaleString("en-US")} notional P&amp;L move (CME arithmetic only; not trade or stop advice). It does not use account drawdown or balance.
        </p>

        <CmeSource />
        <div className="a2-caps mt-4">
          <table className="w-full text-left text-[15px]" style={{ color: "var(--a2-strong)" }}>
            <caption className="mb-1 text-left text-[15px] font-semibold">Apex cap reference · Evaluation</caption>
            <thead>
              <tr className="a2-mono text-[13px]" style={{ color: "var(--a2-text)" }}>
                <th className="py-1 pr-3 font-normal">Size</th>
                <th className="py-1 font-normal">Contract cap (EOD and Intraday)</th>
              </tr>
            </thead>
            <tbody>
              {CAPS.map(([size, cap]) => (
                <tr key={size} className="border-t" style={{ borderColor: "var(--surface-border)" }}>
                  <td className="py-1.5 pr-3 font-semibold">{size}</td>
                  <td className="a2-mono py-1.5">{cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-[15px] leading-snug" style={{ color: "var(--a2-text)" }}>
            Evaluation caps only. Performance Account caps scale by tier on Apex&apos;s page. Caps stay separate from the multiplier.
          </p>
          <SourceChip href={CAP_SOURCE} label="Apex Help Center: position sizing, evaluation" checked={CAP_CHECKED} />
        </div>
        <ToolFoot />
      </div>
    </article>
  );
}

const CME_LINKS = [
  ["NQ", "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html"],
  ["MNQ", "https://www.cmegroup.com/markets/equities/nasdaq/micro-e-mini-nasdaq-100.contractSpecs.html"],
  ["ES / MES", "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html"],
] as const;

function CmeSource() {
  return (
    <div className="a2-source">
      <span className="a2-mono a2-source-k">Source</span>
      <span>CME Group contract multipliers:</span>
      {CME_LINKS.map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
          {label}
        </a>
      ))}
      <span className="a2-mono a2-source-d">checked Nov 21, 2026</span>
    </div>
  );
}

function SourceChip({ href, label, checked }: { href: string; label: string; checked: string }) {
  return (
    <a className="a2-source" href={href} target="_blank" rel="noopener noreferrer">
      <span className="a2-mono a2-source-k">Source</span>
      <span>{label}</span>
      <span className="a2-mono a2-source-d">checked {checked}</span>
    </a>
  );
}

function Seg({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: string }) {
  return (
    <button type="button" className="a2-segbtn a2-mono" aria-pressed={pressed} onClick={onClick}>
      {children}
    </button>
  );
}

function Stepper({ label, value, onChange, min }: { label: string; value: number; onChange: (value: number) => void; min: number }) {
  const safe = Number.isFinite(value) ? value : 0;
  return (
    <div className="a2-field">
      <label className="a2-mono a2-kicker" htmlFor={`a2-f-${label}`}>
        {label}
      </label>
      <div className="a2-stepper">
        <button type="button" aria-label={`Decrease ${label}`} onClick={() => onChange(Math.max(min, safe - 1))}>
          <Minus size={16} aria-hidden />
        </button>
        <input
          id={`a2-f-${label}`}
          className="a2-mono"
          inputMode="numeric"
          value={safe}
          onChange={(event) => {
            const next = Number(event.target.value.replace(/[^0-9]/g, ""));
            onChange(Number.isFinite(next) ? next : 0);
          }}
        />
        <button type="button" aria-label={`Increase ${label}`} onClick={() => onChange(safe + 1)}>
          <Plus size={16} aria-hidden />
        </button>
      </div>
    </div>
  );
}

function Prices() {
  return (
    <section id="prices" className="mx-auto max-w-[1180px] px-4 py-5 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <h2 className="text-[1.9rem] md:text-4xl">Price cards, by plan and path</h2>
        <p className="a2-pill a2-pill-wrap a2-mono">Design sample · lives on /account-comparison#pricing, not Home</p>
      </div>
      <p className="mt-2 max-w-2xl text-[16px]" style={{ color: "var(--a2-text)" }}>
        Sample pricing, verified figures pending. A figure that is unverified or expired is not shown.
      </p>
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article key={`${plan.name}-${plan.path}`} className={`a2-card flex flex-col p-4 ${plan.hidden ? "self-start" : ""}`} data-price-state={plan.hidden ? "hidden" : "sample"}>
            <p className="a2-mono a2-kicker">{plan.hidden ? "Unverified" : "Sample"}</p>
            <h3 className="mt-1 text-4xl">{plan.name}</h3>
            <p className="text-[16px]" style={{ color: "var(--a2-text)" }}>
              {plan.path}
            </p>
            {plan.hidden ? (
              <p className="mt-4 text-[18px] font-semibold leading-snug" style={{ color: "var(--a2-strong)" }}>
                See current pricing on Apex&apos;s site
              </p>
            ) : (
              <dl className="mt-3 space-y-3">
                <PriceRow label="Apex list price" value="$XXX" />
                <PriceRow label={`Apex sale price (per Apex, as of ${STAMP})`} value="$XXX" />
                <PriceRow label="Activation fee" value="$XXX" />
              </dl>
            )}
            {plan.hidden ? null : (
              <p className="mt-auto pt-4 text-[15px] leading-snug" style={{ color: "var(--a2-strong)" }}>
                Last updated {STAMP} · Source:{" "}
                <a href="#" className="underline" style={{ color: "var(--a2-strong)" }} onClick={(event) => event.preventDefault()}>
                  Apex pricing page
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
      <div className="mt-3 max-w-2xl">
        <p className="a2-legal">{DISC_LINE}</p>
        <p className="a2-risk mt-1">{RISK_COMPACT}</p>
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
    <section className="mx-auto max-w-[1180px] px-4 pb-8 pt-3 md:px-6" aria-labelledby="a2-mid">
      <div className="a2-card a2-glow a2-cta">
        <div>
          <h2 id="a2-mid" className="text-[1.9rem] md:text-4xl">
            If you decide to use Apex
          </h2>
          <p className="mt-2 max-w-md text-[16px]" style={{ color: "var(--a2-text)" }}>
            Read the rules for the account on Apex&apos;s own pages first.
          </p>
          <div className="mt-3 max-w-lg space-y-1">
            <p className="a2-legal">{CODE_CAVEAT}</p>
            <p className="a2-legal">{AD_LINE}</p>
            <p className="a2-legal">{DISC_LINE}</p>
            <p className="a2-risk">{RISK_COMPACT}</p>
          </div>
        </div>
        <div className="a2-plaque">
          <ReferralCode />
          <GoLink ctaId="design_a2_mid" trackLabel="Explore Apex Accounts" className="a2-btn">
            Explore Apex Accounts
          </GoLink>
        </div>
      </div>
    </section>
  );
}

function ReferralCode() {
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
    <div className="a2-code">
      <p className="a2-code-label">Referral code NOAM</p>
      <div className="a2-code-row">
        <span className="a2-mono a2-code-val" aria-hidden>
          NOAM
        </span>
        <div className="relative">
          <button type="button" onClick={copyCode} className="a2-copy" aria-label="Copy referral code NOAM">
            {copied ? <Check size={18} aria-hidden /> : <Copy size={18} aria-hidden />}
            Copy
          </button>
          <span className={`a2-toast ${copied ? "a2-toast-on" : ""}`} role="status" aria-live="polite">
            {copied ? "Copied" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--surface-border)", background: "var(--surface-subtle)" }}>
      <div className="mx-auto max-w-[1180px] px-4 py-6 md:px-6">
        <Logo size="lg" />
        <p className="mt-3 max-w-3xl text-[15px] leading-snug" style={{ color: "var(--a2-strong)" }}>
          {FTR_FULL}
        </p>
        <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[15px]" aria-label="Other previews">
          {[
            ["/design/a", "A"],
            ["/design/b", "B"],
            ["/design/c", "C"],
            ["/design/a2", "A2"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="inline-flex min-h-11 items-center" style={{ color: href === "/design/a2" ? "var(--a2-gold)" : "var(--a2-strong)" }}>
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-[15px]" style={{ color: "var(--a2-text)" }}>
          © {new Date().getFullYear()} NY Prop Firms · Design preview. Not indexed.
        </p>
      </div>
    </footer>
  );
}
