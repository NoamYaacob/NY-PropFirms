import Link from "next/link";
import { pageMeta } from "@/lib/siteMeta";
import { DisclosurePair, PageHeader, Section, TodoCS, Details } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";

export const metadata = pageMeta("/faq", "Apex Trader Funding FAQ | NY Prop Firms", "Clear, source-linked answers to common Apex Trader Funding questions: Evaluation vs PA rules, EOD vs Intraday, consistency, payouts, and code NOAM.");

const GROUPS = ["Evaluation vs PA", "EOD vs Intraday", "Consistency and payouts", "Hours and holidays", "Referral code NOAM and this site"];

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Frequently asked questions">
        <DisclosurePair className="mt-3" />
        <TodoCS file="pages/faq.md" note="Intro copy" />
      </PageHeader>
      <Section id="questions" title="Grouped answers">
        <div className="grid gap-2 ds-faq">
          {GROUPS.map((g) => (
            <Details key={g} summary={g}>
              <TodoCS file="pages/faq.md" note={`Q&A for "${g}" and FAQPage JSON-LD (NOAM Q&A needs AD_LINE + CODE_CAVEAT + privacy summary)`} />
            </Details>
          ))}
        </div>
        <p className="ds-hint">
          <Link href="/trading-calculators#consistency" className="ds-link">Consistency Calculator</Link> · <Link href="/apex-rules" className="ds-link">Apex Rules</Link> · <Link href="/updates" className="ds-link">Updates</Link> · <Link href="/about" className="ds-link">About</Link> · <Link href="/sources" className="ds-link">Sources</Link>
        </p>
      </Section>
      <CtaBlock ctaId="en_faq_box" />
    </>
  );
}
