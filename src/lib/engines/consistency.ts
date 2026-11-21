/**
 * Tool 1: 50% Consistency Calculator (pure functions).
 * The middle band is this site's own no-verdict rule, not an Apex band. It handles the conflict in Apex's wording
 * of the exact-50% case. Never output coaching math ("you need $X more", "keep it under ...").
 */

export type ConsistencyBand = "below" | "at-line" | "above";

export type ConsistencyResult =
  | { kind: "prompt" }
  | { kind: "error"; message: string }
  | { kind: "na"; message: string }
  | { kind: "ok"; sharePct: number; display: string; band: ConsistencyBand };

export interface ConsistencyInput {
  /** Net profit since the last approved payout, losing days included, in dollars. */
  netProfit: number | null | undefined;
  /** Biggest single profitable day in that period, in dollars. */
  bestDay: number | null | undefined;
}

export const NA_NET_PROFIT = "N/A — positive net profit is required before consistency can be calculated; account stays active";

const toCents = (n: number) => Math.round(n * 100);

/** Share boundaries in integer arithmetic: share = best/net*100, compared as best*10000 vs net*N. */
export function bandForCents(netCents: number, bestCents: number): ConsistencyBand {
  const lhs = bestCents * 10000;
  if (lhs < netCents * 4995) return "below";
  if (lhs < netCents * 5005) return "at-line";
  return "above";
}

export function computeConsistency(input: ConsistencyInput): ConsistencyResult {
  const { netProfit, bestDay } = input;
  if (netProfit == null || bestDay == null || Number.isNaN(netProfit) || Number.isNaN(bestDay)) return { kind: "prompt" };
  if (!Number.isFinite(netProfit) || !Number.isFinite(bestDay)) return { kind: "error", message: "Enter finite dollar amounts." };
  if (bestDay < 0) return { kind: "error", message: "Enter a best day of $0 or more." };
  if (netProfit <= 0) return { kind: "na", message: NA_NET_PROFIT };
  const netCents = toCents(netProfit);
  const bestCents = toCents(bestDay);
  if (netCents <= 0) return { kind: "na", message: NA_NET_PROFIT };
  const sharePct = (bestCents / netCents) * 100;
  return { kind: "ok", sharePct, display: sharePct.toFixed(1), band: bandForCents(netCents, bestCents) };
}

export const CONSISTENCY_STATE_TEXT: Record<ConsistencyBand, string> = {
  below: "Below the 50% mark.",
  "at-line":
    "Best-day share: about 50%. This calculator gives no verdict in this range. Apex's own pages word the exact-50% case differently, so check Apex's 50% Consistency Requirement page.",
  above: "Above the 50% mark. Apex's payout request button is unavailable while the PA remains active.",
};
