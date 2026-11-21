/**
 * Pure resolver for {Sxx:key|key} tokens (no React). Slot.tsx renders the result; slotModel.test.ts and the generated report use it.
 * Rules (CEO + CF G1..G14, F1..F3):
 *  - a token site declares its context (slotContext.ts); only records whose applies_to matches it are ever rendered;
 *  - only VERIFIED_SNAPSHOT values are printed, each with "checked <date>" (the record's snapshot date); CONFLICT / NOT_FOUND
 *    print no number, no date and no "checked", only the official link (and, next to verified siblings, the neutral sentence);
 *  - G1: consistency rule / exact-50 / window-start never print RI's quote text, only the official link;
 *  - every printed line carries the type and stage unless the site already names exactly one of each;
 *    multi-key tokens carry a noun label per key; equal EOD/Intraday values with the same source merge into one labelled line.
 */
import { SITE_DATA_RECORDS, type SiteRecord } from "../../data/apexRecords.ts";
import { OFFICIAL_LINKS, SNAPSHOT_BODY_DATE, labelDate } from "../../data/apex.ts";
import type { SiteCtx } from "./slotContext.ts";

export interface SlotLine {
  label: string;
  body: string;
  derived?: string;
  chip?: { url: string; title?: string; date: string };
  link?: { href: string; text: string };
  links?: Array<{ href: string; text: string }>;
  recordIds: string[];
}

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
export const NEUTRAL = "Apex's pages word this differently.";

const KEY_LABEL: Record<string, string> = {
  "eval.start_threshold": "Starting threshold",
  "pa.start_threshold": "Starting threshold",
  "eval.max_drawdown": "Max drawdown",
  "pa.max_drawdown": "Max drawdown",
  "eval.lock_level.rithmic_wealthcharts": "Locks at",
  "pa.lock_threshold_level": "Locks at",
  "eval.lock_trigger_balance.rithmic_wealthcharts": "Lock applies once balance reaches",
  "pa.lock_trigger_balance": "Lock applies once balance reaches",
  "eval.lock_rule.tradovate": "Tradovate",
  "pa.payout.safety_net": "Safety Net",
  "pa.payout.min_balance_to_request": "Minimum balance to request",
  "pa.payout.min_payout_amount": "Minimum payout",
  "pa.payout.min_trading_days": "Qualifying days",
  "pa.payout.min_daily_profit": "Minimum daily profit",
  "eval.profit_target": "Profit target",
  "eval.daily_loss_limit": "Daily Loss Limit",
  "eval.max_contracts_fixed": "Max contracts (fixed)",
  "pa.max_contracts_ceiling": "Max contracts (ceiling)",
  "contracts.order_rejection_eval": "Order rejection",
  "contracts.order_rejection_pa": "Order rejection",
  "eval.pass_review_timing": "Pass review",
  "pa.activation_window_days": "PA activation window",
  "cme.NQ.point_value": "NQ",
  "cme.MNQ.point_value": "MNQ",
  "cme.ES.point_value": "ES",
  "cme.MES.point_value": "MES",
  "hours.flatten_before": "Flatten by",
  "hours.trading_resumes": "Trading resumes",
  "hours.trading_day_definition": "Trading day",
  "hours.holiday_dll_continuation": "Holiday Daily Loss Limit",
  "hours.holiday_trading_allowed": "Holiday trading",
  "rules.stop_losses_required": "Stops",
  "rules.no_hedging": "Hedging",
  "rules.no_automation": "Automation",
};
export const KEY_LABELS = KEY_LABEL;

function fmtNum(r: SiteRecord, v: number): string {
  if (r.key.startsWith("cme.") && r.key.endsWith("point_value")) return `${usd(v)}/point`;
  if (r.unit && r.unit.startsWith("USD")) return usd(v);
  if (r.unit === "calendar days" || r.key.endsWith("days")) return `${v} days`;
  return String(v);
}

function fieldPhrase(field: string, v: number): string | null {
  if (field === "min_days") return `${v} profit days`;
  if (field === "min_net_profit_per_day") return `${usd(v)} minimum net profit per day`;
  if (field === "window_days") return `${v}-day window`;
  return null;
}

function keyRecords(key: string): { recs: SiteRecord[]; field?: string } {
  const exact = SITE_DATA_RECORDS.filter((r) => r.key === key);
  if (exact.length) return { recs: exact };
  const i = key.lastIndexOf(".");
  if (i > 0) {
    const base = key.slice(0, i);
    const recs = SITE_DATA_RECORDS.filter((r) => r.key === base);
    if (recs.length) return { recs, field: key.slice(i + 1) };
  }
  return { recs: [] };
}

export function typeMatches(ctxType: SiteCtx["type"], recType: string): boolean {
  if (ctxType === "each") return true;
  if (ctxType === "na") return recType === "both" || recType === "n/a";
  return recType === ctxType || recType === "both" || recType === "n/a";
}
export function stageMatches(ctxStage: SiteCtx["stage"], recStage: string): boolean {
  if (ctxStage === "each") return true;
  if (ctxStage === "na") return recStage === "both" || recStage === "n/a";
  return recStage === ctxStage || recStage === "both" || recStage === "n/a";
}
export function recordMatches(r: SiteRecord, ctx: SiteCtx): boolean {
  const sizeOk = ctx.size === "all" || r.applies_to.size === "all" || r.applies_to.size === ctx.size || r.applies_to.size === "n/a";
  return typeMatches(ctx.type, r.applies_to.account_type) && stageMatches(ctx.stage, r.applies_to.stage) && sizeOk;
}

function groupName(r: SiteRecord): string {
  const t = r.applies_to.account_type;
  const s = r.applies_to.stage;
  if (t === "Legacy") return "Legacy PAs";
  if (r.key.startsWith("pa.inactivity.new")) return "New EOD and Intraday PAs";
  const stage = s === "Eval" ? "Evaluation" : s === "PA" ? "PA" : "";
  const type = t === "EOD" || t === "Intraday" ? t : "";
  return [type, stage].filter(Boolean).join(" ");
}

const date = (r: SiteRecord) => labelDate(r.checked_at);

interface Row {
  key: string;
  group: string;
  stage: string;
  type: string;
  verified: SiteRecord[];
  other: SiteRecord[];
}

function bodyFor(rows: SiteRecord[], field: string | undefined, ctx: SiteCtx): { body: string; derived?: string } {
  const bits: Array<{ size: string; text: string }> = [];
  let derived = false;
  let worked = false;
  for (const r of rows) {
    let v: unknown = r.value;
    if (field && v && typeof v === "object") v = (v as Record<string, unknown>)[field];
    const size = r.applies_to.size;
    if (r.value_type === "absent_by_rule") {
      bits.push({ size, text: "none (no Daily Loss Limit)" });
      continue;
    }
    if (v == null || typeof v === "object") continue;
    if (r.derived_from) {
      derived = true;
      if (r.derived_from.includes("official 50K")) worked = true;
    }
    let text: string;
    if (typeof v === "number") text = field ? fieldPhrase(field, v) ?? fmtNum(r, v) : fmtNum(r, v);
    else if (typeof v === "string" && v.length > 70) {
      if (r.key === "eval.lock_rule.tradovate" && typeof r.quote === "string") text = r.quote;
      else continue;
    } else text = String(v);
    bits.push({ size, text });
  }
  let out: string[];
  const sized = ctx.size === "all" && bits.length > 0 && bits.every((b) => b.size !== "all" && b.size !== "n/a");
  if (sized && bits.length > 1 && bits.every((b) => b.text === bits[0].text)) out = [`all sizes ${bits[0].text}`];
  else if (sized) out = bits.map((b) => `${b.size} ${b.text}`);
  else out = bits.map((b) => b.text);
  return {
    body: out.join(" · "),
    derived: derived ? (worked ? "(derived from Apex's official table; 50K is Apex's worked example)" : "(derived from Apex's official table)") : undefined,
  };
}

export function resolveSlot(raw: string, ctx: SiteCtx): SlotLine[] {
  if (ctx.dup) return [];
  const inner = raw.slice(1, -1);
  const m = /^(S\d+):(.+)$/.exec(inner);
  if (!m) return [];
  const keys = m[2].split("|");
  const out: SlotLine[] = [];
  const multi = keys.length > 1;
  const fullyScoped = ctx.type !== "each" && ctx.stage !== "each";

  // all keys unverified? collect first
  const perKey: Array<{ k: string; field?: string; recs: SiteRecord[] }> = [];
  for (const k of keys) {
    if (k === "rules.news_trading" || k === "sources.registry") continue;
    if (k.startsWith("pa.consistency.")) {
      out.push({ label: "", body: "", link: { href: OFFICIAL_LINKS.consistency, text: "Apex's 50% Consistency Requirement page" }, recordIds: [] });
      continue;
    }
    if (k === "meta.audit_date") {
      out.push({ label: "", body: labelDate(SNAPSHOT_BODY_DATE), recordIds: [] });
      continue;
    }
    const { recs, field } = keyRecords(k);
    perKey.push({ k, field, recs: recs.filter((r) => recordMatches(r, ctx)) });
  }

  for (const { k, field, recs } of perKey) {
    if (!recs.length) continue;
    if (k.startsWith("sources.tool_list")) {
      const r = recs[0];
      const list = (Array.isArray(r.value) ? r.value : []) as Array<{ url: string; title?: string }>;
      out.push({ label: "", body: "", links: list.map((x) => ({ href: x.url, text: x.title ?? "Apex page" })), recordIds: [r.id] });
      continue;
    }
    if (k === "dd.market_fill_caveat") {
      const r = recs.find((x) => x.status === "VERIFIED_SNAPSHOT");
      if (r) out.push({ label: "Intraday Evaluation", body: String(r.value), chip: { url: r.source_url, title: r.source_title, date: date(r) }, recordIds: [r.id] });
      continue;
    }
    // group by type|stage
    const groups = new Map<string, SiteRecord[]>();
    for (const r of recs) {
      const g = `${r.applies_to.account_type}|${r.applies_to.stage}`;
      groups.set(g, [...(groups.get(g) ?? []), r]);
    }
    const keyLabel = multi ? KEY_LABEL[k] ?? "" : "";
    const lines: Array<SlotLine & { gname: string; stage: string; merge: string }> = [];
    for (const [, list] of groups) {
      const verified = list.filter((r) => r.status === "VERIFIED_SNAPSHOT");
      const first = list[0];
      const gname = groupName(first);
      if (!verified.length) continue;
      const { body, derived } = bodyFor(verified, field, ctx);
      const r0 = verified[0];
      lines.push({
        label: "",
        body,
        derived,
        chip: { url: r0.source_url, title: r0.source_title, date: date(r0) },
        recordIds: verified.map((r) => r.id),
        gname,
        stage: first.applies_to.stage,
        merge: `${body}|${derived ?? ""}|${r0.source_url}`,
      });
    }
    // merge groups with the same text and source
    const merged: Array<SlotLine & { gname: string; stage: string; merge: string }> = [];
    for (const l of lines) {
      const hit = merged.find((x) => x.merge === l.merge && x.stage === l.stage && x.gname !== l.gname && /^(EOD|Intraday)/.test(x.gname) && /^(EOD|Intraday)/.test(l.gname));
      if (hit) {
        const st = l.gname.replace(/^(EOD|Intraday)\s*/, "");
        hit.gname = `EOD and Intraday${st ? " " + st : ""}`;
        hit.recordIds.push(...l.recordIds);
      } else merged.push({ ...l });
    }
    for (const l of merged) {
      const g = fullyScoped ? "" : l.gname;
      l.label = [g, keyLabel].filter(Boolean).join(" · ");
      out.push(l);
    }
    // unverified groups
    const unverified = [...groups.values()].filter((list) => !list.some((r) => r.status === "VERIFIED_SNAPSHOT"));
    const anyVerified = [...groups.values()].some((list) => list.some((r) => r.status === "VERIFIED_SNAPSHOT"));
    const seen = new Set<string>();
    const urls = new Map<string, string[]>();
    for (const list of unverified) {
      const u = list[0].source_url;
      urls.set(u, [...(urls.get(u) ?? []), groupName(list[0])]);
    }
    for (const list of unverified) {
      const u = list[0].source_url;
      if (seen.has(u)) continue;
      seen.add(u);
      const names = urls.get(u) ?? [];
      const gl = fullyScoped ? "" : names.length === 2 && names.every((n) => /^(EOD|Intraday)/.test(n)) ? `EOD and Intraday ${names[0].replace(/^(EOD|Intraday)\s*/, "")}`.trim() : names.join(" and ");
      const sentenceLine: SlotLine = {
        label: urls.size > 1 || anyVerified || multi ? gl : "",
        body: anyVerified ? NEUTRAL : "",
        link: { href: u, text: "Official page" },
        recordIds: list.map((r) => r.id),
      };
      if (!out.some((x) => x.link?.href === u && x.label === sentenceLine.label && x.body === sentenceLine.body)) out.push(sentenceLine);
    }
  }
  return out;
}

export function lineText(l: SlotLine): string {
  const parts = [l.label ? `${l.label}:` : "", l.body, l.derived ?? "", l.chip ? `Source · checked ${l.chip.date}` : "", l.link ? l.link.text : "", ...(l.links ?? []).map((x) => x.text)];
  return parts.filter(Boolean).join(" ");
}
