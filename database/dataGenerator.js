var faker = require('faker');
var restaurants = require('./restaurants.json');
var fs = require('fs');



let counter = 0;

class Menu {
  constructor() {
    this.title = faker.company.bsBuzz();
    this.menu = faker.lorem.paragraph();
  }
}

const generateMenu = (num) => {
  let menus = [];
  for (let i = 0; i < num; i++) {
    menus.push(new Menu());
  }

  return menus;
};

let randomNumber = (max) => {
  return Math.ceil(Math.random() * max);
};

let overview = restaurants.restaurants.map(function (restaurant) {

  let obj = {
    _id: restaurant._id,
    name: restaurant.name,
    privateDining: 'view details',
    diningStyle: faker.company.catchPhraseAdjective(),
    cuisines: faker.commerce.productAdjective(),
    hoursOfOperation: `${faker.date.weekday()}s - ${faker.date.weekday()}s 9:00am - 8:00pm`,
    phoneNumber: faker.phone.phoneNumber(),
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

fs.writeFile('seededData.json', JSON.stringify(overview), 'utf8', function(err) {
  if (err) throw err;
  console.log('success!')
});