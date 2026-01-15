import { test } from '@playwright/test';

/**
 * Screenshot capture tests for visual deploy previews.
 * These tests capture full-page screenshots of key pages to serve as
 * a visual preview in CI, especially useful for dependabot PRs where
 * actual deploy previews are disabled.
 */

const pages = [
  { name: 'homepage', path: '/' },
  { name: 'blog', path: '/blog' },
  { name: 'about', path: '/about' },
  { name: 'resources', path: '/resources' },
  { name: 'contact', path: '/contact' },
];

test.describe('Screenshot Capture', () => {
  for (const { name, path } of pages) {
    test(`capture ${name}`, async ({ page }) => {
      await page.goto(path);

      // Wait for page to be fully loaded and hydrated
      await page.waitForLoadState('networkidle');

      // Additional wait for any animations to settle
      await page.waitForTimeout(500);

      // Capture full-page screenshot
      await page.screenshot({
        path: `screenshots/${name}.png`,
        fullPage: true,
      });
    });
  }

  // Capture mobile viewport screenshots
  test.describe('Mobile viewport', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    for (const { name, path } of pages) {
      test(`capture ${name} (mobile)`, async ({ page }) => {
        await page.goto(path);

        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);

        await page.screenshot({
          path: `screenshots/${name}-mobile.png`,
          fullPage: true,
        });
      });
    }
  });
});
