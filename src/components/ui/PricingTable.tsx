import {
  fetchApexPricing,
  APEX_EVALUATION_PLANS_URL,
  type PriceRow,
} from "@/lib/apexPricing";
import { PRIMARY_COUPON } from "@/lib/coupons";

interface PricingTableProps {
  /** "eod" or "intraday" — controls which price column is shown */
  type: "eod" | "intraday";
  /** Fixed PA activation price: 99 for EOD, 79 for Intraday */
  paPrice: number;
}

// ─── sub-components ───────────────────────────────────────────────────────────

function FetchError() {
  return (
    <div
      className="px-4 py-5 text-center"
      style={{ backgroundColor: "var(--surface-overlay)" }}
    >
      <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
        לא הצלחנו למשוך את המחיר כרגע
      </p>
      <a
        href={APEX_EVALUATION_PLANS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs hover:underline"
        style={{ color: "var(--teal-400)" }}
      >
        צפו במחירים הנוכחיים באתר <span dir="ltr">Apex</span> ↗
      </a>
    </div>
  );
}

function PriceRows({
  rows,
  showRegular,
}: {
  rows: PriceRow[];
  showRegular: boolean;
}) {
  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
          <th
            className="text-right py-2.5 px-4 font-medium text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            גודל תיק
          </th>
          {showRegular && (
            <th
              className="text-right py-2.5 px-4 font-medium text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              מחיר רגיל
            </th>
          )}
          <th
            className="text-right py-2.5 px-4 font-medium text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            {showRegular ? "מחיר אחרי הנחה" : "מחיר"}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={row.size}
            style={{
              borderBottom:
                i < rows.length - 1
                  ? "1px solid var(--surface-border)"
                  : undefined,
            }}
          >
            <td
              className="py-2.5 px-4 font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              <span dir="ltr">{row.size}</span>
            </td>
            {showRegular && (
              <td className="py-2.5 px-4" style={{ color: "var(--text-muted)" }}>
                {row.regular ? (
                  <s dir="ltr">{row.regular}</s>
                ) : (
                  <span style={{ opacity: 0.35 }}>—</span>
                )}
              </td>
            )}
            <td className="py-2.5 px-4">
              {row.discounted ? (
                <span
                  dir="ltr"
                  className="font-bold"
                  style={{ color: "var(--gold-300)" }}
                >
                  {row.discounted}
                </span>
              ) : (
                <span style={{ color: "var(--text-muted)", opacity: 0.35 }}>
                  —
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TableFooter() {
  return (
    <div
      className="px-4 py-3 space-y-1"
      style={{ borderTop: "1px solid var(--surface-border)" }}
    >
      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
        המחיר אחרי ההנחה עם קוד הקופון{" "}
        <span
          dir="ltr"
          style={{ color: "var(--gold-400)", fontWeight: 600 }}
        >
          {PRIMARY_COUPON}
        </span>
      </p>
      <p
        className="text-xs"
        style={{ color: "var(--text-muted)", opacity: 0.65 }}
      >
        המחירים מתעדכנים אוטומטית לפי האתר הרשמי של{" "}
        <span dir="ltr">Apex</span> ועשויים להשתנות.
      </p>
    </div>
  );
}

function PaPrice({ paPrice }: { paPrice: number }) {
  return (
    <div
      className="px-4 py-3 flex items-center justify-between gap-4"
      style={{
        borderTop: "1px solid var(--gold-edge)",
        backgroundColor: "var(--gold-900)",
      }}
    >
      <div>
        <p
          className="text-xs font-semibold"
          style={{ color: "var(--gold-400)" }}
        >
          מחיר <span dir="ltr">PA</span>
        </p>
        <p
          className="text-xs mt-0.5"
          style={{ color: "var(--text-muted)" }}
        >
          מחיר קבוע — נפרד ממחיר המבחן
        </p>
      </div>
      <p
        className="text-xl font-bold"
        style={{ color: "var(--gold-300)" }}
      >
        <span dir="ltr">${paPrice}</span>
      </p>
    </div>
  );
}

// ─── main export ──────────────────────────────────────────────────────────────

export async function PricingTable({ type, paPrice }: PricingTableProps) {
  const result = await fetchApexPricing();

  const rows: PriceRow[] =
    result.ok
      ? type === "eod"
        ? result.data.eod
        : result.data.intraday
      : [];

  const showRegular = rows.some((r) => r.regular !== null);
  const hasAnyPrice = rows.some((r) => r.discounted || r.regular);

  return (
    <div
      className="mb-10 rounded-xl overflow-hidden"
      style={{ border: "1px solid var(--gold-edge)" }}
    >
      {/* ── Header ── */}
      <div
        className="px-4 py-3 flex items-baseline justify-between gap-4"
        style={{
          backgroundColor: "var(--gold-900)",
          borderBottom: "1px solid var(--gold-edge)",
        }}
      >
        <p
          className="text-xs font-semibold"
          style={{ color: "var(--gold-400)", letterSpacing: "0.05em" }}
        >
          מחירי המבחן
        </p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          תשלום חד־פעמי ל-30 ימים
        </p>
      </div>

      {/* ── Table or error ── */}
      <div style={{ backgroundColor: "var(--surface-overlay)" }}>
        {!result.ok || !hasAnyPrice ? (
          <FetchError />
        ) : (
          <>
            <PriceRows rows={rows} showRegular={showRegular} />
            <TableFooter />
          </>
        )}
      </div>

      {/* ── PA price — always shown ── */}
      <PaPrice paPrice={paPrice} />
    </div>
  );
}
