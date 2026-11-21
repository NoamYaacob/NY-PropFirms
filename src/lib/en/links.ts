export { APEX_AFFILIATE_URL as AFFILIATE_URL } from "@/lib/affiliate";

export const LAST_CHECKED = "November 19, 2026";

const HC = "https://apextraderfunding.com/help-center/";

export const URLS = {
  eod_eval: HC + "eod-trailing-drawdown-accounts/eod-evaluations/",
  intra_eval: HC + "evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
  eod_dd: HC + "eod-trailing-drawdown-accounts/eod-drawdown-explained/",
  intra_dd: HC + "intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
  eod_pa: HC + "eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
  intra_pa: HC + "intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
  eod_pay: HC + "eod-trailing-drawdown-accounts/eod-payouts/",
  intra_pay: HC + "intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
  consist: HC + "additional-helpful-items/50-consistency-requirement/",
  inactive: HC + "billing/inactivity-policy-on-performance-accounts-pa/",
  prohib: HC + "getting-started/prohibited-activities/",
  legacy: HC + "legacy-products/legacy-products-overview/",
  aff: HC + "helpful-items/affiliate-program/",
  support: HC + "getting-started/how-to-contact-apex-trader-funding-support/",
  cme_nq: "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html",
  cme_mnq: "https://www.cmegroup.com/markets/equities/nasdaq/micro-e-mini-nasdaq-100.contractSpecs.html",
  cme_hours: "https://www.cmegroup.com/trading-hours.html",
  scaling: HC + "additional-helpful-items/scaling-levels-pa-explained/",
  dll: HC + "additional-helpful-items/daily-loss-limit-explained/",
  times: HC + "getting-started/futures-trading-times/",
  ftc: "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255",
  vercel_privacy: "https://vercel.com/docs/analytics/privacy-policy",
} as const;

export type UrlKey = keyof typeof URLS;

export const SIZES = ["25K", "50K", "100K", "150K"] as const;
