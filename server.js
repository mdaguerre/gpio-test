var five = require("johnny-five");
var Raspi = require("raspi-io");
var express = require('express');
var app = express();


var pins = {
  //RELAY 1
  1: 'P1-11', //Naranja
  2: 'P1-13', //Amarillo
  3: 'P1-15', //Verde
  4: 'P1-16', //Azul
  //RELAY 2
  5: 'P1-31', //Negro
  6: 'P1-29', //Blanco
  7: 'P1-22', //Gris
  8: 'P1-18', //Violeta
}

var board = new five.Board({
  io: new Raspi()
});

app.get('/', function(req, res) {

});

app.get('/all/:action', function(req, res) {
  var action = req.params.action;

  for (var i in pins) {
    var pin = pins[i];
    var r = new five.Led(pin);

    switch (action) {
      case 'on':
        r.on();
        break;
      case 'off':
        r.off();
        break;
    }

  }

  res.send('All PINS are ' + action);

});

app.get('/:action/:pin', function(req, res) {
  var action = req.params.action;

  for (var i in relays) {
    var relay = relays[i];

    for (var j in relay) {
      var pin = relay[j];
      var r = new five.Led(pin);

      switch (action) {
        case 'on':
          r.on();
          break;
        case 'off':
          r.off();
          break;
      }

    }

    res.send('All PINS are ' + action);

  }

});


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

board.on("ready", function() {

});