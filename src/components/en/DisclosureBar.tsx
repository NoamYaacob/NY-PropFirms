import Link from "next/link";

export function DisclosureBar() {
  return (
    <div style={{ backgroundColor: "var(--surface-overlay)", color: "var(--text-secondary)" }}>
      <div className="container-page py-2 text-[13.5px] leading-snug">
        Independent site. I&apos;m an Apex Trader Funding affiliate and may earn a commission if you use code NOAM or an affiliate link.{" "}
        <strong style={{ color: "var(--text-primary)" }}>#ad</strong>
        {" · "}Not financial advice.{" "}
        <Link href="/en/how-i-make-money" className="underline" style={{ color: "var(--teal-400)" }}>
          How I make money →
        </Link>
      </div>
    </div>
  );
}
