import {test, expect} from '@playwright/test';
test('Assertion timeout', async({page})=>{
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle('Googa');
})