const axios = require('axios');

describe('API Endpoint Testing', () => {
  describe('Test /restaurants/:restaurantId/overview endpoint', () => {
    test('should retrieve header info', async () => {
      const { data } = await axios.get('http://localhost:8008/restaurants/30590734/overview');
      expect(data[0]).toHaveProperty('header');
      expect(typeof data[0].header === 'object').toBeTruthy();
      expect(data[0].header).toHaveProperty('reviews');
    });
    test('should retrieve overview data', async () => {
      const { data } = await axios.get('http://localhost:8008/restaurants/30590734/overview');
      expect(data[0]).toHaveProperty('description');
      expect(typeof data[0].description === 'string').toBeTruthy();
    });
    test('should retreive menu data', async () => {
      const { data } = await axios.get('http://localhost:8008/restaurants/30590734/overview');
      expect(data[0]).toHaveProperty('menus');
      expect(typeof data[0].menus === 'object').toBeTruthy();
      expect(data[0].menus[0]).toHaveProperty('title');
    });
  });
});
