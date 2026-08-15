import {test} from '@playwright/test';
test.describe('Describe block 1',{tag:'@describe'}, async()=>{
  test('Test 1 @UI', async({})=>{
    console.log('Test 1');
  });
  test('Test 2 @API', async({})=>{
    console.log('Test 2');
  });
  test('Test 3 @UI', async({})=>{
    console.log('Test 3');
  });
})

test('Test 4',{tag:'@Ak'},async({})=>{
    console.log('Test 4');
});

test('Test 5',{tag:'@Akb'}, async({})=>{
    console.log('Test 5');
});

test('Test 6',{tag:['@new','@tag']}, async({})=>{
    console.log('Test 6');
});