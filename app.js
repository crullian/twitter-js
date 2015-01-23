var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'))

app.get('/', function(req, res) {
  res.send('Hello Cruel World');
})

app.get('/tweets', function(req, res) {
  res.send('Welcome to my tweet-mare');
})

app.listen(3000)