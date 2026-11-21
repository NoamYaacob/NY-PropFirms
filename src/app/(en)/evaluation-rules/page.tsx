import Link from "next/link";
import { pageMeta } from "@/lib/siteMeta";
import { TEXT, WORKED, usable } from "@/data/apex";
import { DisclosurePair, FactChip, PageHeader, Section, StageBanner, TodoCS } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";
import { EvalLockTable, EvalTable, StartThresholdTable } from "@/components/rules/RuleTables";

export const metadata = pageMeta("/evaluation-rules", "Apex Evaluation Rules (EOD & Intraday) | NY Prop Firms", "Evaluation-only rules for Apex Trader Funding EOD and Intraday accounts: targets, drawdown, DLL, fixed contracts, platform locks, and activation.");

export default function EvaluationRulesPage() {
  return (
    <>
      <PageHeader eyebrow="Rules" title="Evaluation rules">
        <StageBanner>STAGE 1: EVALUATION ONLY</StageBanner>
        <DisclosurePair className="mt-3" />
        <TodoCS file="pages/evaluation-rules.md" note="Intro copy" />
      </PageHeader>

      <Section id="parameters" title="Evaluation parameters">
        <EvalTable type="EOD" />
        <EvalTable type="Intraday" />
        <TodoCS file="pages/evaluation-rules.md" note="Parameters notes (Consistency and Scaling are Not Applied in Evaluations)" />
      </Section>

      <Section id="eod-evaluation" title="EOD Evaluation drawdown and DLL">
        <StartThresholdTable stage="Evaluation" />
        <TodoCS file="pages/evaluation-rules.md" note="EOD drawdown and DLL copy" />
      </Section>

      <Section id="intraday-evaluation" title="Intraday Evaluation drawdown, no DLL">
        <TodoCS file="pages/evaluation-rules.md" note="Intraday drawdown copy" />
        {usable(TEXT.marketFillIntraday) ? <p className="ds-hint">{String(TEXT.marketFillIntraday.value)}</p> : null}
        <FactChip fact={TEXT.marketFillIntraday} label="Apex: Intraday Evaluations" />
      </Section>

      <Section id="platform-locks" title="Platform threshold-lock differences">
        <EvalLockTable />
        <p className="ds-hint">Check the platform on your account. The Intraday Evaluation lock is worded differently across Apex&apos;s pages, so no figure is shown for it.</p>
        <TodoCS file="pages/evaluation-rules.md" note="Platform lock copy" />
      </Section>

      <Section id="passing" title="Passing and the PA activation window">
        {usable(TEXT.activationDays) ? <p className="ds-lead">The activation window is {String(TEXT.activationDays.value)} calendar days after the Evaluation is marked Passed.</p> : null}
        <FactChip fact={TEXT.activationDays} label="Apex: PA activation process" />
        {usable(WORKED.eod) ? null : null}
        <TodoCS file="pages/evaluation-rules.md" note="Pass conditions and activation copy" />
        <p className="ds-hint">
          <Link href="/trading-calculators#drawdown-distance" className="ds-link">Drawdown Distance Calculator</Link> · <Link href="/account-comparison" className="ds-link">Account Comparison</Link> · <Link href="/performance-account-rules" className="ds-link">Performance Account Rules</Link>
        </p>
      </Section>

      <CtaBlock ctaId="en_eval_rules_cta" />
    </>
  );
}
