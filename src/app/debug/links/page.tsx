"use client";

import { useState } from "react";
import { S } from "@/lib/sources";

// ─── Link registry ─────────────────────────────────────────────────────────
// Manually kept in sync with any direct href="https://..." in the codebase.

interface LinkEntry {
  key: string;
  label: string;
  url: string;
  usedIn: string;
}

const SOURCE_LINKS: LinkEntry[] = [
  { key: "EVALUATION_FEES",      label: S.EVALUATION_FEES.title,      url: S.EVALUATION_FEES.href,      usedIn: "/apex/eod, /apex/intraday — שכר הערכה" },
  { key: "EOD_EVALUATIONS",      label: S.EOD_EVALUATIONS.title,      url: S.EOD_EVALUATIONS.href,      usedIn: "/apex/eod — EOD evaluation rules" },
  { key: "INTRADAY_EVALUATIONS", label: S.INTRADAY_EVALUATIONS.title, url: S.INTRADAY_EVALUATIONS.href, usedIn: "/apex/intraday — Intraday evaluation rules" },
  { key: "DAILY_LOSS_LIMIT",     label: S.DAILY_LOSS_LIMIT.title,     url: S.DAILY_LOSS_LIMIT.href,     usedIn: "/apex/eod (eval DLL callout), /apex/intraday (eval callout), /apex/payouts (DLL accordion link)" },
  { key: "EOD_PA",               label: S.EOD_PA.title,               url: S.EOD_PA.href,               usedIn: "/apex/eod — EOD PA DLL tier-based explainer" },
  { key: "INTRADAY_PA",          label: S.INTRADAY_PA.title,          url: S.INTRADAY_PA.href,          usedIn: "/apex/intraday — Intraday PA DLL tier-based explainer" },
  { key: "PAYOUT_RULES",         label: S.PAYOUT_RULES.title,         url: S.PAYOUT_RULES.href,         usedIn: "/apex/eod, /apex/intraday, /apex/payouts — Payout rules" },
  { key: "CONSISTENCY_50",       label: S.CONSISTENCY_50.title,       url: S.CONSISTENCY_50.href,       usedIn: "/apex/payouts — Consistency 50% rule" },
  { key: "SAFETY_NET",           label: S.SAFETY_NET.title,           url: S.SAFETY_NET.href,           usedIn: "/apex/payouts — Safety Net rule" },
  { key: "EOD_PAYOUTS",          label: S.EOD_PAYOUTS.title,          url: S.EOD_PAYOUTS.href,          usedIn: "/apex/payouts — EOD payout table source" },
  { key: "INTRADAY_PAYOUTS",     label: S.INTRADAY_PAYOUTS.title,     url: S.INTRADAY_PAYOUTS.href,     usedIn: "/apex/payouts — Intraday payout table source" },
  { key: "CONTRACT_SCALING",     label: S.CONTRACT_SCALING.title,     url: S.CONTRACT_SCALING.href,     usedIn: "/apex/compliance — Contract Scaling RuleCard" },
  { key: "PROHIBITED",           label: S.PROHIBITED.title,           url: S.PROHIBITED.href,           usedIn: "/apex/compliance — MAC/IP, Trade Copying, HFT, Hedging cards" },
  { key: "CLOSE_459",            label: S.CLOSE_459.title,            url: S.CLOSE_459.href,            usedIn: "/apex/compliance — 4:59 PM ET CalloutBox" },
];

const DIRECT_LINKS: LinkEntry[] = [
  { key: "APEX_URL",      label: "Apex Trader Funding — main site", url: "https://apextraderfunding.com",        usedIn: "Multiple pages — CTA buttons, StickyMobileCTABar" },
  { key: "SUPPORT_ROOT",  label: "Apex Support Center — root",     url: "https://support.apextraderfunding.com", usedIn: "DisclaimerBlock (full), /faq, /about" },
];

const ALL_LINKS = [...SOURCE_LINKS, ...DIRECT_LINKS];

// ─── Copy button ─────────────────────────────────────────────────────────────

function CopyButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="px-2.5 py-1 text-xs font-medium rounded-md transition-colors"
      style={{
        backgroundColor: copied ? "var(--green-900)" : "var(--surface-overlay)",
        color: copied ? "var(--green-400)" : "var(--text-muted)",
        border: `1px solid ${copied ? "var(--green-edge)" : "var(--surface-border)"}`,
        minWidth: "64px",
      }}
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

// ─── Row ──────────────────────────────────────────────────────────────────────

function LinkRow({ entry, index }: { entry: LinkEntry; index: number }) {
  return (
    <tr
      style={{
        backgroundColor: index % 2 !== 0 ? "var(--surface-overlay)" : "transparent",
        borderBottom: "1px solid var(--surface-border)",
      }}
    >
      {/* Key */}
      <td className="px-4 py-3 text-xs font-mono whitespace-nowrap" style={{ color: "var(--gold-300)", minWidth: "180px" }}>
        {entry.key}
      </td>
      {/* Label */}
      <td className="px-4 py-3 text-xs" style={{ color: "var(--text-secondary)", minWidth: "260px" }}>
        {entry.label}
      </td>
      {/* Used in */}
      <td className="px-4 py-3 text-xs" style={{ color: "var(--text-muted)", minWidth: "280px" }}>
        {entry.usedIn}
      </td>
      {/* Actions */}
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-xs font-medium rounded-md transition-colors hover:underline"
            style={{
              backgroundColor: "var(--teal-900)",
              color: "var(--teal-400)",
              border: "1px solid var(--teal-edge)",
            }}
          >
            Open ↗
          </a>
          <CopyButton url={entry.url} />
        </div>
      </td>
    </tr>
  );
}

// ─── Table ────────────────────────────────────────────────────────────────────

function LinkTable({ links, title }: { links: LinkEntry[]; title: string }) {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--text-muted)" }}>
        {title} <span style={{ color: "var(--text-muted)", opacity: 0.6 }}>({links.length})</span>
      </h2>
      <div
        className="overflow-x-auto rounded-xl"
        style={{ border: "1px solid var(--surface-border)" }}
      >
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: "var(--surface-overlay)", borderBottom: "1px solid var(--surface-border-strong)" }}>
              <th className="text-left px-4 py-2.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>Key</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>Article / Label</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>Used in</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {links.map((entry, i) => (
              <LinkRow key={entry.key} entry={entry} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DebugLinksPage() {
  return (
    <div className="container-page py-12">
      <div className="mb-8">
        <p className="text-xs font-mono mb-1" style={{ color: "var(--text-muted)" }}>
          /debug/links — not linked in nav
        </p>
        <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
          External Link Registry
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {ALL_LINKS.length} unique external URLs — sources.ts entries + direct hrefs. Use "Open ↗" to verify each link manually.
        </p>
      </div>

      <LinkTable links={SOURCE_LINKS} title="SourceBadge sources (sources.ts)" />
      <LinkTable links={DIRECT_LINKS} title="Direct hrefs (hardcoded in pages/components)" />
    </div>
  );
}
