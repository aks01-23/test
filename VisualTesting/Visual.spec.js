import {test, expect} from '@playwright/test';
test('Visual Test!', async({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.unix.org/');
  // await expect(page).toHaveScreenshot();
  // await expect(page).toHaveScreenshot('image.png');
  // await expect(page).toHaveScreenshot(["Child1/Child2","test1.png"]);
  // await expect(page).toHaveScreenshot(["A","B","C","test.png"]);
  // await expect(page).toHaveScreenshot("Linux.png");
  // await expect(page).toHaveScreenshot('unix.png',{'maxDiffPixels':723});
  await expect(page).toHaveScreenshot('uni-chromium-win32.png',{fullPage:true});
})