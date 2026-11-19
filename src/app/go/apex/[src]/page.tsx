import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GoInterstitial } from "@/components/analytics/GoInterstitial";
import { sanitizeSrc } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Continuing to Apex",
  robots: { index: false, follow: false },
};

export default async function GoApexPage({
  params,
}: {
  params: Promise<{ src: string }>;
}) {
  const { src } = await params;
  if (!sanitizeSrc(src)) notFound();
  return <GoInterstitial />;
}
