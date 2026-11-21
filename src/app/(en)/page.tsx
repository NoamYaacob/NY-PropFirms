import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/siteMeta";
import { DATA_CHECKED_LABEL } from "@/data/apex";
import { ROUTES } from "@/design-system/strings";
import { CandleChart, LevelCompare } from "@/design-system/Charts";
import { Ticker } from "@/design-system/Ticker";
import { CmeSource, DisclosurePair, Section, TodoCS, Wrap } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";
import { PathCard } from "@/components/home/PathCard";
import { DrawdownTool } from "@/components/tools/DrawdownTool";

export const metadata = pageMeta("/", "Apex Trader Funding Rules in Plain English | NY Prop Firms", "Independent, source-linked guide to Apex Trader Funding rules, EOD vs Intraday drawdown, PA payouts, and trading calculators for US futures traders.");

const TOOLS = [
  ["Consistency", "/trading-calculators#consistency", "50% best-day share, PA only"],
  ["Drawdown Distance Calculator", "/trading-calculators#drawdown-distance", "Distance to the published threshold"],
  ["Payout Eligibility", "/trading-calculators#payout-eligibility", "A checklist, not a promise"],
  ["Contract Multiplier & Apex Cap Reference", "/trading-calculators#contract-reference", "CME arithmetic and published caps"],
  ["Account Comparison", "/account-comparison", "Evaluation and PA kept apart"],
  ["Path Picker", "/trading-calculators#path-picker", "Mechanics, not a recommendation"],
] as const;

export default function HomePage() {
  return (
    <>
      <Ticker />
      <section className="ds-hero mx-auto grid max-w-[1180px] items-center gap-5 px-4 pb-3 pt-5 md:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-8 lg:pt-8">
        <div>
          <p className="ds-eyebrow">For US futures traders</p>
          <p className="ds-wordmark ds-hero-wordmark mt-2" aria-hidden>
            <span className="ds-gold-text">NY</span>
            <span className="ds-silver-text">PROP FIRMS</span>
          </p>
          <h1 className="mt-3 text-[1.7rem] md:text-[2.2rem]">Futures prop rules, decoded.</h1>
          <p className="mt-3 max-w-xl text-[17px] leading-snug" style={{ color: "var(--ds-text)" }}>
            An independent desk about Apex Trader Funding rules. EOD and Intraday are different paths. Apex does not endorse this site.
          </p>
          <DisclosurePair className="mt-3" />
          <p className="mt-2 text-[15px]" style={{ color: "var(--ds-text)" }}>
            This site last re-checked Apex&apos;s Help Center rules on {DATA_CHECKED_LABEL}.{" "}
            <Link href="/sources" className="ds-link">
              Official sources
            </Link>
          </p>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            <Link href="/apex-rules" className="ds-btn ds-btn-inline">
              Explore Apex Rules <ArrowRight size={18} aria-hidden />
            </Link>
            <Link href="/trading-calculators" className="ds-btn ds-btn-inline ds-btn-ghost">
              Open Trading Calculators
            </Link>
          </div>
        </div>
        <CandleChart id="home-chart" />
      </section>

      <Wrap className="pb-1">
        <PathCard />
      </Wrap>

      <Section id="tool-index" title="Tools on this desk">
        <div className="ds-toolgrid grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map(([title, href, sub]) => (
            <Link key={title} href={href} className="ds-card ds-routecard">
              <span className="ds-routecard-t">{title}</span>
              <span className="ds-routecard-b">{sub}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="desk" title="The desk">
        <DrawdownTool id="home-drawdown-distance" />
      </Section>

      <Section id="drawdown-essay" title="Marked from the close, or following the session">
        <LevelCompare />
        <p className="ds-hint">Illustration only. Not a calculator and not an account result. Drawdown is not your stop.</p>
        <TodoCS file="pages/home.md" note="Drawdown essay copy (EOD vs Intraday)" />
        <p>
          <Link href="/eod-vs-intraday" className="ds-link">
            EOD vs Intraday, in detail
          </Link>
        </p>
      </Section>

      <Section id="consistency-sheet" title="Consistency sheet">
        <TodoCS file="pages/home.md" note="Consistency sheet intro copy" />
        <p>
          <Link href="/payout-rules#calculator" className="ds-link">
            Open the 50% calculator on Payout Rules
          </Link>{" "}
          ·{" "}
          <Link href="/trading-calculators#consistency" className="ds-link">
            Trading Calculators
          </Link>
        </p>
        <CmeSource />
      </Section>

      <CtaBlock ctaId="en_mid_cta" intro={<TodoCS file="pages/home.md" note="CTA intro line" />} />

      <Section id="contents" title="What this site holds">
        <ol className="ds-contents">
          {ROUTES.filter((r) => r.href !== "/").map((r, i) => (
            <li key={r.href}>
              <Link href={r.href}>
                <span className="ds-mono">{String(i + 1).padStart(2, "0")}</span>
                {r.label}
              </Link>
            </li>
          ))}
        </ol>
        <p>
          <Link href="/account-comparison#pricing" className="ds-link">
            Current Apex pricing (on Account Comparison)
          </Link>
        </p>
      </Section>
    </>
  );
}
