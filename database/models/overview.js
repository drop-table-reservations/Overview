const mongoose = require('mongoose');

const overviewSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true
  },
  name: String,
  header: {
    reviewAvg: Number,
    reviews: Number,
    price: String,
    cuisines: String,
  },
  privateDining: String,
  diningStyle: String,
  cuisines: String,
  hoursOfOperation: String,
  phoneNumber: String,
  website: String,
  paymentOptions: String,
  dressCode: String,
  executiveChef: String,
  catering: String,
  openGoogleMaps: String,
  Neighborhood: String,
  crossStreet: String,
  parkingDetails: String,
  publicTransit: String,
  specialEvents: String,
  giftCards: Boolean,
  entertainment: String,
  additional: String,
  menus: [{
    title: String,
    menu: String
  }]
});

const Overview = mongoose.model('overview', overviewSchema);

module.exports.Overview = Overview;
