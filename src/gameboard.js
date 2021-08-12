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

//const newBoard = createGameboard("playerA");

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

const placeShips = (function () {
  let randomLocation;
  let row;
  let column;

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
    const selectInitialPlacement = checkForFit(currentship, boardobj);
    if (selectInitialPlacement === "fails check") {
      return changeBoard(boardobj, currentship);
    }
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

const setupboard = (function () {
  const createBoard = function (player) {
    let newBoard = createGameboard(player);
    placeShips.changeBoard(newBoard, shipFleet[0]);
    placeShips.changeBoard(newBoard, shipFleet[1]);
    placeShips.changeBoard(newBoard, shipFleet[2]);
    placeShips.changeBoard(newBoard, shipFleet[3]);
    placeShips.changeBoard(newBoard, shipFleet[4]);
    displayboard(newBoard);
    return newBoard;
  };
  let sunkShips = [];
  const receiveAttack = function (boardobj, coordinates) {
    const boardStatusOnCoordinates = boardobj.coordinates[coordinates];
    //tenho de decidir como é que recebo estas coordenadas. por enqunato estar [ 2, 3]
    const transformedCoordinates = [coordinates[0] + "," + coordinates[1]];
    //assume that people don't pick places that were hit before for now
    if (boardStatusOnCoordinates === 1) {
      console.log("hit");
      for (let i = 0; i < shipFleet.length; i++) {
        const arrayOfCoordinates = shipFleet[i].coordinates.flat();
        const isItThisShip = arrayOfCoordinates.includes(
          transformedCoordinates[0]
        );
        if (isItThisShip) {
          console.log(shipFleet[i].name);
          console.log(shipFleet[i].hits);
          console.log(arrayOfCoordinates);
          //o hit index nao esta bem. estou a comparar coisas diferentes. arrayofcoordinates. nem sei como é que com isto sem  sei o barco esta neste sitio. ver o que é transformed coordinates tb
          const hitIndex = arrayOfCoordinates.findIndex(
            (element) => element === transformedCoordinates[0]
          );
          console.log(hitIndex);
          // shipFleet[i].hits[hitIndex] = "x";
          shipFleet[i].hit(hitIndex);
          boardobj.coordinates[coordinates] = "x";
          shipFleet[i].hits;
          if (shipFleet[i].sunk) {
            console.log("ship sunk: " + shipFleet[i].name);
            sunkShips.push(shipFleet[i]);
            console.log(sunkShips.length);
            if (sunkShips.length === 5) {
              console.log("gameover");
              return "gameover";
            }
          }
          return "hit";
        }
      }
    } else {
      console.log("miss");
      boardobj.coordinates[coordinates] = "m";
      return "miss";
    }
  };
  return { createBoard, receiveAttack };
})();

const displayboard = function (currentboard) {
  //console.log(currentboard.player);
  console.log(" ");
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

const playerABoard = setupboard.createBoard("playerA");
const playerATracksBBoard = createGameboard("playerATracksB");
const playerBBoard = setupboard.createBoard("playerB");
const playerBTracksABoard = createGameboard("playerBTracksA");

function gameLoopPrompt() {
  //player A picks a coordinate
  const prompt = require("prompt-sync")();
  console.log("player A checks B's board");
  displayboard(playerATracksBBoard);
  const locationFromPrompt = prompt("Pick a location ");
  let location;
  if (locationFromPrompt.includes("d")) {
    const dlocation = locationFromPrompt.indexOf("d");
    if (dlocation === 0) {
      if (locationFromPrompt[1] === "d") {
        location = [10, 10];
      } else {
        location = [10, Number(locationFromPrompt[1])];
      }
    } else {
      location = [Number(locationFromPrompt[0]), 10];
    }
  } else {
    location = [Number(locationFromPrompt[0]), Number(locationFromPrompt[1])];
  }

  // const location = [
  //   Number(locationFromPrompt[0]),
  //   Number(locationFromPrompt[1]),
  // ];
  console.log(location);
  // player A attacks
  const hitormissAvsB = setupboard.receiveAttack(playerBBoard, location);
  if (hitormissAvsB === "hit") {
    playerATracksBBoard.coordinates[location] = "x";
  } else {
    playerATracksBBoard.coordinates[location] = "m";
  }

  displayboard(playerATracksBBoard);
  displayboard(playerBBoard);

  //player B picks a coordinate
  console.log("player B checks A's board");
  displayboard(playerBTracksABoard);

  const selectedLocationRaw = pickLocation(
    playerBTracksABoard.coordinates
  ).split(",");
  const selectedLocation = [
    Number(selectedLocationRaw[0]),
    Number(selectedLocationRaw[1]),
  ];
  console.log(selectedLocation);
  //player B attacks

  const hitormissBvsA = setupboard.receiveAttack(
    playerABoard,
    selectedLocation
  );
  if (hitormissBvsA === "hit") {
    playerBTracksABoard.coordinates[selectedLocation] = "x";
  } else {
    playerBTracksABoard.coordinates[selectedLocation] = "m";
  }
  displayboard(playerBTracksABoard);
  displayboard(playerABoard);

  while (hitormissAvsB !== "gameover" || hitormissBvsA !== "gameover") {
    gameLoopPrompt();
  }
}

// let count = 0;
// while (count < 15) {
//   gameLoopPrompt();
//   count++;
// }
gameLoopPrompt();

// //console.log("playerA attacks playerB");
// setupboard.receiveAttack(playerBBoard, [4, 5]);
// setupboard.receiveAttack(playerATracksBBoard, [4, 5]);

// console.log("playerB attacks player A");
// gameLoop();
// displayboard(playerABoard);
// displayboard(playerBTracksABoard);
