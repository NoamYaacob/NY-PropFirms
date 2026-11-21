import test from "node:test";
import assert from "node:assert/strict";
import { CTA_IDS } from "../../ctaIds.ts";
import { sanitizeSrc } from "../../affiliate.ts";

test("every CTA id is a valid /go/apex src, including en_pricing_link", () => {
  for (const id of CTA_IDS) assert.equal(sanitizeSrc(id), id);
  assert.ok((CTA_IDS as readonly string[]).includes("en_pricing_link"));
});
