import type { ReactNode } from "react";
import { ctxFor } from "./slotContext";
import { resolveSlot, type SlotLine } from "./slotModel";

/**
 * Renders a {Sxx:key|key} token. Resolution, scoping, labels and the verified/unverified rules live in slotModel.ts;
 * the context of every site is declared in slotContext.ts (tests fail on a missing or stale declaration).
 * `tail` is punctuation that followed the token in the copy; it is printed inside the last line so it never wraps alone.
 */
function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="ds-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Line({ l, tail }: { l: SlotLine; tail?: string }) {
  return (
    <span className="ds-slot-line">
      {l.label ? <span className="ds-slot-l">{l.label}: </span> : null}
      {l.body}
      {l.derived ? <em className="ds-slot-d"> {l.derived}</em> : null}
      {l.links?.map((x, i) => (
        <span key={x.href}>
          {i ? " · " : ""}
          <Link href={x.href}>{x.text}</Link>
        </span>
      ))}
      {l.chip ? (
        <>
          {" "}
          <a className="ds-minisrc" href={l.chip.url} target="_blank" rel="noopener noreferrer" title={l.chip.title}>
            Source · checked {l.chip.date}
          </a>
        </>
      ) : null}
      {l.body && l.link ? " " : null}
      {l.link ? <Link href={l.link.href}>{l.link.text}</Link> : null}
      {tail}
    </span>
  );
}

export function Slot({ raw, page, line, tail }: { raw: string; page: string; line: string; tail?: string }) {
  const ctx = ctxFor(page, raw, line);
  if (!ctx) return null;
  const lines = resolveSlot(raw, ctx);
  if (!lines.length) return tail ? <>{tail}</> : null;
  return (
    <span className="ds-slot">
      {lines.map((l, i) => (
        <Line key={i} l={l} tail={i === lines.length - 1 ? tail : undefined} />
      ))}
    </span>
  );
}
