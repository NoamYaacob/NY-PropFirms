/**
 * Prices render ONLY from src/data/prices.gated.json, which is generated from the output of
 * compliance/tools/validate_prices.py --gate. This module ignores display, display_sale, display_promo and force_show flags,
 * never treats status VERIFIED as a show condition, and never reads research/apex_prices_current.json.
 * A row appears here only if the validator passed it for display. Today that is 0 rows.
 */
import gated from "./prices.gated.json";

export interface GatedPriceRow {
  /** One stage per card. */
  stage: "Evaluation" | "Performance Account";
  accountType: "EOD" | "Intraday";
  size: string;
  /** Only fields that passed the gate are present. */
  list?: number;
  sale?: { amount: number; asOfEt: string };
  activationFee?: number;
  lastUpdatedEt: string;
  /** Direct official Apex pricing URL, never /go/. */
  sourceUrl: string;
}

export const GATED_PRICE_ROWS: GatedPriceRow[] = (gated.rows as unknown as GatedPriceRow[]) ?? [];
