"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { DISC_LINE, RISK_COMPACT } from "@/design-system/strings";

export function parseNum(raw: string): number | null {
  const t = raw.replace(/[$,\s]/g, "");
  if (t === "" || t === "-" || t === "." || t === "-.") return null;
  const n = Number(t);
  return Number.isNaN(n) ? Number.NaN : n;
}

export function Seg<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: ReadonlyArray<{ value: T; label: string }>; onChange: (v: T) => void }) {
  return (
    <div className="ds-field">
      <span className="ds-mono ds-kicker">{label}</span>
      <div className="ds-seg" role="group" aria-label={label}>
        {options.map((o) => (
          <button key={o.value} type="button" className="ds-segbtn ds-mono" aria-pressed={value === o.value} onClick={() => onChange(o.value)}>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function NumField({ id, label, value, onChange, hint, placeholder, allowNegative = true }: { id: string; label: string; value: string; onChange: (v: string) => void; hint?: ReactNode; placeholder?: string; allowNegative?: boolean }) {
  return (
    <div className="ds-field">
      <label className="ds-flabel" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="ds-input ds-mono"
        inputMode={allowNegative ? "text" : "decimal"}
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        aria-describedby={hint ? `${id}-hint` : undefined}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9.,\-$]/g, ""))}
      />
      {hint ? (
        <p id={`${id}-hint`} className="ds-hint">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function Readout({ label, value, sub, tone }: { label: string; value: ReactNode; sub?: ReactNode; tone?: "warn" }) {
  return (
    <div className={`ds-readout ${tone === "warn" ? "ds-readout-warn" : ""}`}>
      <span className="ds-mono ds-kicker">{label}</span>
      <span className="ds-mono ds-readout-val">{value}</span>
      {sub ? <span className="ds-mono ds-readout-eq">{sub}</span> : null}
    </div>
  );
}

/** Tool chrome: title bar, DISC_LINE above the tool, disclaimer + RISK_COMPACT in the footer, official + privacy links. */
export function ToolShell({
  id,
  title,
  pill,
  framing,
  children,
  disclaimer,
  links,
  anchorOffset = false,
}: {
  id: string;
  title: string;
  pill?: string;
  framing?: ReactNode;
  children: ReactNode;
  disclaimer: ReactNode;
  links?: ReactNode;
  anchorOffset?: boolean;
}) {
  return (
    <article id={id} className={`ds-card ds-term ${anchorOffset ? "ds-anchor" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="ds-bar">
        <span className="ds-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <h2 id={`${id}-title`} className="ds-bar-title ds-bar-h">
          {title}
        </h2>
        {pill ? <span className="ds-pill ds-mono">{pill}</span> : null}
      </div>
      <div className="ds-term-body">
        <p className="ds-legal ds-legal-strong ds-tooldisc">{DISC_LINE}</p>
        {framing ? <p className="ds-framing">{framing}</p> : null}
        {children}
        <div className="ds-toolfoot">
          <div className="ds-disclaimer">{disclaimer}</div>
          <p className="ds-risk">{RISK_COMPACT}</p>
          <p className="ds-toollinks">
            {links}
            {links ? " · " : null}
            <Link href="/about#privacy" className="ds-link">
              Privacy: no inputs are stored or sent
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}

export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="ds-link">
      {children}
    </a>
  );
}
