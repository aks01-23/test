import {test} from '@playwright/test';
test.beforeEach('Hello', async()=>{
  console.log(`Hello World`);

})

test('Where is my candy?', async()=>{
  console.log('Where is my candy?');
})

test('Where is my cookie?', async()=>{
  console.log('Where is my cookie?');
})