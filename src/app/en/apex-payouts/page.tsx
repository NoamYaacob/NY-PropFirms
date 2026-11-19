import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsistencyCalculator } from "@/components/en/ConsistencyCalculator";
import { EnHero, EnSection, RuleTable, SourceLine, SourceLink, Warn } from "@/components/en/blocks";
import { SIZES } from "@/lib/en/links";
import { enBreadcrumb, enMetadata } from "@/lib/en/metadata";

export const metadata: Metadata = enMetadata(
  "/en/apex-payouts",
  "Apex payouts explained: qualifying days, safety net, 50% consistency, caps",
  "Apex Trader Funding Performance Account payout rules in plain English for EOD and Intraday PAs, with a 50% consistency calculator. Source-linked."
);

const EOD_PAY = [
  ["Qualifying day = net profit of at least", "$100", "$250", "$300", "$350"],
  ["Qualifying days needed", "5", "5", "5", "5"],
  ["Safety net (drawdown + $100)", "$26,100", "$52,100", "$103,100", "$154,100"],
  ["Minimum balance to request", "$26,600", "$52,600", "$103,600", "$154,600"],
  ["Max payouts per PA", "6", "6", "6", "6"],
];

const INTRA_PAY = [
  ["Qualifying day = net profit of at least", "$100", "$200", "$250", "$300"],
  ["Qualifying days needed", "5", "5", "5", "5"],
  ["Safety net (drawdown + $100)", "$26,100", "$52,100", "$103,100", "$154,100"],
  ["Minimum balance to request", "$26,600", "$52,600", "$103,600", "$154,600"],
  ["Max payouts per PA", "6", "6", "6", "6"],
];

const EOD_CAPS = [
  ["1", "$1,000", "$1,500", "$2,000", "$2,500"],
  ["2", "$1,000", "$1,500", "$2,500", "$3,000"],
  ["3", "$1,000", "$2,000", "$2,500", "$3,000"],
  ["4", "$1,000", "$2,500", "$3,000", "$3,000"],
  ["5", "$1,000", "$2,500", "$4,000", "$4,000"],
  ["6", "$1,000", "$3,000", "$4,000", "$5,000"],
];

const INTRA_CAPS = [
  ["1", "$1,000", "$1,500", "$2,000", "$2,500"],
  ["2", "$1,000", "$2,000", "$2,500", "$3,000"],
  ["3", "$1,000", "$2,500", "$3,000", "$3,000"],
  ["4", "$1,000", "$2,500", "$3,000", "$4,000"],
  ["5", "$1,000", "$3,000", "$4,000", "$4,000"],
  ["6", "$1,000", "$3,000", "$4,000", "$5,000"],
];

export default function ApexPayoutsPage() {
  return (
    <>
      <JsonLd
        data={enBreadcrumb([
          { name: "Home", path: "/en" },
          { name: "Payouts", path: "/en/apex-payouts" },
        ])}
      />
      <EnHero
        title="How Apex payouts work"
        lead="Five qualifying days, a minimum balance, 50% consistency, and six capped payouts. Here's each one, with the numbers from Apex's own pages."
      />
      <div className="container-page py-8">
        <EnSection title="The payout rules in one list">
          <ul className="list-disc ps-5 space-y-1">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>5 qualifying days</strong> with at least the minimum daily profit for your size. Not consecutive, no deadline.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Minimum balance to request</strong> = starting balance + drawdown + $100 safety net + the $500 minimum payout.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>The safety net stays for the life of the PA.</strong> Only profit above it can be withdrawn.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>50% consistency:</strong> no single profitable day can be 50% or more of your net profit since your last approved payout. It resets after each approved payout.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Max 6 payouts per PA</strong>, each with a cap. After the sixth, the PA closes.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>100% payout split:</strong> you receive 100% of each approved payout.
            </li>
          </ul>
          <SourceLine>
            Sources: <SourceLink id="eod_pay">EOD Payouts</SourceLink>
            {" · "}
            <SourceLink id="intra_pay">Intraday Trailing Drawdown Payouts</SourceLink>
            {" · "}
            <SourceLink id="consist">50% Consistency Requirement</SourceLink>
          </SourceLine>
        </EnSection>

        <EnSection title="EOD Performance Account">
          <RuleTable head={["", ...SIZES]} rows={EOD_PAY} />
          <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            Cap per payout (EOD PA)
          </h3>
          <RuleTable
            head={["Payout #", ...SIZES]}
            rows={EOD_CAPS}
            foot={["Max total (ceiling)", "$6,000", "$13,000", "$18,000", "$20,500"]}
          />
          <SourceLine>
            Source: <SourceLink id="eod_pay">EOD Payouts</SourceLink>. Totals are simple sums of Apex&apos;s caps: ceilings, not expectations.
          </SourceLine>
        </EnSection>

        <EnSection title="Intraday Performance Account">
          <p>Same structure, two differences: lower minimum daily profit on 50K–150K, and slightly different caps.</p>
          <RuleTable head={["", ...SIZES]} rows={INTRA_PAY} />
          <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            Cap per payout (Intraday PA)
          </h3>
          <RuleTable
            head={["Payout #", ...SIZES]}
            rows={INTRA_CAPS}
            foot={["Max total (ceiling)", "$6,000", "$14,500", "$18,500", "$21,500"]}
          />
          <SourceLine>
            Source: <SourceLink id="intra_pay">Intraday Trailing Drawdown Payouts</SourceLink>.
          </SourceLine>
        </EnSection>

        <ConsistencyCalculator />

        <EnSection title="After you request">
          <p>
            You can keep trading right away, but trade as if the requested amount is already gone. If your balance falls below the required minimum after you request, Apex denies the request automatically; the account stays active and you can request again once you qualify.
          </p>
          <Warn>
            <strong style={{ color: "var(--text-primary)" }}>Keep the PA active.</strong> Apex closes a PA that doesn&apos;t record at least 2 trading days with $50+ net profit in every rolling 30-calendar-day window. Closed for inactivity = payout eligibility forfeited.{" "}
            <SourceLink id="inactive">Inactivity Policy</SourceLink>
          </Warn>
        </EnSection>

        <EnSection title="Worked example: consistency (50K, illustrative)">
          <p>
            Since your last payout you made +$400, +$300, +$900, +$500, +$300 = $2,400. Biggest day: $900. $900 ÷ $2,400 = 37.5%, below 50%: the consistency rule is met. If the $900 day had been $1,300, you&apos;d be at $2,800 total and $1,300 ÷ $2,800 = 46.4%, still met. In a different stretch, one $1,500 day inside a $2,900 total would be 51.7%: not met yet.
          </p>
          <SourceLine>
            Formula from <SourceLink id="consist">Apex&apos;s 50% Consistency page</SourceLink>. Numbers are illustrative, not results.
          </SourceLine>
        </EnSection>
      </div>
    </>
  );
}
