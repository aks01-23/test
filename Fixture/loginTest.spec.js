import { test } from './loginFixture.js';
import {expect} from '@playwright/test';
test('Login test', async ({ login, page }) => {
  
})

test('Event creation test', async ({ eventCreator, page }) => {
  await expect(page.locator('.mb-8 h1')).toContainText('Upcoming Events');
  await page.pause();
})