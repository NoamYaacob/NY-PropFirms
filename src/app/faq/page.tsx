import type { Metadata } from "next";
import Link from "next/link";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CouponChip } from "@/components/ui/CouponChip";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "שאלות נפוצות | NY Prop Firms",
  description: "תשובות לשאלות הנפוצות ביותר על Apex Trader Funding — בעברית",
};

const APEX_URL = "https://apextraderfunding.com";

const GENERAL: AccordionItem[] = [
  {
    id: "g1",
    trigger: "מה זה NY Prop Firms?",
    content: "אתר שמציג בעברית את כללי חברות הפרופ. אנחנו לא Apex Trader Funding, לא שותפים שלה ולא מייצגים אותה. המטרה: להציג בעברית את המידע הרשמי לציבור הסוחרים הישראלי.",
  },
  {
    id: "g2",
    trigger: "האם המידע כאן רשמי?",
    content: "כל כלל המופיע באתר זה מבוסס על מסמכי Apex הרשמיים ומקושר ישירות למקור. אנו לא מוסיפים פרשנות ולא ממליצים על אסטרטגיות מסחר.",
  },
  {
    id: "g3",
    trigger: "האם הכללים עשויים להשתנות?",
    content: "כן. אנו מציגים את הכללים כפי שמופיעים כיום במסמכי Apex. בדקו תמיד ישירות גם במרכז התמיכה של Apex לפני קבלת החלטות.",
  },
  {
    id: "g4",
    trigger: "לאיזה חברות פרופ אתר זה מתייחס?",
    content: "כרגע האתר מתמקד ב-Apex Trader Funding. תוכן על חברות נוספות יתווסף בהמשך.",
  },
];

const EVALUATION: AccordionItem[] = [
  {
    id: "e1",
    trigger: "כמה ימי מסחר צריך להשלים במבחן?",
    content: "בחשבונות הנוכחיים (EOD ו-Intraday): אין מינימום ימי מסחר. אפשר לעבור ברגע שמגיעים ליעד הרווח תוך שמירה על כל הכללים.",
  },
  {
    id: "e2",
    trigger: "מה ההבדל בין מגבלת הפסד יומי (DLL) לרף הפסד?",
    content: (
      <div className="space-y-2">
        <p><strong>רף הפסד (Drawdown):</strong> מגבלת הפסד כוללת לחשבון — אם נפגעת, המבחן נכשל.</p>
        <p><strong>מגבלת הפסד יומי (DLL):</strong> מגבלת הפסד יומית — פגיעה בה עוצרת את המסחר לאותו יום בלבד, לא פוסלת את המבחן. קיים רק בחשבונות EOD.</p>
        <p><strong>מבחן Intraday:</strong> אין DLL — אך ב-PA Intraday יש DLL לפי רמות.</p>
      </div>
    ),
  },
  {
    id: "e3",
    trigger: "האם הגישה למבחן מתחדשת?",
    content: "לא. המבחנים הנוכחיים הם תשלום חד-פעמי ל-30 ימים. לאחר 30 ימים החשבון נסגר. אין חידוש אוטומטי ואין אפשרות להאריך.",
  },
  {
    id: "e4",
    trigger: "מה ההבדל בין רף הפסד נגרר (Intraday) לבין רף ההפסד (EOD)?",
    content: (
      <div className="space-y-2">
        <p><strong>רף הפסד EOD:</strong> מחושב פעם אחת בסיום כל יום מסחר ונשאר קבוע לאורך יום המסחר הבא.</p>
        <p><strong>רף הפסד נגרר (Intraday):</strong> עוקב אחרי שיא החשבון בזמן אמת, כולל רווחים פתוחים (Unrealized PnL). עולה עם כל שיא חדש — ולעולם לא יורד.</p>
      </div>
    ),
  },
  {
    id: "e5",
    trigger: "מה קורה אם לא סגרתי פוזיציה לפני 4:59 PM ET?",
    content: "זו הפרת כלל — Apex עשויה לסגור את הפוזיציה אוטומטית, אך האחריות על סגירה בזמן היא של הסוחר. הפרות עלולות לפסול את המבחן.",
  },
  {
    id: "e6",
    trigger: "האם אפשר להשתמש ב-EA (Expert Advisor) במבחן?",
    content: "מסחר אוטומטי מותר אם לא מדובר ב-HFT ולא כולל שיתוף חשבון. מומלץ לאמת ישירות מול Apex לגבי EA ספציפי לפני השימוש.",
  },
];

const PA: AccordionItem[] = [
  {
    id: "p1",
    trigger: "מה זה חוק עקביות 50%?",
    content: "היום הרווחי ביותר שלך (Single Best Day) חייב להיות פחות מ-50% מסך הרווח הכולל. כל עוד עברת 50%, כפתור בקשת התשלום לא זמין.",
  },
  {
    id: "p2",
    trigger: "האם ימי הפסד פוגעים בחוק עקביות 50%?",
    content: "לא. ימי הפסד לא נכללים בחישוב. רק ימים רווחיים נלקחים בחשבון.",
  },
  {
    id: "p3",
    trigger: "מה קורה אחרי 6 תשלומים?",
    content: "החשבון נסגר אוטומטית. יש לפתוח מבחן חדש ולעבור אותו כדי לקבל PA חדש.",
  },
  {
    id: "p5",
    trigger: "מהו Safety Net ומתי הוא חל?",
    content: "רשת הביטחון (Safety Net) חלה ב-3 התשלומים הראשונים. היא מחייבת שיתרת החשבון לאחר המשיכה תישאר מעל רמה מינימלית. מהתשלום הרביעי ואילך הכלל לא חל.",
  },
  {
    id: "p6",
    trigger: "כמה חשבונות PA מותר להחזיק בו-זמנית?",
    content: "עד 20 חשבונות PA פעילים. חריגה מגבולה זו חוסמת בקשות תשלום בכל החשבונות.",
  },
];

const COUPON: AccordionItem[] = [
  {
    id: "c1",
    trigger: "מה זה קוד TLHCODE?",
    content: "קוד הנחה שאפשר להזין בעת פתיחת מבחן באתר Apex Trader Funding.",
  },
  {
    id: "c2",
    trigger: "איפה מזינים את הקוד?",
    content: "בדף התשלום של Apex, בשדה קוד הקופון / Promo Code. יש להזין לפני השלמת הרכישה.",
  },
  {
    id: "c3",
    trigger: "האם אפשר להוסיף את הקוד בדיעבד?",
    content: "לא — הקוד חייב להיות מוזן בעת הרכישה. לאחר השלמת התשלום אי אפשר להחיל אותו.",
  },
];

const TERMS: AccordionItem[] = [
  {
    id: "t1",
    trigger: "מה זה EOD?",
    content: "סוף יום (End of Day). סוג חשבון שרף ההפסד שלו מחושב פעם אחת בסיום יום המסחר ונשאר קבוע לאורך יום המסחר הבא.",
  },
  {
    id: "t2",
    trigger: "מה זה Intraday?",
    content: "חשבון עם רף הפסד נגרר שעוקב אחרי שיא החשבון בזמן אמת, כולל רווחים פתוחים. במבחן אין DLL — ב-PA יש.",
  },
  {
    id: "t3",
    trigger: "מה זה רף הפסד נגרר?",
    content: "רמת הפסד מקסימלית שזזה כלפי מעלה עם שיא החשבון — אך לעולם אינה יורדת. נפוצה בחשבונות Intraday.",
  },
  {
    id: "t4",
    trigger: "מה זה PA?",
    content: "חשבון מימון (Performance Account) שנפתח לאחר עמידה מוצלחת במבחן. בחשבון זה אפשר לבקש תשלומים על רווחים.",
  },
];

const CATEGORIES = [
  { id: "general", label: "כלליות", items: GENERAL },
  { id: "evaluation", label: "מבחן", items: EVALUATION },
  { id: "pa", label: "PA ותשלומים", items: PA },
  { id: "coupon", label: "קוד TLHCODE", items: COUPON },
  { id: "terms", label: "מונחים", items: TERMS },
];

export default function FAQPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        שאלות נפוצות
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
        תשובות לשאלות הנפוצות ביותר על Apex Trader Funding — בעברית
      </p>

      {/* Category anchors */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="text-sm px-4 py-1.5 rounded-full transition-colors hover:bg-[var(--surface-overlay)]"
            style={{
              backgroundColor: "var(--surface-raised)",
              border: "1px solid var(--surface-border)",
              color: "var(--text-secondary)",
            }}
          >
            {cat.label}
          </a>
        ))}
      </div>

      {CATEGORIES.map((cat, i) => (
        <section key={cat.id} id={cat.id} className="mb-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {cat.label}
          </h2>
          <Accordion items={cat.items} />
          {i < CATEGORIES.length - 1 && <SectionDivider variant="subtle" />}
        </section>
      ))}

      {/* TLHCODE CTA */}
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
        <CouponChip size="sm" />
        <Button label="פתח מבחן ב-Apex" href={APEX_URL} variant="primary" external />
      </div>

      <div className="mt-8">
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          לא מצאת תשובה?{" "}
          <a
            href="https://support.apextraderfunding.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--text-secondary)]"
          >
            מרכז התמיכה הרשמי של Apex ↗
          </a>{" "}
          | <Link href="/about" className="underline hover:text-[var(--text-secondary)]">אודות האתר</Link>
        </p>
      </div>
    </div>
  );
}
