import { test, expect } from '@playwright/test';
import { setupConsoleErrorCollector, hasNextJsErrorOverlay } from './helpers/consoleErrors';

test.describe('Homepage', () => {
  test('should load successfully with correct title', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');

    // CRITICAL: Fail if Next.js error overlay is visible
    expect(await hasNextJsErrorOverlay(page)).toBe(false);

    // Verify the page loads with the correct title
    await expect(page).toHaveTitle(/The Textile Code/);

    // Verify the header is present
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Fail if there are any console errors
    const errors = getErrors();
    expect(errors, `Console errors detected: ${errors.join(', ')}`).toHaveLength(0);
  });

  test('should have working navigation links', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');

    // CRITICAL: Fail if Next.js error overlay is visible
    expect(await hasNextJsErrorOverlay(page)).toBe(false);

    // Check that main navigation links exist
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Resources' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();

    // Fail if there are any console errors
    const errors = getErrors();
    expect(errors, `Console errors detected: ${errors.join(', ')}`).toHaveLength(0);
  });

  test('should display the Latest Articles section', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');

    // CRITICAL: Fail if Next.js error overlay is visible
    expect(await hasNextJsErrorOverlay(page)).toBe(false);

    // Check for the Latest Articles section
    const articlesSection = page.getByText('Latest Articles');
    await expect(articlesSection).toBeVisible();

    // Fail if there are any console errors
    const errors = getErrors();
    expect(errors, `Console errors detected: ${errors.join(', ')}`).toHaveLength(0);
  });

  test('should not have any client-side errors after hydration', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');
    
    // Wait for hydration to complete
    await page.waitForLoadState('networkidle');
    
    // Additional wait to catch any delayed errors
    await page.waitForTimeout(1000);

    // CRITICAL: Fail if Next.js error overlay is visible
    expect(await hasNextJsErrorOverlay(page)).toBe(false);

    // Verify main content is visible (not just the error page)
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // Fail if there are any console errors
    const errors = getErrors();
    expect(errors, `Console errors detected: ${errors.join(', ')}`).toHaveLength(0);
  });
});
