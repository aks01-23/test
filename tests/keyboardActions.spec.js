
import { test } from '@playwright/test';
test('Press test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://testpages.eviltester.com/pages/forms/html-form/');
  await page.locator('textarea[name="comments"]').press('Control+a');
  await page.locator('textarea[name="comments"]').press('A+b+c');
  await page.locator('textarea[name="comments"]').press('Control+a+x');
  await page.locator('input[name="username"]').press('Control+v');
  await page.locator('input[name="username"]').press('ArrowLeft+ArrowLeft+ArrowLeft');
  await page.locator('input[name="username"]').press('a+k');
  await page.keyboard.press('PageDown');
  await page.keyboard.press('PageUp');
  // await page.pause();
})
