import { test } from '@playwright/test';

test.beforeAll(async ({ browser }) => {
  const page = await browser.newPage();
  test.setTimeout(1); // 1 millisecond

  console.log('beforeAll started');

  await page.goto('https://www.google.com');

  console.log('beforeAll finished');
});

test('My test', async () => {
  console.log('Test executed');
});