import { CopyPage, copyMeta } from "@/components/copy/CopyPage";

export const metadata = copyMeta("evaluation-rules");

export default function EvaluationRulesPage() {
  return <CopyPage name="evaluation-rules" />;
}
