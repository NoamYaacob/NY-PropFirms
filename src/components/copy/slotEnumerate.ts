/** Node-only helper (tests and the report script): lists every {Sxx:key} token site in content/pages/*.md that renders. */
import { readFileSync, readdirSync } from "node:fs";
import { parseBody, parseFrontMatter, type Block } from "../../lib/pagecopy/parse.ts";

const dir = new URL("../../../content/pages/", import.meta.url);

export interface TokenSite {
  page: string;
  token: string;
  line: string;
}

function texts(b: Block): string[] {
  if (b.t === "p") return [b.text];
  if (b.t === "ul" || b.t === "ol") return b.items;
  if (b.t === "quote") return b.lines;
  if (b.t === "table") return [...b.header, ...b.rows.flat()];
  return []; // headings strip their tokens when rendered
}

export function listTokenSites(): TokenSite[] {
  const out: TokenSite[] = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".md")).sort()) {
    const page = f.slice(0, -3);
    const { body } = parseFrontMatter(readFileSync(new URL(f, dir), "utf8"));
    for (const b of parseBody(body)) {
      for (const line of texts(b)) {
        for (const m of line.matchAll(/\{(S\d+:[A-Za-z0-9_:.|*-]+)\}/g)) {
          if (m[1].includes("sources.registry")) continue;
          out.push({ page, token: m[0], line });
        }
      }
    }
  }
  return out;
}
