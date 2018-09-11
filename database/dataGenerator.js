var faker = require('faker');
var restaurants = require('./restaurants.json');
var fs = require('fs');

let counter = 0;

const randomNumber = (max, min = 0) => {
  return Math.ceil(Math.random() * max) + min;
};

const createMenuEntry = (num) => {
  let entries = [];
  for (let i = 0; i < num; i++) {
    entries.push([faker.commerce.productName(), `$${randomNumber(50)}`]);
  }

  return entries;
}

class Menu {
  constructor() {
    this.title = faker.company.bsBuzz();
    this.menu = createMenuEntry(20,10);
  }
}

const generateMenu = (num) => {
  let menus = [];
  for (let i = 0; i < num; i++) {
    menus.push(new Menu());
  }

  return menus;
};

const overview = restaurants.restaurants.map(function (restaurant) {

  let obj = {
    _id: restaurant._id,
    name: restaurant.name,
    header: {
      reviewAvg: randomNumber(5),
      reviews: randomNumber(1000),
      price: `$${randomNumber(10)} - $${randomNumber(50,10)}`,
      cuisines: faker.commerce.productAdjective(),
    },
    privateDining: 'view details',
    diningStyle: faker.company.catchPhraseAdjective(),
    cuisines: faker.commerce.productAdjective(),
    hoursOfOperation: `${faker.date.weekday()}s - ${faker.date.weekday()}s 9:00am - 8:00pm`,
    phoneNumber: faker.phone.phoneNumberFormat(),
    website: faker.internet.url(),
    paymentOptions: faker.lorem.words(),
    dressCode: faker.company.bsAdjective(),
    executiveChef: faker.name.findName(),
    catering: faker.lorem.sentence(),
    openGoogleMaps: `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`,
    Neighborhood: faker.address.country(),
    crossStreet: faker.address.streetName() + ' + ' + faker.address.streetName(),
    parkingDetails: faker.lorem.sentence(),
    publicTransit: faker.lorem.sentence(),
    specialEvents: faker.lorem.sentences(),
    giftCards: faker.random.boolean(),
    entertainment: faker.lorem.sentences(),
    additional: faker.lorem.sentence(),
    menus: generateMenu(randomNumber(5))
  };



  if (counter % 3 === 0) {
    obj.giftCards = null;
  } else if (counter % 3 === 1) {
    obj.entertainment = null;
  } else {
    obj.specialEvents = null;
  }

  counter += 1;
  return obj;
});

fs.writeFile('seededData.json', JSON.stringify(overview), 'utf8', function (err) {
  if (err) throw err;
  console.log('success!')
});
