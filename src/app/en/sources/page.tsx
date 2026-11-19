import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { EnHero, EnSection, SourceLink } from "@/components/en/blocks";
import { LAST_CHECKED, type UrlKey } from "@/lib/en/links";
import { enBreadcrumb, enMetadata } from "@/lib/en/metadata";

export const metadata: Metadata = enMetadata(
  "/en/sources",
  "Official sources | NY Prop Firms",
  "The official Apex Trader Funding and CME Group pages behind every rule on this site."
);

const SOURCES: { name: string; id: UrlKey; updated: string }[] = [
  { name: "Apex: EOD Evaluations", id: "eod_eval", updated: "Oct 26, 2026" },
  { name: "Apex: Intraday Trailing Drawdown Evaluations", id: "intra_eval", updated: "Oct 26, 2026" },
  { name: "Apex: EOD Drawdown Explained", id: "eod_dd", updated: "Apr 28, 2026" },
  { name: "Apex: Intraday Trailing Drawdown Explained", id: "intra_dd", updated: "Oct 12, 2026" },
  { name: "Apex: EOD Performance Accounts (PA)", id: "eod_pa", updated: "Apr 28, 2026" },
  { name: "Apex: Intraday Trailing Drawdown PA", id: "intra_pa", updated: "May 21, 2026" },
  { name: "Apex: EOD Payouts", id: "eod_pay", updated: "Apr 28, 2026" },
  { name: "Apex: Intraday Trailing Drawdown Payouts", id: "intra_pay", updated: "Apr 28, 2026" },
  { name: "Apex: 50% Consistency Requirement", id: "consist", updated: "Apr 24, 2026" },
  { name: "Apex: Inactivity Policy on PAs", id: "inactive", updated: "Oct 8, 2026" },
  { name: "Apex: Scaling Levels (PA) Explained", id: "scaling", updated: "Nov 16, 2026" },
  { name: "Apex: Daily Loss Limit Explained", id: "dll", updated: "Apr 15, 2026" },
  { name: "Apex: Futures Trading Times", id: "times", updated: "Apr 20, 2026" },
  { name: "Apex: Prohibited Activities", id: "prohib", updated: "Jul 31, 2026" },
  { name: "Apex: Legacy Products Overview", id: "legacy", updated: "Jul 21, 2026" },
  { name: "Apex: Affiliate Program", id: "aff", updated: "Jul 28, 2026" },
  { name: "Apex: Contact support", id: "support", updated: "May 11, 2026" },
  { name: "CME Group: E-mini Nasdaq-100 contract specs", id: "cme_nq", updated: "—" },
  { name: "CME Group: Micro E-mini Nasdaq-100 contract specs", id: "cme_mnq", updated: "—" },
  { name: "CME Group: Trading hours", id: "cme_hours", updated: "—" },
];

export default function SourcesPage() {
  return (
    <>
      <JsonLd
        data={enBreadcrumb([
          { name: "Home", path: "/en" },
          { name: "Official sources", path: "/en/sources" },
        ])}
      />
      <EnHero title="Official sources" lead="Every number on this site comes from one of these pages." />
      <div className="container-page py-8">
        <EnSection title="Every source used on this site">
          <p>
            When Apex updates a page, the official page wins. &quot;Page updated&quot; is the last-modified date Apex&apos;s site reports for that page (US Eastern).
          </p>
          <div className="overflow-x-auto my-3">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "var(--surface-overlay)" }}>
                  {["Source", "Page updated", "We last checked"].map((heading) => (
                    <th
                      key={heading}
                      className="text-left font-semibold px-3 py-2 border-b"
                      style={{ borderColor: "var(--surface-border)", color: "var(--text-primary)" }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SOURCES.map((source) => (
                  <tr key={source.id}>
                    <td className="px-3 py-2 border-b align-top" style={{ borderColor: "var(--surface-border)" }}>
                      <SourceLink id={source.id}>{source.name}</SourceLink>
                    </td>
                    <td className="px-3 py-2 border-b align-top" style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}>
                      {source.updated}
                    </td>
                    <td className="px-3 py-2 border-b align-top" style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}>
                      {LAST_CHECKED}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </EnSection>
      </div>
    </>
  );
}
