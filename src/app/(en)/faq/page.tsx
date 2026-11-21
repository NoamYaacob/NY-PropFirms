import { CopyPage, copyMeta } from "@/components/copy/CopyPage";

export const metadata = copyMeta("faq");

export default function FaqPage() {
  return <CopyPage name="faq" faq />;
}
