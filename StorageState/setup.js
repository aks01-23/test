import {test as setup, expect} from '@playwright/test';
setup('context setup', async({page})=>{
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('john.doe@yardi.com');
  await page.getByPlaceholder('enter your passsword').fill('JohnnyJohnny123#');
  await page.getByRole('button',{name:'Login'}).click();
  // await expect(page.locator('.card-body').first()).toBeVisible();
  await page.waitForURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
  // await page.waitForLoadState('networkidle');
  await page.context().storageState({path:'/StorageState/login.json'});
})