"use client";

import { useState } from "react";
import {
  ACCOUNT_SIZES,
  ACCOUNT_SIZE_LABELS,
  PAYOUT_TABLES,
  type TabKey,
  type AccountSize,
} from "@/lib/apexPayoutTables";

// ─── Constants ────────────────────────────────────────────────────────────────

const TABS: { key: TabKey; label: string }[] = [
  { key: "intraday", label: "אינטרה-דיי (Intraday)" },
  { key: "eod",      label: "סוף יום (EOD)" },
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
          style={{ color: "var(--gold-300)", minWidth: "90px" }}
        >
          {ACCOUNT_SIZE_LABELS[size]}
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
          לפי גודל חשבון — Apex PA רשמי
        </p>
      </div>

      <div className="px-5 sm:px-6 pt-5 flex flex-col gap-5">

        {/* ── Intraday vs EOD explainer ── */}
        <div
          className="rounded-xl px-4 py-3 text-sm"
          style={{
            backgroundColor: "var(--surface-overlay)",
            border: "1px solid var(--surface-border)",
          }}
        >
          <p className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
            מה ההבדל בין EOD ל-Intraday?
          </p>
          <div className="flex flex-col gap-1.5" style={{ color: "var(--text-secondary)" }}>
            <p>
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>סוף יום (<span dir="ltr">EOD</span>): </span>
              רף ההפסד נקבע לפי מצב החשבון בסוף יום המסחר.
            </p>
            <p>
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>אינטרה-דיי (<span dir="ltr">Intraday</span>): </span>
              רף ההפסד נגרר בזמן אמת אחרי שיא החשבון.
            </p>
          </div>
          <p className="mt-2.5 text-xs" style={{ color: "var(--text-muted)" }}>
            הנתונים עשויים להשתנות באתר Apex. מומלץ לבדוק גם שם לפני בקשת תשלום.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-2">
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
        <div className="flex flex-col gap-6 pb-5">

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

                  {/* Calculated projection row — not an official Apex field */}
                  <tr
                    style={{
                      backgroundColor: "var(--surface-overlay)",
                      borderTop: "1px solid var(--surface-border-strong)",
                    }}
                  >
                    <td className="px-4 py-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                      חישוב (20 חשבונות)
                      <span
                        className="block text-xs font-normal mt-0.5"
                        style={{ color: "var(--text-muted)", opacity: 0.7 }}
                      >
                        זהו חישוב לפי מגבלת 20 חשבונות PA – לא שורת טבלה רשמית של Apex.
                      </span>
                    </td>
                    {ACCOUNT_SIZES.map((size) => (
                      <td
                        key={size}
                        className="text-center px-4 py-2.5 tabular-nums text-sm"
                        style={{ color: "var(--text-muted)" }}
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
      </div>
    </section>
  );
}
