const express = require('express');
const path = require('path');
const cors = require('cors');
const { findOverview } = require('../database/index.js');


const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/restaurants/:restaurantId', express.static(path.join(__dirname, '/../public')));


app.get('/restaurants/:restaurantId/overview', (req, res) => {
  const { restaurantId } = req.params;
  findOverview(restaurantId, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
      res.send('Error: ', err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

const port = 8008;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
