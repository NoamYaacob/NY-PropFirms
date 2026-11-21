import type { ReactNode } from "react";
import { SITE_DATA_RECORDS, type SiteRecord } from "@/data/apexRecords";
import { OFFICIAL_LINKS, SNAPSHOT_BODY_DATE, labelDate } from "@/data/apex";

/**
 * Resolves a {Sxx:key|key} token from the page copy against the RI data records.
 * Rules (CEO + CF G1..G14):
 *  - only VERIFIED_SNAPSHOT values are printed; CONFLICT and NOT_FOUND show the official link only, no number;
 *  - G1: consistency rule / exact-50 / window-start never print RI's quote text, only the official link;
 *  - dd.market_fill_caveat prints for the Intraday Evaluation only, labelled;
 *  - rules.news_trading is never used (Build Note 19);
 *  - derived values are labelled; 50K derived values are official worked examples;
 *  - every value carries a source link with the checked date.
 */

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const SIZES = ["25K", "50K", "100K", "150K"];
const HANDLING = "Apex's pages word this differently. Check Apex's page.";

function Src({ r }: { r: SiteRecord }) {
  return (
    <a className="ds-minisrc" href={r.source_url} target="_blank" rel="noopener noreferrer" title={r.source_title}>
      Source · {labelDate(r.checked_at).replace(/, \d{4}$/, "")}
    </a>
  );
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="ds-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function fmt(r: SiteRecord, v: unknown): string {
  if (typeof v === "number") return r.unit && r.unit.startsWith("USD") ? usd(v) : r.unit === "calendar days" || r.key.endsWith("days") ? `${v} days` : String(v);
  return String(v);
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

function SlotKey({ k }: { k: string }): ReactNode {
  if (k === "rules.news_trading") return null;
  if (k.startsWith("pa.consistency.")) {
    return <Link href={OFFICIAL_LINKS.consistency}>Apex&apos;s 50% Consistency Requirement page</Link>;
  }
  if (k === "sources.registry") return null;
  if (k === "meta.audit_date") return <>{labelDate(SNAPSHOT_BODY_DATE)}</>;
  const { recs, field } = keyRecords(k);
  if (!recs.length) return null;

  if (k === "dd.market_fill_caveat") {
    const r = recs.find((x) => x.applies_to.account_type === "both" && x.status === "VERIFIED_SNAPSHOT");
    return r ? (
      <span className="ds-slot">
        Intraday Evaluation: {String(r.value)} <Src r={r} />
      </span>
    ) : null;
  }
  if (k.startsWith("sources.tool_list")) {
    const r = recs[0];
    const list = (Array.isArray(r.value) ? r.value : []) as Array<{ url: string; title?: string }>;
    return (
      <span className="ds-slot">
        {list.map((x, i) => (
          <span key={x.url}>
            {i ? " · " : ""}
            <Link href={x.url}>{x.title ?? "Apex page"}</Link>
          </span>
        ))}
      </span>
    );
  }

  const parts: ReactNode[] = [];
  const first = recs[0];
  const verified = recs.filter((r) => r.status === "VERIFIED_SNAPSHOT");
  if (!verified.length) {
    // CONFLICT or NOT_FOUND: official link only, no number, no chosen side.
    return (
      <span className="ds-slot">
        {recs[0].status === "CONFLICT" ? HANDLING + " " : ""}
        <Link href={first.source_url}>Official page</Link>
      </span>
    );
  }

  // group verified numeric/size-specific records by account type
  const byType = new Map<string, SiteRecord[]>();
  for (const r of verified) {
    const t = r.applies_to.account_type;
    byType.set(t, [...(byType.get(t) ?? []), r]);
  }
  for (const [type, list] of byType) {
    const label = type === "both" || type === "n/a" ? "" : `${type}: `;
    const conflictSiblings = recs.some((r) => r.applies_to.account_type === type && r.status === "CONFLICT");
    if (conflictSiblings && !list.length) continue;
    const bits: string[] = [];
    let derived = false;
    for (const r of list) {
      let v: unknown = r.value;
      if (field && v && typeof v === "object") v = (v as Record<string, unknown>)[field];
      if (r.value_type === "absent_by_rule") {
        bits.push(r.applies_to.size !== "all" ? `${r.applies_to.size} none (no Daily Loss Limit)` : "none (no Daily Loss Limit)");
        continue;
      }
      if (v == null || typeof v === "object") continue;
      if (r.derived_from) derived = true;
      if (typeof v === "string" && v.length > 70) continue; // long RI paraphrases stay out; the page copy carries the meaning, the chip carries the source
      const text = typeof v === "number" ? (field?.includes("profit") || r.unit?.startsWith("USD") ? usd(v) : fmt(r, v)) : String(v);
      bits.push(r.applies_to.size !== "all" ? `${r.applies_to.size} ${text}` : text);
    }
    if (bits.length > 1 && list.every((r) => r.applies_to.size !== "all")) {
      const vals = bits.map((b) => b.slice(b.indexOf(" ") + 1));
      if (vals.every((x) => x === vals[0])) bits.splice(0, bits.length, `all sizes ${vals[0]}`);
    }
    if (!bits.length) continue;
    parts.push(
      <span key={type} className="ds-slot-line">
        {label}
        {bits.join(" · ")}
        {derived ? <em className="ds-slot-d"> (derived from Apex&apos;s official table; 50K is Apex&apos;s worked example)</em> : null} <Src r={list[0]} />
      </span>,
    );
  }
  if (!parts.length) {
    // object-valued records (tiers, caps, notices, examples): show the source chip, detailed tables render elsewhere
    return (
      <span className="ds-slot">
        <Src r={verified[0]} />
      </span>
    );
  }
  void SIZES;
  return <span className="ds-slot">{parts}</span>;
}

export function Slot({ raw }: { raw: string }) {
  const inner = raw.slice(1, -1);
  const m = /^(S\d+):(.+)$/.exec(inner);
  if (!m) return null;
  const keys = m[2].split("|");
  return (
    <>
      {keys.map((k, i) => (
        <SlotKey key={k + i} k={k} />
      ))}
    </>
  );
}
