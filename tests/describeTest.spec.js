import {test} from '@playwright/test';

/*test.describe('Exclude safari', ()=>{
  test.skip(({browserName})=>browserName==='webkit');
  test('test 1', async()=>{
    console.log('Test 1');
  })

  test('test 2', async()=>{
    console.log('Test 2');
  })

  test('test 3', async()=>{
    console.log('Test 3');
  })
})*/

// test.skip(({browserName})=> browserName=== 'chromium');
test('test 4', async()=>{
    console.log('Test 4');
  })

test('test 5', async({browserName})=>{
  // test.skip(browserName === 'firefox');
    console.log('Test 5');
  })

test('test 6', async()=>{
  test.skip();
    console.log('Test 6');
  })