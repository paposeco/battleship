import { createShipFleet } from "./ships.js";
import { createPlayer } from "./player.js";
import { domPlayerB } from "./index.js";
export { startGame, setupPlayers, gameLoop };

//creates a clean gameboard for a player with the valid coordinates
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

const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//picks a random location that hasn't been picked before (one that  isn't a hit or a miss)
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

  // from a player board, a ship, orientation and a row or column, checks the values on that column or row (up to the length of the ship) and returns all the coordinates that are empty
  const locationsArray = function (currentboard, currentship, orientation) {
    let newposition;
    let fixedposition;
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

  // checks if the empty locations are consecutive
  const consecutiveNumbers = function (array, currentshiplength) {
    let goodspot;
    for (let i = 0; i < array.length; i++) {
      const beginningOfShip = array[i];
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

  //for a certain ship and board, and selected initial location, checks if the boat fits.
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

    // to add some variability to the ship placement, if the row of the initial selected location is an odd number, starts by checking if the ship fits horizontally. if it doesn't fit, it then checks it fits vertically. It does the opposite if the row is an even number.

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

  // picks a random empty location and then checks if the ship fits
  const changeBoard = function (boardobj, currentship) {
    randomLocation = pickLocation(boardobj.coordinates).split(",");
    row = Number(randomLocation[0]);
    column = Number(randomLocation[1]);
    const selectInitialPlacement = checkForFit(currentship, boardobj);
    if (selectInitialPlacement === "fails check" || !selectInitialPlacement) {
      return changeBoard(boardobj, currentship);
    }
    const currentshiplength = currentship.length;
    const boatOrientation = selectInitialPlacement[2];
    let coordinatesToChange = [];
    // after finding a good starting point and having chosen the boat orientation, places the ship on the board by changing the object key value at each coordinate.
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

// creates a board, a fleet and places the ships on the board for a player; returns the board with the ships location
const setupBoard = function (player, playerobj) {
  let newBoard = createGameboard(player);
  const shipFleet = createShipFleet(player);
  playerobj.ships = shipFleet;
  if (player === "playerB") {
    placeShips.changeBoard(newBoard, shipFleet[0]);
    placeShips.changeBoard(newBoard, shipFleet[1]);
    placeShips.changeBoard(newBoard, shipFleet[2]);
    placeShips.changeBoard(newBoard, shipFleet[3]);
    placeShips.changeBoard(newBoard, shipFleet[4]);
  }
  return newBoard;
};

const setupPlayers = function (player, ships, gameboard, advgameboard) {
  const newplayer = createPlayer(player, ships, gameboard, advgameboard);
  return newplayer;
};

// for a certain attacker and victim, checks the status of the victim board for an attack at a certain coordinate; if the status on the board is "1", checks which boat is at that location and gives it a "hit"
const attack = function (attacker, victim, coordinates) {
  const victimsBoard = victim.gameboard;
  const attackerAdvBoard = attacker.advgameboard;
  const victimsFleet = victim.ships;
  const boardStatusOnCoordinates = victimsBoard.coordinates[coordinates];
  const transformedCoordinates = [coordinates[0] + "," + coordinates[1]];
  if (boardStatusOnCoordinates === 1) {
    for (let i = 0; i < victimsFleet.length; i++) {
      const arrayOfCoordinates = victimsFleet[i].coordinates.flat();
      const isItThisShip = arrayOfCoordinates.includes(
        transformedCoordinates[0]
      );
      if (isItThisShip) {
        const hitIndex = arrayOfCoordinates.findIndex(
          (element) => element === transformedCoordinates[0]
        );
        victimsFleet[i].hit(hitIndex);
        victimsBoard.coordinates[coordinates] = "x";
        attackerAdvBoard.coordinates[coordinates] = "x";
        victimsFleet[i].hits;
        // tracks if a ship has sunk and returns the ship's name if true; if there are 5 sank ships of the same player returns gameover
        if (victimsFleet[i].sunk) {
          const sunkenShips = countSunkenShips(victimsFleet);
          if (sunkenShips === 5) {
            return ["gameover", victimsFleet[i].name];
          } else {
            return ["hit", victimsFleet[i].name];
          }
        }
        return ["hit", "standing"];
      }
    }
  } else {
    //if the status on board was "0", updates it to "m" when a player misses
    victimsBoard.coordinates[coordinates] = "m";
    attackerAdvBoard.coordinates[coordinates] = "m";
    return ["miss", ""];
  }
};

const countSunkenShips = function (array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const ship = array[i];
    const sunk = ship.sunk;
    if (sunk) {
      count++;
    }
  }
  return count;
};

// auxiliar variables for helping the computer
let lastcoord = [];
let possiblebetterlocations = [];

// gets a location from player A and attacks B at that location
function gameLoop(location, playerA, playerB) {
  let stop = false;
  // player A attacks
  const locationtemp = location.toString().split(",");
  const finallocation = [Number(locationtemp[0]), Number(locationtemp[1])];
  const attackResult = attack(playerA, playerB, finallocation);
  const hitormissAvsB = attackResult[0];
  const sunkStatusB = attackResult[1];

  // if it's a hit, adds a class to the hit div
  if (hitormissAvsB === "hit" || hitormissAvsB === "gameover") {
    const transformcoordtoidLocation = location.toString().replace(",", "-");
    const otherplayerboard = document.getElementById("otherplayer");
    const findDivOther = otherplayerboard.querySelector(
      `[id="${transformcoordtoidLocation}"]`
    );

    findDivOther.classList.add("hit");
  }

  // when a ship has sunk, updates the dom with the name of the ship
  if (sunkStatusB !== "" && sunkStatusB !== "standing") {
    const sunkedshipname = sunkStatusB.toLowerCase();
    const sunkedshipH3Id = sunkedshipname + "Adv";
    const shipOnDom = document.getElementById(sunkedshipH3Id);
    const shipReferenceDiv = shipOnDom.nextElementSibling;
    const alldivsInside = shipReferenceDiv.querySelectorAll("div");
    alldivsInside.forEach((div) => (div.style.backgroundColor = "lightgrey"));
    shipOnDom.classList.add("sunk");
    const sunkship = document.getElementById("sunkship");
    sunkship.textContent =
      "Latest Casualty: Computer's " + sunkStatusB + " has sunk.";
  }
  if (hitormissAvsB === "gameover") {
    const sunkedshipname = sunkStatusB.toLowerCase();
    const sunkedshipH3Id = sunkedshipname + "Adv";
    const shipOnDom = document.getElementById(sunkedshipH3Id);
    shipOnDom.classList.add("sunk");
    stop = true;
    const info = document.getElementById("currentShip");
    info.classList.add("winnerannoucement");
    info.textContent = "Game Over. You are the winner!";
    return stop;
  }

  //  player B picks a coordinate
  // the first coordinate is picked randomly. if the coordinate was a hit, the computer tries every possible location around the hit
  let selectedLocation;
  if (lastcoord.length === 0) {
    const selectedLocationRaw = pickLocation(
      playerB.advgameboard.coordinates
    ).split(",");
    selectedLocation = [
      Number(selectedLocationRaw[0]),
      Number(selectedLocationRaw[1]),
    ];
  } else if (possiblebetterlocations.length === 0) {
    possiblebetterlocations = pickBetterCoord(lastcoord, playerB);
    let selectedLocationOriginal;
    if (possiblebetterlocations.length === 1) {
      selectedLocationOriginal = possiblebetterlocations[0].split(",");
      selectedLocation = [
        Number(selectedLocationOriginal[0]),
        Number(selectedLocationOriginal[1]),
      ];
    } else {
      selectedLocationOriginal = possiblebetterlocations[0].split(",");
      selectedLocation = [
        Number(selectedLocationOriginal[0]),
        Number(selectedLocationOriginal[1]),
      ];
      possiblebetterlocations = possiblebetterlocations.slice(1);
    }
  } else {
    let selectedLocationOriginal;
    if (possiblebetterlocations.length === 1) {
      selectedLocationOriginal = possiblebetterlocations[0].split(",");
      selectedLocation = [
        Number(selectedLocationOriginal[0]),
        Number(selectedLocationOriginal[1]),
      ];
    } else {
      selectedLocationOriginal = possiblebetterlocations[0].split(",");
      selectedLocation = [
        Number(selectedLocationOriginal[0]),
        Number(selectedLocationOriginal[1]),
      ];
      possiblebetterlocations = possiblebetterlocations.slice(1);
    }
  }

  //player B attacks
  const transformcoordtoid = selectedLocation.toString().replace(",", "-");
  const mainplayerboard = document.getElementById("mainplayer");
  const findDiv = mainplayerboard.querySelector(`[id="${transformcoordtoid}"]`);
  const attackResultComputer = attack(playerB, playerA, selectedLocation);
  const hitormissBvsA = attackResultComputer[0];
  const sunkStatusA = attackResultComputer[1];

  // saves the coordinate if the chose location was a hit and resets the possible better locations
  if (
    hitormissBvsA === "hit" &&
    (sunkStatusA === "standing" || sunkStatusA === "")
  ) {
    lastcoord.push(selectedLocation[0] + "," + selectedLocation[1]);
    possiblebetterlocations = [];
  }

  //visually the computer takes 1s to play
  setTimeout(function () {
    domPlayerB(hitormissBvsA, findDiv, sunkStatusA);
  }, 1000);

  if (sunkStatusA !== "standing" && sunkStatusA !== "") {
    lastcoord = [];
    possiblebetterlocations = [];
  }

  if (hitormissBvsA === "gameover") {
    const info = document.getElementById("currentShip");
    info.classList.add("winnerannoucement");
    info.textContent = "Game Over. The Computer is the winner!";
    stop = true;
    return stop;
  }
  return stop;
}

function startGame(player1, player2) {
  const playerABoard = setupBoard("playerA", player1);
  const playerATracksBBoard = createGameboard("playerATracksB");
  player1.gameboard = playerABoard;
  player1.advgameboard = playerATracksBBoard;
  const playerBBoard = setupBoard("playerB", player2);
  const playerBTracksABoard = createGameboard("playerBTracksA");
  player2.gameboard = playerBBoard;
  player2.advgameboard = playerBTracksABoard;
  return [player1, player2];
}

function pickBetterCoord(existingCoord, player) {
  let coordArray = [];
  // when there is only one coordinate, checks at the 4 locations around the coordinate
  if (existingCoord.length === 1) {
    const splitIt = existingCoord[0].split(",");
    const initialX = Number(splitIt[0]);
    const initialY = Number(splitIt[1]);
    let north, south, west, east;
    if (initialX - 1 !== 0) {
      north = initialX - 1 + "," + initialY;
      if (player.advgameboard.coordinates[north] === 0) {
        coordArray.push(north);
      }
    }
    if (initialX + 1 !== 11) {
      south = initialX + 1 + "," + initialY;
      if (player.advgameboard.coordinates[south] === 0) {
        coordArray.push(south);
      }
    }

    if (initialY - 1 !== 0) {
      east = initialX + "," + (initialY - 1);
      if (player.advgameboard.coordinates[east] === 0) {
        coordArray.push(east);
      }
    }
    if (initialY + 1 !== 11) {
      west = initialX + "," + (initialY + 1);
      if (player.advgameboard.coordinates[east] === 0) {
        coordArray.push(west);
      }
    }
    // if there are more than 1 coordinate, checks the direction of the ship and then looks for possible locations on that direction
  } else {
    const arrayCoord = existingCoord;
    const first = arrayCoord[0].split(",");
    const second = arrayCoord[1].split(",");
    let direction;
    if (first[0] === second[0]) {
      direction = "horizontal";
    } else {
      direction = "vertical";
    }
    if (direction === "vertical") {
      const currentY = arrayCoord[0].split(",")[1];
      let arrayOfX = [];
      for (let i = 0; i < arrayCoord.length; i++) {
        arrayOfX.push(Number(arrayCoord[i].split(",")[0]));
      }
      arrayOfX.sort(sorter);
      let north, south;
      if (arrayOfX[0] - 1 !== 0) {
        north = arrayOfX[0] - 1 + "," + currentY;
        if (player.advgameboard.coordinates[north] === 0) {
          coordArray.push(north);
        }
      }
      if (arrayOfX[length - 1] + 1 !== 11) {
        south = arrayOfX[arrayOfX.length - 1] + 1 + "," + currentY;
        if (player.advgameboard.coordinates[south] === 0) {
          coordArray.push(south);
        }
      }
    } else {
      const currentX = arrayCoord[0].split(",")[0];
      let arrayOfY = [];
      for (let i = 0; i < arrayCoord.length; i++) {
        arrayOfY.push(Number(arrayCoord[i].split(",")[1]));
      }
      arrayOfY.sort(sorter);
      let east, west;
      if (arrayOfY[0] - 1 !== 0) {
        east = currentX + "," + (arrayOfY[0] - 1);
        if (player.advgameboard.coordinates[east] === 0) {
          coordArray.push(east);
        }
      }
      if (arrayOfY[length - 1] !== 11) {
        west = currentX + "," + (arrayOfY[arrayOfY.length - 1] + 1);
        if (player.advgameboard.coordinates[west] === 0) {
          coordArray.push(west);
        }
      }
    }
  }
  return coordArray;
}

const sorter = function (a, b) {
  return a - b;
};
