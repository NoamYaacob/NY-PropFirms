import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ExternalLink } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";
import { WhatsAppButtons } from "@/components/ui/WhatsAppButtons";
import { ABOUT_DISCLOSURE, PRIVACY_NOTICE } from "@/lib/disclosureCopy";

export const metadata: Metadata = {
  title: "אודות NY Prop Firms — מי אנחנו וגילוי נאות",
  description:
    "NY Prop Firms הוא מדריך בעברית לכללי Apex Trader Funding. האתר אינו שייך ל-Apex Trader Funding ואינו מייצג אותה. אנחנו שותפי הפניה (Affiliate) של Apex.",
  alternates: { canonical: "https://ny-propfirms.com/about" },
  openGraph: {
    title: "אודות NY Prop Firms — מי אנחנו וגילוי נאות",
    description:
      "NY Prop Firms הוא מדריך בעברית לכללי Apex Trader Funding. האתר אינו שייך ל-Apex Trader Funding ואינו מייצג אותה. אנחנו שותפי הפניה (Affiliate) של Apex.",
    url: "https://ny-propfirms.com/about",
  },
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "בית", item: "https://ny-propfirms.com/" },
    { "@type": "ListItem", position: 2, name: "אודות", item: "https://ny-propfirms.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <div className="container-page py-12 max-w-3xl">
      <JsonLd data={BREADCRUMB_JSONLD} />
      <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        אודות
      </h1>
      <p className="text-base mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        NY Prop Firms הוא מדריך בעברית לחוקי Apex Trader Funding.
        המטרה שלנו היא להנגיש לסוחרים בישראל את הכללים, ההבדלים והעדכונים בצורה ברורה ופשוטה.
      </p>

      {/* Who we are */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          מי אנחנו
        </h2>
        <div className="text-base leading-relaxed space-y-2" style={{ color: "var(--text-secondary)" }}>
          <p>אנחנו אתר שנבנה כדי להנגיש בעברית את כללי חברות הפרופ לציבור הסוחרים הישראלי.</p>
          <p>המיקוד שלנו כרגע הוא Apex Trader Funding.</p>
        </div>
      </section>

      <SectionDivider variant="subtle" />

      {/* How we work */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          איך אנחנו עובדים
        </h2>
        <div className="text-base leading-relaxed space-y-2" style={{ color: "var(--text-secondary)" }}>
          <p>כל המידע באתר מבוסס על הכללים הרשמיים ומקושר למקור.</p>
          <p>אנחנו לא מוסיפים הבטחות, לא מנהלים חשבונות ולא מבצעים מסחר עבור אחרים.</p>
          <p>
            כדאי תמיד לבדוק גם את{" "}
            <a
              href="https://apextraderfunding.com/help-center/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline hover:text-[var(--text-primary)]"
            >
              המקור הרשמי של Apex
              <ExternalLink size={13} />
            </a>{" "}
            לפני החלטה.
          </p>
        </div>
      </section>

      <SectionDivider variant="subtle" />

      {/* Full Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          גילוי נאות מלא
        </h2>
        <div className="text-base leading-relaxed space-y-2" style={{ color: "var(--text-secondary)" }}>
          <p>אנחנו לא Apex Trader Funding, לא מייצגים אותם ולא פועלים מטעמם.</p>
          <p>המידע באתר נועד לעזור להבין את הכללים, אבל לפני כל החלטה חשוב לבדוק גם את המקור הרשמי של Apex.</p>
          <p>אין באתר ייעוץ השקעות, ייעוץ פיננסי או הבטחה לרווח.</p>
        </div>
      </section>

      <SectionDivider variant="subtle" />

      {/* Affiliate disclosure */}
      <section id="disclosure" className="mb-8 scroll-mt-24">
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
          <p>{ABOUT_DISCLOSURE}</p>
        </div>
      </section>

      <SectionDivider variant="subtle" />

      <section id="privacy" className="mb-8 scroll-mt-24">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          פרטיות ואנליטיקה
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {PRIVACY_NOTICE}
        </p>
      </section>

      <SectionDivider variant="subtle" />

      {/* Official links */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          קישורים רשמיים
        </h2>
        <div className="flex flex-col gap-3">
          {[
            { label: "אתר Apex Trader Funding",  href: "https://apextraderfunding.com" },
            { label: "מרכז התמיכה של Apex",      href: "https://apextraderfunding.com/help-center/" },
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

      <SectionDivider variant="subtle" />

      {/* WhatsApp */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          קהילת הווטסאפ
        </h2>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          עדכונים, הסברים ותוכן על Apex
        </p>
        <WhatsAppButtons />
      </section>

      {/* CTA */}
      <Button label="לכללי Apex ←" href="/apex" variant="secondary" />

    </div>
  );
}
