/**
 * Registry of CTA / go-source ids used by the English site (kpis/redirect_and_measurement_plan.md v3).
 * /go/apex/[src] accepts any id matching [a-z0-9_-]{1,64} (src/lib/affiliate.ts, unchanged); this list documents the
 * ids the build uses so a test can assert each one is a valid src. en_mid_cta is home-only.
 */
export const CTA_IDS = [
  "en_home_box",
  "en_mid_cta",
  "en_faq_box",
  "en_rules_hub_cta",
  "en_eval_rules_cta",
  "en_pa_rules_cta",
  "en_account_comparison_cta",
  "en_eod_intraday_cta",
  "en_payout_rules_cta",
  "en_calculators_cta",
  "en_pricing_link",
] as const;
