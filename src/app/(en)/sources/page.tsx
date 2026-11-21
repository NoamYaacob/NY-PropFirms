import { CopyPage, copyMeta } from "@/components/copy/CopyPage";
import { SourcesGroup, type SourceGroup } from "@/components/copy/SourcesGroup";

export const metadata = copyMeta("sources");

const G = (group: SourceGroup) => ({ after: <div className="mt-2"><SourcesGroup group={group} /></div> });

export default function SourcesPage() {
  return (
    <CopyPage
      name="sources"
      sections={{
        Evaluations: G("evaluations"),
        Drawdown: G("drawdown"),
        "Performance Accounts": G("performance-accounts"),
        "Payouts and consistency": G("payouts-consistency"),
        "Hours, holidays and prohibited activities": G("hours-holidays-prohibited"),
        Pricing: G("pricing-source"),
        "CME contract values": G("cme"),
      }}
    />
  );
}
