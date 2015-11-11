var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// midlewares
app.use(bodyParser.json());

// routes
app.use('/lookups', require('./routes/lookups'));


module.exports = app;
