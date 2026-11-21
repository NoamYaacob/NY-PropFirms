/**
 * Tool 5: Account Comparison. Builds phase-separated rows from the data module.
 * Evaluation rows never contain PA figures and the reverse. Non-FILLED values are returned as unavailable.
 */
import { CME, EVAL, PA, type AccountType, type CmeSymbol, type Fact, type Size, usable } from "../../data/apex.ts";

export type Phase = "Evaluation" | "Performance Account";
export type Model = "EOD" | "Intraday";

export interface Cell {
  /** Display text, or null when the value is not FILLED (UI shows the fallback + official link). */
  text: string | null;
  src: string; /* official URL */
  /** Dollar amount when the figure is a dollar figure; used for the optional point converter. */
  dollars?: number;
}
export interface CompareRow {
  label: string;
  phase: Phase;
  cells: Partial<Record<Model, Cell>>;
}

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
function cellFrom<T>(f: Fact<T>, show: (v: T | null) => string, dollars?: (v: T) => number | undefined): Cell {
  if (!usable(f)) return { text: null, src: f.url };
  const d = f.value != null && dollars ? dollars(f.value) : undefined;
  return { text: show(f.value), src: f.url, dollars: d };
}

export function buildRows(phase: Phase, size: Size, models: Model[]): CompareRow[] {
  const rows: CompareRow[] = [];
  const add = (label: string, fn: (t: AccountType) => Cell) => {
    const cells: Partial<Record<Model, Cell>> = {};
    for (const m of models) cells[m] = fn(m);
    rows.push({ label, phase, cells });
  };
  if (phase === "Evaluation") {
    add("Profit Target", (t) => cellFrom(EVAL[t][size].profitTarget, (v) => usd(v as number), (v) => v));
    add("Max Drawdown", (t) => cellFrom(EVAL[t][size].maxDrawdown, (v) => usd(v as number), (v) => v));
    add("Daily Loss Limit", (t) => cellFrom(EVAL[t][size].dll, (v) => (v == null ? "N/A (no Evaluation DLL)" : usd(v)), (v) => v));
    add("Contract cap (fixed in the Evaluation)", (t) => cellFrom(EVAL[t][size].maxContracts, (v) => String(v)));
    add("Access period", (t) => cellFrom(EVAL[t][size].accessDays, (v) => `${v} calendar days`));
    add("Consistency", (t) => cellFrom(EVAL[t][size].consistency, () => "Not Applied in Evaluations"));
  } else {
    add("Max Drawdown (distance)", (t) => cellFrom(PA[t][size].maxDrawdown, (v) => usd(v as number), (v) => v));
    add("Contract cap (scaling ceiling)", (t) => cellFrom(PA[t][size].maxContractsCeiling, (v) => String(v)));
    add("Daily Loss Limit", (t) => cellFrom(PA[t][size].scaling, (v) => `Tiered: ${(v ?? []).map((x) => usd(x.dll)).join(" / ")}`));
    add("Qualifying days", (t) => cellFrom(PA[t][size].qualifyingDays, (v) => `${v} days`));
    add("Minimum daily profit", (t) => cellFrom(PA[t][size].minDailyProfit, (v) => usd(v as number), (v) => v));
    add("Safety Net", (t) => cellFrom(PA[t][size].safetyNet, (v) => usd(v as number)));
    add("Minimum balance to request", (t) => cellFrom(PA[t][size].minRequestBalance, (v) => usd(v as number)));
    add("Max payouts", (t) => cellFrom(PA[t][size].maxPayouts, (v) => String(v)));
    add("Sequential payout caps", (t) => cellFrom(PA[t][size].payoutCaps, (v) => (v ?? []).map(usd).join(" / ")));
  }
  return rows;
}

/** Optional CME point equivalent for a dollar figure. Labeled as a published rule, not a stop. */
export function dollarsToPoints(dollars: number, symbol: CmeSymbol): number | null {
  const pv = CME[symbol].pointValue;
  if (!usable(pv) || pv.value == null || pv.value === 0) return null;
  return dollars / pv.value;
}
