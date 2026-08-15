import {test, expect, request} from '@playwright/test';
const testData = {userEmail:"john.doe@yardi.com",userPassword:"JohnnyJohnny123#"}
test('Get Auth Token', async()=>{
  const apiContext = await request.newContext();
  const response = await apiContext.post(`https://rahulshettyacademy.com/api/ecom/auth/login`,{
    data: testData
  });
  const responseJSON = await response.json();
  console.log(responseJSON);
})