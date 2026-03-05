import Link from "next/link";

const LINKS = [
  { label: "ראשי", href: "/" },
  { label: "Apex", href: "/apex" },
  { label: "שאלות נפוצות", href: "/faq" },
  { label: "אודות", href: "/about" },
];

export function Footer() {
  return (
    <footer
      className="mt-24 border-t"
      style={{
        backgroundColor: "var(--surface-subtle)",
        borderColor: "var(--surface-border)",
      }}
    >
      <div className="container-page py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <div>
            <div className="font-bold text-base mb-1" dir="ltr">
              <span style={{ color: "var(--gold-300)" }}>NY </span>
              <span style={{ color: "var(--text-primary)" }}>PROP FIRMS</span>
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              המדריך הישראלי לחברות פרופ טריידינג
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm transition-colors hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="mt-8 pt-6 border-t text-xs space-y-1"
          style={{
            borderColor: "var(--surface-border)",
            color: "var(--text-muted)",
          }}
        >
          <p>
            אתר זה אינו שייך ל-Apex Trader Funding ואינו מייצג אותה. המידע מוצג
            לצורך הנגשה בעברית בלבד, על בסיס מסמכי Apex הרשמיים.
          </p>
          <p>
            ייתכן שנקבל עמלת הפניה בעת שימוש בקוד TLHCODE. אין כאן ייעוץ
            השקעות. המסחר בחוזים עתידיים כרוך בסיכון גבוה.{" "}
            <Link
              href="/about"
              className="underline hover:text-[var(--text-secondary)]"
            >
              גילוי נאות מלא
            </Link>
          </p>
          <p className="mt-3" style={{ color: "var(--surface-border-strong)" }}>
            © 2025 NY Prop Firms
          </p>
        </div>
      </div>
    </footer>
  );
}
