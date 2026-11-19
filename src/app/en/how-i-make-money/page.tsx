import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { EnHero, EnSection, SourceLine, SourceLink } from "@/components/en/blocks";
import { URLS } from "@/lib/en/links";
import { enBreadcrumb, enMetadata } from "@/lib/en/metadata";

export const metadata: Metadata = enMetadata(
  "/en/how-i-make-money",
  "How I make money | Affiliate disclosure",
  "NY Prop Firms is an independent site. I'm an Apex Trader Funding affiliate (code NOAM). Here's exactly how I earn and what it means for the content."
);

export default function HowIMakeMoneyPage() {
  return (
    <>
      <JsonLd
        data={enBreadcrumb([
          { name: "Home", path: "/en" },
          { name: "How I make money", path: "/en/how-i-make-money" },
        ])}
      />
      <EnHero
        title="How I make money"
        lead="Plainly: through an affiliate relationship with Apex Trader Funding."
      />
      <div className="container-page py-8">
        <section
          className="rounded-xl p-5 md:p-6 mb-5"
          style={{ backgroundColor: "var(--gold-900)", border: "2px solid var(--gold-edge)" }}
        >
          <span
            className="inline-block text-xs font-extrabold tracking-wide px-2 py-1 rounded"
            style={{ backgroundColor: "var(--gold-500)", color: "var(--text-inverse)" }}
          >
            #ad · AFFILIATE DISCLOSURE
          </span>
          <h2 className="text-2xl font-bold mt-3 mb-3" style={{ color: "var(--text-primary)" }}>
            The short version
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I&apos;m an Apex Trader Funding affiliate. When someone buys an eligible Apex account with my code{" "}
            <strong style={{ color: "var(--text-primary)" }}>NOAM</strong>, or through a link on this site marked &quot;affiliate link&quot;, Apex may pay me a referral fee. NOAM is a referral code, and using it is optional. Apex&apos;s Help Center lists its rules by account type and size. Apex runs its own promotions, so compare the checkout price with and without the code.
          </p>
        </section>

        <EnSection title="What that means for this site">
          <ul className="list-disc ps-5 space-y-1">
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Rules come from Apex&apos;s Help Center.</strong> It lists them by account type and size. Check the rules for the exact account you buy.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>I don&apos;t claim the code gives a discount.</strong> Apex runs its own promotions; compare the checkout price with and without the code.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Every rule is source-linked</strong> to Apex&apos;s Help Center so you can check it without trusting me.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>Prices aren&apos;t shown here.</strong> They change often; check Apex&apos;s own site on the day you buy.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>No income promises.</strong> Payout caps on this site are Apex&apos;s ceilings, not expected results. Apex doesn&apos;t publish how many traders reach them.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>On X</strong>, posts that include my code or affiliate link are labeled #ad and use X&apos;s Paid Partnership label (older posts are being reviewed and cleaned up).
            </li>
          </ul>
          <SourceLine>
            Apex describes its affiliate program on its own page: <SourceLink id="aff">Affiliate Program</SourceLink>. US endorsement disclosure rules:{" "}
            <a href={URLS.ftc} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--teal-400)" }}>
              FTC Endorsement Guides, 16 CFR Part 255
            </a>
            .
          </SourceLine>
        </EnSection>

        <EnSection id="privacy" title="Privacy and analytics">
          <p>
            This site uses Vercel Web Analytics to count page views and clicks on links and buttons, including the Apex affiliate link and the &quot;Copy code&quot; button. Vercel says it doesn&apos;t use cookies and doesn&apos;t store personal identifiers; visitors are counted with an anonymous hash that resets every day (
            <a href={URLS.vercel_privacy} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--teal-400)" }}>
              Vercel Web Analytics privacy
            </a>
            ). Apex&apos;s affiliate link sets an Apex cookie (180 days, per Apex&apos;s own redirect responses) so Apex can credit the referral. Apex&apos;s privacy and cookie policies apply there.
          </p>
        </EnSection>

        <EnSection title="What I'm not">
          <p>
            I&apos;m not Apex, I don&apos;t work for Apex, and I can&apos;t change your account, approve payouts or answer for Apex support. For account questions, contact Apex directly:{" "}
            <SourceLink id="support">How to contact Apex support</SourceLink>.
          </p>
        </EnSection>
      </div>
    </>
  );
}
