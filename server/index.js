const express = require('express');
const cors = require('cors');
const path = require('path');
const { findOverview } = require('../database/index.js');

const app = express();
app.use(cors());


app.get('/api/restaurants/:restaurantId/overview', (req, res) => {
  const { restaurantId } = req.params;
  findOverview(restaurantId, (err, data) => {
    if (err) {
      res.status(500);
      res.send('Error: ', err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve('public/prod.bundle.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

const port = 8008;

app.listen(port);
