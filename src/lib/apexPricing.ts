export type PriceRow = {
  size: "25K" | "50K" | "100K" | "150K";
  /** Full/regular price before discount, e.g. "$177" — null if unavailable */
  regular: string | null;
  /** Current/discounted price, e.g. "$26.55" */
  discounted: string | null;
};

export type ApexPricingData = {
  eod: PriceRow[];
  intraday: PriceRow[];
  fetchedAt: string;
};

export type ApexPricingResult =
  | { ok: true; data: ApexPricingData }
  | { ok: false; error: string };

export const APEX_EVALUATION_PLANS_URL =
  "https://apextraderfunding.com/evaluation-plans";

const ACCOUNT_SIZES = ["25K", "50K", "100K", "150K"] as const;
type AccountSize = (typeof ACCOUNT_SIZES)[number];

// ─── helpers ─────────────────────────────────────────────────────────────────

function normalizePrice(raw: string): string {
  const val = parseFloat(raw.replace(/[$,]/g, ""));
  if (isNaN(val)) return raw.trim();
  return `$${val % 1 === 0 ? val.toFixed(0) : val.toFixed(2)}`;
}

// ─── Strategy 1: parse __NEXT_DATA__ JSON blob ────────────────────────────────

function parseNextData(html: string): ApexPricingData | null {
  const m = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/
  );
  if (!m) return null;

  try {
    const json = JSON.parse(m[1]);

    // Recursively find arrays that look like per-account pricing rows
    function findPricingArrays(node: unknown): PriceRow[][] {
      if (!node || typeof node !== "object") return [];
      if (Array.isArray(node)) {
        const results: PriceRow[][] = [];

        if (node.length >= 2 && node.every((i) => i && typeof i === "object")) {
          const items = node as Record<string, unknown>[];
          const keys = Object.keys(items[0] || {}).map((k) => k.toLowerCase());
          const hasPrice = keys.some(
            (k) =>
              k.includes("price") || k.includes("fee") || k.includes("cost")
          );
          const hasSize = keys.some(
            (k) =>
              k.includes("size") ||
              k.includes("account") ||
              k.includes("capital")
          );

          if (hasPrice && hasSize) {
            const rows: PriceRow[] = [];
            for (const item of items) {
              const sizeKey = Object.keys(item).find((k) =>
                ["size", "account", "capital"].some((w) =>
                  k.toLowerCase().includes(w)
                )
              );
              const priceKey = Object.keys(item).find((k) =>
                ["price", "fee", "cost"].some((w) => k.toLowerCase().includes(w))
              );
              const origKey = Object.keys(item).find((k) =>
                ["original", "regular", "full", "list"].some((w) =>
                  k.toLowerCase().includes(w)
                )
              );

              if (sizeKey && priceKey) {
                const sizeStr = String(item[sizeKey])
                  .toUpperCase()
                  .replace(/,/g, "");
                const size = ACCOUNT_SIZES.find(
                  (s) =>
                    sizeStr.includes(s) ||
                    sizeStr.includes(s.replace("K", "000"))
                );
                if (size) {
                  rows.push({
                    size,
                    discounted: normalizePrice(String(item[priceKey])),
                    regular: origKey
                      ? normalizePrice(String(item[origKey]))
                      : null,
                  });
                }
              }
            }
            if (rows.length >= 2) results.push(rows);
          }
        }

        for (const child of node) results.push(...findPricingArrays(child));
        return results;
      }

      const results: PriceRow[][] = [];
      for (const val of Object.values(node as object))
        results.push(...findPricingArrays(val));
      return results;
    }

    const arrays = findPricingArrays(json);
    if (arrays.length === 0) return null;

    return {
      eod: arrays[0],
      intraday: arrays.length > 1 ? arrays[1] : arrays[0],
      fetchedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

// ─── Strategy 2: regex over raw HTML ─────────────────────────────────────────

function extractPricesFromBlock(block: string): PriceRow[] {
  return ACCOUNT_SIZES.map((size): PriceRow => {
    const sizeNum = parseInt(size);

    // Find position of size mention (25K / 25,000 / 25000)
    const sizePatterns = [
      new RegExp(`\\b${sizeNum}[Kk]\\b`),
      new RegExp(`\\b${sizeNum},000\\b`),
      new RegExp(`\\b${sizeNum}000\\b`),
    ];
    let sizeIdx = -1;
    for (const pat of sizePatterns) {
      const m = pat.exec(block);
      if (m) {
        sizeIdx = m.index;
        break;
      }
    }
    if (sizeIdx === -1) return { size, regular: null, discounted: null };

    // Look at a window around the size mention for dollar amounts
    const window = block.slice(
      Math.max(0, sizeIdx - 400),
      sizeIdx + 800
    );

    const priceRe = /\$[\d,]+(?:\.\d{1,2})?/g;
    const prices: { raw: string; val: number }[] = [];
    let pm: RegExpExecArray | null;
    while ((pm = priceRe.exec(window)) !== null) {
      const val = parseFloat(pm[0].replace(/[$,]/g, ""));
      // Exclude values that match account sizes ($25,000 etc.)
      if (val > 0 && val < 2000) {
        prices.push({ raw: pm[0], val });
      }
    }

    if (prices.length === 0) return { size, regular: null, discounted: null };
    if (prices.length === 1)
      return { size, regular: null, discounted: normalizePrice(prices[0].raw) };

    const sorted = [...prices].sort((a, b) => a.val - b.val);
    return {
      size,
      regular: normalizePrice(sorted[sorted.length - 1].raw),
      discounted: normalizePrice(sorted[0].raw),
    };
  });
}

function parseHTML(html: string): ApexPricingData {
  const lower = html.toLowerCase();

  // Try to find type-specific sections
  function sectionFor(keyword: string): string {
    const idx = lower.indexOf(keyword);
    if (idx === -1) return html;
    return html.slice(Math.max(0, idx - 1000), idx + 15000);
  }

  return {
    eod: extractPricesFromBlock(sectionFor("eod")),
    intraday: extractPricesFromBlock(sectionFor("intraday")),
    fetchedAt: new Date().toISOString(),
  };
}

// ─── Public fetcher ───────────────────────────────────────────────────────────

export async function fetchApexPricing(): Promise<ApexPricingResult> {
  try {
    const res = await fetch(APEX_EVALUATION_PLANS_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "max-age=0",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Upgrade-Insecure-Requests": "1",
      },
      next: { revalidate: 3600 }, // re-fetch at most once per hour
    });

    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}` };
    }

    const html = await res.text();

    // Strategy 1 — __NEXT_DATA__
    const fromNext = parseNextData(html);
    if (
      fromNext &&
      (fromNext.eod.some((r) => r.discounted) ||
        fromNext.intraday.some((r) => r.discounted))
    ) {
      return { ok: true, data: fromNext };
    }

    // Strategy 2 — HTML regex
    const fromHTML = parseHTML(html);
    const hasData =
      fromHTML.eod.some((r) => r.discounted || r.regular) ||
      fromHTML.intraday.some((r) => r.discounted || r.regular);

    if (!hasData) {
      return { ok: false, error: "לא ניתן לחלץ נתוני מחירים מהדף" };
    }

    return { ok: true, data: fromHTML };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: msg };
  }
}
