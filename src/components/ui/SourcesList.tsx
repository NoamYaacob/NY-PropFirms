import { ExternalLink } from "lucide-react";
import { Source } from "@/lib/sources";

interface SourcesListProps {
  sources: Source[];
}

export function SourcesList({ sources }: SourcesListProps) {
  return (
    <div
      className="rounded-xl px-6 py-5"
      style={{
        backgroundColor: "var(--surface-subtle)",
        border: "1px solid var(--surface-border)",
      }}
    >
      <h3
        className="text-sm font-semibold mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        מקורות הדף
      </h3>
      <ol className="flex flex-col gap-3">
        {sources.map((src, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="font-mono text-xs pt-0.5 shrink-0"
              style={{ color: "var(--text-muted)", minWidth: 20 }}
            >
              [{i + 1}]
            </span>
            <div>
              <a
                href={src.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium inline-flex items-center gap-1 hover:underline"
                style={{ color: "var(--teal-400)" }}
              >
                {src.title}
                <ExternalLink size={11} />
              </a>
              <p className="text-xs mt-0.5 break-all" style={{ color: "var(--text-muted)" }}>
                {src.href}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
