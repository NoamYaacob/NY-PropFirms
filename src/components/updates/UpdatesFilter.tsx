"use client";

import { useState } from "react";

const SCOPES = ["All", "EOD Eval", "Intraday Eval", "EOD PA", "Intraday PA", "Legacy"] as const;

/** Scope filter. The feed itself is TODO-RI; the filter is wired for when entries arrive. */
export function UpdatesFilter() {
  const [scope, setScope] = useState<(typeof SCOPES)[number]>("All");
  return (
    <div>
      <div className="ds-seg" role="group" aria-label="Scope filter">
        {SCOPES.map((s) => (
          <button key={s} type="button" className="ds-segbtn ds-mono" aria-pressed={scope === s} onClick={() => setScope(s)}>
            {s}
          </button>
        ))}
      </div>
      <p className="ds-hint" style={{ marginTop: 8 }}>
        No dated entries yet for scope: {scope}.
      </p>
    </div>
  );
}
