/**
 * Tool 6: Trading-Style Path Picker. Maps four neutral mechanics questions to "EOD mechanics fit",
 * "Intraday mechanics fit" or "Mixed / Trade-Off View". Informational only. Never recommends buying anything.
 */

export type Swings = "hold" | "scalp" | "mixed";
export type DllPref = "eval-dll" | "no-eval-dll" | "none";
export type Partials = "partials" | "all-in-out";
export type PickerPlatform = "rithmic-wealthcharts" | "tradovate" | "unsure";

export interface PickerInput {
  swings: Swings | null;
  dll: DllPref | null;
  partials: Partials | null;
  platform: PickerPlatform | null;
}

export type PickerResult =
  | { kind: "prompt"; missing: string[] }
  | { kind: "result"; fit: "EOD mechanics fit" | "Intraday mechanics fit" | "Mixed / Trade-Off View"; reasons: string[]; platformNote: string };

export const HEADLINE = "Rule-Mechanics Fit Summary (Informational Comparison Only — Not a Recommendation to Buy)";

type Vote = "eod" | "intraday" | "split";

export function computePicker(input: PickerInput): PickerResult {
  const missing: string[] = [];
  if (!input.swings) missing.push("open-trade swings");
  if (!input.dll) missing.push("Evaluation Daily Loss Limit");
  if (!input.partials) missing.push("partial exits");
  if (missing.length) return { kind: "prompt", missing };

  const votes: Vote[] = [];
  const reasons: string[] = [];

  if (input.swings === "hold") {
    votes.push("eod");
    reasons.push("EOD drawdown is recalculated once per trading day from the closing balance, so open profit during the session does not move the EOD threshold. Intraday drawdown follows the highest balance, including unrealized profit.");
  } else if (input.swings === "scalp") {
    votes.push("intraday");
    reasons.push("Quick realized exits leave less open profit for the Intraday threshold to trail. Intraday drawdown follows the highest balance, including unrealized profit, and never decreases.");
  } else {
    votes.push("split");
    reasons.push("Mixed holding styles touch both mechanics: EOD moves only at the close, Intraday moves with the session peak.");
  }

  if (input.dll === "eval-dll") {
    votes.push("eod");
    reasons.push("The EOD Evaluation has a fixed Daily Loss Limit that pauses the session; the Intraday Evaluation has none. Performance Accounts of both types share a tiered DLL.");
  } else if (input.dll === "no-eval-dll") {
    votes.push("intraday");
    reasons.push("The Intraday Evaluation has no Daily Loss Limit, while the EOD Evaluation has a fixed one. Performance Accounts of both types share a tiered DLL.");
  }

  if (input.partials === "partials") {
    votes.push("eod");
    reasons.push("Keeping a runner open means unrealized profit sits on the account. Under Intraday rules that peak raises the threshold immediately; under EOD rules only the closing balance counts.");
  }

  const eod = votes.filter((v) => v === "eod").length;
  const intra = votes.filter((v) => v === "intraday").length;
  const split = votes.includes("split");
  let fit: "EOD mechanics fit" | "Intraday mechanics fit" | "Mixed / Trade-Off View";
  if (split || (eod > 0 && intra > 0) || (eod === 0 && intra === 0)) fit = "Mixed / Trade-Off View";
  else fit = eod > 0 ? "EOD mechanics fit" : "Intraday mechanics fit";
  if (fit === "Mixed / Trade-Off View") reasons.push("Your answers point both ways, so both rule sets are shown. Compare them on the EOD vs Intraday page.");

  let platformNote = "Platform not selected. Check the platform on your account.";
  if (input.platform === "tradovate") platformNote = "On Tradovate Evaluations the threshold trails indefinitely with the peak and does not stop at a fixed level.";
  else if (input.platform === "rithmic-wealthcharts") platformNote = "On Rithmic / WealthCharts Evaluations the threshold stops trailing at a fixed level. Check the exact level on Apex's page for your account.";
  else if (input.platform === "unsure") platformNote = "Not sure yet: Rithmic / WealthCharts Evaluations stop trailing at a fixed level, Tradovate Evaluations trail indefinitely. Check the platform on your account.";
  return { kind: "result", fit, reasons, platformNote };
}
