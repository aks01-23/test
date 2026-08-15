import {test} from '@playwright/test';
test('Date Pickr 2', async({page})=>{
  const targetMonth = 'April';
  const targetYear = 1994;
  const targetDay = 1;
  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
  };     
  await page.goto('https://jqueryui.com/datepicker/');
  const iframe = page.frame({url:'https://jqueryui.com/resources/demos/datepicker/default.html'});
  await iframe.locator('#datepicker').click();
   for(let i=0; i<480; i++){
    const currentMonth = (await iframe.locator('.ui-datepicker-month').textContent()).trim();
    const currentYear = Number(await iframe.locator('.ui-datepicker-year').textContent());
    const totalCurrentDuration = currentYear*12 + months[currentMonth];
    const totalTargetDuration = targetYear*12 + months[targetMonth];
    if(totalCurrentDuration < totalTargetDuration){
      await iframe.getByTitle('Next').click()
    }else if(totalCurrentDuration > totalTargetDuration){
      await iframe.getByTitle('Prev').click()
    }else {
      break;
    }
  }
   await iframe.locator(`[data-date="${targetDay}"]`).click();
   await page.pause();
})