const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/droptable',
  { useNewUrlParser: true }
);
const db = mongoose.connection;
mongoose.Promise = Promise;
db.on('error', () => console.error('connection error:'));

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  owner: String,
  ownerURL: String,
  ownerAvatar: String,
  repoURL: String,
  description: String,
  date: String,
  stars: Number,
  forks: Number

});