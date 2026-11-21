/**
 * Minimal parser for the CS page files (content/pages/*.md, copied from APEX-Affiliate-OS content/en_site_v2/pages).
 * Pure functions, unit-tested. Build notes (HTML comments) never render. <a id="x"></a> lines become ids on the next heading.
 */

export interface Meta {
  route: string;
  title: string;
  meta: string;
  h1: string;
  ctaIds: string[];
}

export type Block =
  | { t: "h"; level: number; text: string; id?: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "quote"; lines: string[] }
  | { t: "table"; header: string[]; rows: string[][] }
  | { t: "cta"; ctaId: string };

export function parseFrontMatter(src: string): { meta: Meta; body: string } {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(src);
  const raw = m ? m[1] : "";
  const get = (k: string) => new RegExp(`^${k}:\\s*(.*)$`, "m").exec(raw)?.[1]?.trim() ?? "";
  const cta = /^ctaIds:\s*\[([^\]]*)\]/m.exec(raw)?.[1] ?? "";
  return {
    meta: { route: get("route"), title: get("title"), meta: get("meta"), h1: get("h1"), ctaIds: cta.split(",").map((s) => s.trim()).filter(Boolean) },
    body: m ? src.slice(m[0].length) : src,
  };
}

const slug = (s: string) =>
  s
    .replace(/\{[^}]*\}/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function parseBody(body: string): Block[] {
  // strip build-note comments (multi-line safe)
  const text = body.replace(/<!--[\s\S]*?-->/g, "");
  const lines = text.split("\n");
  const blocks: Block[] = [];
  let pendingId: string | undefined;
  let i = 0;
  const isSpecial = (l: string) => /^(#{1,4}\s|>|- |\d+\.\s|\|)/.test(l) || /^<a id=/.test(l);
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    const a = /^<a id="([^"]+)"><\/a>\s*$/.exec(line.trim());
    if (a) {
      pendingId = a[1];
      i += 1;
      continue;
    }
    const h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      blocks.push({ t: "h", level: h[1].length, text: h[2].trim(), id: pendingId });
      pendingId = undefined;
      i += 1;
      continue;
    }
    if (line.startsWith(">")) {
      const q: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        q.push(lines[i].replace(/^>\s?/, "").trim());
        i += 1;
      }
      blocks.push({ t: "quote", lines: q });
      continue;
    }
    if (/^\|/.test(line)) {
      const rows: string[][] = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        rows.push(lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
        i += 1;
      }
      const data = rows.filter((r) => !r.every((c) => /^-+$/.test(c)));
      blocks.push({ t: "table", header: data[0] ?? [], rows: data.slice(1) });
      continue;
    }
    const ul = /^-\s+(.*)$/.exec(line);
    const ol = /^\d+\.\s+(.*)$/.exec(line);
    if (ul || ol) {
      const items: string[] = [];
      const ordered = !!ol;
      while (i < lines.length) {
        const m = ordered ? /^\d+\.\s+(.*)$/.exec(lines[i]) : /^-\s+(.*)$/.exec(lines[i]);
        if (m) {
          items.push(m[1].trim());
          i += 1;
        } else if (/^\s{2,}\S/.test(lines[i]) && items.length) {
          items[items.length - 1] += " " + lines[i].trim();
          i += 1;
        } else break;
      }
      blocks.push({ t: ordered ? "ol" : "ul", items });
      continue;
    }
    // paragraph (consecutive non-special lines)
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !isSpecial(lines[i])) {
      para.push(lines[i].trim());
      i += 1;
    }
    if (para.length) blocks.push({ t: "p", text: para.join(" ") });
    else i += 1;
  }
  return collapseCta(blocks);
}

/** "If you decide to use Apex" heading through the /go/apex/<id> link becomes one cta block. */
function collapseCta(blocks: Block[]): Block[] {
  const out: Block[] = [];
  for (let i = 0; i < blocks.length; i += 1) {
    const b = blocks[i];
    if (b.t === "h" && /^If you decide to use Apex$/i.test(b.text)) {
      let j = i + 1;
      let id: string | null = null;
      while (j < blocks.length) {
        const c = blocks[j];
        const text = c.t === "p" ? c.text : "";
        const m = /\]\(\/go\/apex\/([a-z0-9_-]+)\)/.exec(text);
        if (m) {
          id = m[1];
          break;
        }
        if (c.t === "h") break;
        j += 1;
      }
      if (id) {
        out.push({ t: "cta", ctaId: id });
        i = j;
        continue;
      }
    }
    out.push(b);
  }
  return out;
}

export interface Token {
  slot: string;
  keys: string[];
}

/** Extract {Sxx:key|key} tokens (also {UPDATES_FEED}, {CORRECTIONS_LOG}). */
export function findTokens(text: string): string[] {
  return text.match(/\{[A-Za-z0-9_:.|*-]+\}/g) ?? [];
}

export function parseToken(raw: string): Token | { special: string } {
  const inner = raw.slice(1, -1);
  const m = /^(S\d+):(.+)$/.exec(inner);
  if (!m) return { special: inner };
  return { slot: m[1], keys: m[2].split("|") };
}

export { slug };
