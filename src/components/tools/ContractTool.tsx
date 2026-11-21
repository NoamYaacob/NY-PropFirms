"use client";

import { useState } from "react";
import { exceedsCap, lookupCap, notionalMove, formatUsd, type CapStage } from "@/lib/engines/contract";
import { CME, CME_SYMBOLS, EVAL, OFFICIAL_LINKS, PA, SIZES, TEXT, usable, type AccountType, type CmeSymbol, type Size } from "@/data/apex";
import { CmeSource, FactChip } from "@/design-system/Blocks";
import { ExtLink, NumField, Readout, Seg, ToolShell, parseNum } from "./controls";

export function ContractTool({ id = "contract-reference", anchorOffset = false }: { id?: string; anchorOffset?: boolean }) {
  const [symbol, setSymbol] = useState<CmeSymbol>("NQ");
  const [n, setN] = useState("1");
  const [pts, setPts] = useState("4");
  const [capStage, setCapStage] = useState<CapStage>("Evaluation");
  const [type, setType] = useState<AccountType>("EOD");
  const [size, setSize] = useState<Size>("50K");

  const nn = parseNum(n);
  const pp = parseNum(pts);
  const res = nn == null || pp == null || Number.isNaN(nn) || Number.isNaN(pp) ? null : notionalMove({ symbol, n: nn, points: pp });
  const cap = lookupCap(capStage, type, size);
  const notice = nn != null && !Number.isNaN(nn) ? exceedsCap(nn, cap) : null;

  return (
    <ToolShell
      id={id}
      anchorOffset={anchorOffset}
      title="Contract Multiplier & Apex Cap Reference"
      pill="N × pts × $/pt"
      disclaimer={
        <p>
          Unofficial helper, not advice; Apex&apos;s system decides. Notional CME arithmetic only (NQ $20/pt, MNQ $2/pt, ES $50/pt, MES $5/pt, checked 21 Nov 2026), not trade, sizing or stop advice. The Apex cap table is a separate reference by stage. Drawdown is not your stop.
        </p>
      }
      links={
        <>
          <ExtLink href={OFFICIAL_LINKS.positionSizing}>Apex: Position Sizing, Evaluation</ExtLink> · <ExtLink href={OFFICIAL_LINKS.scaling}>Scaling Levels, PA</ExtLink> · <ExtLink href={OFFICIAL_LINKS.prohibited}>Prohibited Activities</ExtLink>
        </>
      }
    >
      <Seg label="CME contract" value={symbol} onChange={setSymbol} options={CME_SYMBOLS.map((s) => ({ value: s, label: `${s} $${CME[s].pointValue.value}` }))} />
      <div className="ds-grid2">
        <NumField id={`${id}-n`} label="N (whole contracts)" value={n} onChange={setN} allowNegative={false} />
        <NumField id={`${id}-p`} label="Price move in points" value={pts} onChange={setPts} />
      </div>
      <div aria-live="polite">
        {res?.kind === "ok" ? (
          <>
            <Readout label="Notional P&L move" value={formatUsd(res.dollars)} sub={`${nn} × ${pp} × $${res.pointValue}`} />
            <p className="ds-result-text">{res.line}</p>
          </>
        ) : null}
        {res?.kind === "error" || res?.kind === "unavailable" ? <p className="ds-error">{res.message}</p> : null}
        {res == null ? <p className="ds-hint">Enter N and the price move in points.</p> : null}
      </div>
      <CmeSource />

      <div className="ds-caps">
        <h3 className="ds-h3">Apex cap reference (separate from the arithmetic)</h3>
        <div className="ds-grid3">
          <Seg label="Stage" value={capStage} onChange={setCapStage} options={[{ value: "Evaluation", label: "Evaluation" }, { value: "PA scaling tier", label: "PA scaling tier" }]} />
          <Seg label="Type" value={type} onChange={setType} options={[{ value: "EOD", label: "EOD" }, { value: "Intraday", label: "Intraday" }]} />
          <Seg label="Size" value={size} onChange={setSize} options={SIZES.map((s) => ({ value: s, label: s }))} />
        </div>
        {cap.kind === "ok" ? (
          <p className="ds-result-text">
            {capStage}, {type}, {size}: published limit <strong>{cap.cap} contracts</strong>
            {capStage === "Evaluation" ? " (fixed for the Evaluation)." : " (scaling ceiling; the account starts at a lower level)."} {notice}
          </p>
        ) : (
          <p className="ds-result-text">Not computed here. See Apex&apos;s page for this limit.</p>
        )}
        <div className="ds-tablewrap">
          <table className="ds-table">
            <caption>Published contract limits by size</caption>
            <thead>
              <tr>
                <th scope="col">Size</th>
                <th scope="col">Evaluation, EOD</th>
                <th scope="col">Evaluation, Intraday</th>
                <th scope="col">PA ceiling, EOD</th>
                <th scope="col">PA ceiling, Intraday</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((s) => (
                <tr key={s} data-active={s === size ? "1" : undefined}>
                  <th scope="row">{s}</th>
                  <td>{usable(EVAL.EOD[s].maxContracts) ? EVAL.EOD[s].maxContracts.value : "See Apex"}</td>
                  <td>{usable(EVAL.Intraday[s].maxContracts) ? EVAL.Intraday[s].maxContracts.value : "See Apex"}</td>
                  <td>{usable(PA.EOD[s].maxContractsCeiling) ? PA.EOD[s].maxContractsCeiling.value : "See Apex"}</td>
                  <td>{usable(PA.Intraday[s].maxContractsCeiling) ? PA.Intraday[s].maxContractsCeiling.value : "See Apex"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="ds-hint">
          {usable(TEXT.microRatio) ? `${TEXT.microRatio.value}. ` : ""}Evaluation caps are fixed. PA caps are the scaling ceiling reached by tier, not the starting size.
        </p>
        <div className="ds-chips">
          <FactChip fact={EVAL.EOD[size].maxContracts} label="Apex Help Center: position sizing, evaluation" />
          <FactChip fact={PA.EOD[size].maxContractsCeiling} label="Apex Help Center: scaling levels, PA" />
        </div>
      </div>
    </ToolShell>
  );
}
