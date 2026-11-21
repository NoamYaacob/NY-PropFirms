import { CopyPage, copyMeta } from "@/components/copy/CopyPage";

export const metadata = copyMeta("about");

export default function AboutPage() {
  return <CopyPage name="about" />;
}
