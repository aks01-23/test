import {test} from '@playwright/test';

// test.describe.configure({mode:'parallel'});

test('First test', async({page})=>{
  await page.goto('https://www.google.com');
  console.log('First Test');
  //await page.pause();
})

test('Second test', async({page})=>{
  await page.goto('https://www.bing.com');
  console.log('Second Test');
  //await page.pause();
})

test.slow('Third test', async({page})=>{
  await page.goto('https://www.yahoo.com');
  console.log('Third Test');
  //await page.pause();
})

test('Fourth test', async({page})=>{
  await page.goto('https://www.duckduckgo.com');
  console.log('Fourth Test');
  //await page.pause();
})

test('Fifth test', async({page})=>{
  await page.goto('https://www.opera.com');
  console.log('Fifth Test');
  //await page.pause();
})