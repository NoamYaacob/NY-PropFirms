import Link from "next/link";
import { pageMeta } from "@/lib/siteMeta";
import { DD_MECHANICS, WORKED, usable } from "@/data/apex";
import { DisclosurePair, FactChip, PageHeader, Section, TodoCS } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";
import { LevelCompare } from "@/design-system/Charts";
import { DrawdownTool } from "@/components/tools/DrawdownTool";
import { PathPickerTool } from "@/components/tools/PathPickerTool";

export const metadata = pageMeta("/eod-vs-intraday", "Apex EOD vs Intraday Drawdown Explained | NY Prop Firms", "How Apex EOD and Intraday trailing drawdowns differ, with worked examples, the Drawdown Distance Calculator, and a trading-style mechanics picker.");

export default function EodVsIntradayPage() {
  const st = WORKED.sameTrade.value as Record<string, unknown> | null;
  return (
    <>
      <PageHeader eyebrow="Mechanics" title="EOD vs Intraday">
        <DisclosurePair className="mt-3" />
        <TodoCS file="pages/eod-vs-intraday.md" note="Intro copy" />
      </PageHeader>

      <Section id="comparison" title="Side by side">
        <LevelCompare />
        <div className="grid gap-3 sm:grid-cols-2">
          {(["EOD", "Intraday"] as const).map((t) => (
            <div key={t} className="ds-card p-4">
              <h3 className="ds-h3">{t}</h3>
              {usable(DD_MECHANICS[t]) ? <p className="ds-hint">{String(DD_MECHANICS[t].value)}</p> : null}
              <FactChip fact={DD_MECHANICS[t]} label={`Apex: ${t} drawdown explained`} />
            </div>
          ))}
        </div>
        <TodoCS file="pages/eod-vs-intraday.md" note="Mechanics comparison copy" />
      </Section>

      <Section id="examples" title="Worked examples (50K)">
        <p className="ds-hint">The EOD walk-through and the Intraday real-time example are Apex&apos;s official 50K examples.</p>
        <div className="ds-chips">
          <FactChip fact={WORKED.eod} size="50K" label="Official EOD example" />
          <FactChip fact={WORKED.intraday} size="50K" label="Official Intraday example" />
        </div>
        {usable(WORKED.sameTrade) && st ? (
          <div className="ds-card p-4">
            <p className="ds-mono ds-kicker">{String(st.label)}</p>
            <p className="ds-hint" style={{ marginTop: 6 }}>{String(st.account)}. {String(st.trade)}</p>
            <p className="ds-hint">During the session: Intraday threshold ${Number(st.intraday_threshold_during_session).toLocaleString("en-US")}, EOD threshold ${Number(st.eod_threshold_during_session).toLocaleString("en-US")}. After the close: Intraday ${Number(st.intraday_threshold_after_close).toLocaleString("en-US")}, EOD ${Number(st.eod_threshold_after_close).toLocaleString("en-US")}.</p>
            <FactChip fact={WORKED.sameTrade} size="50K" label="Derived from Apex's official rules" />
          </div>
        ) : null}
        <TodoCS file="pages/eod-vs-intraday.md" note="Worked examples copy" />
      </Section>

      <Section id="drawdown-distance-section" title="Drawdown Distance Calculator">
        <DrawdownTool id="drawdown-distance" />
      </Section>

      <Section id="path-picker-section" title="Trading-Style Path Picker">
        <PathPickerTool id="path-picker" />
      </Section>

      <Section id="not-your-stop" title="Drawdown is not your stop">
        <TodoCS file="pages/eod-vs-intraday.md" note="Drawdown is not your stop copy" />
        <p className="ds-hint">
          <Link href="/account-comparison" className="ds-link">Account Comparison</Link> · <Link href="/evaluation-rules" className="ds-link">Evaluation Rules</Link> · <Link href="/performance-account-rules" className="ds-link">PA Rules</Link>
        </p>
      </Section>

      <CtaBlock ctaId="en_eod_intraday_cta" />
    </>
  );
}
