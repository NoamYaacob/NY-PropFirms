import { CopyPage, copyMeta } from "@/components/copy/CopyPage";
import { Wrap } from "@/design-system/Blocks";
import { ConsistencyTool } from "@/components/tools/ConsistencyTool";
import { DrawdownTool } from "@/components/tools/DrawdownTool";
import { PayoutTool } from "@/components/tools/PayoutTool";
import { ContractTool } from "@/components/tools/ContractTool";
import { PathPickerTool } from "@/components/tools/PathPickerTool";

export const metadata = copyMeta("trading-calculators");

export default function CalculatorsPage() {
  return (
    <CopyPage
      name="trading-calculators"
      sections={{
        "50% Consistency Calculator": { replace: <Wrap><ConsistencyTool id="consistency" anchorOffset /></Wrap> },
        "Drawdown Distance Calculator": { replace: <Wrap><DrawdownTool id="drawdown-distance" anchorOffset /></Wrap> },
        "Payout Eligibility Checker": { replace: <Wrap><PayoutTool id="payout-eligibility" anchorOffset /></Wrap> },
        "Contract Multiplier & Apex Cap Reference": { replace: <Wrap><ContractTool id="contract-reference" anchorOffset /></Wrap> },
        "Trading-Style Path Picker": { replace: <Wrap><PathPickerTool id="path-picker" anchorOffset /></Wrap> },
      }}
    />
  );
}
