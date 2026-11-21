/**
 * Tool 4: Contract Multiplier & Apex Cap Reference.
 * The arithmetic is N x points x CME $/point, nothing else. It never uses account drawdown or balance.
 * The Apex cap table is a separate reference and is never combined with the arithmetic.
 */
import { CME, EVAL, PA, type AccountType, type CmeSymbol, type Fact, type Size, usable } from "../../data/apex.ts";

export type ContractInput = { symbol: CmeSymbol; n: number; points: number };

export type NotionalResult =
  | { kind: "ok"; dollars: number; pointValue: number; line: string }
  | { kind: "error"; message: string }
  | { kind: "unavailable"; message: string };

export function formatUsd(value: number): string {
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  const fixed = Number.isInteger(abs) ? abs.toString() : abs.toFixed(2);
  const [int, dec] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${sign}$${grouped}${dec ? "." + dec : ""}`;
}

export function notionalMove(input: ContractInput, cme = CME): NotionalResult {
  const { symbol, n, points } = input;
  if (!cme[symbol]) return { kind: "error", message: "Contract not supported. NQ, MNQ, ES and MES only." };
  if (!Number.isInteger(n) || n < 0) return { kind: "error", message: "N must be a whole number of contracts (0 or more)." };
  if (!Number.isFinite(points)) return { kind: "error", message: "Enter the price move in points." };
  const pv = cme[symbol].pointValue;
  if (!usable(pv) || pv.value == null) return { kind: "unavailable", message: "CME point value not confirmed. See CME's contract page." };
  const dollars = n * points * pv.value;
  return {
    kind: "ok",
    dollars,
    pointValue: pv.value,
    line: `${n} × ${points} points on ${symbol} = ${formatUsd(dollars)} notional P&L move (CME arithmetic only; not trade or stop advice). It does not use account drawdown or balance.`,
  };
}

export type CapStage = "Evaluation" | "PA scaling tier";
export type CapLookup =
  | { kind: "ok"; cap: number; stage: CapStage; type: AccountType; size: Size; fact: Fact<number> }
  | { kind: "unavailable"; fact: Fact<number> };

/** Published Apex limit for a stage/type/size. Evaluation: fixed. PA: scaling ceiling (the account maximum), not a starting size. */
export function lookupCap(stage: CapStage, type: AccountType, size: Size): CapLookup {
  const fact = stage === "Evaluation" ? EVAL[type][size].maxContracts : PA[type][size].maxContractsCeiling;
  if (!usable(fact) || fact.value == null) return { kind: "unavailable", fact };
  return { kind: "ok", cap: fact.value, stage, type, size, fact };
}

/** Reference notice only. Never derives a recommended N. */
export function exceedsCap(n: number, lookup: CapLookup): string | null {
  if (lookup.kind !== "ok") return null;
  if (Number.isInteger(n) && n > lookup.cap) return "Exceeds published limit for the selected stage, type and size";
  return null;
}
