import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "After eleven winters of mending nets by lamplight, Tomas stood on the grey pier at dawn and watched his granddaughter haul her first catch in alone, his hands in his pockets.";

if (line.length > 235 || line.includes("\n")) {
  throw new Error("Entry must be one line of at most 235 characters.");
}

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(folder, { recursive: true });
writeFileSync(join(folder, "entry.txt"), line, "utf8");
