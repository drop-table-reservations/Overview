const mongoose = require('mongoose');
const seededData = require('./seededData.json');
const { overviewModel } = require('./models/overview.js')

mongoose.connect( 'mongodb://localhost:27017/DropTable' );

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('connected!');
});

const overviews = [];

seededData.forEach((seed) => {
  overviews.push(new overviewModel(seed));
})

overviewModel.insertMany(overviews)
  .then(() => {
    console.log('Successfully created 100 entries in the database!');
    process.exit();
  })
  .catch(err => {
    throw err;
  });