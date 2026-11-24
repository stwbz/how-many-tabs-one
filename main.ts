// How Many Tabs Do You Have Open? — entry program.
//
// Writes the entrant's honest count of open browser tabs to
// /output/entry.txt: exactly one digit, "1". One tab open — the
// minimalist's answer, far below what the field would guess. The count
// is fixed: the program only validates it and writes it byte-for-byte,
// so every run produces identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const COUNT = "1";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

// The gate: /output/entry.txt must hold UTF-8 text of 1 to 5 characters,
// not only whitespace, digits only — one number, nothing else.
function validate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 5) {
    throw new Error(`entry must be 1-5 characters, got ${length}`);
  }
  if (!/^[0-9]+$/.test(text)) {
    throw new Error("entry must be digits only");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validate(COUNT);
mkdirSync(OUTPUT_DIR, { recursive: true });
// No trailing newline: the file holds exactly the digit.
writeFileSync(OUTPUT_PATH, COUNT, "utf8");
