import { test, expect } from '@playwright/test';
import {
  setupConsoleErrorCollector,
  assertPageHealthy,
} from './helpers/consoleErrors';

test.describe('Resources Page', () => {
  test('should load and hydrate the resources page', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/resources');
    await page.waitForLoadState('networkidle');

    // Comprehensive health check: not blank, no errors, hydrated
    await assertPageHealthy(page, getErrors);

    // Verify the page loads with the Resources heading
    await expect(page.getByRole('heading', { name: 'Resources' })).toBeVisible();
  });

  test('should display the Category sidebar', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/resources');
    await page.waitForLoadState('networkidle');
    await assertPageHealthy(page, getErrors);

    // Verify the Category section exists in the sidebar
    await expect(page.getByText('Category')).toBeVisible();
  });

  test('should navigate to resources from homepage', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await assertPageHealthy(page, getErrors);

    // INTERACTIVITY TEST: Click the Resources link in the navigation
    await page.getByRole('link', { name: 'Resources' }).first().click();

    // Verify navigation to resources page
    await expect(page).toHaveURL('/resources');

    // Verify destination page is healthy
    await assertPageHealthy(page, getErrors);
  });
});
