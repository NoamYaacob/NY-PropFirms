import Link from "next/link";
import { Sunset, Activity, Wallet, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { ComparisonBlock, ComparisonRow } from "@/components/ui/ComparisonBlock";
import { StepFlowStrip } from "@/components/ui/StepFlowStrip";
import { WhatsAppButtons } from "@/components/ui/WhatsAppButtons";
const APEX_URL = "https://apextraderfunding.com";

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "סטופ יומי במבחן",
    eodValue: <span style={{ color: "var(--green-400)" }}>יש ✅</span>,
    intradayValue: <span style={{ color: "var(--red-400)" }}>אין ❌</span>,
  },
  {
    feature: "סטופ יומי ב-PA",
    eodValue: (
      <span>
        יש לפי{" "}
        <a
          href="/apex/eod#tier-dll"
          className="underline decoration-dotted underline-offset-2 hover:no-underline"
          style={{ color: "inherit" }}
        >
          Tier
        </a>
      </span>
    ),
    intradayValue: (
      <span>
        יש לפי{" "}
        <a
          href="/apex/intraday#tier-dll"
          className="underline decoration-dotted underline-offset-2 hover:no-underline"
          style={{ color: "inherit" }}
        >
          Tier
        </a>
      </span>
    ),
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


const CATEGORY_CARDS = [
  {
    icon: Sunset,
    title: "Apex EOD",
    desc: "יש סטופ יומי במבחן, רף הפסד בסוף יום, כללי PA ותשלומים",
    href: "/apex/eod",
    color: "#7EA0FF",
  },
  {
    icon: Activity,
    title: "Apex Intraday",
    desc: "אין סטופ יומי במבחן, רף הפסד נגרר, כללי PA ותשלומים",
    href: "/apex/intraday",
    color: "var(--teal-400)",
  },
  {
    icon: Wallet,
    title: "תשלומים",
    desc: "בקשות תשלום, עקביות, רשת ביטחון ו-PA",
    href: "/apex/payouts",
    color: "var(--gold-400)",
  },
  {
    icon: Shield,
    title: "עמידה בכללים",
    desc: "איסור גידור, שעת סגירה, פעילויות אסורות",
    href: "/apex/compliance",
    color: "var(--green-400)",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 py-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.08) 0%, transparent 70%), var(--surface-base)",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--surface-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--surface-border-strong) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight leading-none"
            style={{ color: "var(--text-primary)" }}
          >
            <span style={{ color: "var(--gold-300)" }}>NY</span> PROP FIRMS
          </h1>

          <div className="flex flex-col items-center gap-2">
            <p
              className="text-xl md:text-2xl font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              כל מה שצריך לדעת לפני שפותחים חשבון פרופ
            </p>
            <p className="text-base" style={{ color: "var(--text-muted)" }}>
              הסבר ברור על החוקים, התשלומים וההבדלים בין המסלולים
            </p>
            <p className="text-sm text-center max-w-md" style={{ color: "var(--text-muted)", opacity: 0.65 }}>
              מיועד לסוחרים שרוצים להבין את חוקי Apex בעברית, בלי ללכת לאיבוד בין המסמכים.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <Button
              label="הכירו את החוקים"
              href="/apex"
              variant="primary"
              size="lg"
            />
            <Button
              label="פתחו חשבון עם NOAM"
              href={APEX_URL}
              variant="secondary"
              size="lg"
              external
            />
          </div>

          <CouponChip size="sm" />
        </div>
      </section>

      <div className="container-page pb-4">
        {/* ── Step Flow ─────────────────────────────────────── */}
        <section className="mb-16">
          <StepFlowStrip
            steps={[
              { number: 1, label: "בחרו מסלול: EOD או Intraday", href: "/apex" },
              { number: 2, label: "עברו על החוקים החשובים" },
              { number: 3, label: "פתחו חשבון עם NOAM", href: APEX_URL },
            ]}
          />
        </section>

        {/* ── Category Cards ────────────────────────────────── */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            החוקים הקיימים כרגע — לפי סוג חשבון
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CATEGORY_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="card p-6 flex items-start gap-4 transition-all duration-200 hover:border-[var(--surface-border-strong)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 group"
              >
                <div
                  className="p-2.5 rounded-xl shrink-0"
                  style={{
                    backgroundColor: "var(--surface-overlay)",
                    border: "1px solid var(--surface-border)",
                  }}
                >
                  <card.icon size={22} style={{ color: card.color }} />
                </div>
                <div>
                  <h3
                    className="font-semibold text-base mb-1 group-hover:text-[var(--gold-300)] transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {card.desc}
                  </p>
                </div>
                <ArrowLeft
                  size={16}
                  className="me-0 ms-auto mt-1 shrink-0 opacity-40 group-hover:opacity-100 group-hover:-translate-x-1 transition-all"
                  style={{ color: "var(--gold-300)" }}
                />
              </Link>
            ))}
          </div>
        </section>

        {/* ── EOD vs Intraday Comparison ────────────────────── */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            מה ההבדל בין EOD ל-Intraday?
          </h2>

          <ComparisonBlock rows={COMPARISON_ROWS} showSources={false} />
        </section>

        {/* ── Coupon Block ──────────────────────────────────── */}
        <section className="mb-16 flex flex-col items-center gap-4">
          <h2
            className="text-xl font-bold text-center"
            style={{ color: "var(--text-primary)" }}
          >
            קוד קופון לפתיחת מבחן
          </h2>
          <p className="text-sm text-center" style={{ color: "var(--text-muted)" }}>
            מזינים את הקוד בקופה באתר Apex
          </p>
          <CouponChip size="lg" />
          <Button
            label="פתחו חשבון עם NOAM"
            href={APEX_URL}
            variant="primary"
            size="lg"
            external
          />
        </section>

        {/* ── WhatsApp ──────────────────────────────────────── */}
        <section className="mb-16">
          <h2
            className="text-xl font-bold mb-2 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            קהילה ויצירת קשר
          </h2>
          <p className="text-sm text-center mb-6" style={{ color: "var(--text-muted)" }}>
            אפשר להצטרף לקבוצת הווטסאפ או לשלוח לי הודעה ישירה.
          </p>
          <WhatsAppButtons directHelper="מתלבטים בין התיקים? שלחו לי הודעה" />
        </section>

        {/* ── Disclaimer ────────────────────────────────────── */}
        <section className="mb-8">
          <div
            className="flex items-start gap-2.5 px-5 py-4 rounded-xl text-sm"
            style={{
              backgroundColor: "var(--surface-subtle)",
              border: "1px solid var(--surface-border)",
              color: "var(--text-muted)",
            }}
          >
            המידע באתר מוצג בעברית לצורכי הסבר בלבד, והוא אינו מחליף את המסמכים הרשמיים של Apex. לפני פתיחת חשבון או בקשת תשלום, מומלץ לבדוק גם באתר הרשמי.
          </div>
        </section>
      </div>
    </>
  );
}
