import type { Metadata } from "next";
import { Activity, Clock, ShieldAlert, Wallet, TrendingUp } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { S } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Apex Intraday — מבחן ו-PA | NY Prop Firms",
  description: "כללי חשבון Intraday של Apex: רף הפסד נגרר, ללא DLL במבחן, DLL לפי רמות ב-PA, עקביות 50%, רשת ביטחון ועוד",
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
        Apex Intraday — כללי המבחן וחשבון מימון
      </h1>
      <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
        כל הכללים מבוססים על מסמכי Apex הרשמיים הקיימים כרגע.
      </p>

      {/* Key differences callout at top */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            <span dir="ltr">Daily Loss Limit</span> — מבחן
          </p>
          <p className="font-bold" style={{ color: "var(--green-400)" }}>
            אין <span dir="ltr">DLL</span> ❌
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            ב-<span dir="ltr">PA Intraday</span> יש <span dir="ltr">DLL</span>
          </p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>שיטת Drawdown (רף הפסד)</p>
          <p className="font-bold" style={{ color: "var(--teal-400)" }}>רף הפסד נגרר (Trailing) בזמן אמת</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>תקופת שימוש</p>
          <p className="font-bold" style={{ color: "var(--text-primary)" }}>30 יום</p>
        </div>
      </div>

      {/* ── EVALUATION ─────────────────────────────────────────── */}
      <section id="evaluation">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--gold-300)" }}>
          שלב המבחן — Intraday Evaluation
        </h2>

        {/* No DLL — prominent */}
        <CalloutBox
          variant="success"
          title="אין Daily Loss Limit — מבחן Intraday בלבד"
          accountType="intraday"
          source={S.INTRADAY_EVALUATIONS}
          body={
            <p>
              בשלב המבחן, חשבונות <span dir="ltr">Intraday</span> לא כפופים
              ל-<span dir="ltr">Daily Loss Limit</span>. כל ניהול הסיכון
              נעשה דרך רף הפסד נגרר בלבד —
              אין מגבלת הפסד יומית.{" "}
              <strong>
                שימו לב: ב-<span dir="ltr">Intraday PA</span> יש{" "}
                <span dir="ltr">DLL</span> לפי רמות.
              </strong>
            </p>
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
                  בזמן אמת, כולל רווחים פתוחים (Unrealized PnL).
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
            title="תקופת שימוש — חשבון מבחן"
            icon={Clock}
            accountType="intraday"
            source={S.EVALUATION_FEES}
            body="רכישה חד-פעמית ל-30 יום. אין חיוב חודשי ואין חידוש אוטומטי. בסוף 30 הימים החשבון נסגר אוטומטית — ואין אפשרות להאריך."
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
                  הוראות שמחוברות לפוזיציה (Attached Orders), כמו סטופ/לימיט, נסגרות יחד עם הפוזיציה.
                  הוראות עצמאיות (Standing Orders) לא נסגרות לבד – צריך לבטל אותן ידנית לפני <span dir="ltr">4:59 PM ET</span> (בדרך כלל 23:59 בישראל, תלוי בשעון קיץ).
                </p>
                <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  כדי לא לטעות, מומלץ לעבוד לפי השעה ET שמופיעה במסמכי Apex.
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
            body="הוראות מחוברות לפוזיציה (Attached Orders), כמו סטופ/לימיט, נסגרות יחד עם הפוזיציה. הוראות עצמאיות (Standing Orders) לא נסגרות לבד – צריך לבטל אותן ידנית לפני 4:59 PM ET (בדרך כלל 23:59 בישראל, תלוי בשעון קיץ). כדי לא לטעות, מומלץ לעבוד לפי השעה ET שמופיעה במסמכי Apex."
          />
        </div>

        <div className="mt-8">
          <Button
            label="פתח מבחן Intraday עם קוד TLHCODE"
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
        rightLabel="← שלב המבחן"
        leftLabel="שלב ה-PA ←"
      />

      {/* ── PA SECTION ─────────────────────────────────────────── */}
      <section id="pa">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--teal-400)" }}>
          שלב ה-PA — Intraday Performance Account
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
            title="רשת ביטחון (Safety Net) – בשלושת התשלומים הראשונים"
            icon={ShieldAlert}
            accountType="intraday-pa"
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
              </>
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
                  <strong style={{ color: "var(--gold-300)" }}>100% לסוחר</strong> על $25,000 הרווחים הראשונים.
                </p>
                <p className="mt-2">
                  <strong>90% לסוחר / 10% ל-Apex</strong> על כל רווח מעל $25,000.
                </p>
              </>
            }
          />

          <RuleCard
            title="מגבלת 20 חשבונות PA"
            icon={ShieldAlert}
            accountType="pa"
            source={S.PAYOUT_RULES}
            body="לסוחר מותר להחזיק עד 20 חשבונות PA פעילים בו-זמנית. חריגה ממגבלה זו חוסמת בקשות תשלום."
          />
        </div>

        {/* DLL in Intraday PA — tier-based */}
        <div className="mt-4">
          <CalloutBox
            variant="info"
            title="DLL לפי רמות (Tier) — Intraday PA"
            accountType="intraday-pa"
            source={S.INTRADAY_PA}
            body={
              <div className="space-y-2">
                <p>
                  ב-<span dir="ltr">Intraday PA</span> יש <span dir="ltr">DLL</span> – בניגוד למבחן שבו אין <span dir="ltr">DLL</span>. ה-<span dir="ltr">DLL</span> נקבע לפי רמת החשבון. כשעולים רמה הוא יכול לגדול, ואם יורדים רמה הוא יכול להצטמצם — אבל לא ירד מתחת לרמה הבסיסית.
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
            <a href={S.INTRADAY_PAYOUTS.href} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: "var(--teal-400)" }}>
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
