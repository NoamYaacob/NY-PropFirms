import type { Metadata } from "next";
import Link from "next/link";
import { Sunset, Activity, Wallet, Shield, ArrowLeft } from "lucide-react";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { ComparisonBlock, ComparisonRow } from "@/components/ui/ComparisonBlock";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { S } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Apex — כל הכללים | NY Prop Firms",
  description: "מרכז הכללים של Apex Trader Funding בעברית — EOD, Intraday, תשלומים, עמידה בכללים",
};

const APEX_URL = "https://apextraderfunding.com";

const NAV_CARDS = [
  { icon: Sunset, title: "EOD — שלב המבחן", href: "/apex/eod#evaluation", color: "#7EA0FF", badge: "מבחן" },
  { icon: Sunset, title: "EOD — שלב ה-PA", href: "/apex/eod#pa", color: "#7EA0FF", badge: "PA" },
  { icon: Activity, title: "Intraday — שלב המבחן", href: "/apex/intraday#evaluation", color: "var(--teal-400)", badge: "מבחן" },
  { icon: Activity, title: "Intraday — שלב ה-PA", href: "/apex/intraday#pa", color: "var(--teal-400)", badge: "PA" },
];

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Daily Loss Limit",
    eodValue: <span style={{ color: "var(--amber-400)" }}>יש DLL ✅</span>,
    intradayValue: <span style={{ color: "var(--green-400)" }}>אין DLL ❌</span>,
    source: S.DAILY_LOSS_LIMIT,
  },
  {
    feature: "שיטת Drawdown",
    eodValue: "חישוב בסוף יום",
    intradayValue: "Trailing בזמן אמת",
    source: S.INTRADAY_EVALUATIONS,
  },
  {
    feature: "תנאי Consistency (PA)",
    eodValue: "50% מהיום הרווחי ביותר",
    intradayValue: "50% מהיום הרווחי ביותר",
    source: S.CONSISTENCY_50,
  },
  {
    feature: "מספר תשלומים מקסימלי",
    eodValue: "6 תשלומים לחשבון",
    intradayValue: "6 תשלומים לחשבון",
    source: S.EOD_PAYOUTS,
  },
];

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "eval-vs-pa",
    trigger: "מה ההבדל בין מבחן ל-PA?",
    content: (
      <div className="space-y-2">
        <p><strong style={{ color: "var(--text-primary)" }}>מבחן (Evaluation):</strong> שלב שבו הסוחר מוכיח שהוא עומד בכללי Apex. תשלום חד-פעמי ל-30 יום. אין חיוב חודשי ואין חידוש אוטומטי.</p>
        <p><strong style={{ color: "var(--text-primary)" }}>PA (Performance Account):</strong> חשבון המימון שנפתח לאחר עמידה מוצלחת במבחן. בשלב זה הסוחר יכול לבקש תשלומים על רווחים.</p>
      </div>
    ),
  },
  {
    id: "eod-vs-intraday",
    trigger: "מה ההבדל בין EOD ל-Intraday?",
    content: (
      <div className="space-y-2">
        <p><strong style={{ color: "var(--text-primary)" }}>EOD (End of Day):</strong> ה-Drawdown מחושב פעם אחת בסיום כל יום מסחר. קיים Daily Loss Limit — פגיעה בו משהה מסחר ליום (לא פוסלת את המבחן).</p>
        <p><strong style={{ color: "var(--text-primary)" }}>Intraday:</strong> ה-Trailing Threshold עוקב אחרי שיא החשבון בזמן אמת, כולל רווחים פתוחים. במבחן אין Daily Loss Limit — ב-PA יש DLL לפי רמות.</p>
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
        כללי Apex כפי שמופיעים כיום במסמכים הרשמיים — מסודרים לפי סוג חשבון
      </p>

      <CalloutBox
        variant="info"
        title="חשוב לדעת לפני שמתחילים"
        body="המידע בדף זה מבוסס על כללי Apex כפי שמופיעים כיום במסמכי התמיכה הרשמיים. חלק מהכללים חלים על סוגי חשבונות שונים — ודאו שאתם קוראים את הדף המתאים לחשבון שלכם. כל כלל מקושר למקורו."
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
        <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          השוואה: EOD מול Intraday
        </h2>
        <ComparisonBlock rows={COMPARISON_ROWS} />
      </section>

      {/* Page CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <CouponChip size="sm" />
        <Button label="פתח מבחן ב-Apex" href={APEX_URL} variant="primary" external />
      </div>
    </div>
  );
}
