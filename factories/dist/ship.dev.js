"use strict";

var shipFactory = function shipFactory(name, hitpoints) {
  var hits = [];
  var coords = []; //called if a ship is hit and marks 1 "damage" to it

  var hit = function hit(attack) {
    hits.push(attack);
  }; //tests if a ship is sunk... triggered when hits === length


  var isSunk = function isSunk() {
    return hitpoints === hits.length;
  };

  return {
    name: name,
    hitpoints: hitpoints,
    coords: coords,
    hits: hits,
    isSunk: isSunk,
    hit: hit
  };
};

module.exports = shipFactory;