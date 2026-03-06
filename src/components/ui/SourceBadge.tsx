export interface SourceBadgeProps {
  title: string;
  href: string;
  short?: boolean;
}

export function SourceBadge({ title, href }: SourceBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="inline-flex items-center gap-1 text-xs font-medium rounded-full px-2.5 py-0.5 transition-colors duration-150 hover:underline"
      style={{
        backgroundColor: "var(--teal-900)",
        color: "var(--teal-400)",
        border: "1px solid var(--teal-edge)",
      }}
    >
      מקור ↗
    </a>
  );
}
