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
  showSources?: boolean;
}

export function ComparisonBlock({ rows, compact = false, showSources = true }: ComparisonBlockProps) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid var(--surface-border)" }}
    >
      {/* Header */}
      <div
        className="hidden sm:grid grid-cols-3 text-xs font-semibold uppercase tracking-wider"
        style={{
          backgroundColor: "var(--surface-overlay)",
          color: "var(--text-secondary)",
          borderBottom: "1px solid var(--surface-border)",
        }}
      >
        <div className="px-2 sm:px-4 py-2 sm:py-3">כלל</div>
        <div className="px-2 sm:px-4 py-2 sm:py-3 text-center" style={{ color: "#7EA0FF" }}>EOD</div>
        <div className="px-2 sm:px-4 py-2 sm:py-3 text-center" style={{ color: "var(--teal-400)" }}>Intraday</div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-1 sm:grid-cols-3 items-start sm:items-center border-b last:border-b-0"
          style={{
            borderColor: "var(--surface-border)",
            backgroundColor: i % 2 === 0 ? "var(--surface-raised)" : "var(--surface-subtle)",
          }}
        >
          <div
            className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            {row.feature}
          </div>
          <div
            className="px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-sm sm:text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="sm:hidden font-medium" style={{ color: "#7EA0FF" }}>EOD · </span>
            {row.eodValue}
          </div>
          <div
            className="px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="sm:hidden font-medium" style={{ color: "var(--teal-400)" }}>Intraday · </span>
            {row.intradayValue}
            {showSources && row.source && <SourceBadge {...row.source} short />}
          </div>
        </div>
      ))}
    </div>
  );
}
