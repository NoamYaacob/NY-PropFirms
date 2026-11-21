/**
 * Tool 3: Payout Eligibility Checker (Performance Accounts only). Checklist only, no payout promise.
 * Only FILLED facts are compared. A CONFLICT fact (sequential caps, post-request denial) is reported as
 * "not computed" with the official link, never as a pass or a fail.
 */
import { PA, type AccountType, type Fact, type Size, usable } from "../../data/apex.ts";
import { computeConsistency, type ConsistencyResult } from "./consistency.ts";

export interface PayoutInput {
  type: AccountType;
  size: Size;
  balance: number | null | undefined;
  approvedPayouts: number | null | undefined;
  qualifyingDays: number | null | undefined;
  netProfit: number | null | undefined;
  bestDay: number | null | undefined;
  requestAmount: number | null | undefined;
}

export type CheckState = "meets" | "below" | "not-computed" | "info";
export interface CheckLine {
  id: "balance" | "days" | "cap" | "consistency" | "post-request";
  label: string;
  state: CheckState;
  detail: string;
}

export type PayoutResult =
  | { kind: "error"; message: string }
  | { kind: "closed"; message: string }
  | { kind: "ok"; lines: CheckLine[]; consistency: ConsistencyResult };

const NOT_COMPUTED = "Not computed here: Apex's pages word this differently. Check Apex's payout page.";

const money = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
const val = <T,>(f: Fact<T>): T | null => (usable(f) ? f.value : null);

export function computePayout(input: PayoutInput): PayoutResult {
  const { type, size } = input;
  const p = PA[type][size];
  const nums = [input.balance, input.approvedPayouts, input.qualifyingDays, input.requestAmount];
  if (nums.some((n) => n == null || Number.isNaN(n as number))) return { kind: "error", message: "Fill in balance, payouts received, qualifying days and the planned request." };
  const balance = input.balance as number;
  const approved = input.approvedPayouts as number;
  const days = input.qualifyingDays as number;
  const request = input.requestAmount as number;
  if (!Number.isInteger(approved) || approved < 0) return { kind: "error", message: "Approved payouts must be a whole number, 0 or more." };
  if (!Number.isInteger(days) || days < 0) return { kind: "error", message: "Qualifying days must be a whole number, 0 or more." };
  if (request < 0) return { kind: "error", message: "Planned request cannot be negative." };

  const maxPayouts = val(p.maxPayouts);
  if (maxPayouts != null && approved >= maxPayouts) {
    return { kind: "closed", message: `Apex states the PA closes after ${maxPayouts} payouts. Check Apex's payout page for what happens after the last one.` };
  }

  const lines: CheckLine[] = [];
  const safety = val(p.safetyNet);
  const minReq = val(p.minRequestBalance);
  const minPay = val(p.minPayout);
  if (safety != null && minReq != null && minPay != null) {
    const eligibleAbove = balance - safety;
    const okBalance = balance >= minReq;
    const okRequest = request >= minPay && request <= Math.max(0, eligibleAbove);
    lines.push({
      id: "balance",
      label: "Balance vs Safety Net and minimum request",
      state: okBalance && okRequest ? "meets" : "below",
      detail: `Safety Net ${money(safety)}; minimum balance to request ${money(minReq)}; minimum payout ${money(minPay)}. Only profit above the Safety Net can be requested (${money(Math.max(0, eligibleAbove))} here).`,
    });
  } else {
    lines.push({ id: "balance", label: "Balance vs Safety Net and minimum request", state: "not-computed", detail: NOT_COMPUTED });
  }

  const reqDays = val(p.qualifyingDays);
  const minDaily = val(p.minDailyProfit);
  if (reqDays != null && minDaily != null) {
    lines.push({
      id: "days",
      label: "Qualifying days",
      state: days >= reqDays ? "meets" : "below",
      detail: `${days} of ${reqDays} qualifying days (each at least ${money(minDaily)} profit). The days need not be consecutive.`,
    });
  } else {
    lines.push({ id: "days", label: "Qualifying days", state: "not-computed", detail: NOT_COMPUTED });
  }

  // Sequential caps are CONFLICT in the slot file. Never compared.
  const caps = val(p.payoutCaps);
  if (caps != null) {
    const cap = caps[approved];
    lines.push({
      id: "cap",
      label: `Sequential cap for payout #${approved + 1}`,
      state: cap == null ? "not-computed" : request <= cap ? "meets" : "below",
      detail: cap == null ? NOT_COMPUTED : `Published ceiling for payout #${approved + 1}: ${money(cap)}.`,
    });
  } else {
    lines.push({ id: "cap", label: `Sequential cap for payout #${approved + 1}`, state: "not-computed", detail: NOT_COMPUTED });
  }

  const consistency = computeConsistency({ netProfit: input.netProfit, bestDay: input.bestDay });
  let cState: CheckState = "not-computed";
  let cDetail = "Enter net profit and your biggest profitable day.";
  if (consistency.kind === "ok") {
    cState = consistency.band === "below" ? "meets" : consistency.band === "at-line" ? "info" : "below";
    cDetail = `Best-day share ${consistency.display}%. ${
      consistency.band === "at-line"
        ? "No verdict in this range (this site's own rule; Apex words the exact-50% case differently)."
        : consistency.band === "below"
          ? "Below the 50% mark."
          : "Above the 50% mark."
    }`;
  } else if (consistency.kind === "na") cDetail = consistency.message;
  else if (consistency.kind === "error") cDetail = consistency.message;
  lines.push({ id: "consistency", label: "50% Consistency gate", state: cState, detail: cDetail });

  lines.push({
    id: "post-request",
    label: "Balance after a request",
    state: "not-computed",
    detail: "Apex's wording on automatic denial after a request is not computed here. Check Apex's payout page before you trade after requesting.",
  });
  return { kind: "ok", lines, consistency };
}
