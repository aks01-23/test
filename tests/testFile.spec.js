import {test} from '@playwright/test';
test('Annotation test', {annotation:{type:'Jira',description:'PRG-479'}}, async ({page})=>{
  await page.goto('https://google.com');
});