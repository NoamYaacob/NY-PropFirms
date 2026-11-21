"use client";

import { useState } from "react";
import { computePayout } from "@/lib/engines/payout";
import { OFFICIAL_LINKS, PA, SIZES, type AccountType, type Size } from "@/data/apex";
import { FactChip } from "@/design-system/Blocks";
import { ExtLink, NumField, Seg, ToolShell, parseNum } from "./controls";

const HELPER =
  "Apex's 50% Consistency page measures this from your last approved payout in some places and from your last payout request in others. Check Apex's 50% Consistency Requirement page.";

const MARK: Record<string, string> = { meets: "Meets", below: "Below", "not-computed": "Not computed", info: "No verdict" };

export function PayoutTool({ id = "payout-eligibility", anchorOffset = false }: { id?: string; anchorOffset?: boolean }) {
  const [type, setType] = useState<AccountType>("EOD");
  const [size, setSize] = useState<Size>("50K");
  const [bal, setBal] = useState("");
  const [approved, setApproved] = useState("0");
  const [days, setDays] = useState("");
  const [net, setNet] = useState("");
  const [best, setBest] = useState("");
  const [req, setReq] = useState("");

  const r = computePayout({ type, size, balance: parseNum(bal), approvedPayouts: parseNum(approved), qualifyingDays: parseNum(days), netProfit: parseNum(net), bestDay: parseNum(best), requestAmount: parseNum(req) });
  const p = PA[type][size];
  const payoutLink = type === "EOD" ? OFFICIAL_LINKS.eodPayouts : OFFICIAL_LINKS.intradayPayouts;

  return (
    <ToolShell
      id={id}
      anchorOffset={anchorOffset}
      title="Payout Eligibility Checker"
      pill="Performance Account (PA) only"
      framing="Evaluations are not eligible for payouts. Pick your PA type and size, then enter your numbers. This is a checklist, not a promise."
      disclaimer={
        <p>
          Unofficial helper, not advice; Apex&apos;s system decides. Applies to Performance Accounts only (Evaluations are not eligible for payouts). Meeting published checklist criteria does not guarantee payout approval; Apex&apos;s automated system makes the final determination. Losing days count in net profit.
        </p>
      }
      links={
        <>
          <ExtLink href={OFFICIAL_LINKS.eodPayouts}>EOD Payouts</ExtLink> · <ExtLink href={OFFICIAL_LINKS.intradayPayouts}>Intraday Payouts</ExtLink> · <ExtLink href={OFFICIAL_LINKS.consistency}>50% Consistency</ExtLink>
        </>
      }
    >
      <div className="ds-grid2">
        <Seg label="PA type" value={type} onChange={setType} options={[{ value: "EOD", label: "EOD PA" }, { value: "Intraday", label: "Intraday PA" }]} />
        <Seg label="Account size" value={size} onChange={setSize} options={SIZES.map((s) => ({ value: s, label: s }))} />
      </div>
      <div className="ds-grid3">
        <NumField id={`${id}-bal`} label="Current PA balance ($)" value={bal} onChange={setBal} allowNegative={false} />
        <NumField id={`${id}-ap`} label="Approved payouts already received" value={approved} onChange={setApproved} allowNegative={false} />
        <NumField id={`${id}-days`} label="Qualifying days completed (at the minimum daily profit)" value={days} onChange={setDays} allowNegative={false} />
        <NumField id={`${id}-net`} label="Net profit since last approved payout, losing days included ($)" value={net} onChange={setNet} hint={HELPER} />
        <NumField id={`${id}-best`} label="Best single profitable day in that period ($)" value={best} onChange={setBest} allowNegative={false} />
        <NumField id={`${id}-req`} label="Planned request amount ($)" value={req} onChange={setReq} allowNegative={false} />
      </div>
      <div aria-live="polite">
        {r.kind === "error" ? <p className="ds-hint">{r.message}</p> : null}
        {r.kind === "closed" ? <p className="ds-result-text">{r.message}</p> : null}
        {r.kind === "ok" ? (
          <ul className="ds-checks">
            {r.lines.map((l) => (
              <li key={l.id} data-state={l.state}>
                <span className="ds-check-mark ds-mono">{MARK[l.state]}</span>
                <span>
                  <strong>{l.label}.</strong> {l.detail}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="ds-chips">
        <FactChip fact={p.safetyNet} size={size} label={`${type} PA payouts, ${size}`} />
        <a className="ds-source" href={payoutLink} target="_blank" rel="noopener noreferrer">
          <span className="ds-mono ds-source-k">Source</span>
          <span>Apex payout page for this PA type</span>
        </a>
      </div>
    </ToolShell>
  );
}
