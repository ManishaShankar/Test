const e = require('express');
const express = require('express');
const Log = require('../controller/user.js');

let app = express.Router();
app.use(express.json());

app.post('/', function (req, res) {
  res.send('Getter Page');
});

app.post('/findById', async (req, res) => {
  console.log(req.body.lat);

  var Get = await Log.getUrl(`https://jsonplaceholder.typicode.com/users/`);

  var found = false;
  var item = {};

  for (i of Get) {
    if (req.body.lat == i.address.geo.lat) {
      item = i;
      found = true;
    }
  }
  
  res.json({
    "status": found,
    "item": item
  });
});

module.exports = app 