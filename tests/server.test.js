const axios = require('axios');

describe('API Endpoint Testing', () => {
  // Write tests for .../ratings enpoint
  describe('Test /restaurants/:restaurantId/overview endpoint', () => {
    test('should retrieve header info', async () => {
      try {
        const { data } = await axios.get('http://localhost:8008/restaurants/30590734/overview');
        expect(data[0]).toHaveProperty('header');
        expect(typeof data[0].header === 'object').toBeTruthy();
        expect(data[0].header).toHaveProperty('reviews');
      } catch (e) {
        throw e;
      }
    });
    test('should retrieve overview data', async () => {
      try {
        const { data } = await axios.get('http://localhost:8008/restaurants/30590734/overview');
        expect(data[0]).toHaveProperty('description');
        expect(typeof data[0].description === 'string').toBeTruthy();
      } catch (e) {
        throw e;
      }
    });
    test('should retreive menu data', async () => {
      try {
        const { data } = await axios.get('http://localhost:8008/restaurants/30590734/overview');
        expect(data[0]).toHaveProperty('menus');
        expect(typeof data[0].menus === 'object').toBeTruthy();
        expect(data[0].menus[0]).toHaveProperty('title');
      } catch (e) {
        throw e;
      }
    });
  });
});
