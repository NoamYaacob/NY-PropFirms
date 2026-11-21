import { CopyPage, copyMeta } from "@/components/copy/CopyPage";
import { LevelCompare } from "@/design-system/Charts";
import { FactChip, Wrap } from "@/design-system/Blocks";
import { WORKED, usable } from "@/data/apex";
import { DrawdownTool } from "@/components/tools/DrawdownTool";
import { PathPickerTool } from "@/components/tools/PathPickerTool";

export const metadata = copyMeta("eod-vs-intraday");

export default function EodVsIntradayPage() {
  const st = WORKED.sameTrade.value as Record<string, unknown> | null;
  const n = (k: string) => `$${Number(st?.[k]).toLocaleString("en-US")}`;
  return (
    <CopyPage
      name="eod-vs-intraday"
      sections={{
        "Side by side": { after: <div className="mt-3"><LevelCompare /></div> },
        "Worked examples": {
          after:
            usable(WORKED.sameTrade) && st ? (
              <div className="mt-3 grid gap-3">
                <div className="ds-chips">
                  <FactChip fact={WORKED.eod} size="50K" label="Apex's official EOD example (50K)" />
                  <FactChip fact={WORKED.intraday} size="50K" label="Apex's official Intraday example (50K)" />
                </div>
                <div className="ds-card p-4">
                  <p className="ds-mono ds-kicker">{String(st.label)}</p>
                  <p className="ds-hint mt-1">
                    {String(st.account)}. {String(st.trade)}
                  </p>
                  <p className="ds-hint">
                    During the session: Intraday threshold {n("intraday_threshold_during_session")}, EOD threshold {n("eod_threshold_during_session")}. After the close: Intraday {n("intraday_threshold_after_close")}, EOD {n("eod_threshold_after_close")}.
                  </p>
                  <FactChip fact={WORKED.sameTrade} size="50K" label="Derived from Apex's official rules" />
                </div>
              </div>
            ) : null,
        },
        "Drawdown Distance Calculator": { replace: <Wrap><DrawdownTool id="drawdown-distance" anchorOffset /></Wrap> },
        "Trading-Style Path Picker": { replace: <Wrap><PathPickerTool id="path-picker" anchorOffset /></Wrap> },
      }}
    />
  );
}
