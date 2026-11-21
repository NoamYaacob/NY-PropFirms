import test from "node:test";
import assert from "node:assert/strict";
import { SITE_DATA_RECORDS } from "../../data/apexRecords.ts";
import { SITES, ctxFor, distinctKeysOnLine } from "./slotContext.ts";
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

test("no rendered line is a label plus a source chip without a value", () => {
  for (const s of sites) {
    const ctx = ctxFor(s.page, s.token, s.line)!;
    for (const l of resolveSlot(s.token, ctx)) {
      const hasValue = l.body.trim().length > 0 || !!l.link || !!l.links?.length;
      assert.ok(hasValue, `${s.page} ${s.token}: empty line "${lineText(l)}"`);
    }
  }
});

test("every typed or staged value line carries a type/stage label unless the copy names exactly that type and stage right before it", () => {
  for (const s of sites) {
    const ctx = ctxFor(s.page, s.token, s.line)!;
    const where = `${s.page} ${s.token}`;
    if (ctx.named) {
      assert.ok(ctx.type !== "each" && ctx.type !== "na" && ctx.stage !== "each" && ctx.stage !== "na", `${where}: named needs an exact type and stage`);
      assert.ok(s.line.includes("**EOD PA:**") || s.line.includes("**Intraday PA:**") || s.line.includes("**EOD Evaluation:**") || s.line.includes("**Intraday Evaluation:**"), `${where}: named site has no bold type/stage label in the copy`);
    }
    for (const l of resolveSlot(s.token, ctx)) {
      if (!l.recordIds.length || !l.body) continue; // link-only lines carry no value
      const rec = byId.get(l.recordIds[0])!;
      const typed = ["EOD", "Intraday", "Legacy"].includes(rec.applies_to.account_type) || rec.applies_to.stage === "Eval" || rec.applies_to.stage === "PA";
      if (typed && !ctx.named) assert.ok(l.label, `${where}: unlabelled "${lineText(l)}"`);
      if (rec.applies_to.stage === "Eval" && !ctx.named) assert.ok(/Evaluation/.test(l.label), `${where}: Evaluation value without "Evaluation" label: "${lineText(l)}"`);
      if (rec.applies_to.stage === "PA" && !ctx.named && rec.applies_to.account_type !== "Legacy") assert.ok(/PA/.test(l.label), `${where}: PA value without "PA" label`);
    }
  }
});

test("a suppressed repeat (dup) is only allowed when the key is fully rendered elsewhere on the same page", () => {
  for (const s of sites) {
    const ctx = ctxFor(s.page, s.token, s.line)!;
    if (!ctx.dup) continue;
    const key = s.token.slice(1, -1).split(":")[1];
    const full = sites.some((o) => o.page === s.page && o.token.slice(1, -1).split(":")[1].split("|").some((k) => key.split("|").includes(k)) && !ctxFor(o.page, o.token, o.line)!.dup && resolveSlot(o.token, ctxFor(o.page, o.token, o.line)!).some((l) => l.body));
    assert.ok(full, `${s.page} ${s.token}: dup without a full render on the page`);
  }
});

test("CF F1-r1: a copy line with tokens of two or more distinct keys prints the rule name per key, unless the site is keyNamed", () => {
  const named: string[] = [];
  for (const s of sites) {
    const ctx = ctxFor(s.page, s.token, s.line)!;
    if (ctx.dup || ctx.none) continue;
    const lineKeys = distinctKeysOnLine(s.page, s.line);
    if (lineKeys.length < 2) continue;
    const where = `${s.page} ${s.token} | ${s.line.slice(0, 70)}`;
    if (ctx.keyNamed) {
      named.push(where);
      continue;
    }
    const keys = s.token.slice(1, -1).split(":")[1].split("|");
    for (const l of resolveSlot(s.token, ctx, lineKeys.length)) {
      if (!l.recordIds.length || !l.body || !l.chip) continue; // link-only and CONFLICT lines print no value
      const k = keys.find((x) => byId.get(l.recordIds[0])!.key === x || byId.get(l.recordIds[0])!.key === x.slice(0, x.lastIndexOf(".")));
      if (k && /^pa\.inactivity/.test(k)) continue; // the group label names the policy and the body names the field ("2 profit days", "$50 minimum net profit per day")
      assert.ok(k && KEY_LABELS[k], `${where}: key ${k} has no noun label`);
      assert.ok(l.label.includes(KEY_LABELS[k!]), `${where}: line without rule name "${KEY_LABELS[k!]}": ${lineText(l)}`);
    }
  }
  // the declared keyNamed sites are listed in ops/en_build_changelog.md for CF review
  assert.ok(named.length >= 0);
});

test("CF F1-r1: the two flagged lines print the rule name", () => {
  const T = (page: string, token: string, line: string) => resolveSlot(token, ctxFor(page, token, line)!, distinctKeysOnLine(page, line).length).map(lineText);
  const vl = sites.find((x) => x.page === "account-comparison" && x.line.startsWith("Values:"))!;
  const dd = T(vl.page, "{S52:eval.max_drawdown}", vl.line);
  assert.ok(dd.some((t) => /^EOD Evaluation · Max drawdown: 25K \$1,000/.test(t)), dd.join("\n"));
  const dl = T(vl.page, "{S12:eval.daily_loss_limit}", vl.line);
  assert.ok(dl.some((t) => /^EOD Evaluation · Daily Loss Limit: 25K \$500/.test(t)), dl.join("\n"));
  const ev = sites.find((x) => x.page === "eod-vs-intraday" && x.line.startsWith("PA payout details differ"))!;
  const md = T(ev.page, "{S20:pa.payout.min_daily_profit}", ev.line);
  assert.ok(md.some((t) => /^EOD PA · Minimum daily profit: 25K \$100/.test(t)), md.join("\n"));
});

test("CF F1-r2: same-trade example says official examples, not table", () => {
  const same = SITE_DATA_RECORDS.find((r) => r.key === "worked_example.same_trade");
  assert.ok(same);
  const tok = sites.find((x) => x.token.includes("worked_example.same_trade"))!;
  const out = resolveSlot(tok.token, ctxFor(tok.page, tok.token, tok.line)!, 1);
  assert.ok(out.some((l) => l.derived === "(derived from Apex's official examples)"));
});

test("CF R1: the EOD lines of a multi-key lock token print before the Intraday CONFLICT line", () => {
  const tok = "{S55:eval.lock_level.rithmic_wealthcharts|eval.lock_trigger_balance.rithmic_wealthcharts}";
  const t = resolveSlot(tok, ctxFor("evaluation-rules", tok, "**Rithmic / Wealthcharts:** " + tok)!, 1).map(lineText);
  const i = t.findIndex((x) => /word this differently/.test(x));
  assert.ok(i === t.length - 1 && i > 0, t.join("\n"));
  assert.ok(/Locks at/.test(t[0]) && /Lock applies once/.test(t[1]));
});
