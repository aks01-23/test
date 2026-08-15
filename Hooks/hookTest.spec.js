import { test } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });
test.describe(async () => {
  test.beforeAll(async () => {
    console.log('Hello');
  })


  test.afterAll(async () => {
    console.log('Bye');
  })

  test('1', async () => {
    console.log('test 1');
  })

  test('2', async () => {
    console.log('test 2');
  })
})

test('3', async () => {
  console.log('test 3');
})