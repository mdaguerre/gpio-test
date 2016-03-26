var five = require("johnny-five");
var Raspi = require("raspi-io");
var express = require('express');
var app = express();

var board = new five.Board({
  io: new Raspi()
});

app.get('/', function (req, res) {
   var led1 = new five.Led("P1-17");
  
  led1.blink();
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

board.on("ready", function() {
 
});