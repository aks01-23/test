import {test} from'@playwright/test';
// test.slow('All tests slow');

test('login', async({page})=>{
  test.slow();
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('john.doe@yardi.com');
  await page.getByPlaceholder('enter your password').fill('JohnnyJohnny123#');
  await page.getByRole('button',{name:'Login'}).click();
  await page.pause();
})