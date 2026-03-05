import type { Metadata } from "next";
import { Activity, Clock, Gauge, BarChart2, ShieldAlert, Wallet, TrendingUp } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { SourcesList } from "@/components/ui/SourcesList";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { S } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Apex Intraday — הערכה ו-PA | NY Prop Firms",
  description: "כללי חשבון Intraday של Apex: Trailing Threshold, ללא DLL, Consistency 50%, Safety Net ועוד",
};

const APEX_URL = "https://apextraderfunding.com";

const PAGE_SOURCES = [
  S.INTRADAY_EVALUATIONS,
  S.EVALUATION_FEES,
  S.DAILY_LOSS_LIMIT,
  S.APEX_30_RULES,
  S.CONTRACT_SCALING,
  S.CLOSE_459,
  S.CONSISTENCY_50,
  S.SAFETY_NET,
  S.INTRADAY_PAYOUTS,
  S.PAYOUT_RULES,
];

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
        Apex Intraday — כללי הערכה וחשבון מימון
      </h1>
      <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
        כל הכללים מבוססים על מסמכי Apex הרשמיים הקיימים כרגע.
      </p>

      {/* Key differences callout at top */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Daily Loss Limit</p>
          <p className="font-bold" style={{ color: "var(--green-400)" }}>אין DLL ❌</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>שיטת Drawdown</p>
          <p className="font-bold" style={{ color: "var(--teal-400)" }}>Trailing בזמן אמת</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>גישה</p>
          <p className="font-bold" style={{ color: "var(--text-primary)" }}>30 ימי לוח</p>
        </div>
      </div>

      {/* ── EVALUATION ─────────────────────────────────────────── */}
      <section id="evaluation">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--gold-300)" }}>
          שלב ההערכה — Intraday Evaluation
        </h2>

        {/* No DLL — prominent */}
        <CalloutBox
          variant="success"
          title="אין Daily Loss Limit — Intraday בלבד"
          accountType="intraday"
          source={S.DAILY_LOSS_LIMIT}
          body="חשבונות Intraday אינם כפופים ל-Daily Loss Limit. כל ניהול הסיכון מתבצע דרך ה-Trailing Threshold בלבד — אין מגבלת הפסד יומית."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <RuleCard
            title="Trailing Threshold — בזמן אמת"
            icon={Activity}
            accountType="intraday"
            source={S.INTRADAY_EVALUATIONS}
            body={
              <>
                <p>
                  ה-Trailing Threshold עוקב אחרי <strong>שיא החשבון</strong>{" "}
                  בזמן אמת, כולל רווחים פתוחים (Unrealized PnL).
                </p>
                <p className="mt-2">
                  ה-Threshold עולה עם כל שיא חדש —{" "}
                  <strong>אך לעולם אינו יורד</strong>.
                </p>
                <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  Threshold = שיא החשבון (כולל רווחים פתוחים) פחות רמת ה-Drawdown
                </p>
              </>
            }
          />

          <RuleCard
            title="גישה לחשבון ההערכה"
            icon={Clock}
            accountType="intraday"
            source={S.EVALUATION_FEES}
            body="רכישה חד-פעמית של 30 ימי לוח. אין חיוב חודשי, אין חידוש אוטומטי. בתום 30 הימים החשבון נסגר ופג אוטומטית. אין אפשרות להאריך."
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
                  כל פוזיציה פתוחה חייבת להיסגר לפני 4:59. הוראות Unattached
                  (Standing Orders) <strong>חייבות לבטל ידנית</strong>.
                </p>
              </>
            }
          />

          <RuleCard
            title="יחס סיכון/תגמול — מקסימום 5:1"
            icon={Gauge}
            accountType="universal"
            source={S.APEX_30_RULES}
            body="ה-Stop Loss של כל עסקה אינו יכול לעלות על פי 5 מיעד הרווח של אותה עסקה."
          />
        </div>

        <CalloutBox
          variant="warning"
          title="הוראות תלויות — שימו לב"
          source={S.CLOSE_459}
          body="הוראות Unattached Standing Orders אינן נסגרות אוטומטית ב-4:59 PM ET — יש לבטל ידנית לפני המועד."
        />

        <div className="mt-8">
          <Button
            label="פתח הערכה Intraday עם קוד TLHCODE"
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
        rightLabel="← שלב ההערכה"
        leftLabel="שלב ה-PA ←"
      />

      {/* ── PA SECTION ─────────────────────────────────────────── */}
      <section id="pa">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--teal-400)" }}>
          שלב ה-PA — Intraday Performance Account
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RuleCard
            title="כלל ה-50% Consistency"
            icon={TrendingUp}
            accountType="intraday-pa"
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
                  ✅ ימי הפסד אינם נכללים בחישוב.
                </p>
              </>
            }
          />

          <RuleCard
            title="Safety Net — 3 התשלומים הראשונים"
            icon={ShieldAlert}
            accountType="intraday-pa"
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
                  <strong style={{ color: "var(--gold-300)" }}>100% לטריידר</strong> על $25,000 הרווחים הראשונים.
                </p>
                <p className="mt-2">
                  <strong>90% לטריידר / 10% ל-Apex</strong> על כל רווח מעל $25,000.
                </p>
              </>
            }
          />

          <RuleCard
            title="מגבלת 20 חשבונות PA"
            icon={ShieldAlert}
            accountType="pa"
            source={S.PAYOUT_RULES}
            body="לטריידר מותר להחזיק עד 20 חשבונות PA פעילים בו-זמנית. חריגה ממגבלה זו חוסמת בקשות תשלום."
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
            לאחר התשלום ה-6, החשבון נסגר אוטומטית. יש לפתוח הערכה חדשה.
          </p>
          <div className="mt-2">
            <a href={S.INTRADAY_PAYOUTS.href} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: "var(--teal-400)" }}>
              {S.INTRADAY_PAYOUTS.title} ↗
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <CouponChip size="sm" />
          <Button label="פתח הערכה ב-Apex" href={APEX_URL} variant="primary" external />
        </div>
      </section>

      <SectionDivider variant="section" />
      <SourcesList sources={PAGE_SOURCES} />
    </div>
  );
}
