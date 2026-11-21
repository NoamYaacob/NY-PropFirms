import { CopyPage, copyMeta } from "@/components/copy/CopyPage";
import { Wrap } from "@/design-system/Blocks";
import { PayoutTable } from "@/components/rules/RuleTables";
import { ConsistencyTool } from "@/components/tools/ConsistencyTool";

export const metadata = copyMeta("payout-rules");

export default function PayoutRulesPage() {
  return (
    <CopyPage
      name="payout-rules"
      sections={{
        "Five gates": {
          after: (
            <div className="mt-3 grid gap-3">
              <PayoutTable type="EOD" />
              <PayoutTable type="Intraday" />
            </div>
          ),
        },
        "50% Consistency Calculator": {
          replace: (
            <Wrap>
              <ConsistencyTool id="calculator" anchorOffset />
            </Wrap>
          ),
        },
      }}
    />
  );
}
