import test from "node:test";
import assert from "node:assert/strict";
import { SITE_DATA_RECORDS } from "../../data/apexRecords.ts";
import { SITES, ctxFor } from "./slotContext.ts";
import { listTokenSites } from "./slotEnumerate.ts";
import { KEY_LABELS, lineText, recordMatches, resolveSlot } from "./slotModel.ts";

const byId = new Map(SITE_DATA_RECORDS.map((r) => [r.id, r]));
const sites = listTokenSites();

test("every token site declares a context, and no declaration is stale", () => {
  for (const s of sites) assert.ok(ctxFor(s.page, s.token, s.line), `no context for ${s.page} ${s.token} | ${s.line.slice(0, 60)}`);
  for (const d of SITES) {
    const hit = sites.some((s) => s.page === d.page && s.token === d.token && (!d.line || s.line.includes(d.line)));
    assert.ok(hit, `stale context ${d.page} ${d.token} ${d.line ?? ""}`);
  }
});

function allowedNumbers(token: string, ctxMatch: (r: (typeof SITE_DATA_RECORDS)[number]) => boolean) {
  const keys = token.slice(1, -1).split(":")[1].split("|");
  const ok = new Set<string>();
  const bad = new Set<string>();
  for (const k of keys) {
    const base = k.slice(0, k.lastIndexOf("."));
    for (const r of SITE_DATA_RECORDS.filter((x) => x.key === k || x.key === base)) {
      const f = r.key === k ? undefined : k.slice(base.length + 1);
      let v: unknown = r.value;
      if (f && v && typeof v === "object") v = (v as Record<string, unknown>)[f];
      if (typeof v !== "number") continue;
      (ctxMatch(r) && r.status === "VERIFIED_SNAPSHOT" ? ok : bad).add(String(v));
    }
  }
  return { ok, bad };
}

test("rendered records match the declared context; values from other types, stages or sizes never appear", () => {
  for (const s of sites) {
    const ctx = ctxFor(s.page, s.token, s.line)!;
    const lines = resolveSlot(s.token, ctx);
    const where = `${s.page} ${s.token}`;
    for (const l of lines) {
      for (const id of l.recordIds) {
        const r = byId.get(id)!;
        assert.ok(recordMatches(r, ctx), `${where}: record ${id} (${r.applies_to.account_type}/${r.applies_to.stage}/${r.applies_to.size}) outside context ${JSON.stringify(ctx)}`);
        if (ctx.type === "EOD") assert.notEqual(r.applies_to.account_type, "Intraday", where);
        if (ctx.type === "Intraday") assert.notEqual(r.applies_to.account_type, "EOD", where);
        if (ctx.stage === "Eval") assert.notEqual(r.applies_to.stage, "PA", where);
        if (ctx.stage === "PA") assert.notEqual(r.applies_to.stage, "Eval", where);
        if (ctx.type === "na") assert.ok(["both", "n/a"].includes(r.applies_to.account_type), where);
      }
    }
    // numbers printed come from records in context only
    const { ok, bad } = allowedNumbers(s.token, (r) => recordMatches(r, ctx));
    const text = lines.map(lineText).join(" | ");
    const nums = [...text.matchAll(/\$?(\d[\d,]*)/g)].map((m) => m[1].replace(/,/g, ""));
    for (const n of nums) {
      if (bad.has(n) && !ok.has(n)) assert.fail(`${where}: shows ${n}, which only a record outside the context has`);
    }
    if (ctx.type === "EOD") assert.ok(!/Intraday/.test(lines.map((l) => l.label).join(" ")), `${where}: label names Intraday`);
    if (ctx.type === "Intraday") assert.ok(!/EOD/.test(lines.map((l) => l.label).join(" ")), `${where}: label names EOD`);
    if (ctx.stage === "Eval") assert.ok(!/PA/.test(lines.map((l) => l.label).join(" ")), `${where}: label names PA`);
    if (ctx.stage === "PA") assert.ok(!/Evaluation/.test(lines.map((l) => l.label).join(" ")), `${where}: label names Evaluation`);
  }
});

test("multi-record keys are labelled; multi-key tokens carry a noun label per key", () => {
  for (const s of sites) {
    const ctx = ctxFor(s.page, s.token, s.line)!;
    const lines = resolveSlot(s.token, ctx);
    const rendered = lines.filter((l) => l.recordIds.length);
    if (!rendered.length) continue;
    const groups = new Set(rendered.flatMap((l) => l.recordIds.map((id) => byId.get(id)!)).map((r) => `${r.applies_to.account_type}|${r.applies_to.stage}`));
    const eachCtx = ctx.type === "each" || ctx.stage === "each";
    const where = `${s.page} ${s.token}`;
    if (groups.size > 1 || eachCtx) {
      for (const l of rendered) {
        const r = byId.get(l.recordIds[0])!;
        // neutral keys (stage and type both/n/a) have nothing to label
        const typed = r.applies_to.account_type !== "both" && r.applies_to.account_type !== "n/a";
        const staged = r.applies_to.stage === "Eval" || r.applies_to.stage === "PA";
        if (typed || (staged && eachCtx)) assert.ok(l.label, `${where}: unlabelled line "${lineText(l)}"`);
      }
    }
    const keys = s.token.slice(1, -1).split(":")[1].split("|");
    if (keys.length > 1) {
      for (const k of keys) {
        if (/^pa\.inactivity/.test(k)) continue;
        assert.ok(KEY_LABELS[k], `${where}: key ${k} has no noun label`);
      }
      const verified = rendered.filter((l) => l.body && !l.body.startsWith("Apex's pages"));
      for (const l of verified) assert.ok(l.label || !/\$|\d/.test(l.body) || /(profit days|minimum net|window)/.test(l.body), `${where}: multi-key line without label: ${lineText(l)}`);
    }
  }
});

test("unverified records never print a number, a Source chip or 'checked'", () => {
  for (const s of sites) {
    const ctx = ctxFor(s.page, s.token, s.line)!;
    for (const l of resolveSlot(s.token, ctx)) {
      const recs = l.recordIds.map((id) => byId.get(id)!);
      const unverified = recs.length > 0 && recs.every((r) => r.status !== "VERIFIED_SNAPSHOT");
      if (unverified) {
        assert.ok(!l.chip && !/\d/.test(l.body), `${s.page} ${s.token}: unverified line has chip or number`);
        assert.ok(l.link, "unverified line needs the official link");
      }
      if (l.chip) {
        assert.ok(recs.every((r) => r.status === "VERIFIED_SNAPSHOT"), `${s.page} ${s.token}: chip on unverified`);
        assert.match(lineText(l), /checked [A-Z][a-z]{2} \d{1,2}, 2026/);
      }
    }
  }
});

test("CF F1/F2 spot checks", () => {
  const T = (page: string, token: string, line: string) => resolveSlot(token, ctxFor(page, token, line)!).map(lineText);
  // PA page: Intraday Evaluation DLL line shows only the Intraday Evaluation "none", never an EOD amount
  const dll = T("performance-account-rules", "{S12:eval.daily_loss_limit}", "**Daily Loss Limit:** Intraday Evaluation has none {S12:eval.daily_loss_limit}.");
  assert.equal(dll.length, 1);
  assert.ok(/none/.test(dll[0]) && !/\$/.test(dll[0]));
  // EOD column never shows Intraday values and vice versa
  const eodDd = T("evaluation-rules", "{S53:eval.daily_loss_limit}", "- A fixed Daily Loss Limit pauses the session when reached {S53:eval.daily_loss_limit}.");
  assert.ok(/\$500/.test(eodDd[0]) && !/none/.test(eodDd[0]));
  // Intraday PA lock is neutral text, not a number
  const lock = T("performance-account-rules", "{S11:pa.lock_threshold_level|pa.lock_trigger_balance}", "**Threshold lock:** {S11:pa.lock_threshold_level|pa.lock_trigger_balance}");
  assert.ok(lock.some((t) => /^Intraday PA: Apex's pages word this differently\. Official page$/.test(t)), lock.join("\n"));
  assert.ok(lock.some((t) => /EOD PA · Locks at: 25K \$25,100/.test(t)));
  assert.ok(lock.some((t) => /EOD PA · Lock applies once balance reaches: 25K \$26,100/.test(t)));
  // Tradovate line is not empty
  const tv = T("evaluation-rules", "{S55:eval.lock_rule.tradovate}", "- **Tradovate:** {S55:eval.lock_rule.tradovate}");
  assert.ok(tv.some((t) => t.includes("EOD Drawdown trails indefinitely with the peak EOD account balance.")));
  assert.ok(tv.some((t) => /^Intraday Evaluation: Apex's pages word this differently\. Official page$/.test(t)));
  // F2: pa.start_threshold is not an Apex worked example
  const st = T("performance-account-rules", "{S10:pa.start_threshold|pa.max_drawdown}", "- **EOD PA:** {S10:pa.start_threshold|pa.max_drawdown}").join(" ");
  assert.ok(st.includes("derived from Apex's official table)") && !st.includes("worked example"));
  const ev = T("evaluation-rules", "{S55:eval.lock_level.rithmic_wealthcharts|eval.lock_trigger_balance.rithmic_wealthcharts}", "x").join(" ");
  assert.ok(ev.includes("50K is Apex's worked example"));
  // all-CONFLICT tokens print the link only
  const pd = T("payout-rules", "{S22:pa.payout.post_request_denial}", "x");
  assert.ok(pd.every((t) => !t.includes("word this differently")) && pd.length >= 1);
  // one render per key per line
  assert.deepEqual(T("evaluation-rules", "{S04:eval.max_contracts_fixed}", "x"), []);
});
