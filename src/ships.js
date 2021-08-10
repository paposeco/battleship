//export { createShip };

class Ship {
  constructor(length) {
    this.length = length;
    this.hits = createArrayHits(this.length);
    this.sunk = checkIfSunk(this.hits);
  }
  hit(index) {
    this.hits[index] = 1;
    this.sunk = checkIfSunk(this.hits);
  }
}

const createArrayHits = function (length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(0);
  }
  return array;
};

const checkIfSunk = function (hitsarray) {
  if (hitsarray.find((element) => element === 0) === undefined) {
    return true;
  } else {
    return false;
  }
};

const createShip = function (length) {
  const shipcreated = new Ship(length);
  return shipcreated;
};

// for node
//module.exports = Ship;

const oneship = new Ship(4);

oneship.hit(1);
oneship.hit(0);

console.log(oneship);
