import {test, expect} from '@playwright/test';
test('Text test', async ({page})=>{
  await page.goto('https://playwright.dev');
  expect(await page.locator('.heroTitle_ohkl').textContent()).toMatchSnapshot();
})