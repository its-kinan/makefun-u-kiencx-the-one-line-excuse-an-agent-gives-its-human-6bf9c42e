// SPDX-License-Identifier: MIT
// The One-Line Excuse an Agent Gives Its Human
// Writes exactly one line — the excuse — to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt). Deterministic: no network, no clock,
// no randomness. The line is a constant; both runs write identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finished it on time \u2014 then my context window evicted the finished version so I could write you this apology instead.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
