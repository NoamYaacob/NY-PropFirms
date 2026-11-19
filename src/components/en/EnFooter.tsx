import Link from "next/link";
import { LAST_CHECKED } from "@/lib/en/links";

export function EnFooter() {
  return (
    <footer
      className="mt-10 border-t"
      style={{
        backgroundColor: "var(--surface-subtle)",
        borderColor: "var(--surface-border)",
        color: "var(--text-secondary)",
      }}
    >
      <div className="container-page py-8 space-y-3 text-sm leading-relaxed">
        <p>
          <strong style={{ color: "var(--text-primary)" }}>#ad · Affiliate disclosure.</strong> NY Prop Firms is independent and is not owned by, operated by, or acting for Apex Trader Funding. I&apos;m an Apex affiliate and may earn a referral commission when you buy with code NOAM or through Apex links marked &quot;affiliate link&quot;. Apex&apos;s Help Center lists its rules by account type and size. Apex runs its own promotions, so compare the checkout price with and without the code.{" "}
          <Link href="/en/how-i-make-money" className="underline" style={{ color: "var(--teal-400)" }}>
            How I make money
          </Link>
          {" · "}
          <Link href="/en/how-i-make-money#privacy" className="underline" style={{ color: "var(--teal-400)" }}>
            Privacy &amp; analytics
          </Link>
          .
        </p>
        <p>
          <strong style={{ color: "var(--text-primary)" }}>Risk disclaimer.</strong> Nothing here is financial, investment, or tax advice. Futures trading involves substantial risk of loss and is not suitable for everyone. Apex evaluations and Performance Accounts are simulated accounts. Rules can change at any time; Apex&apos;s official pages always win. Rules last checked: {LAST_CHECKED}.
        </p>
        <p>
          <Link href="/en/sources" className="underline" style={{ color: "var(--teal-400)" }}>
            Official sources
          </Link>
          {" · "}
          <Link href="/en/faq" className="underline" style={{ color: "var(--teal-400)" }}>
            FAQ
          </Link>
          {" · "}
          <Link href="/" hrefLang="he" className="underline" style={{ color: "var(--teal-400)" }}>
            <bdi lang="he">עברית</bdi>
          </Link>
          {" · © 2026 NY Prop Firms"}
        </p>
      </div>
    </footer>
  );
}
