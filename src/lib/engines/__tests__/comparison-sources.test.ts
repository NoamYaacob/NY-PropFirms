import test from "node:test";
import assert from "node:assert/strict";
import { buildRows } from "../comparison.ts";
import { EVAL, PA, SIZES } from "../../../data/apex.ts";

test("Tool 5 source chips cite the page of the stage and type shown (CF F4)", () => {
  for (const size of SIZES) {
    const pa = buildRows("Performance Account", size, ["EOD", "Intraday"]).find((r) => r.label === "Max Drawdown (distance)")!;
    assert.equal(pa.cells.EOD!.src, PA.EOD[size].maxDrawdown.url);
    assert.equal(pa.cells.Intraday!.src, PA.Intraday[size].maxDrawdown.url);
    const ev = buildRows("Evaluation", size, ["EOD", "Intraday"]).find((r) => r.label === "Consistency")!;
    assert.equal(ev.cells.EOD!.src, EVAL.EOD[size].consistency.url);
    assert.equal(ev.cells.Intraday!.src, EVAL.Intraday[size].consistency.url);
    assert.notEqual(ev.cells.Intraday!.src, EVAL.EOD[size].profitTarget.url);
  }
});
