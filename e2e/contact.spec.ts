import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test('should load the contact page with form', async ({ page }) => {
    await page.goto('/contact');

    // Verify the page loads with the contact header
    await expect(page.getByText('Get in touch')).toBeVisible();
    await expect(page.getByText('We Want to Hear From You', { exact: false })).toBeVisible();
  });

  test('should display the contact form with required fields', async ({ page }) => {
    await page.goto('/contact');

    // Verify form fields exist
    await expect(page.getByPlaceholder('Name (required)')).toBeVisible();
    await expect(page.getByPlaceholder('Your Email (required)')).toBeVisible();
    await expect(page.getByPlaceholder('Message')).toBeVisible();

    // Verify the submit button exists
    await expect(page.getByRole('button', { name: 'Send message' })).toBeVisible();
  });

  test('should have a link to the About page', async ({ page }) => {
    await page.goto('/contact');

    // Verify the About Us button exists
    const aboutButton = page.getByRole('link', { name: 'About Us' });
    await expect(aboutButton).toBeVisible();

    // Click and verify navigation
    await aboutButton.click();
    await expect(page).toHaveURL('/about');
  });
});
