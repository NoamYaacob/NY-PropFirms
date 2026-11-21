"use client";

import { useState } from "react";
import Link from "next/link";
import { buildRows, dollarsToPoints, type Model, type Phase } from "@/lib/engines/comparison";
import { CME, CME_SYMBOLS, EVAL, OFFICIAL_LINKS, PA, SIZES, STARTING_BALANCE, type CmeSymbol, type Size } from "@/data/apex";
import { CmeSource, FactChip } from "@/design-system/Blocks";
import { ExtLink, Seg, ToolShell } from "./controls";

type View = Phase | "Side-by-Side";
type ModelPick = Model | "Both";
type Conv = "USD" | CmeSymbol;

export function ComparisonTool({ id = "account-comparison", anchorOffset = false }: { id?: string; anchorOffset?: boolean }) {
  const [view, setView] = useState<View>("Evaluation");
  const [modelPick, setModelPick] = useState<ModelPick>("Both");
  const [size, setSize] = useState<Size>("50K");
  const [conv, setConv] = useState<Conv>("USD");
  const models: Model[] = modelPick === "Both" ? ["EOD", "Intraday"] : [modelPick];
  const phases: Phase[] = view === "Side-by-Side" ? ["Evaluation", "Performance Account"] : [view];

  return (
    <ToolShell
      id={id}
      anchorOffset={anchorOffset}
      title="Account Comparison Tool"
      pill="Apex only · Evaluation and PA kept apart"
      framing="Current Apex EOD and Intraday accounts only (Legacy not included). Evaluation and Performance Account rules are shown separately."
      disclaimer={
        <p>
          Unofficial comparison helper, not advice; Apex&apos;s system decides. Current Apex EOD and Intraday accounts only (Legacy not included); Evaluation and Performance Account rules shown separately. Point equivalents use CME multipliers checked 21 Nov 2026 (NQ $20, MNQ $2, ES $50, MES $5/pt).
        </p>
      }
      links={
        <>
          <Link href="/sources" className="ds-link">Official sources</Link> · <ExtLink href={OFFICIAL_LINKS.helpCenter}>Apex Help Center</ExtLink>
        </>
      }
    >
      <div className="ds-grid2">
        <Seg label="Phase" value={view} onChange={setView} options={[{ value: "Evaluation", label: "Evaluation" }, { value: "Performance Account", label: "Performance Account" }, { value: "Side-by-Side", label: "Eval vs PA" }]} />
        <Seg label="Model" value={modelPick} onChange={setModelPick} options={[{ value: "EOD", label: "EOD" }, { value: "Intraday", label: "Intraday" }, { value: "Both", label: "Both" }]} />
      </div>
      <div className="ds-sizecards" role="group" aria-label="Account size">
        {SIZES.map((s) => (
          <button key={s} type="button" className="ds-sizecard ds-mono" aria-pressed={size === s} onClick={() => setSize(s)}>
            <span className="ds-sizecard-n">{s}</span>
            <span className="ds-sizecard-b">{`$${STARTING_BALANCE[s].toLocaleString("en-US")}`}</span>
          </button>
        ))}
      </div>
      <Seg label="Show drawdown as" value={conv} onChange={setConv} options={[{ value: "USD", label: "USD only" }, ...CME_SYMBOLS.map((s) => ({ value: s as Conv, label: `${s} points` }))]} />

      {phases.map((phase) => {
        const rows = buildRows(phase, size, models);
        return (
          <div key={phase} className="ds-tablewrap">
            <table className="ds-table ds-compare" aria-label={`${phase}, ${size}`}>
              <caption>
                {phase} · {size}
              </caption>
              <thead>
                <tr>
                  <th scope="col">Rule</th>
                  {models.map((m) => (
                    <th key={m} scope="col">
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {models.map((m) => {
                      const c = row.cells[m];
                      if (!c) return <td key={m} />;
                      const isDd = row.label.startsWith("Max Drawdown");
                      const pts = isDd && conv !== "USD" && c.dollars != null ? dollarsToPoints(c.dollars, conv) : null;
                      return (
                        <td key={m}>
                          {c.text == null ? (
                            <a href={c.src} target="_blank" rel="noopener noreferrer" className="ds-link">
                              See Apex&apos;s page
                            </a>
                          ) : (
                            <>
                              {c.text}
                              {pts != null ? <span className="ds-cell-sub"> ≈ {pts} {conv} pts. Published account rule, not a stop.</span> : null}
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
      <p className="ds-hint">Platform lock rows: check the platform on your account. See the Evaluation Rules and Performance Account Rules pages.</p>
      <div className="ds-chips">
        <FactChip fact={EVAL.EOD[size].profitTarget} size={size} label="Apex: EOD Evaluations" />
        <FactChip fact={EVAL.Intraday[size].profitTarget} size={size} label="Apex: Intraday Evaluations" />
        <FactChip fact={PA.EOD[size].safetyNet} size={size} label="Apex: EOD Payouts" />
        <FactChip fact={PA.Intraday[size].safetyNet} size={size} label="Apex: Intraday Payouts" />
        {conv !== "USD" ? <CmeSource /> : null}
      </div>
      <p className="sr-only">{CME[conv === "USD" ? "NQ" : conv].label}</p>
    </ToolShell>
  );
}
