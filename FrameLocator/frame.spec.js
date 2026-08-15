import { test, expect } from '@playwright/test';

test('Frame test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/frames');
  const innerFrame = page.frame('frame-inner');
  await innerFrame.getByRole('button', { name: 'Edit' }).click();
  await expect(innerFrame.locator('#result')).toContainText('Button pressed: Edit');
  // await page.pause();
});

test.only('Another test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/html_iframe.asp');
  const data = page.frameLocator('iframe[title="W3Schools HTML Tutorial"]');
  // await data.locator('#menubtn_container').getByRole('link',{name:'JAVASCRIPT',exact:true}).click();
  // await expect(data.locator('#leftmenuinnerinner h2')).toContainText('JS Tutorial',{exact:true});
  const data1 = await data.getByRole('link', { name: 'JAVASCRIPT', exact: true }).click();
  // const cont = await data.getByRole('heading',{name:'JS Tutorial', exact:true}).textContent();
  // await expect(cont).toEqual('JS Tutorial');
  // expect(await data.locator('#leftmenuinnerinner')).toContainText('JS Tutorial', { exact: true });
  await expect(
    data.getByRole('heading', { name: 'JS Tutorial' })
  ).toBeVisible();

})
