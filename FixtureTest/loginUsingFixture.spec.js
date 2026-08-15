import {test} from '../Fixtures/loginFix';

test('Login test', async({page,loginFixture, logoutFixture})=>{
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  // console.log('logout fixture');
  
  // await page.pause();
})