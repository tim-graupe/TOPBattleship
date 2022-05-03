"use strict";

var shipFactory = require("../ship.js");

test("Ship is not sunk", function () {
  var testShip = shipFactory("ptBoat", 2);
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
});
test("Ship is sunk", function () {
  var testShip = shipFactory("ptBoat", 2);
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});