import type { Metadata } from "next";
import Link from "next/link";
import { Sunset, Activity, Wallet, Shield, ArrowLeft } from "lucide-react";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { ComparisonBlock, ComparisonRow } from "@/components/ui/ComparisonBlock";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";

export const metadata: Metadata = {
  title: "Apex — כל הכללים | NY Prop Firms",
  description: "מרכז הכללים של Apex Trader Funding בעברית — EOD, Intraday, תשלומים, עמידה בכללים",
};

const APEX_URL = "https://apextraderfunding.com";

const NAV_CARDS = [
  { icon: Sunset, title: "EOD — שלב המבחן", href: "/apex/eod#evaluation", color: "#7EA0FF", badge: "מבחן" },
  { icon: Sunset, title: "EOD — שלב ה-PA", href: "/apex/eod#pa", color: "#7EA0FF", badge: "PA" },
  { icon: Activity, title: "Intraday — שלב המבחן", href: "/apex/intraday#test", color: "var(--teal-400)", badge: "מבחן" },
  { icon: Activity, title: "Intraday — שלב ה-PA", href: "/apex/intraday#pa", color: "var(--teal-400)", badge: "PA" },
];

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "סטופ יומי במבחן",
    eodValue: <span style={{ color: "var(--green-400)" }}>יש ✅</span>,
    intradayValue: <span style={{ color: "var(--red-400)" }}>אין ❌</span>,
  },
  {
    feature: "DLL ב-PA",
    eodValue: <span style={{ color: "var(--green-400)" }}>יש — Tier Based ✅</span>,
    intradayValue: <span style={{ color: "var(--green-400)" }}>יש — Tier Based ✅</span>,
  },
  {
    feature: "רף הפסד",
    eodValue: "בסוף יום",
    intradayValue: "נגרר",
  },
  {
    feature: "עקביות ב-PA",
    eodValue: "50% מיום הרווח",
    intradayValue: "50% מיום הרווח",
  },
  {
    feature: "תשלומים",
    eodValue: "עד 6",
    intradayValue: "עד 6",
  },
];

const MOBILE_COMPARISON: Array<{
  title: string;
  eod: { value: string; color?: string };
  intraday: { value: string; color?: string };
}> = [
  {
    title: "סטופ יומי במבחן",
    eod: { value: "יש", color: "var(--green-400)" },
    intraday: { value: "אין", color: "var(--red-400)" },
  },
  {
    title: "רף הפסד",
    eod: { value: "רף הפסד בסוף יום" },
    intraday: { value: "רף הפסד נגרר" },
  },
  {
    title: "מה קורה בפגיעה",
    eod: { value: "המסחר נעצר לאותו יום" },
    intraday: { value: "אין פגיעה יומית — רק רף הפסד נגרר" },
  },
  {
    title: "חוק עקביות ב-PA",
    eod: { value: "50% מהרווח היומי הגבוה ביותר" },
    intraday: { value: "50% מהרווח היומי הגבוה ביותר" },
  },
  {
    title: "מספר תשלומים מקסימלי",
    eod: { value: "6 תשלומים לחשבון" },
    intraday: { value: "6 תשלומים לחשבון" },
  },
];

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "eval-vs-pa",
    trigger: "מה ההבדל בין מבחן ל-PA?",
    content: (
      <div className="space-y-2">
        <p><strong style={{ color: "var(--text-primary)" }}>מבחן (<span dir="ltr">Evaluation</span>):</strong> השלב שבו מוכיחים עמידה בכללי Apex. תשלום חד-פעמי ל-30 ימים, ללא חיוב חודשי וללא חידוש אוטומטי.</p>
        <p><strong style={{ color: "var(--text-primary)" }}>חשבון PA (<span dir="ltr">Performance Account</span>):</strong> חשבון המימון שנפתח אחרי שעוברים את המבחן. בשלב הזה אפשר לבקש תשלומים על רווחים.</p>
      </div>
    ),
  },
  {
    id: "eod-vs-intraday",
    trigger: "מה ההבדל בין EOD ל-Intraday?",
    content: (
      <div className="space-y-2">
        <p><strong style={{ color: "var(--text-primary)" }}><span dir="ltr">EOD</span> (<span dir="ltr">End of Day</span>):</strong> רף ההפסד מחושב פעם אחת בסוף יום המסחר ונשאר קבוע לאורך הסשן הבא. יש <span dir="ltr">DLL</span> — פגיעה בו עוצרת את המסחר לאותו יום, החשבון נשאר פעיל. ב-<span dir="ltr">PA</span> ה-<span dir="ltr">DLL</span> לפי <span dir="ltr">Tier</span>.</p>
        <p><strong style={{ color: "var(--text-primary)" }}><span dir="ltr">Intraday</span>:</strong> רף ההפסד הנגרר עוקב אחרי שיא החשבון בזמן אמת, כולל רווחים פתוחים. במבחן אין <span dir="ltr">DLL</span> — ב-<span dir="ltr">PA</span> יש <span dir="ltr">DLL</span> לפי <span dir="ltr">Tier</span>.</p>
      </div>
    ),
  },
];

export default function ApexHubPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        Apex Trader Funding — מרכז המידע
      </h1>
      <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
        כללי Apex – מסודרים לפי סוג חשבון.
      </p>

      <CalloutBox
        variant="info"
        title="חשוב לדעת לפני שמתחילים"
        body={"העמוד הזה עושה סדר בכללים לפי סוג חשבון. בכל סעיף יש קישור למקור הרשמי של Apex, כדי שתוכלו לבדוק גם שם."}
      />

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-12">
        {NAV_CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="card p-5 flex items-center gap-4 transition-all duration-200 hover:border-[var(--surface-border-strong)] hover:-translate-y-0.5 group"
          >
            <card.icon size={20} style={{ color: card.color, flexShrink: 0 }} />
            <span className="font-medium flex-1 group-hover:text-[var(--gold-300)] transition-colors" style={{ color: "var(--text-primary)" }}>
              {card.title}
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: "var(--surface-overlay)",
                color: "var(--text-muted)",
                border: "1px solid var(--surface-border)",
              }}
            >
              {card.badge}
            </span>
            <ArrowLeft size={15} style={{ color: "var(--text-muted)" }} />
          </Link>
        ))}
      </div>

      {/* Quick FAQ */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          שאלות בסיס
        </h2>
        <Accordion items={FAQ_ITEMS} />
      </section>

      {/* Full Comparison */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          EOD מול Intraday
        </h2>

        {/* Mobile: stacked comparison cards */}
        <div className="md:hidden space-y-3">
          {MOBILE_COMPARISON.map((card, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{
                border: "1px solid var(--surface-border)",
                backgroundColor: "var(--surface-raised)",
              }}
            >
              <div className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                {card.title}
              </div>
              <div className="space-y-2">
                {[
                  { label: "EOD", labelColor: "#7EA0FF", value: card.eod.value, color: card.eod.color },
                  { label: "Intraday", labelColor: "var(--teal-400)", value: card.intraday.value, color: card.intraday.color },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <span
                      className="shrink-0 text-xs font-semibold pt-0.5"
                      style={{ color: row.labelColor, minWidth: "52px" }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-xs leading-relaxed"
                      style={{ color: row.color ?? "var(--text-secondary)" }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block">
          <ComparisonBlock rows={COMPARISON_ROWS} showSources={false} compact />
        </div>
      </section>

      {/* DLL + Tier explanation */}
      <section className="mb-12 space-y-4">
        <CalloutBox
          variant="info"
          title="סטופ יומי (DLL)"
          body="הסטופ היומי הוא מגבלת ההפסד המקסימלית לאותו יום מסחר. אם מגיעים אליו, הפוזיציות נסגרות אוטומטית והמסחר נעצר עד הסשן הבא. החשבון נשאר פעיל. במבחן EOD יש DLL, במבחן Intraday אין DLL. ב-PA יש DLL לפי Tier."
        />
        <CalloutBox
          variant="info"
          title="מה זה Tier Based DLL?"
          body="בחשבונות PA, ה-DLL נקבע לפי ה-Tier של החשבון. ה-Tier קובע גם את גודל הסטופ היומי וגם את מספר החוזים המקסימלי. ה-Tier מתעדכן לפי יתרת סוף היום, חל על הסשן הבא, ולא משתנה תוך כדי יום מסחר. אם היתרה יורדת, ה-Tier יכול לרדת, אבל לא מתחת ל-Level 1."
        />
      </section>

      {/* Page CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <CouponChip size="sm" />
        <Button label="פתח מבחן ב-Apex" href={APEX_URL} variant="primary" external />
      </div>
    </div>
  );
}
