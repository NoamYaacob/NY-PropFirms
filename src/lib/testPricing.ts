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
  "25K":  { fullPrice: "$177",    discountedPrice: "$26.55" },
  "50K":  { fullPrice: "$197",    discountedPrice: "$29.55" },
  "100K": { fullPrice: "$297",    discountedPrice: "$44.55" },
  "150K": { fullPrice: "$397",    discountedPrice: "$59.55" },
};

// ─── Intraday test prices ─────────────────────────────────────────────────────

export const INTRADAY_TEST_PRICES: Record<AccountSize, TestPriceEntry> = {
  "25K":  { fullPrice: "$118.00", discountedPrice: "$17.70" },
  "50K":  { fullPrice: "$131.33", discountedPrice: "$19.70" },
  "100K": { fullPrice: "$198.00", discountedPrice: "$29.70" },
  "150K": { fullPrice: "$264.67", discountedPrice: "$39.70" },
};
