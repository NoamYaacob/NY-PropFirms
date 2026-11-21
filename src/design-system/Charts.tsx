/* Illustrative charts. Deterministic candles, never market data. */
export type Candle = { o: number; h: number; l: number; c: number; v: number };

export const CANDLES: Candle[] = (() => {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const out: Candle[] = [];
  let price = 40;
  for (let i = 0; i < 34; i += 1) {
    const o = price;
    const drift = i < 20 ? 0.5 : 0.9;
    const c = o + (rnd() - 0.42) * 9 + drift;
    const h = Math.max(o, c) + rnd() * 4;
    const l = Math.min(o, c) - rnd() * 4;
    out.push({ o, h, l, c, v: 0.25 + rnd() * 0.75 });
    price = c;
  }
  return out;
})();

export function CandleChart({ title = "Illustrative path · EOD level", id = "lvl" }: { title?: string; id?: string }) {
  const W = 560;
  const H = 270;
  const left = 14;
  const right = 14;
  const top = 16;
  const priceBottom = 196;
  const volTop = 210;
  const volBottom = 258;
  const min = Math.min(...CANDLES.map((c) => c.l));
  const max = Math.max(...CANDLES.map((c) => c.h));
  const y = (p: number) => priceBottom - ((p - min) / (max - min)) * (priceBottom - top);
  const step = (W - left - right) / CANDLES.length;
  const x = (i: number) => left + step * i + step / 2;
  const bw = Math.max(4, step * 0.56);
  const gap = 11;
  let hwm = -Infinity;
  let levelPath = "";
  let lastLevel = 0;
  CANDLES.forEach((c, i) => {
    hwm = Math.max(hwm, c.c);
    if (i % 6 === 5 || i === 0) lastLevel = hwm - gap;
    const ly = y(lastLevel).toFixed(1);
    levelPath += `${i === 0 ? "M" : "L"}${(x(i) - step / 2).toFixed(1)} ${ly} L${(x(i) + step / 2).toFixed(1)} ${ly} `;
  });
  return (
    <article className="ds-card ds-glow overflow-hidden" aria-label="Illustrative candlestick chart with a stepped EOD level">
      <div className="ds-bar">
        <span className="ds-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <p className="ds-mono ds-bar-title">{title}</p>
        <span className="ds-pill ds-pill-solid ds-mono">Sample</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label="Illustrative candlesticks with a gold stepped EOD level. Not market data and not an account result.">
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f3dd94" stopOpacity="1" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((n) => (
          <line key={n} x1={left} x2={W - right} y1={top + ((priceBottom - top) / 4) * n} y2={top + ((priceBottom - top) / 4) * n} stroke="var(--ds-grid)" />
        ))}
        {CANDLES.map((c, i) => {
          const up = c.c >= c.o;
          const bodyTop = y(Math.max(c.o, c.c));
          const bodyH = Math.max(2, Math.abs(y(c.o) - y(c.c)));
          return (
            <g key={i}>
              <line x1={x(i)} x2={x(i)} y1={y(c.h)} y2={y(c.l)} stroke={up ? "var(--ds-up)" : "var(--ds-down)"} strokeWidth="1.4" />
              <rect x={x(i) - bw / 2} y={bodyTop} width={bw} height={bodyH} rx="1" fill={up ? "var(--ds-up)" : "var(--surface-base)"} stroke={up ? "var(--ds-up)" : "var(--ds-down)"} strokeWidth="1.4" />
              <rect x={x(i) - bw / 2} y={volBottom - c.v * (volBottom - volTop)} width={bw} height={c.v * (volBottom - volTop)} rx="1" fill="var(--ds-vol)" />
            </g>
          );
        })}
        <path d={levelPath} fill="none" stroke="var(--ds-up)" strokeWidth="2.4" strokeLinejoin="round" />
        <text x={left + 4} y={volTop - 4} fill="var(--ds-text)" fontSize="12" className="ds-mono">
          VOLUME
        </text>
      </svg>
      <div className="ds-legend">
        <span>
          <i className="ds-key ds-key-up" /> Up
        </span>
        <span>
          <i className="ds-key ds-key-down" /> Down
        </span>
        <span>
          <i className="ds-key ds-key-lvl" /> Sample EOD level
        </span>
      </div>
      <p className="px-4 pb-3 text-[15px] leading-snug" style={{ color: "var(--ds-strong)" }}>
        Illustrative candles. Not market data, not an account result, not a forecast.
      </p>
    </article>
  );
}

/** Two-panel "EOD steps at the close / Intraday follows the session" illustration for the drawdown essay. */
export function LevelCompare() {
  const price = "M10 112 C 40 110, 62 84, 100 80 S 160 104, 200 88 S 262 52, 300 60 S 336 64, 360 40";
  const panels = [
    { name: "EOD", note: "level steps at the close", path: "M 10 128 H 130 V 104 H 250 V 82 H 360" },
    { name: "Intraday", note: "level follows the session", path: "M 10 128 H 60 V 116 H 110 V 98 H 170 V 84 H 230 V 68 H 290 V 54 H 360" },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {panels.map((p) => (
        <div key={p.name} className="ds-screen" style={{ minHeight: 170 }}>
          <svg viewBox="0 0 370 150" preserveAspectRatio="none" className="ds-screen-svg" style={{ minHeight: 170 }} role="img" aria-label={`Illustration: ${p.name} level, ${p.note}. Not an account result.`}>
            {[30, 70, 110].map((gy) => (
              <line key={gy} x1="10" x2="360" y1={gy} y2={gy} stroke="var(--ds-grid)" vectorEffect="non-scaling-stroke" />
            ))}
            <path d={price} fill="none" stroke="var(--ds-strong)" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
            <path d={p.path} fill="none" stroke="var(--gold-500)" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
          </svg>
          <p className="ds-screen-note">
            {p.name}: {p.note}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Spark({ points }: { points: number[] }) {
  const w = 96;
  const h = 34;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const d = points
    .map((point, index) => {
      const px = (index / (points.length - 1)) * w;
      const py = h - ((point - min) / (max - min || 1)) * (h - 8) - 4;
      return `${index === 0 ? "M" : "L"}${px.toFixed(1)} ${py.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="ds-spark" aria-hidden>
      <path d={d} />
    </svg>
  );
}
