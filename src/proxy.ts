import { NextResponse, type NextRequest } from "next/server";
import { slashRedirect } from "./lib/redirects";

/**
 * With skipTrailingSlashRedirect, Next no longer strips a trailing slash itself (that made /en/ and /en/apex-payouts/ take two hops).
 * This proxy does the stripping in one 308, straight to the final target for the old Hebrew-era paths, query string kept.
 * Everything else behaves as before: /about/ -> /about. Not run for /_next assets.
 */
export function proxy(req: NextRequest) {
  const dest = slashRedirect(req.nextUrl.pathname);
  if (!dest) return NextResponse.next();
  const [path, hash] = dest.split("#");
  const url = new URL(`${path}${req.nextUrl.search}${hash ? `#${hash}` : ""}`, req.url);
  return NextResponse.redirect(url, 308);
}

export const config = { matcher: ["/((?!_next/).*)"] };
