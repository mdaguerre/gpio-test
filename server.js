var five = require("johnny-five");
var Raspi = require("raspi-io");
var express = require('express');
var app = express();

var board = new five.Board({
  io: new Raspi()
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

board.on("ready", function() {
  var led1 = new five.Led("P1-11");
  var led2 = new five.Led("P1-13");
  var led3 = new five.Led("P1-15");
  
  led1.blink();
  led2.blink();
  led3.blink();
});