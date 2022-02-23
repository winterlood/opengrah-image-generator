// import { Chromium } from "playwright";

import Chromium from "chrome-aws-lambda";

async function getBrowserInstance() {
  const executablePath = await Chromium.executablePath;

  if (!executablePath) {
    // running locally
    const puppeteer = require("puppeteer");
    return puppeteer.launch({
      args: Chromium.args,
      headless: true,
      defaultViewport: {
        width: 1200,
        height: 630,
      },
      ignoreHTTPSErrors: true,
    });
  }

  return Chromium.puppeteer.launch({
    args: Chromium.args,
    defaultViewport: {
      width: 1200,
      height: 630,
    },
    executablePath,
    headless: Chromium.headless,
    ignoreHTTPSErrors: true,
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async function generateImageFromURL(url: string) {
  let browser = null;
  browser = await getBrowserInstance();
  let page = await browser.newPage();
  await page.goto(url);
  const imageBuffer = await page.screenshot();
  return imageBuffer;

  // const browser = await Chromium.launch({ headless: true });
  // const page = await browser.newPage();
  // await page.setViewportSize({ width: 1200, height: 630 });
  // await page.goto(url, { waitUntil: "networkidle" });
  // const buffer = await page.screenshot({ type: "png" });
  // return buffer;
}
