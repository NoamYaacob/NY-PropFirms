import { CopyPage, copyMeta } from "@/components/copy/CopyPage";
import { Details } from "@/design-system/Blocks";
import { SIZES } from "@/data/apex";
import { PaScalingTable } from "@/components/rules/RuleTables";

export const metadata = copyMeta("performance-account-rules");

export default function PaRulesPage() {
  return (
    <CopyPage
      name="performance-account-rules"
      sections={{
        "PA scaling tiers": {
          after: (
            <div className="mt-3 grid gap-2">
              {SIZES.map((s) => (
                <Details key={s} summary={`${s} scaling tiers and Daily Loss Limit`}>
                  <PaScalingTable type="EOD" size={s} both />
                </Details>
              ))}
              <p className="ds-hint">Apex lists the same tier tables for EOD and Intraday PAs.</p>
            </div>
          ),
        },
      }}
    />
  );
}
