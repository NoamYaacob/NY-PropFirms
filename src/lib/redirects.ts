/**
 * 308 redirect map from kpis/redirect_and_measurement_plan.md v3 and sitemap v2.3.1.
 * Shared by next.config.ts (exact paths) and src/proxy.ts (trailing-slash variants, so they take one hop, not two).
 */
export const REDIRECTS: Array<[string, string]> = [
  ["/en", "/"],
  ["/en/apex-eod-vs-intraday", "/eod-vs-intraday"],
  ["/en/apex-payouts", "/payout-rules"],
  ["/en/account-size", "/account-comparison"],
  ["/en/faq", "/faq"],
  ["/en/how-i-make-money", "/about"],
  ["/en/sources", "/sources"],
  ["/apex", "/apex-rules"],
  ["/apex/eod", "/eod-vs-intraday"],
  ["/apex/intraday", "/eod-vs-intraday"],
  ["/apex/payouts", "/payout-rules"],
  ["/apex/compliance", "/apex-rules#prohibited-activities"],
  ["/en/apex-rules", "/apex-rules"],
  ["/en/rules-checklist", "/apex-rules#before-you-buy"],
  ["/en/newsletter", "/"],
  ["/en/consistency-calculator", "/trading-calculators"],
];

export const REDIRECT_MAP: Record<string, string> = Object.fromEntries(REDIRECTS);

/** Pure: where a request path should go in ONE hop, or null. Trailing slashes are stripped here (skipTrailingSlashRedirect is on). */
export function slashRedirect(pathname: string): string | null {
  if (pathname.length <= 1 || !pathname.endsWith("/")) return null;
  const bare = pathname.replace(/\/+$/, "") || "/";
  return REDIRECT_MAP[bare] ?? bare;
}
