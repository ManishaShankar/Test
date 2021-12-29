var express = require('express');
var app = express();
const settings = require('./Routes/getter')

app.use('/getter',settings)

app.listen(3000, function () {
    console.log('Listening to Port 3000');
});