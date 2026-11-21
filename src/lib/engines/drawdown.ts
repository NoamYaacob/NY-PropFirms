/**
 * Tool 2: Drawdown Distance Calculator.
 * Estimates the distance, in dollars and in contract points, from a stated simulated balance to the published
 * trailing or end-of-day threshold. It is not a stop, a target or a position-size recommendation.
 * Only FILLED facts are used. When a lock rule is CONFLICT or the platform is unknown and the lock could matter,
 * no number is returned and the tool shows its fallback text.
 */
import { CME, EVAL, EVAL_LOCK_RITHMIC, EVAL_LOCK_TRADOVATE, EVAL_LOCK_TRIGGER_RITHMIC, PA, STARTING_BALANCE, type AccountType, type CmeSymbol, type Size, type Stage, usable } from "../../data/apex.ts";

export type Platform = "rithmic-wealthcharts" | "tradovate" | "unsure";

export interface DrawdownInput {
  stage: Stage;
  type: AccountType;
  size: Size;
  platform: Platform;
  symbol: CmeSymbol;
  /** EOD: highest end-of-day closing balance so far. Intraday: highest balance reached, realized or unrealized. */
  peakBalance: number | null | undefined;
  currentBalance: number | null | undefined;
}

export type DrawdownResult =
  | { kind: "prompt" }
  | { kind: "error"; message: string }
  | { kind: "breached"; threshold: number; message: string }
  | { kind: "needs-check"; message: string }
  | {
      kind: "ok";
      threshold: number;
      remainingDollars: number;
      points: number;
      pointValue: number;
      lockState: "Trailing" | "Locked";
      dll: DllRow;
      lockNote: string | null;
    };

export type DllRow = { kind: "none" } | { kind: "fixed"; amount: number } | { kind: "tiered" } | { kind: "unavailable" };

export const BREACH_TEXT = "Threshold breached. The evaluation fails or the PA closes under Apex's rules.";
/** Official fill sentence exists on the Intraday Evaluation article only. Never shown for EOD. */
export const INTRADAY_FILL_NOTE = " Liquidation happens at market price, so the final filled balance may be slightly above or below the threshold.";
export const LOCK_CHECK_TEXT = "Apex words this lock rule differently across its pages, or it depends on your platform. Check the lock rule on Apex's page for your account.";

function dllFor(stage: Stage, type: AccountType, size: Size): DllRow {
  if (stage === "Performance Account") {
    return usable(PA[type][size].scaling) ? { kind: "tiered" } : { kind: "unavailable" };
  }
  const f = EVAL[type][size].dll;
  if (!usable(f)) return { kind: "unavailable" };
  return f.value == null ? { kind: "none" } : { kind: "fixed", amount: f.value };
}

export function computeDrawdown(input: DrawdownInput): DrawdownResult {
  const { stage, type, size, platform, symbol, peakBalance, currentBalance } = input;
  if (peakBalance == null || currentBalance == null || Number.isNaN(peakBalance) || Number.isNaN(currentBalance)) return { kind: "prompt" };
  if (!Number.isFinite(peakBalance) || !Number.isFinite(currentBalance)) return { kind: "error", message: "Enter finite dollar amounts." };
  const start = STARTING_BALANCE[size];
  const mdd = stage === "Evaluation" ? EVAL[type][size].maxDrawdown : PA[type][size].maxDrawdown;
  if (!usable(mdd) || mdd.value == null) return { kind: "needs-check", message: LOCK_CHECK_TEXT };
  if (peakBalance < start) return { kind: "error", message: "Highest balance cannot be below the starting balance." };
  if (peakBalance < currentBalance) return { kind: "error", message: "Highest balance cannot be below the current balance." };
  const pv = CME[symbol].pointValue;
  if (!usable(pv) || pv.value == null) return { kind: "needs-check", message: "CME point value not confirmed." };

  const trailing = peakBalance - mdd.value;

  /* Resolve the lock level. A lock only matters once the stated peak reaches the lock trigger. */
  let lockLevel: number | null = null; // threshold stops trailing at this level
  let lockTrigger: number | null = null;
  let lockUnknown = false;
  let lockNote: string | null = null;
  if (stage === "Performance Account") {
    const lvl = PA[type][size].lockLevel;
    const trg = PA[type][size].lockTrigger;
    if (usable(lvl) && lvl.value != null && usable(trg) && trg.value != null) {
      lockLevel = lvl.value;
      lockTrigger = trg.value;
    } else lockUnknown = true;
  } else {
    const rith = EVAL_LOCK_RITHMIC[type][size];
    const rithTrig = EVAL_LOCK_TRIGGER_RITHMIC[type][size];
    const trad = EVAL_LOCK_TRADOVATE[type];
    if (platform === "tradovate") {
      if (usable(trad)) lockNote = "On Tradovate Evaluations the threshold trails with the peak and does not stop at a fixed level.";
      else lockUnknown = true;
    } else if (platform === "rithmic-wealthcharts") {
      if (usable(rith) && rith.value != null && usable(rithTrig) && rithTrig.value != null) {
        lockLevel = rith.value;
        lockTrigger = rithTrig.value;
      } else lockUnknown = true;
    } else {
      /* Platform unknown: a number is only safe while the peak is below every possible lock trigger. */
      if (usable(rith) && rith.value != null && usable(rithTrig) && rithTrig.value != null && usable(trad)) {
        lockLevel = rith.value;
        lockTrigger = rithTrig.value;
        lockNote = "Platform not selected. Check the platform on your account.";
      } else lockUnknown = true;
    }
  }

  /* The threshold stays below the starting balance until the peak reaches start + max drawdown. Any lock level sits above that. */
  if (lockUnknown && peakBalance >= start + mdd.value) return { kind: "needs-check", message: LOCK_CHECK_TEXT };
  if (platform === "unsure" && stage === "Evaluation" && lockTrigger != null && peakBalance >= lockTrigger) {
    return { kind: "needs-check", message: "Platform not selected. Rithmic / WealthCharts Evaluations lock the threshold at a fixed level and Tradovate Evaluations do not. Check the platform on your account." };
  }

  const locked = lockLevel != null && lockTrigger != null && peakBalance >= lockTrigger;
  const threshold = locked ? (lockLevel as number) : trailing;
  if (currentBalance <= threshold) return { kind: "breached", threshold, message: BREACH_TEXT + (type === "Intraday" && stage === "Evaluation" ? INTRADAY_FILL_NOTE : "") };
  const remainingDollars = currentBalance - threshold;
  return {
    kind: "ok",
    threshold,
    remainingDollars,
    points: remainingDollars / pv.value,
    pointValue: pv.value,
    lockState: locked ? "Locked" : "Trailing",
    dll: dllFor(stage, type, size),
    lockNote,
  };
}
