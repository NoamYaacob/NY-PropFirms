/**
 * Central config for Apex TEST / Evaluation prices.
 *
 * These are the only prices that change (promotional discounts vary).
 * To update: edit this file only — no other file needs to change.
 *
 * PA prices are fixed and live in the UI component, not here.
 *
 * Source: https://apextraderfunding.com/evaluation-plans
 * Coupon: NOAM
 */

export type AccountSize = "25K" | "50K" | "100K" | "150K";

export type TestPriceEntry = {
  /** Full / list price before coupon discount */
  fullPrice: string;
  /** Price after applying coupon code NOAM */
  discountedPrice: string;
};

/** Render order for table rows */
export const ACCOUNT_SIZES: AccountSize[] = ["25K", "50K", "100K", "150K"];

// ─── EOD test prices ──────────────────────────────────────────────────────────

export const EOD_TEST_PRICES: Record<AccountSize, TestPriceEntry> = {
  "25K":  { fullPrice: "$299.00", discountedPrice: "$29.90" },
  "50K":  { fullPrice: "$349.00", discountedPrice: "$34.90" },
  "100K": { fullPrice: "$599.00", discountedPrice: "$59.90" },
  "150K": { fullPrice: "$799.00", discountedPrice: "$79.90" },
};

// ─── Intraday test prices ─────────────────────────────────────────────────────

export const INTRADAY_TEST_PRICES: Record<AccountSize, TestPriceEntry> = {
  "25K":  { fullPrice: "$199.00", discountedPrice: "$19.90" },
  "50K":  { fullPrice: "$249.00", discountedPrice: "$24.90" },
  "100K": { fullPrice: "$399.00", discountedPrice: "$39.90" },
  "150K": { fullPrice: "$599.00", discountedPrice: "$59.90" },
};
