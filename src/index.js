import "./style.css";
import { startGame, setupPlayers, gameLoopPrompt } from "./gameboard.js";

const playerBoard = document.getElementById("playerBoard");
const advBoard = document.getElementById("advBoard");
let playerA = setupPlayers("playerA", [], {}, {});
let playerB = setupPlayers("playerB", [], {}, {});
const updatedPlayers = startGame(playerA, playerB);

playerA = updatedPlayers[0];
playerB = updatedPlayers[1];

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const divA = document.createElement("div");
    const divB = document.createElement("div");
    divA.setAttribute("id", i + "-" + j);
    divA.setAttribute("class", "hitBox playerA notSelectedA");
    divB.setAttribute("id", i + "-" + j);
    divB.setAttribute("class", "hitBox otherplayer notSelectedB");
    playerBoard.appendChild(divA);
    advBoard.appendChild(divB);
  }
}

// place ships

const selectShipLocation = (function () {
  let placed = 0;
  let coordinateArray;
  function placeShip(currentship) {
    let coordinates = [];
    const currentshiptitle = document.getElementById("currentShip");
    let coordinatesLength;
    const shipLength = currentship.length;
    const shipName = currentship.name;
    currentshiptitle.textContent = `Select ${shipLength} consecutive squares for placing your ${shipName}.`;
    const alldivs = document.querySelectorAll(".notSelectedA");
    function selectSquare(e) {
      const divid = e.target.id;
      coordinates.push(divid);
      coordinatesLength = coordinates.length;
      e.target.classList.add("selectedA" + placed);
      const finishedplacing = checkdivs(currentship);
      if (finishedplacing) {
        saveCoord(coordinates, currentship);
      }
      if (coordinates.length === shipLength) {
        alldivs.forEach(function (element) {
          element.removeEventListener("click", selectSquare);
        });
        while (placed < 5) {
          placeAllShips();
        }
      }
    }

    alldivs.forEach(function (element) {
      element.addEventListener("click", selectSquare);
    });
  }

  function placeAllShips() {
    const shipsToBePlaced = playerA.ships;
    placeShip(shipsToBePlaced[placed]);
  }

  function checkdivs(currentship) {
    const divs = document.querySelectorAll(".selectedA" + placed);
    if (divs.length === currentship.length) {
      placed++;
      return true;
    } else {
      return false;
    }
  }

  const saveCoord = function (coord, currentship) {
    const arraycoord = coord;
    arraycoord.map((element) => element.replace("-", ","));
    console.log(arraycoord);
  };
  return { placeAllShips };
})();

selectShipLocation.placeAllShips();

// for (let i = 0; i < playerA.ships.length; i++) {
//   const ship = playerA.ships[i];
//   const shipname = ship.name;
//   const shipcoordinates = ship.coordinates;
//   const sunkStatus = ship.sunk;
//   const array = [shipname, shipcoordinates, sunkStatus];
//   for (let j = 0; j < 3; j++) {
//     const para = document.createElement("p");
//     para.textContent = array[j];
//     playerBoard.appendChild(para);
//   }
// }
