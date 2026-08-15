import {test, expect} from '@playwright/test';
test('Assertion timeouts', async ({page})=>{
  test.defau
  await page.goto('https://www.rahulshettyacademy.com/angularpractice');
  await page.locator('input[fdprocessedid="oot83j"]').fill('Rahul');
  await page.locator('input[fdprocessedid="t3sz9v"]').fill('john.doe@yardi.com');
  await page.getByLabel('exampleInputPassword1').fill('JohnnyJohnny123#');

})