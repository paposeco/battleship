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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  width: 900px;\n  height: 600px;\n  margin: 200px auto;\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n.selectedA0,\n.selectedA1,\n.selectedA2,\n.selectedA3,\n.selectedA4 {\n  background-color: darkgreen;\n}\n\n.selectedB {\n  background-color: red;\n}\n\n.selectedbyB {\n  background-color: red;\n}\n\n.hit {\n  background-color: black;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;;;;;EAKE,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["body {\n  width: 900px;\n  height: 600px;\n  margin: 200px auto;\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n.selectedA0,\n.selectedA1,\n.selectedA2,\n.selectedA3,\n.selectedA4 {\n  background-color: darkgreen;\n}\n\n.selectedB {\n  background-color: red;\n}\n\n.selectedbyB {\n  background-color: red;\n}\n\n.hit {\n  background-color: black;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "setupPlayers": () => (/* binding */ setupPlayers),
/* harmony export */   "attack": () => (/* binding */ attack),
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ "./src/ships.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





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
  if (player === "playerB") {
    placeShips.changeBoard(newBoard, shipFleet[0]);
    placeShips.changeBoard(newBoard, shipFleet[1]);
    placeShips.changeBoard(newBoard, shipFleet[2]);
    placeShips.changeBoard(newBoard, shipFleet[3]);
    placeShips.changeBoard(newBoard, shipFleet[4]);
  }
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
      console.log(victimsFleet[i]);
      console.log("coordinates");
      console.log(coordinates);
      console.log("transformed");
      console.log(transformedCoordinates);
      console.log("isit" + isItThisShip);
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

function gameLoop(location, playerA, playerB) {
  let stop = false;
  //player A picks a coordinate

  //console.log("A Location selected: ");
  //console.log(location);
  // player A attacks
  const locationtemp = location.toString().split(",");
  const finallocation = [Number(locationtemp[0]), Number(locationtemp[1])];
  const hitormissAvsB = attack(playerA, playerB, finallocation);
  //console.log(hitormissAvsB);

  if (hitormissAvsB === "hit" || hitormissAvsB === "gameover") {
    const transformcoordtoidLocation = location.toString().replace(",", "-");
    const otherplayerboard = document.getElementById("otherplayer");
    const findDivOther = otherplayerboard.querySelector(
      `[id="${transformcoordtoidLocation}"]`
    );
    //console.log(findDivOther);
    findDivOther.classList.add("hit");
  }
  if (hitormissAvsB === "gameover") {
    stop = true;
    return stop;
  }

  //  player B picks a coordinate

  const selectedLocationRaw = pickLocation(
    playerB.advgameboard.coordinates
  ).split(",");
  const selectedLocation = [
    Number(selectedLocationRaw[0]),
    Number(selectedLocationRaw[1]),
  ];
  //console.log("B Location selected: " + selectedLocation);
  //player B attacks
  //console.log(selectedLocation);
  const transformcoordtoid = selectedLocation.toString().replace(",", "-");
  const mainplayerboard = document.getElementById("mainplayer");
  const findDiv = mainplayerboard.querySelector(`[id="${transformcoordtoid}"]`);
  const hitormissBvsA = attack(playerB, playerA, selectedLocation);

  setTimeout(function () {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.domPlayerB)(hitormissBvsA, findDiv);
  }, 1500);

  if (hitormissBvsA === "gameover") {
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

//startGame();

// let loopit = gameLoopPrompt();
// while (!loopit) {
//   loopit = gameLoopPrompt();
// }


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domPlayerB": () => (/* binding */ domPlayerB)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");




const playerBoard = document.getElementById("playerBoard");
const advBoard = document.getElementById("advBoard");
//i'm atributting coordinates do player's A ships, and changing them later according to user input
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

let gamestatus;
const selectShipLocation = (function () {
  let placed = 0;
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
      // checks if it fits horizontally first and then vertically if necessary
      if (
        checkIfShipFitsHorizontally(
          shiplength,
          currentselection,
          coordinatesarray
        )
      ) {
        console.log("true");
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
  gamestatus = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop)(divcoord, playerA, playerB);
  const newmove = document.createElement("h3");
  const moves = document.getElementById("moves");
  if (div.classList.contains("hit")) {
    newmove.textContent = "You have hit a ship!";
  } else {
    newmove.textContent = "You missed.";
  }
  const movesDisplayed = document.querySelectorAll("#moves");
  const numberOfMoves = movesDisplayed[0].childNodes.length;
  if (numberOfMoves === 7) {
    movesDisplayed[0].removeChild(movesDisplayed[0].firstChild);
  }
  moves.appendChild(newmove);
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

const domPlayerB = function (hitormissBvsA, div) {
  div.classList.add("selectedbyB");
  if (hitormissBvsA === "hit" || hitormissBvsA === "gameover") {
    div.classList.add("hit");
  }
  const newmove = document.createElement("h3");
  const moves = document.getElementById("moves");
  if (hitormissBvsA === "hit") {
    newmove.textContent = "Player B hit one of your ships.";
  } else if (hitormissBvsA === "miss") {
    newmove.textContent = "Player B missed.";
  }
  const movesDisplayed = document.querySelectorAll("#moves");
  const numberOfMoves = movesDisplayed[0].childNodes.length;
  if (numberOfMoves === 7) {
    movesDisplayed[0].removeChild(movesDisplayed[0].firstChild);
  }
  moves.appendChild(newmove);
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

const sorter = function (a, b) {
  return a - b;
};

//to do

// remover a informacao que é para atacar.
// sempre que um navio se afundar dizer. e a quem é que o navio pertencia
// quando ha um hit escrever que ha para alem de mudar a cor
// mudar a cor desse navio
// legenda das cores e mudar as cores
// game over e dizer quem é que ganhou
// talvez melhorar o AI

// se calhar as moves ficavam melhor por ordem em vez de subsituir


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
      this.name = name;
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
  const carrier = createShip(5, "Carrier", player);
  const battleship = createShip(4, "Battleship", player);
  const destroyer = createShip(3, "Destroyer", player);
  const submarine = createShip(3, "Submarine", player);
  const patrolboat = createShip(2, "Patrolboat", player);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMjAwcHggYXV0bztcXG59XFxuXFxuI2JhdHRsZWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG4uaGl0Qm94IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuI3BsYXllckJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjJweCk7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2FkdkJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjJweCk7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnNlbGVjdGVkQTAsXFxuLnNlbGVjdGVkQTEsXFxuLnNlbGVjdGVkQTIsXFxuLnNlbGVjdGVkQTMsXFxuLnNlbGVjdGVkQTQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcbn1cXG5cXG4uc2VsZWN0ZWRCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNlbGVjdGVkYnlCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLFFBQVE7QUFDVjs7QUFFQTs7Ozs7RUFLRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luOiAyMDBweCBhdXRvO1xcbn1cXG5cXG4jYmF0dGxlZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDUwcHg7XFxufVxcbi5oaXRCb3gge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jYWR2Qm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWRBMCxcXG4uc2VsZWN0ZWRBMSxcXG4uc2VsZWN0ZWRBMixcXG4uc2VsZWN0ZWRBMyxcXG4uc2VsZWN0ZWRBNCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxufVxcblxcbi5zZWxlY3RlZEIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc2VsZWN0ZWRieUIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlU2hpcEZsZWV0IH0gZnJvbSBcIi4vc2hpcHMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgZG9tUGxheWVyQiB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5leHBvcnQgeyBzdGFydEdhbWUsIHNldHVwUGxheWVycywgYXR0YWNrLCBnYW1lTG9vcCB9O1xuXG4vL2NvbnN0IGNyZWF0ZVNoaXBGbGVldCA9IHJlcXVpcmUoXCIuL3NoaXBzLmpzXCIpO1xuLy9jb25zdCBjcmVhdGVQbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXIuanNcIik7XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgY29uc3QgYm9hcmRPYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIG9ialtpICsgXCIsXCIgKyBqXSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBib2FyZE9iamVjdCgpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHBsYXllcik7XG4gIHJldHVybiBnYW1lYm9hcmQ7XG59O1xuXG5jb25zdCBnZXRSYW5kb21JbnRJbmNsdXNpdmUgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG5jb25zdCBwaWNrTG9jYXRpb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IG9ialZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqKTtcbiAgY29uc3Qgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGxldCBlbXB0eUxvY2F0aW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ialZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChvYmpWYWx1ZXNbaV0gPT09IDApIHtcbiAgICAgIGVtcHR5TG9jYXRpb25zLnB1c2gob2JqS2V5c1tpXSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IG51bWJlckVtcHR5TG9jYXRpb25zID0gZW1wdHlMb2NhdGlvbnMubGVuZ3RoO1xuICBjb25zdCBwaWNrUmFuZG9tTG9jYXRpb24gPVxuICAgIGVtcHR5TG9jYXRpb25zW2dldFJhbmRvbUludEluY2x1c2l2ZSgwLCBudW1iZXJFbXB0eUxvY2F0aW9ucyAtIDEpXTtcbiAgcmV0dXJuIHBpY2tSYW5kb21Mb2NhdGlvbjtcbn07XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcmFuZG9tTG9jYXRpb247XG4gIGxldCByb3c7XG4gIGxldCBjb2x1bW47XG5cbiAgY29uc3QgbG9jYXRpb25zQXJyYXkgPSBmdW5jdGlvbiAoY3VycmVudGJvYXJkLCBjdXJyZW50c2hpcCwgb3JpZW50YXRpb24pIHtcbiAgICBsZXQgbmV3cG9zaXRpb247XG4gICAgbGV0IGZpeGVkcG9zaXRpb247XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInJvd1wiKSB7XG4gICAgICBuZXdwb3NpdGlvbiA9IGNvbHVtbjtcbiAgICAgIGZpeGVkcG9zaXRpb24gPSByb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld3Bvc2l0aW9uID0gcm93O1xuICAgICAgZml4ZWRwb3NpdGlvbiA9IGNvbHVtbjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjdXJyZW50c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2hpZnRlZCA9IG5ld3Bvc2l0aW9uIC0gaTtcbiAgICAgIGlmIChzaGlmdGVkIDwgMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBsb2NhdGlvbjtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJyb3dcIikge1xuICAgICAgICBsb2NhdGlvbiA9IGZpeGVkcG9zaXRpb24gKyBcIixcIiArIHNoaWZ0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbiA9IHNoaWZ0ZWQgKyBcIixcIiArIGZpeGVkcG9zaXRpb247XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0dXNPbkxvY2F0aW9uID0gY3VycmVudGJvYXJkLmNvb3JkaW5hdGVzW2xvY2F0aW9uXTtcbiAgICAgIGlmIChzdGF0dXNPbkxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgIGFycmF5LnB1c2goc2hpZnRlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgY3VycmVudHNoaXAubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHNoaWZ0ZWQgPSBuZXdwb3NpdGlvbiArIGo7XG4gICAgICBpZiAoc2hpZnRlZCA+IDEwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGxvY2F0aW9uO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInJvd1wiKSB7XG4gICAgICAgIGxvY2F0aW9uID0gZml4ZWRwb3NpdGlvbiArIFwiLFwiICsgc2hpZnRlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gc2hpZnRlZCArIFwiLFwiICsgZml4ZWRwb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXR1c09uTG9jYXRpb24gPSBjdXJyZW50Ym9hcmQuY29vcmRpbmF0ZXNbbG9jYXRpb25dO1xuICAgICAgaWYgKHN0YXR1c09uTG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgYXJyYXkucHVzaChzaGlmdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHN1bVNlcXVlbmNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBiOyBpKyspIHtcbiAgICAgIHN1bSArPSBhICsgaTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfTtcblxuICBjb25zdCBjb25zZWN1dGl2ZU51bWJlcnMgPSBmdW5jdGlvbiAoYXJyYXksIGN1cnJlbnRzaGlwbGVuZ3RoKSB7XG4gICAgbGV0IGdvb2RzcG90O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGJlZ2lubmluZ09mU2hpcCA9IGFycmF5W2ldO1xuICAgICAgLy90aGUgZmlyc3QgcG9zaXRpb24gYWxzbyBjb3VudHNcbiAgICAgIGNvbnN0IGVuZE9mU2hpcCA9IGJlZ2lubmluZ09mU2hpcCArIGN1cnJlbnRzaGlwbGVuZ3RoIC0gMTtcbiAgICAgIGlmIChlbmRPZlNoaXAgPiBhcnJheVthcnJheS5sZW5ndGhdKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgY29uc2VjdXRpdmUgPSBzdW1TZXF1ZW5jZShiZWdpbm5pbmdPZlNoaXAsIGVuZE9mU2hpcCk7XG5cbiAgICAgIGNvbnN0IGluYXJyYXkgPSBzdW1TZXF1ZW5jZShcbiAgICAgICAgYmVnaW5uaW5nT2ZTaGlwLFxuICAgICAgICBhcnJheVtpICsgY3VycmVudHNoaXBsZW5ndGggLSAxXVxuICAgICAgKTtcbiAgICAgIGlmIChjb25zZWN1dGl2ZSA9PT0gaW5hcnJheSkge1xuICAgICAgICByZXR1cm4gYmVnaW5uaW5nT2ZTaGlwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ29vZHNwb3QgPSBmYWxzZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnb29kc3BvdDtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlTnVtYmVycyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrRm9yRml0ID0gZnVuY3Rpb24gKGN1cnJlbnRzaGlwLCBjdXJyZW50Ym9hcmQpIHtcbiAgICBjb25zdCBzZWxlY3RlZEluaXRpYWxMb2NhdGlvbiA9IHJvdyArIFwiLFwiICsgY29sdW1uO1xuICAgIGNvbnN0IGF2YWlsYWJsZVNwYWNlc1JvdyA9IGxvY2F0aW9uc0FycmF5KGN1cnJlbnRib2FyZCwgY3VycmVudHNoaXAsIFwicm93XCIpXG4gICAgICAuY29uY2F0KGNvbHVtbilcbiAgICAgIC5zb3J0KGNvbXBhcmVOdW1iZXJzKTtcbiAgICBjb25zdCBhdmFpbGFibGVTcGFjZXNDb2x1bW4gPSBsb2NhdGlvbnNBcnJheShcbiAgICAgIGN1cnJlbnRib2FyZCxcbiAgICAgIGN1cnJlbnRzaGlwLFxuICAgICAgXCJjb2x1bW5cIlxuICAgIClcbiAgICAgIC5jb25jYXQocm93KVxuICAgICAgLnNvcnQoY29tcGFyZU51bWJlcnMpO1xuXG4gICAgaWYgKHJvdyAlIDIgPT09IDEpIHtcbiAgICAgIGlmIChhdmFpbGFibGVTcGFjZXNSb3cubGVuZ3RoIDwgY3VycmVudHNoaXAubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhdmFpbGFibGVTcGFjZXNDb2x1bW4ubGVuZ3RoIDwgY3VycmVudHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0cG9zaXRpb24gPSBjb25zZWN1dGl2ZU51bWJlcnMoXG4gICAgICAgICAgICBhdmFpbGFibGVTcGFjZXNDb2x1bW4sXG4gICAgICAgICAgICBjdXJyZW50c2hpcC5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghc3RhcnRwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFwiZmFpbHMgY2hlY2tcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtzdGFydHBvc2l0aW9uLCBjb2x1bW4sIFwidmVydGljYWxcIl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0cG9zaXRpb24gPSBjb25zZWN1dGl2ZU51bWJlcnMoXG4gICAgICAgICAgYXZhaWxhYmxlU3BhY2VzUm93LFxuICAgICAgICAgIGN1cnJlbnRzaGlwLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAoIXN0YXJ0cG9zaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gXCJmYWlscyBjaGVja1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcm93LCBzdGFydHBvc2l0aW9uLCBcImhvcml6b250YWxcIl07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdmFpbGFibGVTcGFjZXNDb2x1bW4ubGVuZ3RoIDwgY3VycmVudHNoaXAubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhdmFpbGFibGVTcGFjZXNSb3cubGVuZ3RoIDwgY3VycmVudHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0cG9zaXRpb24gPSBjb25zZWN1dGl2ZU51bWJlcnMoXG4gICAgICAgICAgICBhdmFpbGFibGVTcGFjZXNSb3csXG4gICAgICAgICAgICBjdXJyZW50c2hpcC5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghc3RhcnRwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFwiZmFpbHMgY2hlY2tcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtyb3csIHN0YXJ0cG9zaXRpb24sIFwiaG9yaXpvbnRhbFwiXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRwb3NpdGlvbiA9IGNvbnNlY3V0aXZlTnVtYmVycyhcbiAgICAgICAgICBhdmFpbGFibGVTcGFjZXNDb2x1bW4sXG4gICAgICAgICAgY3VycmVudHNoaXAubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGlmICghc3RhcnRwb3NpdGlvbikge1xuICAgICAgICAgIHJldHVybiBcImZhaWxzIGNoZWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtzdGFydHBvc2l0aW9uLCBjb2x1bW4sIFwidmVydGljYWxcIl07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGFuZ2VCb2FyZCA9IGZ1bmN0aW9uIChib2FyZG9iaiwgY3VycmVudHNoaXApIHtcbiAgICByYW5kb21Mb2NhdGlvbiA9IHBpY2tMb2NhdGlvbihib2FyZG9iai5jb29yZGluYXRlcykuc3BsaXQoXCIsXCIpO1xuICAgIHJvdyA9IE51bWJlcihyYW5kb21Mb2NhdGlvblswXSk7XG4gICAgY29sdW1uID0gTnVtYmVyKHJhbmRvbUxvY2F0aW9uWzFdKTtcbiAgICBjb25zdCBzZWxlY3RJbml0aWFsUGxhY2VtZW50ID0gY2hlY2tGb3JGaXQoY3VycmVudHNoaXAsIGJvYXJkb2JqKTtcbiAgICBpZiAoc2VsZWN0SW5pdGlhbFBsYWNlbWVudCA9PT0gXCJmYWlscyBjaGVja1wiKSB7XG4gICAgICByZXR1cm4gY2hhbmdlQm9hcmQoYm9hcmRvYmosIGN1cnJlbnRzaGlwKTtcbiAgICB9XG4gICAgaWYgKCFzZWxlY3RJbml0aWFsUGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gXCJFUlJPUiBFUlJPUlwiO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50c2hpcGxlbmd0aCA9IGN1cnJlbnRzaGlwLmxlbmd0aDtcbiAgICBjb25zdCBib2F0T3JpZW50YXRpb24gPSBzZWxlY3RJbml0aWFsUGxhY2VtZW50WzJdO1xuICAgIGxldCBjb29yZGluYXRlc1RvQ2hhbmdlID0gW107XG4gICAgaWYgKGJvYXRPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3Y29vcmQgPSBbXG4gICAgICAgICAgTnVtYmVyKHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMF0pICtcbiAgICAgICAgICAgIGkgK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgc2VsZWN0SW5pdGlhbFBsYWNlbWVudFsxXSxcbiAgICAgICAgXTtcbiAgICAgICAgY29vcmRpbmF0ZXNUb0NoYW5nZS5wdXNoKG5ld2Nvb3JkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50c2hpcGxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5ld2Nvb3JkID0gW1xuICAgICAgICAgIHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMF0gK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgKE51bWJlcihzZWxlY3RJbml0aWFsUGxhY2VtZW50WzFdKSArIGopLFxuICAgICAgICBdO1xuICAgICAgICBjb29yZGluYXRlc1RvQ2hhbmdlLnB1c2gobmV3Y29vcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvb3JkaW5hdGVzVG9DaGFuZ2UubGVuZ3RoOyBrKyspIHtcbiAgICAgIGJvYXJkb2JqLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzVG9DaGFuZ2Vba11dID0gMTtcbiAgICAgIGN1cnJlbnRzaGlwLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZXNUb0NoYW5nZVtrXSk7XG4gICAgfVxuICAgIHJldHVybiBcImRvbmVcIjtcbiAgfTtcbiAgcmV0dXJuIHsgY2hhbmdlQm9hcmQgfTtcbn0pKCk7XG5cbmNvbnN0IHNldHVwQm9hcmQgPSBmdW5jdGlvbiAocGxheWVyLCBwbGF5ZXJvYmopIHtcbiAgbGV0IG5ld0JvYXJkID0gY3JlYXRlR2FtZWJvYXJkKHBsYXllcik7XG4gIGNvbnN0IHNoaXBGbGVldCA9IGNyZWF0ZVNoaXBGbGVldChwbGF5ZXIpO1xuICBwbGF5ZXJvYmouc2hpcHMgPSBzaGlwRmxlZXQ7XG4gIGlmIChwbGF5ZXIgPT09IFwicGxheWVyQlwiKSB7XG4gICAgcGxhY2VTaGlwcy5jaGFuZ2VCb2FyZChuZXdCb2FyZCwgc2hpcEZsZWV0WzBdKTtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbMV0pO1xuICAgIHBsYWNlU2hpcHMuY2hhbmdlQm9hcmQobmV3Qm9hcmQsIHNoaXBGbGVldFsyXSk7XG4gICAgcGxhY2VTaGlwcy5jaGFuZ2VCb2FyZChuZXdCb2FyZCwgc2hpcEZsZWV0WzNdKTtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbNF0pO1xuICB9XG4gIGRpc3BsYXlib2FyZChuZXdCb2FyZCk7XG4gIHJldHVybiBuZXdCb2FyZDtcbn07XG5cbmNvbnN0IHNldHVwUGxheWVycyA9IGZ1bmN0aW9uIChwbGF5ZXIsIHNoaXBzLCBnYW1lYm9hcmQsIGFkdmdhbWVib2FyZCkge1xuICBjb25zdCBuZXdwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIocGxheWVyLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpO1xuICByZXR1cm4gbmV3cGxheWVyO1xufTtcblxuY29uc3QgYXR0YWNrID0gZnVuY3Rpb24gKGF0dGFja2VyLCB2aWN0aW0sIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHZpY3RpbXNCb2FyZCA9IHZpY3RpbS5nYW1lYm9hcmQ7XG4gIGNvbnN0IGF0dGFja2VyQWR2Qm9hcmQgPSBhdHRhY2tlci5hZHZnYW1lYm9hcmQ7XG4gIGNvbnN0IHZpY3RpbXNGbGVldCA9IHZpY3RpbS5zaGlwcztcbiAgY29uc3QgYm9hcmRTdGF0dXNPbkNvb3JkaW5hdGVzID0gdmljdGltc0JvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXTtcbiAgY29uc3QgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IFtjb29yZGluYXRlc1swXSArIFwiLFwiICsgY29vcmRpbmF0ZXNbMV1dO1xuICBpZiAoYm9hcmRTdGF0dXNPbkNvb3JkaW5hdGVzID09PSAxKSB7XG4gICAgY29uc29sZS5sb2coXCJoaXRcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWN0aW1zRmxlZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFycmF5T2ZDb29yZGluYXRlcyA9IHZpY3RpbXNGbGVldFtpXS5jb29yZGluYXRlcy5mbGF0KCk7XG4gICAgICBjb25zdCBpc0l0VGhpc1NoaXAgPSBhcnJheU9mQ29vcmRpbmF0ZXMuaW5jbHVkZXMoXG4gICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXNbMF1cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyh2aWN0aW1zRmxlZXRbaV0pO1xuICAgICAgY29uc29sZS5sb2coXCJjb29yZGluYXRlc1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNmb3JtZWRcIik7XG4gICAgICBjb25zb2xlLmxvZyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaXNpdFwiICsgaXNJdFRoaXNTaGlwKTtcbiAgICAgIGlmIChpc0l0VGhpc1NoaXApIHtcbiAgICAgICAgY29uc3QgaGl0SW5kZXggPSBhcnJheU9mQ29vcmRpbmF0ZXMuZmluZEluZGV4KFxuICAgICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50ID09PSB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzWzBdXG4gICAgICAgICk7XG4gICAgICAgIHZpY3RpbXNGbGVldFtpXS5oaXQoaGl0SW5kZXgpO1xuICAgICAgICB2aWN0aW1zQm9hcmQuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNdID0gXCJ4XCI7XG4gICAgICAgIGF0dGFja2VyQWR2Qm9hcmQuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNdID0gXCJ4XCI7XG4gICAgICAgIHZpY3RpbXNGbGVldFtpXS5oaXRzO1xuICAgICAgICBpZiAodmljdGltc0ZsZWV0W2ldLnN1bmspIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNoaXAgc3VuazogXCIgKyB2aWN0aW1zRmxlZXRbaV0ubmFtZSk7XG4gICAgICAgICAgY29uc3Qgc3Vua2VuU2hpcHMgPSBjb3VudFN1bmtlblNoaXBzKHZpY3RpbXNGbGVldCk7XG4gICAgICAgICAgaWYgKHN1bmtlblNoaXBzID09PSA1KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVvdmVyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiZ2FtZW92ZXJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwibWlzc1wiKTtcbiAgICB2aWN0aW1zQm9hcmQuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNdID0gXCJtXCI7XG4gICAgYXR0YWNrZXJBZHZCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcIm1cIjtcbiAgICByZXR1cm4gXCJtaXNzXCI7XG4gIH1cbn07XG5cbmNvbnN0IGNvdW50U3Vua2VuU2hpcHMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNoaXAgPSBhcnJheVtpXTtcbiAgICBjb25zdCBzdW5rID0gc2hpcC5zdW5rO1xuICAgIGlmIChzdW5rKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY291bnQ7XG59O1xuXG5jb25zdCBkaXNwbGF5Ym9hcmQgPSBmdW5jdGlvbiAoY3VycmVudGJvYXJkKSB7XG4gIGNvbnNvbGUubG9nKFwiIFwiKTtcbiAgY29uc3QgY29vcmQgPSBjdXJyZW50Ym9hcmQuY29vcmRpbmF0ZXM7XG4gIGNvbnNvbGUubG9nKDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIFwiZFwiKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgIGlmIChpID09PSAxMCkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiZFwiLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyAxXSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgMl0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDNdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA0XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgNV0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDZdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA3XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgOF0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDldLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyAxMF1cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc29sZS5sb2coXG4gICAgICBpLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgMV0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyAyXSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDNdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgNF0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA1XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDZdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgN10sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA4XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDldLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgMTBdXG4gICAgKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AobG9jYXRpb24sIHBsYXllckEsIHBsYXllckIpIHtcbiAgbGV0IHN0b3AgPSBmYWxzZTtcbiAgLy9wbGF5ZXIgQSBwaWNrcyBhIGNvb3JkaW5hdGVcblxuICAvL2NvbnNvbGUubG9nKFwiQSBMb2NhdGlvbiBzZWxlY3RlZDogXCIpO1xuICAvL2NvbnNvbGUubG9nKGxvY2F0aW9uKTtcbiAgLy8gcGxheWVyIEEgYXR0YWNrc1xuICBjb25zdCBsb2NhdGlvbnRlbXAgPSBsb2NhdGlvbi50b1N0cmluZygpLnNwbGl0KFwiLFwiKTtcbiAgY29uc3QgZmluYWxsb2NhdGlvbiA9IFtOdW1iZXIobG9jYXRpb250ZW1wWzBdKSwgTnVtYmVyKGxvY2F0aW9udGVtcFsxXSldO1xuICBjb25zdCBoaXRvcm1pc3NBdnNCID0gYXR0YWNrKHBsYXllckEsIHBsYXllckIsIGZpbmFsbG9jYXRpb24pO1xuICAvL2NvbnNvbGUubG9nKGhpdG9ybWlzc0F2c0IpO1xuXG4gIGlmIChoaXRvcm1pc3NBdnNCID09PSBcImhpdFwiIHx8IGhpdG9ybWlzc0F2c0IgPT09IFwiZ2FtZW92ZXJcIikge1xuICAgIGNvbnN0IHRyYW5zZm9ybWNvb3JkdG9pZExvY2F0aW9uID0gbG9jYXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKFwiLFwiLCBcIi1cIik7XG4gICAgY29uc3Qgb3RoZXJwbGF5ZXJib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3RoZXJwbGF5ZXJcIik7XG4gICAgY29uc3QgZmluZERpdk90aGVyID0gb3RoZXJwbGF5ZXJib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtpZD1cIiR7dHJhbnNmb3JtY29vcmR0b2lkTG9jYXRpb259XCJdYFxuICAgICk7XG4gICAgLy9jb25zb2xlLmxvZyhmaW5kRGl2T3RoZXIpO1xuICAgIGZpbmREaXZPdGhlci5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICB9XG4gIGlmIChoaXRvcm1pc3NBdnNCID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBzdG9wID0gdHJ1ZTtcbiAgICByZXR1cm4gc3RvcDtcbiAgfVxuXG4gIC8vICBwbGF5ZXIgQiBwaWNrcyBhIGNvb3JkaW5hdGVcblxuICBjb25zdCBzZWxlY3RlZExvY2F0aW9uUmF3ID0gcGlja0xvY2F0aW9uKFxuICAgIHBsYXllckIuYWR2Z2FtZWJvYXJkLmNvb3JkaW5hdGVzXG4gICkuc3BsaXQoXCIsXCIpO1xuICBjb25zdCBzZWxlY3RlZExvY2F0aW9uID0gW1xuICAgIE51bWJlcihzZWxlY3RlZExvY2F0aW9uUmF3WzBdKSxcbiAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvblJhd1sxXSksXG4gIF07XG4gIC8vY29uc29sZS5sb2coXCJCIExvY2F0aW9uIHNlbGVjdGVkOiBcIiArIHNlbGVjdGVkTG9jYXRpb24pO1xuICAvL3BsYXllciBCIGF0dGFja3NcbiAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZExvY2F0aW9uKTtcbiAgY29uc3QgdHJhbnNmb3JtY29vcmR0b2lkID0gc2VsZWN0ZWRMb2NhdGlvbi50b1N0cmluZygpLnJlcGxhY2UoXCIsXCIsIFwiLVwiKTtcbiAgY29uc3QgbWFpbnBsYXllcmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWlucGxheWVyXCIpO1xuICBjb25zdCBmaW5kRGl2ID0gbWFpbnBsYXllcmJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7dHJhbnNmb3JtY29vcmR0b2lkfVwiXWApO1xuICBjb25zdCBoaXRvcm1pc3NCdnNBID0gYXR0YWNrKHBsYXllckIsIHBsYXllckEsIHNlbGVjdGVkTG9jYXRpb24pO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGRvbVBsYXllckIoaGl0b3JtaXNzQnZzQSwgZmluZERpdik7XG4gIH0sIDE1MDApO1xuXG4gIGlmIChoaXRvcm1pc3NCdnNBID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBzdG9wID0gdHJ1ZTtcbiAgICByZXR1cm4gc3RvcDtcbiAgfVxuICByZXR1cm4gc3RvcDtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgY29uc3QgcGxheWVyQUJvYXJkID0gc2V0dXBCb2FyZChcInBsYXllckFcIiwgcGxheWVyMSk7XG4gIGNvbnN0IHBsYXllckFUcmFja3NCQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoXCJwbGF5ZXJBVHJhY2tzQlwiKTtcbiAgcGxheWVyMS5nYW1lYm9hcmQgPSBwbGF5ZXJBQm9hcmQ7XG4gIHBsYXllcjEuYWR2Z2FtZWJvYXJkID0gcGxheWVyQVRyYWNrc0JCb2FyZDtcbiAgY29uc3QgcGxheWVyQkJvYXJkID0gc2V0dXBCb2FyZChcInBsYXllckJcIiwgcGxheWVyMik7XG4gIGNvbnN0IHBsYXllckJUcmFja3NBQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoXCJwbGF5ZXJCVHJhY2tzQVwiKTtcbiAgcGxheWVyMi5nYW1lYm9hcmQgPSBwbGF5ZXJCQm9hcmQ7XG4gIHBsYXllcjIuYWR2Z2FtZWJvYXJkID0gcGxheWVyQlRyYWNrc0FCb2FyZDtcbiAgcmV0dXJuIFtwbGF5ZXIxLCBwbGF5ZXIyXTtcbn1cblxuLy9zdGFydEdhbWUoKTtcblxuLy8gbGV0IGxvb3BpdCA9IGdhbWVMb29wUHJvbXB0KCk7XG4vLyB3aGlsZSAoIWxvb3BpdCkge1xuLy8gICBsb29waXQgPSBnYW1lTG9vcFByb21wdCgpO1xuLy8gfVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSwgc2V0dXBQbGF5ZXJzLCBhdHRhY2ssIGdhbWVMb29wIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLmpzXCI7XG5leHBvcnQgeyBkb21QbGF5ZXJCIH07XG5cbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJCb2FyZFwiKTtcbmNvbnN0IGFkdkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHZCb2FyZFwiKTtcbi8vaSdtIGF0cmlidXR0aW5nIGNvb3JkaW5hdGVzIGRvIHBsYXllcidzIEEgc2hpcHMsIGFuZCBjaGFuZ2luZyB0aGVtIGxhdGVyIGFjY29yZGluZyB0byB1c2VyIGlucHV0XG5sZXQgcGxheWVyQSA9IHNldHVwUGxheWVycyhcInBsYXllckFcIiwgW10sIHt9LCB7fSk7XG5sZXQgcGxheWVyQiA9IHNldHVwUGxheWVycyhcInBsYXllckJcIiwgW10sIHt9LCB7fSk7XG5jb25zdCB1cGRhdGVkUGxheWVycyA9IHN0YXJ0R2FtZShwbGF5ZXJBLCBwbGF5ZXJCKTtcblxucGxheWVyQSA9IHVwZGF0ZWRQbGF5ZXJzWzBdO1xucGxheWVyQiA9IHVwZGF0ZWRQbGF5ZXJzWzFdO1xuXG5mb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICBjb25zdCBkaXZBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkaXZCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZBLnNldEF0dHJpYnV0ZShcImlkXCIsIGkgKyBcIi1cIiArIGopO1xuICAgIGRpdkEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaXRCb3ggcGxheWVyQSBub3RTZWxlY3RlZEFcIik7XG4gICAgZGl2Qi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpICsgXCItXCIgKyBqKTtcbiAgICBkaXZCLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGl0Qm94IG90aGVycGxheWVyIG5vdFNlbGVjdGVkQlwiKTtcbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChkaXZBKTtcbiAgICBhZHZCb2FyZC5hcHBlbmRDaGlsZChkaXZCKTtcbiAgfVxufVxuXG4vLyBwbGFjZSBzaGlwc1xuXG5sZXQgZ2FtZXN0YXR1cztcbmNvbnN0IHNlbGVjdFNoaXBMb2NhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGFjZWQgPSAwO1xuICBmdW5jdGlvbiBwbGFjZVNoaXAoY3VycmVudHNoaXApIHtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICBjb25zdCBjdXJyZW50c2hpcHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgICBsZXQgY29vcmRpbmF0ZXNMZW5ndGg7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGN1cnJlbnRzaGlwLmxlbmd0aDtcbiAgICBjb25zdCBzaGlwTmFtZSA9IGN1cnJlbnRzaGlwLm5hbWU7XG4gICAgY3VycmVudHNoaXB0aXRsZS50ZXh0Q29udGVudCA9IGBTZWxlY3QgJHtzaGlwTGVuZ3RofSBjb25zZWN1dGl2ZSBzcXVhcmVzIGZvciBwbGFjaW5nIHlvdXIgJHtzaGlwTmFtZX0uYDtcbiAgICBjb25zdCBhbGxkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RTZWxlY3RlZEFcIik7XG4gICAgZnVuY3Rpb24gc2VsZWN0U3F1YXJlKGUpIHtcbiAgICAgIGNvbnN0IGRpdmlkID0gZS50YXJnZXQuaWQ7XG4gICAgICBjb25zdCBsZWdhbE1vdmUgPSBjaGVja0NvbnNlY3V0aXZlU3F1YXJlcyhkaXZpZCwgY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgpO1xuICAgICAgaWYgKGxlZ2FsTW92ZSkge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKGRpdmlkKTtcbiAgICAgICAgY29vcmRpbmF0ZXNMZW5ndGggPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEFcIiArIHBsYWNlZCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJub3RTZWxlY3RlZEFcIik7XG4gICAgICAgIGNoZWNrSWZGaW5pc2hlZChjdXJyZW50c2hpcCwgY29vcmRpbmF0ZXMpO1xuICAgICAgICBpZiAoY29vcmRpbmF0ZXNMZW5ndGggPT09IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICBhbGxkaXZzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdFNxdWFyZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHBsYWNlZCA8IDUpIHtcbiAgICAgICAgICAgIHBsYWNlQWxsU2hpcHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgYWxsZGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RTcXVhcmUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VBbGxTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwc1RvQmVQbGFjZWQgPSBwbGF5ZXJBLnNoaXBzO1xuICAgIHBsYWNlU2hpcChzaGlwc1RvQmVQbGFjZWRbcGxhY2VkXSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NvbnNlY3V0aXZlU3F1YXJlcyhcbiAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgIGNvb3JkaW5hdGVzYXJyYXksXG4gICAgc2hpcGxlbmd0aFxuICApIHtcbiAgICBsZXQgZ29vZE1vdmUgPSBmYWxzZTtcbiAgICBpZiAoY29vcmRpbmF0ZXNhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIGNoZWNrcyBpZiBpdCBmaXRzIGhvcml6b250YWxseSBmaXJzdCBhbmQgdGhlbiB2ZXJ0aWNhbGx5IGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKFxuICAgICAgICBjaGVja0lmU2hpcEZpdHNIb3Jpem9udGFsbHkoXG4gICAgICAgICAgc2hpcGxlbmd0aCxcbiAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgICAgICAgIGNvb3JkaW5hdGVzYXJyYXlcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjaGVja0lmU2hpcEZpdHNWZXJ0aWNhbGx5KFxuICAgICAgICAgIHNoaXBsZW5ndGgsXG4gICAgICAgICAgY3VycmVudHNlbGVjdGlvbixcbiAgICAgICAgICBjb29yZGluYXRlc2FycmF5XG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvb3JkaW5hdGVzYXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlc051bWJlcnMgPSBjb29yZGluYXRlc2FycmF5WzBdLnNwbGl0KFwiLVwiKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzWCA9IE51bWJlcihjb29yZGluYXRlc051bWJlcnNbMF0pO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXNZID0gTnVtYmVyKGNvb3JkaW5hdGVzTnVtYmVyc1sxXSk7XG4gICAgICBjb25zdCBub3J0aENvb3JkID0gY29vcmRpbmF0ZXNYIC0gMSArIFwiLVwiICsgY29vcmRpbmF0ZXNZO1xuICAgICAgY29uc3Qgc291dGhDb29yZCA9IGNvb3JkaW5hdGVzWCArIDEgKyBcIi1cIiArIGNvb3JkaW5hdGVzWTtcbiAgICAgIGNvbnN0IHdlc3RDb29yZCA9IGNvb3JkaW5hdGVzWCArIFwiLVwiICsgKGNvb3JkaW5hdGVzWSAtIDEpO1xuICAgICAgY29uc3QgZWFzdENvb3JkID0gY29vcmRpbmF0ZXNYICsgXCItXCIgKyAoY29vcmRpbmF0ZXNZICsgMSk7XG5cbiAgICAgIGNvbnN0IGxlZ2FsTW92ZXMgPSBbbm9ydGhDb29yZCwgc291dGhDb29yZCwgd2VzdENvb3JkLCBlYXN0Q29vcmRdO1xuXG4gICAgICBpZiAobGVnYWxNb3Zlcy5pbmNsdWRlcyhjdXJyZW50c2VsZWN0aW9uKSkge1xuICAgICAgICAvLyB3aXRoIGN1cnJlbnQgc2VsZWN0aW9uLCB0aGUgc2hpcCB3b3VsZCBiZSBwbGFjZWQgaG93P1xuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uU3BsaXQgPSBjdXJyZW50c2VsZWN0aW9uLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvblggPSBOdW1iZXIoY3VycmVudFNlbGVjdGlvblNwbGl0WzBdKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvblkgPSBOdW1iZXIoY3VycmVudFNlbGVjdGlvblNwbGl0WzFdKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3Rpb25YID09PSBjb29yZGluYXRlc1gpIHtcbiAgICAgICAgICAvL2hvcml6b250YWxcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaGVja0lmU2hpcEZpdHNIb3Jpem9udGFsbHkoXG4gICAgICAgICAgICAgIHNoaXBsZW5ndGgsXG4gICAgICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24sXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzYXJyYXlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGdvb2RNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy92ZXJ0aWNhbFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNoZWNrSWZTaGlwRml0c1ZlcnRpY2FsbHkoXG4gICAgICAgICAgICAgIHNoaXBsZW5ndGgsXG4gICAgICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24sXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzYXJyYXlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGdvb2RNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvb3JkaW5hdGVzWCA9IFtdO1xuICAgICAgbGV0IGNvb3JkaW5hdGVzWSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlc2FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRlQ29vcmQgPSBjb29yZGluYXRlc2FycmF5W2ldLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgY29vcmRpbmF0ZXNYLnB1c2goTnVtYmVyKHNlcGFyYXRlQ29vcmRbMF0pKTtcbiAgICAgICAgY29vcmRpbmF0ZXNZLnB1c2goTnVtYmVyKHNlcGFyYXRlQ29vcmRbMV0pKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb29yZGluYXRlc1hbMF0gPT09IGNvb3JkaW5hdGVzWFsxXSkge1xuICAgICAgICAvL2hvcml6b250YWxcbiAgICAgICAgY29vcmRpbmF0ZXNZLnNvcnQoc29ydGVyKTtcbiAgICAgICAgY29uc3Qgd2VzdENvb3JkID0gY29vcmRpbmF0ZXNYWzBdICsgXCItXCIgKyAoY29vcmRpbmF0ZXNZWzBdIC0gMSk7XG4gICAgICAgIGNvbnN0IGVhc3RDb29yZCA9XG4gICAgICAgICAgY29vcmRpbmF0ZXNYWzBdICsgXCItXCIgKyAoY29vcmRpbmF0ZXNZW2Nvb3JkaW5hdGVzWS5sZW5ndGggLSAxXSArIDEpO1xuICAgICAgICBpZiAoY3VycmVudHNlbGVjdGlvbiA9PT0gd2VzdENvb3JkIHx8IGN1cnJlbnRzZWxlY3Rpb24gPT09IGVhc3RDb29yZCkge1xuICAgICAgICAgIGdvb2RNb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy92ZXJ0aWNhbFxuICAgICAgICBjb29yZGluYXRlc1guc29ydChzb3J0ZXIpO1xuICAgICAgICBjb25zdCBub3J0aENvb3JkID0gY29vcmRpbmF0ZXNYWzBdIC0gMSArIFwiLVwiICsgY29vcmRpbmF0ZXNZWzBdO1xuICAgICAgICBjb25zdCBzb3V0aENvb3JkID1cbiAgICAgICAgICBjb29yZGluYXRlc1hbY29vcmRpbmF0ZXNYLmxlbmd0aCAtIDFdICsgMSArIFwiLVwiICsgY29vcmRpbmF0ZXNZWzBdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY3VycmVudHNlbGVjdGlvbiA9PT0gbm9ydGhDb29yZCB8fFxuICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24gPT09IHNvdXRoQ29vcmRcbiAgICAgICAgKSB7XG4gICAgICAgICAgZ29vZE1vdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnb29kTW92ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSWZTaGlwRml0c1ZlcnRpY2FsbHkoc2hpcGxlbmd0aCwgY29vcmQsIGNvb3JkaW5hdGVzYXJyYXkpIHtcbiAgICBjb25zdCBzZWxlY3RlZENvb3JkID0gY29vcmQuc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IHNlbGVjdGVkWCA9IE51bWJlcihzZWxlY3RlZENvb3JkWzBdKTtcbiAgICBjb25zdCBzZWxlY3RlZFkgPSBOdW1iZXIoc2VsZWN0ZWRDb29yZFsxXSk7XG4gICAgbGV0IGF2YWlsYWJsZXNwYWNlc1kgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXh0RGl2SUQgPSBzZWxlY3RlZFggKyBpICsgXCItXCIgKyBzZWxlY3RlZFk7XG4gICAgICBjb25zdCBuZXh0RGl2Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHREaXZJRCk7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHREaXZOb2RlICE9PSBudWxsICYmXG4gICAgICAgIG5leHREaXZOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFNlbGVjdGVkQVwiKVxuICAgICAgKSB7XG4gICAgICAgICsrYXZhaWxhYmxlc3BhY2VzWTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBsZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZJRCA9IHNlbGVjdGVkWCAtIGogKyBcIi1cIiArIHNlbGVjdGVkWTtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZXZpb3VzRGl2SUQpO1xuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91c0Rpdk5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgcHJldmlvdXNEaXZOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFNlbGVjdGVkQVwiKVxuICAgICAgKSB7XG4gICAgICAgICsrYXZhaWxhYmxlc3BhY2VzWTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXZhaWxhYmxlc3BhY2VzWSA+PSBzaGlwbGVuZ3RoIC0gY29vcmRpbmF0ZXNhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJZlNoaXBGaXRzSG9yaXpvbnRhbGx5KHNoaXBsZW5ndGgsIGNvb3JkLCBjb29yZGluYXRlc2FycmF5KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb29yZCA9IGNvb3JkLnNwbGl0KFwiLVwiKTtcbiAgICBjb25zdCBzZWxlY3RlZFggPSBOdW1iZXIoc2VsZWN0ZWRDb29yZFswXSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRZID0gTnVtYmVyKHNlbGVjdGVkQ29vcmRbMV0pO1xuXG4gICAgbGV0IGF2YWlsYWJsZXNwYWNlc1ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXh0RGl2SUQgPSBzZWxlY3RlZFggKyBcIi1cIiArIChzZWxlY3RlZFkgKyBpKTtcbiAgICAgIGNvbnN0IG5leHREaXZOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dERpdklEKTtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dERpdk5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgbmV4dERpdk5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90U2VsZWN0ZWRBXCIpXG4gICAgICApIHtcbiAgICAgICAgKythdmFpbGFibGVzcGFjZXNYO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwbGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2SUQgPSBzZWxlY3RlZFggKyBcIi1cIiArIChzZWxlY3RlZFkgLSBqKTtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZXZpb3VzRGl2SUQpO1xuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91c0Rpdk5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgcHJldmlvdXNEaXZOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFNlbGVjdGVkQVwiKVxuICAgICAgKSB7XG4gICAgICAgICsrYXZhaWxhYmxlc3BhY2VzWDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXZhaWxhYmxlc3BhY2VzWCA+PSBzaGlwbGVuZ3RoIC0gY29vcmRpbmF0ZXNhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJZkZpbmlzaGVkKGN1cnJlbnRzaGlwLCBjb29yZCkge1xuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkQVwiICsgcGxhY2VkKTtcbiAgICBpZiAoZGl2cy5sZW5ndGggPT09IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgY29uc3QgYXJyYXljb29yZCA9IGNvb3JkO1xuICAgICAgY29uc3QgbmV3YXJyYXljb29yZCA9IGFycmF5Y29vcmQubWFwKChlbGVtZW50KSA9PiBbXG4gICAgICAgIGVsZW1lbnQucmVwbGFjZShcIi1cIiwgXCIsXCIpLFxuICAgICAgXSk7XG4gICAgICBwbGF5ZXJBLnNoaXBzW3BsYWNlZF0uY29vcmRpbmF0ZXMgPSBuZXdhcnJheWNvb3JkO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdhcnJheWNvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllckEuZ2FtZWJvYXJkLmNvb3JkaW5hdGVzW25ld2FycmF5Y29vcmRbaV0udG9TdHJpbmcoKV0gPSAxO1xuICAgICAgfVxuICAgICAgcGxhY2VkKys7XG4gICAgICBpZiAocGxhY2VkID09PSA1KSB7XG4gICAgICAgIGNvbnRpbnVlcGxheWluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHBsYWNlQWxsU2hpcHMgfTtcbn0pKCk7XG5cbnNlbGVjdFNoaXBMb2NhdGlvbi5wbGFjZUFsbFNoaXBzKCk7XG5cbmNvbnN0IGF0dGFja29uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBkaXYgPSBlLnRhcmdldDtcbiAgY29uc3QgZGl2SUQgPSBlLnRhcmdldC5pZDtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJcIik7XG4gIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwibm90U2VsZWN0ZWRCXCIpO1xuICBjb25zdCBkaXZjb29yZCA9IFtkaXZJRC5yZXBsYWNlKFwiLVwiLCBcIixcIildO1xuICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja29uY2xpY2spO1xuICBnYW1lc3RhdHVzID0gZ2FtZUxvb3AoZGl2Y29vcmQsIHBsYXllckEsIHBsYXllckIpO1xuICBjb25zdCBuZXdtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBtb3ZlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZXNcIik7XG4gIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgbmV3bW92ZS50ZXh0Q29udGVudCA9IFwiWW91IGhhdmUgaGl0IGEgc2hpcCFcIjtcbiAgfSBlbHNlIHtcbiAgICBuZXdtb3ZlLnRleHRDb250ZW50ID0gXCJZb3UgbWlzc2VkLlwiO1xuICB9XG4gIGNvbnN0IG1vdmVzRGlzcGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb3Zlc1wiKTtcbiAgY29uc3QgbnVtYmVyT2ZNb3ZlcyA9IG1vdmVzRGlzcGxheWVkWzBdLmNoaWxkTm9kZXMubGVuZ3RoO1xuICBpZiAobnVtYmVyT2ZNb3ZlcyA9PT0gNykge1xuICAgIG1vdmVzRGlzcGxheWVkWzBdLnJlbW92ZUNoaWxkKG1vdmVzRGlzcGxheWVkWzBdLmZpcnN0Q2hpbGQpO1xuICB9XG4gIG1vdmVzLmFwcGVuZENoaWxkKG5ld21vdmUpO1xuICBjb25zdCBhZHZib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWR2Qm9hcmRcIik7XG4gIGNvbnN0IGFsbGVtcHR5ZGl2cyA9IGFkdmJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90U2VsZWN0ZWRCXCIpO1xuICBhbGxlbXB0eWRpdnMuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2tvbmNsaWNrKVxuICApO1xuICBjaGVja0ZvckVuZE9mR2FtZSgpO1xuICBpZiAoIWdhbWVzdGF0dXMpIHtcbiAgICBjb250aW51ZXBsYXlpbmcoKTtcbiAgfVxufTtcblxuY29uc3QgY29udGludWVwbGF5aW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgaW5mby50ZXh0Q29udGVudCA9XG4gICAgXCJBdHRhY2sgdGhlIGVuZW15IGJ5IGNsaWNraW5nIG9uIGFuIGVtcHR5IHNxdWFyZSBvbiB0aGUgZW5lbXkgYm9hcmQuXCI7XG4gIGNvbnN0IGFkdmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHZCb2FyZFwiKTtcbiAgY29uc3QgYWxsZW1wdHlkaXZzID0gYWR2Ym9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RTZWxlY3RlZEJcIik7XG4gIGFsbGVtcHR5ZGl2cy5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja29uY2xpY2spXG4gICk7XG59O1xuXG5jb25zdCBkb21QbGF5ZXJCID0gZnVuY3Rpb24gKGhpdG9ybWlzc0J2c0EsIGRpdikge1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkYnlCXCIpO1xuICBpZiAoaGl0b3JtaXNzQnZzQSA9PT0gXCJoaXRcIiB8fCBoaXRvcm1pc3NCdnNBID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgfVxuICBjb25zdCBuZXdtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBtb3ZlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZXNcIik7XG4gIGlmIChoaXRvcm1pc3NCdnNBID09PSBcImhpdFwiKSB7XG4gICAgbmV3bW92ZS50ZXh0Q29udGVudCA9IFwiUGxheWVyIEIgaGl0IG9uZSBvZiB5b3VyIHNoaXBzLlwiO1xuICB9IGVsc2UgaWYgKGhpdG9ybWlzc0J2c0EgPT09IFwibWlzc1wiKSB7XG4gICAgbmV3bW92ZS50ZXh0Q29udGVudCA9IFwiUGxheWVyIEIgbWlzc2VkLlwiO1xuICB9XG4gIGNvbnN0IG1vdmVzRGlzcGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb3Zlc1wiKTtcbiAgY29uc3QgbnVtYmVyT2ZNb3ZlcyA9IG1vdmVzRGlzcGxheWVkWzBdLmNoaWxkTm9kZXMubGVuZ3RoO1xuICBpZiAobnVtYmVyT2ZNb3ZlcyA9PT0gNykge1xuICAgIG1vdmVzRGlzcGxheWVkWzBdLnJlbW92ZUNoaWxkKG1vdmVzRGlzcGxheWVkWzBdLmZpcnN0Q2hpbGQpO1xuICB9XG4gIG1vdmVzLmFwcGVuZENoaWxkKG5ld21vdmUpO1xufTtcblxuY29uc3QgY2hlY2tGb3JFbmRPZkdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKGdhbWVzdGF0dXMpO1xuICBpZiAoZ2FtZXN0YXR1cykge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRTaGlwXCIpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBcIkdhbWVPdmVyXCI7XG4gICAgY29uc3QgYWR2Ym9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkdkJvYXJkXCIpO1xuICAgIGNvbnN0IGFsbGVtcHR5ZGl2cyA9IGFkdmJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90U2VsZWN0ZWRCXCIpO1xuICAgIGFsbGVtcHR5ZGl2cy5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrb25jbGljaylcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBzb3J0ZXIgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59O1xuXG4vL3RvIGRvXG5cbi8vIHJlbW92ZXIgYSBpbmZvcm1hY2FvIHF1ZSDDqSBwYXJhIGF0YWNhci5cbi8vIHNlbXByZSBxdWUgdW0gbmF2aW8gc2UgYWZ1bmRhciBkaXplci4gZSBhIHF1ZW0gw6kgcXVlIG8gbmF2aW8gcGVydGVuY2lhXG4vLyBxdWFuZG8gaGEgdW0gaGl0IGVzY3JldmVyIHF1ZSBoYSBwYXJhIGFsZW0gZGUgbXVkYXIgYSBjb3Jcbi8vIG11ZGFyIGEgY29yIGRlc3NlIG5hdmlvXG4vLyBsZWdlbmRhIGRhcyBjb3JlcyBlIG11ZGFyIGFzIGNvcmVzXG4vLyBnYW1lIG92ZXIgZSBkaXplciBxdWVtIMOpIHF1ZSBnYW5ob3Vcbi8vIHRhbHZleiBtZWxob3JhciBvIEFJXG5cbi8vIHNlIGNhbGhhciBhcyBtb3ZlcyBmaWNhdmFtIG1lbGhvciBwb3Igb3JkZW0gZW0gdmV6IGRlIHN1YnNpdHVpclxuIiwiZXhwb3J0IHsgY3JlYXRlUGxheWVyIH07XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHNoaXBzLCBnYW1lYm9hcmQsIGFkdmdhbWVib2FyZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zaGlwcyA9IHNoaXBzO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMuYWR2Z2FtZWJvYXJkID0gYWR2Z2FtZWJvYXJkO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9IGZ1bmN0aW9uIChwbGF5ZXIsIHNoaXBzLCBnYW1lYm9hcmQsIGFkdmdhbWVib2FyZCkge1xuICBjb25zdCBuZXdwbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllciwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKTtcbiAgcmV0dXJuIG5ld3BsYXllcjtcbn07XG5cbi8vbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXI7XG4iLCJleHBvcnQgeyBjcmVhdGVTaGlwRmxlZXQgfTtcblxuY29uc3QgY3JlYXRlQXJyYXlIaXRzID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICBsZXQgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFycmF5LnB1c2goMCk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcblxuY29uc3QgY2hlY2tJZlN1bmsgPSBmdW5jdGlvbiAoaGl0c2FycmF5KSB7XG4gIC8vY29uc29sZS5sb2coaGl0c2FycmF5KTtcbiAgaWYgKGhpdHNhcnJheS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSAwKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVTaGlwID0gZnVuY3Rpb24gKGxlbmd0aCwgbmFtZSwgcGxheWVyKSB7XG4gIGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgbmFtZSwgcGxheWVyKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuaGl0cyA9IGNyZWF0ZUFycmF5SGl0cyh0aGlzLmxlbmd0aCk7XG4gICAgICB0aGlzLnN1bmsgPSBjaGVja0lmU3Vuayh0aGlzLmhpdHMpO1xuICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtdO1xuICAgIH1cbiAgICBoaXQoaW5kZXgpIHtcbiAgICAgIHRoaXMuaGl0c1tpbmRleF0gPSAxO1xuICAgICAgdGhpcy5zdW5rID0gY2hlY2tJZlN1bmsodGhpcy5oaXRzKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hpcGNyZWF0ZWQgPSBuZXcgU2hpcChsZW5ndGgsIG5hbWUsIHBsYXllcik7XG4gIHJldHVybiBzaGlwY3JlYXRlZDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXBGbGVldCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgY29uc3QgY2FycmllciA9IGNyZWF0ZVNoaXAoNSwgXCJDYXJyaWVyXCIsIHBsYXllcik7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKDQsIFwiQmF0dGxlc2hpcFwiLCBwbGF5ZXIpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBjcmVhdGVTaGlwKDMsIFwiRGVzdHJveWVyXCIsIHBsYXllcik7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMywgXCJTdWJtYXJpbmVcIiwgcGxheWVyKTtcbiAgY29uc3QgcGF0cm9sYm9hdCA9IGNyZWF0ZVNoaXAoMiwgXCJQYXRyb2xib2F0XCIsIHBsYXllcik7XG4gIGNvbnN0IHNoaXBhcnJheSA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sYm9hdF07XG4gIHJldHVybiBzaGlwYXJyYXk7XG59O1xuXG4vLyBmb3Igbm9kZVxuLy9tb2R1bGUuZXhwb3J0cyA9IHNoaXBGbGVldDtcblxuLy8gc2hpcHMgc2hvdWxkIHByb2JhYmx5IGhhdmUgYSB1bmlxdWUgaWRcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==