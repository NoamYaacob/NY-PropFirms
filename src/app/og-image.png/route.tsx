import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
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
          fontFamily: "sans-serif",
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

        {/* English subtitle (no Hebrew, no external font fetch) */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#EAEAF0",
            marginBottom: "24px",
          }}
        >
          Futures prop rules, decoded
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
