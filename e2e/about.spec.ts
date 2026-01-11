import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('should load the about page with mission statement', async ({ page }) => {
    await page.goto('/about');

    // Verify the page has the mission section
    await expect(page.getByText('Our Mission')).toBeVisible();
    await expect(
      page.getByText('We Want to Empower Businesses in Fashion with Technology')
    ).toBeVisible();
  });

  test('should have a contact button', async ({ page }) => {
    await page.goto('/about');

    // Verify the Contact Me button exists
    const contactButton = page.getByRole('link', { name: 'Contact Me' });
    await expect(contactButton).toBeVisible();

    // Click the button and verify it navigates to contact page
    await contactButton.click();
    await expect(page).toHaveURL('/contact');
  });
});
