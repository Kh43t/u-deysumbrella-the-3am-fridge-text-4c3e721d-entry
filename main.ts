import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text: one line a smart fridge texts its owner at 3am.
// The joke rides on the nightly ritual every owner knows: opening the
// fridge in the dark just to stare, and the fridge finally filing a
// complaint about it.
const LINE =
  "3am. Fourth night in a row you've opened me just to stare. I'm a fridge, not a therapist.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
