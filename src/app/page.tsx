import Link from "next/link";
import { Sunset, Activity, Wallet, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { ComparisonBlock, ComparisonRow } from "@/components/ui/ComparisonBlock";
import { StepFlowStrip } from "@/components/ui/StepFlowStrip";
import { DisclaimerBlock } from "@/components/ui/DisclaimerBlock";
import { S } from "@/lib/sources";

const APEX_URL = "https://apextraderfunding.com";

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "DLL (מגבלת הפסד יומי)",
    eodValue: <span style={{ color: "var(--amber-400)" }}>✅ במבחן יש DLL</span>,
    intradayValue: <span style={{ color: "var(--green-400)" }}>❌ במבחן אין DLL</span>,
    source: S.DAILY_LOSS_LIMIT,
  },
  {
    feature: "רף הפסד – איך זה עובד",
    eodValue: "רף הפסד בסוף יום (EOD)",
    intradayValue: "רף הפסד נגרר בזמן אמת",
    source: S.INTRADAY_EVALUATIONS,
  },
  {
    feature: "מה קורה בפגיעה",
    eodValue: "המסחר נעצר לאותו יום — המבחן לא נכשל",
    intradayValue: "אין פגיעה יומית — רק רף הפסד נגרר",
    source: S.DAILY_LOSS_LIMIT,
  },
];

const CATEGORY_CARDS = [
  {
    icon: Sunset,
    title: "Apex EOD",
    desc: "כללי המבחן וחשבון ה-PA במסלול סוף יום (EOD)",
    href: "/apex/eod",
    color: "#7EA0FF",
  },
  {
    icon: Activity,
    title: "Apex Intraday",
    desc: "כללי המבחן וחשבון ה-PA במסלול אינטרה-דיי (Intraday)",
    href: "/apex/intraday",
    color: "var(--teal-400)",
  },
  {
    icon: Wallet,
    title: "תשלומים",
    desc: "כללי תשלום ב-PA, עקביות, רשת ביטחון",
    href: "/apex/payouts",
    color: "var(--gold-400)",
  },
  {
    icon: Shield,
    title: "עמידה בכללים",
    desc: "איסור גידור, כלל 4:59, פעילות אסורה",
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
              המדריך הישראלי לחוקי חברות פרופ
            </p>
            <p className="text-base" style={{ color: "var(--text-muted)" }}>
              כל מה שחשוב לדעת לפני שמתחילים
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
              כרגע: Apex. בהמשך: חברות נוספות.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <Button
              label="פתח חשבון עם קוד NOAM"
              href={APEX_URL}
              variant="primary"
              size="lg"
              external
            />
            <Button
              label="קרא את הכללים קודם ←"
              href="/apex"
              variant="secondary"
              size="lg"
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
              { number: 1, label: "בחר סוג: סוף יום (EOD) או אינטרה-דיי (Intraday)", href: "/apex" },
              { number: 2, label: "קרא את הכללים הרלוונטיים" },
              { number: 3, label: "פתח מבחן עם קוד NOAM", href: APEX_URL },
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
            className="text-2xl font-bold mb-2 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            EOD מול Intraday — ההבדלים המרכזיים
          </h2>
          <p
            className="text-sm text-center mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            כל שורה מקושרת למסמך Apex הרשמי
          </p>
          <ComparisonBlock rows={COMPARISON_ROWS} compact />
        </section>

        {/* ── Coupon Block ──────────────────────────────────── */}
        <section className="mb-16 flex flex-col items-center gap-5">
          <h2
            className="text-xl font-bold text-center"
            style={{ color: "var(--text-primary)" }}
          >
            קוד הנחה לפתיחת מבחן
          </h2>
          <CouponChip size="lg" />
          <Button
            label="פתח מבחן ב-Apex"
            href={APEX_URL}
            variant="primary"
            size="lg"
            external
          />
        </section>

        {/* ── Disclaimer ────────────────────────────────────── */}
        <section className="mb-8">
          <DisclaimerBlock variant="inline" />
        </section>
      </div>
    </>
  );
}
