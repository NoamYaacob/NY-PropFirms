import Link from "next/link";
import { AFFILIATE_NOTE } from "@/lib/disclosureCopy";

type Props = { variant?: "inline" | "block"; className?: string };

export function AffiliateNote({ variant = "inline", className }: Props) {
  const body = (
    <>
      {AFFILIATE_NOTE}{" "}
      <Link href="/about#disclosure" className="underline">
        גילוי נאות מלא
      </Link>
    </>
  );

  if (variant === "inline") {
    return (
      <p
        className={`text-xs mt-2 ${className ?? ""}`}
        style={{ color: "var(--text-secondary)" }}
        data-disclosure="affiliate"
      >
        {body}
      </p>
    );
  }

  return (
    <aside
      role="note"
      className={`rounded-md border p-3 text-sm ${className ?? ""}`}
      style={{
        borderColor: "var(--surface-border)",
        color: "var(--text-secondary)",
      }}
      data-disclosure="affiliate"
    >
      {body}
    </aside>
  );
}
