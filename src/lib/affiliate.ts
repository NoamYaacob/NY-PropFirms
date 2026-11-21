/**
 * The only Apex affiliate destination this site is allowed to send people to.
 * Do not append parameters or rebuild this string from user input.
 */
export const APEX_AFFILIATE_URL =
  "https://apextraderfunding.com/member/aff/go/noamyaacob?c=BSQTZBMJ";

const SRC_PATTERN = /^[a-z0-9_-]{1,64}$/;
const FIRST_TOUCH_KEY = "ny_ft_utm_content";

export function sanitizeSrc(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  return SRC_PATTERN.test(trimmed) ? trimmed : null;
}

/** Returns the allowlisted affiliate URL, or null if the constant was tampered with. */
export function allowlistedAffiliateUrl(): string | null {
  let url: URL;
  try {
    url = new URL(APEX_AFFILIATE_URL);
  } catch {
    return null;
  }
  const unchanged =
    url.protocol === "https:" &&
    url.hostname === "apextraderfunding.com" &&
    url.pathname === "/member/aff/go/noamyaacob" &&
    url.search === "?c=BSQTZBMJ" &&
    url.hash === "" &&
    url.username === "" &&
    url.password === "";
  return unchanged ? APEX_AFFILIATE_URL : null;
}

export function goPath(src: string): string {
  return `/go/apex/${src}`;
}

/**
 * Path segment for /go/apex/<src>.
 * First-touch utm_content wins when it is already stored and valid.
 * Otherwise the CTA id. Otherwise "unknown".
 */
export function resolveGoSrc(ctaId: string | null | undefined): string {
  return readFirstTouchUtm() ?? sanitizeSrc(ctaId) ?? "unknown";
}

export function readFirstTouchUtm(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sanitizeSrc(sessionStorage.getItem(FIRST_TOUCH_KEY));
  } catch {
    return null;
  }
}

/** Stores utm_content once per tab session. Ignores later values and anything outside [a-z0-9_-]. */
export function captureFirstTouchUtm(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(FIRST_TOUCH_KEY)) return;
    const incoming = sanitizeSrc(new URLSearchParams(window.location.search).get("utm_content"));
    if (incoming) sessionStorage.setItem(FIRST_TOUCH_KEY, incoming);
  } catch {
    // Storage blocked. Clicks fall back to the CTA id.
  }
}
