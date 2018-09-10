const mongoose = require('mongoose');

const overviewSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true
  },
  name: String,
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

const overviewModel = mongoose.model('overview', overviewSchema);

module.exports.overviewModel = overviewModel;