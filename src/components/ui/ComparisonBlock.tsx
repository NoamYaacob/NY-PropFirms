import { SourceBadge, SourceBadgeProps } from "./SourceBadge";

export interface ComparisonRow {
  feature: string;
  eodValue: React.ReactNode;
  intradayValue: React.ReactNode;
  source?: SourceBadgeProps;
}

interface ComparisonBlockProps {
  rows: ComparisonRow[];
  compact?: boolean;
}

export function ComparisonBlock({ rows, compact = false }: ComparisonBlockProps) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid var(--surface-border)" }}
    >
      {/* Header */}
      <div
        className="grid grid-cols-3 text-xs font-semibold uppercase tracking-wider"
        style={{
          backgroundColor: "var(--surface-overlay)",
          color: "var(--text-secondary)",
          borderBottom: "1px solid var(--surface-border)",
        }}
      >
        <div className="px-4 py-3">כלל / תכונה</div>
        <div className="px-4 py-3 text-center" style={{ color: "#7EA0FF" }}>EOD</div>
        <div className="px-4 py-3 text-center" style={{ color: "var(--teal-400)" }}>Intraday</div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-3 items-center border-b last:border-b-0"
          style={{
            borderColor: "var(--surface-border)",
            backgroundColor: i % 2 === 0 ? "var(--surface-raised)" : "var(--surface-subtle)",
          }}
        >
          <div
            className={`px-4 ${compact ? "py-3" : "py-4"} text-sm font-medium`}
            style={{ color: "var(--text-primary)" }}
          >
            {row.feature}
          </div>
          <div
            className={`px-4 ${compact ? "py-3" : "py-4"} text-sm text-center`}
            style={{ color: "var(--text-secondary)" }}
          >
            {row.eodValue}
          </div>
          <div
            className={`px-4 ${compact ? "py-3" : "py-4"} text-sm`}
            style={{ color: "var(--text-secondary)" }}
          >
            <div className="flex flex-col items-center gap-1">
              {row.intradayValue}
              {row.source && <SourceBadge {...row.source} short />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
