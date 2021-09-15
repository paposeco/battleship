import "./style.css";
import { startGame, setupPlayers, attack, gameLoop } from "./gameboard.js";

const playerBoard = document.getElementById("playerBoard");
const advBoard = document.getElementById("advBoard");
//i'm atributting coordinates do player's A ships, and changing them later according to user input
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

let gamestatus;
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
      const legalMove = checkConsecutiveSquares(divid, coordinates, shipLength);
      if (legalMove) {
        coordinates.push(divid);
        coordinatesLength = coordinates.length;
        e.target.classList.add("selectedA" + placed);
        e.target.classList.remove("notSelectedA");
        checkIfFinished(currentship, coordinates);
        if (coordinatesLength === shipLength) {
          alldivs.forEach(function (element) {
            element.removeEventListener("click", selectSquare);
          });
          if (placed < 5) {
            placeAllShips();
          }
        }
      } else {
        return;
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

  function checkConsecutiveSquares(
    currentselection,
    coordinatesarray,
    shiplength
  ) {
    let goodMove = false;
    if (coordinatesarray.length === 0) {
      const selectedCoord = currentselection.split("-");
      const selectedX = selectedCoord[0];
      const selectedY = selectedCoord[1];
      // a location so é valida se existerem espaços livres suficientes em cada direccao
      return true;
    }
    if (coordinatesarray.length === 1) {
      const coordinatesNumbers = coordinatesarray[0].split("-");
      const coordinatesX = Number(coordinatesNumbers[0]);
      const coordinatesY = Number(coordinatesNumbers[1]);
      const northCoord = coordinatesX - 1 + "-" + coordinatesY;

      const southCoord = coordinatesX + 1 + "-" + coordinatesY;
      const westCoord = coordinatesX + "-" + (coordinatesY - 1);
      const eastCoord = coordinatesX + "-" + (coordinatesY + 1);

      const legalMoves = [northCoord, southCoord, westCoord, eastCoord];

      // check for consecutive available spaces so that the ship fits

      for (let i = 0; i < legalMoves.length; i++) {
        if (currentselection === legalMoves[i]) {
          goodMove = true;
          break;
        } else {
          continue;
        }
      }
    } else {
      let coordinatesX = [];
      let coordinatesY = [];
      for (let i = 0; i < coordinatesarray.length; i++) {
        const separateCoord = coordinatesarray[i].split("-");
        coordinatesX.push(Number(separateCoord[0]));
        coordinatesY.push(Number(separateCoord[1]));
      }
      if (coordinatesX[0] === coordinatesX[1]) {
        //horizontal
        coordinatesY.sort();
        const westCoord = coordinatesX[0] + "-" + (coordinatesY[0] - 1);
        const eastCoord =
          coordinatesX[0] + "-" + (coordinatesY[coordinatesY.length - 1] + 1);
        if (currentselection === westCoord || currentselection === eastCoord) {
          goodMove = true;
        }
      } else {
        //vertical
        coordinatesX.sort();
        const northCoord = coordinatesX[0] - 1 + "-" + coordinatesY[0];
        const southCoord =
          coordinatesX[coordinatesX.length - 1] + 1 + "-" + coordinatesY[0];
        if (
          currentselection === northCoord ||
          currentselection === southCoord
        ) {
          goodMove = true;
        }
      }
    }
    return goodMove;
  }

  function checkIfShipFits(currentship, coord) {}

  function checkIfFinished(currentship, coord) {
    const divs = document.querySelectorAll(".selectedA" + placed);
    if (divs.length === currentship.length) {
      const arraycoord = coord;
      const newarraycoord = arraycoord.map((element) => [
        element.replace("-", ","),
      ]);
      playerA.ships[placed].coordinates = newarraycoord;
      for (let i = 0; i < newarraycoord.length; i++) {
        playerA.gameboard.coordinates[newarraycoord[i].toString()] = 1;
      }
      placed++;
      if (placed === 5) {
        continueplaying();
      }
    }
  }

  return { placeAllShips };
})();

selectShipLocation.placeAllShips();

const attackonclick = function (e) {
  const div = e.target;
  const divID = e.target.id;
  div.classList.add("selectedB");
  div.classList.remove("notSelectedB");
  const divcoord = [divID.replace("-", ",")];
  div.removeEventListener("click", attackonclick);
  gamestatus = gameLoop(divcoord, playerA, playerB);
  const advboard = document.getElementById("advBoard");
  const allemptydivs = advboard.querySelectorAll(".notSelectedB");
  allemptydivs.forEach((element) =>
    element.removeEventListener("click", attackonclick)
  );
  checkForEndOfGame();
  if (!gamestatus) {
    continueplaying();
  }
};

const continueplaying = function () {
  const info = document.getElementById("currentShip");
  info.textContent =
    "Attack the enemy by clicking on an empty square on the enemy board.";
  const advboard = document.getElementById("advBoard");
  const allemptydivs = advboard.querySelectorAll(".notSelectedB");
  allemptydivs.forEach((element) =>
    element.addEventListener("click", attackonclick)
  );
};

const checkForEndOfGame = function () {
  console.log(gamestatus);
  if (gamestatus) {
    const info = document.getElementById("currentShip");
    info.textContent = "GameOver";
    const advboard = document.getElementById("advBoard");
    const allemptydivs = advboard.querySelectorAll(".notSelectedB");
    allemptydivs.forEach((element) =>
      element.removeEventListener("click", attackonclick)
    );
  }
};

//to do

// remover a informacao que é para atacar.
// sempre que um navio se afundar dizer. e a quem é que o navio pertencia
// quando ha um hit escrever que ha para alem de mudar a cor
// mudar a cor desse navio
// manter a largura igual independente da extensao do texto
// legenda das cores e mudar as cores
// game over e dizer quem é que ganhou
// talvez melhorar o AI

// nao estou a verificar que os quadrados escolhidos sao cnsecutivos
