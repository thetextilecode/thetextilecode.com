import { test, expect } from '@playwright/test';
import { setupConsoleErrorCollector, assertPageHealthy } from './helpers/consoleErrors';

test.describe('Blog Page', () => {
  test('should load and hydrate the blog page', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/blog');
    await page.waitForLoadState('networkidle');

    // Comprehensive health check: not blank, no errors, hydrated
    await assertPageHealthy(page, getErrors);

    // Verify the page loads and has blog-related content
    await expect(page).toHaveTitle(/The Textile Code/);
  });

  test('should navigate to blog from homepage', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await assertPageHealthy(page, getErrors);

    // Click the Blog link in the navigation
    await page.getByRole('link', { name: 'Blog' }).first().click();

    // Verify navigation to blog page
    await expect(page).toHaveURL('/blog');

    // Verify destination page is healthy
    await assertPageHealthy(page, getErrors);
  });
});
