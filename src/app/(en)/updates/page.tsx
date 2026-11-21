import { pageMeta } from "@/lib/siteMeta";
import { DATA_CHECKED_LABEL } from "@/data/apex";
import { DisclosurePair, PageHeader, Section, TodoCS, TodoRI, SourceLink } from "@/design-system/Blocks";
import { UpdatesFilter } from "@/components/updates/UpdatesFilter";

export const metadata = pageMeta("/updates", "Latest Apex Trader Funding Rule Updates | NY Prop Firms", "Dated, official-source changelog of Apex Trader Funding rule, payout, platform, and holiday updates with account-scope tags and corrections log.");

export default function UpdatesPage() {
  return (
    <>
      <PageHeader eyebrow="Changelog" title="Latest Apex updates">
        <DisclosurePair className="mt-3" />
        <p className="ds-hint mt-2">Rules last re-checked against Apex&apos;s Help Center on {DATA_CHECKED_LABEL}.</p>
        <TodoCS file="pages/updates.md" note="Source-discipline banner and audit-status banner copy" />
      </PageHeader>
      <Section id="feed" title="Changes">
        <UpdatesFilter />
        <TodoRI note="{UPDATES_FEED}: dated entries from RI's rule-watch (official apextraderfunding.com URLs only)" />
      </Section>
      <Section id="corrections" title="Corrections log">
        <TodoRI note="{CORRECTIONS_LOG}: dated corrections (Policy v2 section 8.5)" />
        <SourceLink href="/sources">Official sources</SourceLink>
      </Section>
    </>
  );
}
