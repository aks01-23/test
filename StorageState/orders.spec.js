import {test, expect} from '@playwright/test';
test('Orders test', async ({page})=>{
  await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
  await page.getByRole('button',{name:'ORDERS'}).click();
  await page.pause();
})