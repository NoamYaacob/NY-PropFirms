import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חברות פרופ | NY Prop Firms",
};

const FUTURE_FIRMS = [
  { name: "TopStep", slug: "topstep" },
  { name: "FTMO", slug: "ftmo" },
  { name: "Funded Trader", slug: "funded-trader" },
];

export default function FirmsPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        חברות פרופ
      </h1>
      <p className="text-base mb-10" style={{ color: "var(--text-secondary)" }}>
        עוד חברות יתווספו בקרוב. כרגע האתר מכסה את{" "}
        <Link href="/apex" className="underline hover:text-[var(--text-primary)]" style={{ color: "var(--gold-300)" }}>
          Apex Trader Funding
        </Link>
        .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Current: Apex */}
        <Link
          href="/apex"
          className="card p-6 flex flex-col gap-2 hover:border-[var(--gold-edge)] transition-colors group"
        >
          <span className="text-lg font-bold group-hover:text-[var(--gold-300)] transition-colors" style={{ color: "var(--text-primary)" }}>
            Apex Trader Funding
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full self-start" style={{ backgroundColor: "var(--green-900)", color: "var(--green-400)", border: "1px solid var(--green-edge)" }}>
            פעיל ←
          </span>
        </Link>

        {/* Future stubs */}
        {FUTURE_FIRMS.map((firm) => (
          <div
            key={firm.slug}
            className="rounded-xl p-6 flex flex-col gap-2 opacity-50"
            style={{
              backgroundColor: "var(--surface-raised)",
              border: "1px dashed var(--surface-border)",
            }}
          >
            <span className="text-lg font-bold" style={{ color: "var(--text-secondary)" }}>
              {firm.name}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full self-start" style={{ backgroundColor: "var(--surface-overlay)", color: "var(--text-muted)", border: "1px solid var(--surface-border)" }}>
              בקרוב
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
