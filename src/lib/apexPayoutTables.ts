// ─── Affiliate helpers ────────────────────────────────────────────────────────

export function buildApexAffiliateUrl(path: string): string {
  return `https://apextraderfunding.com/member/aff/go/noamyaacob?page=${encodeURIComponent(path)}`;
}

export const APEX_TRADOVATE_SIGNUP = {
  "25k":  buildApexAffiliateUrl("/member/signup/25k-Tradovate"),
  "50k":  buildApexAffiliateUrl("/member/signup/50k-Tradovate"),
  "100k": buildApexAffiliateUrl("/member/signup/100k-Tradovate"),
  "150k": buildApexAffiliateUrl("/member/signup/150k-Tradovate"),
} as const;

/**
 * Set a key to true if that plan's Apex signup page is currently disabled.
 * The button stays visible but a caption is shown below the card.
 */
export const APEX_SIGNUP_DISABLED: Partial<Record<AccountSize, boolean>> = {
  // "100k": true,
};

// ─── Types ────────────────────────────────────────────────────────────────────

export type AccountSize = "25k" | "50k" | "100k" | "150k";
export type TabKey = "intraday" | "eod";

export interface PayoutTableData {
  minBalanceToRequest: string;
  minDailyProfit: string;
  minDaysTraded: number;
  minPayoutRequest: string;
  /** Index 0 = 1st payout … Index 5 = 6th payout */
  maxPayouts: [string, string, string, string, string, string];
  maxPayoutTotal20: string;
}

// ─── Display helpers ──────────────────────────────────────────────────────────

export const ACCOUNT_SIZES: AccountSize[] = ["25k", "50k", "100k", "150k"];

export const ACCOUNT_SIZE_LABELS: Record<AccountSize, string> = {
  "25k":  "25K",
  "50k":  "50K",
  "100k": "100K",
  "150k": "150K",
};

// ─── Payout table data (source: Apex Trader Funding official table) ───────────

export const PAYOUT_TABLES: Record<TabKey, Record<AccountSize, PayoutTableData>> = {

  // ── INTRADAY TRAILING DD ──────────────────────────────────────────────────
  intraday: {
    "25k": {
      minBalanceToRequest: "$26,600",
      minDailyProfit:      "$100",
      minDaysTraded:       5,
      minPayoutRequest:    "$500",
      maxPayouts:          ["$1,000", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
      maxPayoutTotal20:    "$120,000",
    },
    "50k": {
      minBalanceToRequest: "$52,600",
      minDailyProfit:      "$250",
      minDaysTraded:       5,
      minPayoutRequest:    "$500",
      maxPayouts:          ["$1,500", "$2,000", "$2,500", "$2,500", "$3,000", "$3,000"],
      maxPayoutTotal20:    "$290,000",
    },
    "100k": {
      minBalanceToRequest: "$103,600",
      minDailyProfit:      "$300",
      minDaysTraded:       5,
      minPayoutRequest:    "$500",
      maxPayouts:          ["$2,000", "$2,500", "$3,000", "$3,000", "$4,000", "$4,000"],
      maxPayoutTotal20:    "$370,000",
    },
    "150k": {
      minBalanceToRequest: "$154,600",
      minDailyProfit:      "$350",
      minDaysTraded:       5,
      minPayoutRequest:    "$500",
      maxPayouts:          ["$2,500", "$3,000", "$3,000", "$4,000", "$4,000", "$5,000"],
      maxPayoutTotal20:    "$410,000",
    },
  },

  // ── EOD ───────────────────────────────────────────────────────────────────
  eod: {
    "25k": {
      minBalanceToRequest: "$26,600",
      minDailyProfit:      "$100",
      minDaysTraded:       5,
      minPayoutRequest:    "$500",
      maxPayouts:          ["$1,000", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
      maxPayoutTotal20:    "$120,000",
    },
    "50k": {
      minBalanceToRequest: "$52,600",
      minDailyProfit:      "$250",
      minDaysTraded:       5,
      minPayoutRequest:    "$500",
      maxPayouts:          ["$1,500", "$1,500", "$2,000", "$2,500", "$2,500", "$3,000"],
      maxPayoutTotal20:    "$260,000",
    },
    "100k": {
      minBalanceToRequest: "$103,600",
      minDailyProfit:      "$300",
      minDaysTraded:       5,
      minPayoutRequest:    "$500",
      maxPayouts:          ["$2,000", "$2,500", "$2,500", "$3,000", "$4,000", "$4,000"],
      maxPayoutTotal20:    "$360,000",
    },
    "150k": {
      minBalanceToRequest: "$154,600",
      minDailyProfit:      "$350",
      minDaysTraded:       5,
      minPayoutRequest:    "$500",
      maxPayouts:          ["$2,500", "$3,000", "$3,000", "$3,000", "$4,000", "$5,000"],
      maxPayoutTotal20:    "$390,000",
    },
  },
};
