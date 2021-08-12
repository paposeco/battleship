//export { createShip };

const createArrayHits = function (length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(0);
  }
  return array;
};

const checkIfSunk = function (hitsarray) {
  if (hitsarray.find((element) => element === "x") === undefined) {
    return true;
  } else {
    return false;
  }
};

const createShip = function (length, name) {
  class Ship {
    constructor(length, name) {
      this.length = length;
      this.name = name;
      this.hits = createArrayHits(this.length);
      this.sunk = checkIfSunk(this.hits);
      this.coordinates = [];
    }
    hit(index) {
      this.hits[index] = 1;
      this.sunk = checkIfSunk(this.hits);
    }
  }
  const shipcreated = new Ship(length, name);
  return shipcreated;
};

const shipFleet = function () {
  const carrier = createShip(5, "carrier");
  const battleship = createShip(4, "battleship");
  const destroyer = createShip(3, "destroyer");
  const submarine = createShip(3, "submarine");
  const patrolboat = createShip(2, "patrolboat");
  const shiparray = [carrier, battleship, destroyer, submarine, patrolboat];
  return shiparray;
};

// for node
module.exports = shipFleet;

// ships should probably have a unique id
