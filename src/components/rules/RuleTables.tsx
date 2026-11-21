import { ACCOUNT_TYPES, EVAL, EVAL_LOCK_RITHMIC, EVAL_LOCK_TRIGGER_RITHMIC, PA, SIZES, STARTING_BALANCE, derivedLabel, usable, type AccountType, type Fact, type Size } from "@/data/apex";
import { Fallback, MiniSrc } from "@/design-system/Blocks";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

function Cell<T>({ f, show }: { f: Fact<T>; show: (v: T | null) => string }) {
  if (!usable(f)) return <Fallback fact={f} />;
  return <>{show(f.value)}</>;
}

/** Evaluation parameters by size for one account type. Evaluation figures only. */
export function EvalTable({ type }: { type: AccountType }) {
  return (
    <div className="ds-tablewrap">
      <table className="ds-table">
        <caption>{type} Evaluation parameters</caption>
        <thead>
          <tr>
            <th scope="col">Size</th>
            <th scope="col">Profit target</th>
            <th scope="col">Max drawdown</th>
            <th scope="col">Daily Loss Limit</th>
            <th scope="col">Contracts (fixed)</th>
            <th scope="col">Access</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {SIZES.map((s) => {
            const e = EVAL[type][s];
            return (
              <tr key={s}>
                <th scope="row">{s}</th>
                <td><Cell f={e.profitTarget} show={(v) => usd(v as number)} /></td>
                <td><Cell f={e.maxDrawdown} show={(v) => usd(v as number)} /></td>
                <td><Cell f={e.dll} show={(v) => (v == null ? "None" : usd(v))} /></td>
                <td><Cell f={e.maxContracts} show={(v) => String(v)} /></td>
                <td><Cell f={e.accessDays} show={(v) => `${v} calendar days`} /></td>
                <td><MiniSrc fact={e.profitTarget} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** Starting threshold, derived from the official table (50K is the official worked example). */
export function StartThresholdTable({ stage }: { stage: "Evaluation" | "Performance Account" }) {
  return (
    <div className="ds-tablewrap">
      <table className="ds-table">
        <caption>Starting balance and starting threshold ({stage})</caption>
        <thead>
          <tr>
            <th scope="col">Size</th>
            <th scope="col">Starting balance</th>
            <th scope="col">EOD threshold</th>
            <th scope="col">Intraday threshold</th>
            <th scope="col">Basis</th>
          </tr>
        </thead>
        <tbody>
          {SIZES.map((s) => {
            const f = (t: AccountType) => (stage === "Evaluation" ? EVAL[t][s].startThreshold : PA[t][s].startThreshold);
            const d = derivedLabel(f("EOD"), s);
            return (
              <tr key={s}>
                <th scope="row">{s}</th>
                <td>{usd(STARTING_BALANCE[s])}</td>
                {ACCOUNT_TYPES.map((t) => (
                  <td key={t}>
                    <Cell f={f(t)} show={(v) => usd(v as number)} />
                  </td>
                ))}
                <td>
                  {d ?? "Official table"} · <MiniSrc fact={f("EOD")} size={s} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** Platform lock levels for Evaluations (derived from the official table). Intraday Evaluation is a CONFLICT: no number. */
export function EvalLockTable() {
  return (
    <div className="ds-tablewrap">
      <table className="ds-table">
        <caption>Evaluation threshold lock on Rithmic / WealthCharts</caption>
        <thead>
          <tr>
            <th scope="col">Size</th>
            <th scope="col">EOD: stops trailing at</th>
            <th scope="col">EOD: when the highest close reaches</th>
            <th scope="col">Intraday</th>
            <th scope="col">Basis</th>
          </tr>
        </thead>
        <tbody>
          {SIZES.map((s) => (
            <tr key={s}>
              <th scope="row">{s}</th>
              <td><Cell f={EVAL_LOCK_RITHMIC.EOD[s]} show={(v) => usd(v as number)} /></td>
              <td><Cell f={EVAL_LOCK_TRIGGER_RITHMIC.EOD[s]} show={(v) => usd(v as number)} /></td>
              <td><Fallback fact={EVAL_LOCK_RITHMIC.Intraday[s]}>Apex&apos;s pages word the Intraday lock differently.</Fallback></td>
              <td>
                {derivedLabel(EVAL_LOCK_RITHMIC.EOD[s], s)} · <MiniSrc fact={EVAL_LOCK_RITHMIC.EOD[s]} size={s} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PaScalingTable({ type, size }: { type: AccountType; size: Size }) {
  const f = PA[type][size].scaling;
  if (!usable(f) || !f.value) return <Fallback fact={f} />;
  return (
    <div className="ds-tablewrap">
      <table className="ds-table">
        <caption>
          {type} PA, {size}: scaling tiers
        </caption>
        <thead>
          <tr>
            <th scope="col">Tier</th>
            <th scope="col">Profit</th>
            <th scope="col">Max contracts</th>
            <th scope="col">Daily Loss Limit</th>
          </tr>
        </thead>
        <tbody>
          {f.value.map((t) => (
            <tr key={t.tier}>
              <th scope="row">{t.tier}</th>
              <td>{t.maxProfit == null ? `${usd(t.minProfit)} and up` : `${usd(t.minProfit)} to ${usd(t.maxProfit)}`}</td>
              <td>{t.maxContracts}</td>
              <td>{usd(t.dll)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="ds-hint" style={{ padding: "0 0.8rem 0.6rem" }}>
        <MiniSrc fact={f} size={size} />
      </p>
    </div>
  );
}

export function PaLockTable() {
  return (
    <div className="ds-tablewrap">
      <table className="ds-table">
        <caption>PA threshold lock</caption>
        <thead>
          <tr>
            <th scope="col">Size</th>
            <th scope="col">EOD PA: stops trailing at</th>
            <th scope="col">Intraday PA</th>
            <th scope="col">Basis</th>
          </tr>
        </thead>
        <tbody>
          {SIZES.map((s) => (
            <tr key={s}>
              <th scope="row">{s}</th>
              <td><Cell f={PA.EOD[s].lockLevel} show={(v) => usd(v as number)} /></td>
              <td><Fallback fact={PA.Intraday[s].lockLevel}>Apex&apos;s pages word the Intraday PA lock differently.</Fallback></td>
              <td>
                {derivedLabel(PA.EOD[s].lockLevel, s)} · <MiniSrc fact={PA.EOD[s].lockLevel} size={s} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PayoutTable({ type }: { type: AccountType }) {
  return (
    <div className="ds-tablewrap">
      <table className="ds-table">
        <caption>{type} PA payout gates</caption>
        <thead>
          <tr>
            <th scope="col">Size</th>
            <th scope="col">Qualifying days</th>
            <th scope="col">Min daily profit</th>
            <th scope="col">Safety Net</th>
            <th scope="col">Min balance to request</th>
            <th scope="col">Caps, payouts 1 to 6</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {SIZES.map((s) => {
            const p = PA[type][s];
            return (
              <tr key={s}>
                <th scope="row">{s}</th>
                <td><Cell f={p.qualifyingDays} show={(v) => `${v} days`} /></td>
                <td><Cell f={p.minDailyProfit} show={(v) => usd(v as number)} /></td>
                <td><Cell f={p.safetyNet} show={(v) => usd(v as number)} /></td>
                <td><Cell f={p.minRequestBalance} show={(v) => usd(v as number)} /></td>
                <td><Cell f={p.payoutCaps} show={(v) => (v as unknown as number[]).map(usd).join(" / ")} /></td>
                <td><MiniSrc fact={p.safetyNet} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
