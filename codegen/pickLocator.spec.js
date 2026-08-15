import {test, expect} from '@playwright/test';
test('Pick locator test', async ({page})=>{
  await page.goto('https://duckduckgo.com/');
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).click();
  await page.getByText('Ask AI').click();
  await page.pause();
})