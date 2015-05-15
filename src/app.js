// Include express and initialize app
var express = require('express');
var app = express();

// initialize http server
// var http = require('http').Server(app);

// TODO: set up https server

// TODO: import database config

var bodyParser = require('body-parser');

// Serve up static files from public folder
app.use(express.static('public'));

// Add body-parser middleware to Express
app.use(bodyParser.json());

// TODO: set up API routes
module.exports = app;

