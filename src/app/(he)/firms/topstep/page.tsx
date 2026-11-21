import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "TopStep — בקרוב | NY Prop Firms" };

export default function TopStepPage() {
  return (
    <div className="container-page py-20 text-center">
      <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>TopStep</h1>
      <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>דף זה יתווסף בקרוב.</p>
      <Link href="/" className="text-sm underline" style={{ color: "var(--gold-300)" }}>חזרה לדף הבית ←</Link>
    </div>
  );
}
