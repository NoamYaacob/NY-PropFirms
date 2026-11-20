"use client";

import { useMemo, useState } from "react";
import { SourceLink } from "./blocks";

/**
 * Best-day share, boundary-neutral (CF spec 2026-11-20).
 * share = biggest profitable day ÷ net profit since the last approved payout (or account start) × 100.
 * Snap to 0.01% in integer space, then display to 0.1% (round half up).
 * AT-LINE band: 49.95% <= share < 50.05% (snapped hundredths 4995–5004), i.e. every value that displays as "50.0%". No verdict there.
 */
export const AT_LINE_LOW_HUNDREDTHS = 4995;
export const AT_LINE_HIGH_HUNDREDTHS = 5004;

export function consistencyMessage(totalRaw: string, biggestRaw: string): string {
  const total = Number(totalRaw);
  const biggest = Number(biggestRaw);
  if (totalRaw.trim() === "" || biggestRaw.trim() === "" || !Number.isFinite(total) || !Number.isFinite(biggest)) {
    return "Enter both numbers.";
  }
  if (biggest <= 0) {
    return "Enter your biggest profitable day as an amount above $0.";
  }
  if (total <= 0) {
    return "Net profit since your last approved payout is $0 or below, so there is no best-day share to show yet. Losing days count: they are part of net profit.";
  }
  const hundredths = Math.round((biggest / total) * 10000);
  const shown = (Math.round(hundredths / 10) / 10).toFixed(1);
  if (hundredths >= AT_LINE_LOW_HUNDREDTHS && hundredths <= AT_LINE_HIGH_HUNDREDTHS) {
    return `Best-day share: ${shown}%. At the 50% line. Apex's pages describe this case differently; check Apex's 50% Consistency Requirement page.`;
  }
  if (hundredths > AT_LINE_HIGH_HUNDREDTHS) {
    const note = biggest > total ? " Your biggest day is larger than your net profit because losing days reduced it." : "";
    return `Best-day share: ${shown}%. Above the 50% reference: payout button likely hidden.${note}`;
  }
  return `Best-day share: ${shown}%. Below the 50% reference. Other payout rules still apply.`;
}

export function ConsistencyCalculator() {
  const [total, setTotal] = useState("");
  const [biggest, setBiggest] = useState("");
  const message = useMemo(() => consistencyMessage(total, biggest), [total, biggest]);

  return (
    <section id="calculator" className="card p-5 md:p-6 mb-5 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        50% consistency calculator
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>
          Enter your net profit since your last approved payout (or since the account started), after subtracting losing days, and your biggest single profitable day in that period.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-sm" style={{ color: "var(--text-muted)" }} htmlFor="tot">
            Net profit since last approved payout, losing days included ($)
            <input
              id="tot"
              type="number"
              inputMode="decimal"
              placeholder="e.g. 2400"
              value={total}
              onChange={(event) => setTotal(event.target.value)}
              className="mt-1 w-full rounded-lg px-3 py-2 text-base"
              style={{
                backgroundColor: "var(--surface-base)",
                border: "1px solid var(--surface-border-strong)",
                color: "var(--text-primary)",
              }}
            />
          </label>
          <label className="block text-sm" style={{ color: "var(--text-muted)" }} htmlFor="big">
            Biggest profitable day ($)
            <input
              id="big"
              type="number"
              inputMode="decimal"
              placeholder="e.g. 900"
              value={biggest}
              onChange={(event) => setBiggest(event.target.value)}
              className="mt-1 w-full rounded-lg px-3 py-2 text-base"
              style={{
                backgroundColor: "var(--surface-base)",
                border: "1px solid var(--surface-border-strong)",
                color: "var(--text-primary)",
              }}
            />
          </label>
        </div>
        <div className="font-semibold" id="out" aria-live="polite" style={{ color: "var(--text-primary)" }}>
          {message}
        </div>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Best-day share = biggest profitable day ÷ net profit since your last approved payout (or since the account started) × 100. Net profit includes losing days. Apex&apos;s pages describe the exactly-50% case differently, so this calculator gives no verdict at the 50% line (any share shown as 50.0%: 49.95% up to, not including, 50.05%). For exactly how the cutoff is applied, see <SourceLink id="consist">Apex&apos;s 50% Consistency Requirement page</SourceLink>. Unofficial helper, not advice; Apex&apos;s system decides. Apex Performance Accounts are simulated.
        </p>
      </div>
    </section>
  );
}
