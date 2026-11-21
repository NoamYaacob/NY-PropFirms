import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { EnHero, EnSection, Note, RuleTable, SourceLine, SourceLink } from "@/components/en/blocks";
import { SIZES } from "@/lib/en/links";
import { enBreadcrumb, enMetadata } from "@/lib/en/metadata";

export const metadata: Metadata = enMetadata(
  "/en/account-size",
  "Which Apex account size? Drawdown in NQ points, contracts and payout caps",
  "Compare Apex Trader Funding 25K, 50K, 100K and 150K accounts in trader terms: drawdown in NQ/MNQ points, daily loss limit, contracts and payout caps."
);

const ROWS = [
  ["Max drawdown", "$1,000", "$2,000", "$3,000", "$4,000"],
  ["= NQ points on 1 E-mini ($20/pt)", "50", "100", "150", "200"],
  ["= MNQ points on 1 Micro ($2/pt)", "500", "1,000", "1,500", "2,000"],
  ["EOD eval daily loss limit", "$500", "$1,000", "$1,500", "$2,000"],
  ["Full DLL days to use the whole drawdown (EOD eval)", "2", "2", "2", "2"],
  ["Max contracts: evaluation", "4", "6", "8", "12"],
  ["PA contracts: start (Tier 1) → max", "1 → 2", "2 → 4", "3 → 6", "4 → 10"],
  ["Max total of 6 payouts: EOD PA", "$6,000", "$13,000", "$18,000", "$20,500"],
  ["Max total of 6 payouts: Intraday PA", "$6,000", "$14,500", "$18,500", "$21,500"],
];

export default function AccountSizePage() {
  return (
    <>
      <JsonLd
        data={enBreadcrumb([
          { name: "Home", path: "/en" },
          { name: "Account size", path: "/en/account-size" },
        ])}
      />
      <EnHero
        title="How to pick an account size"
        lead="Bigger isn't automatically better. Translate each size into points, bad days and payout ceilings first."
      />
      <div className="container-page py-8">
        <EnSection title="The account sizes in trader terms">
          <RuleTable head={["", ...SIZES]} rows={ROWS} />
          <SourceLine>
            Sources: <SourceLink id="eod_eval">EOD Evaluations</SourceLink>
            {" · "}
            <SourceLink id="intra_eval">Intraday Evaluations</SourceLink>
            {" · "}
            <SourceLink id="eod_pa">EOD PA</SourceLink>
            {" · "}
            <SourceLink id="intra_pa">Intraday PA</SourceLink>
            {" · "}
            <SourceLink id="eod_pay">EOD Payouts</SourceLink>
            {" · "}
            <SourceLink id="intra_pay">Intraday Payouts</SourceLink>
            {" · "}
            <SourceLink id="scaling">Scaling Levels (PA)</SourceLink>
            {" · "}
            <SourceLink id="cme_nq">CME E-mini Nasdaq-100</SourceLink>
            {" · "}
            <SourceLink id="cme_mnq">CME Micro E-mini Nasdaq-100</SourceLink>. Point conversions are simple division.
          </SourceLine>
        </EnSection>

        <EnSection title="Three checks before you pick">
          <ol className="list-decimal ps-5 space-y-2">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Your normal stop × your normal size, in dollars.</strong> Compare it with the drawdown. If two or three normal losers in a row would eat most of it, the size is too small for how you trade, or your size is too big for it.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Drawdown is room, not a stop.</strong> Apex prohibits using the account&apos;s full threshold as a stop loss, and requires a stop (pending or mental) on every trade.{" "}
              <SourceLink id="prohib">Prohibited Activities</SourceLink>
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>PA contracts are lower than evaluation contracts.</strong> A 50K evaluation allows 6 contracts. A 50K PA starts at 2 and can scale by tier to 4 (<SourceLink id="scaling">Scaling Levels</SourceLink>). Make sure your strategy still works at PA size.
            </li>
          </ol>
          <Note>
            Price isn&apos;t in this table on purpose. Apex prices and promotions change often; check them on Apex&apos;s own checkout page on the day you buy.
          </Note>
        </EnSection>
      </div>
    </>
  );
}
