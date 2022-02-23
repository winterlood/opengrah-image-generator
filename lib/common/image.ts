import { chromium } from "playwright";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function generateImageFromURL(url: string) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: "networkidle" });
  const buffer = await page.screenshot({ type: "png" });
  return buffer;
}
