import type { Metadata } from "next";
import { Clock, TrendingUp, BarChart2, ShieldAlert, Wallet } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { S } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Apex EOD — מבחן ו-PA | NY Prop Firms",
  description: "כללי חשבון EOD של Apex: DLL (מגבלת הפסד יומי), Contract Scaling, עקביות 50%, רשת ביטחון ועוד",
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
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>תקופת שימוש</p>
          <p className="font-bold" style={{ color: "var(--text-primary)" }}>30 יום</p>
        </div>
      </div>

      {/* ── EVALUATION ─────────────────────────────────────────── */}
      <section id="evaluation">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--gold-300)" }}>
          שלב המבחן — EOD Evaluation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RuleCard
            title="תקופת שימוש — חשבון מבחן"
            icon={Clock}
            accountType="eod"
            source={S.EVALUATION_FEES}
            body={
              <p>
                כל מבחן הוא <strong>רכישה חד-פעמית</strong> ל-30 יום.
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
                  הוראות שמחוברות לפוזיציה (Attached Orders), כמו סטופ/לימיט, נסגרות יחד עם הפוזיציה.
                  הוראות עצמאיות (Standing Orders) לא נסגרות לבד – צריך לבטל אותן ידנית לפני <span dir="ltr">4:59 PM ET</span> (בדרך כלל 23:59 בישראל, תלוי בשעון קיץ).
                </p>
                <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  כדי לא לטעות, מומלץ לעבוד לפי השעה ET שמופיעה במסמכי Apex.
                </p>
              </>
            }
          />

          <RuleCard
            title="Contract Scaling Rule"
            icon={BarChart2}
            accountType="eod"
            source={S.CONTRACT_SCALING}
            body={
              <>
                <p>
                  בתחילה מותר לסחור רק בחצי ממספר החוזים המרבי.
                </p>
                <p className="mt-2">
                  הגישה לכמות המלאה נפתחת כשיתרת ה-EOD עוברת:{" "}
                  <strong>יתרה התחלתית + רף הפסד מקסימלי + <span dir="ltr">$100</span></strong>.
                  אחרי שהגישה נפתחת — היא נשארת גם אם היתרה יורדת.
                </p>
              </>
            }
          />
        </div>

        {/* DLL Callout — high priority */}
        <div className="mt-4">
          <CalloutBox
            variant="info"
            title="Daily Loss Limit (DLL) — EOD בלבד"
            accountType="eod"
            source={S.DAILY_LOSS_LIMIT}
            body={
              <div className="space-y-2">
                <p>
                  בחשבונות <span dir="ltr">EOD</span> קיים{" "}
                  <span dir="ltr">Daily Loss Limit</span> — מגבלת הפסד יומית
                  כוללת (ממומש ובלתי-ממומש).
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>
                    פגיעה ב-<span dir="ltr">DLL</span>: המסחר נעצר לשארית היום
                    — המבחן לא נכשל. חוזרים לסחור בסשן הבא.
                  </strong>
                </p>
                <p style={{ color: "var(--text-muted)" }}>
                  במבחן <span dir="ltr">Intraday</span> אין{" "}
                  <span dir="ltr">DLL</span> — אך ב-
                  <span dir="ltr">Intraday PA</span> קיים{" "}
                  <span dir="ltr">DLL</span> לפי רמות.
                </p>
              </div>
            }
          />
        </div>

        <div className="mt-6">
          <CalloutBox
            variant="warning"
            title="הוראות תלויות — שימו לב"
            source={S.CLOSE_459}
            body="הוראות מחוברות לפוזיציה (Attached Orders), כמו סטופ/לימיט, נסגרות יחד עם הפוזיציה. הוראות עצמאיות (Standing Orders) לא נסגרות לבד – צריך לבטל אותן ידנית לפני 4:59 PM ET (בדרך כלל 23:59 בישראל, תלוי בשעון קיץ). כדי לא לטעות, מומלץ לעבוד לפי השעה ET שמופיעה במסמכי Apex."
          />
        </div>

        <div className="mt-8">
          <Button
            label="פתח מבחן EOD עם קוד TLHCODE"
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
        rightLabel="← שלב המבחן"
        leftLabel="שלב ה-PA ←"
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
            title="רשת ביטחון (Safety Net) – בשלושת התשלומים הראשונים"
            icon={ShieldAlert}
            accountType="eod-pa"
            source={S.SAFETY_NET}
            body={
              <>
                <p>
                  ב-3 התשלומים הראשונים, יתרת החשבון אחרי המשיכה חייבת
                  להישאר מעל: <strong>יתרה התחלתית + רף הפסד + <span dir="ltr">$100</span></strong>.
                </p>
                <p className="mt-2">
                  מהתשלום הרביעי ואילך — רשת הביטחון לא חלה.
                </p>
                <p className="mt-2" style={{ color: "var(--text-muted)" }}>
                  חריג: אם יש לפחות <span dir="ltr">$500</span> מעל הרף — אפשר לבקש תשלום מינימלי של <span dir="ltr">$500</span>.
                </p>
              </>
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
            title="DLL לפי רמות (Tier) — EOD PA"
            accountType="eod-pa"
            source={S.EOD_PA}
            body={
              <div className="space-y-2">
                <p>
                  ב-<span dir="ltr">EOD PA</span> יש{" "}
                  <span dir="ltr">DLL</span>, והוא נקבע לפי רמת החשבון. כשעולים רמה ה-<span dir="ltr">DLL</span> יכול לגדול, ואם יורדים רמה הוא יכול להצטמצם — אבל לא ירד מתחת לרמה הבסיסית.
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  הנתונים והרמות עשויים להשתנות. מומלץ לבדוק ישירות ב-<span dir="ltr">Apex</span> לפני החלטות מסחר.
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
