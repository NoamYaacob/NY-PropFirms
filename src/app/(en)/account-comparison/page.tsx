import Link from "next/link";
import { pageMeta } from "@/lib/siteMeta";
import { EVAL, usable } from "@/data/apex";
import { DisclosurePair, FactChip, PageHeader, Section, TodoCS } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";
import { ComparisonTool } from "@/components/tools/ComparisonTool";
import { PricingSection } from "@/components/pricing/PricingSection";

export const metadata = pageMeta("/account-comparison", "Apex Account Comparison (25K–150K) & Pricing | NY Prop Firms", "Compare Apex 25K to 150K EOD and Intraday accounts across Evaluation and PA rules, with CME point equivalents and a link to Apex's current pricing.");

export default function AccountComparisonPage() {
  return (
    <>
      <PageHeader eyebrow="Compare" title="Account comparison">
        <DisclosurePair className="mt-3" />
        <p className="ds-hint mt-2">Apex only. Current EOD and Intraday accounts.</p>
        <TodoCS file="pages/account-comparison.md" note="Intro copy" />
      </PageHeader>

      <Section id="tool">
        <ComparisonTool id="account-comparison" />
      </Section>

      <PricingSection />

      <Section id="size-checks" title="Three size-selection checks">
        <ul className="ds-reasons">
          <li>Target vs drawdown: the Evaluation Profit Target beside the Max Drawdown. No ratio, no pass odds.</li>
          <li>Daily Loss Limit: the EOD Evaluation fixed DLL, or N/A for the Intraday Evaluation.</li>
          <li>Contract cap: the fixed Evaluation maximum for that size.</li>
        </ul>
        {usable(EVAL.EOD["50K"].profitTarget) ? <FactChip fact={EVAL.EOD["50K"].profitTarget} label="Apex: Evaluations" /> : null}
        <TodoCS file="pages/account-comparison.md" note="Size-check copy" />
        <p>
          <Link href="/trading-calculators#drawdown-distance" className="ds-link">Drawdown Distance Calculator</Link>
        </p>
      </Section>

      <CtaBlock ctaId="en_account_comparison_cta" />
    </>
  );
}
