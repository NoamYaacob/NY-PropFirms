// ─── Types ────────────────────────────────────────────────────────────────────

export type TierAccountSize = "25k" | "50k" | "100k" | "150k";

export interface TierRow {
  /** Tier Level number, e.g. 1, 2, 3, 4 */
  level: number;
  /** EOD balance range that qualifies for this tier, e.g. "$25,000 – $25,999" */
  balanceRange: string;
  /** Maximum contracts allowed at this tier */
  maxContracts: number;
  /** Daily Loss Limit dollar amount at this tier, e.g. "$1,000" */
  dll: string;
}

// ─── Display helpers ──────────────────────────────────────────────────────────

export const TIER_ACCOUNT_SIZES: TierAccountSize[] = ["25k", "50k", "100k", "150k"];

export const TIER_ACCOUNT_SIZE_LABELS: Record<TierAccountSize, string> = {
  "25k":  "25K",
  "50k":  "50K",
  "100k": "100K",
  "150k": "150K",
};

// ─── Tier table data ──────────────────────────────────────────────────────────
// Source: https://support.apextraderfunding.com/hc/en-us/articles/46729420990235-Scaling-Levels-PA-Explained
// Source: https://support.apextraderfunding.com/hc/en-us/articles/47257193113371-Daily-Loss-Limit-Explained
// Source: https://support.apextraderfunding.com/hc/en-us/articles/47204516592795-EOD-Performance-Accounts-PA
//
// TODO: Fill in exact values from the official Apex support pages above.
// The balanceRange, maxContracts, and dll values below are placeholders.
// Tier levels apply to both EOD PA and Intraday PA accounts.

export const TIER_TABLES: Record<TierAccountSize, TierRow[]> = {

  "25k": [
    { level: 1, balanceRange: "$25,000 – $25,999", maxContracts: 2,  dll: "$1,000" },
    { level: 2, balanceRange: "$26,000 – $26,999", maxContracts: 3,  dll: "$1,500" },
    { level: 3, balanceRange: "$27,000 – $27,999", maxContracts: 4,  dll: "$2,000" },
    { level: 4, balanceRange: "$28,000+",           maxContracts: 5,  dll: "$2,500" },
  ],

  "50k": [
    { level: 1, balanceRange: "$50,000 – $50,999", maxContracts: 4,  dll: "$2,000" },
    { level: 2, balanceRange: "$51,000 – $51,999", maxContracts: 6,  dll: "$3,000" },
    { level: 3, balanceRange: "$52,000 – $52,999", maxContracts: 8,  dll: "$4,000" },
    { level: 4, balanceRange: "$53,000+",           maxContracts: 10, dll: "$5,000" },
  ],

  "100k": [
    { level: 1, balanceRange: "$100,000 – $100,999", maxContracts: 8,  dll: "$4,000" },
    { level: 2, balanceRange: "$101,000 – $101,999", maxContracts: 10, dll: "$5,000" },
    { level: 3, balanceRange: "$102,000 – $102,999", maxContracts: 12, dll: "$6,000" },
    { level: 4, balanceRange: "$103,000+",            maxContracts: 14, dll: "$7,000" },
  ],

  "150k": [
    { level: 1, balanceRange: "$150,000 – $150,999", maxContracts: 12, dll: "$6,000" },
    { level: 2, balanceRange: "$151,000 – $151,999", maxContracts: 15, dll: "$7,500" },
    { level: 3, balanceRange: "$152,000 – $152,999", maxContracts: 18, dll: "$9,000" },
    { level: 4, balanceRange: "$153,000+",            maxContracts: 20, dll: "$10,000" },
  ],

};
