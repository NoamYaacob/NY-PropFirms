import Link from "next/link";
import { Info } from "lucide-react";

interface DisclaimerBlockProps {
  variant?: "inline" | "full";
}

export function DisclaimerBlock({ variant = "inline" }: DisclaimerBlockProps) {
  if (variant === "inline") {
    return (
      <div
        className="flex items-start gap-2.5 px-5 py-4 rounded-xl text-sm"
        style={{
          backgroundColor: "var(--surface-subtle)",
          border: "1px solid var(--surface-border)",
          color: "var(--text-muted)",
        }}
      >
        <Info size={15} style={{ color: "var(--text-muted)", flexShrink: 0, marginTop: 1 }} />
        <span>
          אתר זה אינו שייך ל-Apex Trader Funding ואינו מייצג אותה. המידע מבוסס על
          מסמכי Apex הרשמיים.{" "}
          <Link href="/about" className="underline hover:text-[var(--text-secondary)]">
            גילוי נאות מלא
          </Link>
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
      <p>
        אתר זה אינו שייך ל-Apex Trader Funding, אינו מייצג אותה, ואינו פועל
        מטעמה. כל הסימנים המסחריים שייכים לבעליהם.
      </p>
      <p>המסחר בחוזים עתידיים כרוך בסיכון גבוה של אובדן הון. אין באתר זה ייעוץ השקעות.</p>
      <p>
        המידע המוצג נכון למועד כתיבתו ועשוי להשתנות. לפני קבלת כל החלטה,
        בדקו תמיד ישירות מול{" "}
        <a
          href="https://support.apextraderfunding.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[var(--text-primary)]"
        >
          מרכז התמיכה של Apex
        </a>
        .
      </p>
      <p>
        ייתכן שנקבל עמלת הפניה בעת שימוש בקוד <span dir="ltr">NOAM</span>. אין בכך משום
        המלצה לפתוח חשבון.
      </p>
    </div>
  );
}
