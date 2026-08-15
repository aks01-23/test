import {test, expect} from '@playwright/test';


test.only('test3', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByText('Playwright enables reliable web automation for testing, scripting, and AI agents.')).toBeVisible();
  await page.getByRole('link',{name:'start'}).click();
  await page.getByRole('link',{name:'How to install Playwright'}).click();
  await page.pause();
});