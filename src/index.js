import "./style.css";
import {
  startGame,
  setupPlayers,
  gameLoop,
  pickBetterCoord,
} from "./gameboard.js";
export { domPlayerB };

const playerBoard = document.getElementById("playerBoard");
const advBoard = document.getElementById("advBoard");
//i'm atributting coordinates do player's A ships, and changing them later according to user input
let playerA = setupPlayers("playerA", [], {}, {});
let playerB = setupPlayers("playerB", [], {}, {});
let nummoves = 0;
const updatedPlayers = startGame(playerA, playerB);

playerA = updatedPlayers[0];
playerB = updatedPlayers[1];

//onpageload

const topnumber = document.getElementById("topnumberJ");
const topnumberAdv = document.getElementById("topnumberJAdv");
for (let k = 0; k <= 10; k++) {
  const div = document.createElement("div");
  const diva = document.createElement("div");
  if (k === 0) {
    div.textContent = "";
    diva.textContent = "";
  } else {
    div.textContent = k;
    diva.textContent = k;
  }
  topnumber.appendChild(div);
  topnumberAdv.appendChild(diva);
}

const numberI = document.getElementById("numberI");
const numberIAdv = document.getElementById("numberIAdv");
for (let z = 1; z <= 10; z++) {
  const div = document.createElement("div");
  const diva = document.createElement("div");
  div.textContent = z;
  diva.textContent = z;
  numberI.appendChild(div);
  numberIAdv.appendChild(diva);
}

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
  function placeShip(currentship) {
    let coordinates = [];
    const currentshiptitle = document.getElementById("currentShip");
    let coordinatesLength;
    const shipLength = currentship.length;
    const shipName = currentship.name;
    if (shipName !== "Carrier") {
      increasefont();
      setTimeout(decreasefont, 600);
    }

    currentshiptitle.textContent = `Setup your fleet: select ${shipLength} consecutive spots for placing your ${shipName}.`;

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
          } else {
            const otherplayerdiv = document.getElementById("otherplayer");
            const fleetsdiv = document.getElementById("fleets");
            otherplayerdiv.style.visibility = "visible";
            fleetsdiv.style.visibility = "visible";
            createShipReference();
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

  function createShipReference() {
    const shipclasses = [
      "fleetcarrier",
      "fleetbattleship",
      "fleetdestroyer",
      "fleetsubmarine",
      "fleetpatrol",
    ];
    const shipNumberSquares = [5, 4, 3, 3, 2];

    for (let i = 0; i < shipNumberSquares.length; i++) {
      const currentdivSelector = "." + shipclasses[i];
      const currentdiv = document.querySelectorAll(currentdivSelector);
      currentdiv.forEach(function (node) {
        for (let j = 0; j < shipNumberSquares[i]; j++) {
          const div = document.createElement("div");
          div.setAttribute("class", "squarePlaced");
          node.appendChild(div);
        }
      });
    }
  }

  function placeAllShips() {
    const shipsToBePlaced = playerA.ships;
    placeShip(shipsToBePlaced[placed]);
  }

  function increasefont() {
    const shiptitle = document.getElementById("currentShip");
    shiptitle.style.fontSize = "18px";
  }
  function decreasefont() {
    const shiptitle = document.getElementById("currentShip");
    shiptitle.style.fontSize = "17px";
  }

  function checkConsecutiveSquares(
    currentselection,
    coordinatesarray,
    shiplength
  ) {
    let goodMove = false;
    if (coordinatesarray.length === 0) {
      // checks if it fits horizontally first and then vertically if necessary
      if (
        checkIfShipFitsHorizontally(
          shiplength,
          currentselection,
          coordinatesarray
        )
      ) {
        return true;
      } else if (
        checkIfShipFitsVertically(
          shiplength,
          currentselection,
          coordinatesarray
        )
      ) {
        return true;
      } else {
        return false;
      }
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

      if (legalMoves.includes(currentselection)) {
        // with current selection, the ship would be placed how?
        const currentSelectionSplit = currentselection.split("-");
        const currentSelectionX = Number(currentSelectionSplit[0]);
        const currentSelectionY = Number(currentSelectionSplit[1]);
        if (currentSelectionX === coordinatesX) {
          //horizontal
          if (
            checkIfShipFitsHorizontally(
              shiplength,
              currentselection,
              coordinatesarray
            )
          ) {
            goodMove = true;
          }
        } else {
          //vertical
          if (
            checkIfShipFitsVertically(
              shiplength,
              currentselection,
              coordinatesarray
            )
          ) {
            goodMove = true;
          }
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
        coordinatesY.sort(sorter);
        const westCoord = coordinatesX[0] + "-" + (coordinatesY[0] - 1);
        const eastCoord =
          coordinatesX[0] + "-" + (coordinatesY[coordinatesY.length - 1] + 1);
        if (currentselection === westCoord || currentselection === eastCoord) {
          goodMove = true;
        }
      } else {
        //vertical
        coordinatesX.sort(sorter);
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

  function checkIfShipFitsVertically(shiplength, coord, coordinatesarray) {
    const selectedCoord = coord.split("-");
    const selectedX = Number(selectedCoord[0]);
    const selectedY = Number(selectedCoord[1]);
    let availablespacesY = 0;
    for (let i = 0; i < shiplength; i++) {
      const nextDivID = selectedX + i + "-" + selectedY;
      const nextDivNode = document.getElementById(nextDivID);
      if (
        nextDivNode !== null &&
        nextDivNode.classList.contains("notSelectedA")
      ) {
        ++availablespacesY;
      }
    }

    for (let j = 0; j < shiplength; j++) {
      const previousDivID = selectedX - j + "-" + selectedY;
      const previousDivNode = document.getElementById(previousDivID);
      if (
        previousDivNode !== null &&
        previousDivNode.classList.contains("notSelectedA")
      ) {
        ++availablespacesY;
      }
    }

    if (availablespacesY >= shiplength - coordinatesarray.length) {
      return true;
    } else {
      return false;
    }
  }

  function checkIfShipFitsHorizontally(shiplength, coord, coordinatesarray) {
    const selectedCoord = coord.split("-");
    const selectedX = Number(selectedCoord[0]);
    const selectedY = Number(selectedCoord[1]);

    let availablespacesX = 0;
    for (let i = 0; i < shiplength; i++) {
      const nextDivID = selectedX + "-" + (selectedY + i);
      const nextDivNode = document.getElementById(nextDivID);
      if (
        nextDivNode !== null &&
        nextDivNode.classList.contains("notSelectedA")
      ) {
        ++availablespacesX;
      } else {
        break;
      }
    }

    for (let j = 0; j < shiplength; j++) {
      const previousDivID = selectedX + "-" + (selectedY - j);
      const previousDivNode = document.getElementById(previousDivID);
      if (
        previousDivNode !== null &&
        previousDivNode.classList.contains("notSelectedA")
      ) {
        ++availablespacesX;
      } else {
        break;
      }
    }
    if (availablespacesX >= shiplength - coordinatesarray.length) {
      return true;
    } else {
      return false;
    }
  }

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
  const newmove = document.createElement("h3");
  ++nummoves;

  if (div.classList.contains("hit")) {
    newmove.innerHTML = `<span class="movecounter">${nummoves}</span> [${divID}]: You have hit a ship!`;
    //newmove.textContent = `[${divID}]: You have hit a ship! `;
  } else {
    newmove.innerHTML = `<span class="movecounter">${nummoves}</span> [${divID}]: You missed`;
    //    newmove.textContent = `[${divID}]: You missed. `;
  }
  const movesDisplayed = document.querySelectorAll("#moves");
  const numberOfMoves = movesDisplayed[0].childNodes.length;
  if (numberOfMoves === 7) {
    movesDisplayed[0].removeChild(movesDisplayed[0].firstChild);
  }

  moves.appendChild(newmove);
  // moves.insertBefore(span, newmove);
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

const domPlayerB = function (hitormissBvsA, div, sunkornot) {
  div.classList.add("selectedbyB");
  if (hitormissBvsA === "hit" || hitormissBvsA === "gameover") {
    div.classList.add("hit");
  }
  const newmove = document.createElement("h3");
  newmove.setAttribute("class", "opponentmove");
  const moves = document.getElementById("moves");
  nummoves++;
  const divid = div.getAttribute("id");
  if (hitormissBvsA === "hit") {
    newmove.innerHTML = `<span class="movecounter">${nummoves}</span> [${divid}]: The computer hit one of your ships.`;
    if (sunkornot !== "standing") {
      const sunkedshipname = sunkornot.toLowerCase();
      const sunkedshipH3Id = sunkedshipname + "P";
      const shipOnDom = document.getElementById(sunkedshipH3Id);
      const shipReferenceDiv = shipOnDom.nextElementSibling;
      const alldivsInside = shipReferenceDiv.querySelectorAll("div");
      alldivsInside.forEach((div) => (div.style.backgroundColor = "lightgrey"));
      shipOnDom.classList.add("sunk");
      const sunkship = document.getElementById("sunkship");
      sunkship.textContent =
        "Latest casualty: Your " + sunkornot + " has sunk.";
    }
  } else if (hitormissBvsA === "miss") {
    newmove.innerHTML = `<span class="movecounter">${nummoves}</span> [${divid}]: The computer missed.`;
  }
  const movesDisplayed = document.querySelectorAll("#moves");
  const numberOfMoves = movesDisplayed[0].childNodes.length;
  if (numberOfMoves === 7) {
    movesDisplayed[0].removeChild(movesDisplayed[0].firstChild);
  }
  moves.appendChild(newmove);
};

const checkForEndOfGame = function () {
  if (gamestatus) {
    const advboard = document.getElementById("advBoard");
    const allemptydivs = advboard.querySelectorAll(".notSelectedB");
    allemptydivs.forEach((element) =>
      element.removeEventListener("click", attackonclick)
    );
  }
};

const sorter = function (a, b) {
  return a - b;
};
