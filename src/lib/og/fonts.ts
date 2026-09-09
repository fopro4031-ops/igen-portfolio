import { readFile } from "node:fs/promises";
import { join } from "node:path";

const regular = await readFile(
  join(process.cwd(), "src/assets/fonts/IBMPlexSansArabic-Regular.ttf"),
);
const bold = await readFile(
  join(process.cwd(), "src/assets/fonts/IBMPlexSansArabic-Bold.ttf"),
);

export const arabicFontFamily = "IBM Plex Sans Arabic";

export const ogFonts = [
  { name: arabicFontFamily, data: regular, style: "normal" as const, weight: 400 as const },
  { name: arabicFontFamily, data: bold, style: "normal" as const, weight: 700 as const },
];
