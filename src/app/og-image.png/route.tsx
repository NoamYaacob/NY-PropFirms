import { ImageResponse } from "next/og";

export const runtime = "edge";

/**
 * Fetch Heebo Bold from Google Fonts with a hard 4-second timeout.
 * Returns null on any failure so the route still renders (Latin fallback).
 */
async function loadHeebo(): Promise<ArrayBuffer | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);

    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Heebo:wght@700",
      {
        signal: controller.signal,
        headers: { "User-Agent": "Mozilla/5.0 (compatible; Next.js OG)" },
      }
    ).then((r) => r.text());

    clearTimeout(timer);

    const url = css.match(/url\(([^)]+woff2[^)]*)\)/)?.[1];
    if (!url) return null;

    return fetch(url, { signal: AbortSignal.timeout(4000) }).then((r) =>
      r.arrayBuffer()
    );
  } catch {
    return null;
  }
}

export async function GET() {
  const fontData = await loadHeebo();

  const img = new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#09090E",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Heebo, sans-serif",
        }}
      >
        {/* Top gold accent bar — backgroundImage required for gradients in Satori */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundImage:
              "linear-gradient(90deg, #C9A84C, #EDCB72, #C9A84C)",
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#EDCB72",
              letterSpacing: "-2px",
            }}
          >
            NY
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#EAEAF0",
              letterSpacing: "-2px",
              marginLeft: "12px",
            }}
          >
            PROP FIRMS
          </span>
        </div>

        {/* Hebrew subtitle */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#EAEAF0",
            marginBottom: "24px",
            direction: "rtl",
          }}
        >
          המדריך הישראלי לחברות פרופ
        </div>

        {/* Supporting line */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 400,
            color: "#55556A",
            letterSpacing: "3px",
          }}
        >
          Apex • EOD • Intraday • PA
        </div>

        {/* Bottom gold accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundImage:
              "linear-gradient(90deg, #C9A84C, #EDCB72, #C9A84C)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontData
        ? [{ name: "Heebo", data: fontData, weight: 700, style: "normal" }]
        : [],
    }
  );

  // Cache aggressively — WhatsApp / social crawlers benefit from a CDN-cached response.
  return new Response(img.body, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
