import {test, expect} from '@playwright/test';
test('RS E2E', async ({page})=>{
  await page.goto('https://www.rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('john.doe@yardi.com');
  await page.getByPlaceholder('enter your passsword').fill('JohnnyJohnny123#');
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page.locator('.card-body').first()).toBeVisible();
  await page.locator('.card-body').filter({hasText:'ZARA COAT 3'}).getByRole('button',{name:'Add To Cart'}).click();
  await expect(page.getByRole('alert',{name:'Product Added To Cart'})).toBeVisible();
  await page.locator('button[routerlink="/dashboard/cart"]').click();
  await expect(page.locator('.cartSection h3')).toHaveText('ZARA COAT 3');
  await page.getByRole('button',{name:'Buy Now'}).click();
  await page.locator('.payment__cc').waitFor();
  await page.locator('.field').filter({hasText:'CVV Code', exact:'true'}).locator('input').fill('123');
  await page.locator('.field').filter({hasText:'Name On Card'}).locator('input').fill('John Doe');
  await page.locator('.field').filter({hasText:'Apply Coupon'}).locator('input').fill('rahulshettyacademy');
  await page.getByRole('button',{name:'Apply Coupon'}).click();
  await expect(page.locator('p.ng-star-inserted')).toHaveText('* Coupon Applied');
  await expect(page.locator('.user__name input.ng-untouched')).toHaveValue('john.doe@yardi.com');
  await page.getByPlaceholder('Select Country').waitFor();
  await page.getByPlaceholder('Select Country').pressSequentially('Ind');
  await expect(page.locator('.ta-results')).toBeAttached();
  const countryList = page.locator('button.list-group-item');
  const count = await countryList.count();
  for(let i=0;i<count;i++){
    let country = await countryList.nth(i).textContent();
    if(country?.trim()==='India'){
      await countryList.nth(i).click();
      break;
    }
  }
  // await page.getByRole('link',{name:'Place Order'}).click();
  await page.locator('a.action__submit').click();
  await expect(page.getByRole('heading',{name:' Thankyou for the order.'})).toBeVisible();
  await page.locator('button[routerlink="/dashboard/myorders"]').click();
  // await page.locator('tbody tr th').filter({hasText:'ZARA COAT 3'}).locator('th[scope="row"]')
  const id = await page.locator('tbody tr th').first().textContent();
  console.log(id);
  // await page.pause();
})