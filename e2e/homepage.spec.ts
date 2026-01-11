import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully with correct title', async ({ page }) => {
    await page.goto('/');

    // Verify the page loads with the correct title
    await expect(page).toHaveTitle(/The Textile Code/);

    // Verify the header is present
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Check that main navigation links exist
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Resources' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should display the Latest Articles section', async ({ page }) => {
    await page.goto('/');

    // Check for the Latest Articles section
    const articlesSection = page.getByText('Latest Articles');
    await expect(articlesSection).toBeVisible();
  });
});
