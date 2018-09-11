const mongoose = require('mongoose');
const {
  Overview,
} = require('./models/overview.js');

mongoose.connect('mongodb://localhost:27017/DropTable', {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connected!');
});

const findOverview = (id, callback) => {
  Overview.find({
    _id: id,
  })
    .exec((err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
};

module.exports = {
  findOverview,
};
