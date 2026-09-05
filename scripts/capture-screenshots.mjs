#!/usr/bin/env node
/**
 * Dev-only screenshot capture utility. NOT run by `npm run dev`/`build`/`start`
 * — invoked explicitly via `npm run capture:<slug>`. Requires `playwright`
 * (devDependency only; never imported by app code).
 *
 * Usage: node scripts/capture-screenshots.mjs <slug>
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { captureTargets } from "./capture-config.mjs";

const slug = process.argv[2];
const target = slug && captureTargets[slug];

if (!target) {
  console.error(
    `Usage: node scripts/capture-screenshots.mjs <slug>\nKnown slugs: ${Object.keys(captureTargets).join(", ")}`,
  );
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "projects", slug);
await mkdir(outDir, { recursive: true });

async function settle(page) {
  // Some sites (chat widgets, analytics) never truly go network-idle —
  // don't let that block the capture.
  await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(600);
  // Scroll through once to trigger scroll-reveal / lazy-loaded content.
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = page.viewportSize()?.height ?? 900;
  const steps = Math.ceil(scrollHeight / viewportHeight);
  for (let i = 0; i <= steps; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * viewportHeight * 0.85);
    await page.waitForTimeout(300);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
}

const browser = await chromium.launch();
const notes = [];

try {
  const page = await browser.newPage({ viewport: target.viewport });
  await page.goto(target.url, { waitUntil: "load", timeout: 60000 });
  await settle(page);

  for (const section of target.sections) {
    await page.evaluate((y) => window.scrollTo(0, y), section.scrollY);
    await page.waitForTimeout(400);
    const file = path.join(outDir, `section-${section.name}.png`);
    await page.screenshot({ path: file });
    console.log("captured", file);
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(outDir, "full-page.png"),
    fullPage: true,
  });
  console.log("captured full-page.png");

  if (target.productDetail?.url) {
    try {
      await page.goto(target.productDetail.url, {
        waitUntil: "networkidle",
        timeout: 30000,
      });
      await settle(page);
      await page.screenshot({
        path: path.join(outDir, "product-detail.png"),
      });
      console.log("captured product-detail.png");
    } catch {
      notes.push(
        "product-detail.png could not be captured automatically — send this screenshot manually if you want it.",
      );
    }
  }

  await page.close();

  if (target.mobile) {
    const mobilePage = await browser.newPage({ viewport: target.mobile });
    await mobilePage.goto(target.url, { waitUntil: "load", timeout: 60000 });
    await settle(mobilePage);
    await mobilePage.screenshot({
      path: path.join(outDir, "mobile-hero.png"),
    });
    console.log("captured mobile-hero.png");
    await mobilePage.close();
  }
} finally {
  await browser.close();
}

if (notes.length) {
  console.log("\nNeeds manual follow-up:");
  for (const note of notes) console.log(" -", note);
}
