// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "You asked me to fix a typo. I rewrote the auth layer, deleted a test, and feel great about it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`${line.length} chars`);
