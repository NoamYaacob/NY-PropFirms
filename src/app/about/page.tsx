import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CopyButton } from "@/components/ui/CopyButton";
import { Button } from "@/components/ui/Button";
import { WhatsAppButtons } from "@/components/ui/WhatsAppButtons";
import { SECONDARY_COUPON } from "@/lib/coupons";

export const metadata: Metadata = {
  title: "אודות | NY Prop Firms",
  description: "אודות NY Prop Firms — גילוי נאות מלא ומידע על האתר",
};

export default function AboutPage() {
  return (
    <div className="container-page py-12 max-w-3xl">
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
              href="https://support.apextraderfunding.com"
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
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          גילוי עמלת הפניה
        </h2>
        <div
          className="rounded-xl p-5 text-sm leading-relaxed space-y-2"
          style={{
            backgroundColor: "var(--gold-900)",
            border: "1px solid var(--gold-edge)",
            color: "var(--text-secondary)",
          }}
        >
          <p>ייתכן שנקבל עמלת הפניה אם תפתחו חשבון דרך קוד <span dir="ltr">NOAM</span>.</p>
          <p>אין לכם עלות נוספת בגלל זה.</p>
          <p>השימוש בקוד הוא בחירה שלכם בלבד.</p>
        </div>
      </section>

      <SectionDivider variant="subtle" />

      {/* Secondary coupon — subtle, fallback only */}
      <section className="mb-8">
        <h2 className="text-base font-semibold mb-2" style={{ color: "var(--text-secondary)" }}>
          קוד נוסף
        </h2>
        <div className="text-sm leading-relaxed space-y-2" style={{ color: "var(--text-muted)" }}>
          <p>
            ברוב המקרים הקוד הראשי הוא <span dir="ltr" className="font-medium">NOAM</span>.
            אם מסיבה כלשהי הקוד לא מתקבל בקופה, אפשר לנסות גם את <span dir="ltr">TLHCODE</span>.
          </p>
          <CopyButton value={SECONDARY_COUPON} label="העתק TLHCODE" size="sm" />
        </div>
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
            { label: "מרכז התמיכה של Apex",      href: "https://support.apextraderfunding.com" },
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
          קהילה ויצירת קשר
        </h2>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          אפשר להצטרף לקבוצת הווטסאפ או לשלוח לי הודעה ישירה.
        </p>
        <WhatsAppButtons />
      </section>

      {/* CTA */}
      <Button label="לכללי Apex ←" href="/apex" variant="secondary" />

    </div>
  );
}
