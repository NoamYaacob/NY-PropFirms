import test from "node:test";
import assert from "node:assert/strict";
import { REDIRECTS, slashRedirect } from "./redirects.ts";

test("trailing-slash variants go straight to the final target (one hop)", () => {
  for (const [src, dest] of REDIRECTS) assert.equal(slashRedirect(`${src}/`), dest, src);
  assert.equal(slashRedirect("/en/"), "/");
  assert.equal(slashRedirect("/en/apex-payouts/"), "/payout-rules");
});
test("other paths keep the normal slash stripping; root and slash-less paths are untouched", () => {
  assert.equal(slashRedirect("/about/"), "/about");
  assert.equal(slashRedirect("/go/apex/en_mid_cta/"), "/go/apex/en_mid_cta");
  assert.equal(slashRedirect("/"), null);
  assert.equal(slashRedirect("/about"), null);
});
