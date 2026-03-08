import type { Metadata } from "next";
import { Clock, TrendingUp, BarChart2, ShieldAlert, Wallet } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { PricingTable } from "@/components/ui/PricingTable";
import { S } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Apex EOD — מבחן ו-PA | NY Prop Firms",
  description: "כללי חשבון EOD של Apex: DLL (מגבלת הפסד יומי), גודל פוזיציה קבוע, עקביות 50%, רשת ביטחון ועוד",
};

const APEX_URL = "https://apextraderfunding.com";


export default function EODPage() {
  return (
    <div className="container-page py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
        <a href="/apex" className="hover:text-[var(--text-secondary)]">Apex</a>
        <span>/</span>
        <span style={{ color: "var(--text-secondary)" }}>EOD</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
        Apex EOD — כללי המבחן וחשבון מימון
      </h1>
      <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
        כל הכללים מבוססים על מסמכי Apex הרשמיים הקיימים כרגע.
      </p>

      {/* Key stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            <span dir="ltr">Daily Loss Limit</span> — מבחן
          </p>
          <p className="font-bold" style={{ color: "var(--amber-400)" }}>
            יש <span dir="ltr">DLL</span> ✅
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            מגבלה יומית — לא פוסלת
          </p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>רף הפסד – איך זה עובד</p>
          <p className="font-bold" style={{ color: "var(--text-secondary)" }}>רף הפסד בסוף יום (EOD)</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>תוקף המבחן</p>
          <p className="font-bold" style={{ color: "var(--text-primary)" }}>30 ימים</p>
        </div>
      </div>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <PricingTable type="eod" />

      {/* ── EVALUATION ─────────────────────────────────────────── */}
      <section id="evaluation">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--gold-300)" }}>
          שלב המבחן (EOD)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RuleCard
            title="תוקף המבחן"
            icon={Clock}
            accountType="eod"
            source={S.EVALUATION_FEES}
            body={
              <p>
                כל מבחן הוא <strong>רכישה חד-פעמית</strong> ל-30 ימים.
                החשבון לא מתחדש אוטומטית ואין חיוב חודשי. בסוף היום ה-30
                החשבון פג ב-11:59 PM ET — אין אפשרות להאריך.
              </p>
            }
          />

          <RuleCard
            title="חלון המסחר — 4:59 PM ET"
            icon={Clock}
            accountType="universal"
            source={S.CLOSE_459}
            body={
              <>
                <p>
                  אפשר לפתוח עסקאות החל מ-<strong>6:00 PM ET</strong> ועד
                  <strong> 4:59 PM ET</strong> של היום הבא.
                </p>
                <p className="mt-2">
                  הוראות המחוברות לפוזיציה (כמו סטופ ולימיט) נסגרות אוטומטית כשהפוזיציה נסגרת.
                  הוראות עצמאיות שאינן מחוברות לפוזיציה <strong>אינן מבוטלות אוטומטית</strong> — יש לבטל אותן ידנית לפני <span dir="ltr">4:59 PM ET</span>.
                  בישראל זה בדרך כלל סביב חצות, אבל עשוי להשתנות לפי שעון קיץ — עבדו לפי <span dir="ltr">ET</span>.
                </p>
              </>
            }
          />

          <RuleCard
            title="גודל פוזיציה — שלב המבחן"
            icon={BarChart2}
            accountType="eod"
            source={S.EOD_EVALUATIONS}
            body={
              <p>
                בשלב המבחן גודל הפוזיציה קבוע — אין מנגנון{" "}
                <span dir="ltr">Scaling</span>. גודל החוזה המרבי נקבע לפי
                סוג החשבון שנרכש ואינו משתנה במהלך המבחן.
              </p>
            }
          />
        </div>

        {/* DLL Callout — high priority */}
        <div className="mt-6">
          <CalloutBox
            variant="info"
            title="מגבלת הפסד יומי (DLL) — מבחן EOD"
            accountType="eod"
            source={S.DAILY_LOSS_LIMIT}
            body={
              <div className="space-y-2">
                <p>
                  בחשבונות <span dir="ltr">EOD</span> קיים{" "}
                  <span dir="ltr">DLL</span> — מגבלת הפסד יומית כוללת
                  (ממומש ובלתי-ממומש). הרף קבוע לאורך כל הסשן ומנוטר בזמן אמת.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>
                    פגיעה ב-<span dir="ltr">DLL</span>: פוזיציות נסגרות
                    אוטומטית, המסחר נעצר עד סוף אותו יום מסחר — המבחן לא
                    נכשל. חוזרים לסחור מ-<span dir="ltr">6:00 PM ET</span>.
                  </strong>
                </p>
                <p style={{ color: "var(--text-muted)" }}>
                  ה-<span dir="ltr">DLL</span> מתאפס עם פתיחת הסשן הבא
                  (<span dir="ltr">6:00 PM ET</span>).
                  במבחן <span dir="ltr">Intraday</span> אין{" "}
                  <span dir="ltr">DLL</span> — אך ב-<span dir="ltr">Intraday PA</span>{" "}
                  יש <span dir="ltr">DLL</span> לפי <span dir="ltr">Tier</span>.
                </p>
              </div>
            }
          />
        </div>

        <div className="mt-8">
          <CalloutBox
            variant="warning"
            title="הוראות תלויות — שימו לב"
            source={S.CLOSE_459}
            body="הוראות המחוברות לפוזיציה (כמו סטופ ולימיט) נסגרות אוטומטית כשהפוזיציה נסגרת. הוראות עצמאיות שאינן מחוברות לפוזיציה אינן מבוטלות אוטומטית — יש לבטל אותן ידנית לפני 4:59 PM ET. בישראל זה בדרך כלל סביב חצות, אבל עשוי להשתנות לפי שעון קיץ — עבדו לפי ET."
          />
        </div>

        <div className="mt-10">
          <Button
            label="פתח מבחן EOD עם הקוד NOAM"
            href={APEX_URL}
            variant="primary"
            size="lg"
            external
          />
        </div>
      </section>

      {/* ── Phase Divider ────────────────────────────────────────── */}
      <SectionDivider
        variant="phase"
        rightLabel="שלב ה-PA ↓"
        leftLabel="↑ שלב המבחן"
      />

      {/* ── PA SECTION ─────────────────────────────────────────── */}
      <section id="pa">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--teal-400)" }}>
          שלב ה-PA — EOD Performance Account
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RuleCard
            title="חוק עקביות 50% (Consistency)"
            icon={TrendingUp}
            accountType="eod-pa"
            source={S.CONSISTENCY_50}
            body={
              <>
                <p>
                  היום הרווחי ביותר שלך חייב להיות <strong>פחות מ-50%</strong>{" "}
                  מסך הרווח הכולל.
                </p>
                <p className="mt-2">
                  כל עוד עברת 50%, כפתור בקשת התשלום לא זמין.
                </p>
                <p className="mt-2" style={{ color: "var(--green-400)" }}>
                  ✅ ימי הפסד לא נכללים בחישוב — רק ימים רווחיים.
                </p>
              </>
            }
          />

          <RuleCard
            title="רשת ביטחון לפי גודל תיק"
            icon={ShieldAlert}
            accountType="eod-pa"
            source={S.EOD_PAYOUTS}
            body={
              <div className="space-y-2">
                <div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    רשת הביטחון היא רף ההפסד של החשבון בתוספת <span dir="ltr">$100</span>.
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    רק רווח שמעל רשת הביטחון ניתן למשיכה.
                  </p>
                </div>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                      <th className="text-right pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>גודל תיק</th>
                      <th className="text-left pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>רשת ביטחון</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "25K", net: "$26,100" },
                      { size: "50K", net: "$52,100" },
                      { size: "100K", net: "$103,100" },
                      { size: "150K", net: "$154,100" },
                    ].map((row) => (
                      <tr key={row.size} style={{ borderBottom: "1px solid var(--surface-border)" }}>
                        <td className="py-1 text-right" dir="ltr">{row.size}</td>
                        <td className="py-1 text-left font-semibold" dir="ltr" style={{ color: "var(--teal-400)" }}>{row.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  רשת הביטחון נשארת בתוקף לאורך כל חיי חשבון ה-PA.
                </p>
              </div>
            }
          />

          <RuleCard
            title="מבנה חלוקת הרווחים"
            icon={Wallet}
            accountType="universal"
            source={S.EOD_PAYOUTS}
            body={
              <>
                <p>
                  <strong style={{ color: "var(--gold-300)" }}>
                    100% לסוחר
                  </strong>{" "}
                  על <span dir="ltr">$25,000</span> הרווחים הראשונים לחשבון.
                </p>
                <p className="mt-2">
                  <strong>90% לסוחר / 10% ל-Apex</strong> על כל רווח מעל
                  <span dir="ltr">$25,000</span>.
                </p>
              </>
            }
          />

          <RuleCard
            title="מגבלת 20 חשבונות PA פעילים"
            icon={ShieldAlert}
            accountType="pa"
            source={S.PAYOUT_RULES}
            body="לסוחר מותר להחזיק עד 20 חשבונות PA פעילים בו-זמנית. חריגה ממגבלה זו חוסמת את האפשרות לבקש תשלומים."
          />
        </div>

        {/* DLL in EOD PA — tier-based */}
        <div className="mt-4">
          <CalloutBox
            variant="info"
            title="DLL לפי Tier — EOD PA"
            accountType="eod-pa"
            source={S.EOD_PA}
            body={
              <div className="space-y-2">
                <p>
                  ב-<span dir="ltr">EOD PA</span> יש <span dir="ltr">DLL</span> הנקבע לפי ה-<span dir="ltr">Tier</span> של החשבון.
                  ה-<span dir="ltr">Tier</span> קובע גם את גודל הסטופ היומי וגם את מספר החוזים המקסימלי לסשן הבא.
                </p>
                <p>
                  <strong>ה-<span dir="ltr">Tier</span> מתעדכן לפי יתרת סוף היום</strong>, חל על הסשן הבא, ולא משתנה תוך כדי יום מסחר.
                  אם היתרה יורדת, ה-<span dir="ltr">Tier</span> יכול לרדת — אבל לא מתחת ל-<span dir="ltr">Level 1</span>.
                  פגיעה ב-<span dir="ltr">DLL</span>: פוזיציות נסגרות אוטומטית, המסחר נעצר עד הסשן הבא, החשבון נשאר פעיל.
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  הנתונים עשויים להשתנות. מומלץ לבדוק ישירות ב-<span dir="ltr">Apex</span> לפני החלטות מסחר.
                </p>
              </div>
            }
          />
        </div>

        {/* 6-payout timeline */}
        <div className="mt-8 card p-6">
          <h3 className="font-semibold mb-4 text-base" style={{ color: "var(--text-primary)" }}>
            מגבלת 6 תשלומים לחשבון
          </h3>
          <TimelineStrip
            steps={[
              { label: "תשלום 1" },
              { label: "תשלום 2" },
              { label: "תשלום 3" },
              { label: "תשלום 4" },
              { label: "תשלום 5" },
              { label: "חשבון נסגר", variant: "closure" },
            ]}
          />
          <p className="text-sm mt-4" style={{ color: "var(--text-secondary)" }}>
            לאחר התשלום ה-6, החשבון נסגר אוטומטית. יש לפתוח מבחן חדש כדי
            לקבל PA חדש.
          </p>
          <div className="mt-3">
            <a
              href={S.EOD_PAYOUTS.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs inline-flex items-center gap-1 hover:underline"
              style={{ color: "var(--teal-400)" }}
            >
              {S.EOD_PAYOUTS.title} ↗
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <CouponChip size="sm" />
          <Button label="פתח מבחן ב-Apex" href={APEX_URL} variant="primary" external />
        </div>
      </section>

    </div>
  );
}
