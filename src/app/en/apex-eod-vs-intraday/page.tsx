import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { EnHero, EnSection, Note, RuleTable, SourceLine, SourceLink, Warn } from "@/components/en/blocks";
import { enBreadcrumb, enMetadata } from "@/lib/en/metadata";

export const metadata: Metadata = enMetadata(
  "/en/apex-eod-vs-intraday",
  "Apex EOD vs Intraday drawdown, explained with examples",
  "How Apex Trader Funding's EOD and Intraday trailing drawdowns differ: when the level moves, the daily loss limit, where trailing stops, with worked examples."
);

const ROWS = [
  ["How the level is set", "Once per day from your closing balance (Apex recalculates at 4:59:59 PM ET)", "Continuously, from your peak balance including unrealized profit"],
  ["When it's enforced", "In real time during the next session", "In real time, always"],
  ["Does open profit move it?", "No", "Yes"],
  ["Moves down after a loss?", "Never", "Never"],
  ["Daily loss limit in the evaluation", "Yes ($500 / $1,000 / $1,500 / $2,000); hitting it pauses the session, doesn't fail", "No daily loss limit"],
  ["Daily loss limit in the PA", "Tier-based", "Tier-based"],
  ["Where trailing stops (PA)", "Starting balance + $100 (50K: $50,100)", "Starting balance + $100 (50K: $50,100)"],
  ["Where trailing stops (evaluation)", "Depends on platform (see Apex page)", "Depends on platform (see Apex page)"],
  ["Touching the level", "Evaluation failed / PA closed", "Evaluation failed / PA closed"],
];

export default function EodVsIntradayPage() {
  return (
    <>
      <JsonLd
        data={enBreadcrumb([
          { name: "Home", path: "/en" },
          { name: "EOD vs Intraday", path: "/en/apex-eod-vs-intraday" },
        ])}
      />
      <EnHero
        title="EOD vs Intraday drawdown"
        lead="Same profit targets, same max drawdown. The difference is when the drawdown level moves, and what counts toward it."
      />
      <div className="container-page py-8">
        <EnSection title="Side by side">
          <RuleTable head={["", "EOD drawdown", "Intraday trailing drawdown"]} rows={ROWS} />
          <SourceLine>
            Sources: <SourceLink id="eod_dd">EOD Drawdown Explained</SourceLink>
            {" · "}
            <SourceLink id="intra_dd">Intraday Trailing Drawdown Explained</SourceLink>
            {" · "}
            <SourceLink id="eod_eval">EOD Evaluations</SourceLink>
            {" · "}
            <SourceLink id="intra_eval">Intraday Evaluations</SourceLink>
            {" · "}
            <SourceLink id="eod_pa">EOD PA</SourceLink>
            {" · "}
            <SourceLink id="intra_pa">Intraday PA</SourceLink>
          </SourceLine>
        </EnSection>

        <EnSection title="Worked example: EOD, step by step (50K)">
          <p>This is Apex&apos;s own example from the EOD Drawdown page. Max drawdown $2,000.</p>
          <RuleTable
            head={["Day", "Closing balance", "EOD level", "Why"]}
            rows={[
              ["Start", "$50,000", "$48,000", "$50,000 − $2,000"],
              ["1", "$50,800", "$48,800", "New closing high"],
              ["2", "$51,600", "$49,600", "New closing high"],
              ["3", "$50,900", "$49,600", "Losing day: the level doesn't move down"],
              ["4", "$52,000", "$50,000", "New closing high"],
            ]}
          />
          <p>Even though the level is only recalculated at the close, it&apos;s enforced in real time: touch it intraday and positions are liquidated.</p>
        </EnSection>

        <EnSection title="Worked example: the same trade on both (50K, illustrative)">
          <p>You start at $50,000. A trade runs to +$1,500 open profit, then comes all the way back and you exit at breakeven.</p>
          <ul className="list-disc ps-5 space-y-1">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Intraday:</strong> the level trailed your $51,500 peak to $49,500. Your balance is $50,000, so you have $500 of room left.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>EOD:</strong> nothing closed above $50,000, so the level is still $48,000 and you still have $2,000 of room.
            </li>
          </ul>
          <Note>
            The lesson isn&apos;t &quot;EOD is better&quot;. Intraday has no daily loss limit in the evaluation; EOD does. The right one depends on whether you tend to give back open profit, or tend to have one big losing day.
          </Note>
        </EnSection>

        <EnSection title="Which fits you? Two honest questions">
          <ol className="list-decimal ps-5 space-y-2">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Do you often let winners run, then give some back?</strong> Intraday trailing counts the open peak, so that habit eats your room. EOD only counts what you close with.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Do you sometimes have one day where everything goes wrong?</strong> In an EOD evaluation, the daily loss limit stops the day before it gets worse. In an Intraday evaluation, only the trailing level stops you.
            </li>
          </ol>
          <Warn>
            Apex prohibits using the drawdown threshold as a stop loss, trading without a stop, and holding positions through the market close. Plan your own stop well inside the level.{" "}
            <SourceLink id="prohib">Prohibited Activities</SourceLink>
          </Warn>
        </EnSection>
      </div>
    </>
  );
}
