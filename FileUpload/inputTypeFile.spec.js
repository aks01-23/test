import {test, expect} from '@playwright/test';
test('File upload', async({page})=>{
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
  await page.locator('#filesToUpload').setInputFiles(['Files/Console.js','Files/Log.c']);
  await page.locator('#filesToUpload').setInputFiles([]);
  // await expect(page.locator('#fileList')).toHaveText('Console.jsLog.c');
  await page.pause();
})

test.only('File upload practice', async ({page})=>{
  await page.goto('https://trytestingthis.netlify.app/');
  await page.locator('#myfile').setInputFiles(['Files/Log.c']);
  await page.locator('#myfile').setInputFiles('');
  await expect(page.locator('#myfile')).toHaveValue('');
  await page.pause();
})