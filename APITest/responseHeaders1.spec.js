import {test, expect, request} from '@playwright/test';
test('Response headers test', async ()=>{
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://restful-booker.herokuapp.com/booking/3172', {
    headers: {
      Accept:'application/json'
    }
  });
  const headersData = response.headersArray();
  // console.log(headersData);
  //const parsedHeadersData = JSON.parse(headersData['x-powered-by']);
  
  // console.log(parsedHeadersData);
  // expect(headersData['x-powered-by']).toEqual('Express');
  for(const header of headersData){
    if(header.name === 'Server'){
      expect(header.value).toEqual('Heroku');
    }
  }
})