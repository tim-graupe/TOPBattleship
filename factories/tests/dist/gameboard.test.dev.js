"use strict";

var gridFactory = require("../gameboard.js");

var shipFactory = require("../ship.js"); // test("Attack misses", () => {
//     gridFactory()
//     let grid = gridFactory()
//     grid.placeShips()
//     let pt = [1,5]
//     // console.log(pt)
//     grid.receiveAttack(pt)
//     console.log(grid.misses)
//     expect(grid.misses.length).toBe(1)
// })
// test("Expect no overlaps", () => {
//   let grid = gridFactory();
//   let takenSpots = grid.takenSpots;
//   let testPositions = grid.checkPositions();
//   grid.placeShips();
//   grid.checkPositions()
//   expect(takenSpots.length).toBe(17);
// });
// test("Tracking attacks", () => {
//     gridFactory()
//     let grid = gridFactory()
//     grid.placeShips()
//     let pt = [1,5]
//     let pt1 = [1,5]
//     // console.log(pt)
//     grid.receiveAttack(pt)
//     console.log(grid.attackedSqs)
//     grid.receiveAttack(pt1)
//     console.log(grid.attackedSqs)
// })
// test("Attack hits ship", () => {
//     gridFactory()
//     let grid = gridFactory()
//     grid.placeShips()
//     let pt = grid.ships[0].coords[0]
//     let pt2 = grid.ships[0].coords[1]
//     // console.log(pt)
//     grid.receiveAttack(pt)
//     grid.receiveAttack(pt2)
//     console.log(grid.ships[0].hits)
//     expect(grid.ships[0].hits.length).toBe(2)
//     expect(grid.ships[0].isSunk()).toBe(true)
// })
// test("Sunk ship", () => {
//     const grid = gridFactory();
//     const testShip = shipFactory("ptBoat", 2);
// })
// test("Ships are being placed", () => {
//     const grid = gridFactory()
//     grid.placeShips()
//     console.log(grid.ships[0].coords)
//     console.log(grid.ships[1].coords)
//     console.log(grid.ships[2].coords)
//     console.log(grid.ships[3].coords)
//     console.log(grid.ships[4].coords)
//     expect(grid.ships[0].coords.length).toBe(2)
//     expect(grid.ships[1].coords.length).toBe(3)
//     expect(grid.ships[2].coords.length).toBe(3)
//     expect(grid.ships[3].coords.length).toBe(4)
//     expect(grid.ships[4].coords.length).toBe(5)
// })