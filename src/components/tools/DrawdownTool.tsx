"use client";

import { useState } from "react";
import { computeDrawdown, type Platform } from "@/lib/engines/drawdown";
import { formatUsd } from "@/lib/engines/contract";
import { CME, CME_SYMBOLS, EVAL, EVAL_LOCK_RITHMIC, OFFICIAL_LINKS, PA, SIZES, STARTING_BALANCE, type AccountType, type CmeSymbol, type Size, type Stage } from "@/data/apex";
import { CmeSource, FactChip } from "@/design-system/Blocks";
import { ExtLink, NumField, Readout, Seg, ToolShell, parseNum } from "./controls";

const FRAMING =
  "This unofficial helper estimates the distance, in dollars and in NQ, MNQ, ES, or MES points, from a stated simulated-account balance to Apex's published trailing or end-of-day threshold for the account you select. It is not a stop, a target, or a position-size recommendation.";

export function DrawdownTool({ id = "drawdown-distance", anchorOffset = false }: { id?: string; anchorOffset?: boolean }) {
  const [stage, setStage] = useState<Stage>("Evaluation");
  const [type, setType] = useState<AccountType>("EOD");
  const [size, setSize] = useState<Size>("50K");
  const [platform, setPlatform] = useState<Platform>("unsure");
  const [symbol, setSymbol] = useState<CmeSymbol>("NQ");
  const [peak, setPeak] = useState("");
  const [cur, setCur] = useState("");

  const peakLabel = type === "EOD" ? "Prior EOD close / highest end-of-day balance ($)" : "Highest balance reached, realized or unrealized ($)";
  const r = computeDrawdown({ stage, type, size, platform, symbol, peakBalance: parseNum(peak), currentBalance: parseNum(cur) });
  const mdd = stage === "Evaluation" ? EVAL[type][size].maxDrawdown : PA[type][size].maxDrawdown;
  const lockFact = stage === "Performance Account" ? PA[type][size].lockLevel : EVAL_LOCK_RITHMIC[type][size];
  const pv = CME[symbol].pointValue.value;

  return (
    <ToolShell
      id={id}
      anchorOffset={anchorOffset}
      title="Drawdown Distance Calculator"
      pill="Distance only"
      framing={FRAMING}
      disclaimer={
        <>
          <p className="font-semibold">Unofficial helper, not advice; Apex&apos;s system decides.</p>
          <p>
            This tool estimates the distance, in dollars and in contract points, from a stated balance to the published Apex trailing or end-of-day threshold for the selected simulated account. Select Evaluation or Performance Account, EOD or Intraday, and the account size. The threshold is an account rule, not a stop order and not a target to trade to. Using the trailing threshold as a stop-loss is a prohibited activity. Drawdown is not your stop.
          </p>
          <p>Point values are CME Group contract multipliers, checked on CME&apos;s pages on 21 Nov 2026: NQ $20/point, MNQ $2/point, ES $50/point, MES $5/point. Re-check CME before launch. Apex dollar thresholds are filled only from the official Help Center with a source URL and retrieval date.</p>
        </>
      }
      links={
        <>
          <ExtLink href={OFFICIAL_LINKS.prohibited}>Apex: Prohibited Activities</ExtLink> · <ExtLink href={OFFICIAL_LINKS.eodDrawdown}>EOD Drawdown</ExtLink> · <ExtLink href={OFFICIAL_LINKS.intradayDrawdown}>Intraday Drawdown</ExtLink>
        </>
      }
    >
      <div className="ds-grid2">
        <Seg label="Stage" value={stage} onChange={setStage} options={[{ value: "Evaluation", label: "Evaluation" }, { value: "Performance Account", label: "Performance Account" }]} />
        <Seg label="Type" value={type} onChange={setType} options={[{ value: "EOD", label: "EOD" }, { value: "Intraday", label: "Intraday" }]} />
        <Seg label="Account size" value={size} onChange={setSize} options={SIZES.map((s) => ({ value: s, label: s }))} />
        <Seg
          label="Platform"
          value={platform}
          onChange={setPlatform}
          options={[
            { value: "rithmic-wealthcharts", label: "Rithmic / Wealthcharts" },
            { value: "tradovate", label: "Tradovate" },
            { value: "unsure", label: "Unsure / Check my account" },
          ]}
        />
        <Seg label="Instrument (CME)" value={symbol} onChange={setSymbol} options={CME_SYMBOLS.map((s) => ({ value: s, label: `${s} $${CME[s].pointValue.value}` }))} />
      </div>
      <div className="ds-grid2">
        <NumField id={`${id}-peak`} label={peakLabel} value={peak} onChange={setPeak} allowNegative={false} hint={`Starting balance ${formatUsd(STARTING_BALANCE[size])}.`} placeholder={String(STARTING_BALANCE[size])} />
        <NumField id={`${id}-cur`} label="Current simulated balance ($)" value={cur} onChange={setCur} allowNegative={false} placeholder={String(STARTING_BALANCE[size])} />
      </div>
      <div aria-live="polite">
        {r.kind === "prompt" ? <p className="ds-hint">Enter both balances to see the distance. Nothing is pre-filled.</p> : null}
        {r.kind === "error" ? <p className="ds-error">{r.message}</p> : null}
        {r.kind === "needs-check" ? <p className="ds-result-text">{r.message}</p> : null}
        {r.kind === "breached" ? <Readout label="Published threshold" value={formatUsd(r.threshold)} sub={r.message} tone="warn" /> : null}
        {r.kind === "ok" ? (
          <>
            <div className="ds-readout-row">
              <Readout label={`${stage}, ${type}, ${size}: remaining to threshold`} value={formatUsd(r.remainingDollars)} sub={`≈ ${Number.isInteger(r.points) ? r.points : r.points.toFixed(2)} ${symbol} points`} />
              <Readout label="Published threshold" value={formatUsd(r.threshold)} sub={`Threshold: ${r.lockState}`} />
            </div>
            <p className="ds-result-text">
              1 point = ${pv} on {symbol} (CME). Daily Loss Limit ({stage}, {type}):{" "}
              {r.dll.kind === "none" ? "N/A. The Intraday Evaluation has no DLL." : r.dll.kind === "fixed" ? `${formatUsd(r.dll.amount)} fixed; reaching it pauses the session.` : r.dll.kind === "tiered" ? "tiered by scaling level (see Performance Account rules)." : "see Apex's page."}
            </p>
            {r.lockNote ? <p className="ds-hint">{r.lockNote}</p> : null}
          </>
        ) : null}
      </div>
      <div className="ds-chips">
        <FactChip fact={mdd} size={size} label={`Max drawdown: ${mdd.title}`} />
        {lockFact.status === "VERIFIED_SNAPSHOT" ? <FactChip fact={lockFact} size={size} label="Lock level" /> : null}
        <CmeSource />
      </div>
    </ToolShell>
  );
}
