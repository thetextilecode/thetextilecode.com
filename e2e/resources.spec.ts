import { test, expect } from '@playwright/test';

test.describe('Resources Page', () => {
  test('should load the resources page', async ({ page }) => {
    await page.goto('/resources');

    // Verify the page loads with the Resources heading
    await expect(page.getByRole('heading', { name: 'Resources' })).toBeVisible();
  });

  test('should display the Category sidebar', async ({ page }) => {
    await page.goto('/resources');

    // Verify the Category section exists in the sidebar
    await expect(page.getByText('Category')).toBeVisible();
  });

  test('should navigate to resources from homepage', async ({ page }) => {
    await page.goto('/');

    // Click the Resources link in the navigation
    await page.getByRole('link', { name: 'Resources' }).first().click();

    // Verify navigation to resources page
    await expect(page).toHaveURL('/resources');
  });
});
