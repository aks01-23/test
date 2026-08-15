import {test as base} from '@playwright/test';
export const test = base.extend({
  loginFixture: async ({page}, use)=>{
    const loginFixture = undefined;
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    await use(loginFixture);
  },

  logoutFixture: async ({loginFixture,page},use)=>{
    const logoutFixture = undefined;
    // await use();
    await page.getByRole('button',{name:'Open Menu'}).click();
    await page.getByRole('link',{name:'Logout'}).click();
    // await page.locator('a[id="logout_sidebar_link"]').click();
    await page.pause();
  }
})