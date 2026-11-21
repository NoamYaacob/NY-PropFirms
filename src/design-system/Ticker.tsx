import { CME, CME_SYMBOLS } from "@/data/apex";

export function Ticker() {
  const items = CME_SYMBOLS.filter((s) => CME[s].pointValue.status === "VERIFIED_SNAPSHOT").map((s) => [s, `$${CME[s].pointValue.value}`] as const);
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="ds-ticker" aria-label="CME point values, per point">
      <div className="ds-ticker-track ds-mono text-[14px]" style={{ color: "var(--ds-strong)" }}>
        {row.map(([symbol, value], index) => (
          <span key={`${symbol}-${index}`} className="inline-flex items-center gap-3 px-3">
            <span style={{ color: "var(--ds-gold)" }}>CME</span>
            {symbol} {value}
            <span style={{ color: "var(--ds-text)" }}>per point</span>
          </span>
        ))}
      </div>
    </div>
  );
}
