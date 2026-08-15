import { test } from '@playwright/test';
test.afterAll(async({browser})=>{
  const page = await browser.newPage();
  test.setTimeout(1);
  console.log('AfterAllHook started');
  await page.goto('https://www.google.com');
  console.log('afterAll finished');
})


test('AfterAll hook timeout', async ({ browser }) => {
  console.log('Test executed');
})