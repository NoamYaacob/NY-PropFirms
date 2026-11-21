import type { Metadata } from "next";
import { OptionB } from "@/components/design/option-b";

export const metadata: Metadata = {
  title: "The desk — NY Prop Firms",
  description: "Design preview. Independent English homepage concept. Not indexed.",
  robots: { index: false, follow: false },
};

export default function DesignBPage() {
  return <OptionB />;
}
