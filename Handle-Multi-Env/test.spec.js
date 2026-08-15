import {test} from '@playwright/test';
test('Env test', async ({page})=>{
  console.log(process.env.URL);
  console.log(process.env.USERNAME);
  console.log(process.env.PASSWORD);
  await page.goto(process.env.URL);
})