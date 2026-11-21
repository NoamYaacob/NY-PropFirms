import Link from "next/link";
import { pageMeta } from "@/lib/siteMeta";
import { ACCOUNT_TYPES, PA, SIZES, TEXT, usable } from "@/data/apex";
import { DisclosurePair, FactChip, PageHeader, Section, StageBanner, TodoCS, Details } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";
import { PaLockTable, PaScalingTable, StartThresholdTable } from "@/components/rules/RuleTables";

export const metadata = pageMeta("/performance-account-rules", "Apex Performance Account (PA) Rules | NY Prop Firms", "Performance Account (Sim Funded) rules for Apex EOD and Intraday: scaling tiers, PA daily loss limit, threshold lock, inactivity rule, and payout link.");

export default function PaRulesPage() {
  const inactive = TEXT.inactivityNew;
  const iv = inactive.value as { min_days: number; min_net_profit_per_day: number; window_days: number } | null;
  return (
    <>
      <PageHeader eyebrow="Rules" title="Performance Account rules">
        <StageBanner>STAGE 2: PERFORMANCE ACCOUNT ONLY. SIMULATED FUNDED</StageBanner>
        <DisclosurePair className="mt-3" />
        <TodoCS file="pages/performance-account-rules.md" note="Intro copy and Eval to PA rule deltas" />
      </PageHeader>

      <Section id="pa-drawdown" title="PA drawdown and the PA lock">
        <StartThresholdTable stage="Performance Account" />
        <PaLockTable />
        <TodoCS file="pages/performance-account-rules.md" note="PA drawdown and lock copy" />
      </Section>

      <Section id="pa-dll" title="PA daily loss limit and scaling tiers">
        <p className="ds-hint">Same tiers for EOD and Intraday PAs. Tier levels update once per trading day.</p>
        {SIZES.map((s, i) => (
          <Details key={s} summary={`${s} scaling tiers`} open={i === 1}>
            <PaScalingTable type="EOD" size={s} />
            {ACCOUNT_TYPES.every((t) => usable(PA[t][s].scaling)) ? null : null}
          </Details>
        ))}
        <TodoCS file="pages/performance-account-rules.md" note="Scaling and DLL copy" />
      </Section>

      <Section id="inactivity" title="PA Inactivity Policy">
        {usable(inactive) && iv ? (
          <p className="ds-lead">
            New EOD and Intraday PAs: at least {iv.min_days} trading days with ${iv.min_net_profit_per_day} or more net profit in every rolling {iv.window_days}-day period.
          </p>
        ) : null}
        <FactChip fact={inactive} label="Apex: PA inactivity policy" />
        <TodoCS file="pages/performance-account-rules.md" note="Exact public inactivity wording incl. Legacy scope note and Apex's Future Enforcement Notice (Build Note 16)" />
      </Section>

      <Section id="next-step" title="Next step: payout rules">
        <p>
          <Link href="/payout-rules" className="ds-link">Payout Rules</Link> · <Link href="/payout-rules#inactivity" className="ds-link">Inactivity scope note</Link> · <Link href="/trading-calculators#consistency" className="ds-link">Consistency Calculator</Link> · <Link href="/trading-calculators#payout-eligibility" className="ds-link">Payout Eligibility Checker</Link>
        </p>
      </Section>

      <CtaBlock ctaId="en_pa_rules_cta" />
    </>
  );
}
