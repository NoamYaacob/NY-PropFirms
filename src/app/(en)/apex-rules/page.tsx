import Link from "next/link";
import { pageMeta } from "@/lib/siteMeta";
import { OFFICIAL_LINKS, TEXT, usable } from "@/data/apex";
import { DisclosurePair, FactChip, PageHeader, RouteCard, Section, TodoCS } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";

export const metadata = pageMeta("/apex-rules", "Apex Trader Funding Rules Hub | NY Prop Firms", "Apex Trader Funding rules hub linking separate Evaluation, Performance Account, EOD vs Intraday, payout, holiday, and prohibited-activity guides.");

const PROHIBITED = [TEXT.notAStop, TEXT.stopLosses, TEXT.noHedging, TEXT.noAutomation, TEXT.newsTrading];

export default function ApexRulesPage() {
  return (
    <>
      <PageHeader eyebrow="Rules hub" title="Apex rules, kept apart by stage">
        <DisclosurePair className="mt-3" />
        <TodoCS file="pages/apex-rules.md" note="Intro and scope note (current EOD and Intraday accounts; Legacy out of scope)" />
      </PageHeader>

      <Section id="stage-router" title="Pick a stage">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <RouteCard href="/evaluation-rules" kicker="Stage 1" title="Evaluation Rules">Assessment stage only.</RouteCard>
          <RouteCard href="/performance-account-rules" kicker="Stage 2" title="Performance Account Rules">Sim Funded stage only.</RouteCard>
          <RouteCard href="/payout-rules" kicker="Stage 2" title="Payout Rules">PA payout gates.</RouteCard>
          <RouteCard href="/eod-vs-intraday" kicker="Mechanics" title="EOD vs Intraday">How the two drawdowns differ.</RouteCard>
          <RouteCard href="/account-comparison" kicker="Sizes" title="Account Comparison">Size matrix and pricing link.</RouteCard>
          <RouteCard href="/trading-calculators" kicker="Tools" title="Trading Calculators">Six unofficial helpers.</RouteCard>
        </div>
      </Section>

      <Section id="hours-holidays" title="Hours, flatten and holidays">
        <ul className="ds-reasons">
          {usable(TEXT.flattenBefore) ? <li>Flat before {String(TEXT.flattenBefore.value)}. Trading resumes at {String(TEXT.tradingResumes.value)}. A trading day runs {String(TEXT.tradingDay.value)}.</li> : null}
          {usable(TEXT.holidayAllowed) ? <li>{String(TEXT.holidayAllowed.value)}</li> : null}
          {usable(TEXT.holidayDll) ? <li>{String(TEXT.holidayDll.value)}</li> : null}
        </ul>
        <div className="ds-chips">
          <FactChip fact={TEXT.flattenBefore} label="Apex: futures trading times" />
          <FactChip fact={TEXT.holidayAllowed} label="Apex: holiday trading" />
        </div>
        <p className="ds-hint">
          For a specific holiday, use the <a className="ds-link" href={OFFICIAL_LINKS.cmeHolidays} target="_blank" rel="noopener noreferrer">CME holiday schedule</a> and Apex Status Updates on the{" "}
          <a className="ds-link" href={OFFICIAL_LINKS.helpCenter} target="_blank" rel="noopener noreferrer">Apex Help Center</a>.
        </p>
        <TodoCS file="pages/apex-rules.md" note="Hours and holiday copy" />
      </Section>

      <Section id="prohibited-activities" title="Prohibited activities">
        <p id="before-you-buy" className="ds-lead" style={{ marginTop: 0 }}>
          Before you buy: read these on Apex&apos;s own page.
        </p>
        <ul className="ds-reasons">
          {PROHIBITED.filter((f) => usable(f)).map((f) => (
            <li key={String(f.value)}>{String(f.value)}</li>
          ))}
        </ul>
        <div className="ds-chips">
          <FactChip fact={TEXT.noHedging} label="Apex: Prohibited Activities" />
        </div>
        <TodoCS file="pages/apex-rules.md" note="Prohibited-activities and pre-purchase checklist copy; Consistency link card" />
        <p>
          <Link href="/trading-calculators#consistency" className="ds-link">
            50% Consistency Calculator
          </Link>
        </p>
      </Section>

      <CtaBlock ctaId="en_rules_hub_cta" />
    </>
  );
}
