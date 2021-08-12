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
  let randomLocation;
  let row;
  let column;

  // const whereToCheckRow = function (currentboard, currentship) {
  //   let array = [];
  //   for (let i = 1; i < currentship.length; i++) {
  //     const shiftedColumn = column - i;
  //     if (shiftedColumn < 1) {
  //       continue;
  //     }
  //     const location = row + "," + shiftedColumn;
  //     const statusOnLocation = currentboard.coordinates[location];
  //     //console.log(location, statusOnLocation);
  //     if (statusOnLocation === 0) {
  //       array.push(shiftedColumn);
  //     }
  //   }
  //   for (let j = 1; j < currentship.length; j++) {
  //     const shiftedColumn = column + j;
  //     if (shiftedColumn > 10) {
  //       continue;
  //     }
  //     const location = row + "," + shiftedColumn;
  //     const statusOnLocation = currentboard.coordinates[location];
  //     //console.log(location, statusOnLocation);
  //     if (statusOnLocation === 0) {
  //       array.push(shiftedColumn);
  //     }
  //   }
  //   //console.log("array where to check row");
  //   //console.log(array);
  //   return array;
  // };
  // const whereToCheckColumn = function (currentboard, currentship) {
  //   let array = [];
  //   for (let i = 1; i < currentship.length; i++) {
  //     const shiftedRow = row - i;
  //     if (shiftedRow < 1) {
  //       continue;
  //     }
  //     const location = shiftedRow + "," + column;
  //     const statusOnLocation = currentboard.coordinates[location];
  //     if (statusOnLocation === 0) {
  //       array.push(shiftedRow);
  //     }
  //   }
  //   for (let j = 1; j < currentship.length; j++) {
  //     const shiftedRow = row + j;
  //     if (shiftedRow > 10) {
  //       continue;
  //     }
  //     const location = shiftedRow + "," + column;
  //     const statusOnLocation = currentboard.coordinates[location];
  //     if (statusOnLocation === 0) {
  //       array.push(shiftedRow);
  //     }
  //   }
  //   //console.log("array where to check column");
  //   //console.log(array);
  //   return array;
  // };

  const locationsArray = function (currentboard, currentship, orientation) {
    let array = [];
    if (orientation === "row") {
      newposition = column;
      fixedposition = row;
    } else {
      newposition = row;
      fixedposition = column;
    }
    for (let i = 1; i < currentship.length; i++) {
      const shifted = newposition - i;
      if (shifted < 1) {
        continue;
      }
      let location;
      if (orientation === "row") {
        location = fixedposition + "," + shifted;
      } else {
        location = shifted + "," + fixedposition;
      }
      const statusOnLocation = currentboard.coordinates[location];
      if (statusOnLocation === 0) {
        array.push(shifted);
      }
    }
    for (let j = 1; j < currentship.length; j++) {
      const shifted = newposition + j;
      if (shifted > 10) {
        continue;
      }
      let location;
      if (orientation === "row") {
        location = fixedposition + "," + shifted;
      } else {
        location = shifted + "," + fixedposition;
      }
      const statusOnLocation = currentboard.coordinates[location];
      if (statusOnLocation === 0) {
        array.push(shifted);
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
    let goodspot;
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
        goodspot = false;
        //console.log("fails");
        continue;
      }
    }
    return goodspot;
  };

  const compareNumbers = function (a, b) {
    return a - b;
  };

  const checkForFit = function (currentship, currentboard) {
    const selectedInitialLocation = row + "," + column;
    const availableSpacesRow = locationsArray(currentboard, currentship, "row")
      .concat(column)
      .sort(compareNumbers);
    const availableSpacesColumn = locationsArray(
      currentboard,
      currentship,
      "column"
    )
      .concat(row)
      .sort(compareNumbers);

    // const availableSpacesRow = whereToCheckRow(currentboard, currentship)
    //       .concat(column)
    //       .sort(compareNumbers);
    // const availableSpacesColumn = whereToCheckColumn(currentboard, currentship)
    //       .concat(row)
    //       .sort(compareNumbers);
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
          if (!startposition) {
            return "fails check";
          }
          return [startposition, column, "vertical"];
        }
      } else {
        const startposition = consecutiveNumbers(
          availableSpacesRow,
          currentship.length
        );
        if (!startposition) {
          return "fails check";
        }
        return [row, startposition, "horizontal"];
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
          if (!startposition) {
            return "fails check";
          }
          return [row, startposition, "horizontal"];
        }
      } else {
        const startposition = consecutiveNumbers(
          availableSpacesColumn,
          currentship.length
        );
        if (!startposition) {
          return "fails check";
        }
        return [startposition, column, "vertical"];
      }
    }
  };
  const changeBoard = function (boardobj, currentship) {
    randomLocation = pickLocation(boardobj.coordinates).split(",");
    row = Number(randomLocation[0]);
    column = Number(randomLocation[1]);
    //displayboard(boardobj);
    //console.log("random location: " + row, column);
    const selectInitialPlacement = checkForFit(currentship, boardobj);
    if (selectInitialPlacement === "fails check") {
      //console.log("recursive");
      return changeBoard(boardobj, currentship);
    }
    //console.log(selectInitialPlacement);
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
      currentship.coordinates.push(coordinatesToChange[k]);
    }
    return "done";
  };
  return { changeBoard };
})();

function setupboard() {
  let newBoard2 = createGameboard("playerA");
  placeShip.changeBoard(newBoard2, shipFleet[0]);
  placeShip.changeBoard(newBoard2, shipFleet[1]);
  placeShip.changeBoard(newBoard2, shipFleet[2]);
  placeShip.changeBoard(newBoard2, shipFleet[3]);
  placeShip.changeBoard(newBoard2, shipFleet[4]);
  displayboard(newBoard2);
}

const displayboard = function (currentboard) {
  const coord = currentboard.coordinates;
  console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "d");
  for (let i = 1; i <= 10; i++) {
    if (i === 10) {
      console.log(
        "d",
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
      break;
    }
    console.log(
      i,
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
// quando se coloca um barco devia guardar a posicao desse barco no objecto do barco
