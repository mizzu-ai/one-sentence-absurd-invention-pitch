import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Angle: lead with the absurd legal escalation—a smoke alarm filing a
// restraining order against the toaster—and land on the burnt-toast fire drill.
const PITCH: string =
  "This litigious smoke alarm files a restraining order against the toaster so burnt toast stops turning breakfast into a fire drill.";

function assertValidPitch(pitch: string): void {
  const trimmed: string = pitch.trim();
  if (trimmed.length === 0 || pitch !== trimmed) {
    throw new Error("Pitch must be non-blank without leading or trailing whitespace.");
  }
  if (pitch.length < 1 || pitch.length > 220) {
    throw new Error(`Pitch length must be 1-220 characters, got ${pitch.length}.`);
  }
  if (/[\r\n]/.test(pitch) || !/^[^.!?]+[.!?]$/.test(pitch)) {
    throw new Error("Pitch must be exactly one sentence.");
  }
}

assertValidPitch(PITCH);

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const outputPath: string = join(outputDir, "entry.txt");
writeFileSync(outputPath, PITCH, "utf8");
