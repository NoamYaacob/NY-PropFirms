import type { Metadata } from "next";
import { Clock, UserX, Zap, ArrowLeftRight, Globe, ShieldAlert } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";
import { S } from "@/lib/sources";

export const metadata: Metadata = {
  title: "עמידה בכללים ופעילות אסורה — Apex | NY Prop Firms",
  description: "עמידה בכללים של Apex: פעילות אסורה, כלל 4:59 PM ET, No Hedging",
};

const SUMMARY_CARDS = [
  { icon: ArrowLeftRight, label: "אין גידור — No Hedging", href: "#hedging" },
  { icon: Clock,          label: "חובה להיות שטוח לפני 4:59 PM ET", href: "#trading-window" },
  { icon: Zap,            label: "אין אוטומציה / אלגוריתמים / HFT", href: "#prohibited" },
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

      {/* ── Summary strip ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        {SUMMARY_CARDS.map((card, i) => (
          <a
            key={i}
            href={card.href}
            className="card p-4 flex items-center gap-3 hover:border-[var(--surface-border-strong)] transition-colors group"
          >
            <card.icon size={18} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
            <span
              className="text-sm font-medium group-hover:text-[var(--gold-300)] transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              {card.label}
            </span>
          </a>
        ))}
      </div>

      {/* ── Prohibited Activities ───────────────────────────────── */}
      <section id="prohibited">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          פעילויות אסורות
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <RuleCard
            variant="prohibited"
            title="שיתוף חשבון / Trade Copying / MAC / IP"
            icon={UserX}
            accountType="universal"
            source={S.PROHIBITED}
            body={
              <>
                <p>אסור לאפשר לאחרים לסחור בחשבון שלך, לשתף פרטי כניסה, לשכפל עסקאות, או לפעול ממכשירים ו-IP משותפים.</p>
                <p className="mt-2 font-medium" style={{ color: "var(--red-text)" }}>תוצאה: סגירת כל החשבונות הקשורים.</p>
              </>
            }
          />

          <RuleCard
            variant="prohibited"
            title="VPN / Proxy / Cloud — אסור לצורך הסוואה או עקיפה"
            icon={Globe}
            accountType="universal"
            source={S.PROHIBITED}
            body={
              <>
                <p>אסור להשתמש ב-VPN, Proxy, Cloud Server או כלים דומים כדי להסוות זהות, מיקום או לעקוף מגבלות וכללים.</p>
                <p className="mt-2 font-medium" style={{ color: "var(--red-text)" }}>תוצאה: סגירת כל החשבונות הקשורים.</p>
              </>
            }
          />

          <RuleCard
            variant="prohibited"
            title="אוטומציה / אלגוריתמים / HFT — אסור"
            icon={Zap}
            accountType="universal"
            source={S.PROHIBITED}
            body={
              <>
                <p>Apex אוסרים שימוש באוטומציה, אלגוריתמים, בוטים, HFT או כל ניצול של סביבת הסימולציה.</p>
                <p className="mt-2 font-medium" style={{ color: "var(--red-text)" }}>תוצאה: סגירת כל החשבונות הקשורים.</p>
              </>
            }
          />

          <RuleCard
            variant="prohibited"
            title="גידור / Hedging"
            icon={ArrowLeftRight}
            accountType="universal"
            source={S.PROHIBITED}
            body={
              <>
                <p>אסור לסחור בשני כיוונים בו-זמנית, כולל על נכסים מתואמים.</p>
                <p className="mt-1 text-xs" style={{ color: "var(--red-text)" }}>❌ Long NQ + Short ES בו-זמנית = Hedge = הפרה</p>
                <p className="mt-1 text-xs" style={{ color: "var(--red-text)" }}>❌ Long + Short על אותו נכס = הפרה</p>
                <p className="mt-1 text-xs" style={{ color: "var(--green-400)" }}>✅ עסקה אחת בכיוון אחד בכל רגע נתון</p>
              </>
            }
          />

          <RuleCard
            variant="prohibited"
            title="ניהול סיכון חובה"
            icon={ShieldAlert}
            accountType="universal"
            source={S.PROHIBITED}
            body={
              <>
                <p>אסור לסחור בלי סטופ או בלי תכנית סיכון ברורה.</p>
                <p className="mt-2">אסור להשתמש ברף ההפסד של החשבון כתחליף לסטופ.</p>
              </>
            }
          />

        </div>
      </section>

      <SectionDivider variant="section" />

      {/* ── 4:59 PM ET ──────────────────────────────────────────── */}
      <section id="trading-window">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          חובה להיות שטוח לפני 4:59 PM ET
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          כל הפוזיציות חייבות להיסגר לפני <span dir="ltr">4:59 PM ET</span>.
          בשווקים מסוימים, במיוחד חקלאיים, צריך להיסגר מוקדם יותר.
          אפשר לפתוח עסקאות שוב מ-<span dir="ltr">6:00 PM ET</span>.
        </p>
        <div className="card p-6 mb-4">
          <TimelineStrip
            variant="vertical"
            steps={[
              { label: "שוק נפתח — 6:00 PM ET",            sublabel: "אפשר לפתוח עסקאות" },
              { label: "מועד אחרון לסגירה — 4:59 PM ET",  sublabel: "כל פוזיציה חייבת להיסגר", variant: "warning" },
              { label: "פוזיציה פתוחה = הפרה — 5:00 PM ET", sublabel: "הפרת כלל זמן המסחר",  variant: "danger" },
            ]}
          />
        </div>
        <CalloutBox
          variant="warning"
          title="הוראות תלויות — שימו לב"
          source={S.CLOSE_459}
          body={
            <div className="space-y-2">
              <p>הוראות מחוברות לפוזיציה, כמו סטופ או לימיט, נסגרות יחד עם הפוזיציה. ✅</p>
              <p>הוראות עצמאיות שלא מחוברות לפוזיציה לא תמיד ייסגרו לבד.</p>
              <p><strong>צריך לבטל אותן ידנית לפני <span dir="ltr">4:59 PM ET</span>.</strong> ⚠️</p>
            </div>
          }
        />
      </section>

      <SectionDivider variant="section" />

      {/* ── No Hedging visual ───────────────────────────────────── */}
      <section id="hedging">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          אין גידור — No Hedging
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-4 text-center" style={{ borderColor: "var(--red-edge)", backgroundColor: "var(--red-900)" }}>
            <p className="text-2xl mb-2">❌</p>
            <p className="text-sm font-medium" style={{ color: "var(--red-text)" }}>Long NQ + Short ES</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>נכסים מתואמים = Hedge</p>
          </div>
          <div className="card p-4 text-center" style={{ borderColor: "var(--red-edge)", backgroundColor: "var(--red-900)" }}>
            <p className="text-2xl mb-2">❌</p>
            <p className="text-sm font-medium" style={{ color: "var(--red-text)" }}>Long + Short על אותו נכס</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>הפרה ישירה</p>
          </div>
          <div className="card p-4 text-center" style={{ borderColor: "var(--green-edge)", backgroundColor: "var(--green-900)" }}>
            <p className="text-2xl mb-2">✅</p>
            <p className="text-sm font-medium" style={{ color: "var(--green-400)" }}>כיוון אחד בכל רגע</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Long בלבד או Short בלבד</p>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <Button label="לכל כללי Apex ←" href="/apex" variant="secondary" />
      </div>

    </div>
  );
}
