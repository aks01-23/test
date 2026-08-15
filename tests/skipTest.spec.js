import {test} from '@playwright/test';

test.skip('Skip tests');

test('test 2', async()=>{
    console.log('Test 1');
  })

  test('test 1', async()=>{
    console.log('Test 1');
  })