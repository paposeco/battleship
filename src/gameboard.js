//import { createShip } from "ships.js";
const createShipFleet = require("./ships.js");
const shipFleet = createShipFleet();

const createGameboard = function (player) {
  const boardObject = function () {
    let obj = {};
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        obj[i + "," + j] = 0;
      }
    }
    return obj;
  };
  class Gameboard {
    constructor(player) {
      this.player = player;
      this.coordinates = boardObject();
    }
  }
  const gameboard = new Gameboard(player);
  return gameboard;
};

const newBoard = createGameboard("playerA");

const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const pickLocation = function (obj) {
  const objValues = Object.values(obj);
  const objKeys = Object.keys(obj);
  let emptyLocations = [];
  for (let i = 0; i < objValues.length; i++) {
    if (objValues[i] === 0) {
      emptyLocations.push(objKeys[i]);
    }
  }
  const numberEmptyLocations = emptyLocations.length;
  const pickRandomLocation =
    emptyLocations[getRandomIntInclusive(0, numberEmptyLocations - 1)];
  return pickRandomLocation;
};

const placeShip = (function () {
  const ship = shipFleet[0];
  const shipLength = ship.length;
  let randomLocation = pickLocation(newBoard.coordinates).split(",");
  const row = Number(randomLocation[0]);
  const column = Number(randomLocation[1]);
  const whereToCheck = (function () {
    let array = [];
    for (let i = 1; i < shipLength; i++) {
      const shiftedColumn = column - i;
      if (shiftedColumn < 1) {
        continue;
      }
      const location = row + "," + shiftedColumn;
      array.push(location);
    }
    for (let j = 1; j < shipLength; j++) {
      const shiftedColumn = column + j;
      if (shiftedColumn > 10) {
        continue;
      }
      const location = row + "," + shiftedColumn;
      array.push(location);
    }
    return array;
  })();
  console.log(randomLocation);
  console.log(whereToCheck);
})();
