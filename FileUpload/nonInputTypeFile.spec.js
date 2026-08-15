import {test, expect} from '@playwright/test';
test('Non input type file upload', async ({page})=>{
  await page.goto('https://the-internet.herokuapp.com/upload');
  const fileUploadPromise = page.waitForEvent('filechooser');
  await page.locator('#drag-drop-upload').click();
  const fileUploadPromiseResolved = await fileUploadPromise;
  await fileUploadPromiseResolved.setFiles(['Files/Console.js']);
  await fileUploadPromiseResolved.setFiles([]);
  // await expect(page.locator('.dz-success .dz-details .dz-filename')).toHaveText('Console.js');
  await page.pause();
})