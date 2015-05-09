// Include express and initialize app
var express = require('express');
var app = express();

// initialize http server
var http = require('http').Server(app);

// TODO: set up https server

// TODO: import database config

var bodyParser = require('body-parser');

// Serve up static files from public folder
app.use(express.static(__dirname + '/public'));

// Add body-parser middleware to Express
app.use(bodyParser.json());

// TODO: set up API routes

http.listen(8080, function() {
  console.log('HTTP server listening on port 8080.');
});
