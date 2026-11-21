import type { Metadata } from "next";
import { OptionC } from "@/components/design/option-c";

export const metadata: Metadata = {
  title: "The house — NY Prop Firms",
  description: "Design preview. Independent English homepage concept. Not indexed.",
  robots: { index: false, follow: false },
};

export default function DesignCPage() {
  return <OptionC />;
}
