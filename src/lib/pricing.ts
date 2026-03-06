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
  "25K":  { fullPrice: "$177",  discountedPrice: "$26.55" },
  "50K":  { fullPrice: "$197",  discountedPrice: "$29.55" },
  "100K": { fullPrice: "$297",  discountedPrice: "$44.55" },
  "150K": { fullPrice: "$397",  discountedPrice: "$59.55" },
};

// ─── Intraday evaluation prices ───────────────────────────────────────────────

export const INTRADAY_EVAL_PRICES: Record<AccountSize, PriceEntry> = {
  "25K":  { fullPrice: "$117",  discountedPrice: "$17.55" },
  "50K":  { fullPrice: "$131",  discountedPrice: "$19.65" },
  "100K": { fullPrice: "$198",  discountedPrice: "$29.70" },
  "150K": { fullPrice: "$265",  discountedPrice: "$39.75" },
};

// ─── PA activation prices (fixed, not promotional) ────────────────────────────

export const EOD_PA_PRICE      = "$99";
export const INTRADAY_PA_PRICE = "$79";

// ─── Ordered sizes for consistent table rendering ─────────────────────────────

export const ACCOUNT_SIZES: AccountSize[] = ["25K", "50K", "100K", "150K"];
