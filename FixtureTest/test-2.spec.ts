import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('john.doe@yardi.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('J');
  await page.getByRole('textbox', { name: 'enter your passsword' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Johnny');
  await page.getByRole('textbox', { name: 'enter your passsword' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('JohnnyJ');
  await page.getByRole('textbox', { name: 'enter your passsword' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('JohnnyJohnny123#');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await expect(page.locator('app-profile')).toContainText('ZARA COAT 3');
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('123');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.getByRole('textbox').nth(2).fill('J');
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.getByRole('textbox').nth(2).fill('John');
  await page.locator('input[name="coupon"]').click();
  await page.locator('input[name="coupon"]').fill('rahulshettyacademy');
  await page.getByRole('button', { name: 'Apply Coupon' }).click();
  await expect(page.locator('form')).toContainText('* Coupon Applied');
  await page.getByRole('textbox', { name: 'Select Country' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).fill('ind');
  await page.getByRole('button', { name: ' India' }).click();
  await page.getByText('Place Order').click();
  await expect(page.locator('#htmlData')).toContainText('ZARA COAT 3');
  await page.getByRole('button', { name: '   ORDERS' }).click();
  await page.getByRole('button', { name: 'View' }).first().click();
  await expect(page.locator('app-order-details')).toContainText('Thank you for Shopping With Us');
});



test.only('test3', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByRole('link', { name: 'Samsung Samsung' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.a-link-normal').first().click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Samsung-Galaxy-S25-5G-Snapdragon/dp/B0H3FCSY5T/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SLF-ktWSpWHPsJiqoJHa7V3jIRpxN57tnslx5ewTnW9Vo3twHrzLCJPjGmjwKGAg2jDdwc589AKXfTXRsvztRm9WaO_qNz6ziYKKmfcy6GoS6s681Eju4r04o2m_WZ603DNR9jJyHqOP6CX9FetV-YcNxyEUqgQQp0lxGB2EHqNV8m6AiYkFttA_d9uzw7QgAcn6bMj77zECZOdHjkiqqcMdIfQoaRlOF-iYf2FmpNr8a89Z2rCw0H1Q8SU-3yBl3hnUw6sZInk85lNrxrnJ0cOFPuP_VcW2OUO6oYxtdCE.clVFTV1w8T2rE3qda1l0ZyBDILHNEBEbqwMN42ZlKOU&dib_tag=se&qid=1782025323&refinements=p_123%3A46655&rnid=91049095031&s=electronics&sr=1-1&th=1');
});