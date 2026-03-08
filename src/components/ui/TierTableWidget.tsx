"use client";

import { useState } from "react";
import {
  TIER_ACCOUNT_SIZES,
  TIER_ACCOUNT_SIZE_LABELS,
  TIER_TABLES,
  type TierAccountSize,
} from "@/lib/apexTierTables";

export function TierTableWidget() {
  const [activeSize, setActiveSize] = useState<TierAccountSize>("25k");

  const rows = TIER_TABLES[activeSize];

  return (
    <div
      className="mt-4 rounded-xl overflow-hidden"
      style={{ border: "1px solid var(--surface-border)" }}
    >
      {/* ── Card header: title + helper + switcher ── */}
      <div
        className="px-4 py-3 flex flex-col gap-2"
        style={{
          backgroundColor: "var(--surface-overlay)",
          borderBottom: "1px solid var(--surface-border)",
        }}
      >
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            בחרו גודל חשבון
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            ה-<span dir="ltr">Tier</span> קובע כמה חוזים מותר להחזיק ומה גודל ה-<span dir="ltr">DLL</span> בסשן הבא
          </p>
        </div>

        {/* Segmented control */}
        <div
          className="inline-flex self-start rounded-lg overflow-hidden"
          style={{ border: "1px solid var(--surface-border)" }}
          role="group"
          aria-label="בחרו גודל חשבון"
        >
          {TIER_ACCOUNT_SIZES.map((size, i) => {
            const isActive = activeSize === size;
            const isLast = i === TIER_ACCOUNT_SIZES.length - 1;

            return (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className="px-3.5 py-1 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                style={
                  isActive
                    ? {
                        backgroundColor: "var(--gold-900)",
                        color: "var(--gold-300)",
                        borderInlineEnd: isLast ? undefined : "1px solid var(--gold-edge)",
                      }
                    : {
                        backgroundColor: "transparent",
                        color: "var(--text-muted)",
                        borderInlineEnd: isLast ? undefined : "1px solid var(--surface-border)",
                      }
                }
                aria-pressed={isActive}
              >
                {TIER_ACCOUNT_SIZE_LABELS[size]}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Tier table ── */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse" dir="rtl">
          <thead>
            <tr
              style={{
                backgroundColor: "var(--surface-overlay)",
                borderBottom: "1px solid var(--surface-border-strong)",
              }}
            >
              <th
                className="text-right px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                style={{ color: "var(--text-muted)" }}
              >
                <span dir="ltr">Level</span>
              </th>
              <th
                className="text-right px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                style={{ color: "var(--text-muted)" }}
              >
                טווח רווח
              </th>
              <th
                className="text-center px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                style={{ color: "var(--text-muted)" }}
              >
                מקסימום חוזים
              </th>
              <th
                className="text-center px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                style={{ color: "var(--gold-300)" }}
              >
                <span dir="ltr">DLL</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.level}
                style={{
                  backgroundColor:
                    i % 2 === 0 ? "transparent" : "var(--surface-overlay)",
                  borderBottom:
                    i < rows.length - 1
                      ? "1px solid var(--surface-border)"
                      : undefined,
                }}
              >
                <td
                  className="px-4 py-2.5 font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                  dir="ltr"
                >
                  Level {row.level}
                </td>
                <td
                  className="px-4 py-2.5 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                  dir="ltr"
                >
                  {row.profitRange}
                </td>
                <td
                  className="text-center px-4 py-2.5 text-sm font-medium tabular-nums"
                  style={{ color: "var(--text-primary)" }}
                >
                  {row.maxContracts}
                </td>
                <td
                  className="text-center px-4 py-2.5 text-sm font-semibold tabular-nums"
                  style={{ color: "var(--teal-400)" }}
                  dir="ltr"
                >
                  {row.dll}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Footer note ── */}
      <div
        className="px-4 py-2.5"
        style={{
          borderTop: "1px solid var(--surface-border)",
          backgroundColor: "var(--surface-overlay)",
        }}
      >
        <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.75 }}>
          ה-<span dir="ltr">Tier</span> מתעדכן לפי יתרת סוף היום (
          <span dir="ltr">4:59 PM ET</span>) וחל על הסשן הבא. לא משתנה תוך כדי יום מסחר.
        </p>
      </div>
    </div>
  );
}
