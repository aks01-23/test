// import { test, request } from '@playwright/test';
// let token;
// test('API test', async () => {
//   const apiContext = await request.newContext();
//   const response = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
//     data: {
//       userEmail: "john.doe@yardi.com", userPassword: "JohnnyJohnny123#"
//     },
//     headers: {
//       ['content-type']: "application/json"
//     }
//   });
//   const responseJSON = await response.json();
//   token= responseJSON.token;
//   // console.log(responseJSON.token);
// })

import { test } from '@playwright/test';
let token;
test('API test API', async ({request}, testInfo) => {
  console.log(testInfo.title);
  const response = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
    data: {
      userEmail: "john.doe@yardi.com", userPassword: "JohnnyJohnny123#"
    },
    headers: {
      ['content-type']: "application/json"
    }
  });
  const responseJSON = await response.json();
  token= responseJSON.token;
  // console.log(responseJSON.token);
})