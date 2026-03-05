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
  description: "כללי חשבון EOD של Apex: Daily Loss Limit, Contract Scaling, Consistency 50%, Safety Net ועוד",
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
      <p className="text-base mb-10" style={{ color: "var(--text-secondary)" }}>
        כל הכללים מבוססים על מסמכי Apex הרשמיים הקיימים כרגע.
      </p>

      {/* ── EVALUATION ─────────────────────────────────────────── */}
      <section id="evaluation">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--gold-300)" }}>
          שלב המבחן — EOD Evaluation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RuleCard
            title="גישה לחשבון המבחן"
            icon={Clock}
            accountType="eod"
            source={S.EVALUATION_FEES}
            body={
              <p>
                כל מבחן הינו <strong>רכישה חד-פעמית</strong> של 30 ימי לוח.
                החשבון אינו מתחדש אוטומטית ואינו כולל חיובים חודשיים. עם
                סיום 30 הימים, החשבון נסגר ופג אוטומטית ב-11:59 PM ET ביום
                ה-30. אין אפשרות להאריך.
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
                  ניתן לפתוח עסקאות החל מ-<strong>6:00 PM ET</strong> ועד
                  <strong> 4:59 PM ET</strong> של היום הבא.
                </p>
                <p className="mt-2">
                  כל פוזיציה פתוחה חייבת להיסגר לפני 4:59 PM ET. הוראות
                  Attached נסגרות אוטומטית עם הפוזיציה — אך <strong>הוראות
                  Unattached (Standing Orders) חייבות לבטל ידנית</strong>.
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
                  בכניסה לחשבון מותר לסחור בחצי מכמות החוזים המקסימלית.
                </p>
                <p className="mt-2">
                  גישה לכמות המלאה ניתנת לאחר שיתרת ה-EOD תעלה מעל:{" "}
                  <strong>יתרה התחלתית + Drawdown מקסימלי + $100</strong>.
                  לאחר שהגישה נפתחת — היא נשארת פתוחה גם אם היתרה יורדת.
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
                  בחשבונות EOD קיים Daily Loss Limit — מגבלת הפסד יומית
                  כוללת (realized + unrealized).
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>
                    פגיעה ב-DLL: המסחר מושהה לשארית יום המסחר — המבחן לא
                    נכשל.
                  </strong>
                </p>
                <p>
                  ✅ <strong>חשבונות Intraday אינם כפופים ל-DLL כלל.</strong>
                </p>
              </div>
            }
          />
        </div>

        <CalloutBox
          variant="warning"
          title="הוראות תלויות — שימו לב"
          source={S.CLOSE_459}
          body="הוראות Attached Orders (Stop / Limit מחוברות לפוזיציה) נסגרות אוטומטית עם הפוזיציה. הוראות Unattached Standing Orders חייבות לבטל ידנית — הן אינן נסגרות אוטומטית עם 4:59 PM ET."
        />

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
            title="כלל ה-50% Consistency"
            icon={TrendingUp}
            accountType="eod-pa"
            source={S.CONSISTENCY_50}
            body={
              <>
                <p>
                  יומך הרווחי ביותר חייב להוות <strong>פחות מ-50%</strong>{" "}
                  מסך הרווח הצבור.
                </p>
                <p className="mt-2">
                  כל עוד יחס זה גבוה מ-50%, כפתור בקשת התשלום אינו זמין.
                </p>
                <p className="mt-2" style={{ color: "var(--green-400)" }}>
                  ✅ ימי הפסד אינם נכללים בחישוב — רק ימים רווחיים.
                </p>
              </>
            }
          />

          <RuleCard
            title="Safety Net — 3 התשלומים הראשונים"
            icon={ShieldAlert}
            accountType="eod-pa"
            source={S.SAFETY_NET}
            body={
              <>
                <p>
                  ב-3 התשלומים הראשונים, יתרת החשבון לאחר המשיכה חייבת
                  להישאר מעל: <strong>יתרה התחלתית + Drawdown + $100</strong>.
                </p>
                <p className="mt-2">
                  מהתשלום הרביעי ואילך — כלל ה-Safety Net אינו חל.
                </p>
                <p className="mt-2" style={{ color: "var(--text-muted)" }}>
                  חריג: אם יש לפחות $500 מעל הרף, ניתן לבקש את הסכום המינימלי הזה.
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
                    100% לטריידר
                  </strong>{" "}
                  על $25,000 הרווחים הראשונים לחשבון.
                </p>
                <p className="mt-2">
                  <strong>90% לטריידר / 10% ל-Apex</strong> על כל רווח מעל
                  $25,000.
                </p>
              </>
            }
          />

          <RuleCard
            title="מגבלת 20 חשבונות PA פעילים"
            icon={ShieldAlert}
            accountType="pa"
            source={S.PAYOUT_RULES}
            body="לטריידר מותר להחזיק עד 20 חשבונות PA פעילים בו-זמנית. חריגה ממגבלה זו חוסמת את האפשרות לבקש תשלומים."
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
