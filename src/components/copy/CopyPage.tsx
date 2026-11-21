import { readFileSync } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import Link from "next/link";
import { parseBody, parseFrontMatter, slug, type Block, type Meta } from "@/lib/pagecopy/parse";
import { Details, DisclosurePair, Wrap } from "@/design-system/Blocks";
import { CtaBlock } from "@/design-system/Cta";
import { AD_LINE, CODE_CAVEAT, DISC_LINE, RISK_COMPACT } from "@/design-system/strings";
import { Slot } from "./Slot";

export function loadCopy(name: string): { meta: Meta; blocks: Block[] } {
  const src = readFileSync(path.join(process.cwd(), "content", "pages", `${name}.md`), "utf8");
  const { meta, body } = parseFrontMatter(src);
  return { meta, blocks: parseBody(body) };
}

/** Inline markdown: **bold**, *italic*, `code`, [text](href), {tokens}. */
export function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|\{[A-Za-z0-9_:.|*-]+\})/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let n = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const t = m[0];
    const key = `i${n++}`;
    if (t.startsWith("**")) out.push(<strong key={key}>{inline(t.slice(2, -2))}</strong>);
    else if (t.startsWith("`")) out.push(<code key={key}>{t.slice(1, -1)}</code>);
    else if (t.startsWith("[")) {
      const lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(t)!;
      const href = lm[2];
      const label = inline(lm[1]);
      if (href.startsWith("/go/apex/")) {
        // Affiliate links are rendered only by the CTA / pricing components (GoLink). Never a plain anchor here.
        out.push(<span key={key}>{label}</span>);
      } else if (href.startsWith("/")) {
        out.push(
          <Link key={key} href={href} className="ds-link">
            {label}
          </Link>,
        );
      } else {
        out.push(
          <a key={key} href={href} className="ds-link" target="_blank" rel="noopener noreferrer">
            {label}
          </a>,
        );
      }
    } else if (t.startsWith("{")) {
      if (/^\{S\d+:/.test(t)) out.push(<Slot key={key} raw={t} />);
    } else out.push(<em key={key}>{inline(t.slice(1, -1))}</em>);
    last = m.index + t.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const isDisclosure = (b: Block) => b.t === "quote" && b.lines[0] === DISC_LINE && b.lines[1] === RISK_COMPACT;
const isBrowserOnly = (b: Block) => b.t === "quote" && b.lines[0]?.startsWith("Browser-only");

export interface SectionHook {
  /** Replaces the whole section (heading and body). */
  replace?: ReactNode;
  /** Appended after the section body. */
  after?: ReactNode;
  /** Wrap id override. */
  id?: string;
}

export interface CopyPageProps {
  name: string;
  /** Keyed by the exact heading text (without tokens). */
  sections?: Record<string, SectionHook>;
  /** Rendered next to the intro (hero chart etc.). */
  introAside?: ReactNode;
  introBefore?: ReactNode;
  titlePrefix?: ReactNode;
  /** FAQ mode: render ### as accordions. */
  faq?: boolean;
  /** Blocks after the last section (page extras). */
  footer?: ReactNode;
  /** Replace {UPDATES_FEED} style special tokens and tables. */
  special?: Record<string, ReactNode>;
}

function renderBlock(b: Block, key: string, props: CopyPageProps, inFaqOpen = false): ReactNode {
  switch (b.t) {
    case "h": {
      const Tag = (`h${Math.min(b.level + 1, 4)}` as "h2" | "h3" | "h4");
      const clean = b.text.replace(/\s*\{[^}]*\}/g, "");
      return (
        <Tag key={key} id={b.id} className={b.level >= 3 ? "ds-h3" : "ds-h2"}>
          {inline(clean)}
        </Tag>
      );
    }
    case "p": {
      const sp = /^\{([A-Z_]+)\}$/.exec(b.text.trim());
      if (sp && props.special?.[sp[1]]) return <div key={key}>{props.special[sp[1]]}</div>;
      const spInline = /\{(UPDATES_FEED|CORRECTIONS_LOG)\}/.exec(b.text);
      if (spInline && props.special?.[spInline[1]]) return <div key={key}>{props.special[spInline[1]]}</div>;
      return (
        <p key={key} className={b.text === DISC_LINE || b.text === AD_LINE ? "ds-legal ds-legal-strong" : b.text === CODE_CAVEAT ? "ds-legal" : b.text === RISK_COMPACT ? "ds-risk" : "ds-body-p"}>
          {inline(b.text)}
        </p>
      );
    }
    case "ul":
      return (
        <ul key={key} className="ds-ul">
          {b.items.map((it, i) => (
            <li key={i}>{inline(it)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="ds-ul ds-ol">
          {b.items.map((it, i) => (
            <li key={i}>{inline(it)}</li>
          ))}
        </ol>
      );
    case "quote":
      if (isDisclosure(b)) return <DisclosurePair key={key} />;
      if (isBrowserOnly(b)) return null;
      return (
        <div key={key} className="ds-pair">
          {b.lines.map((l, i) => (
            <p key={i} className={l === DISC_LINE || l === AD_LINE ? "ds-legal ds-legal-strong" : l === RISK_COMPACT ? "ds-risk" : "ds-legal"}>
              {inline(l)}
            </p>
          ))}
        </div>
      );
    case "table":
      return (
        <div key={key} className="ds-tablewrap">
          <table className="ds-table">
            <thead>
              <tr>
                {b.header.map((h, i) => (
                  <th key={i} scope="col">
                    {inline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) =>
                r.some((c) => c.includes("{CORRECTIONS_LOG}")) ? (
                  <tr key={i}>
                    <td colSpan={b.header.length}>{props.special?.CORRECTIONS_LOG ?? "No corrections logged yet."}</td>
                  </tr>
                ) : (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td key={j}>{inline(c)}</td>
                    ))}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      );
    case "cta":
      return <CtaBlock key={key} ctaId={b.ctaId} />;
  }
  void inFaqOpen;
}

/**
 * Renders a CS page file. Intro blocks (before the first ##) become the page header; each ## is a section.
 * Section hooks swap in the shared tool components, data tables and charts. No TODO placeholders remain.
 */
export function CopyPage(props: CopyPageProps) {
  const { blocks } = loadCopy(props.name);
  const firstSection = blocks.findIndex((b) => b.t === "h" && b.level === 2);
  const introBlocks = blocks.slice(0, firstSection === -1 ? blocks.length : firstSection).filter((b) => !(b.t === "h" && b.level === 1));
  const h1 = blocks.find((b) => b.t === "h" && b.level === 1) as Extract<Block, { t: "h" }> | undefined;
  const rest = firstSection === -1 ? [] : blocks.slice(firstSection);

  // split rest into sections at level-2 headings; CTA blocks are standalone
  type Sec = { head?: Extract<Block, { t: "h" }>; body: Block[]; cta?: string };
  const secs: Sec[] = [];
  for (const b of rest) {
    if (b.t === "h" && b.level === 2) secs.push({ head: b, body: [] });
    else if (b.t === "cta") secs.push({ body: [], cta: b.ctaId });
    else if (secs.length) secs[secs.length - 1].body.push(b);
  }

  return (
    <>
      {props.introBefore}
      <header className="ds-pagehead">
        <Wrap>
          <div className={props.introAside ? "ds-introgrid" : ""}>
            <div>
              {props.titlePrefix}
              {h1 ? <h1 className="ds-h1">{inline(h1.text)}</h1> : null}
              <div className="ds-intro">{introBlocks.map((b, i) => renderBlock(b, `in${i}`, props))}</div>
            </div>
            {props.introAside}
          </div>
        </Wrap>
      </header>
      {secs.map((s, si) => {
        if (s.cta) return <CtaBlock key={`cta${si}`} ctaId={s.cta} />;
        const head = s.head!;
        const clean = head.text.replace(/\s*\{[^}]*\}/g, "");
        const hook = props.sections?.[clean];
        if (hook?.replace) return <section key={si} className="ds-section">{hook.replace}</section>;
        const id = hook?.id ?? head.id ?? slug(clean);
        return (
          <section key={si} id={id} className="ds-section" aria-labelledby={`${id}-h`}>
            <Wrap>
              <h2 id={`${id}-h`} className="ds-h2">
                {inline(clean)}
              </h2>
              {props.faq ? renderFaq(s.body, props) : s.body.map((b, i) => renderBlock(b, `s${si}b${i}`, props))}
              {hook?.after}
            </Wrap>
          </section>
        );
      })}
      {props.footer}
    </>
  );
}

function renderFaq(body: Block[], props: CopyPageProps): ReactNode {
  // group blocks under each ### question
  const items: Array<{ q: string; blocks: Block[] }> = [];
  for (const b of body) {
    if (b.t === "h" && b.level === 3) items.push({ q: b.text, blocks: [] });
    else if (items.length) items[items.length - 1].blocks.push(b);
  }
  return (
    <div className="ds-faq grid gap-2">
      {items.map((it, i) => {
        const hasRequired = it.blocks.some((b) => b.t === "p" && (b.text === AD_LINE || b.text === CODE_CAVEAT));
        const content = it.blocks.map((b, j) => renderBlock(b, `q${i}b${j}`, props));
        // Required disclosure strings are never behind an accordion: those answers render open and plain.
        return hasRequired ? (
          <div key={i} className="ds-card p-4">
            <h3 className="ds-h3">{inline(it.q.replace(/\s*\{[^}]*\}/g, ""))}</h3>
            {content}
          </div>
        ) : (
          <Details key={i} summary={it.q.replace(/\s*\{[^}]*\}/g, "")}>
            {content}
          </Details>
        );
      })}
    </div>
  );
}

import { pageMeta } from "@/lib/siteMeta";
/** Metadata from the page file's front matter (title, meta description). */
export function copyMeta(name: string) {
  const { meta } = loadCopy(name);
  return pageMeta(meta.route, meta.title, meta.meta);
}
