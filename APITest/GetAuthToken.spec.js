import { test, expect, request } from '@playwright/test';
import createBookingData from '../test-data/createBooking.json';
import updateBookingData from '../test-data/updateBooking.json';
import partialDataUpdate from '../test-data/partialUpdate.json';
let token;
let bookingid;
let apiContext;
test.beforeAll('Get Auth token', async () => {
  apiContext = await request.newContext({
    baseURL: 'https://restful-booker.herokuapp.com'
  })

  const response = await apiContext.post('/auth', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      username: "admin",
      password: "password123"
    }
  });
  const responseJSON = await response.json();
  token = responseJSON.token;
  //console.log(responseJSON);
  // console.log(token);
});

test('Restful booker', async () => {
  const createBookingResponse = await apiContext.post('/booking', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: createBookingData

  });
  const createBookingResponseJSON = await createBookingResponse.json();
  bookingid = createBookingResponseJSON.bookingid;
  // console.log(bookingid);

  const getBookingByIdResponse = await apiContext.get(`/booking/${bookingid}`)
  const getBookingByIdResponseJSON = await getBookingByIdResponse.json();
  // console.log('Get booking by id', getBookingByIdResponseJSON);

  const updateBookingResponse = await apiContext.put(`/booking/${bookingid}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: `token=${token}`
    },
    data: updateBookingData
  });

  const updateBookingResponseJSON = await updateBookingResponse.json();
  console.log('Update booking:', updateBookingResponseJSON);

  const updatePartialBookingResponse = await apiContext.patch(`/booking/${bookingid}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Cookie: `token=${token}`
    },
    data: partialDataUpdate

  });

  const updatePartialBookingResponseJSON = await updatePartialBookingResponse.json();
  console.log('Partial Update booking:', updatePartialBookingResponseJSON);

  const deleteBookingResponse = await apiContext.delete(`booking/${bookingid}`, {
    headers: {
      'Content-Type': 'application / json',
      Cookie: `token=${token}`
    }
  });

  const getSingleBookingIdResponse = await apiContext.get(`booking/${bookingid}`);
  expect(getSingleBookingIdResponse.status()).toBe(404);
  
});
