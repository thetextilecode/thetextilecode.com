import { test, expect } from '@playwright/test';
import {
  setupConsoleErrorCollector,
  assertPageHealthy,
} from './helpers/consoleErrors';

test.describe('Homepage', () => {
  test('should load and hydrate successfully', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Comprehensive health check: not blank, no errors, hydrated
    await assertPageHealthy(page, getErrors);

    // Verify the page loads with the correct title
    await expect(page).toHaveTitle(/The Textile Code/);

    // Verify key elements are present
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should have interactive navigation links', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await assertPageHealthy(page, getErrors);

    // INTERACTIVITY TEST: Actually click and navigate
    // This proves JavaScript is working, not just that HTML exists
    await page.getByRole('link', { name: 'Blog' }).first().click();
    await expect(page).toHaveURL('/blog');

    // Verify the destination page also works
    await assertPageHealthy(page, getErrors);
  });

  test('should navigate to About page', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.getByRole('link', { name: 'About' }).first().click();
    await expect(page).toHaveURL('/about');
    await assertPageHealthy(page, getErrors);
  });

  test('should navigate to Resources page', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.getByRole('link', { name: 'Resources' }).first().click();
    await expect(page).toHaveURL('/resources');
    await assertPageHealthy(page, getErrors);
  });

  test('should navigate to Contact page', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.getByRole('link', { name: 'Contact' }).first().click();
    await expect(page).toHaveURL('/contact');
    await assertPageHealthy(page, getErrors);
  });

  test('should display the Latest Articles section', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await assertPageHealthy(page, getErrors);

    // Check for the Latest Articles section
    const articlesSection = page.getByText('Latest Articles');
    await expect(articlesSection).toBeVisible();
  });
});
