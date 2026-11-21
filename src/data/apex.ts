/**
 * Single data module for the English site and its calculators.
 * Mirrors research/site_data/apex_site_data_2026-11-21.json (RI), loaded through the generated apexRecords.ts.
 * Rule: only VERIFIED_SNAPSHOT facts may feed a calculation or a displayed number. CONFLICT and NOT_FOUND facts
 * are never computed; the UI shows the official link and the tool's fallback text instead.
 * Every fact carries its source URL and the date it was checked, so every rendered value can show a source chip.
 * No prices live here. Prices render only from src/data/prices.gated.json (output of validate_prices.py --gate).
 */
import { SITE_DATA_RECORDS, type SiteRecord } from "./apexRecords.ts";

export type Status = "VERIFIED_SNAPSHOT" | "CONFLICT" | "NOT_FOUND";
export type Size = "25K" | "50K" | "100K" | "150K";
export type AccountType = "EOD" | "Intraday";
export type Stage = "Evaluation" | "Performance Account";
export type CmeSymbol = "NQ" | "MNQ" | "ES" | "MES";

export const SIZES: readonly Size[] = ["25K", "50K", "100K", "150K"];
export const ACCOUNT_TYPES: readonly AccountType[] = ["EOD", "Intraday"];
export const CME_SYMBOLS: readonly CmeSymbol[] = ["NQ", "MNQ", "ES", "MES"];
export const STARTING_BALANCE: Record<Size, number> = { "25K": 25000, "50K": 50000, "100K": 100000, "150K": 150000 };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function labelDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
const metaDate = (key: string, fallback: string): string => {
  const r = SITE_DATA_RECORDS.find((x) => x.key === key);
  return typeof r?.value === "string" ? r.value : fallback;
};
/** CEO decision: "re-checked" stamps use meta.snapshot_body_date (the stricter date), not the audit date. */
export const SNAPSHOT_BODY_DATE = metaDate("meta.snapshot_body_date", "2026-11-19");
export const DATA_CHECKED_LABEL = labelDate(SNAPSHOT_BODY_DATE);
export const CME_CHECKED_LABEL = "Nov 21, 2026";

export interface Fact<T> {
  status: Status;
  /** null with kind "absent_by_rule" means Apex says it does not exist (for example no Intraday Evaluation DLL). */
  value: T | null;
  kind: string;
  url: string;
  title: string;
  modified: string;
  checkedAt: string;
  /** Set when the number is arithmetic on official table values. Render it as "derived from Apex's official table". */
  derived?: string;
  quote?: string | string[];
  note?: string;
  conflictId?: string;
}

/** Facts usable in a calculation or a displayed figure. */
export function usable<T>(f: Fact<T>): boolean {
  return f.status === "VERIFIED_SNAPSHOT";
}

const MISSING: Fact<never> = { status: "NOT_FOUND", value: null, kind: "null", url: "https://apextraderfunding.com/help-center/", title: "Apex Help Center", modified: "", checkedAt: "" };

function toFact<T>(r: SiteRecord): Fact<T> {
  return {
    status: r.status,
    value: r.status === "VERIFIED_SNAPSHOT" && r.value_type !== "absent_by_rule" ? ((r.value ?? null) as T | null) : r.status === "VERIFIED_SNAPSHOT" ? null : ((r.value ?? null) as T | null),
    kind: r.value_type,
    url: r.source_url,
    title: r.source_title ?? "Apex Help Center",
    modified: r.source_modified ?? "",
    checkedAt: r.checked_at,
    derived: r.derived_from,
    quote: r.quote,
    note: r.note,
    conflictId: r.conflict_id,
  };
}

const stageKey = (s: Stage) => (s === "Evaluation" ? "Eval" : "PA");

/** Look up one record by key and scope. "both" and "all" in the data match any value. */
export function fact<T>(key: string, type: AccountType | null, stage: Stage | null, size: Size | null): Fact<T> {
  const hit = SITE_DATA_RECORDS.find((r) => {
    if (r.key !== key) return false;
    const a = r.applies_to;
    if (type && a.account_type !== "both" && a.account_type !== type) return false;
    if (stage && a.stage !== "both" && a.stage !== stageKey(stage)) return false;
    if (size && a.size !== "all" && a.size !== size) return false;
    return true;
  });
  return hit ? toFact<T>(hit) : (MISSING as Fact<T>);
}

export interface EvalParams {
  profitTarget: Fact<number>;
  maxDrawdown: Fact<number>;
  /** Daily Loss Limit. VERIFIED + null (kind absent_by_rule) = Apex states there is none (Intraday Evaluation). */
  dll: Fact<number>;
  maxContracts: Fact<number>;
  accessDays: Fact<number>;
  startThreshold: Fact<number>;
}

export interface ScalingTier {
  tier: number;
  minProfit: number;
  maxProfit: number | null;
  maxContracts: number;
  dll: number;
}

export interface PaParams {
  scaling: Fact<ScalingTier[]>;
  level1Contracts: Fact<number>;
  maxContractsCeiling: Fact<number>;
  maxDrawdown: Fact<number>;
  startThreshold: Fact<number>;
  safetyNet: Fact<number>;
  minRequestBalance: Fact<number>;
  minPayout: Fact<number>;
  qualifyingDays: Fact<number>;
  minDailyProfit: Fact<number>;
  payoutCaps: Fact<number[]>;
  maxPayouts: Fact<number>;
  /** Level at which the PA threshold stops trailing. Intraday PA is CONFLICT (C6). Derived from the official table. */
  lockLevel: Fact<number>;
  lockTrigger: Fact<number>;
}

function scalingFact(type: AccountType, size: Size): Fact<ScalingTier[]> {
  const f = fact<Array<{ level: number; profit_from: number; profit_to: number | null; max_contracts: number; dll: number }>>("pa.scaling_tiers", type, "Performance Account", size);
  return {
    ...f,
    value: f.value ? f.value.map((t) => ({ tier: t.level, minProfit: t.profit_from, maxProfit: t.profit_to ?? null, maxContracts: t.max_contracts, dll: t.dll })) : null,
  };
}

function build<T>(fn: (type: AccountType, size: Size) => T): Record<AccountType, Record<Size, T>> {
  const out = {} as Record<AccountType, Record<Size, T>>;
  for (const t of ACCOUNT_TYPES) {
    out[t] = {} as Record<Size, T>;
    for (const s of SIZES) out[t][s] = fn(t, s);
  }
  return out;
}

export const EVAL: Record<AccountType, Record<Size, EvalParams>> = build((t, s) => ({
  profitTarget: fact("eval.profit_target", t, "Evaluation", s),
  maxDrawdown: fact("eval.max_drawdown", t, "Evaluation", s),
  dll: fact("eval.daily_loss_limit", t, "Evaluation", s),
  maxContracts: fact("eval.max_contracts_fixed", t, "Evaluation", s),
  accessDays: fact("eval.access_period_days", t, "Evaluation", s),
  startThreshold: fact("eval.start_threshold", t, "Evaluation", s),
}));

export const PA: Record<AccountType, Record<Size, PaParams>> = build((t, s) => ({
  scaling: scalingFact(t, s),
  level1Contracts: fact("pa.level1_contracts", t, "Performance Account", s),
  maxContractsCeiling: fact("pa.max_contracts_ceiling", t, "Performance Account", s),
  maxDrawdown: fact("pa.max_drawdown", t, "Performance Account", s),
  startThreshold: fact("pa.start_threshold", t, "Performance Account", s),
  safetyNet: fact("pa.payout.safety_net", t, "Performance Account", s),
  minRequestBalance: fact("pa.payout.min_balance_to_request", t, "Performance Account", s),
  minPayout: fact("pa.payout.min_payout_amount", t, "Performance Account", s),
  qualifyingDays: fact("pa.payout.min_trading_days", t, "Performance Account", s),
  minDailyProfit: fact("pa.payout.min_daily_profit", t, "Performance Account", s),
  payoutCaps: fact("pa.payout.sequential_caps", t, "Performance Account", s),
  maxPayouts: fact("pa.payout.max_payouts", t, "Performance Account", s),
  lockLevel: fact("pa.lock_threshold_level", t, "Performance Account", s),
  lockTrigger: fact("pa.lock_trigger_balance", t, "Performance Account", s),
}));

/**
 * Evaluation threshold lock on Rithmic / WealthCharts (derived from the official table: starting balance + profit target).
 * Intraday Evaluation is CONFLICT (C4). Tradovate Evaluations trail indefinitely (EOD verified, Intraday CONFLICT).
 */
export const EVAL_LOCK_RITHMIC: Record<AccountType, Record<Size, Fact<number>>> = build((t, s) => fact("eval.lock_level.rithmic_wealthcharts", t, "Evaluation", s));
export const EVAL_LOCK_TRIGGER_RITHMIC: Record<AccountType, Record<Size, Fact<number>>> = build((t, s) => fact("eval.lock_trigger_balance.rithmic_wealthcharts", t, "Evaluation", s));
export const EVAL_LOCK_TRADOVATE: Record<AccountType, Fact<string>> = {
  EOD: fact("eval.lock_rule.tradovate", "EOD", "Evaluation", null),
  Intraday: fact("eval.lock_rule.tradovate", "Intraday", "Evaluation", null),
};
export const DD_MECHANICS: Record<AccountType, Fact<string>> = {
  EOD: fact("dd.mechanics", "EOD", null, null),
  Intraday: fact("dd.mechanics", "Intraday", null, null),
};

export const CME: Record<CmeSymbol, { pointValue: Fact<number>; tickSize: Fact<number>; url: string; label: string }> = (() => {
  const labels: Record<CmeSymbol, string> = { NQ: "E-mini Nasdaq-100", MNQ: "Micro E-mini Nasdaq-100", ES: "E-mini S&P 500", MES: "Micro E-mini S&P 500" };
  const pick = (sym: CmeSymbol, field: string): Fact<number> => {
    const r = SITE_DATA_RECORDS.find((x) => x.key === `cme.${sym}.${field}`);
    return r ? toFact<number>(r) : (MISSING as Fact<number>);
  };
  const out = {} as Record<CmeSymbol, { pointValue: Fact<number>; tickSize: Fact<number>; url: string; label: string }>;
  for (const s of CME_SYMBOLS) {
    const pv = pick(s, "point_value");
    out[s] = { pointValue: pv, tickSize: pick(s, "tick_size"), url: pv.url, label: labels[s] };
  }
  return out;
})();

/** Plain-text facts (hours, holidays, prohibited activities, inactivity). Display only after a status check. */
export const TEXT = {
  flattenBefore: fact<string>("hours.flatten_before", null, null, null),
  tradingResumes: fact<string>("hours.trading_resumes", null, null, null),
  tradingDay: fact<string>("hours.trading_day_definition", null, null, null),
  holidayAllowed: fact<string>("hours.holiday_trading_allowed", null, null, null),
  holidayDll: fact<string>("hours.holiday_dll_continuation", null, null, null),
  thanksgivingFlatten: fact<string>("hours.thanksgiving_2026_flatten_time", null, null, null),
  newsBlackout: fact<string>("rules.news_day_blackout_calendar", null, null, null),
  newsTrading: fact<string>("rules.news_trading", null, null, null),
  noAutomation: fact<string>("rules.no_automation", null, null, null),
  noHedging: fact<string>("rules.no_hedging", null, null, null),
  stopLosses: fact<string>("rules.stop_losses_required", null, null, null),
  notAStop: fact<string>("rules.trailing_threshold_not_a_stop", null, null, null),
  activationDays: fact<number>("pa.activation_window_days", null, null, null),
  inactivityNew: fact<{ min_days: number; min_net_profit_per_day: number; window_days: number }>("pa.inactivity.new", null, null, null),
  inactivityLegacy: fact<{ min_days: number; min_net_profit_per_day: number; window_days: number }>("pa.inactivity.legacy_pre_2026_03_01", null, null, null),
  paHousehold: fact<number>("pa.max_active_pa_household", null, null, null),
  closureAfterMax: fact<string>("pa.payout.closure_after_max", "EOD", null, null),
  postRequestDenial: fact<string>("pa.payout.post_request_denial", "EOD", null, null),
  consistencyRule: fact<string>("pa.consistency.rule", null, null, null),
  exact50: fact<string>("pa.consistency.exact_50_case", null, null, null),
  microRatio: fact<string>("contracts.micro_equivalency", null, null, null),
  /** Intraday Evaluation article only. Never show it as an EOD quote. */
  marketFillIntraday: fact<string>("dd.market_fill_caveat", "Intraday", "Evaluation", null),
  /** NOT_FOUND: no claim about payout eligibility of Evaluations beyond what Apex's PA payout pages state. */
  evaluationsNotEligible: fact<string>("payout.evaluations_not_eligible", null, "Evaluation", null),
  paOnlyEod: fact<string>("payout.pa_only_applicability", "EOD", "Performance Account", null),
  paOnlyIntraday: fact<string>("payout.pa_only_applicability", "Intraday", "Performance Account", null),
  passReview: fact<string>("eval.pass_review_timing", null, "Evaluation", null),
};

/** 50K official worked examples; the same-trade comparison is DERIVED and must be labelled so. */
export const WORKED = {
  eod: fact<Record<string, unknown>>("worked_example.eod_walkthrough", "EOD", null, "50K"),
  intraday: fact<Record<string, unknown>>("worked_example.intraday_realtime", "Intraday", null, "50K"),
  sameTrade: fact<Record<string, unknown>>("worked_example.same_trade", null, null, "50K"),
};

/** The 50% line and the site's own no-verdict band (CEO decision, 21 Nov 2026). Not an Apex band. */
export const CONSISTENCY = {
  line: 50,
  noVerdictLow: 49.95,
  noVerdictHigh: 50.05,
  url: "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
} as const;

/** Official pages linked directly (never /go/apex) from tools and rule pages. */
export const OFFICIAL_LINKS = {
  prohibited: "https://apextraderfunding.com/help-center/getting-started/prohibited-activities/",
  hours: "https://apextraderfunding.com/help-center/getting-started/futures-trading-times/",
  holidays: "https://apextraderfunding.com/help-center/helpful-items/holiday-trading/",
  eodEval: "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
  intradayEval: "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
  eodDrawdown: "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
  intradayDrawdown: "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
  eodPa: "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
  intradayPa: "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
  eodPayouts: "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
  intradayPayouts: "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
  scaling: "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
  positionSizing: "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
  dll: "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
  consistency: "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
  activation: "https://apextraderfunding.com/help-center/billing/pa-activation-process-deadline-explained/",
  inactivity: "https://apextraderfunding.com/help-center/billing/inactivity-policy-on-performance-accounts-pa/",
  legacyInactivity: "https://apextraderfunding.com/help-center/performance-accounts-pa/legacy-pa-inactivity-policy/",
  paLimit: "https://apextraderfunding.com/help-center/performance-accounts-pa/how-many-paid-funded-accounts-am-i-allowed-to-have/",
  helpCenter: "https://apextraderfunding.com/help-center/",
  statusUpdates: "https://apextraderfunding.com/help-center/helpful-items/status-updates/",
  cmeHolidays: "https://www.cmegroup.com/trading-hours.html",
} as const;

export interface SourceRow {
  url: string;
  title: string;
  modified: string;
  checkedAt: string;
  publisher: "Apex" | "CME Group";
  records: number;
}

/** Registry for /sources: the RI sources.registry record (29 URLs). */
export const SOURCE_REGISTRY: SourceRow[] = (() => {
  const rec = SITE_DATA_RECORDS.find((r) => r.key === "sources.registry");
  const list = (Array.isArray(rec?.value) ? rec.value : []) as Array<{ url: string; title: string; source_modified?: string; checked_at: string; publisher?: string }>;
  return list.map((x) => ({
    url: x.url,
    title: x.title,
    modified: x.source_modified ?? "",
    checkedAt: x.checked_at,
    publisher: (x.url.includes("cmegroup.com") ? "CME Group" : "Apex") as "Apex" | "CME Group",
    records: 0,
  }));
})();

/** "Derived from Apex's official table" label, or the official-example label for the 50K worked examples. */
export function derivedLabel(f: Fact<unknown>, size?: Size | null): string | null {
  if (!f.derived) return null;
  if (size === "50K") return "Official worked example (50K)";
  return "Derived from Apex's official table";
}

export function checkedLabel(f: Fact<unknown>): string {
  const d = f.checkedAt;
  if (!d) return "";
  const [y, m, day] = d.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[m - 1]} ${day}, ${y}`;
}
