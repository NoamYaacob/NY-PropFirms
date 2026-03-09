/**
 * Thin event-tracking wrapper around @vercel/analytics.
 *
 * TO REMOVE:  delete this file, remove all `import { track }` calls, and
 *             remove <Analytics /> from src/app/layout.tsx.
 * TO SWAP:    change the import below to a different provider and keep the
 *             same `track(event, props?)` signature.
 */
import { track as va } from "@vercel/analytics";

export function track(
  event: string,
  props?: Record<string, string | number | boolean>
): void {
  va(event, props);
}
