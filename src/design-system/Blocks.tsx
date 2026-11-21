import type { ReactNode } from "react";
import Link from "next/link";
import { checkedLabel, derivedLabel, type Fact, type Size } from "@/data/apex";
import { CME, CME_CHECKED_LABEL } from "@/data/apex";
import { AD_LINE, CODE_CAVEAT, DISC_LINE, RISK_COMPACT } from "./strings";

/** Page wrapper: width, gutters, vertical rhythm. */
export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1180px] px-4 md:px-6 ${className}`}>{children}</div>;
}

export function Section({ id, title, kicker, children, className = "" }: { id?: string; title?: string; kicker?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`ds-section ${className}`} aria-labelledby={id && title ? `${id}-h` : undefined}>
      <Wrap>
        {kicker ? <p className="ds-eyebrow mb-1">{kicker}</p> : null}
        {title ? (
          <h2 id={id ? `${id}-h` : undefined} className="ds-h2">
            {title}
          </h2>
        ) : null}
        {children}
      </Wrap>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: ReactNode; children?: ReactNode }) {
  return (
    <header className="ds-pagehead">
      <Wrap>
        {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
        <h1 className="ds-h1">{title}</h1>
        {intro ? <div className="ds-lead">{intro}</div> : null}
        {children}
      </Wrap>
    </header>
  );
}

export function StageBanner({ children }: { children: ReactNode }) {
  return (
    <p className="ds-stage ds-mono" role="note">
      {children}
    </p>
  );
}

/** Marks a body-copy slot that Content Studio fills from content/en_site_v2/pages/*.md. Removed when copy lands. */
export function TodoCS({ file, note }: { file: string; note: string }) {
  return (
    <p className="ds-todo ds-mono" data-todo="cs">
      TODO-CS · {file} · {note}
    </p>
  );
}

/** Marks a data slot that Research & Intel fills. */
export function TodoRI({ note }: { note: string }) {
  return (
    <p className="ds-todo ds-mono" data-todo="ri">
      TODO-RI · {note}
    </p>
  );
}

/** DISC_LINE + RISK_COMPACT, grouped by hierarchy. Always visible, 15px or larger. */
export function DisclosurePair({ className = "" }: { className?: string }) {
  return (
    <div className={`ds-pair ${className}`}>
      <p className="ds-legal ds-legal-strong">{DISC_LINE}</p>
      <p className="ds-risk">{RISK_COMPACT}</p>
    </div>
  );
}

/** RISK_COMPACT alone (page bottoms, tool footers). */
export function RiskLine({ className = "" }: { className?: string }) {
  return <p className={`ds-risk ${className}`}>{RISK_COMPACT}</p>;
}

/** Policy 3.3 order: CODE_CAVEAT, AD_LINE, DISC_LINE, RISK_COMPACT. */
export function CtaDisclosures() {
  return (
    <div className="ds-cta-disc">
      <p className="ds-legal">{CODE_CAVEAT}</p>
      <p className="ds-legal ds-legal-strong">{AD_LINE}</p>
      <p className="ds-legal ds-legal-strong">{DISC_LINE}</p>
      <p className="ds-risk">{RISK_COMPACT}</p>
    </div>
  );
}

export function SourceLink({ href, children, checked }: { href: string; children: ReactNode; checked?: string }) {
  return (
    <a className="ds-source" href={href} target="_blank" rel="noopener noreferrer">
      <span className="ds-mono ds-source-k">Source</span>
      <span>{children}</span>
      {checked ? <span className="ds-mono ds-source-d">checked {checked}</span> : null}
    </a>
  );
}

/** Source chip for a data fact: official URL, Apex modified date and the date the value was checked. */
export function FactChip({ fact, size, label }: { fact: Fact<unknown>; size?: Size | null; label?: string }) {
  const derived = derivedLabel(fact, size ?? null);
  return (
    <a className="ds-source" href={fact.url} target="_blank" rel="noopener noreferrer">
      <span className="ds-mono ds-source-k">Source</span>
      <span>{label ?? fact.title}</span>
      {derived ? <span className="ds-mono ds-source-d">{derived}</span> : null}
      <span className="ds-mono ds-source-d">checked {checkedLabel(fact)}</span>
    </a>
  );
}

/** Compact in-table source marker. */
export function MiniSrc({ fact, size }: { fact: Fact<unknown>; size?: Size | null }) {
  const derived = derivedLabel(fact, size ?? null);
  return (
    <a className="ds-minisrc" href={fact.url} target="_blank" rel="noopener noreferrer" title={`${fact.title}, checked ${checkedLabel(fact)}${derived ? `. ${derived}` : ""}`}>
      Source{derived ? " (derived)" : ""} · {checkedLabel(fact).replace(/, \d{4}$/, "")}
    </a>
  );
}

export function CmeSource() {
  return (
    <div className="ds-source">
      <span className="ds-mono ds-source-k">Source</span>
      <span>CME Group contract multipliers:</span>
      {[
        ["NQ", CME.NQ.url],
        ["MNQ", CME.MNQ.url],
        ["ES / MES", CME.ES.url],
      ].map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
          {label}
        </a>
      ))}
      <span className="ds-mono ds-source-d">checked {CME_CHECKED_LABEL}</span>
    </div>
  );
}

/** Text shown instead of a number when a fact is a CONFLICT or NOT_FOUND. Always with the official link. */
export function Fallback({ fact, children }: { fact: Fact<unknown>; children?: ReactNode }) {
  return (
    <span className="ds-fallback">
      {children ?? "Apex's pages word this differently. See Apex's page."}{" "}
      <a href={fact.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
        Official page
      </a>
    </span>
  );
}

export function Details({ summary, children, open = false }: { summary: string; children: ReactNode; open?: boolean }) {
  return (
    <details className="ds-details" open={open}>
      <summary>{summary}</summary>
      <div className="ds-details-body">{children}</div>
    </details>
  );
}

export function InternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="ds-link">
      {children}
    </Link>
  );
}

/** Card that links to another route. */
export function RouteCard({ href, title, kicker, children }: { href: string; title: string; kicker?: string; children?: ReactNode }) {
  return (
    <Link href={href} className="ds-card ds-routecard">
      {kicker ? <span className="ds-mono ds-kicker">{kicker}</span> : null}
      <span className="ds-routecard-t">{title}</span>
      {children ? <span className="ds-routecard-b">{children}</span> : null}
    </Link>
  );
}
