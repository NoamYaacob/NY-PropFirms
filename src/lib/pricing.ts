/**
 * Manual pricing config for Apex evaluation plans.
 *
 * To update prices, edit this file only — no other file needs to change.
 *
 * Source: https://apextraderfunding.com/evaluation-plans
 * Coupon: NOAM (primary discount code)
 */

export type AccountSize = "25K" | "50K" | "100K" | "150K";

export type PriceEntry = {
  /** List / full price before coupon discount */
  fullPrice: string;
  /** Price after applying coupon code NOAM */
  discountedPrice: string;
};

// ─── EOD evaluation prices ────────────────────────────────────────────────────

export const EOD_EVAL_PRICES: Record<AccountSize, PriceEntry> = {
  "25K":  { fullPrice: "$299.00", discountedPrice: "$29.90" },
  "50K":  { fullPrice: "$349.00", discountedPrice: "$34.90" },
  "100K": { fullPrice: "$599.00", discountedPrice: "$59.90" },
  "150K": { fullPrice: "$799.00", discountedPrice: "$79.90" },
};

// ─── Intraday evaluation prices ───────────────────────────────────────────────

export const INTRADAY_EVAL_PRICES: Record<AccountSize, PriceEntry> = {
  "25K":  { fullPrice: "$199.00", discountedPrice: "$19.90" },
  "50K":  { fullPrice: "$249.00", discountedPrice: "$24.90" },
  "100K": { fullPrice: "$399.00", discountedPrice: "$39.90" },
  "150K": { fullPrice: "$599.00", discountedPrice: "$59.90" },
};

// ─── PA activation prices (One-Time Activation Fee, fixed, not promotional) ──
// Source: https://apextraderfunding.com (account activation pages)

export const EOD_PA_PRICES: Record<AccountSize, string> = {
  "25K":  "$99",
  "50K":  "$109",
  "100K": "$119",
  "150K": "$139",
};

export const INTRADAY_PA_PRICES: Record<AccountSize, string> = {
  "25K":  "$79",
  "50K":  "$89",
  "100K": "$99",
  "150K": "$109",
};

// ─── Ordered sizes for consistent table rendering ─────────────────────────────

export const ACCOUNT_SIZES: AccountSize[] = ["25K", "50K", "100K", "150K"];
