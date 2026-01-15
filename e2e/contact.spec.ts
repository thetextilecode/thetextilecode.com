import { test, expect } from '@playwright/test';
import { setupConsoleErrorCollector, assertPageHealthy } from './helpers/consoleErrors';

test.describe('Contact Page', () => {
  test('should load and hydrate the contact page', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    // Comprehensive health check: not blank, no errors, hydrated
    await assertPageHealthy(page, getErrors);

    // Verify the page loads with the contact header
    await expect(page.getByText('Get in touch')).toBeVisible();
    await expect(page.getByText('We Want to Hear From You', { exact: false })).toBeVisible();
  });

  test('should display interactive contact form', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    await assertPageHealthy(page, getErrors);

    // Verify form fields exist
    const nameField = page.getByPlaceholder('Name (required)');
    const emailField = page.getByPlaceholder('Your Email (required)');
    const messageField = page.getByPlaceholder('Message');

    await expect(nameField).toBeVisible();
    await expect(emailField).toBeVisible();
    await expect(messageField).toBeVisible();

    // INTERACTIVITY TEST: Verify form fields are actually interactive
    await nameField.fill('Test User');
    await emailField.fill('test@example.com');
    await messageField.fill('This is a test message');

    // Verify the values were entered (proves JS is working)
    await expect(nameField).toHaveValue('Test User');
    await expect(emailField).toHaveValue('test@example.com');
    await expect(messageField).toHaveValue('This is a test message');

    // Verify the submit button exists
    await expect(page.getByRole('button', { name: 'Send message' })).toBeVisible();
  });

  test('should have working About Us link', async ({ page }) => {
    const { getErrors } = setupConsoleErrorCollector(page);

    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    await assertPageHealthy(page, getErrors);

    // Verify the About Us button exists
    const aboutButton = page.getByRole('link', { name: 'About Us' });
    await expect(aboutButton).toBeVisible();

    // INTERACTIVITY TEST: Click and verify navigation
    await aboutButton.click();
    await expect(page).toHaveURL('/about');

    // Verify destination page is healthy
    await assertPageHealthy(page, getErrors);
  });
});
