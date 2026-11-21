import Link from "next/link";
import { pageMeta } from "@/lib/siteMeta";
import { AD_LINE, CODE_CAVEAT, FTR_FULL, INDEPENDENCE } from "@/design-system/strings";
import { DisclosurePair, PageHeader, Section, TodoCS } from "@/design-system/Blocks";

export const metadata = pageMeta("/about", "About & Affiliate Disclosure | NY Prop Firms", "How NY Prop Firms works, full Apex affiliate and 180-day cookie disclosures, editorial independence, and privacy policy.");

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="About and affiliate disclosure">
        <DisclosurePair className="mt-3" />
      </PageHeader>
      <Section id="disclosure" title="Affiliate disclosure">
        <p className="ds-lead" style={{ color: "var(--ds-strong)" }}>{INDEPENDENCE}</p>
        <div className="ds-cta-disc" style={{ marginTop: 0 }}>
          <p className="ds-legal ds-legal-strong">{AD_LINE}</p>
          <p className="ds-legal">{CODE_CAVEAT}</p>
        </div>
        <TodoCS file="pages/about.md" note="Ownership and disclosure copy" />
      </Section>
      <Section id="methodology" title="Methodology and verification standard">
        <TodoCS file="pages/about.md" note="Methodology copy" />
        <p>
          <Link href="/sources" className="ds-link">Official sources</Link> · <Link href="/updates" className="ds-link">Latest updates</Link>
        </p>
      </Section>
      <Section id="privacy" title="Privacy, cookies and leaving this site">
        <TodoCS file="pages/about.md" note="PRIVACY_COOKIE copy (180-day cookie, leaving-site notice, no tool inputs stored or sent)" />
      </Section>
      <Section id="risk" title="Simulated-account risk disclosure">
        <p className="ds-ftr">{FTR_FULL}</p>
        <p>
          <Link href="/" className="ds-link">Home</Link> · <Link href="/account-comparison" className="ds-link">Account Comparison</Link> · <Link href="/trading-calculators" className="ds-link">Trading Calculators</Link> · <Link href="/apex-rules" className="ds-link">Apex Rules</Link>
        </p>
      </Section>
    </>
  );
}
