import test from "node:test";
import assert from "node:assert/strict";
import { computeConsistency, bandForCents } from "../consistency.ts";
import { notionalMove, lookupCap, exceedsCap, formatUsd } from "../contract.ts";
import { computeDrawdown } from "../drawdown.ts";
import { computePayout } from "../payout.ts";
import { buildRows, dollarsToPoints } from "../comparison.ts";
import { computePicker } from "../pathpicker.ts";
import { EVAL, PA, CME, TEXT, fact, usable } from "../../../data/apex.ts";

/* ---------- data module ---------- */
test("data: eval figures match the official table", () => {
  assert.equal(EVAL.EOD["50K"].profitTarget.value, 3000);
  assert.equal(EVAL.EOD["150K"].maxContracts.value, 12);
  assert.equal(EVAL.Intraday["25K"].dll.value, null);
  assert.equal(EVAL.Intraday["25K"].dll.kind, "absent_by_rule");
  assert.ok(usable(EVAL.Intraday["25K"].dll));
  assert.equal(EVAL.EOD["100K"].dll.value, 1500);
});
test("data: every fact has a source url and checked date", () => {
  for (const t of ["EOD", "Intraday"] as const) for (const s of ["25K", "50K", "100K", "150K"] as const) {
    for (const f of [EVAL[t][s].profitTarget, EVAL[t][s].maxDrawdown, PA[t][s].safetyNet, PA[t][s].payoutCaps]) {
      assert.match(f.url, /^https:\/\/apextraderfunding\.com\//);
      assert.ok(f.checkedAt);
    }
  }
});
test("data: conflicts and not-found are not usable", () => {
  assert.equal(usable(PA.Intraday["50K"].lockLevel), false);
  assert.equal(usable(PA.EOD["50K"].lockLevel), true);
  assert.equal(usable(TEXT.thanksgivingFlatten), false);
  assert.equal(usable(TEXT.newsBlackout), false);
  assert.equal(usable(TEXT.exact50), false);
  assert.equal(usable(CME.NQ.pointValue), true);
  assert.equal(CME.ES.pointValue.value, 50);
  assert.equal(fact("no.such.key", null, null, null).status, "NOT_FOUND");
});
test("data: derived values carry a label basis", () => {
  assert.ok(PA.EOD["25K"].lockLevel.derived);
});

/* ---------- Tool 1 ---------- */
test("consistency: states and boundaries", () => {
  assert.equal(computeConsistency({ netProfit: 1000, bestDay: 400 }).kind, "ok");
  const r = (n: number, b: number) => computeConsistency({ netProfit: n, bestDay: b });
  const band = (n: number, b: number) => { const x = r(n, b); return x.kind === "ok" ? x.band : x.kind; };
  assert.equal(band(1000, 499.4), "below");
  assert.equal(band(1000, 499.5), "at-line"); // exactly 49.95
  assert.equal(band(1000, 500), "at-line");
  assert.equal(band(1000, 500.4), "at-line");
  assert.equal(band(1000, 500.5), "above"); // exactly 50.05
  assert.equal(band(1000, 900), "above");
});
test("consistency: edge cases", () => {
  assert.equal(computeConsistency({ netProfit: 0, bestDay: 100 }).kind, "na");
  assert.equal(computeConsistency({ netProfit: -50, bestDay: 100 }).kind, "na");
  assert.equal(computeConsistency({ netProfit: 1000, bestDay: -1 }).kind, "error");
  assert.equal(computeConsistency({ netProfit: null, bestDay: 5 }).kind, "prompt");
  assert.equal(computeConsistency({ netProfit: NaN, bestDay: 5 }).kind, "prompt");
  const over = computeConsistency({ netProfit: 800, bestDay: 1000 });
  assert.ok(over.kind === "ok" && over.display === "125.0" && over.band === "above");
  assert.equal(bandForCents(100000, 50000), "at-line");
});

/* ---------- Tool 4 ---------- */
test("contract: N x points x CME $/pt", () => {
  const r = notionalMove({ symbol: "NQ", n: 2, points: 10 });
  assert.ok(r.kind === "ok" && r.dollars === 400);
  const m = notionalMove({ symbol: "MES", n: 3, points: 4 });
  assert.ok(m.kind === "ok" && m.dollars === 60);
  assert.ok(m.kind === "ok" && /does not use account drawdown or balance/.test(m.line) && !/stop distance|risk/.test(m.line.replace("not trade or stop advice", "")));
  assert.equal(notionalMove({ symbol: "ES", n: 1.5, points: 1 }).kind, "error");
  assert.equal(notionalMove({ symbol: "ES", n: 1, points: NaN }).kind, "error");
  assert.equal(notionalMove({ symbol: "YM" as never, n: 1, points: 1 }).kind, "error");
  assert.equal(formatUsd(1234567), "$1,234,567");
});
test("contract: cap table is separate and only reference", () => {
  const cap = lookupCap("Evaluation", "Intraday", "150K");
  assert.ok(cap.kind === "ok" && cap.cap === 12);
  const pa = lookupCap("PA scaling tier", "EOD", "150K");
  assert.ok(pa.kind === "ok" && pa.cap === 10);
  assert.match(exceedsCap(13, cap) ?? "", /Exceeds published contract limit/);
  assert.equal(exceedsCap(12, cap), null);
});

/* ---------- Tool 2 ---------- */
const base = { stage: "Evaluation" as const, type: "EOD" as const, size: "50K" as const, platform: "rithmic-wealthcharts" as const, symbol: "NQ" as const };
test("drawdown: EOD eval trailing and the official 50K start", () => {
  const r = computeDrawdown({ ...base, peakBalance: 50000, currentBalance: 50000 });
  assert.ok(r.kind === "ok");
  if (r.kind === "ok") { assert.equal(r.threshold, 48000); assert.equal(r.remainingDollars, 2000); assert.equal(r.points, 100); assert.equal(r.lockState, "Trailing"); assert.equal(r.dll.kind, "fixed"); }
});
test("drawdown: official 50K example peaks 50,900 -> 48,900", () => {
  const r = computeDrawdown({ ...base, type: "Intraday", platform: "rithmic-wealthcharts", peakBalance: 50900, currentBalance: 50900 });
  assert.ok(r.kind === "ok");
  if (r.kind === "ok") { assert.equal(r.threshold, 48900); assert.equal(r.dll.kind, "none"); }
});
test("drawdown: PA EOD lock at start + 100", () => {
  const r = computeDrawdown({ ...base, stage: "Performance Account", peakBalance: 53000, currentBalance: 53000 });
  assert.ok(r.kind === "ok");
  if (r.kind === "ok") { assert.equal(r.threshold, 50100); assert.equal(r.lockState, "Locked"); assert.equal(r.dll.kind, "tiered"); }
});
test("drawdown: Intraday PA lock is CONFLICT, no number once the lock could apply", () => {
  const r = computeDrawdown({ ...base, type: "Intraday", stage: "Performance Account", peakBalance: 53000, currentBalance: 53000 });
  assert.equal(r.kind, "needs-check");
  const low = computeDrawdown({ ...base, type: "Intraday", stage: "Performance Account", peakBalance: 50500, currentBalance: 50500 });
  assert.equal(low.kind, "ok"); // threshold below start: no lock possible
});
test("drawdown: Intraday Evaluation locks are CONFLICT", () => {
  const r = computeDrawdown({ ...base, type: "Intraday", peakBalance: 56000, currentBalance: 56000 });
  assert.equal(r.kind, "needs-check");
  const t = computeDrawdown({ ...base, type: "Intraday", platform: "tradovate", peakBalance: 56000, currentBalance: 56000 });
  assert.equal(t.kind, "needs-check");
});
test("drawdown: EOD Eval platforms", () => {
  const rith = computeDrawdown({ ...base, peakBalance: 56000, currentBalance: 56000 });
  assert.ok(rith.kind === "ok");
  if (rith.kind === "ok") { assert.equal(rith.threshold, 53000); assert.equal(rith.lockState, "Locked"); }
  const trad = computeDrawdown({ ...base, platform: "tradovate", peakBalance: 56000, currentBalance: 56000 });
  assert.ok(trad.kind === "ok");
  if (trad.kind === "ok") assert.equal(trad.threshold, 54000);
  assert.equal(computeDrawdown({ ...base, platform: "unsure", peakBalance: 56000, currentBalance: 56000 }).kind, "needs-check");
  assert.equal(computeDrawdown({ ...base, platform: "unsure", peakBalance: 51000, currentBalance: 51000 }).kind, "ok");
});
test("drawdown: validation and breach", () => {
  assert.equal(computeDrawdown({ ...base, peakBalance: undefined, currentBalance: 1 }).kind, "prompt");
  assert.equal(computeDrawdown({ ...base, peakBalance: 49000, currentBalance: 49000 }).kind, "error");
  assert.equal(computeDrawdown({ ...base, peakBalance: 50000, currentBalance: 51000 }).kind, "error");
  assert.equal(computeDrawdown({ ...base, peakBalance: 52000, currentBalance: 50000 }).kind, "breached");
});

/* ---------- Tool 3 ---------- */
const pay = { type: "EOD" as const, size: "50K" as const, balance: 53000, approvedPayouts: 0, qualifyingDays: 5, netProfit: 3000, bestDay: 900, requestAmount: 800 };
test("payout: checklist meets", () => {
  const r = computePayout(pay);
  assert.ok(r.kind === "ok");
  if (r.kind === "ok") {
    const by = Object.fromEntries(r.lines.map((l) => [l.id, l.state]));
    assert.equal(by.balance, "meets"); assert.equal(by.days, "meets"); assert.equal(by.cap, "meets"); assert.equal(by.consistency, "meets");
    assert.equal(by["post-request"], "not-computed");
  }
});
test("payout: below thresholds and caps", () => {
  const r = computePayout({ ...pay, balance: 52300, qualifyingDays: 3, requestAmount: 2000 });
  assert.ok(r.kind === "ok");
  if (r.kind === "ok") { const by = Object.fromEntries(r.lines.map((l) => [l.id, l.state])); assert.equal(by.balance, "below"); assert.equal(by.days, "below"); assert.equal(by.cap, "below"); }
});
test("payout: max payouts, validation, at-line", () => {
  assert.equal(computePayout({ ...pay, approvedPayouts: 6 }).kind, "closed");
  assert.equal(computePayout({ ...pay, qualifyingDays: 2.5 }).kind, "error");
  assert.equal(computePayout({ ...pay, balance: null }).kind, "error");
  const r = computePayout({ ...pay, netProfit: 1000, bestDay: 500 });
  assert.ok(r.kind === "ok");
  if (r.kind === "ok") assert.equal(r.lines.find((l) => l.id === "consistency")?.state, "info");
});

/* ---------- Tool 5 ---------- */
test("comparison: phases are never mixed", () => {
  const ev = buildRows("Evaluation", "50K", ["EOD", "Intraday"]);
  assert.ok(ev.every((r) => r.phase === "Evaluation"));
  assert.equal(ev.find((r) => r.label === "Daily Loss Limit")?.cells.Intraday?.text, "N/A (no Evaluation DLL)");
  assert.equal(ev.find((r) => r.label === "Profit Target")?.cells.EOD?.text, "$3,000");
  const pa = buildRows("Performance Account", "50K", ["EOD"]);
  assert.ok(pa.every((r) => r.phase === "Performance Account"));
  assert.ok(!pa.some((r) => r.label === "Profit Target"));
  assert.equal(dollarsToPoints(2000, "NQ"), 100);
});

/* ---------- Tool 6 ---------- */
test("pathpicker: fits and mixed", () => {
  const p = (s: never, d: never, pa: never) => computePicker({ swings: s, dll: d, partials: pa, platform: null } as never);
  assert.equal(computePicker({ swings: null, dll: "eval-dll", partials: "partials", platform: null }).kind, "prompt");
  const eod = p("hold" as never, "eval-dll" as never, "partials" as never);
  assert.ok(eod.kind === "result" && eod.fit === "EOD mechanics fit");
  const intra = p("scalp" as never, "no-eval-dll" as never, "all-in-out" as never);
  assert.ok(intra.kind === "result" && intra.fit === "Intraday mechanics fit");
  const mix = p("scalp" as never, "eval-dll" as never, "all-in-out" as never);
  assert.ok(mix.kind === "result" && mix.fit === "Mixed / Trade-Off View");
  const unsure = computePicker({ swings: "hold", dll: "none", partials: "all-in-out", platform: "unsure" });
  assert.ok(unsure.kind === "result" && /Check the platform/.test(unsure.platformNote));
});
