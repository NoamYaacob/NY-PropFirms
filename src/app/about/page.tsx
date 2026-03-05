import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { DisclaimerBlock } from "@/components/ui/DisclaimerBlock";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "אודות | NY Prop Firms",
  description: "אודות NY Prop Firms — גילוי נאות מלא ומידע על האתר",
};

export default function AboutPage() {
  return (
    <div className="container-page py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
        אודות NY Prop Firms
      </h1>

      {/* Who we are */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          מי אנחנו
        </h2>
        <div className="text-base leading-relaxed space-y-3" style={{ color: "var(--text-secondary)" }}>
          <p>
            NY Prop Firms הוא אתר שנוצר כדי <strong style={{ color: "var(--text-primary)" }}>להנגיש בעברית</strong> את
            כללי חברות הפרופ לציבור הסוחרים הישראלי.
          </p>
          <p>
            אנחנו לא Apex Trader Funding, לא שותפים שלה, ולא מייצגים אותה
            בשום צורה. כל הסימנים המסחריים שייכים לבעליהם.
          </p>
        </div>
      </section>

      <SectionDivider variant="subtle" />

      {/* How we work */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          איך אנחנו עובדים
        </h2>
        <div className="text-base leading-relaxed space-y-3" style={{ color: "var(--text-secondary)" }}>
          <p>
            כל כלל המופיע באתר זה מבוסס על{" "}
            <strong style={{ color: "var(--text-primary)" }}>מסמכי התמיכה הרשמיים</strong> של
            Apex ומקושר ישירות למקור.
          </p>
          <p>
            אנו לא מוסיפים פרשנות, לא ממליצים על אסטרטגיות מסחר, ולא מנהלים
            חשבונות.
          </p>
          <p>
            הכללים המוצגים נכונים למועד כתיבתם. Apex עשויה לשנות את כלליה
            בכל עת — בדקו תמיד ישירות{" "}
            <a
              href="https://support.apextraderfunding.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline hover:text-[var(--text-primary)]"
            >
              במרכז התמיכה של Apex
              <ExternalLink size={13} />
            </a>
            .
          </p>
        </div>
      </section>

      <SectionDivider variant="subtle" />

      {/* Full Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          גילוי נאות מלא
        </h2>
        <DisclaimerBlock variant="full" />
      </section>

      <SectionDivider variant="subtle" />

      {/* Affiliate disclosure */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          גילוי עמלת הפניה
        </h2>
        <div
          className="rounded-xl p-5 text-sm leading-relaxed"
          style={{
            backgroundColor: "var(--gold-900)",
            border: "1px solid var(--gold-edge)",
            color: "var(--text-secondary)",
          }}
        >
          <p>
            ייתכן שנקבל עמלת הפניה מ-Apex Trader Funding כשמשתמשים
            פותחים חשבון דרך קוד TLHCODE.
          </p>
          <p className="mt-2">
            אין בכך משום המלצה לפתוח חשבון. ההחלטה לפתוח חשבון היא שלכם
            בלבד, לאחר קריאה עצמאית של כל הכללים ושיקול דעת עצמאי.
          </p>
        </div>
      </section>

      <SectionDivider variant="subtle" />

      {/* Official links */}
      <section>
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          קישורים רשמיים
        </h2>
        <div className="flex flex-col gap-3">
          {[
            { label: "אתר Apex Trader Funding", href: "https://apextraderfunding.com" },
            { label: "מרכז התמיכה של Apex", href: "https://support.apextraderfunding.com" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base hover:underline"
              style={{ color: "var(--teal-400)" }}
            >
              {link.label}
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
