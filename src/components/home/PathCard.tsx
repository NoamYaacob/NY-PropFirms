"use client";

import { useState } from "react";
import Link from "next/link";
import { EVAL, SIZES, usable, type AccountType, type Fact, type Size } from "@/data/apex";
import { Fallback, MiniSrc } from "@/design-system/Blocks";
import { Seg } from "@/components/tools/controls";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Evaluation stage only, exactly four rows. No PA figures, no prices, no ranking. */
export function PathCard() {
  const [type, setType] = useState<AccountType>("EOD");
  const [size, setSize] = useState<Size>("50K");
  const e = EVAL[type][size];
  const rows: Array<[string, Fact<number>, (v: number | null) => string]> = [
    ["Profit Target", e.profitTarget, (v) => usd(v as number)],
    ["Max Drawdown", e.maxDrawdown, (v) => usd(v as number)],
    ["Daily Loss Limit", e.dll, (v) => (v == null ? "N/A. Intraday Evaluation has no DLL" : usd(v))],
    ["Max Contracts (fixed)", e.maxContracts, (v) => String(v)],
  ];
  return (
    <article className="ds-card ds-term" aria-labelledby="pathcard-h">
      <div className="ds-bar">
        <span className="ds-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <h2 id="pathcard-h" className="ds-bar-title ds-bar-h">
          Path card: Evaluation stage
        </h2>
        <span className="ds-pill ds-mono">Informational</span>
      </div>
      <div className="ds-term-body">
        <div className="ds-grid2">
          <Seg label="Type" value={type} onChange={setType} options={[{ value: "EOD", label: "EOD" }, { value: "Intraday", label: "Intraday" }]} />
          <Seg label="Size" value={size} onChange={setSize} options={SIZES.map((s) => ({ value: s, label: s }))} />
        </div>
        <dl>
          {rows.map(([label, f, show]) => (
            <div key={label} className="ds-pathcard-row">
              <dt>{label}</dt>
              <dd>{usable(f) ? show(f.value) : <Fallback fact={f} />}</dd>
              <div style={{ gridColumn: "1 / -1" }}>
                <MiniSrc fact={f} />
              </div>
            </div>
          ))}
        </dl>
        <p className="ds-hint">
          {type} Evaluation, {size}. Not a recommendation to buy.{" "}
          <Link href="/performance-account-rules" className="ds-link">
            Performance Account rules differ: see PA Rules
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
