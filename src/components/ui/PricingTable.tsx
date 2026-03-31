import {
  EOD_TEST_PRICES,
  INTRADAY_TEST_PRICES,
  ACCOUNT_SIZES,
} from "@/lib/testPricing";
import {
  EOD_PA_PRICES,
  INTRADAY_PA_PRICES,
} from "@/lib/pricing";
import { PRIMARY_COUPON } from "@/lib/coupons";

interface PricingTableProps {
  type: "eod" | "intraday";
}

export function PricingTable({ type }: PricingTableProps) {
  const testPrices = type === "eod" ? EOD_TEST_PRICES  : INTRADAY_TEST_PRICES;
  const paPrices   = type === "eod" ? EOD_PA_PRICES    : INTRADAY_PA_PRICES;

  return (
    <div
      className="mb-10 rounded-xl overflow-hidden"
      style={{ border: "1px solid var(--gold-edge)" }}
    >
      {/* ── Header ────────────────────────────────────────────── */}
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

      {/* ── Test price table ───────────────────────────────────── */}
      <div style={{ backgroundColor: "var(--surface-overlay)" }}>
        <table className="w-full text-sm border-collapse table-fixed">
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "35%" }} />
            <col style={{ width: "35%" }} />
          </colgroup>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
              <th
                className="text-right py-2.5 px-4 font-medium text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                גודל חשבון
              </th>
              <th
                className="text-right py-2.5 px-4 font-medium text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                מחיר מלא
              </th>
              <th
                className="text-right py-2.5 px-4 font-medium text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                מחיר אחרי הנחה
              </th>
            </tr>
          </thead>
          <tbody>
            {ACCOUNT_SIZES.map((size, i) => {
              const { fullPrice, discountedPrice } = testPrices[size];
              return (
                <tr
                  key={size}
                  style={{
                    borderBottom:
                      i < ACCOUNT_SIZES.length - 1
                        ? "1px solid var(--surface-border)"
                        : undefined,
                  }}
                >
                  <td
                    className="py-2.5 px-4 font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span dir="ltr">{size}</span>
                  </td>
                  <td className="py-2.5 px-4" style={{ color: "var(--text-muted)" }}>
                    <s dir="ltr">{fullPrice}</s>
                  </td>
                  <td className="py-2.5 px-4">
                    <span
                      dir="ltr"
                      className="font-bold"
                      style={{ color: "var(--gold-300)" }}
                    >
                      {discountedPrice}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* ── Footer notes ──────────────────────────────────────── */}
        <div
          className="px-4 py-3 space-y-1"
          style={{ borderTop: "1px solid var(--surface-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            המחיר לאחר ההנחה משקף{" "}
            <span style={{ color: "var(--gold-400)", fontWeight: 600 }}>90% הנחה</span>
            {" "}עם קוד הקופון{" "}
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
            תשלום המבחן הוא חד־פעמי ל-30 ימים.
          </p>
        </div>
      </div>

      {/* ── PA section header — mirrors exam header ───────────────── */}
      <div
        className="px-4 py-3 flex items-baseline justify-between gap-4"
        style={{
          backgroundColor: "var(--gold-900)",
          borderTop: "1px solid var(--gold-edge)",
          borderBottom: "1px solid var(--gold-edge)",
        }}
      >
        <p
          className="text-xs font-semibold"
          style={{ color: "var(--gold-400)", letterSpacing: "0.05em" }}
        >
          דמי הפעלת <span dir="ltr">PA</span>
        </p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          תשלום חד-פעמי — נפרד ממחיר המבחן
        </p>
      </div>

      {/* ── PA price table — mirrors exam table ───────────────────── */}
      <div style={{ backgroundColor: "var(--surface-overlay)" }}>
        <table className="w-full text-sm border-collapse table-fixed">
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "70%" }} />
          </colgroup>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
              <th
                className="text-right py-2.5 px-4 font-medium text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                גודל חשבון
              </th>
              <th
                className="text-right py-2.5 px-4 font-medium text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                דמי הפעלה
              </th>
            </tr>
          </thead>
          <tbody>
            {ACCOUNT_SIZES.map((size, i) => (
              <tr
                key={size}
                style={{
                  borderBottom:
                    i < ACCOUNT_SIZES.length - 1
                      ? "1px solid var(--surface-border)"
                      : undefined,
                }}
              >
                <td
                  className="py-2.5 px-4 font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span dir="ltr">{size}</span>
                </td>
                <td className="py-2.5 px-4">
                  <span
                    dir="ltr"
                    className="font-bold"
                    style={{ color: "var(--gold-300)" }}
                  >
                    {paPrices[size]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
