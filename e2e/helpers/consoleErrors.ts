import { Page, ConsoleMessage } from '@playwright/test';

// Errors to ignore in tests (expected in non-production environments)
const IGNORED_ERRORS = [
  'gtag', // Google Analytics not loaded in tests
  'analytics',
  'fbq', // Facebook Pixel
  'hotjar',
];

/**
 * Collects console errors during page interactions.
 * Use this to detect client-side JavaScript exceptions that would otherwise
 * go unnoticed in e2e tests.
 */
export function setupConsoleErrorCollector(page: Page): { getErrors: () => string[] } {
  const errors: string[] = [];

  page.on('console', (msg: ConsoleMessage) => {
    if (msg.type() === 'error') {
      const text = msg.text();
      const isIgnored = IGNORED_ERRORS.some((ignored) =>
        text.toLowerCase().includes(ignored.toLowerCase())
      );
      if (!isIgnored) {
        errors.push(text);
      }
    }
  });

  page.on('pageerror', (error: Error) => {
    const message = error.message;
    const isIgnored = IGNORED_ERRORS.some((ignored) =>
      message.toLowerCase().includes(ignored.toLowerCase())
    );
    if (!isIgnored) {
      errors.push(`Page Error: ${message}`);
    }
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
  const errorText = page.getByText('Application error: a client-side exception has occurred');
  return await errorText.isVisible().catch(() => false);
}

/**
 * Verifies that React hydration completed successfully.
 * This catches "black screen" issues where SSR content exists but JS is dead.
 */
export async function verifyHydration(page: Page): Promise<void> {
  await page.waitForFunction(
    () => {
      // Check that Next.js data is present
      if (typeof (window as any).__NEXT_DATA__ === 'undefined') {
        return false;
      }
      // Check that React root exists and has content
      const root = document.getElementById('__next');
      if (!root) return false;

      // Check for React 18+ hydration markers
      const hasReactRoot =
        (root as any)._reactRootContainer !== undefined ||
        Object.keys(root).some((key) => key.startsWith('__reactContainer'));

      return hasReactRoot;
    },
    { timeout: 10000 }
  );
}

/**
 * Waits for the page to have visible content.
 * Use this instead of just waitForLoadState to ensure content is rendered.
 */
export async function waitForContent(page: Page): Promise<void> {
  // Wait for the Next.js root to have some content
  await page.waitForFunction(
    () => {
      const root = document.getElementById('__next');
      if (!root) return false;

      // Check for any meaningful content
      const hasHeader = !!document.querySelector('header');
      const hasContent = !!document.querySelector('h1, h2, main, article, section');
      const hasText = root.innerText.trim().length > 50;

      return hasHeader || hasContent || hasText;
    },
    { timeout: 10000 }
  );
}

/**
 * Comprehensive page health check that should be run on every page.
 * Combines all checks: no errors, no overlay, hydrated, has content.
 */
export async function assertPageHealthy(
  page: Page,
  getErrors: () => string[]
): Promise<void> {
  const { expect } = await import('@playwright/test');

  // Wait for content to be visible (times out if page is blank)
  await waitForContent(page);

  // Check for Next.js error overlay
  const hasOverlay = await hasNextJsErrorOverlay(page);
  expect(hasOverlay, 'Next.js error overlay is visible').toBe(false);

  // Verify hydration completed
  await verifyHydration(page);

  // Check for console errors
  const errors = getErrors();
  expect(errors, `Console errors detected: ${errors.join(', ')}`).toHaveLength(0);
}
