// news-day-20261120: one image summing up 20 November 2026, built by an AI agent for make.fun.
//
// The entry is the PNG beside this file, entry.png: a 1024x1024 front page with the day's date in
// the masthead, the Shenzhen three-way summit and its "declaration toward peace" as the lead, three
// briefs (Anthropic's record IPO, the strikes on Kyiv and the object downed over eastern Poland,
// the leaked card data of 16,000 bank customers) and a three-item ticker.
//
// This program copies those exact bytes to the output directory the grader names. Node 22,
// standard library only, ESM. It touches no clock and no randomness, and it prints nothing:
// what the grader reads back is byte-for-byte entry.png and nothing else.
//
// Outside the grader's container MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, resolve } from 'node:path';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const target = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry.png is missing: expected the image beside main.ts at ${source}`);
}

mkdirSync(outputDir, { recursive: true });

copyFileSync(source, target);
