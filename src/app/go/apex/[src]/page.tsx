import type { Metadata } from "next";
import { GoInterstitial } from "@/components/analytics/GoInterstitial";

export const metadata: Metadata = {
  title: "Continuing to Apex",
  robots: { index: false, follow: false },
};

export default function GoApexPage() {
  return <GoInterstitial />;
}
