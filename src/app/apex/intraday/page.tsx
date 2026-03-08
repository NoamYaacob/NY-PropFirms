import type { Metadata } from "next";
import { Activity, Clock, ShieldAlert, Wallet, TrendingUp } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { PricingTable } from "@/components/ui/PricingTable";
import { S } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Apex Intraday — מבחן ו-PA | NY Prop Firms",
  description: "כללי חשבון Intraday של Apex: רף הפסד נגרר, ללא DLL במבחן, DLL לפי Tier ב-PA, עקביות 50%, רשת ביטחון ועוד",
};

const APEX_URL = "https://apextraderfunding.com";

export default function IntradayPage() {
  return (
    <div className="container-page py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
        <a href="/apex" className="hover:text-[var(--text-secondary)]">Apex</a>
        <span>/</span>
        <span style={{ color: "var(--text-secondary)" }}>Intraday</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
        Apex <span dir="ltr">Intraday</span> — כללי המבחן וחשבון מימון
      </h1>
      <p className="text-base mb-4" style={{ color: "var(--text-secondary)" }}>
        כל הכללים מבוססים על מסמכי <span dir="ltr">Apex</span> הרשמיים הקיימים כרגע.
      </p>

      {/* Stage toggle — Test first, PA second */}
      <div
        className="inline-flex rounded-xl overflow-hidden mb-8"
        style={{ border: "1px solid var(--surface-border)" }}
      >
        <a
          href="#test"
          className="px-5 py-2.5 text-sm font-semibold"
          style={{
            backgroundColor: "var(--teal-900)",
            color: "var(--teal-400)",
            borderInlineEnd: "1px solid var(--teal-edge)",
          }}
        >
          שלב המבחן
        </a>
        <a
          href="#pa"
          className="px-5 py-2.5 text-sm font-semibold"
          style={{ backgroundColor: "transparent", color: "var(--text-muted)" }}
        >
          שלב ה-<span dir="ltr">PA</span>
        </a>
      </div>

      {/* Key stats — Card C leads with PA having DLL */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>תוקף המבחן</p>
          <p className="font-bold" style={{ color: "var(--text-primary)" }}>30 ימים</p>
        </div>

        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>רף הפסד – איך זה עובד</p>
          <p className="font-bold" style={{ color: "var(--teal-400)" }}>
            רף הפסד נגרר בזמן אמת (<span dir="ltr">Intraday</span>)
          </p>
        </div>

        <div className="card p-4 text-center">
          <p className="font-semibold text-sm leading-snug" style={{ color: "var(--teal-400)" }}>
            בשלב ה-<span dir="ltr">PA</span> יש מגבלת הפסד יומי (<span dir="ltr">DLL</span>) ✅
          </p>
          <p className="text-xs mt-1.5" style={{ color: "var(--text-muted)" }}>
            <span dir="ltr">Tier Based</span> • מנוטר בזמן אמת • מתאפס בסשן הבא
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)", opacity: 0.65 }}>
            בשלב המבחן (<span dir="ltr">Intraday</span>) אין <span dir="ltr">DLL</span>
          </p>
        </div>
      </div>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <PricingTable type="intraday" />

      {/* ── EVALUATION SECTION — appears first ────────────────────── */}
      <section id="test">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--gold-300)" }}>
          שלב המבחן (<span dir="ltr">Intraday</span>)
        </h2>

        {/* No DLL in eval — explicit note that PA DOES have DLL */}
        <CalloutBox
          variant="success"
          title="שלב המבחן (Intraday) – אין DLL"
          accountType="intraday"
          source={S.INTRADAY_EVALUATIONS}
          body={
            <div className="space-y-2">
              <p>
                בשלב המבחן, חשבונות <span dir="ltr">Intraday</span> לא כפופים
                ל-<span dir="ltr">Daily Loss Limit (DLL)</span>. כל ניהול הסיכון
                נעשה דרך רף הפסד נגרר בלבד — אין מגבלת הפסד יומית.
              </p>
              <p>
                <strong>חשוב: זה נכון רק לשלב המבחן. ב-<span dir="ltr">PA</span> יש <span dir="ltr">DLL</span>.</strong>{" "}
                <a
                  href="#pa-dll"
                  style={{ color: "var(--teal-400)", textDecoration: "underline" }}
                >
                  קפוץ לכללי <span dir="ltr">DLL</span> ב-<span dir="ltr">PA</span> ↓
                </a>
              </p>
            </div>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <RuleCard
            title="רף הפסד נגרר — בזמן אמת"
            icon={Activity}
            accountType="intraday"
            source={S.INTRADAY_EVALUATIONS}
            body={
              <>
                <p>
                  רף ההפסד הנגרר עוקב אחרי <strong>שיא החשבון</strong>{" "}
                  בזמן אמת, כולל רווחים פתוחים (<span dir="ltr">Unrealized PnL</span>).
                </p>
                <p className="mt-2">
                  הרף עולה עם כל שיא חדש —{" "}
                  <strong>אך לעולם לא יורד</strong>.
                </p>
                <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  רף = שיא החשבון (כולל רווחים פתוחים) פחות רף ההפסד
                </p>
              </>
            }
          />

          <RuleCard
            title="תוקף המבחן"
            icon={Clock}
            accountType="intraday"
            source={S.EVALUATION_FEES}
            body="רכישה חד-פעמית ל-30 ימים. אין חיוב חודשי ואין חידוש אוטומטי. בסוף 30 הימים החשבון נסגר אוטומטית — ואין אפשרות להאריך."
          />

          <RuleCard
            title="חלון המסחר — 4:59 PM ET"
            icon={Clock}
            accountType="universal"
            source={S.CLOSE_459}
            body={
              <>
                <p>
                  פתיחת עסקאות בין <strong>6:00 PM ET</strong> לבין{" "}
                  <strong>4:59 PM ET</strong> של היום הבא.
                </p>
                <p className="mt-2">
                  הוראות המחוברות לפוזיציה (כמו סטופ ולימיט) נסגרות אוטומטית
                  כשהפוזיציה נסגרת. הוראות עצמאיות שאינן מחוברות לפוזיציה{" "}
                  <strong>אינן מבוטלות אוטומטית</strong> — יש לבטל אותן ידנית
                  לפני <span dir="ltr">4:59 PM ET</span>.
                </p>
              </>
            }
          />
        </div>

        <div className="mt-6">
          <CalloutBox
            variant="warning"
            title="הוראות תלויות — שימו לב"
            source={S.CLOSE_459}
            body="הוראות המחוברות לפוזיציה (כמו סטופ ולימיט) נסגרות אוטומטית כשהפוזיציה נסגרת. הוראות עצמאיות שאינן מחוברות לפוזיציה אינן מבוטלות אוטומטית — יש לבטל אותן ידנית לפני 4:59 PM ET."
          />
        </div>

        <div className="mt-8">
          <Button
            label="פתח מבחן Intraday עם הקוד NOAM"
            href={APEX_URL}
            variant="primary"
            size="lg"
            external
          />
        </div>
      </section>

      {/* ── Phase Divider ─────────────────────────────────────── */}
      <SectionDivider
        variant="phase"
        rightLabel="שלב ה-PA ↓"
        leftLabel="↑ שלב המבחן"
      />

      {/* ── PA SECTION — appears second ──────────────────────────── */}
      <section id="pa">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--teal-400)" }}>
          שלב ה-<span dir="ltr">PA</span> (<span dir="ltr">Intraday</span>)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RuleCard
            title="חוק עקביות 50% (Consistency)"
            icon={TrendingUp}
            accountType="intraday-pa"
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
                  ✅ ימי הפסד לא נכללים בחישוב.
                </p>
              </>
            }
          />

          <RuleCard
            title="רשת ביטחון לפי גודל תיק"
            icon={ShieldAlert}
            accountType="intraday-pa"
            source={S.INTRADAY_PAYOUTS}
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
            source={S.INTRADAY_PAYOUTS}
            body={
              <>
                <p>
                  <strong style={{ color: "var(--gold-300)" }}>100% לסוחר</strong>{" "}
                  על <span dir="ltr">$25,000</span> הרווחים הראשונים.
                </p>
                <p className="mt-2">
                  <strong>90% לסוחר / 10% ל-<span dir="ltr">Apex</span></strong>{" "}
                  על כל רווח מעל <span dir="ltr">$25,000</span>.
                </p>
              </>
            }
          />

          <RuleCard
            title="מגבלת 20 חשבונות PA"
            icon={ShieldAlert}
            accountType="pa"
            source={S.PAYOUT_RULES}
            body={
              <p>
                לסוחר מותר להחזיק עד 20 חשבונות <span dir="ltr">PA</span> פעילים
                בו-זמנית. חריגה ממגבלה זו חוסמת בקשות תשלום.
              </p>
            }
          />
        </div>

        {/* DLL in Intraday PA — tier-based, anchor target for inline link */}
        <div id="pa-dll" className="mt-4">
          <CalloutBox
            variant="info"
            title="DLL לפי Tier ב-PA"
            accountType="intraday-pa"
            source={S.SCALING_LEVELS_PA}
            body={
              <div className="space-y-3">
                <p>בחשבונות <span dir="ltr">PA</span>, ה-<span dir="ltr">DLL</span> נקבע לפי ה-<span dir="ltr">Tier</span> של החשבון — בניגוד למבחן שבו אין <span dir="ltr">DLL</span>.</p>
                <ul className="space-y-1.5 list-disc list-inside" style={{ color: "var(--text-secondary)" }}>
                  <li>ה-<span dir="ltr">Tier</span> קובע את גודל ה-<span dir="ltr">DLL</span> ואת מספר החוזים המקסימלי.</li>
                  <li>ה-<span dir="ltr">Tier</span> מתעדכן לפי יתרת סוף היום, וחל על הסשן הבא.</li>
                  <li>ה-<span dir="ltr">DLL</span> יכול לעלות או לרדת, אבל לא מתחת ל-<span dir="ltr">Level 1</span>.</li>
                </ul>
                <p>
                  אם מגיעים ל-<span dir="ltr">DLL</span>, הפוזיציות נסגרות אוטומטית והמסחר נעצר עד הסשן הבא. החשבון נשאר פעיל.
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  הנתונים עשויים להשתנות — בדקו ישירות ב-<span dir="ltr">Apex</span> לפני החלטות מסחר.
                </p>
              </div>
            }
          />
        </div>

        {/* 6-payout timeline */}
        <div className="mt-8 card p-6">
          <h3 className="font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
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
            לאחר התשלום ה-6, החשבון נסגר אוטומטית. יש לפתוח מבחן חדש.
          </p>
          <div className="mt-2">
            <a
              href={S.INTRADAY_PAYOUTS.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:underline"
              style={{ color: "var(--teal-400)" }}
            >
              {S.INTRADAY_PAYOUTS.title} ↗
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <CouponChip size="sm" />
          <Button label="פתח מבחן ב-Apex" href={APEX_URL} variant="primary" external />
        </div>
      </section>
    </div>
  );
}
