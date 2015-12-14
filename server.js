var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
  var led1 = new five.Led("P1-11");
  var led2 = new five.Led("P1-13");
  var led3 = new five.Led("P1-15");
  
  led1.blink();
  led2.blink();
  led3.blink();
});