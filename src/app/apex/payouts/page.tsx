import type { Metadata } from "next";
import { TrendingUp, ShieldAlert, Wallet, Users, Clock } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { S } from "@/lib/sources";
import { PayoutTablesWidget } from "@/components/ui/PayoutTablesWidget";

export const metadata: Metadata = {
  title: "תשלומים — כללי PA | NY Prop Firms",
  description: "כללי תשלום PA של Apex: Consistency 50%, Safety Net, חלוקת רווחים, 6 תשלומים לחשבון",
};

const APEX_URL = "https://apextraderfunding.com";


const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "min-days",
    trigger: "כמה ימי מסחר נדרשים לפני בקשת תשלום?",
    content: "על EOD PA נדרשים לפחות 5 ימי מסחר מאפיינים (Qualifying Trading Days) — ימים שבוצעה בהם לפחות עסקה אחת. בנוסף, סכום הבקשה חייב להיות לפחות $500.",
  },
  {
    id: "second-payout",
    trigger: "האם אפשר לבקש תשלום שני מאותו PA?",
    content: "כן — ניתן לבקש עד 6 תשלומים מאותו PA. לאחר התשלום ה-6 החשבון נסגר.",
  },
  {
    id: "after-6",
    trigger: "מה קורה אחרי 6 תשלומים?",
    content: "החשבון נסגר אוטומטית. יש לפתוח מבחן חדש ולעבור אותו כדי לקבל PA חדש.",
  },
  {
    id: "losing-days",
    trigger: "האם ימי הפסד פוגעים בכלל ה-50%?",
    content: "לא. ימי הפסד אינם נכללים בחישוב ה-Consistency. רק ימים רווחיים נלקחים בחשבון.",
  },
  {
    id: "20-pa",
    trigger: "מה קורה אם יש לי יותר מ-20 חשבונות PA?",
    content: "החריגה מ-20 חשבונות פעילים חוסמת את האפשרות לבקש תשלומים בכולם — עד שמספר החשבונות יורד מתחת ל-20.",
  },
];

export default function PayoutsPage() {
  return (
    <div className="container-page py-12">
      <nav className="text-sm mb-6 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
        <a href="/apex" className="hover:text-[var(--text-secondary)]">Apex</a>
        <span>/</span>
        <span style={{ color: "var(--text-secondary)" }}>תשלומים</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
        תשלומים — כללי PA הנוכחיים
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
        כללים אלו חלים על EOD PA ועל Intraday PA — כל כלל מקושר למקורו.
      </p>

      <CalloutBox
        variant="info"
        body="כל הכללים בדף זה מבוססים על מסמכי Apex הרשמיים הקיימים כרגע. כל כלל מקושר למקורו."
        source={S.PAYOUT_RULES}
      />

      {/* DLL explainer — compact accordion above payout tables */}
      <div className="mt-4 mb-2">
        <Accordion
          items={[
            {
              id: "what-is-dll",
              trigger: "מה זה DLL (Daily Loss Limit)?",
              content: (
                <div className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <p>
                    <span dir="ltr">DLL</span> הוא גבול הפסד יומי. אם מגיעים
                    אליו, המערכת סוגרת פוזיציות ועוצרת מסחר לשארית היום.
                    החשבון לא נפסל — חוזרים לסחור בסשן הבא.
                  </p>
                  <p>
                    במבחן <span dir="ltr">EOD</span> יש{" "}
                    <span dir="ltr">DLL</span> קבוע לסשן. במבחן{" "}
                    <span dir="ltr">Intraday</span> אין{" "}
                    <span dir="ltr">DLL</span>. ב-<span dir="ltr">PA</span>{" "}
                    קיים <span dir="ltr">DLL</span>, והוא יכול להשתנות לפי
                    טיירים בהתאם להתקדמות החשבון.
                  </p>
                  <a
                    href={S.DAILY_LOSS_LIMIT.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs hover:underline"
                    style={{ color: "var(--teal-400)" }}
                  >
                    {S.DAILY_LOSS_LIMIT.title} ↗
                  </a>
                </div>
              ),
            },
          ]}
        />
      </div>

      <PayoutTablesWidget />

      {/* Main rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <RuleCard
          title="כלל ה-50% Consistency"
          icon={TrendingUp}
          accountType="pa"
          source={S.CONSISTENCY_50}
          body={
            <>
              <p>
                יומך הרווחי ביותר חייב להוות <strong>פחות מ-50%</strong> מסך
                הרווח הצבור.
              </p>
              <p className="mt-2">
                כל עוד יחס זה גבוה מ-50%, כפתור בקשת התשלום אינו זמין.
                ברגע שהיחס יורד מתחת ל-50% — ניתן לבקש תשלום.
              </p>
              <p className="mt-2" style={{ color: "var(--green-400)" }}>
                ✅ ימי הפסד אינם נכללים בחישוב — רק ימים רווחיים.
              </p>
            </>
          }
        />

        <RuleCard
          title="מבנה חלוקת הרווחים"
          icon={Wallet}
          accountType="pa"
          source={S.EOD_PAYOUTS}
          body={
            <div className="space-y-3">
              <div
                className="rounded-lg p-3"
                style={{
                  backgroundColor: "var(--gold-900)",
                  border: "1px solid var(--gold-edge)",
                }}
              >
                <p className="font-semibold" style={{ color: "var(--gold-300)" }}>
                  100% לטריידר
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  על $25,000 הרווחים הראשונים לחשבון
                </p>
              </div>
              <div
                className="rounded-lg p-3"
                style={{
                  backgroundColor: "var(--surface-overlay)",
                  border: "1px solid var(--surface-border)",
                }}
              >
                <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  90% לטריידר / 10% ל-Apex
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  על כל רווח מעל $25,000
                </p>
              </div>
            </div>
          }
        />

        <RuleCard
          title="Safety Net — 3 תשלומים ראשונים"
          icon={ShieldAlert}
          accountType="pa"
          source={S.SAFETY_NET}
          body={
            <div>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                    <th className="text-right py-1.5 font-medium" style={{ color: "var(--text-muted)" }}>תשלום</th>
                    <th className="text-right py-1.5 font-medium" style={{ color: "var(--text-muted)" }}>חל Safety Net?</th>
                  </tr>
                </thead>
                <tbody>
                  {["תשלום 1", "תשלום 2", "תשלום 3"].map((t) => (
                    <tr key={t} style={{ borderBottom: "1px solid var(--surface-border)" }}>
                      <td className="py-1.5">{t}</td>
                      <td className="py-1.5" style={{ color: "var(--amber-400)" }}>✅ כן</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-1.5">תשלום 4+</td>
                    <td className="py-1.5" style={{ color: "var(--green-400)" }}>❌ לא</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                חריג: אם יש לפחות $500 מעל רמת ה-Safety Net, ניתן לבקש תשלום מינימלי זה.
              </p>
            </div>
          }
        />

        <RuleCard
          title="מגבלת 20 חשבונות PA פעילים"
          icon={Users}
          accountType="pa"
          source={S.PAYOUT_RULES}
          body="לטריידר מותר להחזיק עד 20 חשבונות PA פעילים בו-זמנית. חריגה מגבולה זו חוסמת בקשות תשלום בכל החשבונות עד שהמספר יורד מתחת ל-20."
        />

        <RuleCard
          title="תנאי מינימום לבקשת תשלום"
          icon={Clock}
          accountType="eod-pa"
          source={S.EOD_PAYOUTS}
          body={
            <>
              <p>
                לפני הגשת בקשת תשלום ב-EOD PA נדרשים לפחות{" "}
                <strong>5 ימי מסחר מאפיינים</strong> — ימים שבוצעה בהם לפחות עסקה אחת.
              </p>
              <p className="mt-2">
                סכום הבקשה חייב להיות לפחות <strong>$500</strong>.
              </p>
              <p className="mt-2" style={{ color: "var(--text-muted)" }}>
                בנוסף, כלל ה-50% Consistency חייב להיות מתקיים ברגע הבקשה.
              </p>
            </>
          }
        />
      </div>

      {/* 6-payout timeline */}
      <div className="mt-8 card p-6">
        <h3 className="font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
          מגבלת 6 תשלומים לחשבון — EOD PA ו-Intraday PA
        </h3>
        <TimelineStrip
          steps={[
            { label: "תשלום 1" },
            { label: "תשלום 2" },
            { label: "תשלום 3" },
            { label: "תשלום 4" },
            { label: "תשלום 5" },
            { label: "PA נסגר", variant: "closure" },
          ]}
        />
        <p className="text-sm mt-4" style={{ color: "var(--text-secondary)" }}>
          לאחר התשלום ה-6 המאושר, החשבון נסגר אוטומטית. יש לעבור מבחן
          חדש כדי לפתוח PA חדש.
        </p>
        <div className="flex gap-3 mt-3 flex-wrap">
          <a href={S.EOD_PAYOUTS.href} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: "var(--teal-400)" }}>
            {S.EOD_PAYOUTS.title} ↗
          </a>
          <a href={S.INTRADAY_PAYOUTS.href} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: "var(--teal-400)" }}>
            {S.INTRADAY_PAYOUTS.title} ↗
          </a>
        </div>
      </div>

      {/* FAQ */}
      <SectionDivider variant="section" />
      <section>
        <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          שאלות נפוצות על תשלומים
        </h2>
        <Accordion items={FAQ_ITEMS} />
      </section>

      {/* CTA */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <CouponChip size="sm" />
        <Button label="פתח מבחן ב-Apex" href={APEX_URL} variant="primary" external />
      </div>
    </div>
  );
}
