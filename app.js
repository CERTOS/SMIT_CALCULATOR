
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
const { hostname } = require('os');


// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
app.use( express.static( "public" ) );


// prepare server

app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// index page
app.get('/', function(req, res) {
    res.render('page/index');
});

const hosted_port=1522;
app.listen(hosted_port,hostname, function () {
  console.log(`server is hosted at http://${hostname}:${hosted_port}/`);
});

