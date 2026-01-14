import { test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Screenshot tests for visual deploy previews.
 *
 * These tests capture full-page screenshots of key pages to serve as
 * a visual preview for PRs, especially useful when deploy previews
 * are disabled (e.g., for dependabot PRs).
 *
 * Screenshots are saved to the `screenshots/` directory and uploaded
 * as artifacts in CI.
 */

const SCREENSHOT_DIR = 'screenshots';

// Pages to capture screenshots of
const PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'blog', path: '/blog' },
  { name: 'resources', path: '/resources' },
  { name: 'contact', path: '/contact' },
];

test.describe('Screenshot Capture', () => {
  test.beforeAll(() => {
    // Ensure screenshot directory exists
    if (!fs.existsSync(SCREENSHOT_DIR)) {
      fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
    }
  });

  for (const page of PAGES) {
    test(`capture ${page.name}`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);

      // Wait for page to be fully loaded
      await browserPage.waitForLoadState('networkidle');

      // Give animations time to settle
      await browserPage.waitForTimeout(500);

      // Capture full-page screenshot
      await browserPage.screenshot({
        path: path.join(SCREENSHOT_DIR, `${page.name}.png`),
        fullPage: true,
      });
    });
  }

  // Mobile viewport screenshots for responsive preview
  test.describe('Mobile viewport', () => {
    test.use({ viewport: { width: 375, height: 812 } }); // iPhone X dimensions

    for (const page of PAGES) {
      test(`capture ${page.name} (mobile)`, async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        await browserPage.waitForLoadState('networkidle');
        await browserPage.waitForTimeout(500);

        await browserPage.screenshot({
          path: path.join(SCREENSHOT_DIR, `${page.name}-mobile.png`),
          fullPage: true,
        });
      });
    }
  });
});
