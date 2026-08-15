import { test } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// const fileContent = fs.readFileSync('test-data/details.csv');
// const records = parse(fileContent, { columns: true });


const records = parse(fs.readFileSync('test-data/details.csv'),{columns:true})
// for (const record of records) {
//   test(`CSV Data Read ${record.Id}`, async ({ page }) => {
//     await page.goto('https://demoqa.com/automation-practice-form');
//     await page.getByRole('textbox',{name:'First Name'}).fill(record.FirstName);
//     await page.getByRole('textbox',{name:'Last Name'}).fill(record.LastName);
//     await page.pause();
//   })
// }

console.log(records);
