import {
  EOD_EVAL_PRICES,
  INTRADAY_EVAL_PRICES,
  EOD_PA_PRICE,
  INTRADAY_PA_PRICE,
  ACCOUNT_SIZES,
} from "@/lib/pricing";
import { PRIMARY_COUPON } from "@/lib/coupons";

interface PricingTableProps {
  /** "eod" or "intraday" — picks the right prices from the config */
  type: "eod" | "intraday";
}

export function PricingTable({ type }: PricingTableProps) {
  const evalPrices = type === "eod" ? EOD_EVAL_PRICES : INTRADAY_EVAL_PRICES;
  const paPrice    = type === "eod" ? EOD_PA_PRICE    : INTRADAY_PA_PRICE;

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

      {/* ── Price table ───────────────────────────────────────── */}
      <div style={{ backgroundColor: "var(--surface-overlay)" }}>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
              <th
                className="text-right py-2.5 px-4 font-medium text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                גודל תיק
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
              const { fullPrice, discountedPrice } = evalPrices[size];
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

        {/* ── Footer notes ─────────────────────────────────────── */}
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
          <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.65 }}>
            תשלום המבחן הוא חד־פעמי ל-30 ימים.
          </p>
        </div>
      </div>

      {/* ── PA price — always shown, visually separated ───────── */}
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
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            מחיר קבוע — נפרד ממחיר המבחן
          </p>
        </div>
        <p className="text-xl font-bold" style={{ color: "var(--gold-300)" }}>
          <span dir="ltr">{paPrice}</span>
        </p>
      </div>
    </div>
  );
}
