import {test as base } from '@playwright/test';
import {expect} from '@playwright/test';
export const test = base.extend({
  // const login;/
  login: async ({page}, use)=>{
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByRole('textbox', {name:'Email'}).fill('ak@jenkins.com');
    await page.getByLabel('Password').fill('SimplePassword123#');
    await Promise.all([
    await page.getByRole('button',{name:'Sign In'}).click()]);
    // console.log('LOGIN DONE:', page.url());
    console.log('URL after click:', page.url());
    await expect(page.locator('.bg-gradient-to-br div h1')).toContainText('Discover & BookAmazing Events');
    console.log('URL after 2 sec:', page.url());
    await use();
  },

  eventCreator: async({login, page}, use)=>{
    console.log('EVENT CREATOR STARTED:', page.url());
    await page.goto('https://eventhub.rahulshettyacademy.com/events');
    await page.getByRole('link',{name:'Add New Event'}).click();
    await page.locator('#event-title-input').fill('Mango fest');
    await page.locator('#category').selectOption({label:'Festival'});
    await page.locator('#city').fill('Ratnagiri');
    await page.locator('#venue').fill('Ratnagiri');
    // await page.locator('#event-date-&-time').fill('09-08-2026');
    // await page.locator('[id="event-date-&-time"]').fill('08/08/2026');
    // await page.getByLabel('Event Date & Time').waitForLoadState();
    await page.getByLabel('Event Date & Time').fill('2026-08-09T10:00');
    await use();
  }
})