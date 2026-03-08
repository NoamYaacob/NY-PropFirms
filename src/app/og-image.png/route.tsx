import { ImageResponse } from "next/og";

export const runtime = "edge";

/** Fetch the Heebo Bold woff2 from Google Fonts so Hebrew renders correctly. */
async function loadHeebo(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Heebo:wght@700",
      { headers: { "User-Agent": "Mozilla/5.0 (compatible; Next.js OG)" } }
    ).then((r) => r.text());

    const url = css.match(/url\(([^)]+woff2[^)]*)\)/)?.[1];
    if (!url) return null;
    return fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export async function GET() {
  const fontData = await loadHeebo();

  return new ImageResponse(
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
          padding: "60px",
        }}
      >
        {/* Top gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "linear-gradient(90deg, #C9A84C, #EDCB72, #C9A84C)",
          }}
        />

        {/* Brand mark — mirrors the header logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontSize: 86,
              fontWeight: 700,
              color: "#EDCB72",
              letterSpacing: "-2px",
            }}
          >
            NY
          </span>
          <span
            style={{
              fontSize: 86,
              fontWeight: 700,
              color: "#EAEAF0",
              letterSpacing: "-2px",
              marginLeft: "10px",
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
            fontSize: 28,
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
            height: "5px",
            background: "linear-gradient(90deg, #C9A84C, #EDCB72, #C9A84C)",
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
}
