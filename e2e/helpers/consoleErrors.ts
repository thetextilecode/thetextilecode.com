import { Page, ConsoleMessage } from '@playwright/test';

/**
 * Collects console errors during page interactions.
 * Use this to detect client-side JavaScript exceptions that would otherwise
 * go unnoticed in e2e tests.
 */
export function setupConsoleErrorCollector(page: Page): { getErrors: () => string[] } {
  const errors: string[] = [];

  page.on('console', (msg: ConsoleMessage) => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  page.on('pageerror', (error: Error) => {
    errors.push(`Page Error: ${error.message}`);
  });

  return {
    getErrors: () => errors,
  };
}

/**
 * Checks if the Next.js error overlay is visible on the page.
 * This catches runtime errors that display the "Application error" message.
 */
export async function hasNextJsErrorOverlay(page: Page): Promise<boolean> {
  // Check for the Next.js error message text
  const errorText = page.getByText('Application error: a client-side exception has occurred');
  return await errorText.isVisible().catch(() => false);
}
