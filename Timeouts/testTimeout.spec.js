import {test} from '@playwright/test';
// test.describe.configure({timeout: 10_000});
test('Test timeout', async({page})=>{
  test.setTimeout(6000);
  await page.goto('https://www.google.com');
  await page.getByRole('textarea',{name:'Soarch'}).click();
})