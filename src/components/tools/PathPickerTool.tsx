"use client";

import { useState } from "react";
import Link from "next/link";
import { computePicker, HEADLINE, type DllPref, type Partials, type PickerPlatform, type Swings } from "@/lib/engines/pathpicker";
import { OFFICIAL_LINKS } from "@/data/apex";
import { ExtLink, ToolShell } from "./controls";

function Choice<T extends string>({ q, value, options, onChange }: { q: string; value: T | null; options: ReadonlyArray<{ value: T; label: string }>; onChange: (v: T) => void }) {
  return (
    <fieldset className="ds-field ds-choice">
      <legend className="ds-flabel">{q}</legend>
      <div className="ds-seg" role="group" aria-label={q}>
        {options.map((o) => (
          <button key={o.value} type="button" className="ds-segbtn ds-mono" aria-pressed={value === o.value} onClick={() => onChange(o.value)}>
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function PathPickerTool({ id = "path-picker", anchorOffset = false }: { id?: string; anchorOffset?: boolean }) {
  const [swings, setSwings] = useState<Swings | null>(null);
  const [dll, setDll] = useState<DllPref | null>(null);
  const [partials, setPartials] = useState<Partials | null>(null);
  const [platform, setPlatform] = useState<PickerPlatform | null>(null);
  const r = computePicker({ swings, dll, partials, platform });

  return (
    <ToolShell
      id={id}
      anchorOffset={anchorOffset}
      title="Trading-Style Path Picker"
      pill="Informational only"
      framing="Four neutral questions about trading mechanics. Apex EOD and Intraday only. This is not a recommendation to buy any account."
      disclaimer={
        <p>
          Unofficial helper, not advice; Apex&apos;s system decides. Maps trading-style mechanics to published Apex EOD and Intraday rules for educational comparison only. This is not financial advice and not a recommendation to buy any evaluation or account.
        </p>
      }
      links={
        <>
          <ExtLink href={OFFICIAL_LINKS.eodDrawdown}>EOD Drawdown</ExtLink> · <ExtLink href={OFFICIAL_LINKS.intradayDrawdown}>Intraday Drawdown</ExtLink>
        </>
      }
    >
      <Choice<Swings> q="Do you routinely hold open positions through intraday swings and pullbacks, or exit quickly on realized scalps?" value={swings} onChange={setSwings} options={[{ value: "hold", label: "Hold swings / trail runners" }, { value: "scalp", label: "Quick realized scalps" }, { value: "mixed", label: "Mixed" }]} />
      <Choice<DllPref> q="During an Evaluation, do you prefer a fixed session Daily Loss Limit that pauses the day if reached, or no Evaluation DLL?" value={dll} onChange={setDll} options={[{ value: "eval-dll", label: "Prefer Eval DLL pause" }, { value: "no-eval-dll", label: "Prefer no Eval DLL" }, { value: "none", label: "No preference" }]} />
      <Choice<Partials> q="Do you scale out of partials while keeping a runner open?" value={partials} onChange={setPartials} options={[{ value: "partials", label: "Yes, often" }, { value: "all-in-out", label: "Usually all-in / all-out" }]} />
      <Choice<PickerPlatform> q="Which platform will you check on your account? (informational only)" value={platform} onChange={setPlatform} options={[{ value: "rithmic-wealthcharts", label: "Rithmic / Wealthcharts" }, { value: "tradovate", label: "Tradovate" }, { value: "unsure", label: "Not sure yet" }]} />
      <div aria-live="polite" className="ds-picker-out">
        {r.kind === "prompt" ? <p className="ds-hint">Answer the first three questions to see the summary.</p> : null}
        {r.kind === "result" ? (
          <>
            <h3 className="ds-h3">{HEADLINE}</h3>
            <p className="ds-fit">{r.fit}</p>
            <ul className="ds-reasons">
              {r.reasons.map((t) => (
                <li key={t}>{t}</li>
              ))}
              <li>{r.platformNote}</li>
            </ul>
            <p className="ds-toollinks">
              <Link href="/eod-vs-intraday" className="ds-link">EOD vs Intraday</Link> · <Link href="/evaluation-rules" className="ds-link">Evaluation Rules</Link> · <Link href="/performance-account-rules" className="ds-link">PA Rules</Link> · <Link href="/account-comparison" className="ds-link">Account Comparison</Link>
            </p>
          </>
        ) : null}
      </div>
    </ToolShell>
  );
}
