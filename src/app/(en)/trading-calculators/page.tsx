import Link from "next/link";
import { pageMeta } from "@/lib/siteMeta";
import { DisclosurePair, PageHeader, Section, TodoCS } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";
import { ConsistencyTool } from "@/components/tools/ConsistencyTool";
import { DrawdownTool } from "@/components/tools/DrawdownTool";
import { PayoutTool } from "@/components/tools/PayoutTool";
import { ContractTool } from "@/components/tools/ContractTool";
import { PathPickerTool } from "@/components/tools/PathPickerTool";

export const metadata = pageMeta("/trading-calculators", "Apex Trading Calculators & Mechanics Tools | NY Prop Firms", "Unofficial interactive tools for Apex futures accounts: 50% Consistency, Drawdown Distance, Payout Eligibility, and EOD vs Intraday Path Picker.");

export default function CalculatorsPage() {
  return (
    <>
      <PageHeader eyebrow="Tools" title="Trading calculators">
        <DisclosurePair className="mt-3" />
        <TodoCS file="pages/trading-calculators.md" note="Intro copy" />
      </PageHeader>
      <Section><ConsistencyTool id="consistency" /></Section>
      <Section><DrawdownTool id="drawdown-distance" /></Section>
      <Section><PayoutTool id="payout-eligibility" /></Section>
      <Section><ContractTool id="contract-reference" /></Section>
      <Section><PathPickerTool id="path-picker" /></Section>
      <Section id="comparison-link" title="Account Comparison Tool">
        <p>
          <Link href="/account-comparison#account-comparison" className="ds-link">Open the Account Comparison Tool</Link>
        </p>
      </Section>
      <CtaBlock ctaId="en_calculators_cta" />
    </>
  );
}
