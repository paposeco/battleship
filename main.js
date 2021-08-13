/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  width: max-content;\n  height: 600px;\n  margin: 200px auto;\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n.selectedA {\n  background-color: darkgreen;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":["body {\n  width: max-content;\n  height: 600px;\n  margin: 200px auto;\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n.selectedA {\n  background-color: darkgreen;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "setupPlayers": () => (/* binding */ setupPlayers)
/* harmony export */ });
/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ "./src/ships.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");




//const createShipFleet = require("./ships.js");
//const createPlayer = require("./player.js");

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

const setupBoard = function (player, playerobj) {
  let newBoard = createGameboard(player);
  const shipFleet = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.createShipFleet)(player);
  playerobj.ships = shipFleet;
  placeShips.changeBoard(newBoard, shipFleet[0]);
  placeShips.changeBoard(newBoard, shipFleet[1]);
  placeShips.changeBoard(newBoard, shipFleet[2]);
  placeShips.changeBoard(newBoard, shipFleet[3]);
  placeShips.changeBoard(newBoard, shipFleet[4]);
  displayboard(newBoard);
  return newBoard;
};

const setupPlayers = function (player, ships, gameboard, advgameboard) {
  const newplayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.createPlayer)(player, ships, gameboard, advgameboard);
  return newplayer;
};

const attack = function (attacker, victim, coordinates) {
  const victimsBoard = victim.gameboard;
  const attackerAdvBoard = attacker.advgameboard;
  const victimsFleet = victim.ships;
  const boardStatusOnCoordinates = victimsBoard.coordinates[coordinates];
  const transformedCoordinates = [coordinates[0] + "," + coordinates[1]];
  if (boardStatusOnCoordinates === 1) {
    console.log("hit");
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
        if (victimsFleet[i].sunk) {
          console.log("ship sunk: " + victimsFleet[i].name);
          const sunkenShips = countSunkenShips(victimsFleet);
          if (sunkenShips === 5) {
            console.log("gameover");
            return "gameover";
          }
        }
        return "hit";
      }
    }
  } else {
    console.log("miss");
    victimsBoard.coordinates[coordinates] = "m";
    attackerAdvBoard.coordinates[coordinates] = "m";
    return "miss";
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

const displayboard = function (currentboard) {
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

// function gameLoopPrompt() {
//   let stop = false;
//   //player A picks a coordinate
//   const prompt = require("prompt-sync")();
//   console.log("player A checks B's board");
//   displayboard(playerA.advgameboard);
//   const locationFromPrompt = prompt("Pick a location ");
//   let location;
//   if (locationFromPrompt.includes("d")) {
//     const dlocation = locationFromPrompt.indexOf("d");
//     if (dlocation === 0) {
//       if (locationFromPrompt[1] === "d") {
//         location = [10, 10];
//       } else {
//         location = [10, Number(locationFromPrompt[1])];
//       }
//     } else {
//       location = [Number(locationFromPrompt[0]), 10];
//     }
//   } else {
//     location = [Number(locationFromPrompt[0]), Number(locationFromPrompt[1])];
//   }
//   console.log("Location selected: " + location);
//   // player A attacks
//   const hitormissAvsB = attack(playerA, playerB, location);

//   if (hitormissAvsB === "gameover") {
//     stop = true;
//     return stop;
//   }
//   console.log("after A attacks, status on B's board from A's POV");
//   displayboard(playerA.advgameboard);

//   //player B picks a coordinate
//   console.log("player B checks A's board");
//   displayboard(playerB.advgameboard);

//   const selectedLocationRaw = pickLocation(
//     playerB.advgameboard.coordinates
//   ).split(",");
//   const selectedLocation = [
//     Number(selectedLocationRaw[0]),
//     Number(selectedLocationRaw[1]),
//   ];
//   console.log("Location selected: " + selectedLocation);
//   //player B attacks

//   const hitormissBvsA = attack(playerB, playerA, selectedLocation);
//   if (hitormissBvsA === "gameover") {
//     stop = true;
//     return stop;
//   }
//   console.log("after B attacks, status on A's board from B's POV");
//   displayboard(playerB.advgameboard);
//   return stop;
// }

// const playerA = setupPlayers("playerA", [], {}, {});
// const playerB = setupPlayers("playerB", [], {}, {});

// const startGame = function () {
//   const playerABoard = setupBoard("playerA", playerA);
//   const playerATracksBBoard = createGameboard("playerATracksB");
//   playerA.gameboard = playerABoard;
//   playerA.advgameboard = playerATracksBBoard;
//   const playerBBoard = setupBoard("playerB", playerB);
//   const playerBTracksABoard = createGameboard("playerBTracksA");
//   playerB.gameboard = playerBBoard;
//   playerB.advgameboard = playerBTracksABoard;
// };

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

//startGame();

// let loopit = gameLoopPrompt();
// while (!loopit) {
//   loopit = gameLoopPrompt();
// }


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer)
/* harmony export */ });


class Player {
  constructor(name, ships, gameboard, advgameboard) {
    this.name = name;
    this.ships = ships;
    this.gameboard = gameboard;
    this.advgameboard = advgameboard;
  }
}

const createPlayer = function (player, ships, gameboard, advgameboard) {
  const newplayer = new Player(player, ships, gameboard, advgameboard);
  return newplayer;
};

//module.exports = createPlayer;


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShipFleet": () => (/* binding */ createShipFleet)
/* harmony export */ });


const createArrayHits = function (length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(0);
  }
  return array;
};

const checkIfSunk = function (hitsarray) {
  //console.log(hitsarray);
  if (hitsarray.find((element) => element === 0) === undefined) {
    return true;
  } else {
    return false;
  }
};

const createShip = function (length, name, player) {
  class Ship {
    constructor(length, name, player) {
      this.length = length;
      this.player = player;
      this.name = name + " " + player;
      this.hits = createArrayHits(this.length);
      this.sunk = checkIfSunk(this.hits);
      this.coordinates = [];
    }
    hit(index) {
      this.hits[index] = 1;
      this.sunk = checkIfSunk(this.hits);
    }
  }
  const shipcreated = new Ship(length, name, player);
  return shipcreated;
};

const createShipFleet = function (player) {
  const carrier = createShip(5, "carrier", player);
  const battleship = createShip(4, "battleship", player);
  const destroyer = createShip(3, "destroyer", player);
  const submarine = createShip(3, "submarine", player);
  const patrolboat = createShip(2, "patrolboat", player);
  const shiparray = [carrier, battleship, destroyer, submarine, patrolboat];
  return shiparray;
};

// for node
//module.exports = shipFleet;

// ships should probably have a unique id


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");



const playerBoard = document.getElementById("playerBoard");
const advBoard = document.getElementById("advBoard");
let playerA = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.setupPlayers)("playerA", [], {}, {});
let playerB = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.setupPlayers)("playerB", [], {}, {});
const updatedPlayers = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.startGame)(playerA, playerB);

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luOiAyMDBweCBhdXRvO1xcbn1cXG5cXG4jYmF0dGxlZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDUwcHg7XFxufVxcbi5oaXRCb3gge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jYWR2Qm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWRBIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDIwMHB4IGF1dG87XFxufVxcblxcbiNiYXR0bGVmaWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNTBweDtcXG59XFxuLmhpdEJveCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbiNhZHZCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zZWxlY3RlZEEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlU2hpcEZsZWV0IH0gZnJvbSBcIi4vc2hpcHMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuZXhwb3J0IHsgc3RhcnRHYW1lLCBzZXR1cFBsYXllcnMgfTtcblxuLy9jb25zdCBjcmVhdGVTaGlwRmxlZXQgPSByZXF1aXJlKFwiLi9zaGlwcy5qc1wiKTtcbi8vY29uc3QgY3JlYXRlUGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyLmpzXCIpO1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIGNvbnN0IGJvYXJkT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICBvYmpbaSArIFwiLFwiICsgal0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuICBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzID0gYm9hcmRPYmplY3QoKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZChwbGF5ZXIpO1xuICByZXR1cm4gZ2FtZWJvYXJkO1xufTtcblxuY29uc3QgZ2V0UmFuZG9tSW50SW5jbHVzaXZlID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuY29uc3QgcGlja0xvY2F0aW9uID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBvYmpWYWx1ZXMgPSBPYmplY3QudmFsdWVzKG9iaik7XG4gIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBsZXQgZW1wdHlMb2NhdGlvbnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob2JqVmFsdWVzW2ldID09PSAwKSB7XG4gICAgICBlbXB0eUxvY2F0aW9ucy5wdXNoKG9iaktleXNbaV0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBudW1iZXJFbXB0eUxvY2F0aW9ucyA9IGVtcHR5TG9jYXRpb25zLmxlbmd0aDtcbiAgY29uc3QgcGlja1JhbmRvbUxvY2F0aW9uID1cbiAgICBlbXB0eUxvY2F0aW9uc1tnZXRSYW5kb21JbnRJbmNsdXNpdmUoMCwgbnVtYmVyRW1wdHlMb2NhdGlvbnMgLSAxKV07XG4gIHJldHVybiBwaWNrUmFuZG9tTG9jYXRpb247XG59O1xuXG5jb25zdCBwbGFjZVNoaXBzID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHJhbmRvbUxvY2F0aW9uO1xuICBsZXQgcm93O1xuICBsZXQgY29sdW1uO1xuXG4gIGNvbnN0IGxvY2F0aW9uc0FycmF5ID0gZnVuY3Rpb24gKGN1cnJlbnRib2FyZCwgY3VycmVudHNoaXAsIG9yaWVudGF0aW9uKSB7XG4gICAgbGV0IG5ld3Bvc2l0aW9uO1xuICAgIGxldCBmaXhlZHBvc2l0aW9uO1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJyb3dcIikge1xuICAgICAgbmV3cG9zaXRpb24gPSBjb2x1bW47XG4gICAgICBmaXhlZHBvc2l0aW9uID0gcm93O1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdwb3NpdGlvbiA9IHJvdztcbiAgICAgIGZpeGVkcG9zaXRpb24gPSBjb2x1bW47XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY3VycmVudHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaWZ0ZWQgPSBuZXdwb3NpdGlvbiAtIGk7XG4gICAgICBpZiAoc2hpZnRlZCA8IDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgbG9jYXRpb247XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwicm93XCIpIHtcbiAgICAgICAgbG9jYXRpb24gPSBmaXhlZHBvc2l0aW9uICsgXCIsXCIgKyBzaGlmdGVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24gPSBzaGlmdGVkICsgXCIsXCIgKyBmaXhlZHBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdHVzT25Mb2NhdGlvbiA9IGN1cnJlbnRib2FyZC5jb29yZGluYXRlc1tsb2NhdGlvbl07XG4gICAgICBpZiAoc3RhdHVzT25Mb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICBhcnJheS5wdXNoKHNoaWZ0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IGN1cnJlbnRzaGlwLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBzaGlmdGVkID0gbmV3cG9zaXRpb24gKyBqO1xuICAgICAgaWYgKHNoaWZ0ZWQgPiAxMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBsb2NhdGlvbjtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJyb3dcIikge1xuICAgICAgICBsb2NhdGlvbiA9IGZpeGVkcG9zaXRpb24gKyBcIixcIiArIHNoaWZ0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbiA9IHNoaWZ0ZWQgKyBcIixcIiArIGZpeGVkcG9zaXRpb247XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0dXNPbkxvY2F0aW9uID0gY3VycmVudGJvYXJkLmNvb3JkaW5hdGVzW2xvY2F0aW9uXTtcbiAgICAgIGlmIChzdGF0dXNPbkxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgIGFycmF5LnB1c2goc2hpZnRlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfTtcblxuICBjb25zdCBzdW1TZXF1ZW5jZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYjsgaSsrKSB7XG4gICAgICBzdW0gKz0gYSArIGk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG4gIH07XG5cbiAgY29uc3QgY29uc2VjdXRpdmVOdW1iZXJzID0gZnVuY3Rpb24gKGFycmF5LCBjdXJyZW50c2hpcGxlbmd0aCkge1xuICAgIGxldCBnb29kc3BvdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBiZWdpbm5pbmdPZlNoaXAgPSBhcnJheVtpXTtcbiAgICAgIC8vdGhlIGZpcnN0IHBvc2l0aW9uIGFsc28gY291bnRzXG4gICAgICBjb25zdCBlbmRPZlNoaXAgPSBiZWdpbm5pbmdPZlNoaXAgKyBjdXJyZW50c2hpcGxlbmd0aCAtIDE7XG4gICAgICBpZiAoZW5kT2ZTaGlwID4gYXJyYXlbYXJyYXkubGVuZ3RoXSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnNlY3V0aXZlID0gc3VtU2VxdWVuY2UoYmVnaW5uaW5nT2ZTaGlwLCBlbmRPZlNoaXApO1xuXG4gICAgICBjb25zdCBpbmFycmF5ID0gc3VtU2VxdWVuY2UoXG4gICAgICAgIGJlZ2lubmluZ09mU2hpcCxcbiAgICAgICAgYXJyYXlbaSArIGN1cnJlbnRzaGlwbGVuZ3RoIC0gMV1cbiAgICAgICk7XG4gICAgICBpZiAoY29uc2VjdXRpdmUgPT09IGluYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGJlZ2lubmluZ09mU2hpcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdvb2RzcG90ID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ29vZHNwb3Q7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZU51bWJlcnMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfTtcblxuICBjb25zdCBjaGVja0ZvckZpdCA9IGZ1bmN0aW9uIChjdXJyZW50c2hpcCwgY3VycmVudGJvYXJkKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbml0aWFsTG9jYXRpb24gPSByb3cgKyBcIixcIiArIGNvbHVtbjtcbiAgICBjb25zdCBhdmFpbGFibGVTcGFjZXNSb3cgPSBsb2NhdGlvbnNBcnJheShjdXJyZW50Ym9hcmQsIGN1cnJlbnRzaGlwLCBcInJvd1wiKVxuICAgICAgLmNvbmNhdChjb2x1bW4pXG4gICAgICAuc29ydChjb21wYXJlTnVtYmVycyk7XG4gICAgY29uc3QgYXZhaWxhYmxlU3BhY2VzQ29sdW1uID0gbG9jYXRpb25zQXJyYXkoXG4gICAgICBjdXJyZW50Ym9hcmQsXG4gICAgICBjdXJyZW50c2hpcCxcbiAgICAgIFwiY29sdW1uXCJcbiAgICApXG4gICAgICAuY29uY2F0KHJvdylcbiAgICAgIC5zb3J0KGNvbXBhcmVOdW1iZXJzKTtcblxuICAgIGlmIChyb3cgJSAyID09PSAxKSB7XG4gICAgICBpZiAoYXZhaWxhYmxlU3BhY2VzUm93Lmxlbmd0aCA8IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgICBpZiAoYXZhaWxhYmxlU3BhY2VzQ29sdW1uLmxlbmd0aCA8IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdGFydHBvc2l0aW9uID0gY29uc2VjdXRpdmVOdW1iZXJzKFxuICAgICAgICAgICAgYXZhaWxhYmxlU3BhY2VzQ29sdW1uLFxuICAgICAgICAgICAgY3VycmVudHNoaXAubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIXN0YXJ0cG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBcImZhaWxzIGNoZWNrXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbc3RhcnRwb3NpdGlvbiwgY29sdW1uLCBcInZlcnRpY2FsXCJdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGFydHBvc2l0aW9uID0gY29uc2VjdXRpdmVOdW1iZXJzKFxuICAgICAgICAgIGF2YWlsYWJsZVNwYWNlc1JvdyxcbiAgICAgICAgICBjdXJyZW50c2hpcC5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFzdGFydHBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIFwiZmFpbHMgY2hlY2tcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3Jvdywgc3RhcnRwb3NpdGlvbiwgXCJob3Jpem9udGFsXCJdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXZhaWxhYmxlU3BhY2VzQ29sdW1uLmxlbmd0aCA8IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgICBpZiAoYXZhaWxhYmxlU3BhY2VzUm93Lmxlbmd0aCA8IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdGFydHBvc2l0aW9uID0gY29uc2VjdXRpdmVOdW1iZXJzKFxuICAgICAgICAgICAgYXZhaWxhYmxlU3BhY2VzUm93LFxuICAgICAgICAgICAgY3VycmVudHNoaXAubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIXN0YXJ0cG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBcImZhaWxzIGNoZWNrXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbcm93LCBzdGFydHBvc2l0aW9uLCBcImhvcml6b250YWxcIl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0cG9zaXRpb24gPSBjb25zZWN1dGl2ZU51bWJlcnMoXG4gICAgICAgICAgYXZhaWxhYmxlU3BhY2VzQ29sdW1uLFxuICAgICAgICAgIGN1cnJlbnRzaGlwLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAoIXN0YXJ0cG9zaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gXCJmYWlscyBjaGVja1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbc3RhcnRwb3NpdGlvbiwgY29sdW1uLCBcInZlcnRpY2FsXCJdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hhbmdlQm9hcmQgPSBmdW5jdGlvbiAoYm9hcmRvYmosIGN1cnJlbnRzaGlwKSB7XG4gICAgcmFuZG9tTG9jYXRpb24gPSBwaWNrTG9jYXRpb24oYm9hcmRvYmouY29vcmRpbmF0ZXMpLnNwbGl0KFwiLFwiKTtcbiAgICByb3cgPSBOdW1iZXIocmFuZG9tTG9jYXRpb25bMF0pO1xuICAgIGNvbHVtbiA9IE51bWJlcihyYW5kb21Mb2NhdGlvblsxXSk7XG4gICAgY29uc3Qgc2VsZWN0SW5pdGlhbFBsYWNlbWVudCA9IGNoZWNrRm9yRml0KGN1cnJlbnRzaGlwLCBib2FyZG9iaik7XG4gICAgaWYgKHNlbGVjdEluaXRpYWxQbGFjZW1lbnQgPT09IFwiZmFpbHMgY2hlY2tcIikge1xuICAgICAgcmV0dXJuIGNoYW5nZUJvYXJkKGJvYXJkb2JqLCBjdXJyZW50c2hpcCk7XG4gICAgfVxuICAgIGlmICghc2VsZWN0SW5pdGlhbFBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIFwiRVJST1IgRVJST1JcIjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudHNoaXBsZW5ndGggPSBjdXJyZW50c2hpcC5sZW5ndGg7XG4gICAgY29uc3QgYm9hdE9yaWVudGF0aW9uID0gc2VsZWN0SW5pdGlhbFBsYWNlbWVudFsyXTtcbiAgICBsZXQgY29vcmRpbmF0ZXNUb0NoYW5nZSA9IFtdO1xuICAgIGlmIChib2F0T3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50c2hpcGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5ld2Nvb3JkID0gW1xuICAgICAgICAgIE51bWJlcihzZWxlY3RJbml0aWFsUGxhY2VtZW50WzBdKSArXG4gICAgICAgICAgICBpICtcbiAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgIHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMV0sXG4gICAgICAgIF07XG4gICAgICAgIGNvb3JkaW5hdGVzVG9DaGFuZ2UucHVzaChuZXdjb29yZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudHNoaXBsZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBuZXdjb29yZCA9IFtcbiAgICAgICAgICBzZWxlY3RJbml0aWFsUGxhY2VtZW50WzBdICtcbiAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgIChOdW1iZXIoc2VsZWN0SW5pdGlhbFBsYWNlbWVudFsxXSkgKyBqKSxcbiAgICAgICAgXTtcbiAgICAgICAgY29vcmRpbmF0ZXNUb0NoYW5nZS5wdXNoKG5ld2Nvb3JkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb29yZGluYXRlc1RvQ2hhbmdlLmxlbmd0aDsgaysrKSB7XG4gICAgICBib2FyZG9iai5jb29yZGluYXRlc1tjb29yZGluYXRlc1RvQ2hhbmdlW2tdXSA9IDE7XG4gICAgICBjdXJyZW50c2hpcC5jb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzVG9DaGFuZ2Vba10pO1xuICAgIH1cbiAgICByZXR1cm4gXCJkb25lXCI7XG4gIH07XG4gIHJldHVybiB7IGNoYW5nZUJvYXJkIH07XG59KSgpO1xuXG5jb25zdCBzZXR1cEJvYXJkID0gZnVuY3Rpb24gKHBsYXllciwgcGxheWVyb2JqKSB7XG4gIGxldCBuZXdCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChwbGF5ZXIpO1xuICBjb25zdCBzaGlwRmxlZXQgPSBjcmVhdGVTaGlwRmxlZXQocGxheWVyKTtcbiAgcGxheWVyb2JqLnNoaXBzID0gc2hpcEZsZWV0O1xuICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbMF0pO1xuICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbMV0pO1xuICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbMl0pO1xuICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbM10pO1xuICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbNF0pO1xuICBkaXNwbGF5Ym9hcmQobmV3Qm9hcmQpO1xuICByZXR1cm4gbmV3Qm9hcmQ7XG59O1xuXG5jb25zdCBzZXR1cFBsYXllcnMgPSBmdW5jdGlvbiAocGxheWVyLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpIHtcbiAgY29uc3QgbmV3cGxheWVyID0gY3JlYXRlUGxheWVyKHBsYXllciwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKTtcbiAgcmV0dXJuIG5ld3BsYXllcjtcbn07XG5cbmNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uIChhdHRhY2tlciwgdmljdGltLCBjb29yZGluYXRlcykge1xuICBjb25zdCB2aWN0aW1zQm9hcmQgPSB2aWN0aW0uZ2FtZWJvYXJkO1xuICBjb25zdCBhdHRhY2tlckFkdkJvYXJkID0gYXR0YWNrZXIuYWR2Z2FtZWJvYXJkO1xuICBjb25zdCB2aWN0aW1zRmxlZXQgPSB2aWN0aW0uc2hpcHM7XG4gIGNvbnN0IGJvYXJkU3RhdHVzT25Db29yZGluYXRlcyA9IHZpY3RpbXNCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc107XG4gIGNvbnN0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSBbY29vcmRpbmF0ZXNbMF0gKyBcIixcIiArIGNvb3JkaW5hdGVzWzFdXTtcbiAgaWYgKGJvYXJkU3RhdHVzT25Db29yZGluYXRlcyA9PT0gMSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGl0XCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmljdGltc0ZsZWV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBhcnJheU9mQ29vcmRpbmF0ZXMgPSB2aWN0aW1zRmxlZXRbaV0uY29vcmRpbmF0ZXMuZmxhdCgpO1xuICAgICAgY29uc3QgaXNJdFRoaXNTaGlwID0gYXJyYXlPZkNvb3JkaW5hdGVzLmluY2x1ZGVzKFxuICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzWzBdXG4gICAgICApO1xuICAgICAgaWYgKGlzSXRUaGlzU2hpcCkge1xuICAgICAgICBjb25zdCBoaXRJbmRleCA9IGFycmF5T2ZDb29yZGluYXRlcy5maW5kSW5kZXgoXG4gICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXNbMF1cbiAgICAgICAgKTtcbiAgICAgICAgdmljdGltc0ZsZWV0W2ldLmhpdChoaXRJbmRleCk7XG4gICAgICAgIHZpY3RpbXNCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcInhcIjtcbiAgICAgICAgYXR0YWNrZXJBZHZCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcInhcIjtcbiAgICAgICAgdmljdGltc0ZsZWV0W2ldLmhpdHM7XG4gICAgICAgIGlmICh2aWN0aW1zRmxlZXRbaV0uc3Vuaykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hpcCBzdW5rOiBcIiArIHZpY3RpbXNGbGVldFtpXS5uYW1lKTtcbiAgICAgICAgICBjb25zdCBzdW5rZW5TaGlwcyA9IGNvdW50U3Vua2VuU2hpcHModmljdGltc0ZsZWV0KTtcbiAgICAgICAgICBpZiAoc3Vua2VuU2hpcHMgPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZW92ZXJcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJnYW1lb3ZlclwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJtaXNzXCIpO1xuICAgIHZpY3RpbXNCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcIm1cIjtcbiAgICBhdHRhY2tlckFkdkJvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXSA9IFwibVwiO1xuICAgIHJldHVybiBcIm1pc3NcIjtcbiAgfVxufTtcblxuY29uc3QgY291bnRTdW5rZW5TaGlwcyA9IGZ1bmN0aW9uIChhcnJheSkge1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2hpcCA9IGFycmF5W2ldO1xuICAgIGNvbnN0IHN1bmsgPSBzaGlwLnN1bms7XG4gICAgaWYgKHN1bmspIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb3VudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlib2FyZCA9IGZ1bmN0aW9uIChjdXJyZW50Ym9hcmQpIHtcbiAgY29uc29sZS5sb2coXCIgXCIpO1xuICBjb25zdCBjb29yZCA9IGN1cnJlbnRib2FyZC5jb29yZGluYXRlcztcbiAgY29uc29sZS5sb2coMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgXCJkXCIpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgaWYgKGkgPT09IDEwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDFdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyAyXSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgM10sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDRdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA1XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgNl0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDddLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA4XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgOV0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDEwXVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGksXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyAxXSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDJdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgM10sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA0XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDVdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgNl0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA3XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDhdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgOV0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyAxMF1cbiAgICApO1xuICB9XG59O1xuXG4vLyBmdW5jdGlvbiBnYW1lTG9vcFByb21wdCgpIHtcbi8vICAgbGV0IHN0b3AgPSBmYWxzZTtcbi8vICAgLy9wbGF5ZXIgQSBwaWNrcyBhIGNvb3JkaW5hdGVcbi8vICAgY29uc3QgcHJvbXB0ID0gcmVxdWlyZShcInByb21wdC1zeW5jXCIpKCk7XG4vLyAgIGNvbnNvbGUubG9nKFwicGxheWVyIEEgY2hlY2tzIEIncyBib2FyZFwiKTtcbi8vICAgZGlzcGxheWJvYXJkKHBsYXllckEuYWR2Z2FtZWJvYXJkKTtcbi8vICAgY29uc3QgbG9jYXRpb25Gcm9tUHJvbXB0ID0gcHJvbXB0KFwiUGljayBhIGxvY2F0aW9uIFwiKTtcbi8vICAgbGV0IGxvY2F0aW9uO1xuLy8gICBpZiAobG9jYXRpb25Gcm9tUHJvbXB0LmluY2x1ZGVzKFwiZFwiKSkge1xuLy8gICAgIGNvbnN0IGRsb2NhdGlvbiA9IGxvY2F0aW9uRnJvbVByb21wdC5pbmRleE9mKFwiZFwiKTtcbi8vICAgICBpZiAoZGxvY2F0aW9uID09PSAwKSB7XG4vLyAgICAgICBpZiAobG9jYXRpb25Gcm9tUHJvbXB0WzFdID09PSBcImRcIikge1xuLy8gICAgICAgICBsb2NhdGlvbiA9IFsxMCwgMTBdO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgbG9jYXRpb24gPSBbMTAsIE51bWJlcihsb2NhdGlvbkZyb21Qcm9tcHRbMV0pXTtcbi8vICAgICAgIH1cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgbG9jYXRpb24gPSBbTnVtYmVyKGxvY2F0aW9uRnJvbVByb21wdFswXSksIDEwXTtcbi8vICAgICB9XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgbG9jYXRpb24gPSBbTnVtYmVyKGxvY2F0aW9uRnJvbVByb21wdFswXSksIE51bWJlcihsb2NhdGlvbkZyb21Qcm9tcHRbMV0pXTtcbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIHNlbGVjdGVkOiBcIiArIGxvY2F0aW9uKTtcbi8vICAgLy8gcGxheWVyIEEgYXR0YWNrc1xuLy8gICBjb25zdCBoaXRvcm1pc3NBdnNCID0gYXR0YWNrKHBsYXllckEsIHBsYXllckIsIGxvY2F0aW9uKTtcblxuLy8gICBpZiAoaGl0b3JtaXNzQXZzQiA9PT0gXCJnYW1lb3ZlclwiKSB7XG4vLyAgICAgc3RvcCA9IHRydWU7XG4vLyAgICAgcmV0dXJuIHN0b3A7XG4vLyAgIH1cbi8vICAgY29uc29sZS5sb2coXCJhZnRlciBBIGF0dGFja3MsIHN0YXR1cyBvbiBCJ3MgYm9hcmQgZnJvbSBBJ3MgUE9WXCIpO1xuLy8gICBkaXNwbGF5Ym9hcmQocGxheWVyQS5hZHZnYW1lYm9hcmQpO1xuXG4vLyAgIC8vcGxheWVyIEIgcGlja3MgYSBjb29yZGluYXRlXG4vLyAgIGNvbnNvbGUubG9nKFwicGxheWVyIEIgY2hlY2tzIEEncyBib2FyZFwiKTtcbi8vICAgZGlzcGxheWJvYXJkKHBsYXllckIuYWR2Z2FtZWJvYXJkKTtcblxuLy8gICBjb25zdCBzZWxlY3RlZExvY2F0aW9uUmF3ID0gcGlja0xvY2F0aW9uKFxuLy8gICAgIHBsYXllckIuYWR2Z2FtZWJvYXJkLmNvb3JkaW5hdGVzXG4vLyAgICkuc3BsaXQoXCIsXCIpO1xuLy8gICBjb25zdCBzZWxlY3RlZExvY2F0aW9uID0gW1xuLy8gICAgIE51bWJlcihzZWxlY3RlZExvY2F0aW9uUmF3WzBdKSxcbi8vICAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvblJhd1sxXSksXG4vLyAgIF07XG4vLyAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gc2VsZWN0ZWQ6IFwiICsgc2VsZWN0ZWRMb2NhdGlvbik7XG4vLyAgIC8vcGxheWVyIEIgYXR0YWNrc1xuXG4vLyAgIGNvbnN0IGhpdG9ybWlzc0J2c0EgPSBhdHRhY2socGxheWVyQiwgcGxheWVyQSwgc2VsZWN0ZWRMb2NhdGlvbik7XG4vLyAgIGlmIChoaXRvcm1pc3NCdnNBID09PSBcImdhbWVvdmVyXCIpIHtcbi8vICAgICBzdG9wID0gdHJ1ZTtcbi8vICAgICByZXR1cm4gc3RvcDtcbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZyhcImFmdGVyIEIgYXR0YWNrcywgc3RhdHVzIG9uIEEncyBib2FyZCBmcm9tIEIncyBQT1ZcIik7XG4vLyAgIGRpc3BsYXlib2FyZChwbGF5ZXJCLmFkdmdhbWVib2FyZCk7XG4vLyAgIHJldHVybiBzdG9wO1xuLy8gfVxuXG4vLyBjb25zdCBwbGF5ZXJBID0gc2V0dXBQbGF5ZXJzKFwicGxheWVyQVwiLCBbXSwge30sIHt9KTtcbi8vIGNvbnN0IHBsYXllckIgPSBzZXR1cFBsYXllcnMoXCJwbGF5ZXJCXCIsIFtdLCB7fSwge30pO1xuXG4vLyBjb25zdCBzdGFydEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4vLyAgIGNvbnN0IHBsYXllckFCb2FyZCA9IHNldHVwQm9hcmQoXCJwbGF5ZXJBXCIsIHBsYXllckEpO1xuLy8gICBjb25zdCBwbGF5ZXJBVHJhY2tzQkJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyQVRyYWNrc0JcIik7XG4vLyAgIHBsYXllckEuZ2FtZWJvYXJkID0gcGxheWVyQUJvYXJkO1xuLy8gICBwbGF5ZXJBLmFkdmdhbWVib2FyZCA9IHBsYXllckFUcmFja3NCQm9hcmQ7XG4vLyAgIGNvbnN0IHBsYXllckJCb2FyZCA9IHNldHVwQm9hcmQoXCJwbGF5ZXJCXCIsIHBsYXllckIpO1xuLy8gICBjb25zdCBwbGF5ZXJCVHJhY2tzQUJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyQlRyYWNrc0FcIik7XG4vLyAgIHBsYXllckIuZ2FtZWJvYXJkID0gcGxheWVyQkJvYXJkO1xuLy8gICBwbGF5ZXJCLmFkdmdhbWVib2FyZCA9IHBsYXllckJUcmFja3NBQm9hcmQ7XG4vLyB9O1xuXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBwbGF5ZXJBQm9hcmQgPSBzZXR1cEJvYXJkKFwicGxheWVyQVwiLCBwbGF5ZXIxKTtcbiAgY29uc3QgcGxheWVyQVRyYWNrc0JCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcInBsYXllckFUcmFja3NCXCIpO1xuICBwbGF5ZXIxLmdhbWVib2FyZCA9IHBsYXllckFCb2FyZDtcbiAgcGxheWVyMS5hZHZnYW1lYm9hcmQgPSBwbGF5ZXJBVHJhY2tzQkJvYXJkO1xuICBjb25zdCBwbGF5ZXJCQm9hcmQgPSBzZXR1cEJvYXJkKFwicGxheWVyQlwiLCBwbGF5ZXIyKTtcbiAgY29uc3QgcGxheWVyQlRyYWNrc0FCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcInBsYXllckJUcmFja3NBXCIpO1xuICBwbGF5ZXIyLmdhbWVib2FyZCA9IHBsYXllckJCb2FyZDtcbiAgcGxheWVyMi5hZHZnYW1lYm9hcmQgPSBwbGF5ZXJCVHJhY2tzQUJvYXJkO1xuICByZXR1cm4gW3BsYXllcjEsIHBsYXllcjJdO1xufVxuXG4vL3N0YXJ0R2FtZSgpO1xuXG4vLyBsZXQgbG9vcGl0ID0gZ2FtZUxvb3BQcm9tcHQoKTtcbi8vIHdoaWxlICghbG9vcGl0KSB7XG4vLyAgIGxvb3BpdCA9IGdhbWVMb29wUHJvbXB0KCk7XG4vLyB9XG4iLCJleHBvcnQgeyBjcmVhdGVQbGF5ZXIgfTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNoaXBzID0gc2hpcHM7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgdGhpcy5hZHZnYW1lYm9hcmQgPSBhZHZnYW1lYm9hcmQ7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlUGxheWVyID0gZnVuY3Rpb24gKHBsYXllciwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKSB7XG4gIGNvbnN0IG5ld3BsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpO1xuICByZXR1cm4gbmV3cGxheWVyO1xufTtcblxuLy9tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVBsYXllcjtcbiIsImV4cG9ydCB7IGNyZWF0ZVNoaXBGbGVldCB9O1xuXG5jb25zdCBjcmVhdGVBcnJheUhpdHMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gIGxldCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXkucHVzaCgwKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5jb25zdCBjaGVja0lmU3VuayA9IGZ1bmN0aW9uIChoaXRzYXJyYXkpIHtcbiAgLy9jb25zb2xlLmxvZyhoaXRzYXJyYXkpO1xuICBpZiAoaGl0c2FycmF5LmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IDApID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSBmdW5jdGlvbiAobGVuZ3RoLCBuYW1lLCBwbGF5ZXIpIHtcbiAgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBuYW1lLCBwbGF5ZXIpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lICsgXCIgXCIgKyBwbGF5ZXI7XG4gICAgICB0aGlzLmhpdHMgPSBjcmVhdGVBcnJheUhpdHModGhpcy5sZW5ndGgpO1xuICAgICAgdGhpcy5zdW5rID0gY2hlY2tJZlN1bmsodGhpcy5oaXRzKTtcbiAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXTtcbiAgICB9XG4gICAgaGl0KGluZGV4KSB7XG4gICAgICB0aGlzLmhpdHNbaW5kZXhdID0gMTtcbiAgICAgIHRoaXMuc3VuayA9IGNoZWNrSWZTdW5rKHRoaXMuaGl0cyk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoaXBjcmVhdGVkID0gbmV3IFNoaXAobGVuZ3RoLCBuYW1lLCBwbGF5ZXIpO1xuICByZXR1cm4gc2hpcGNyZWF0ZWQ7XG59O1xuXG5jb25zdCBjcmVhdGVTaGlwRmxlZXQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIGNvbnN0IGNhcnJpZXIgPSBjcmVhdGVTaGlwKDUsIFwiY2FycmllclwiLCBwbGF5ZXIpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gY3JlYXRlU2hpcCg0LCBcImJhdHRsZXNoaXBcIiwgcGxheWVyKTtcbiAgY29uc3QgZGVzdHJveWVyID0gY3JlYXRlU2hpcCgzLCBcImRlc3Ryb3llclwiLCBwbGF5ZXIpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBjcmVhdGVTaGlwKDMsIFwic3VibWFyaW5lXCIsIHBsYXllcik7XG4gIGNvbnN0IHBhdHJvbGJvYXQgPSBjcmVhdGVTaGlwKDIsIFwicGF0cm9sYm9hdFwiLCBwbGF5ZXIpO1xuICBjb25zdCBzaGlwYXJyYXkgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbGJvYXRdO1xuICByZXR1cm4gc2hpcGFycmF5O1xufTtcblxuLy8gZm9yIG5vZGVcbi8vbW9kdWxlLmV4cG9ydHMgPSBzaGlwRmxlZXQ7XG5cbi8vIHNoaXBzIHNob3VsZCBwcm9iYWJseSBoYXZlIGEgdW5pcXVlIGlkXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSwgc2V0dXBQbGF5ZXJzLCBnYW1lTG9vcFByb21wdCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyQm9hcmRcIik7XG5jb25zdCBhZHZCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWR2Qm9hcmRcIik7XG5sZXQgcGxheWVyQSA9IHNldHVwUGxheWVycyhcInBsYXllckFcIiwgW10sIHt9LCB7fSk7XG5sZXQgcGxheWVyQiA9IHNldHVwUGxheWVycyhcInBsYXllckJcIiwgW10sIHt9LCB7fSk7XG5jb25zdCB1cGRhdGVkUGxheWVycyA9IHN0YXJ0R2FtZShwbGF5ZXJBLCBwbGF5ZXJCKTtcblxucGxheWVyQSA9IHVwZGF0ZWRQbGF5ZXJzWzBdO1xucGxheWVyQiA9IHVwZGF0ZWRQbGF5ZXJzWzFdO1xuXG5mb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICBjb25zdCBkaXZBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkaXZCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZBLnNldEF0dHJpYnV0ZShcImlkXCIsIGkgKyBcIi1cIiArIGopO1xuICAgIGRpdkEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaXRCb3ggcGxheWVyQSBub3RTZWxlY3RlZEFcIik7XG4gICAgZGl2Qi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpICsgXCItXCIgKyBqKTtcbiAgICBkaXZCLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGl0Qm94IG90aGVycGxheWVyIG5vdFNlbGVjdGVkQlwiKTtcbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChkaXZBKTtcbiAgICBhZHZCb2FyZC5hcHBlbmRDaGlsZChkaXZCKTtcbiAgfVxufVxuXG4vLyBwbGFjZSBzaGlwc1xuXG5jb25zdCBzZWxlY3RTaGlwTG9jYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzaGlwc1RvQmVQbGFjZWQgPSBwbGF5ZXJBLnNoaXBzO1xuICBjb25zdCBjdXJyZW50c2hpcHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcblxuICAvLyBzZSBjYWxoYXIgdGVuaG8gZmF6ZXIgdW0gcmV0dXJuIGRlbnRybyBkYSBmdW5jYW8gZSBjb3JyZXIgYXRlIHVtIGFycmF5IHRlciBvIGxlbmd0aCBxdWUgcXVlcm8uIHBvc3NvIHNlbGVjY2lvbmFyIG8gY3VycmVudHNoaXAgbGVuZG8gbyBhcnJheVxuICBmdW5jdGlvbiBwbGFjZXNoaXBzKGN1cnJlbnRzaGlwKSB7XG4gICAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGN1cnJlbnRzaGlwLmxlbmd0aDtcbiAgICBjb25zdCBzaGlwTmFtZSA9IGN1cnJlbnRzaGlwLm5hbWU7XG4gICAgY3VycmVudHNoaXB0aXRsZS50ZXh0Q29udGVudCA9IGBTZWxlY3QgJHtzaGlwTGVuZ3RofSBjb25zZWN1dGl2ZSBzcXVhcmVzIGZvciBwbGFjaW5nIHlvdXIgJHtzaGlwTmFtZX0uYDtcbiAgICBjb25zdCBhbGxkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RTZWxlY3RlZEFcIik7XG4gICAgY29uc3Qgc2VsZWN0U3F1YXJlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IGRpdmlkID0gZS50YXJnZXQuaWQ7XG4gICAgICBjb29yZGluYXRlcy5wdXNoKGRpdmlkKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEFcIik7XG4gICAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoID09PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgYWxsZGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0U3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGFsbGRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0U3F1YXJlKTtcbiAgICB9KTtcbiAgfVxuICBwbGFjZXNoaXBzKHNoaXBzVG9CZVBsYWNlZFswXSkudGhlbihwbGFjZXNoaXBzKHNoaXBzVG9CZVBsYWNlZFsxXSkpO1xuICAvL2ZpcnN0IHNoaXBcbn0pKCk7XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQS5zaGlwcy5sZW5ndGg7IGkrKykge1xuLy8gICBjb25zdCBzaGlwID0gcGxheWVyQS5zaGlwc1tpXTtcbi8vICAgY29uc3Qgc2hpcG5hbWUgPSBzaGlwLm5hbWU7XG4vLyAgIGNvbnN0IHNoaXBjb29yZGluYXRlcyA9IHNoaXAuY29vcmRpbmF0ZXM7XG4vLyAgIGNvbnN0IHN1bmtTdGF0dXMgPSBzaGlwLnN1bms7XG4vLyAgIGNvbnN0IGFycmF5ID0gW3NoaXBuYW1lLCBzaGlwY29vcmRpbmF0ZXMsIHN1bmtTdGF0dXNdO1xuLy8gICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuLy8gICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgICBwYXJhLnRleHRDb250ZW50ID0gYXJyYXlbal07XG4vLyAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQocGFyYSk7XG4vLyAgIH1cbi8vIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==