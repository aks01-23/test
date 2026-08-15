import {test} from '@playwright/test';
test('New tab test', async ({context})=>{
  const page = await context.newPage();
  await page.goto('https://testpages.eviltester.com/pages/navigation/windows-names/');
  const pagePromise = context.waitForEvent('page');
  await page.getByRole('link',{name:'Window with name in new tab'}).click();
  const newPage  = await pagePromise;
  await newPage.getByRole('button',{name:'Click to reveal current window name'}).click();
  await newPage.pause();
})


test('New Page', async ({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://testpages.eviltester.com/pages/navigation/windows-names/');
  const pagePromise = context.waitForEvent('page');
  await page.getByRole('link',{name:'Window with name in new tab'}).click();
  const newPage  = await pagePromise;
  await newPage.getByRole('button',{name:'Click to reveal current window name'}).click();
  await newPage.pause();
})


test.only('New Window', async ({context})=>{
  const page = await context.newPage();
  await page.goto('https://testpages.eviltester.com/pages/navigation/windows-names/');
  const promise = context.waitForEvent('page');
  await page.getByRole('link',{name:'Page with no name in new tab'}).click();
  const newPage = await promise;
  await newPage.getByRole('button',{name:'Click to reveal current window name'}).click();
  await newPage.pause();
})