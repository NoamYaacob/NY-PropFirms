import type { ReactNode } from "react";
import { LAST_CHECKED, URLS, type UrlKey } from "@/lib/en/links";

export function SourceLink({ id, children }: { id: UrlKey; children: ReactNode }) {
  return (
    <a
      href={URLS[id]}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 hover:text-[var(--text-primary)]"
      style={{ color: "var(--teal-400)" }}
    >
      {children}
    </a>
  );
}

export function RuleTable({
  head,
  rows,
  foot,
}: {
  head: string[];
  rows: string[][];
  foot?: string[];
}) {
  const valueHeads = head.slice(1);
  const cardPerSize = valueHeads.length >= 4;

  return (
    <div className="my-3">
      <div className="sm:hidden space-y-3">
        {cardPerSize
          ? valueHeads.map((sizeLabel, col) => (
              <div
                key={`${sizeLabel}-${col}`}
                className="rounded-lg p-3"
                style={{ border: "1px solid var(--surface-border)", backgroundColor: "var(--surface-overlay)" }}
              >
                <p className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {sizeLabel}
                </p>
                <dl className="space-y-1.5 text-sm">
                  {rows.map((row) => (
                    <div key={row[0]} className="flex justify-between gap-3">
                      <dt style={{ color: "var(--text-primary)" }}>{row[0]}</dt>
                      <dd className="text-right whitespace-nowrap tabular-nums" style={{ color: "var(--text-secondary)" }}>
                        {row[col + 1]}
                      </dd>
                    </div>
                  ))}
                  {foot && foot[col + 1] ? (
                    <div className="flex justify-between gap-3 font-semibold">
                      <dt style={{ color: "var(--text-primary)" }}>{foot[0]}</dt>
                      <dd className="text-right whitespace-nowrap tabular-nums" style={{ color: "var(--text-primary)" }}>
                        {foot[col + 1]}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            ))
          : rows.map((row) => (
              <div
                key={row[0]}
                className="rounded-lg p-3"
                style={{ border: "1px solid var(--surface-border)", backgroundColor: "var(--surface-overlay)" }}
              >
                <p className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {row[0]}
                </p>
                <dl className="space-y-1.5 text-sm">
                  {valueHeads.map((label, col) => (
                    <div key={label}>
                      <dt className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {label}
                      </dt>
                      <dd style={{ color: "var(--text-secondary)" }}>{row[col + 1]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
      </div>
      <div className="hidden sm:block overflow-x-auto -mx-1">
      <table className="w-full min-w-[520px] text-sm border-collapse">
        <thead>
          <tr style={{ backgroundColor: "var(--surface-overlay)" }}>
            {head.map((cell, index) => (
              <th
                key={`${cell}-${index}`}
                className="text-left font-semibold px-3 py-2 border-b whitespace-nowrap"
                style={{
                  borderColor: "var(--surface-border)",
                  color: "var(--text-primary)",
                }}
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-3 py-2 border-b align-top text-left"
                  style={{
                    borderColor: "var(--surface-border)",
                    color: cellIndex === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                    fontWeight: cellIndex === 0 ? 600 : 400,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {foot ? (
          <tfoot>
            <tr>
              {foot.map((cell, index) => (
                <td
                  key={index}
                  className="px-3 py-2 font-semibold text-left"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tfoot>
        ) : null}
      </table>
      </div>
    </div>
  );
}

export function EnSection({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
}) {
  const headingId = id ? `${id}-h` : undefined;
  return (
    <section id={id} className="card p-5 md:p-6 mb-5 scroll-mt-24" aria-labelledby={headingId}>
      {title ? (
        <h2
          id={headingId}
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h2>
      ) : null}
      <div className="space-y-3 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {children}
      </div>
    </section>
  );
}

export function EnHero({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="border-b"
      style={{
        borderColor: "var(--surface-border)",
        background:
          "radial-gradient(ellipse 70% 80% at 0% -20%, rgba(201,168,76,0.12) 0%, transparent 55%), var(--surface-base)",
      }}
    >
      <div className="container-page py-12 md:py-16">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h1>
        <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {lead}
        </p>
        {children ? <div className="mt-6">{children}</div> : null}
        <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
          Rules last checked against the Apex Help Center: {LAST_CHECKED}.
        </p>
      </div>
    </section>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="callout-info rounded-md px-4 py-3 text-sm" style={{ color: "var(--text-secondary)" }}>
      {children}
    </div>
  );
}

export function Warn({ children }: { children: ReactNode }) {
  return (
    <div className="callout-warning rounded-md px-4 py-3 text-sm" style={{ color: "var(--text-secondary)" }}>
      {children}
    </div>
  );
}

export function SourceLine({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
      {children}
    </p>
  );
}

export function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="rounded-xl p-4"
      style={{
        backgroundColor: "var(--surface-overlay)",
        border: "1px solid var(--surface-border)",
      }}
    >
      <h3 className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>
      <p>{children}</p>
    </div>
  );
}
