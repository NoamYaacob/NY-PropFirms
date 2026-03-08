import type { Metadata } from "next";
import { TrendingUp, ShieldAlert, Wallet, Users, Clock } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { S } from "@/lib/sources";
import { PayoutTablesWidget } from "@/components/ui/PayoutTablesWidget";

export const metadata: Metadata = {
  title: "תשלומים — כללי PA | NY Prop Firms",
  description: "כללי תשלום PA של Apex: עקביות 50%, רשת ביטחון, חלוקת רווחים, 6 תשלומים לחשבון",
};


const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "min-days",
    trigger: "כמה ימי מסחר נדרשים לפני בקשת תשלום?",
    content: "על EOD PA נדרשים לפחות 5 ימי מסחר כשירים — ימים שבוצעה בהם לפחות עסקה אחת. סכום הבקשה המינימלי: $500.",
  },
  {
    id: "second-payout",
    trigger: "האם אפשר לבקש תשלום שני מאותו PA?",
    content: "כן — אפשר לבקש עד 6 תשלומים מאותו PA. לאחר התשלום ה-6 החשבון נסגר.",
  },
  {
    id: "after-6",
    trigger: "מה קורה אחרי 6 תשלומים?",
    content: "החשבון נסגר אוטומטית. יש לפתוח מבחן חדש ולעבור אותו כדי לקבל PA חדש.",
  },
  {
    id: "losing-days",
    trigger: "האם ימי הפסד פוגעים בחוק עקביות 50%?",
    content: "לא. ימי הפסד לא נכללים בחישוב העקביות — רק ימים רווחיים.",
  },
  {
    id: "20-pa",
    trigger: "מה קורה אם יש לי יותר מ-20 חשבונות PA?",
    content: "אם חורגים מ-20 חשבונות פעילים — בקשות תשלום נחסמות בכולם עד שמספרם יורד ל-20 ומטה.",
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
                    <span dir="ltr">DLL</span> היא מגבלת הפסד יומי. הרף קבוע
                    לסשן ומנוטר בזמן אמת על כל ההון (ממומש ובלתי-ממומש). אם
                    מגיעים אליו — פוזיציות נסגרות אוטומטית, המסחר נעצר עד
                    סוף אותו יום מסחר. החשבון לא נפסל — חוזרים לסחור מ-<span dir="ltr">6:00 PM ET</span>.
                    ה-<span dir="ltr">DLL</span> מתאפס עם פתיחת כל סשן.
                  </p>
                  <p>
                    במבחן <span dir="ltr">EOD</span> יש{" "}
                    <span dir="ltr">DLL</span> קבוע. במבחן{" "}
                    <span dir="ltr">Intraday</span> אין{" "}
                    <span dir="ltr">DLL</span>. ב-<span dir="ltr">PA</span>{" "}
                    יש <span dir="ltr">DLL</span> לפי <span dir="ltr">Tier</span> — יכול לגדול עם עליית <span dir="ltr">Tier</span>,
                    אך לא ירד מתחת ל-<span dir="ltr">Level 1</span>.
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
          title="חוק עקביות 50% (Consistency)"
          icon={TrendingUp}
          accountType="pa"
          source={S.CONSISTENCY_50}
          body={
            <>
              <p>
                היום הרווחי ביותר שלך חייב להיות <strong>פחות מ-50%</strong> מסך
                הרווח הכולל.
              </p>
              <p className="mt-2">
                כל עוד עברת 50%, כפתור בקשת התשלום לא זמין.
                ברגע שהיחס יורד מתחת ל-50% — אפשר לבקש תשלום.
              </p>
              <p className="mt-2" style={{ color: "var(--green-400)" }}>
                ✅ ימי הפסד לא נכללים בחישוב — רק ימים רווחיים.
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
                  100% לסוחר
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  על <span dir="ltr">$25,000</span> הרווחים הראשונים לחשבון
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
                  90% לסוחר / 10% ל-Apex
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  על כל רווח מעל <span dir="ltr">$25,000</span>
                </p>
              </div>
            </div>
          }
        />

        <RuleCard
          title="רשת ביטחון לפי גודל חשבון"
          icon={ShieldAlert}
          accountType="pa"
          source={S.EOD_PAYOUTS}
          body={
            <div>
              <p className="text-sm mb-1" style={{ color: "var(--text-secondary)" }}>
                רף ההפסד של החשבון בתוספת <span dir="ltr">$100</span>
              </p>
              <table className="w-full text-sm border-collapse mb-1">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                    <th className="text-right py-1.5 font-medium" style={{ color: "var(--text-muted)" }}>גודל חשבון</th>
                    <th className="text-right py-1.5 font-medium" style={{ color: "var(--text-muted)" }}>רשת ביטחון</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "$25K", net: "$26,100" },
                    { size: "$50K", net: "$52,100" },
                    { size: "$100K", net: "$103,100" },
                    { size: "$150K", net: "$154,100" },
                  ].map((row) => (
                    <tr key={row.size} style={{ borderBottom: "1px solid var(--surface-border)" }}>
                      <td className="py-1.5" dir="ltr">{row.size}</td>
                      <td className="py-1.5 font-semibold" dir="ltr" style={{ color: "var(--teal-400)" }}>{row.net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                רשת הביטחון נשארת בתוקף לאורך כל חיי חשבון ה-PA. רק רווח שמעל רשת הביטחון ניתן למשיכה.
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                סכומי רשת הביטחון משתנים לפי גודל החשבון.
              </p>
            </div>
          }
        />

        <RuleCard
          title="מגבלת 20 חשבונות PA פעילים"
          icon={Users}
          accountType="pa"
          source={S.PAYOUT_RULES}
          body="לסוחר מותר להחזיק עד 20 חשבונות PA פעילים בו-זמנית. חריגה מגבול זה חוסמת בקשות תשלום בכל החשבונות עד שהמספר יורד מתחת ל-20."
        />

        <RuleCard
          title="תנאי מינימום לבקשת תשלום"
          icon={Clock}
          accountType="eod-pa"
          source={S.EOD_PAYOUTS}
          body={
            <>
              <p>
                לבקשת תשלום מ-EOD PA נדרשים לפחות{" "}
                <strong>5 ימי מסחר כשירים</strong> — ימים שבוצעה בהם לפחות עסקה אחת.
              </p>
              <p className="mt-2">
                סכום הבקשה חייב להיות לפחות <strong><span dir="ltr">$500</span></strong>.
              </p>
              <p className="mt-2" style={{ color: "var(--text-muted)" }}>
                וגם חוק עקביות 50% חייב להתקיים בעת הבקשה.
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

    </div>
  );
}
