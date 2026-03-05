interface SectionDividerProps {
  variant?: "subtle" | "section" | "phase";
  leftLabel?: string;
  rightLabel?: string;
}

export function SectionDivider({
  variant = "section",
  leftLabel,
  rightLabel,
}: SectionDividerProps) {
  if (variant === "subtle") {
    return (
      <hr
        className="my-6"
        style={{ borderColor: "var(--surface-border)", borderTopWidth: 1 }}
      />
    );
  }

  if (variant === "phase") {
    return (
      <div className="flex items-center gap-4 my-10">
        <div className="flex-1 h-px" style={{ backgroundColor: "var(--surface-border)" }} />
        <div className="flex items-center gap-3 shrink-0">
          {rightLabel && (
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: "var(--surface-overlay)",
                color: "var(--gold-300)",
                border: "1px solid var(--gold-edge)",
              }}
            >
              {rightLabel}
            </span>
          )}
          {leftLabel && (
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: "var(--surface-overlay)",
                color: "var(--teal-400)",
                border: "1px solid var(--teal-edge)",
              }}
            >
              {leftLabel}
            </span>
          )}
        </div>
        <div className="flex-1 h-px" style={{ backgroundColor: "var(--surface-border)" }} />
      </div>
    );
  }

  // section
  return (
    <hr
      className="my-12"
      style={{ borderColor: "var(--surface-border)", borderTopWidth: 1 }}
    />
  );
}
