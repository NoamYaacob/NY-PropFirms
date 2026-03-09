import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { Sunset, Activity, ArrowLeft } from "lucide-react";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { ComparisonBlock, ComparisonRow } from "@/components/ui/ComparisonBlock";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";

export const metadata: Metadata = {
  title: "Apex Trader Funding בעברית — כל הכללים | NY Prop Firms",
  description:
    "מדריך מקיף בעברית לכל כללי Apex Trader Funding: השוואת EOD מול Intraday, כללי PA, תשלומים, DLL ו-Tier — במקום אחד.",
  alternates: { canonical: "https://ny-propfirms.com/apex" },
  openGraph: {
    title: "Apex Trader Funding בעברית — כל הכללים | NY Prop Firms",
    description:
      "מדריך מקיף בעברית לכל כללי Apex Trader Funding: השוואת EOD מול Intraday, כללי PA, תשלומים, DLL ו-Tier — במקום אחד.",
    url: "https://ny-propfirms.com/apex",
  },
};

const APEX_URL = "https://apextraderfunding.com";

const NAV_CARDS = [
  {
    icon: Sunset,
    title: "EOD — שלב ה-PA",
    description: "DLL לפי Tier, רשת ביטחון ותשלומים",
    href: "/apex/eod#pa",
    color: "#7EA0FF",
    badge: "PA",
  },
  {
    icon: Sunset,
    title: "EOD — שלב המבחן",
    description: "סטופ יומי, רף הפסד בסוף יום ומעבר מבחן",
    href: "/apex/eod#evaluation",
    color: "#7EA0FF",
    badge: "מבחן",
  },
  {
    icon: Activity,
    title: "Intraday — שלב ה-PA",
    description: "DLL לפי Tier, רף הפסד נגרר ותשלומים",
    href: "/apex/intraday#pa",
    color: "var(--teal-400)",
    badge: "PA",
  },
  {
    icon: Activity,
    title: "Intraday — שלב המבחן",
    description: "אין סטופ יומי, רף הפסד נגרר ומעבר מבחן",
    href: "/apex/intraday#test",
    color: "var(--teal-400)",
    badge: "מבחן",
  },
];

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "סטופ יומי בבחינה",
    eodValue: <span style={{ color: "var(--green-400)" }}>יש ✅</span>,
    intradayValue: <span style={{ color: "var(--red-400)" }}>אין ❌</span>,
  },
  {
    feature: "סטופ יומי ב-PA",
    eodValue: "יש לפי Tier",
    intradayValue: "יש לפי Tier",
  },
  {
    feature: "רף הפסד",
    eodValue: "רף הפסד בסוף יום",
    intradayValue: "רף הפסד נגרר",
  },
  {
    feature: "מה קורה בפגיעה",
    eodValue: "המסחר נעצר לאותו יום",
    intradayValue: "אין פגיעה יומית, רק רף הפסד נגרר",
  },
  {
    feature: "חוק עקביות ב-PA",
    eodValue: "50% מהרווח היומי הגבוה ביותר",
    intradayValue: "50% מהרווח היומי הגבוה ביותר",
  },
  {
    feature: "מספר תשלומים מקסימלי",
    eodValue: "6 תשלומים לחשבון",
    intradayValue: "6 תשלומים לחשבון",
  },
];

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "eval-vs-pa",
    trigger: "מה ההבדל בין מבחן ל-PA?",
    content: (
      <div className="space-y-2">
        <p>
          <strong style={{ color: "var(--text-primary)" }}>מבחן:</strong>{" "}
          שלב המעבר לפני קבלת חשבון PA. יש לו תקופת גישה של 30 יום.
        </p>
        <p>
          <strong style={{ color: "var(--text-primary)" }}>PA:</strong>{" "}
          חשבון מדומה ממומן שנפתח אחרי מעבר המבחן, ובו אפשר לבקש תשלומים לפי הכללים.
        </p>
      </div>
    ),
  },
  {
    id: "eod-vs-intraday",
    trigger: "מה ההבדל בין EOD ל-Intraday?",
    content: (
      <div className="space-y-2">
        <p>במבחן <span dir="ltr">EOD</span> יש סטופ יומי, ובמבחן <span dir="ltr">Intraday</span> אין.</p>
        <p>ב-<span dir="ltr">PA</span> של שני המסלולים יש <span dir="ltr">DLL</span> לפי <span dir="ltr">Tier</span>.</p>
        <p>ב-<span dir="ltr">Intraday PA</span> יש גם רף הפסד נגרר בזמן אמת.</p>
      </div>
    ),
  },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "בית", item: "https://ny-propfirms.com/" },
    { "@type": "ListItem", position: 2, name: "Apex", item: "https://ny-propfirms.com/apex" },
  ],
};

export default function ApexHubPage() {
  return (
    <div className="container-page py-12">
      <JsonLd data={BREADCRUMB_JSONLD} />
      <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        Apex — כל הכללים במקום אחד
      </h1>
      <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
        מבחן, PA, תשלומים, DLL, Tier ורשת ביטחון
      </p>

      <CalloutBox
        variant="info"
        title="חשוב לדעת"
        body="האתר מתייחס רק למוצרים החדשים של Apex: EOD ו-Intraday. המוצרים הישנים (Legacy) לא מוצגים כאן כמסלולים פעילים או רלוונטיים לפתיחה חדשה."
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
            <div className="flex flex-col flex-1 min-w-0">
              <span
                className="font-medium group-hover:text-[var(--gold-300)] transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                {card.title}
              </span>
              <span className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                {card.description}
              </span>
            </div>
            <span
              className="text-xs px-2 py-0.5 rounded-full shrink-0"
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
        <ComparisonBlock rows={COMPARISON_ROWS} showSources={false} />
      </section>

      {/* DLL + Tier explanation */}
      <section className="mb-12 space-y-4">
        <CalloutBox
          variant="info"
          title="סטופ יומי (DLL)"
          body="הסטופ היומי הוא מגבלת ההפסד המקסימלית לאותו יום מסחר. אם מגיעים אליו, הפוזיציות נסגרות אוטומטית והמסחר באותו תיק נעצר עד יום המסחר הבא."
        />
        <CalloutBox
          variant="info"
          title="מה זה DLL לפי Tier?"
          body="בחשבונות PA, ה-DLL נקבע לפי ה-Tier של החשבון. ה-Tier קובע גם את גודל ה-DLL וגם את מספר החוזים המקסימלי, ומתעדכן לפי יתרת סוף היום."
        />
      </section>

      {/* Page CTAs */}
      <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
        רוצים להתחיל? אפשר לפתוח מבחן דרך Apex ולהשתמש בקוד NOAM.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button label="פתח מבחן ב-Apex" href={APEX_URL} variant="primary" external />
        <CouponChip size="sm" />
      </div>
    </div>
  );
}
