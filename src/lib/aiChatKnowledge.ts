import { CONSISTENCY_DEFINITION, CONSISTENCY_LOSING_DAYS_CARD } from "@/lib/disclosureCopy";
// ── Bot configuration ────────────────────────────────────────────────
export const BOT_CONFIG = {
  fullName: "עוזר AI של NY Prop Firms",
  subtitle: "תשובות מהירות על Apex, תיקים, חוקים ותשלומים",
  greeting:
    "היי, אני כאן כדי לעזור לך להבין את המסלולים והחוקים של Apex. אפשר לשאול אותי על EOD, Intraday, PA, תשלומים, DLL, Tier ועוד.",
  buttonTooltip: "שאלו את הבוט",
} as const;

export const QUICK_ACTIONS = [
  "מה ההבדל בין EOD ל-Intraday?",
  "איזה חשבון מתאים לי?",
  "מה זה DLL?",
  "איך עובדים התשלומים?",
  "אני רוצה עזרה מנועם",
] as const;

// ── Types ─────────────────────────────────────────────────────────────
export interface BotResponse {
  text: string;
  chips?: string[];
  buttons?: Array<{ label: string; action: string }>;
  isEscalation?: boolean;
  startRecommendation?: boolean;
}

export interface ChatContext {
  messageCount?: number;
}

// ── Keyword matcher ────────────────────────────────────────────────────
function has(text: string, keywords: string[]): boolean {
  const lower = text.toLowerCase();
  return keywords.some((k) => lower.includes(k.toLowerCase()));
}

// ── Escalation detection ────────────────────────────────────────────────
const ESCALATION_KEYWORDS = [
  "נועם", "לדבר עם נועם", "עזרה מנועם", "אני רוצה עזרה מנועם",
  "לא בטוח מה", "לא יודע מה", "עדיין לא מבין", "אני מתלבט",
  "עזור לי לבחור", "מה כדאי לי", "תמליץ לי", "מה אתה ממליץ",
  "שיחה אישית", "לא ברור לי", "אני חדש, מה", "יש לי תקציב",
];

export function isEscalationIntent(text: string): boolean {
  return has(text, ESCALATION_KEYWORDS);
}

// ── Response generators ────────────────────────────────────────────────
function makeEscalation(): BotResponse {
  return {
    text: "נראה שפה עדיף שנעשה התאמה אישית.\nאם תרצה, אפשר להעביר אותך לנועם להכוונה ישירה.",
    buttons: [
      { label: "אני רוצה שנועם יחזור אליי", action: "lead_form" },
      { label: "לקבוצת הווטסאפ", action: "whatsapp_group" },
      { label: "להמשיך לשאול את הבוט", action: "continue" },
    ],
    isEscalation: true,
  };
}

function makeEodVsIntraday(): BotResponse {
  return {
    text: "ההבדל המרכזי הוא ב-Trailing Stop של החשבון:\n\n**EOD** — הרף מחושב מחדש פעם ביום, בסגירה (\u200e4:59:59 PM ET), לפי היתרה הגבוהה ביותר בסוף יום, ולעולם לא יורד. פשוט יותר לניהול יומיומי.\n**Intraday** — הרף זוחל אחרי השיא בזמן אמת לאורך כל הסשן. דינמי יותר, דורש מודעות גבוהה יותר.\n\nשניהם מציעים חשבונות $25K–$150K וכללי PA דומים אך לא זהים (למשל רווח יומי מינימלי ותקרות תשלום).",
    chips: ["ספר לי עוד על EOD", "ספר לי עוד על Intraday", "איזה מתאים לי?"],
  };
}

function makeEod(): BotResponse {
  return {
    text: "**EOD (End of Day)** — מסלול שבו הרף מחושב מחדש פעם ביום, בסגירה (\u200e4:59:59 PM ET), לפי היתרה הגבוהה ביותר בסוף יום, ולעולם לא יורד.\n\n• הרף לא נגרר בזמן אמת — פחות לחץ תוך כדי המסחר\n• בתחילת כל יום אתה יודע בדיוק היכן עומד הרף\n• מתאים יותר למי שמעדיף פשטות וניהול ברור",
    chips: ["מה ההבדל מ-Intraday?", "איך עובדים התשלומים?", "מה זה DLL?"],
  };
}

function makeIntraday(): BotResponse {
  return {
    text: '**Intraday** — מסלול שבו הרף הנגרר "זוחל" אחרי השיא הגבוה ביותר בזמן אמת.\n\n• הרף גדל עם הרווחים — אבל גם "ננעל" ברמות גבוהות יותר\n• דורש מודעות מתמדת למצב החשבון תוך כדי מסחר\n• יכול להתאים לסוחרים שמורגלים בניהול פוזיציה שוטף',
    chips: ["מה ההבדל מ-EOD?", "מה זה DLL?", "איזה מסלול מתאים לי?"],
  };
}

function makeDll(): BotResponse {
  return {
    text: "**DLL (Daily Loss Limit)** הוא הסטופ היומי של החשבון:\n\n• אם מגיעים אליו, המסחר נעצר עד יום המסחר הבא\n• החשבון נשאר פעיל — לא נסגר\n• ב-PA, ה-DLL נקבע לפי **Tier** ויכול לגדול עם החשבון, אבל לא לרדת מ-Level 1",
    chips: ["מה זה Tier?", "מה ההבדל בין EOD ל-Intraday?"],
  };
}

function makeTier(): BotResponse {
  return {
    text: "**Tier** הוא הרמה שקובעת את גודל ה-DLL ב-PA:\n\n• מתחילים ב-Level 1 בפתיחת ה-PA\n• ה-DLL יכול לגדול ככל שהחשבון גדל\n• ה-DLL לעולם לא יירד מ-Level 1\n• לכל גודל חשבון יש טבלת Tier משלה (זהה ב-EOD וב-Intraday).\n• ה-Tier יכול גם לרדת, אבל לא מתחת ל-Level 1.\n\nאפשר לראות את הפירוט המלא בדפי EOD ו-Intraday.",
    chips: ["מה זה DLL?", "איך עובדים התשלומים?"],
  };
}

function makePayouts(): BotResponse {
  return {
    text: "כדי לבקש תשלום מ-PA:\n\n• לפחות **5 ימי מסחר כשירים** (ימים עם רווח נטו של לפחות הרווח היומי המינימלי לגודל החשבון, למשל \u200e$250 ב-50K EOD)\n• מינימום בקשה: **$500**\n• **חוק עקביות 50%** חייב להתקיים\n• **100% מהרווח** לסוחר\n• מקסימום **6 תשלומים** לחשבון — אחרי זה החשבון נסגר",
    chips: ["מה זה חוק עקביות?", "מה זה Safety Net?", "מה קורה אחרי 6 תשלומים?"],
  };
}

function makeAfter6(): BotResponse {
  return {
    text: "אחרי **6 תשלומים מאושרים**, החשבון נסגר אוטומטית.\n\nיש לפתוח מבחן חדש ולעבור אותו כדי לקבל PA חדש.",
    chips: ["ספר לי על שלב ההערכה", "איך עובדים התשלומים?"],
  };
}

function makeConsistency(): BotResponse {
  return {
    text: "**חוק עקביות 50%:**\n\n" + CONSISTENCY_DEFINITION + "\n\n" + CONSISTENCY_LOSING_DAYS_CARD,
    chips: ["איך עובדים התשלומים?", "מה זה Safety Net?"],
  };
}

function makeSafetyNet(): BotResponse {
  return {
    text: "**Safety Net (רשת ביטחון)** — הגבלה שמגינה על שלמות החשבון:\n\n• רף ההפסד + $100\n• אפשר למשוך רק רווח **מעל** רשת הביטחון\n• נשארת בתוקף כל חיי ה-PA\n\nלפי גודל חשבון:\n$25K → $26,100 | $50K → $52,100 | $100K → $103,100 | $150K → $154,100",
    chips: ["איך עובדים התשלומים?", "מה זה חוק עקביות?"],
  };
}

function makePa(): BotResponse {
  return {
    text: "**PA (Performance Account)** הוא חשבון Sim Funded (מדומה) שמקבלים לאחר מעבר ההערכה:\n\n• החשבון מדומה, לא חשבון מסחר חי\n• 100% מכל תשלום שאושר\n• כפוף לחוקי תשלום, עקביות ו-Safety Net\n• אפשר לבקש עד 6 תשלומים, אחרי זה החשבון נסגר",
    chips: ["איך עובדים התשלומים?", "מה זה שלב ההערכה?"],
  };
}

function makeEvaluation(): BotResponse {
  return {
    text: "**שלב ההערכה (Evaluation)** הוא המבחן שצריך לעבור כדי לקבל PA:\n\n• תשלום **חד-פעמי** — אין מנוי או חידוש\n• תוקף: **30 ימים**\n• **7 ימים** להפעיל את ה-PA לאחר מעבר\n• עברת? יש 7 ימים להפעיל את ה-PA, שהוא חשבון Sim Funded (מדומה).",
    chips: ["ספר לי על ה-PA", "מה ההבדל בין EOD ל-Intraday?"],
  };
}

function makeInactivity(): BotResponse {
  return {
    text: "**מדיניות חוסר פעילות ב-PA:**\n\n• צריך להשלים **2 ימי מסחר** עם רווח נטו של **$50+** בכל חלון של 30 יום\n• אם התנאי לא מתקיים — החשבון עלול להיסגר\n\nחשוב לשים לב לזה אם אתה לא סוחר באופן קבוע.",
    chips: ["איך עובדים התשלומים?", "מה אסור לעשות ב-PA?"],
  };
}

function makeProhibited(): BotResponse {
  return {
    text: "**דברים שאסורים ב-Apex:**\n\n• **Overnight positions** — לא ניתן להחזיק פוזיציות לאחר סגירת השוק\n• **מסחר בחדשות** — מותר במסגרת האסטרטגיה הרגילה שלך; אסור 'לרדוף' אחרי השוק או להציב פקודות בשני הכיוונים כדי להמר על תוצאת הנתון.\n• **סגירה לפני 4:59 PM ET** — חייב לסגור את כל העסקאות לפני 4:59 PM ET",
    chips: ["מה זה PA?", "איך עובדים התשלומים?"],
  };
}

function makeRecommendationStart(): BotResponse {
  return {
    text: "כדי לעזור לך לבחור, אשאל אותך כמה שאלות קצרות.\n\nמה רמת התקציב שלך להתחלה?",
    chips: ["נמוך", "בינוני", "גבוה", "עוד לא החלטתי"],
    startRecommendation: true,
  };
}

function makeFallback(msgCount: number): BotResponse {
  if (msgCount >= 4) {
    return {
      text: "אני לא בטוח שנתתי לך מה שחיפשת. אם תרצה, אפשר לעבור לנועם להכוונה אישית.",
      buttons: [
        { label: "אני רוצה שנועם יחזור אליי", action: "lead_form" },
        { label: "להמשיך לשאול את הבוט", action: "continue" },
      ],
      isEscalation: true,
    };
  }
  return {
    text: "אפשר לשאול אותי על EOD, Intraday, PA, תשלומים, DLL, Tier, חוק עקביות, Safety Net ועוד.\n\nבמה אפשר לעזור?",
    chips: QUICK_ACTIONS.slice(0, 4) as unknown as string[],
  };
}

// ── Main response function ─────────────────────────────────────────────
export function generateBotResponse(
  userMessage: string,
  ctx: ChatContext = {}
): BotResponse {
  const msg = userMessage;

  // Explicit escalation request
  if (
    has(msg, ["נועם", "לדבר עם נועם", "עזרה מנועם", "אני רוצה עזרה מנועם",
               "אפשר לדבר עם נועם", "אפשר לדבר עם"])
  ) {
    return makeEscalation();
  }

  // Recommendation / personal fit
  if (
    has(msg, ["מתאים לי", "מה לבחור", "לבחור", "איזה חשבון",
               "מה כדאי", "חדש, מה", "להתחיל", "מה מתאים", "עוזר לי לבחור",
               "מה אני צריך", "מה לפתוח"])
  ) {
    return makeRecommendationStart();
  }

  // EOD vs Intraday comparison
  if (
    has(msg, ["הבדל בין", "השוואה", "eod לעומת", "eod vs",
               "בין eod", "eod ו-intraday", "eod ל-intraday"])
  ) {
    return makeEodVsIntradayMessage();
  }

  // EOD only
  if (has(msg, ["eod", "end of day", "סוף יום"]) && !has(msg, ["intraday", "אינטרה"])) {
    return makeEod();
  }

  // Intraday only
  if (has(msg, ["intraday", "אינטרה", "תוך יומי"]) && !has(msg, ["eod"])) {
    return makeIntraday();
  }

  // After 6 payouts
  if (has(msg, ["אחרי 6", "6 תשלומים", "מה קורה אחרי"])) {
    return makeAfter6();
  }

  // DLL
  if (has(msg, ["dll", "סטופ יומי", "daily loss", "סטופ"])) {
    return makeDll();
  }

  // Tier
  if (has(msg, ["tier", "טייר", "level", "רמה"])) {
    return makeTier();
  }

  // Payouts / withdrawals
  if (has(msg, ["תשלום", "משיכה", "למשוך", "payout", "לבקש כסף", "תשלומים"])) {
    return makePayouts();
  }

  // Consistency
  if (has(msg, ["עקביות", "consistency", "50%", "חמישים", "יחס"])) {
    return makeConsistency();
  }

  // Safety Net
  if (has(msg, ["safety net", "רשת ביטחון", "רשת"])) {
    return makeSafetyNet();
  }

  // PA
  if (has(msg, ["pa ", " pa", "performance account", "חשבון מסחר", "פי-איי"])) {
    return makePa();
  }

  // Evaluation / test
  if (has(msg, ["מבחן", "הערכה", "evaluation", "לעבור את"])) {
    return makeEvaluation();
  }

  // Inactivity
  if (has(msg, ["חוסר פעילות", "inactivity", "לא סחרתי", "30 יום", "סגירה מחוסר"])) {
    return makeInactivity();
  }

  // Prohibited
  if (has(msg, ["אסור", "prohibited", "overnight", "חדשות", "news trading", "4:59"])) {
    return makeProhibited();
  }

  // Account sizes
  if (has(msg, ["$25k", "$50k", "$100k", "$150k", "25,000", "50,000", "גדול", "קטן", "גודל", "גדל"])) {
    return {
      text: "Apex מציעים חשבונות ב-$25K, $50K, $100K ו-$150K — גם ב-EOD וגם ב-Intraday.\n\n• גדול יותר = ספי רווח גבוהים יותר, אבל גם עלות מבחן גבוהה יותר\n• אין \"חשבון טוב יותר\" בגלל גודל בלבד — תלוי בסגנון המסחר\n\nאם תרצה עזרה לבחור, אפשר לשאול אותי או לעבור לנועם.",
      chips: ["איזה חשבון מתאים לי?", "מה ההבדל בין EOD ל-Intraday?"],
    };
  }

  return makeFallback(ctx.messageCount ?? 0);
}

// Named re-export so EOD vs Intraday is accessible
function makeEodVsIntradayMessage(): BotResponse {
  return makeEodVsIntraday();
}
