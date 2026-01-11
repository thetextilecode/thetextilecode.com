import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test('should load the blog page', async ({ page }) => {
    await page.goto('/blog');

    // Verify the page loads and has blog-related content
    await expect(page).toHaveTitle(/The Textile Code/);
  });

  test('should navigate to blog from homepage', async ({ page }) => {
    await page.goto('/');

    // Click the Blog link in the navigation
    await page.getByRole('link', { name: 'Blog' }).first().click();

    // Verify navigation to blog page
    await expect(page).toHaveURL('/blog');
  });
});
