import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { parseBody, parseFrontMatter, findTokens, parseToken } from "./parse.ts";
import { SITE_DATA_RECORDS } from "../../data/apexRecords.ts";

const dir = new URL("../../../content/pages/", import.meta.url);
const files = readdirSync(dir).filter((f) => f.endsWith(".md"));

test("12 page files parse; build-note comments never reach blocks", () => {
  assert.equal(files.length, 12);
  for (const f of files) {
    const { meta, body } = parseFrontMatter(readFileSync(new URL(f, dir), "utf8"));
    assert.ok(meta.title && meta.meta && meta.route, f);
    const blocks = parseBody(body);
    assert.ok(blocks.length > 3, f);
    assert.ok(!JSON.stringify(blocks).includes("<!--"), f);
  }
});

test("every {Sxx:key} token resolves to a data record (or a parent object field)", () => {
  const keys = new Set(SITE_DATA_RECORDS.map((r) => r.key));
  for (const f of files) {
    const raw = readFileSync(new URL(f, dir), "utf8").replace(/<!--[\s\S]*?-->/g, "");
    for (const t of findTokens(raw)) {
      const p = parseToken(t);
      if ("special" in p) continue;
      for (const k of p.keys) {
        const parent = k.slice(0, k.lastIndexOf("."));
        assert.ok(keys.has(k) || keys.has(parent), `${f}: ${t}`);
      }
    }
  }
});

test("CTA clusters collapse to cta blocks with the plan ids", () => {
  const ids: Record<string, string> = { home: "en_mid_cta", "apex-rules": "en_rules_hub_cta", faq: "en_faq_box", "payout-rules": "en_payout_rules_cta" };
  for (const [f, id] of Object.entries(ids)) {
    const { body } = parseFrontMatter(readFileSync(new URL(`${f}.md`, dir), "utf8"));
    const cta = parseBody(body).filter((b) => b.t === "cta");
    assert.deepEqual(cta.map((c) => (c.t === "cta" ? c.ctaId : "")), [id], f);
  }
});

test("about has no copy control and no CTA", () => {
  const { body } = parseFrontMatter(readFileSync(new URL("about.md", dir), "utf8"));
  assert.ok(!parseBody(body).some((b) => b.t === "cta"));
  assert.ok(!/Copy code/.test(body.replace(/<!--[\s\S]*?-->/g, "")));
});
