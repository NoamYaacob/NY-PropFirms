import { CopyPage, copyMeta } from "@/components/copy/CopyPage";
import { Wrap } from "@/design-system/Blocks";
import { ComparisonTool } from "@/components/tools/ComparisonTool";
import { PricingSection } from "@/components/pricing/PricingSection";

export const metadata = copyMeta("account-comparison");

export default function AccountComparisonPage() {
  return (
    <CopyPage
      name="account-comparison"
      sections={{
        "Account Comparison Tool": { replace: <Wrap><ComparisonTool id="account-comparison" anchorOffset /></Wrap> },
        "Current Apex pricing": { replace: <PricingSection /> },
      }}
    />
  );
}
