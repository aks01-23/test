import {test} from '@playwright/test';
test('Date picker 1', async({page})=>{
  const targetMonth = 'December';
  const targetYear = 2026;
  const targetDay = '25';
  await page.goto('https://jqueryui.com/datepicker/');
  const iframe = page.frame({url:'https://jqueryui.com/resources/demos/datepicker/default.html'});
  await iframe.locator('#datepicker').click();
  // await iframe.getByTitle('Next').click();
  // await iframe.locator('[data-date="25"]').click();
  // const currentMonth = await iframe.locator('.ui-datepicker-month').textContent();
  // const currentYear = await iframe.locator('.ui-datepicker-year').textContent();
  // console.log(currentMonth);
  // console.log(currentYear);
  while (true) {
    const currentMonth = await iframe.locator('.ui-datepicker-month').textContent();
    const currentYear = await iframe.locator('.ui-datepicker-year').textContent();

    if (
        currentMonth.trim() === targetMonth &&
        Number(currentYear.trim()) === targetYear
    ) {
        break;
    }

    await iframe.getByTitle('Next').click();
  }

  await iframe.locator(`[data-date="${targetDay}"]`).click();
  await page.pause();
})