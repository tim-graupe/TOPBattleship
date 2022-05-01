const shipFactory = require("./factories/ship.js");




test("Ship is not sunk", () => {
  const testShip = shipFactory("ptBoat", 2);
  testShip.hit()
  expect(testShip.isSunk()).toBe(false)
})

test("Ship is sunk", () => {
  const testShip = shipFactory("ptBoat", 2);
  testShip.hit()
  testShip.hit()
  expect(testShip.isSunk()).toBe(true)
})