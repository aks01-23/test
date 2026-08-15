import {test} from '@playwright/test';
// const body = { "userEmail":"john.doe@yardi.com","userPassword":"JohnnyJohnny123#"};
/*test('API', async({request})=>{
  const response = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',{data:body});
  const responseJSON = await response.json();
  console.log(responseJSON);
  response.he
})*/


test('UI', async({browser})=>{
  test.slow();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('john.doe@yardi.com');
  await page.getByPlaceholder('enter your password').fill('JohnnyJohnny123#');
  await page.getByRole('button',{name:'Login'}).click();
  await page.pause();
})