const express = require('express');
let app = express();
const parser = require('body-parser');
// let mongoose = require('../database/index.js')

app.use(parser.json());

app.use(express.static(__dirname + '/../public'));

// app.get('/overview', function (req, res) {
//   mongoose.find((err, data) => {
//     if (err) {
//       res.status(404);
//       res.send('Error: ', err)
//     } else {
//       res.status(200);
//       res.send(data);
//     }

//   })
// });

let port = 8008;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

