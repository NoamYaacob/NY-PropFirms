import Link from "next/link";
import { pageMeta } from "@/lib/siteMeta";
import { TEXT, usable } from "@/data/apex";
import { DisclosurePair, FactChip, PageHeader, Section, StageBanner, TodoCS } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";
import { PayoutTable } from "@/components/rules/RuleTables";
import { ConsistencyTool } from "@/components/tools/ConsistencyTool";

export const metadata = pageMeta("/payout-rules", "Apex Payout Rules & 50% Consistency Calculator | NY Prop Firms", "Apex PA payout gates for EOD and Intraday: qualifying days, safety net, sequential caps, and the 50% Consistency Calculator.");

export default function PayoutRulesPage() {
  return (
    <>
      <PageHeader eyebrow="Rules" title="Payout rules">
        <StageBanner>PERFORMANCE ACCOUNTS ONLY</StageBanner>
        <DisclosurePair className="mt-3" />
        <TodoCS file="pages/payout-rules.md" note="Intro copy" />
      </PageHeader>

      <Section id="gates" title="Payout readiness: the gates">
        <PayoutTable type="EOD" />
        <PayoutTable type="Intraday" />
        {usable(TEXT.paOnlyEod) ? <p className="ds-hint">{String(TEXT.paOnlyEod.value)}</p> : null}
        <FactChip fact={TEXT.paOnlyEod} label="Apex: EOD Payouts" />
        <TodoCS file="pages/payout-rules.md" note="Five gates copy" />
      </Section>

      <Section id="calculator" title="50% Consistency Calculator">
        <ConsistencyTool id="calculator-tool" />
      </Section>

      <Section id="eligibility-checker" title="Payout Eligibility Checker">
        <p>
          <Link href="/trading-calculators#payout-eligibility" className="ds-link">Open the Payout Eligibility Checker</Link>
        </p>
      </Section>

      <Section id="after-denial" title="After a denial, and the final payout limit">
        <TodoCS file="pages/payout-rules.md" note="Denial and final-payout copy; Apex words both differently (use neutral CS text)" />
      </Section>

      <Section id="inactivity" title="PA Inactivity: account-scope note">
        <TodoCS file="pages/payout-rules.md" note="Exact inactivity wording incl. Legacy scope and Future Enforcement Notice (Build Note 16)" />
        <p>
          <Link href="/performance-account-rules#inactivity" className="ds-link">Performance Account Rules: inactivity</Link>
        </p>
      </Section>

      <CtaBlock ctaId="en_payout_rules_cta" />
    </>
  );
}
