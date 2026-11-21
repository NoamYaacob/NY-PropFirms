"use client";

import { useState } from "react";
import { computeConsistency, CONSISTENCY_STATE_TEXT } from "@/lib/engines/consistency";
import { CONSISTENCY } from "@/data/apex";
import { Readout, ExtLink, NumField, ToolShell, parseNum } from "./controls";

const HELPER =
  "Apex's 50% Consistency page measures this from your last approved payout in some places and from your last payout request in others. Check Apex's 50% Consistency Requirement page.";

export function ConsistencyTool({ id = "consistency", anchorOffset = false }: { id?: string; anchorOffset?: boolean }) {
  const [net, setNet] = useState("");
  const [best, setBest] = useState("");
  const r = computeConsistency({ netProfit: parseNum(net), bestDay: parseNum(best) });

  return (
    <ToolShell
      id={id}
      anchorOffset={anchorOffset}
      title="50% Consistency Calculator"
      pill="Performance Account (PA) only"
      framing="Applies to EOD PA and Intraday PA, all sizes. Consistency is 'Not Applied' in Evaluations."
      disclaimer={
        <p>
          Unofficial helper, not advice; Apex&apos;s system decides. Applies to Performance Accounts only (Evaluations: &apos;Not Applied&apos;). Losing days count in net profit. Near 50% (from 49.95% up to, not including, 50.05%) this site gives no pass/fail verdict. That range is this site&apos;s own rule, not an Apex rule, and Apex&apos;s Help Center words the exact-50% case differently. Check Apex&apos;s 50% Consistency Requirement page.
        </p>
      }
      links={<ExtLink href={CONSISTENCY.url}>Apex: 50% Consistency Requirement</ExtLink>}
    >
      <div className="ds-grid2">
        <NumField id={`${id}-net`} label="Net profit since last approved payout, losing days included ($)" value={net} onChange={setNet} hint={HELPER} placeholder="e.g. 3000" />
        <NumField id={`${id}-best`} label="Biggest single profitable day in that period ($)" value={best} onChange={setBest} allowNegative={false} placeholder="e.g. 900" />
      </div>
      <div aria-live="polite">
        {r.kind === "prompt" ? <p className="ds-hint">Enter both amounts to see the best-day share.</p> : null}
        {r.kind === "error" ? <p className="ds-error">{r.message}</p> : null}
        {r.kind === "na" ? <Readout label="Best-day share (%)" value="N/A" sub={r.message} /> : null}
        {r.kind === "ok" ? (
          <>
            <Readout label="Best-day share (%)" value={`${r.display}%`} sub="Best Day ÷ Net Profit × 100" />
            <p className="ds-result-text">{CONSISTENCY_STATE_TEXT[r.band]}</p>
          </>
        ) : null}
      </div>
    </ToolShell>
  );
}
