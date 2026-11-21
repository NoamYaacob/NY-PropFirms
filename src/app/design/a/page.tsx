import type { Metadata } from "next";
import { OptionA } from "@/components/design/option-a";

export const metadata: Metadata = {
  title: "The briefing — NY Prop Firms",
  description: "Design preview. Independent English homepage concept. Not indexed.",
  robots: { index: false, follow: false },
};

export default function DesignAPage() {
  return <OptionA />;
}
