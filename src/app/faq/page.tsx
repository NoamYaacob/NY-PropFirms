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
    content: "במבחני EOD ו-Intraday החדשים אין מינימום ימי מסחר. אפשר לעבור גם ביום אחד, אם הגעת ליעד הרווח בלי להפר כללים.",
  },
  {
    id: "e3",
    trigger: "האם הגישה למבחן מתחדשת?",
    content: "לא. המבחן תקף ל-30 ימים, ללא חידוש אוטומטי וללא הארכה.",
  },
  {
    id: "e2",
    trigger: "מה ההבדל בין מגבלת הפסד יומי (DLL) לרף הפסד?",
    content: (
      <div className="space-y-1.5">
        <p><strong>DLL</strong> הוא סטופ יומי קבוע לאותו סשן. אם מגיעים אליו, המסחר באותו תיק נעצר עד יום המסחר הבא — החשבון נשאר פעיל.</p>
        <p><strong>רף הפסד / Drawdown</strong> הוא רף החשבון עצמו. ב-EOD הוא מחושב בסוף יום ונאכף בסשן הבא. ב-Intraday הוא נגרר בזמן אמת.</p>
      </div>
    ),
  },
  {
    id: "e4",
    trigger: "מה ההבדל בין רף הפסד נגרר (Intraday) לבין רף הפסד (EOD)?",
    content: (
      <div className="space-y-1.5">
        <p><strong>Intraday:</strong> רף ההפסד נגרר בזמן אמת אחרי שיא החשבון, כולל רווחים פתוחים.</p>
        <p><strong>EOD:</strong> רף ההפסד מחושב פעם אחת בסוף יום המסחר ונשאר קבוע לאורך הסשן הבא.</p>
      </div>
    ),
  },
  {
    id: "e5",
    trigger: "מה קורה אם לא סגרתי פוזיציה לפני 4:59 PM ET?",
    content: (
      <div className="space-y-1.5">
        <p>צריך לסגור את כל העסקאות לפני <span dir="ltr">4:59 PM ET</span>. זו האחריות של הסוחר, ובחלק מהשווקים צריך להיסגר אפילו מוקדם יותר.</p>
        <p>אפשר לפתוח עסקאות שוב מ-<span dir="ltr">6:00 PM ET</span>.</p>
      </div>
    ),
  },
];

const PA: AccordionItem[] = [
  {
    id: "p0",
    trigger: "מה נדרש כדי לבקש תשלום מ-PA?",
    content: (
      <div className="space-y-1.5">
        <p>5 ימי מסחר כשירים לפחות — ימים שבוצעה בהם לפחות עסקה אחת.</p>
        <p>בקשה מינימלית של <span dir="ltr">$500</span>.</p>
        <p>חוק עקביות 50% חייב להתקיים.</p>
        <p>התשלום הוא <strong>100% לסוחר</strong> על הסכום שאושר.</p>
      </div>
    ),
  },
  {
    id: "p1",
    trigger: "מה זה חוק עקביות 50%?",
    content: "היום הרווחי ביותר שלך חייב להיות פחות מ-50% מסך הרווח הכולל. כל עוד עברת 50%, כפתור בקשת התשלום לא זמין.",
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
    content: "רשת הביטחון היא רף ההפסד של החשבון בתוספת $100. רק רווח מעל רשת הביטחון ניתן למשיכה.",
  },
  {
    id: "p6",
    trigger: "כמה חשבונות PA מותר להחזיק בו-זמנית?",
    content: "עד 20 חשבונות PA פעילים. חריגה מגבול זה חוסמת בקשות תשלום בכל החשבונות.",
  },
];

const COUPON: AccordionItem[] = [
  {
    id: "c1",
    trigger: "מה זה קוד NOAM?",
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
    content: "EOD הוא מסלול שבו רף ההפסד מחושב פעם אחת בסוף יום המסחר. הרף שנקבע נשאר קבוע לאורך הסשן הבא.",
  },
  {
    id: "t2",
    trigger: "מה זה Intraday?",
    content: (
      <div className="space-y-1.5">
        <p>Intraday הוא מסלול שבו רף ההפסד נגרר בזמן אמת אחרי שיא החשבון.</p>
        <p>במבחן Intraday אין DLL.</p>
        <p>ב-PA של Intraday יש גם DLL לפי Tier וגם רף הפסד נגרר בזמן אמת.</p>
      </div>
    ),
  },
  {
    id: "t3",
    trigger: "מה זה רף הפסד נגרר?",
    content: "רמת הפסד מקסימלית שזזה כלפי מעלה עם שיא החשבון — אך לעולם אינה יורדת. נפוצה בחשבונות Intraday.",
  },
  {
    id: "t4",
    trigger: "מה זה PA?",
    content: "PA הוא חשבון מדומה ממומן שנפתח אחרי מעבר המבחן. בחשבון PA אפשר לבקש תשלומים לפי כללי הזכאות.",
  },
];

const CATEGORIES = [
  { id: "general",    label: "כלליות",        items: GENERAL },
  { id: "evaluation", label: "מבחן",           items: EVALUATION },
  { id: "pa",         label: "PA ותשלומים",   items: PA },
  { id: "coupon",     label: "קוד הנחה",       items: COUPON },
  { id: "terms",      label: "מונחים",         items: TERMS },
];

const KEY_FACTS = [
  "אין מינימום ימי מסחר במבחן",
  "המבחן תקף ל-30 ימים",
  "ב-PA יש עד 6 תשלומים",
  "התשלומים הם 100% לסוחר על סכום שאושר",
  "צריך לסגור את כל העסקאות לפני 4:59 PM ET",
];

export default function FAQPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        שאלות נפוצות
      </h1>
      <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
        תשובות קצרות לשאלות החשובות על Apex — בעברית
      </p>

      {/* הכי חשוב לדעת */}
      <div
        className="rounded-xl px-5 py-4 mb-8"
        style={{
          backgroundColor: "var(--surface-raised)",
          border: "1px solid var(--surface-border)",
        }}
      >
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
          הכי חשוב לדעת
        </p>
        <ul className="space-y-1.5">
          {KEY_FACTS.map((fact) => (
            <li key={fact} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--teal-400)", flexShrink: 0 }}>✓</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>

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

      {/* Coupon CTA */}
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
