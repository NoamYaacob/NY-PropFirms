"use client";

import { useState } from "react";
import {
  ACCOUNT_SIZES,
  ACCOUNT_SIZE_LABELS,
  APEX_TRADOVATE_SIGNUP,
  APEX_SIGNUP_DISABLED,
  PAYOUT_TABLES,
  type TabKey,
  type AccountSize,
} from "@/lib/apexPayoutTables";

// ─── Constants ────────────────────────────────────────────────────────────────

const TABS: { key: TabKey; label: string }[] = [
  { key: "intraday", label: "Intraday Trailing DD" },
  { key: "eod",      label: "EOD" },
];

const PAYOUT_ROWS = [
  "תשלום 1", "תשלום 2", "תשלום 3",
  "תשלום 4", "תשלום 5", "תשלום 6",
] as const;

const REQUIREMENT_ROWS: {
  label: string;
  render: (size: AccountSize, tab: TabKey) => string;
}[] = [
  { label: "מינימום יתרה לבקשה",  render: (s, t) => PAYOUT_TABLES[t][s].minBalanceToRequest },
  { label: "רווח יומי מינימלי",   render: (s, t) => PAYOUT_TABLES[t][s].minDailyProfit },
  { label: "מינימום ימי מסחר",    render: (s, t) => String(PAYOUT_TABLES[t][s].minDaysTraded) },
  { label: "מינימום בקשת תשלום",  render: (s, t) => PAYOUT_TABLES[t][s].minPayoutRequest },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SizeCard({ size }: { size: AccountSize }) {
  const disabled = APEX_SIGNUP_DISABLED[size];
  return (
    <a
      href={APEX_TRADOVATE_SIGNUP[size]}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2 rounded-xl p-4 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
      style={{
        backgroundColor: "var(--surface-overlay)",
        border: "1px solid var(--surface-border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-edge)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--surface-border)";
      }}
    >
      <span
        className="text-2xl font-extrabold tracking-tight"
        style={{ color: "var(--gold-300)" }}
      >
        {ACCOUNT_SIZE_LABELS[size]}
      </span>
      <span
        className="text-xs text-center font-semibold w-full px-2 py-1.5 rounded-lg leading-snug transition-colors"
        style={{
          backgroundColor: "var(--gold-900)",
          color: "var(--gold-300)",
          border: "1px solid var(--gold-edge)",
        }}
      >
        פתח מבחן {ACCOUNT_SIZE_LABELS[size]} (Tradovate)
      </span>
      {disabled && (
        <p className="text-center leading-tight" style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>
          ייתכן שדף ההרשמה לתיק הזה לא זמין כרגע באתר Apex.
        </p>
      )}
    </a>
  );
}

function TableHeader() {
  return (
    <tr
      style={{
        backgroundColor: "var(--surface-overlay)",
        borderBottom: "1px solid var(--surface-border-strong)",
      }}
    >
      <th
        className="text-right px-4 py-3 font-medium text-sm"
        style={{ color: "var(--text-muted)", minWidth: "180px" }}
      />
      {ACCOUNT_SIZES.map((size) => (
        <th
          key={size}
          className="text-center px-4 py-3 font-bold text-sm"
          style={{ minWidth: "90px" }}
        >
          <a
            href={APEX_TRADOVATE_SIGNUP[size]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus-visible:outline-none focus-visible:underline"
            style={{ color: "var(--gold-300)" }}
          >
            {ACCOUNT_SIZE_LABELS[size]}
          </a>
        </th>
      ))}
    </tr>
  );
}

// ─── Main widget ──────────────────────────────────────────────────────────────

export function PayoutTablesWidget() {
  const [activeTab, setActiveTab] = useState<TabKey>("intraday");

  return (
    <section
      className="rounded-2xl overflow-hidden mb-8"
      style={{
        backgroundColor: "var(--surface-raised)",
        border: "1px solid var(--surface-border)",
      }}
    >
      {/* ── Section header ── */}
      <div
        className="px-5 sm:px-6 pt-5 pb-4"
        style={{ borderBottom: "1px solid var(--surface-border)" }}
      >
        <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
          תנאי תשלום לפי גודל חשבון
        </h2>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
          מינימומים ומקסימומים לכל גודל חשבון — Tradovate
        </p>
      </div>

      {/* ── Tabs ── */}
      <div className="flex gap-2 px-5 sm:px-6 pt-4">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            style={
              activeTab === tab.key
                ? {
                    backgroundColor: "var(--gold-900)",
                    color: "var(--gold-300)",
                    border: "1px solid var(--gold-edge)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--text-muted)",
                    border: "1px solid var(--surface-border)",
                  }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Tab body ── */}
      <div className="px-5 sm:px-6 py-5 flex flex-col gap-6">

        {/* Buy cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ACCOUNT_SIZES.map((size) => (
            <SizeCard key={size} size={size} />
          ))}
        </div>

        {/* Table 1: Requirements */}
        <div>
          <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
            תנאי בקשת תשלום
          </p>
          <div
            className="overflow-x-auto rounded-xl"
            style={{ border: "1px solid var(--surface-border)" }}
          >
            <table className="w-full text-sm border-collapse" dir="rtl">
              <thead>
                <TableHeader />
              </thead>
              <tbody>
                {REQUIREMENT_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    style={{
                      backgroundColor: i % 2 !== 0 ? "var(--surface-overlay)" : "transparent",
                      borderBottom: "1px solid var(--surface-border)",
                    }}
                  >
                    <td
                      className="px-4 py-2.5 font-medium text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {row.label}
                    </td>
                    {ACCOUNT_SIZES.map((size) => (
                      <td
                        key={size}
                        className="text-center px-4 py-2.5 tabular-nums text-sm"
                        style={{ color: "var(--text-primary)" }}
                        dir="ltr"
                      >
                        {row.render(size, activeTab)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Max payouts per request */}
        <div>
          <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
            מקסימום לכל בקשת תשלום (#1–#6)
          </p>
          <div
            className="overflow-x-auto rounded-xl"
            style={{ border: "1px solid var(--surface-border)" }}
          >
            <table className="w-full text-sm border-collapse" dir="rtl">
              <thead>
                <TableHeader />
              </thead>
              <tbody>
                {PAYOUT_ROWS.map((rowLabel, i) => (
                  <tr
                    key={rowLabel}
                    style={{
                      backgroundColor: i % 2 !== 0 ? "var(--surface-overlay)" : "transparent",
                      borderBottom: "1px solid var(--surface-border)",
                    }}
                  >
                    <td
                      className="px-4 py-2.5 font-medium text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {rowLabel}
                    </td>
                    {ACCOUNT_SIZES.map((size) => (
                      <td
                        key={size}
                        className="text-center px-4 py-2.5 tabular-nums text-sm"
                        style={{ color: "var(--text-primary)" }}
                        dir="ltr"
                      >
                        {PAYOUT_TABLES[activeTab][size].maxPayouts[i]}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Totals row — highlighted gold */}
                <tr
                  style={{
                    backgroundColor: "var(--gold-900)",
                    borderTop: "1px solid var(--gold-edge)",
                  }}
                >
                  <td
                    className="px-4 py-3 font-semibold text-sm"
                    style={{ color: "var(--gold-300)" }}
                  >
                    סה״כ מקס׳ (20 חשבונות)
                  </td>
                  {ACCOUNT_SIZES.map((size) => (
                    <td
                      key={size}
                      className="text-center px-4 py-3 font-semibold tabular-nums text-sm"
                      style={{ color: "var(--gold-300)" }}
                      dir="ltr"
                    >
                      {PAYOUT_TABLES[activeTab][size].maxPayoutTotal20}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
