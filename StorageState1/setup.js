import {expect, test as setup} from '@playwright/test';
setup('Test',async({context})=>{
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('john.doe@yardi.com');
  await page.getByPlaceholder('enter your passsword').fill('JohnnyJohnny123#');
  await page.getByRole('button',{name:'Login'}).click();
  await page.waitForURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
  // await expect(page.locator('.card-body').first()).toBeVisible();
  await context.storageState({path:'./StorageState1/sign.json'});
})