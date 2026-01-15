import { test, expect } from '@playwright/test';
import { setupConsoleErrorCollector, assertPageHealthy } from './helpers/consoleErrors';

test.describe('About Page', () => {
  test('should load and hydrate the about page', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/about');
    await page.waitForLoadState('networkidle');

    // Comprehensive health check: not blank, no errors, hydrated
    await assertPageHealthy(page, getErrors);

    // Verify the page has the mission section
    await expect(page.getByText('Our Mission')).toBeVisible();
    await expect(
      page.getByText('We Want to Empower Businesses in Fashion with Technology')
    ).toBeVisible();
  });

  test('should have working contact button', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    await assertPageHealthy(page, getErrors);

    // Verify the Contact Me button exists and works
    const contactButton = page.getByRole('link', { name: 'Contact Me' });
    await expect(contactButton).toBeVisible();

    // INTERACTIVITY TEST: Click the button and verify navigation
    await contactButton.click();
    await expect(page).toHaveURL('/contact');

    // Verify destination page is healthy
    await assertPageHealthy(page, getErrors);
  });
});
