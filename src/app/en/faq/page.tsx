import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { AffiliateCodeBox } from "@/components/en/AffiliateCodeBox";
import { EnHero, EnSection, SourceLink } from "@/components/en/blocks";
import { enBreadcrumb, enMetadata } from "@/lib/en/metadata";

export const metadata: Metadata = enMetadata(
  "/en/faq",
  "Apex Trader Funding FAQ in plain English | NY Prop Firms",
  "Short, source-linked answers about Apex Trader Funding evaluations, daily loss limits, payouts, inactivity and prohibited activities."
);

type FaqItem = { q: string; text: string; a: ReactNode };

const FAQS: FaqItem[] = [
  {
    q: "Is this Apex's website?",
    text: "No. It's an independent site. I'm an Apex affiliate, which I disclose on every page.",
    a: "No. It's an independent site. I'm an Apex affiliate, which I disclose on every page.",
  },
  {
    q: "Do you earn money from this?",
    text: "Yes. If you buy with code NOAM or through an affiliate link, Apex may pay me a referral fee. Apex's Help Center lists its rules by account type and size. Apex runs its own promotions, so compare the checkout price with and without the code. Details",
    a: (
      <>
        Yes. If you buy with code NOAM or through an affiliate link, Apex may pay me a referral fee. Apex&apos;s Help Center lists its rules by account type and size. Apex runs its own promotions, so compare the checkout price with and without the code.{" "}
        <Link href="/en/how-i-make-money" className="underline" style={{ color: "var(--teal-400)" }}>
          Details
        </Link>
      </>
    ),
  },
  {
    q: "Does the code change the rules?",
    text: "Apex's Help Center lists its rules by account type and size and doesn't list separate rules for referral codes. Check the rules for the exact account you buy.",
    a: "Apex's Help Center lists its rules by account type and size and doesn't list separate rules for referral codes. Check the rules for the exact account you buy.",
  },
  {
    q: "Does hitting the daily loss limit fail my EOD evaluation?",
    text: "No. It liquidates open positions and pauses trading for the rest of the session. Touching the EOD drawdown level fails it. Daily Loss Limit Explained · EOD Drawdown Explained",
    a: (
      <>
        No. It liquidates open positions and pauses trading for the rest of the session. Touching the EOD drawdown level fails it.{" "}
        <SourceLink id="dll">Daily Loss Limit Explained</SourceLink>
        {" · "}
        <SourceLink id="eod_dd">EOD Drawdown Explained</SourceLink>
      </>
    ),
  },
  {
    q: "Is there a daily loss limit in the Intraday evaluation?",
    text: "No. The trailing drawdown level is the only brake. Source",
    a: (
      <>
        No. The trailing drawdown level is the only brake. <SourceLink id="intra_eval">Source</SourceLink>
      </>
    ),
  },
  {
    q: "Is there a minimum number of trading days to pass?",
    text: "No. You can pass in one trading day, within a 30-day access period. Source",
    a: (
      <>
        No. You can pass in one trading day, within a 30-day access period. <SourceLink id="eod_eval">Source</SourceLink>
      </>
    ),
  },
  {
    q: "How long do I have to activate the PA after passing?",
    text: "7 days. Source",
    a: (
      <>
        7 days. <SourceLink id="intra_eval">Source</SourceLink>
      </>
    ),
  },
  {
    q: "How soon can I request a payout?",
    text: "After 5 qualifying days, if you also meet the minimum balance and the 50% consistency rule. EOD · Intraday",
    a: (
      <>
        After 5 qualifying days, if you also meet the minimum balance and the 50% consistency rule.{" "}
        <SourceLink id="eod_pay">EOD</SourceLink>
        {" · "}
        <SourceLink id="intra_pay">Intraday</SourceLink>
      </>
    ),
  },
  {
    q: "Can a PA be closed for inactivity?",
    text: "Yes: if it doesn't record at least 2 trading days with $50+ net profit in a rolling 30-calendar-day window. Source",
    a: (
      <>
        Yes: if it doesn&apos;t record at least 2 trading days with $50+ net profit in a rolling 30-calendar-day window.{" "}
        <SourceLink id="inactive">Source</SourceLink>
      </>
    ),
  },
  {
    q: "Can I use the drawdown as my stop loss?",
    text: "No. Apex prohibits it, and requires a stop on every trade. Source",
    a: (
      <>
        No. Apex prohibits it, and requires a stop on every trade. <SourceLink id="prohib">Source</SourceLink>
      </>
    ),
  },
  {
    q: "How many PAs can I hold?",
    text: "Up to 20 at the same time, across all PA types. Source",
    a: (
      <>
        Up to 20 at the same time, across all PA types. <SourceLink id="intra_pa">Source</SourceLink>
      </>
    ),
  },
  {
    q: "Are these real-money accounts?",
    text: "No. Apex evaluations and Performance Accounts are simulated. Source",
    a: (
      <>
        No. Apex evaluations and Performance Accounts are simulated. <SourceLink id="intra_pa">Source</SourceLink>
      </>
    ),
  },
  {
    q: "What are Legacy accounts?",
    text: "Accounts under Apex's pre-March 1, 2026 rules. They keep their own rules, which differ from this site's tables. Source",
    a: (
      <>
        Accounts under Apex&apos;s pre-March 1, 2026 rules. They keep their own rules, which differ from this site&apos;s tables.{" "}
        <SourceLink id="legacy">Source</SourceLink>
      </>
    ),
  },
];

export default function EnglishFaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.text },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd
        data={enBreadcrumb([
          { name: "Home", path: "/en" },
          { name: "FAQ", path: "/en/faq" },
        ])}
      />
      <EnHero title="FAQ" lead="Short answers, each linked to Apex's own page." />
      <div className="container-page py-8">
        <EnSection title="Questions">
          {FAQS.map((item) => (
            <details key={item.q} className="border-b py-3" style={{ borderColor: "var(--surface-border)" }}>
              <summary className="font-semibold cursor-pointer" style={{ color: "var(--text-primary)" }}>
                {item.q}
              </summary>
              <div className="mt-2">{item.a}</div>
            </details>
          ))}
        </EnSection>
        <AffiliateCodeBox position="en_faq_box" />
      </div>
    </>
  );
}
