import { test, expect } from '@playwright/test';
import { setupConsoleErrorCollector, hasNextJsErrorOverlay } from './helpers/consoleErrors';

test.describe('Blog Page', () => {
  test('should load the blog page', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/blog');

    // CRITICAL: Fail if Next.js error overlay is visible
    expect(await hasNextJsErrorOverlay(page)).toBe(false);

    // Verify the page loads and has blog-related content
    await expect(page).toHaveTitle(/OpenThreads/);

    // Fail if there are any console errors
    const errors = getErrors();
    expect(errors, `Console errors detected: ${errors.join(', ')}`).toHaveLength(0);
  });

  test('should navigate to blog from homepage', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');

    // CRITICAL: Fail if Next.js error overlay is visible
    expect(await hasNextJsErrorOverlay(page)).toBe(false);

    // Click the Blog link in the navigation
    await page.getByRole('link', { name: 'Blog' }).first().click();

    // Verify navigation to blog page
    await expect(page).toHaveURL('/blog');

    // Also verify no error overlay after navigation
    expect(await hasNextJsErrorOverlay(page)).toBe(false);

    // Fail if there are any console errors
    const errors = getErrors();
    expect(errors, `Console errors detected: ${errors.join(', ')}`).toHaveLength(0);
  });
});
