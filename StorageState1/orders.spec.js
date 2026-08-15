import {test} from'@playwright/test';
test('Order test', async({page})=>{
  await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
  await page.getByRole('button',{name:'ORDERS'}).click();
  await page.pause();
})