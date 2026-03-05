import type { Metadata } from "next";
import { Clock, BarChart2, UserX, Copy, Zap, ArrowLeftRight } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";
import { S } from "@/lib/sources";

export const metadata: Metadata = {
  title: "עמידה בכללים ופעילות אסורה — Apex | NY Prop Firms",
  description: "עמידה בכללים של Apex: פעילות אסורה, כלל 4:59 PM ET, No Hedging, Contract Scaling",
};

const APEX_URL = "https://apextraderfunding.com";


const UNIVERSAL_RULES = [
  { icon: Clock, label: "כל פוזיציה חייבת להיסגר לפני 4:59 PM ET", href: "#trading-window" },
  { icon: ArrowLeftRight, label: "אסור להגדיר (No Hedging)", href: "#hedging" },
  { icon: BarChart2, label: "Contract Scaling חל על כל החשבונות", href: "#scaling" },
];

export default function CompliancePage() {
  return (
    <div className="container-page py-12">
      <nav className="text-sm mb-6 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
        <a href="/apex" className="hover:text-[var(--text-secondary)]">Apex</a>
        <span>/</span>
        <span style={{ color: "var(--text-secondary)" }}>עמידה בכללים</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
        עמידה בכללים ופעילות אסורה
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
        כללים אלו חלים על כל סוגי חשבונות Apex הנוכחיים — כל כלל מקושר למקורו.
      </p>

      {/* Universal rules strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {UNIVERSAL_RULES.map((rule, i) => (
          <a
            key={i}
            href={rule.href}
            className="card p-4 flex items-center gap-3 hover:border-[var(--surface-border-strong)] transition-colors group"
          >
            <rule.icon size={18} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
            <span className="text-sm font-medium group-hover:text-[var(--gold-300)] transition-colors" style={{ color: "var(--text-primary)" }}>
              {rule.label}
            </span>
          </a>
        ))}
      </div>

      {/* ── Prohibited Activities ─────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          פעילויות אסורות
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RuleCard
            variant="prohibited"
            title="שיתוף חשבון / MAC / IP"
            icon={UserX}
            accountType="universal"
            source={S.PROHIBITED}
            body={
              <>
                <p>אסור לאפשר לאחרים לסחור בחשבון שלך, לשתף פרטי כניסה, או לפעול ממכשירים ו-IP משותפים.</p>
                <p className="mt-2 font-medium" style={{ color: "#FFAAAA" }}>תוצאה: סגירת כל החשבונות הקשורים.</p>
              </>
            }
          />
          <RuleCard
            variant="prohibited"
            title="העתקת עסקאות (Trade Copying)"
            icon={Copy}
            accountType="universal"
            source={S.PROHIBITED}
            body={
              <>
                <p>אסור לשכפל עסקאות מחשבון אחד לאחר — בין אם אוטומטית (via bot) ובין אם ידנית.</p>
                <p className="mt-2 font-medium" style={{ color: "#FFAAAA" }}>תוצאה: סגירת כל החשבונות הקשורים.</p>
              </>
            }
          />
          <RuleCard
            variant="prohibited"
            title="מסחר אוטומטי בתדר גבוה (HFT)"
            icon={Zap}
            accountType="universal"
            source={S.PROHIBITED}
            body={
              <>
                <p>מסחר אוטומטי בתדר גבוה אסור על כל סוגיו וצורותיו.</p>
                <p className="mt-2 font-medium" style={{ color: "#FFAAAA" }}>תוצאה: סגירת כל החשבונות הקשורים.</p>
              </>
            }
          />
          <RuleCard
            variant="prohibited"
            title="הגדרה / Hedging"
            icon={ArrowLeftRight}
            accountType="universal"
            source={S.PROHIBITED}
            body={
              <>
                <p>אסור לסחור בשני כיוונים בו-זמנית, כולל על נכסים מתואמים.</p>
                <p className="mt-1 text-xs" style={{ color: "#FFAAAA" }}>
                  ❌ Long NQ + Short ES בו-זמנית = Hedge = הפרה
                </p>
                <p className="mt-1 text-xs" style={{ color: "#FFAAAA" }}>
                  ❌ Long + Short על אותו נכס = הפרה
                </p>
                <p className="mt-1 text-xs" style={{ color: "var(--green-400)" }}>
                  ✅ עסקה אחת בכיוון אחד בכל רגע נתון
                </p>
              </>
            }
          />
        </div>
      </section>

      <SectionDivider variant="section" />

      {/* ── 4:59 PM Section ───────────────────────────────────── */}
      <section id="trading-window">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          כלל 4:59 PM ET — חלון המסחר
        </h2>
        <div className="card p-6 mb-4">
          <TimelineStrip
            variant="vertical"
            steps={[
              { label: "שוק נפתח — 6:00 PM ET", sublabel: "אפשר לפתוח עסקאות" },
              { label: "מועד אחרון לסגירה — 4:59 PM ET", sublabel: "כל פוזיציה חייבת להיסגר", variant: "warning" },
              { label: "פוזיציה פתוחה = הפרה — 5:00 PM ET", sublabel: "הפרת כלל זמן המסחר", variant: "danger" },
            ]}
          />
        </div>
        <CalloutBox
          variant="warning"
          title="הוראות תלויות — שימו לב חשוב"
          source={S.CLOSE_459}
          body={
            <div className="space-y-2">
              <p>
                <strong style={{ color: "var(--text-primary)" }}>Attached Orders</strong> (Stop Loss / Take Profit
                מחוברות לפוזיציה) — נסגרות אוטומטית עם הפוזיציה. ✅
              </p>
              <p>
                <strong style={{ color: "var(--amber-400)" }}>הוראות עצמאיות (Standing Orders)</strong> — לא נסגרות
                אוטומטית. <strong>חייבות להיבטל ידנית לפני 4:59 PM ET.</strong> ⚠️
              </p>
            </div>
          }
        />
      </section>

      <SectionDivider variant="section" />

      {/* ── No Hedging ────────────────────────────────────────── */}
      <section id="hedging">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          כלל אי-ההגדרה — No Hedging
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-4 text-center" style={{ borderColor: "var(--red-edge)", backgroundColor: "var(--red-900)" }}>
            <p className="text-2xl mb-2">❌</p>
            <p className="text-sm font-medium" style={{ color: "#FFAAAA" }}>Long NQ + Short ES</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>נכסים מתואמים = Hedge</p>
          </div>
          <div className="card p-4 text-center" style={{ borderColor: "var(--red-edge)", backgroundColor: "var(--red-900)" }}>
            <p className="text-2xl mb-2">❌</p>
            <p className="text-sm font-medium" style={{ color: "#FFAAAA" }}>Long + Short על אותו נכס</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>הפרה ישירה</p>
          </div>
          <div className="card p-4 text-center" style={{ borderColor: "var(--green-edge)", backgroundColor: "var(--green-900)" }}>
            <p className="text-2xl mb-2">✅</p>
            <p className="text-sm font-medium" style={{ color: "var(--green-400)" }}>כיוון אחד בכל רגע</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Long בלבד או Short בלבד</p>
          </div>
        </div>
      </section>

      <SectionDivider variant="section" />

      {/* ── Contract Scaling ─────────────────────────────────── */}
      <section id="scaling">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Contract Scaling Rule
        </h2>
        <RuleCard
          title="Contract Scaling — 3 שלבים"
          icon={BarChart2}
          accountType="universal"
          source={S.CONTRACT_SCALING}
          body={
            <div className="flex flex-col gap-3 mt-1">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shrink-0" style={{ backgroundColor: "var(--surface-overlay)", color: "var(--gold-300)", border: "1px solid var(--gold-edge)" }}>1</span>
                <span>כניסה: מותר לסחור בחצי מכמות החוזים המקסימלית</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shrink-0" style={{ backgroundColor: "var(--surface-overlay)", color: "var(--gold-300)", border: "1px solid var(--gold-edge)" }}>2</span>
                <span>יתרת EOD עוברת את הרף (יתרה + Drawdown + $100): גישה לכמות המלאה</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shrink-0" style={{ backgroundColor: "var(--surface-overlay)", color: "var(--gold-300)", border: "1px solid var(--gold-edge)" }}>3</span>
                <span>הגישה המלאה נשארת — גם אם היתרה יורדת מתחת לרף</span>
              </div>
            </div>
          }
        />
      </section>

      <div className="mt-10">
        <Button label="לכל כללי Apex ←" href="/apex" variant="secondary" />
      </div>

    </div>
  );
}
