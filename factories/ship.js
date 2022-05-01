const shipFactory = (name, hitpoints) => {
  let hits = [];
  let coords = [];

  //called if a ship is hit and marks 1 "damage" to it
  const hit = (attack) => {
    hits.push(attack);
  };

  //tests if a ship is sunk... triggered when hits === length
  const isSunk = () => hitpoints === hits.length;

  return { name, hitpoints, coords, hits, isSunk, hit };
};

module.exports = shipFactory;
