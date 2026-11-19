"use client";

import { useMemo, useState } from "react";

function formatDollars(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

/**
 * Tenths of a percent in integer space.
 * Math.round(ratio * 10000) snaps binary noise to the nearest 0.01%
 * before flooring or ceiling to 0.1%, so the shown tenth is not 0.1 off.
 */
function formatTenths(ratio: number, direction: "down" | "up"): string {
  const hundredths = Math.round(ratio * 10000);
  const tenths = direction === "down" ? Math.floor(hundredths / 10) : Math.ceil(hundredths / 10);
  return (tenths / 10).toFixed(1);
}

/** Same branches as the approved preview calculator, including the exactly-50% edge. */
export function consistencyMessage(totalRaw: string, biggestRaw: string): string {
  const total = parseFloat(totalRaw);
  const biggest = parseFloat(biggestRaw);
  if (!(total > 0) || !(biggest > 0)) {
    if (total <= 0 && totalRaw !== "") {
      return "No net profit since your last payout: consistency can't be calculated yet.";
    }
    return "Enter both numbers.";
  }
  const ratio = biggest / total;
  const percent = ratio * 100;
  const needed = biggest / 0.5;
  if (biggest > total) {
    return `Your biggest day is larger than your net profit (losing days reduced it). Consistency: ${percent.toFixed(0)}%. Not met. You need net profit above ${formatDollars(needed)}.`;
  }
  if (percent < 50) {
    const shown = formatTenths(ratio, "down");
    return `Consistency: ${shown}%. Below 50%: this rule is met (other payout rules still apply).`;
  }
  if (percent === 50) {
    return "Exactly 50%: treat this as not met. Apex's text says the biggest day must be less than 50%, but its example table marks exactly 50% as met. Trade on until you're below 50%.";
  }
  const shown = formatTenths(ratio, "up");
  return `Consistency: ${shown}%. Not met. You need net profit above ${formatDollars(needed)} (about ${formatDollars(needed - total)} more) without a bigger day.`;
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
            Net profit since last payout ($)
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
          Apex&apos;s formula: biggest day ÷ net profit = consistency %, and it must be below 50%. Equivalent: you need net profit of more than biggest day ÷ 0.5. Note: Apex&apos;s own example table marks exactly 50% as &quot;met&quot; while the text says &quot;below 50%&quot;, so aim to stay under 50%. This calculator is an unofficial helper; Apex&apos;s system decides.
        </p>
      </div>
    </section>
  );
}
