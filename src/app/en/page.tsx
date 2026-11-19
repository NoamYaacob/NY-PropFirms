import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AffiliateCodeBox } from "@/components/en/AffiliateCodeBox";
import { EnHero, EnSection, InfoCard, Note, RuleTable, SourceLine, SourceLink } from "@/components/en/blocks";
import { SIZES } from "@/lib/en/links";
import { enMetadata } from "@/lib/en/metadata";

export const metadata: Metadata = enMetadata(
  "/en",
  "Futures prop rules, decoded | Apex Trader Funding rules in plain English",
  "Plain-English, source-linked explanations of Apex Trader Funding rules: EOD vs Intraday drawdown, daily loss limit, payouts and 50% consistency. Independent; affiliate disclosed.",
  { pairWithHebrewHome: true }
);

const EVAL_TABLE = {
  head: ["", ...SIZES],
  rows: [
    ["Profit target", "$1,500", "$3,000", "$6,000", "$9,000"],
    ["Max drawdown", "$1,000", "$2,000", "$3,000", "$4,000"],
    ["Daily loss limit (EOD only)", "$500", "$1,000", "$1,500", "$2,000"],
    ["Max contracts", "4", "6", "8", "12"],
    ["Access period", "30 days", "30 days", "30 days", "30 days"],
    ["Minimum trading days", "None", "None", "None", "None"],
    ["Consistency / scaling", "Not applied", "Not applied", "Not applied", "Not applied"],
  ],
};

const EOD_PAY = {
  head: ["", ...SIZES],
  rows: [
    ["Qualifying day = net profit of at least", "$100", "$250", "$300", "$350"],
    ["Qualifying days needed", "5", "5", "5", "5"],
    ["Safety net (drawdown + $100)", "$26,100", "$52,100", "$103,100", "$154,100"],
    ["Minimum balance to request", "$26,600", "$52,600", "$103,600", "$154,600"],
    ["Max payouts per PA", "6", "6", "6", "6"],
  ],
};

const HOME_FAQ = [
  {
    q: "Is this Apex's website?",
    a: "No. It's an independent site. I'm an Apex affiliate, which I disclose on every page.",
  },
  {
    q: "Do you earn money from this?",
    a: (
      <>
        Yes. If you buy with code NOAM or through an affiliate link, Apex may pay me a referral commission.{" "}
        <Link href="/en/how-i-make-money" className="underline" style={{ color: "var(--teal-400)" }}>
          Details
        </Link>
      </>
    ),
  },
  {
    q: "Does the code change the rules?",
    a: "Apex's Help Center lists its rules by account type and size and doesn't list separate rules for referral codes. Check the rules for the exact account you buy.",
  },
  {
    q: "Does hitting the daily loss limit fail my EOD evaluation?",
    a: "No. It pauses trading for the session. Touching the EOD drawdown level fails it.",
  },
  {
    q: "Are these real-money accounts?",
    a: "No. Apex evaluations and Performance Accounts are simulated. Read Apex's own terms.",
  },
];

export default function EnglishHomePage() {
  return (
    <>
      <EnHero
        title="Futures prop rules, decoded."
        lead="Plain-English explanations of Apex Trader Funding's rules: drawdowns, daily limits, payouts, consistency. Every number links to Apex's own page, so you can check it yourself."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button label="Compare EOD vs Intraday" href="/en/apex-eod-vs-intraday" variant="primary" size="md" />
          <Button label="How payouts work" href="/en/apex-payouts" variant="secondary" size="md" />
        </div>
      </EnHero>

      <div className="container-page py-8">
        <EnSection id="what" title="What this site is">
          <div className="grid gap-3 md:grid-cols-3">
            <InfoCard title="Plain English">
              Prop firm rules are written for lawyers. We rewrite them for traders, with worked examples.
            </InfoCard>
            <InfoCard title="Source-linked">
              Every rule links to the exact Apex Help Center page it came from. If Apex changes a rule, the official page wins.
            </InfoCard>
            <InfoCard title="Independent, disclosed">
              Not owned by or acting for Apex. I&apos;m an Apex affiliate (code NOAM). Apex&apos;s Help Center lists its rules by account type and size.
            </InfoCard>
          </div>
        </EnSection>

        <EnSection id="eval" title="Apex evaluation rules at a glance (new accounts)">
          <p>
            Apex&apos;s current (non-Legacy) evaluations come in two drawdown types, EOD and Intraday. The core numbers are the same for both:
          </p>
          <RuleTable head={EVAL_TABLE.head} rows={EVAL_TABLE.rows} />
          <p>
            These are <strong style={{ color: "var(--text-primary)" }}>evaluation</strong> rules. After passing, you have 7 days to activate the Performance Account (PA), which has its own rules: a 50K PA starts at 2 contracts and can scale by tier to 4 (25K: 1→2 · 100K: 3→6 · 150K: 4→10), with a tier-based daily loss limit. The trading day resets at 6:00 PM ET. Apex prohibits hedging of any kind, including hedging evaluation accounts against each other.
          </p>
          <SourceLine>
            Sources: <SourceLink id="eod_eval">EOD Evaluations</SourceLink>
            {" · "}
            <SourceLink id="intra_eval">Intraday Evaluations</SourceLink>
            {" · "}
            <SourceLink id="eod_pa">EOD PA</SourceLink>
            {" · "}
            <SourceLink id="intra_pa">Intraday PA</SourceLink>
            {" · "}
            <SourceLink id="scaling">Scaling Levels (PA)</SourceLink>
            {" · "}
            <SourceLink id="prohib">Prohibited Activities</SourceLink>
          </SourceLine>
          <Note>
            <strong style={{ color: "var(--text-primary)" }}>Legacy accounts are different.</strong> Accounts bought under Apex&apos;s pre-March 1, 2026 rules (&quot;Legacy&quot;) keep their old rules, and Apex&apos;s homepage currently shows Legacy evaluations back for a limited time. Don&apos;t mix the two rulebooks.{" "}
            <SourceLink id="legacy">Legacy overview</SourceLink>
          </Note>
        </EnSection>

        <EnSection id="eodi" title="EOD vs Intraday in 60 seconds">
          <div className="grid gap-3 md:grid-cols-2">
            <InfoCard title="EOD (end-of-day) drawdown">
              Your drawdown level is calculated once per day from your closing balance and enforced in real time during the next session. A fixed daily loss limit pauses trading for the rest of the session when hit; it doesn&apos;t fail the evaluation. Touching the drawdown level does.
            </InfoCard>
            <InfoCard title="Intraday trailing drawdown">
              Your drawdown level follows your highest balance in real time, <em>including open (unrealized) profit</em>, and never moves down. There&apos;s no daily loss limit in the evaluation; the trailing level is the only brake.
            </InfoCard>
          </div>
          <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            Same trade, two outcomes (50K, illustrative)
          </h3>
          <p>You start at $50,000, a trade runs to +$1,500 open, and you exit at breakeven.</p>
          <ul className="list-disc ps-5 space-y-1">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Intraday:</strong> the level trailed your $51,500 peak to $49,500. You now have $500 of room.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>EOD:</strong> the level is set from closing balances, so it is still $48,000.
            </li>
          </ul>
          <p>
            <Link href="/en/apex-eod-vs-intraday" className="underline" style={{ color: "var(--teal-400)" }}>
              Full comparison →
            </Link>
          </p>
        </EnSection>

        <EnSection id="pay" title="Getting paid: the four numbers that matter (EOD Performance Account)">
          <RuleTable head={EOD_PAY.head} rows={EOD_PAY.rows} />
          <ol className="list-decimal ps-5 space-y-2">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>5 qualifying days.</strong> Not consecutive, no deadline.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Minimum balance.</strong> Already includes the safety net and the $500 minimum payout.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>50% consistency.</strong> No single profitable day can be 50% or more of your profit since your last approved payout. If it is, the request option stays hidden until it isn&apos;t.{" "}
              <Link href="/en/apex-payouts#calculator" className="underline" style={{ color: "var(--teal-400)" }}>
                Try the calculator →
              </Link>
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Six payouts, then the PA closes.</strong> Each payout has a cap (50K: $1,500 · $1,500 · $2,000 · $2,500 · $2,500 · $3,000). You receive 100% of each approved payout.
            </li>
          </ol>
          <p>
            After you request, keep trading as if the payout is already gone: if your balance falls below the required threshold after the request, Apex denies it automatically and the account stays active.
          </p>
          <SourceLine>
            Source: <SourceLink id="eod_pay">EOD Payouts</SourceLink>
            {" · "}Intraday PA numbers differ slightly:{" "}
            <Link href="/en/apex-payouts" className="underline" style={{ color: "var(--teal-400)" }}>
              see the payouts page
            </Link>
            .
          </SourceLine>
        </EnSection>

        <EnSection id="size" title="How to pick an account size">
          <p>Bigger isn&apos;t automatically better. Three checks:</p>
          <ol className="list-decimal ps-5 space-y-2">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Your stop in dollars × your size vs. the drawdown.</strong> On NQ, one E-mini moves $20 per point and one Micro (MNQ) $2 per point (<SourceLink id="cme_nq">CME</SourceLink>). A 50K&apos;s $2,000 drawdown is 100 NQ points on one mini, or 1,000 points on one micro. That&apos;s your total room, not a stop: Apex prohibits using the drawdown threshold as a stop loss (<SourceLink id="prohib">Prohibited Activities</SourceLink>).
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>How many bad days you can absorb.</strong> In an EOD evaluation, two full daily-loss-limit days use the entire drawdown on every size (50K: 2 × $1,000 = $2,000).
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Whether the payout caps fit your goal.</strong> Max total across six EOD payouts: 25K $6,000 · 50K $13,000 · 100K $18,000 · 150K $20,500. These are ceilings, not expectations.
            </li>
          </ol>
          <p>
            Check the current price on Apex&apos;s site before you decide; prices and promotions change often.{" "}
            <Link href="/en/account-size" className="underline" style={{ color: "var(--teal-400)" }}>
              Account-size guide →
            </Link>
          </p>
        </EnSection>

        <EnSection id="types" title="Rule types, explained (any firm)">
          <p>Most futures prop rules fall into a handful of types. Knowing the type tells you how traders usually fail it:</p>
          <ul className="list-disc ps-5 space-y-1">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Drawdown model:</strong> end-of-day, intraday trailing, or static. Trailing models punish giving back open profit.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Daily loss limit:</strong> none, a session pause, or a hard fail.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Consistency rule:</strong> a cap on how much of your profit one day can be.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Minimum days and payout timing:</strong> how many qualifying days before a request.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Payout caps and count:</strong> per-payout ceilings and a maximum number of payouts per account.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Fees:</strong> one-time vs recurring, activation fees.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Inactivity and conduct rules:</strong> minimum activity to keep an account open, and banned practices.
            </li>
          </ul>
        </EnSection>

        <EnSection id="chk" title="Before you buy: the 5-minute checklist">
          <ul className="space-y-2">
            {[
              "Which drawdown model, and is it calculated intraday or at the close?",
              "Is there a daily loss limit, and does hitting it pause or fail you?",
              "What's your stop in dollars at your normal size?",
              "What do you need for the first payout (days, balance, consistency)?",
              "Did you read the rule on the firm's own page, today?",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </EnSection>

        <AffiliateCodeBox position="en_home_box" />

        <EnSection id="faq" title="FAQ">
          {HOME_FAQ.map((item) => (
            <details key={item.q} className="border-b py-3" style={{ borderColor: "var(--surface-border)" }}>
              <summary className="font-semibold cursor-pointer" style={{ color: "var(--text-primary)" }}>
                {item.q}
              </summary>
              <p className="mt-2">{item.a}</p>
            </details>
          ))}
          <p>
            <Link href="/en/faq" className="underline" style={{ color: "var(--teal-400)" }}>
              All questions →
            </Link>
          </p>
        </EnSection>
      </div>
    </>
  );
}
