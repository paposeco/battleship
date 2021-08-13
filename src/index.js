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
  const shipsToBePlaced = playerA.ships;
  const currentshiptitle = document.getElementById("currentShip");

  // se calhar tenho fazer um return dentro da funcao e correr ate um array ter o length que quero. posso seleccionar o currentship lendo o array
  function placeships(currentship) {
    let coordinates = [];
    const shipLength = currentship.length;
    const shipName = currentship.name;
    currentshiptitle.textContent = `Select ${shipLength} consecutive squares for placing your ${shipName}.`;
    const alldivs = document.querySelectorAll(".notSelectedA");
    const selectSquare = function (e) {
      const divid = e.target.id;
      coordinates.push(divid);
      e.target.classList.add("selectedA");
      if (coordinates.length === shipLength) {
        console.log(coordinates);
        alldivs.forEach(function (element) {
          element.removeEventListener("click", selectSquare);
        });
      }
    };

    alldivs.forEach(function (element) {
      element.addEventListener("click", selectSquare);
    });
  }
  placeships(shipsToBePlaced[0]).then(placeships(shipsToBePlaced[1]));
  //first ship
})();

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
