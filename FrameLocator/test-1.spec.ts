import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/html_iframe.asp');
  await page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('link', { name: 'JAVASCRIPT', exact: true }).click();
});