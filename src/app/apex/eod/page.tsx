import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Clock, TrendingUp, BarChart2, ShieldAlert, Wallet } from "lucide-react";
import { RuleCard } from "@/components/ui/RuleCard";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TimelineStrip } from "@/components/ui/TimelineStrip";
import { Button } from "@/components/ui/Button";
import { CouponChip } from "@/components/ui/CouponChip";
import { PricingTable } from "@/components/ui/PricingTable";
import { S } from "@/lib/sources";
import { TierTableWidget } from "@/components/ui/TierTableWidget";

export const metadata: Metadata = {
  title: "Apex EOD — כללי מבחן ו-PA בעברית | NY Prop Firms",
  description:
    "כל כללי Apex EOD בעברית: DLL לפי Tier, סטופ יומי במבחן, רף הפסד בסוף יום, עקביות 50%, רשת ביטחון ותשלומים — עם מקורות רשמיים.",
  alternates: { canonical: "https://ny-propfirms.com/apex/eod" },
  openGraph: {
    title: "Apex EOD — כללי מבחן ו-PA בעברית | NY Prop Firms",
    description:
      "כל כללי Apex EOD בעברית: DLL לפי Tier, סטופ יומי במבחן, רף הפסד בסוף יום, עקביות 50%, רשת ביטחון ותשלומים — עם מקורות רשמיים.",
    url: "https://ny-propfirms.com/apex/eod",
  },
};

const APEX_URL = "https://apextraderfunding.com/member/aff/go/noamyaacob?c=BSQTZBMJ";


const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "בית", item: "https://ny-propfirms.com/" },
    { "@type": "ListItem", position: 2, name: "Apex", item: "https://ny-propfirms.com/apex" },
    { "@type": "ListItem", position: 3, name: "EOD", item: "https://ny-propfirms.com/apex/eod" },
  ],
};

export default function EODPage() {
  return (
    <div className="container-page py-12">
      <JsonLd data={BREADCRUMB_JSONLD} />
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
        <a href="/apex" className="hover:text-[var(--text-secondary)]">Apex</a>
        <span>/</span>
        <span style={{ color: "var(--text-secondary)" }}>EOD</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
        Apex EOD — כללי המבחן וחשבון ה-PA
      </h1>
      <p className="text-base mb-4" style={{ color: "var(--text-secondary)" }}>
        כללי המבחן, ה-PA, התשלומים וה-DLL במסלול EOD
      </p>

      {/* Phase switcher */}
      <div
        className="inline-flex rounded-xl overflow-hidden mb-8"
        style={{ border: "1px solid var(--surface-border)" }}
      >
        <a
          href="#evaluation"
          className="px-5 py-2.5 text-sm font-semibold"
          style={{
            backgroundColor: "var(--teal-900)",
            color: "var(--teal-400)",
            borderInlineEnd: "1px solid var(--teal-edge)",
          }}
        >
          שלב המבחן
        </a>
        <a
          href="#pa"
          className="px-5 py-2.5 text-sm font-semibold"
          style={{ backgroundColor: "transparent", color: "var(--text-muted)" }}
        >
          שלב ה-PA
        </a>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>תוקף המבחן</p>
          <p className="font-bold" style={{ color: "var(--text-primary)" }}>30 ימים</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Max Drawdown — גבול החשבון</p>
          <p className="font-bold" style={{ color: "var(--text-secondary)" }}>רף הפסד מחושב בסוף יום</p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>נפרד מהסטופ היומי (DLL)</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>סטופ יומי — מבחן</p>
          <p className="font-bold" style={{ color: "var(--amber-400)" }}>
            יש סטופ יומי (<span dir="ltr">DLL</span>) ✅
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            קבוע במהלך הסשן • לא נגרר
          </p>
        </div>
      </div>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        מחירי מבחן EOD
      </h2>
      <PricingTable type="eod" />

      {/* ── EVALUATION ─────────────────────────────────────────── */}
      <section id="evaluation">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--gold-300)" }}>
          שלב המבחן (EOD)
        </h2>

        {/* Two-limit clarification */}
        <div className="mb-6">
          <CalloutBox
            variant="info"
            title="שני גבולות סיכון נפרדים ב-EOD — חשוב להבין"
            body={
              <div className="space-y-1.5">
                <p>
                  <strong style={{ color: "var(--amber-400)" }}>סטופ יומי (<span dir="ltr">DLL</span>)</strong>
                  {" "}— מגביל את ההפסד המותר באותו יום מסחר. פגיעה עוצרת את המסחר עד יום המחרת, אך החשבון נשאר פעיל.
                </p>
                <p>
                  <strong style={{ color: "var(--teal-400)" }}>Max Drawdown (רף הפסד כללי)</strong>
                  {" "}— גבול ההפסד הכולל של החשבון. פגיעה בו מכשילה את המבחן לחלוטין.
                </p>
                <p className="text-xs pt-0.5" style={{ color: "var(--text-muted)" }}>
                  אלו שני כללים שונים לחלוטין — ה-<span dir="ltr">DLL</span> הוא הגבול היומי, ה-Max Drawdown הוא הגבול הכולל של החשבון.
                </p>
              </div>
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RuleCard
            title="חלון המסחר — עד 4:59 PM ET"
            icon={Clock}
            accountType="universal"
            source={S.CLOSE_459}
            body={
              <>
                <p>
                  אפשר לפתוח עסקאות מ-<strong>6:00 PM ET</strong> ועד{" "}
                  <strong>4:59 PM ET</strong> של היום הבא.
                </p>
                <p className="mt-2">
                  הוראות שמחוברות לפוזיציה נסגרות יחד איתה.
                </p>
                <p className="mt-2">
                  הוראות עצמאיות שלא מחוברות לפוזיציה צריך לבטל ידנית לפני{" "}
                  <span dir="ltr">4:59 PM ET</span>.
                </p>
              </>
            }
          />

          <RuleCard
            title="תוקף המבחן"
            icon={Clock}
            accountType="eval"
            source={S.EVALUATION_FEES}
            body={
              <>
                <p>המבחן הוא <strong>תשלום חד-פעמי</strong> ל-30 ימים קלנדריים.</p>
                <p className="mt-2">אין חידוש אוטומטי, אין מנוי ואין אפשרות לאיפוס.</p>
                <p className="mt-2">אחרי מעבר, יש <strong>7 ימים קלנדריים</strong> להפעלת חשבון ה-PA.</p>
              </>
            }
          />

          <RuleCard
            title="גודל פוזיציה — שלב המבחן"
            icon={BarChart2}
            accountType="eval"
            source={S.EOD_EVALUATIONS}
            body={
              <>
                <p>בשלב המבחן גודל הפוזיציה קבוע.</p>
                <p className="mt-2">אין מנגנון <span dir="ltr">Scaling</span> במהלך המבחן.</p>
              </>
            }
          />

          <RuleCard
            title="מקסימום חוזים — שלב המבחן"
            icon={BarChart2}
            accountType="eval"
            source={S.EOD_EVALUATIONS}
            body={
              <div className="space-y-2">
                <p>במבחן EOD, מספר החוזים המקסימלי נקבע לפי גודל החשבון:</p>
                <table className="w-full text-sm border-collapse mt-1">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                      <th className="text-right pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>גודל חשבון</th>
                      <th className="text-left pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>מקסימום חוזים</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "25K", contracts: "4 חוזים" },
                      { size: "50K", contracts: "6 חוזים" },
                      { size: "100K", contracts: "8 חוזים" },
                      { size: "150K", contracts: "12 חוזים" },
                    ].map((row) => (
                      <tr key={row.size} style={{ borderBottom: "1px solid var(--surface-border)" }}>
                        <td className="py-1 text-right" dir="ltr">{row.size}</td>
                        <td className="py-1 text-left font-semibold" style={{ color: "var(--teal-400)" }}>{row.contracts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />

          <RuleCard
            title="יעד רווח — שלב המבחן"
            icon={TrendingUp}
            accountType="eval"
            source={S.EOD_EVALUATIONS}
            body={
              <div className="space-y-2">
                <p>יעד הרווח לסיום המבחן נקבע לפי גודל החשבון:</p>
                <table className="w-full text-sm border-collapse mt-1">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                      <th className="text-right pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>גודל חשבון</th>
                      <th className="text-left pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>יעד רווח</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "25K", target: "$1,500" },
                      { size: "50K", target: "$3,000" },
                      { size: "100K", target: "$6,000" },
                      { size: "150K", target: "$9,000" },
                    ].map((row) => (
                      <tr key={row.size} style={{ borderBottom: "1px solid var(--surface-border)" }}>
                        <td className="py-1 text-right" dir="ltr">{row.size}</td>
                        <td className="py-1 text-left font-semibold" dir="ltr" style={{ color: "var(--teal-400)" }}>{row.target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  ניתן לעבור את המבחן כבר ביום מסחר אחד בלבד.
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  הזמן המקסימלי להשלמת המבחן הוא עד 30 ימים.
                </p>
              </div>
            }
          />
        </div>

        {/* DLL Callout */}
        <div className="mt-6">
          <CalloutBox
            variant="info"
            title="סטופ יומי (DLL) — מבחן EOD"
            accountType="eval"
            source={S.DAILY_LOSS_LIMIT}
            body={
              <div className="space-y-2">
                <p>
                  ה-<span dir="ltr">DLL</span> הוא <strong>הגבול היומי בלבד</strong> — נפרד לחלוטין מה-Max Drawdown הכולל של החשבון.
                </p>
                <p>
                  אם מגיעים אליו, הפוזיציות נסגרות אוטומטית והמסחר באותו תיק נעצר עד יום המסחר הבא.
                </p>
                <p>החשבון נשאר פעיל — זו אינה כשלון מבחן.</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  בחשבונות <span dir="ltr">EOD</span> בלבד, הסטופ היומי קבוע לפי גודל החשבון:
                </p>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                      <th className="text-right pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>גודל חשבון</th>
                      <th className="text-left pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>סטופ יומי</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "25K", dll: "$500" },
                      { size: "50K", dll: "$1,000" },
                      { size: "100K", dll: "$1,500" },
                      { size: "150K", dll: "$2,000" },
                    ].map((row) => (
                      <tr key={row.size} style={{ borderBottom: "1px solid var(--surface-border)" }}>
                        <td className="py-1 text-right" dir="ltr">{row.size}</td>
                        <td className="py-1 text-left font-semibold" dir="ltr" style={{ color: "var(--amber-400)" }}>{row.dll}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  הסטופ היומי מתאפס בכל יום מסחר חדש. פגיעה ב-<span dir="ltr">DLL</span> לא מכשילה את החשבון, אלא עוצרת את המסחר עד ליום המסחר הבא.
                </p>
              </div>
            }
          />
        </div>

        {/* Max Drawdown Callout */}
        <div className="mt-4">
          <CalloutBox
            variant="info"
            title="מקסימום Drawdown — מבחן EOD"
            accountType="eval"
            source={S.EOD_EVALUATIONS}
            body={
              <div className="space-y-2">
                <p>
                  זהו גבול ההפסד הכללי של החשבון. פגיעה בו <strong>מכשילה את המבחן</strong>,
                  בניגוד ל-<span dir="ltr">DLL</span> שהוא גבול יומי בלבד.
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  ה-Max Drawdown קבוע לפי גודל החשבון ואינו משתנה במהלך המבחן:
                </p>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                      <th className="text-right pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>גודל חשבון</th>
                      <th className="text-left pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>Max Drawdown</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "25K",  dd: "$1,000" },
                      { size: "50K",  dd: "$2,000" },
                      { size: "100K", dd: "$3,000" },
                      { size: "150K", dd: "$4,000" },
                    ].map((row) => (
                      <tr key={row.size} style={{ borderBottom: "1px solid var(--surface-border)" }}>
                        <td className="py-1 text-right" dir="ltr">{row.size}</td>
                        <td className="py-1 text-left font-semibold" dir="ltr" style={{ color: "var(--red-400)" }}>{row.dd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  ה-Max Drawdown מחושב לפי יתרת סוף יום — הוא אינו נגרר בזמן אמת כמו ב-Intraday.
                </p>
              </div>
            }
          />
        </div>

        <div className="mt-8">
          <CalloutBox
            variant="warning"
            title="הוראות תלויות — שימו לב"
            source={S.CLOSE_459}
            body={
              <div className="space-y-1.5">
                <p>הוראות שמחוברות לפוזיציה, כמו סטופ או לימיט, נסגרות יחד עם הפוזיציה.</p>
                <p>הוראות עצמאיות שלא מחוברות לפוזיציה אינן מתבטלות אוטומטית.</p>
                <p>
                  צריך לבטל אותן ידנית לפני <span dir="ltr">4:59 PM ET</span>.
                </p>
              </div>
            }
          />
        </div>

        <div className="mt-10">
          <Button
            label="פתחו מבחן EOD עם NOAM"
            href={APEX_URL}
            variant="primary"
            size="lg"
            external
          />
        </div>
      </section>

      {/* ── Phase Divider ────────────────────────────────────────── */}
      <SectionDivider
        variant="phase"
        rightLabel="↑ שלב המבחן"
        leftLabel="↓ שלב ה-PA"
      />

      {/* ── PA SECTION ─────────────────────────────────────────── */}
      <section id="pa">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--teal-400)" }}>
          שלב ה-PA מסוג EOD
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RuleCard
            title="חוק עקביות 50% (Consistency)"
            icon={TrendingUp}
            accountType="eod-pa"
            source={S.CONSISTENCY_50}
            body={
              <>
                <p>
                  היום הרווחי ביותר שלך חייב להיות <strong>פחות מ-50%</strong>{" "}
                  מסך הרווח הכולל.
                </p>
                <p className="mt-2">
                  כל עוד עברת 50%, כפתור בקשת התשלום לא זמין.
                </p>
                <p className="mt-2" style={{ color: "var(--green-400)" }}>
                  ✅ החישוב מתייחס רק לימים רווחיים.
                </p>
              </>
            }
          />

          <RuleCard
            title="רשת ביטחון לפי גודל חשבון"
            icon={ShieldAlert}
            accountType="eod-pa"
            source={S.EOD_PAYOUTS}
            body={
              <div className="space-y-2">
                <div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    רשת הביטחון היא רף ההפסד של החשבון בתוספת <span dir="ltr">$100</span>.
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    רק רווח מעל רשת הביטחון ניתן למשיכה.
                  </p>
                </div>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                      <th className="text-right pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>גודל חשבון</th>
                      <th className="text-left pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>רשת ביטחון</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "25K", net: "$26,100" },
                      { size: "50K", net: "$52,100" },
                      { size: "100K", net: "$103,100" },
                      { size: "150K", net: "$154,100" },
                    ].map((row) => (
                      <tr key={row.size} style={{ borderBottom: "1px solid var(--surface-border)" }}>
                        <td className="py-1 text-right" dir="ltr">{row.size}</td>
                        <td className="py-1 text-left font-semibold" dir="ltr" style={{ color: "var(--teal-400)" }}>{row.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  רשת הביטחון נשארת בתוקף לאורך כל חיי חשבון ה-PA.
                </p>
              </div>
            }
          />

          <RuleCard
            title="מבנה חלוקת הרווחים"
            icon={Wallet}
            accountType="universal"
            source={S.EOD_PAYOUTS}
            body={
              <>
                <p>
                  <strong style={{ color: "var(--gold-300)" }}>100% לסוחר</strong>{" "}
                  על כל תשלום מאושר.
                </p>
                <p className="mt-2" style={{ color: "var(--text-muted)" }}>
                  Apex משלמים 100% מסכום התשלום שאושר, בכפוף לכללי הזכאות לתשלום.
                </p>
              </>
            }
          />

          <RuleCard
            title="מגבלת 20 חשבונות PA פעילים"
            icon={ShieldAlert}
            accountType="pa"
            source={S.PAYOUT_RULES}
            body="לסוחר מותר להחזיק עד 20 חשבונות PA פעילים בו-זמנית. חריגה ממגבלה זו חוסמת את האפשרות לבקש תשלומים."
          />
        </div>

        {/* DLL in EOD PA — tier-based */}
        <div id="tier-dll" className="mt-4">
          <CalloutBox
            variant="info"
            title="DLL לפי Tier ב-PA"
            accountType="eod-pa"
            body={
              <div className="space-y-2">
                <p>
                  בחשבונות <span dir="ltr">PA</span>, ה-<span dir="ltr">DLL</span> ומקסימום
                  החוזים נקבעים לפי ה-<span dir="ltr">Tier</span> של החשבון.
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  ה-<span dir="ltr">Tier</span> מתעדכן לפי יתרת סוף היום, וחל על הסשן הבא.
                </p>
                <TierTableWidget />
              </div>
            }
          />
        </div>

        {/* Max Drawdown in EOD PA */}
        <div className="mt-4">
          <CalloutBox
            variant="info"
            title="מקסימום Drawdown — חשבון PA"
            accountType="eod-pa"
            source={S.EOD_PAYOUTS}
            body={
              <div className="space-y-2">
                <p>
                  זהו גבול ההפסד הכללי של חשבון ה-<span dir="ltr">PA</span>. פגיעה בו <strong>מכשילה את החשבון</strong>.
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  ה-Max Drawdown קבוע לפי גודל החשבון ואינו משתנה לאורך חיי ה-<span dir="ltr">PA</span>:
                </p>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--surface-border)" }}>
                      <th className="text-right pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>גודל חשבון</th>
                      <th className="text-left pb-1.5 font-medium" style={{ color: "var(--text-muted)" }}>Max Drawdown</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "25K",  dd: "$1,000" },
                      { size: "50K",  dd: "$2,000" },
                      { size: "100K", dd: "$3,000" },
                      { size: "150K", dd: "$4,000" },
                    ].map((row) => (
                      <tr key={row.size} style={{ borderBottom: "1px solid var(--surface-border)" }}>
                        <td className="py-1 text-right" dir="ltr">{row.size}</td>
                        <td className="py-1 text-left font-semibold" dir="ltr" style={{ color: "var(--red-400)" }}>{row.dd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  ה-Max Drawdown מחושב לפי יתרת סוף יום — הוא אינו נגרר בזמן אמת.
                </p>
              </div>
            }
          />
        </div>

        {/* 6-payout timeline */}
        <div className="mt-8 card p-6">
          <h3 className="font-semibold mb-4 text-base" style={{ color: "var(--text-primary)" }}>
            מגבלת 6 תשלומים לחשבון
          </h3>
          <TimelineStrip
            steps={[
              { label: "תשלום 1" },
              { label: "תשלום 2" },
              { label: "תשלום 3" },
              { label: "תשלום 4" },
              { label: "תשלום 5" },
              { label: "תשלום 6" },
              { label: "חשבון נסגר", variant: "closure" },
            ]}
          />
          <p className="text-sm mt-4" style={{ color: "var(--text-secondary)" }}>
            אחרי התשלום השישי, חשבון ה-PA נסגר.
          </p>
          <div className="mt-3">
            <a
              href={S.EOD_PAYOUTS.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs inline-flex items-center gap-1 hover:underline"
              style={{ color: "var(--teal-400)" }}
            >
              {S.EOD_PAYOUTS.title} ↗
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button label="פתח מבחן ב-Apex" href={APEX_URL} variant="primary" external />
          <CouponChip size="sm" />
        </div>
      </section>

    </div>
  );
}
