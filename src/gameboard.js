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
  //const ship = shipFleet[0];
  //const shipLength = ship.length;
  // let randomLocation = pickLocation(newBoard.coordinates).split(",");
  // const row = Number(randomLocation[0]);
  // const column = Number(randomLocation[1]);

  let randomLocation;
  let row;
  let column;

  const whereToCheckRow = function (currentboard, currentship) {
    let array = [];
    for (let i = 1; i < currentship.length; i++) {
      const shiftedColumn = column - i;
      if (shiftedColumn < 1) {
        continue;
      }
      const location = row + "," + shiftedColumn;
      const statusOnLocation = currentboard.coordinates[location];
      console.log(location, statusOnLocation);
      if (statusOnLocation === 0) {
        array.push(shiftedColumn);
      }
    }
    for (let j = 1; j < currentship.length; j++) {
      const shiftedColumn = column + j;
      if (shiftedColumn > 10) {
        continue;
      }
      const location = row + "," + shiftedColumn;
      const statusOnLocation = currentboard.coordinates[location];
      console.log(location, statusOnLocation);
      if (statusOnLocation === 0) {
        array.push(shiftedColumn);
      }
    }
    return array;
  };
  const whereToCheckColumn = function (currentboard, currentship) {
    let array = [];
    for (let i = 1; i < currentship.length; i++) {
      const shiftedRow = row - i;
      if (shiftedRow < 1) {
        continue;
      }
      const location = shiftedRow + "," + column;
      const statusOnLocation = currentboard.coordinates[location];
      if (statusOnLocation === 0) {
        array.push(shiftedRow);
      }
    }
    for (let j = 1; j < currentship.length; j++) {
      const shiftedRow = row + j;
      if (shiftedRow > 10) {
        continue;
      }
      const location = shiftedRow + "," + column;
      const statusOnLocation = currentboard.coordinates[location];
      if (statusOnLocation === 0) {
        array.push(shiftedRow);
      }
    }
    return array;
  };

  const sumSequence = function (a, b) {
    let sum = 0;
    for (let i = 0; i <= b; i++) {
      sum += a + i;
    }
    return sum;
  };

  const consecutiveNumbers = function (array, currentshiplength) {
    for (let i = 0; i < array.length; i++) {
      const beginningOfShip = array[i];
      //the first position also counts
      const endOfShip = beginningOfShip + currentshiplength - 1;
      if (endOfShip > array[array.length]) {
        break;
      }
      const consecutive = sumSequence(beginningOfShip, endOfShip);

      const inarray = sumSequence(
        beginningOfShip,
        array[i + currentshiplength - 1]
      );
      if (consecutive === inarray) {
        return beginningOfShip;
      } else {
        console.log("fails");
        continue;
      }
    }
  };

  const compareNumbers = function (a, b) {
    return a - b;
  };

  const checkForFit = function (currentship, currentboard) {
    const selectedInitialLocation = row + "," + column;
    const availableSpacesRow = whereToCheckRow(currentboard, currentship)
      .concat(column)
      .sort(compareNumbers);
    const availableSpacesColumn = whereToCheckColumn(currentboard, currentship)
      .concat(row)
      .sort(compareNumbers);
    // pick randomly row or column (not really random: if row is odd check column if even check row)

    if (row % 2 === 1) {
      if (availableSpacesRow.length < currentship.length) {
        if (availableSpacesColumn.length < currentship.length) {
          return false;
        } else {
          const startposition = consecutiveNumbers(
            availableSpacesColumn,
            currentship.length
          );
          return [row, startposition, "horizontal"];
        }
      } else {
        const startposition = consecutiveNumbers(
          availableSpacesRow,
          currentship.length
        );
        return [startposition, column, "vertical"];
      }
    } else {
      if (availableSpacesColumn.length < currentship.length) {
        if (availableSpacesRow.length < currentship.length) {
          return false;
        } else {
          const startposition = consecutiveNumbers(
            availableSpacesRow,
            currentship.length
          );
          return [startposition, column, "vertical"];
        }
      } else {
        const startposition = consecutiveNumbers(
          availableSpacesColumn,
          currentship.length
        );
        return [row, startposition, "horizontal"];
      }
    }
  };
  const changeBoard = function (boardobj, currentship) {
    randomLocation = pickLocation(newBoard.coordinates).split(",");
    row = Number(randomLocation[0]);
    column = Number(randomLocation[1]);
    displayboard(boardobj);
    const selectInitialPlacement = checkForFit(currentship, boardobj);
    console.log(selectInitialPlacement);
    if (!selectInitialPlacement) {
      return "ERROR ERROR";
    }
    const currentshiplength = currentship.length;
    const boatOrientation = selectInitialPlacement[2];
    let coordinatesToChange = [];
    if (boatOrientation === "vertical") {
      for (let i = 0; i < currentshiplength; i++) {
        const newcoord = [
          Number(selectInitialPlacement[0]) +
            i +
            "," +
            selectInitialPlacement[1],
        ];
        coordinatesToChange.push(newcoord);
      }
    } else {
      for (let j = 0; j < currentshiplength; j++) {
        const newcoord = [
          selectInitialPlacement[0] +
            "," +
            (Number(selectInitialPlacement[1]) + j),
        ];
        coordinatesToChange.push(newcoord);
      }
    }
    for (let k = 0; k < coordinatesToChange.length; k++) {
      boardobj.coordinates[coordinatesToChange[k]] = 1;
    }
    return "done";
  };
  return { changeBoard };
  // changeBoard(newBoard, ship);
})();

function setupboard() {
  let newBoard2 = createGameboard("playerA");
  placeShip.changeBoard(newBoard2, shipFleet[0]);
  placeShip.changeBoard(newBoard2, shipFleet[1]);
  displayboard(newBoard2);
}

const displayboard = function (currentboard) {
  const coord = currentboard.coordinates;
  for (let i = 1; i <= 10; i++) {
    console.log(
      coord[i + "," + 1],
      coord[i + "," + 2],
      coord[i + "," + 3],
      coord[i + "," + 4],
      coord[i + "," + 5],
      coord[i + "," + 6],
      coord[i + "," + 7],
      coord[i + "," + 8],
      coord[i + "," + 9],
      coord[i + "," + 10]
    );
  }
};

setupboard();

// console.log("primeiro");
// console.log("segundo");
// placeShip.changeBoard(newBoard2, shipFleet[1]);
// console.log(newBoard2.coordinates);
// if it fails, it should pick a new randomlocation
