/* Canonical strings, per compliance/en_site_rules_policy.md v2 and sitemap v2.3.1. Straight apostrophes (CF hash form). */
export const HDR_BAR = "#ad · Affiliate site: I may earn a commission if you use code NOAM or an affiliate link. Not financial advice.";
export const DISC_LINE = "Disclosure: I'm an Apex affiliate.";
export const AD_LINE = "Ad: I earn a commission if you use my code NOAM.";
export const CODE_CAVEAT = "Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.";
export const RISK_COMPACT = "Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.";
export const FTR_FULL =
  "#ad · Affiliate disclosure: Independent site, not affiliated with or endorsed by Apex Trader Funding. I earn a commission if you use code NOAM or an affiliate link. Apex's Help Center lists its rules by account type and size. Not financial or investment advice. Futures trading involves substantial risk of loss. Evaluations and Performance Accounts (PAs) are simulated. Official Apex pages control.";
export const UNOFFICIAL = "Unofficial helper, not advice; Apex's system decides.";
export const LINK_LABEL = "Explore Apex Accounts";
export const CODE_LABEL = "Referral code NOAM";
export const CTA_HEADING = "If you decide to use Apex";
export const PRICING_FALLBACK = "See current pricing on Apex's site";
export const PRICE_NOTICE = "Prices are set by Apex and can change at any time. Confirm the total at Apex checkout.";
export const INDEPENDENCE =
  "This is an independent site operated by Noam (@NoamPropFirms), an Apex Trader Funding affiliate. This site is not Apex Trader Funding, is not owned by Apex, and is not endorsed by or an official representative of Apex.";
export const SITE_URL = "https://ny-propfirms.com";

export interface RouteDef {
  href: string;
  label: string;
  short?: string;
}

/** The 12 routes of the English site (sitemap v2.3.1). */
export const ROUTES: RouteDef[] = [
  { href: "/", label: "Home" },
  { href: "/apex-rules", label: "Apex Rules" },
  { href: "/account-comparison", label: "Account Comparison", short: "Compare" },
  { href: "/eod-vs-intraday", label: "EOD vs Intraday" },
  { href: "/evaluation-rules", label: "Evaluation Rules" },
  { href: "/performance-account-rules", label: "Performance Account Rules", short: "PA Rules" },
  { href: "/payout-rules", label: "Payout Rules" },
  { href: "/trading-calculators", label: "Trading Calculators", short: "Calculators" },
  { href: "/faq", label: "FAQ" },
  { href: "/updates", label: "Latest Apex Updates", short: "Updates" },
  { href: "/about", label: "About & Affiliate Disclosure", short: "About" },
  { href: "/sources", label: "Official Sources", short: "Sources" },
];

export const NAV_MAIN: Array<RouteDef & { children?: RouteDef[] }> = [
  {
    href: "/apex-rules",
    label: "Apex Rules",
    children: [
      { href: "/apex-rules", label: "Rules Hub" },
      { href: "/evaluation-rules", label: "Evaluation Rules" },
      { href: "/performance-account-rules", label: "PA Rules" },
    ],
  },
  { href: "/account-comparison", label: "Account Comparison" },
  { href: "/eod-vs-intraday", label: "EOD vs Intraday" },
  { href: "/payout-rules", label: "Payout Rules" },
  { href: "/trading-calculators", label: "Calculators" },
  { href: "/faq", label: "FAQ" },
];

export const FOOTER_COLUMNS: Array<{ title: string; links: RouteDef[] }> = [
  {
    title: "Rules & Comparison",
    links: [
      { href: "/", label: "Home" },
      { href: "/apex-rules", label: "Apex Rules Hub" },
      { href: "/evaluation-rules", label: "Evaluation Rules" },
      { href: "/performance-account-rules", label: "Performance Account Rules" },
      { href: "/account-comparison", label: "Account Comparison" },
      { href: "/eod-vs-intraday", label: "EOD vs Intraday" },
    ],
  },
  {
    title: "Payouts & Tools",
    links: [
      { href: "/payout-rules", label: "Payout Rules" },
      { href: "/trading-calculators", label: "Trading Calculators" },
      { href: "/trading-calculators#consistency", label: "Consistency Calculator" },
      { href: "/trading-calculators#drawdown-distance", label: "Drawdown Distance Calculator" },
      { href: "/trading-calculators#payout-eligibility", label: "Payout Eligibility Checker" },
      { href: "/trading-calculators#contract-reference", label: "Contract Multiplier & Apex Cap Reference" },
      { href: "/trading-calculators#path-picker", label: "Path Picker" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Updates & Transparency",
    links: [
      { href: "/updates", label: "Latest Apex Updates" },
      { href: "/sources", label: "Official Sources" },
      { href: "/about#disclosure", label: "About & Affiliate Disclosure" },
      { href: "/about#privacy", label: "Privacy & Cookies" },
    ],
  },
];
