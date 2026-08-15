import { test } from '@playwright/test';

/*test('test 1', async () => {
  console.log('Test 2');
})

test('test 2', async ({browserName}) => {
  test.fixme(browserName === 'webkit', 'This feature breaks in Safari for some reason');
  console.log('Test 2');
})*/

/*test.describe('Cart tests', ()=>{
  test.fixme(({browserName})=>browserName==='firefox', 'This feature breaks in firefox');
  test('test 1', async()=>{
    console.log('Test 1');
  });
  test('test 2', async()=>{
    console.log('Test 2');
  })
  test('test 3', async()=>{
    console.log('Test 1');
  })
})*/


/*test.fixme('BUG:123: Login fails with special characters');
test('Login fails with special characters', async()=>{
  console.log('Failed test');
})
test('test 1', async()=>{
    console.log('Test 1');
  })
test('test 2', async()=>{
    console.log('Test 1');
  })*/


test.fixme('BUG-234', async()=>{
  console.log('Faling due to known bug');
});

test('test 1', async()=>{
    console.log('Test 1');
});