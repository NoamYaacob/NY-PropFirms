// ─── Types ────────────────────────────────────────────────────────────────────

export type TierAccountSize = "25k" | "50k" | "100k" | "150k";

export interface TierRow {
  /** Tier Level number, e.g. 1, 2, 3 */
  level: number;
  /** Profit range that qualifies for this tier, e.g. "$0 – $999" */
  profitRange: string;
  /** Maximum contracts allowed at this tier */
  maxContracts: number;
  /** Daily Loss Limit dollar amount at this tier, e.g. "$500" */
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
// Source: https://support.apextraderfunding.com/hc/en-us/articles/47257193113371-Daily-Loss-Limit-Explained
// Source: https://support.apextraderfunding.com/hc/en-us/articles/46729420990235-Scaling-Levels-PA-Explained
// Source: https://support.apextraderfunding.com/hc/en-us/articles/47204516592795-EOD-Performance-Accounts-PA
// Tier levels apply to both EOD PA and Intraday PA accounts.

export const TIER_TABLES: Record<TierAccountSize, TierRow[]> = {

  "25k": [
    { level: 1, profitRange: "$0 – $999",      maxContracts: 1, dll: "$500"   },
    { level: 2, profitRange: "$1,000 – $1,999", maxContracts: 2, dll: "$500"   },
    { level: 3, profitRange: "$2,000 ומעלה",   maxContracts: 2, dll: "$1,250" },
  ],

  "50k": [
    { level: 1, profitRange: "$0 – $1,499",     maxContracts: 2, dll: "$1,000" },
    { level: 2, profitRange: "$1,500 – $2,999", maxContracts: 3, dll: "$1,000" },
    { level: 3, profitRange: "$3,000 – $5,999", maxContracts: 4, dll: "$2,000" },
    { level: 4, profitRange: "$6,000 ומעלה",   maxContracts: 4, dll: "$3,000" },
  ],

  "100k": [
    { level: 1, profitRange: "$0 – $1,999",      maxContracts: 3,  dll: "$1,750" },
    { level: 2, profitRange: "$2,000 – $2,999",  maxContracts: 4,  dll: "$1,750" },
    { level: 3, profitRange: "$3,000 – $4,999",  maxContracts: 5,  dll: "$1,750" },
    { level: 4, profitRange: "$5,000 – $9,999",  maxContracts: 6,  dll: "$2,500" },
    { level: 5, profitRange: "$10,000 ומעלה",   maxContracts: 6,  dll: "$3,500" },
  ],

  "150k": [
    { level: 1, profitRange: "$0 – $1,999",      maxContracts: 4,  dll: "$2,500" },
    { level: 2, profitRange: "$2,000 – $2,999",  maxContracts: 5,  dll: "$2,500" },
    { level: 3, profitRange: "$3,000 – $4,999",  maxContracts: 7,  dll: "$2,500" },
    { level: 4, profitRange: "$5,000 – $9,999",  maxContracts: 10, dll: "$3,000" },
    { level: 5, profitRange: "$10,000 ומעלה",   maxContracts: 10, dll: "$4,000" },
  ],

};
