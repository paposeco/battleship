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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  width: 1100px;\n  height: 600px;\n  margin: 200px auto;\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n.selectedA0,\n.selectedA1,\n.selectedA2,\n.selectedA3,\n.selectedA4 {\n  background-color: darkgreen;\n}\n\n.selectedB {\n  background-color: red;\n}\n\n.selectedbyB {\n  background-color: red;\n}\n\n.hit {\n  background-color: black;\n}\n\n#topnumberJ,\n#topnumberJAdv {\n  display: grid;\n  grid-template-columns: repeat(11, 22px);\n  gap: 4px;\n}\n\n#topnumberJ div,\n#topnumberJAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n#divoutside,\n#divoutsideAdv {\n  display: flex;\n  flex-direction: row;\n}\n\n#numberI,\n#numberIAdv {\n  display: grid;\n  grid-template-rows: repeat(10, 22px);\n  gap: 4px;\n  margin-right: 4px;\n}\n\n#numberI div,\n#numberIAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.opponentmove {\n  color: grey;\n}\n\n.movecounter {\n  color: lightgrey;\n  font-weight: normal;\n}\n\n#fleets {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n\n.sunk {\n  text-decoration: line-through;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;;;;;EAKE,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,QAAQ;EACR,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["body {\n  width: 1100px;\n  height: 600px;\n  margin: 200px auto;\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n.selectedA0,\n.selectedA1,\n.selectedA2,\n.selectedA3,\n.selectedA4 {\n  background-color: darkgreen;\n}\n\n.selectedB {\n  background-color: red;\n}\n\n.selectedbyB {\n  background-color: red;\n}\n\n.hit {\n  background-color: black;\n}\n\n#topnumberJ,\n#topnumberJAdv {\n  display: grid;\n  grid-template-columns: repeat(11, 22px);\n  gap: 4px;\n}\n\n#topnumberJ div,\n#topnumberJAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n#divoutside,\n#divoutsideAdv {\n  display: flex;\n  flex-direction: row;\n}\n\n#numberI,\n#numberIAdv {\n  display: grid;\n  grid-template-rows: repeat(10, 22px);\n  gap: 4px;\n  margin-right: 4px;\n}\n\n#numberI div,\n#numberIAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.opponentmove {\n  color: grey;\n}\n\n.movecounter {\n  color: lightgrey;\n  font-weight: normal;\n}\n\n#fleets {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n\n.sunk {\n  text-decoration: line-through;\n}\n"],"sourceRoot":""}]);
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
    //console.log("hit");
    for (let i = 0; i < victimsFleet.length; i++) {
      const arrayOfCoordinates = victimsFleet[i].coordinates.flat();
      const isItThisShip = arrayOfCoordinates.includes(
        transformedCoordinates[0]
      );
      // console.log(victimsFleet[i]);
      // console.log("coordinates");
      // console.log(coordinates);
      // console.log("transformed");
      // console.log(transformedCoordinates);
      // console.log("isit" + isItThisShip);
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
            //console.log("gameover");
            return "gameover";
          } else {
            return ["hit", victimsFleet[i].name];
          }
        }
        return "hit";
      }
    }
  } else {
    //console.log("miss");
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
let nummoves = 0;
const updatedPlayers = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.startGame)(playerA, playerB);

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

const domPlayerB = function (hitormissBvsA, div) {
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
    // newmove.textContent = `[${divid}]: The computer hit one of your ships.`;
    newmove.innerHTML = `<span class="movecounter">${nummoves}</span> [${divid}]: The computer hit one of your ships.`;
  } else if (hitormissBvsA === "miss") {
    // newmove.textContent = `[${divid}]: The computer missed.`;
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

// mudar a cor desse navio
// legenda das cores e mudar as cores
// game over e dizer quem é que ganhou
// talvez melhorar o AI


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICB3aWR0aDogMTEwMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbjogMjAwcHggYXV0bztcXG59XFxuXFxuI2JhdHRsZWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG4uaGl0Qm94IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuI3BsYXllckJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjJweCk7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2FkdkJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjJweCk7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnNlbGVjdGVkQTAsXFxuLnNlbGVjdGVkQTEsXFxuLnNlbGVjdGVkQTIsXFxuLnNlbGVjdGVkQTMsXFxuLnNlbGVjdGVkQTQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcbn1cXG5cXG4uc2VsZWN0ZWRCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNlbGVjdGVkYnlCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuI3RvcG51bWJlckosXFxuI3RvcG51bWJlckpBZHYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jdG9wbnVtYmVySiBkaXYsXFxuI3RvcG51bWJlckpBZHYgZGl2IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGl2b3V0c2lkZSxcXG4jZGl2b3V0c2lkZUFkdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI251bWJlckksXFxuI251bWJlcklBZHYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbiNudW1iZXJJIGRpdixcXG4jbnVtYmVySUFkdiBkaXYge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vcHBvbmVudG1vdmUge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5tb3ZlY291bnRlciB7XFxuICBjb2xvcjogbGlnaHRncmV5O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuI2ZsZWV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnN1bmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxRQUFRO0FBQ1Y7O0FBRUE7Ozs7O0VBS0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsUUFBUTtBQUNWOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgd2lkdGg6IDExMDBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDIwMHB4IGF1dG87XFxufVxcblxcbiNiYXR0bGVmaWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNTBweDtcXG59XFxuLmhpdEJveCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbiNhZHZCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zZWxlY3RlZEEwLFxcbi5zZWxlY3RlZEExLFxcbi5zZWxlY3RlZEEyLFxcbi5zZWxlY3RlZEEzLFxcbi5zZWxlY3RlZEE0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG59XFxuXFxuLnNlbGVjdGVkQiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zZWxlY3RlZGJ5QiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbiN0b3BudW1iZXJKLFxcbiN0b3BudW1iZXJKQWR2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjJweCk7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI3RvcG51bWJlckogZGl2LFxcbiN0b3BudW1iZXJKQWR2IGRpdiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Rpdm91dHNpZGUsXFxuI2Rpdm91dHNpZGVBZHYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbiNudW1iZXJJLFxcbiNudW1iZXJJQWR2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjJweCk7XFxuICBnYXA6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4jbnVtYmVySSBkaXYsXFxuI251bWJlcklBZHYgZGl2IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3Bwb25lbnRtb3ZlIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ubW92ZWNvdW50ZXIge1xcbiAgY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbiNmbGVldHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zdW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlU2hpcEZsZWV0IH0gZnJvbSBcIi4vc2hpcHMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgZG9tUGxheWVyQiB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5leHBvcnQgeyBzdGFydEdhbWUsIHNldHVwUGxheWVycywgYXR0YWNrLCBnYW1lTG9vcCB9O1xuXG4vL2NvbnN0IGNyZWF0ZVNoaXBGbGVldCA9IHJlcXVpcmUoXCIuL3NoaXBzLmpzXCIpO1xuLy9jb25zdCBjcmVhdGVQbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXIuanNcIik7XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgY29uc3QgYm9hcmRPYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIG9ialtpICsgXCIsXCIgKyBqXSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBib2FyZE9iamVjdCgpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHBsYXllcik7XG4gIHJldHVybiBnYW1lYm9hcmQ7XG59O1xuXG5jb25zdCBnZXRSYW5kb21JbnRJbmNsdXNpdmUgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG5jb25zdCBwaWNrTG9jYXRpb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IG9ialZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqKTtcbiAgY29uc3Qgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGxldCBlbXB0eUxvY2F0aW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ialZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChvYmpWYWx1ZXNbaV0gPT09IDApIHtcbiAgICAgIGVtcHR5TG9jYXRpb25zLnB1c2gob2JqS2V5c1tpXSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IG51bWJlckVtcHR5TG9jYXRpb25zID0gZW1wdHlMb2NhdGlvbnMubGVuZ3RoO1xuICBjb25zdCBwaWNrUmFuZG9tTG9jYXRpb24gPVxuICAgIGVtcHR5TG9jYXRpb25zW2dldFJhbmRvbUludEluY2x1c2l2ZSgwLCBudW1iZXJFbXB0eUxvY2F0aW9ucyAtIDEpXTtcbiAgcmV0dXJuIHBpY2tSYW5kb21Mb2NhdGlvbjtcbn07XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcmFuZG9tTG9jYXRpb247XG4gIGxldCByb3c7XG4gIGxldCBjb2x1bW47XG5cbiAgY29uc3QgbG9jYXRpb25zQXJyYXkgPSBmdW5jdGlvbiAoY3VycmVudGJvYXJkLCBjdXJyZW50c2hpcCwgb3JpZW50YXRpb24pIHtcbiAgICBsZXQgbmV3cG9zaXRpb247XG4gICAgbGV0IGZpeGVkcG9zaXRpb247XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInJvd1wiKSB7XG4gICAgICBuZXdwb3NpdGlvbiA9IGNvbHVtbjtcbiAgICAgIGZpeGVkcG9zaXRpb24gPSByb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld3Bvc2l0aW9uID0gcm93O1xuICAgICAgZml4ZWRwb3NpdGlvbiA9IGNvbHVtbjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjdXJyZW50c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2hpZnRlZCA9IG5ld3Bvc2l0aW9uIC0gaTtcbiAgICAgIGlmIChzaGlmdGVkIDwgMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBsb2NhdGlvbjtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJyb3dcIikge1xuICAgICAgICBsb2NhdGlvbiA9IGZpeGVkcG9zaXRpb24gKyBcIixcIiArIHNoaWZ0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbiA9IHNoaWZ0ZWQgKyBcIixcIiArIGZpeGVkcG9zaXRpb247XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0dXNPbkxvY2F0aW9uID0gY3VycmVudGJvYXJkLmNvb3JkaW5hdGVzW2xvY2F0aW9uXTtcbiAgICAgIGlmIChzdGF0dXNPbkxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgIGFycmF5LnB1c2goc2hpZnRlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgY3VycmVudHNoaXAubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHNoaWZ0ZWQgPSBuZXdwb3NpdGlvbiArIGo7XG4gICAgICBpZiAoc2hpZnRlZCA+IDEwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGxvY2F0aW9uO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInJvd1wiKSB7XG4gICAgICAgIGxvY2F0aW9uID0gZml4ZWRwb3NpdGlvbiArIFwiLFwiICsgc2hpZnRlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gc2hpZnRlZCArIFwiLFwiICsgZml4ZWRwb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXR1c09uTG9jYXRpb24gPSBjdXJyZW50Ym9hcmQuY29vcmRpbmF0ZXNbbG9jYXRpb25dO1xuICAgICAgaWYgKHN0YXR1c09uTG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgYXJyYXkucHVzaChzaGlmdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHN1bVNlcXVlbmNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBiOyBpKyspIHtcbiAgICAgIHN1bSArPSBhICsgaTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfTtcblxuICBjb25zdCBjb25zZWN1dGl2ZU51bWJlcnMgPSBmdW5jdGlvbiAoYXJyYXksIGN1cnJlbnRzaGlwbGVuZ3RoKSB7XG4gICAgbGV0IGdvb2RzcG90O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGJlZ2lubmluZ09mU2hpcCA9IGFycmF5W2ldO1xuICAgICAgLy90aGUgZmlyc3QgcG9zaXRpb24gYWxzbyBjb3VudHNcbiAgICAgIGNvbnN0IGVuZE9mU2hpcCA9IGJlZ2lubmluZ09mU2hpcCArIGN1cnJlbnRzaGlwbGVuZ3RoIC0gMTtcbiAgICAgIGlmIChlbmRPZlNoaXAgPiBhcnJheVthcnJheS5sZW5ndGhdKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgY29uc2VjdXRpdmUgPSBzdW1TZXF1ZW5jZShiZWdpbm5pbmdPZlNoaXAsIGVuZE9mU2hpcCk7XG5cbiAgICAgIGNvbnN0IGluYXJyYXkgPSBzdW1TZXF1ZW5jZShcbiAgICAgICAgYmVnaW5uaW5nT2ZTaGlwLFxuICAgICAgICBhcnJheVtpICsgY3VycmVudHNoaXBsZW5ndGggLSAxXVxuICAgICAgKTtcbiAgICAgIGlmIChjb25zZWN1dGl2ZSA9PT0gaW5hcnJheSkge1xuICAgICAgICByZXR1cm4gYmVnaW5uaW5nT2ZTaGlwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ29vZHNwb3QgPSBmYWxzZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnb29kc3BvdDtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlTnVtYmVycyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrRm9yRml0ID0gZnVuY3Rpb24gKGN1cnJlbnRzaGlwLCBjdXJyZW50Ym9hcmQpIHtcbiAgICBjb25zdCBzZWxlY3RlZEluaXRpYWxMb2NhdGlvbiA9IHJvdyArIFwiLFwiICsgY29sdW1uO1xuICAgIGNvbnN0IGF2YWlsYWJsZVNwYWNlc1JvdyA9IGxvY2F0aW9uc0FycmF5KGN1cnJlbnRib2FyZCwgY3VycmVudHNoaXAsIFwicm93XCIpXG4gICAgICAuY29uY2F0KGNvbHVtbilcbiAgICAgIC5zb3J0KGNvbXBhcmVOdW1iZXJzKTtcbiAgICBjb25zdCBhdmFpbGFibGVTcGFjZXNDb2x1bW4gPSBsb2NhdGlvbnNBcnJheShcbiAgICAgIGN1cnJlbnRib2FyZCxcbiAgICAgIGN1cnJlbnRzaGlwLFxuICAgICAgXCJjb2x1bW5cIlxuICAgIClcbiAgICAgIC5jb25jYXQocm93KVxuICAgICAgLnNvcnQoY29tcGFyZU51bWJlcnMpO1xuXG4gICAgaWYgKHJvdyAlIDIgPT09IDEpIHtcbiAgICAgIGlmIChhdmFpbGFibGVTcGFjZXNSb3cubGVuZ3RoIDwgY3VycmVudHNoaXAubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhdmFpbGFibGVTcGFjZXNDb2x1bW4ubGVuZ3RoIDwgY3VycmVudHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0cG9zaXRpb24gPSBjb25zZWN1dGl2ZU51bWJlcnMoXG4gICAgICAgICAgICBhdmFpbGFibGVTcGFjZXNDb2x1bW4sXG4gICAgICAgICAgICBjdXJyZW50c2hpcC5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghc3RhcnRwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFwiZmFpbHMgY2hlY2tcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtzdGFydHBvc2l0aW9uLCBjb2x1bW4sIFwidmVydGljYWxcIl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0cG9zaXRpb24gPSBjb25zZWN1dGl2ZU51bWJlcnMoXG4gICAgICAgICAgYXZhaWxhYmxlU3BhY2VzUm93LFxuICAgICAgICAgIGN1cnJlbnRzaGlwLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAoIXN0YXJ0cG9zaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gXCJmYWlscyBjaGVja1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcm93LCBzdGFydHBvc2l0aW9uLCBcImhvcml6b250YWxcIl07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdmFpbGFibGVTcGFjZXNDb2x1bW4ubGVuZ3RoIDwgY3VycmVudHNoaXAubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhdmFpbGFibGVTcGFjZXNSb3cubGVuZ3RoIDwgY3VycmVudHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0cG9zaXRpb24gPSBjb25zZWN1dGl2ZU51bWJlcnMoXG4gICAgICAgICAgICBhdmFpbGFibGVTcGFjZXNSb3csXG4gICAgICAgICAgICBjdXJyZW50c2hpcC5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghc3RhcnRwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFwiZmFpbHMgY2hlY2tcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtyb3csIHN0YXJ0cG9zaXRpb24sIFwiaG9yaXpvbnRhbFwiXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRwb3NpdGlvbiA9IGNvbnNlY3V0aXZlTnVtYmVycyhcbiAgICAgICAgICBhdmFpbGFibGVTcGFjZXNDb2x1bW4sXG4gICAgICAgICAgY3VycmVudHNoaXAubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGlmICghc3RhcnRwb3NpdGlvbikge1xuICAgICAgICAgIHJldHVybiBcImZhaWxzIGNoZWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtzdGFydHBvc2l0aW9uLCBjb2x1bW4sIFwidmVydGljYWxcIl07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGFuZ2VCb2FyZCA9IGZ1bmN0aW9uIChib2FyZG9iaiwgY3VycmVudHNoaXApIHtcbiAgICByYW5kb21Mb2NhdGlvbiA9IHBpY2tMb2NhdGlvbihib2FyZG9iai5jb29yZGluYXRlcykuc3BsaXQoXCIsXCIpO1xuICAgIHJvdyA9IE51bWJlcihyYW5kb21Mb2NhdGlvblswXSk7XG4gICAgY29sdW1uID0gTnVtYmVyKHJhbmRvbUxvY2F0aW9uWzFdKTtcbiAgICBjb25zdCBzZWxlY3RJbml0aWFsUGxhY2VtZW50ID0gY2hlY2tGb3JGaXQoY3VycmVudHNoaXAsIGJvYXJkb2JqKTtcbiAgICBpZiAoc2VsZWN0SW5pdGlhbFBsYWNlbWVudCA9PT0gXCJmYWlscyBjaGVja1wiKSB7XG4gICAgICByZXR1cm4gY2hhbmdlQm9hcmQoYm9hcmRvYmosIGN1cnJlbnRzaGlwKTtcbiAgICB9XG4gICAgaWYgKCFzZWxlY3RJbml0aWFsUGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gXCJFUlJPUiBFUlJPUlwiO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50c2hpcGxlbmd0aCA9IGN1cnJlbnRzaGlwLmxlbmd0aDtcbiAgICBjb25zdCBib2F0T3JpZW50YXRpb24gPSBzZWxlY3RJbml0aWFsUGxhY2VtZW50WzJdO1xuICAgIGxldCBjb29yZGluYXRlc1RvQ2hhbmdlID0gW107XG4gICAgaWYgKGJvYXRPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3Y29vcmQgPSBbXG4gICAgICAgICAgTnVtYmVyKHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMF0pICtcbiAgICAgICAgICAgIGkgK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgc2VsZWN0SW5pdGlhbFBsYWNlbWVudFsxXSxcbiAgICAgICAgXTtcbiAgICAgICAgY29vcmRpbmF0ZXNUb0NoYW5nZS5wdXNoKG5ld2Nvb3JkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50c2hpcGxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5ld2Nvb3JkID0gW1xuICAgICAgICAgIHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMF0gK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgKE51bWJlcihzZWxlY3RJbml0aWFsUGxhY2VtZW50WzFdKSArIGopLFxuICAgICAgICBdO1xuICAgICAgICBjb29yZGluYXRlc1RvQ2hhbmdlLnB1c2gobmV3Y29vcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvb3JkaW5hdGVzVG9DaGFuZ2UubGVuZ3RoOyBrKyspIHtcbiAgICAgIGJvYXJkb2JqLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzVG9DaGFuZ2Vba11dID0gMTtcbiAgICAgIGN1cnJlbnRzaGlwLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZXNUb0NoYW5nZVtrXSk7XG4gICAgfVxuICAgIHJldHVybiBcImRvbmVcIjtcbiAgfTtcbiAgcmV0dXJuIHsgY2hhbmdlQm9hcmQgfTtcbn0pKCk7XG5cbmNvbnN0IHNldHVwQm9hcmQgPSBmdW5jdGlvbiAocGxheWVyLCBwbGF5ZXJvYmopIHtcbiAgbGV0IG5ld0JvYXJkID0gY3JlYXRlR2FtZWJvYXJkKHBsYXllcik7XG4gIGNvbnN0IHNoaXBGbGVldCA9IGNyZWF0ZVNoaXBGbGVldChwbGF5ZXIpO1xuICBwbGF5ZXJvYmouc2hpcHMgPSBzaGlwRmxlZXQ7XG4gIGlmIChwbGF5ZXIgPT09IFwicGxheWVyQlwiKSB7XG4gICAgcGxhY2VTaGlwcy5jaGFuZ2VCb2FyZChuZXdCb2FyZCwgc2hpcEZsZWV0WzBdKTtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbMV0pO1xuICAgIHBsYWNlU2hpcHMuY2hhbmdlQm9hcmQobmV3Qm9hcmQsIHNoaXBGbGVldFsyXSk7XG4gICAgcGxhY2VTaGlwcy5jaGFuZ2VCb2FyZChuZXdCb2FyZCwgc2hpcEZsZWV0WzNdKTtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbNF0pO1xuICB9XG4gIGRpc3BsYXlib2FyZChuZXdCb2FyZCk7XG4gIHJldHVybiBuZXdCb2FyZDtcbn07XG5cbmNvbnN0IHNldHVwUGxheWVycyA9IGZ1bmN0aW9uIChwbGF5ZXIsIHNoaXBzLCBnYW1lYm9hcmQsIGFkdmdhbWVib2FyZCkge1xuICBjb25zdCBuZXdwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIocGxheWVyLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpO1xuICByZXR1cm4gbmV3cGxheWVyO1xufTtcblxuY29uc3QgYXR0YWNrID0gZnVuY3Rpb24gKGF0dGFja2VyLCB2aWN0aW0sIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHZpY3RpbXNCb2FyZCA9IHZpY3RpbS5nYW1lYm9hcmQ7XG4gIGNvbnN0IGF0dGFja2VyQWR2Qm9hcmQgPSBhdHRhY2tlci5hZHZnYW1lYm9hcmQ7XG4gIGNvbnN0IHZpY3RpbXNGbGVldCA9IHZpY3RpbS5zaGlwcztcbiAgY29uc3QgYm9hcmRTdGF0dXNPbkNvb3JkaW5hdGVzID0gdmljdGltc0JvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXTtcbiAgY29uc3QgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IFtjb29yZGluYXRlc1swXSArIFwiLFwiICsgY29vcmRpbmF0ZXNbMV1dO1xuICBpZiAoYm9hcmRTdGF0dXNPbkNvb3JkaW5hdGVzID09PSAxKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcImhpdFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpY3RpbXNGbGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYXJyYXlPZkNvb3JkaW5hdGVzID0gdmljdGltc0ZsZWV0W2ldLmNvb3JkaW5hdGVzLmZsYXQoKTtcbiAgICAgIGNvbnN0IGlzSXRUaGlzU2hpcCA9IGFycmF5T2ZDb29yZGluYXRlcy5pbmNsdWRlcyhcbiAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlc1swXVxuICAgICAgKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZpY3RpbXNGbGVldFtpXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNvb3JkaW5hdGVzXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0cmFuc2Zvcm1lZFwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJpc2l0XCIgKyBpc0l0VGhpc1NoaXApO1xuICAgICAgaWYgKGlzSXRUaGlzU2hpcCkge1xuICAgICAgICBjb25zdCBoaXRJbmRleCA9IGFycmF5T2ZDb29yZGluYXRlcy5maW5kSW5kZXgoXG4gICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXNbMF1cbiAgICAgICAgKTtcbiAgICAgICAgdmljdGltc0ZsZWV0W2ldLmhpdChoaXRJbmRleCk7XG4gICAgICAgIHZpY3RpbXNCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcInhcIjtcbiAgICAgICAgYXR0YWNrZXJBZHZCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcInhcIjtcbiAgICAgICAgdmljdGltc0ZsZWV0W2ldLmhpdHM7XG4gICAgICAgIGlmICh2aWN0aW1zRmxlZXRbaV0uc3Vuaykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hpcCBzdW5rOiBcIiArIHZpY3RpbXNGbGVldFtpXS5uYW1lKTtcbiAgICAgICAgICBjb25zdCBzdW5rZW5TaGlwcyA9IGNvdW50U3Vua2VuU2hpcHModmljdGltc0ZsZWV0KTtcbiAgICAgICAgICBpZiAoc3Vua2VuU2hpcHMgPT09IDUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnYW1lb3ZlclwiKTtcbiAgICAgICAgICAgIHJldHVybiBcImdhbWVvdmVyXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJoaXRcIiwgdmljdGltc0ZsZWV0W2ldLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIm1pc3NcIik7XG4gICAgdmljdGltc0JvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXSA9IFwibVwiO1xuICAgIGF0dGFja2VyQWR2Qm9hcmQuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNdID0gXCJtXCI7XG4gICAgcmV0dXJuIFwibWlzc1wiO1xuICB9XG59O1xuXG5jb25zdCBjb3VudFN1bmtlblNoaXBzID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzaGlwID0gYXJyYXlbaV07XG4gICAgY29uc3Qgc3VuayA9IHNoaXAuc3VuaztcbiAgICBpZiAoc3Vuaykge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufTtcblxuY29uc3QgZGlzcGxheWJvYXJkID0gZnVuY3Rpb24gKGN1cnJlbnRib2FyZCkge1xuICBjb25zb2xlLmxvZyhcIiBcIik7XG4gIGNvbnN0IGNvb3JkID0gY3VycmVudGJvYXJkLmNvb3JkaW5hdGVzO1xuICBjb25zb2xlLmxvZygwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCBcImRcIik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICBpZiAoaSA9PT0gMTApIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcImRcIixcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgMV0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDJdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyAzXSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgNF0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDVdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA2XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgN10sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDhdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA5XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgMTBdXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgaSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDFdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgMl0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyAzXSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDRdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgNV0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA2XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDddLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgOF0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA5XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDEwXVxuICAgICk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdhbWVMb29wKGxvY2F0aW9uLCBwbGF5ZXJBLCBwbGF5ZXJCKSB7XG4gIGxldCBzdG9wID0gZmFsc2U7XG4gIC8vcGxheWVyIEEgcGlja3MgYSBjb29yZGluYXRlXG5cbiAgLy9jb25zb2xlLmxvZyhcIkEgTG9jYXRpb24gc2VsZWN0ZWQ6IFwiKTtcbiAgLy9jb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gIC8vIHBsYXllciBBIGF0dGFja3NcbiAgY29uc3QgbG9jYXRpb250ZW1wID0gbG9jYXRpb24udG9TdHJpbmcoKS5zcGxpdChcIixcIik7XG4gIGNvbnN0IGZpbmFsbG9jYXRpb24gPSBbTnVtYmVyKGxvY2F0aW9udGVtcFswXSksIE51bWJlcihsb2NhdGlvbnRlbXBbMV0pXTtcbiAgY29uc3QgaGl0b3JtaXNzQXZzQiA9IGF0dGFjayhwbGF5ZXJBLCBwbGF5ZXJCLCBmaW5hbGxvY2F0aW9uKTtcbiAgLy9jb25zb2xlLmxvZyhoaXRvcm1pc3NBdnNCKTtcblxuICBpZiAoaGl0b3JtaXNzQXZzQiA9PT0gXCJoaXRcIiB8fCBoaXRvcm1pc3NBdnNCID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1jb29yZHRvaWRMb2NhdGlvbiA9IGxvY2F0aW9uLnRvU3RyaW5nKCkucmVwbGFjZShcIixcIiwgXCItXCIpO1xuICAgIGNvbnN0IG90aGVycGxheWVyYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm90aGVycGxheWVyXCIpO1xuICAgIGNvbnN0IGZpbmREaXZPdGhlciA9IG90aGVycGxheWVyYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbaWQ9XCIke3RyYW5zZm9ybWNvb3JkdG9pZExvY2F0aW9ufVwiXWBcbiAgICApO1xuICAgIC8vY29uc29sZS5sb2coZmluZERpdk90aGVyKTtcbiAgICBmaW5kRGl2T3RoZXIuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgfVxuICBpZiAoaGl0b3JtaXNzQXZzQiA9PT0gXCJnYW1lb3ZlclwiKSB7XG4gICAgc3RvcCA9IHRydWU7XG4gICAgcmV0dXJuIHN0b3A7XG4gIH1cblxuICAvLyAgcGxheWVyIEIgcGlja3MgYSBjb29yZGluYXRlXG5cbiAgY29uc3Qgc2VsZWN0ZWRMb2NhdGlvblJhdyA9IHBpY2tMb2NhdGlvbihcbiAgICBwbGF5ZXJCLmFkdmdhbWVib2FyZC5jb29yZGluYXRlc1xuICApLnNwbGl0KFwiLFwiKTtcbiAgY29uc3Qgc2VsZWN0ZWRMb2NhdGlvbiA9IFtcbiAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvblJhd1swXSksXG4gICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25SYXdbMV0pLFxuICBdO1xuICAvL2NvbnNvbGUubG9nKFwiQiBMb2NhdGlvbiBzZWxlY3RlZDogXCIgKyBzZWxlY3RlZExvY2F0aW9uKTtcbiAgLy9wbGF5ZXIgQiBhdHRhY2tzXG4gIC8vY29uc29sZS5sb2coc2VsZWN0ZWRMb2NhdGlvbik7XG4gIGNvbnN0IHRyYW5zZm9ybWNvb3JkdG9pZCA9IHNlbGVjdGVkTG9jYXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKFwiLFwiLCBcIi1cIik7XG4gIGNvbnN0IG1haW5wbGF5ZXJib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbnBsYXllclwiKTtcbiAgY29uc3QgZmluZERpdiA9IG1haW5wbGF5ZXJib2FyZC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke3RyYW5zZm9ybWNvb3JkdG9pZH1cIl1gKTtcbiAgY29uc3QgaGl0b3JtaXNzQnZzQSA9IGF0dGFjayhwbGF5ZXJCLCBwbGF5ZXJBLCBzZWxlY3RlZExvY2F0aW9uKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBkb21QbGF5ZXJCKGhpdG9ybWlzc0J2c0EsIGZpbmREaXYpO1xuICB9LCAxNTAwKTtcblxuICBpZiAoaGl0b3JtaXNzQnZzQSA9PT0gXCJnYW1lb3ZlclwiKSB7XG4gICAgc3RvcCA9IHRydWU7XG4gICAgcmV0dXJuIHN0b3A7XG4gIH1cbiAgcmV0dXJuIHN0b3A7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGNvbnN0IHBsYXllckFCb2FyZCA9IHNldHVwQm9hcmQoXCJwbGF5ZXJBXCIsIHBsYXllcjEpO1xuICBjb25zdCBwbGF5ZXJBVHJhY2tzQkJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyQVRyYWNrc0JcIik7XG4gIHBsYXllcjEuZ2FtZWJvYXJkID0gcGxheWVyQUJvYXJkO1xuICBwbGF5ZXIxLmFkdmdhbWVib2FyZCA9IHBsYXllckFUcmFja3NCQm9hcmQ7XG4gIGNvbnN0IHBsYXllckJCb2FyZCA9IHNldHVwQm9hcmQoXCJwbGF5ZXJCXCIsIHBsYXllcjIpO1xuICBjb25zdCBwbGF5ZXJCVHJhY2tzQUJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyQlRyYWNrc0FcIik7XG4gIHBsYXllcjIuZ2FtZWJvYXJkID0gcGxheWVyQkJvYXJkO1xuICBwbGF5ZXIyLmFkdmdhbWVib2FyZCA9IHBsYXllckJUcmFja3NBQm9hcmQ7XG4gIHJldHVybiBbcGxheWVyMSwgcGxheWVyMl07XG59XG5cbi8vc3RhcnRHYW1lKCk7XG5cbi8vIGxldCBsb29waXQgPSBnYW1lTG9vcFByb21wdCgpO1xuLy8gd2hpbGUgKCFsb29waXQpIHtcbi8vICAgbG9vcGl0ID0gZ2FtZUxvb3BQcm9tcHQoKTtcbi8vIH1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUsIHNldHVwUGxheWVycywgYXR0YWNrLCBnYW1lTG9vcCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuZXhwb3J0IHsgZG9tUGxheWVyQiB9O1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyQm9hcmRcIik7XG5jb25zdCBhZHZCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWR2Qm9hcmRcIik7XG4vL2knbSBhdHJpYnV0dGluZyBjb29yZGluYXRlcyBkbyBwbGF5ZXIncyBBIHNoaXBzLCBhbmQgY2hhbmdpbmcgdGhlbSBsYXRlciBhY2NvcmRpbmcgdG8gdXNlciBpbnB1dFxubGV0IHBsYXllckEgPSBzZXR1cFBsYXllcnMoXCJwbGF5ZXJBXCIsIFtdLCB7fSwge30pO1xubGV0IHBsYXllckIgPSBzZXR1cFBsYXllcnMoXCJwbGF5ZXJCXCIsIFtdLCB7fSwge30pO1xubGV0IG51bW1vdmVzID0gMDtcbmNvbnN0IHVwZGF0ZWRQbGF5ZXJzID0gc3RhcnRHYW1lKHBsYXllckEsIHBsYXllckIpO1xuXG5wbGF5ZXJBID0gdXBkYXRlZFBsYXllcnNbMF07XG5wbGF5ZXJCID0gdXBkYXRlZFBsYXllcnNbMV07XG5cbi8vb25wYWdlbG9hZFxuXG5jb25zdCB0b3BudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcG51bWJlckpcIik7XG5jb25zdCB0b3BudW1iZXJBZHYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcG51bWJlckpBZHZcIik7XG5mb3IgKGxldCBrID0gMDsgayA8PSAxMDsgaysrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRpdmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZiAoayA9PT0gMCkge1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZGl2YS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgZGl2LnRleHRDb250ZW50ID0gaztcbiAgICBkaXZhLnRleHRDb250ZW50ID0gaztcbiAgfVxuICB0b3BudW1iZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgdG9wbnVtYmVyQWR2LmFwcGVuZENoaWxkKGRpdmEpO1xufVxuXG5jb25zdCBudW1iZXJJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJJXCIpO1xuY29uc3QgbnVtYmVySUFkdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVySUFkdlwiKTtcbmZvciAobGV0IHogPSAxOyB6IDw9IDEwOyB6KyspIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGl2YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi50ZXh0Q29udGVudCA9IHo7XG4gIGRpdmEudGV4dENvbnRlbnQgPSB6O1xuICBudW1iZXJJLmFwcGVuZENoaWxkKGRpdik7XG4gIG51bWJlcklBZHYuYXBwZW5kQ2hpbGQoZGl2YSk7XG59XG5cbmZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgIGNvbnN0IGRpdkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpdkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkEuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSArIFwiLVwiICsgaik7XG4gICAgZGl2QS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpdEJveCBwbGF5ZXJBIG5vdFNlbGVjdGVkQVwiKTtcbiAgICBkaXZCLnNldEF0dHJpYnV0ZShcImlkXCIsIGkgKyBcIi1cIiArIGopO1xuICAgIGRpdkIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaXRCb3ggb3RoZXJwbGF5ZXIgbm90U2VsZWN0ZWRCXCIpO1xuICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKGRpdkEpO1xuICAgIGFkdkJvYXJkLmFwcGVuZENoaWxkKGRpdkIpO1xuICB9XG59XG5cbi8vIHBsYWNlIHNoaXBzXG5cbmxldCBnYW1lc3RhdHVzO1xuY29uc3Qgc2VsZWN0U2hpcExvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHBsYWNlZCA9IDA7XG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChjdXJyZW50c2hpcCkge1xuICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgIGNvbnN0IGN1cnJlbnRzaGlwdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRTaGlwXCIpO1xuICAgIGxldCBjb29yZGluYXRlc0xlbmd0aDtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gY3VycmVudHNoaXAubGVuZ3RoO1xuICAgIGNvbnN0IHNoaXBOYW1lID0gY3VycmVudHNoaXAubmFtZTtcbiAgICBjdXJyZW50c2hpcHRpdGxlLnRleHRDb250ZW50ID0gYFNlbGVjdCAke3NoaXBMZW5ndGh9IGNvbnNlY3V0aXZlIHNxdWFyZXMgZm9yIHBsYWNpbmcgeW91ciAke3NoaXBOYW1lfS5gO1xuICAgIGNvbnN0IGFsbGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdFNlbGVjdGVkQVwiKTtcbiAgICBmdW5jdGlvbiBzZWxlY3RTcXVhcmUoZSkge1xuICAgICAgY29uc3QgZGl2aWQgPSBlLnRhcmdldC5pZDtcbiAgICAgIGNvbnN0IGxlZ2FsTW92ZSA9IGNoZWNrQ29uc2VjdXRpdmVTcXVhcmVzKGRpdmlkLCBjb29yZGluYXRlcywgc2hpcExlbmd0aCk7XG4gICAgICBpZiAobGVnYWxNb3ZlKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goZGl2aWQpO1xuICAgICAgICBjb29yZGluYXRlc0xlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkQVwiICsgcGxhY2VkKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm5vdFNlbGVjdGVkQVwiKTtcbiAgICAgICAgY2hlY2tJZkZpbmlzaGVkKGN1cnJlbnRzaGlwLCBjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChjb29yZGluYXRlc0xlbmd0aCA9PT0gc2hpcExlbmd0aCkge1xuICAgICAgICAgIGFsbGRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0U3F1YXJlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocGxhY2VkIDwgNSkge1xuICAgICAgICAgICAgcGxhY2VBbGxTaGlwcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBhbGxkaXZzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdFNxdWFyZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZUFsbFNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzVG9CZVBsYWNlZCA9IHBsYXllckEuc2hpcHM7XG4gICAgcGxhY2VTaGlwKHNoaXBzVG9CZVBsYWNlZFtwbGFjZWRdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ29uc2VjdXRpdmVTcXVhcmVzKFxuICAgIGN1cnJlbnRzZWxlY3Rpb24sXG4gICAgY29vcmRpbmF0ZXNhcnJheSxcbiAgICBzaGlwbGVuZ3RoXG4gICkge1xuICAgIGxldCBnb29kTW92ZSA9IGZhbHNlO1xuICAgIGlmIChjb29yZGluYXRlc2FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gY2hlY2tzIGlmIGl0IGZpdHMgaG9yaXpvbnRhbGx5IGZpcnN0IGFuZCB0aGVuIHZlcnRpY2FsbHkgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiAoXG4gICAgICAgIGNoZWNrSWZTaGlwRml0c0hvcml6b250YWxseShcbiAgICAgICAgICBzaGlwbGVuZ3RoLFxuICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24sXG4gICAgICAgICAgY29vcmRpbmF0ZXNhcnJheVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNoZWNrSWZTaGlwRml0c1ZlcnRpY2FsbHkoXG4gICAgICAgICAgc2hpcGxlbmd0aCxcbiAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgICAgICAgIGNvb3JkaW5hdGVzYXJyYXlcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29vcmRpbmF0ZXNhcnJheS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzTnVtYmVycyA9IGNvb3JkaW5hdGVzYXJyYXlbMF0uc3BsaXQoXCItXCIpO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXNYID0gTnVtYmVyKGNvb3JkaW5hdGVzTnVtYmVyc1swXSk7XG4gICAgICBjb25zdCBjb29yZGluYXRlc1kgPSBOdW1iZXIoY29vcmRpbmF0ZXNOdW1iZXJzWzFdKTtcbiAgICAgIGNvbnN0IG5vcnRoQ29vcmQgPSBjb29yZGluYXRlc1ggLSAxICsgXCItXCIgKyBjb29yZGluYXRlc1k7XG4gICAgICBjb25zdCBzb3V0aENvb3JkID0gY29vcmRpbmF0ZXNYICsgMSArIFwiLVwiICsgY29vcmRpbmF0ZXNZO1xuICAgICAgY29uc3Qgd2VzdENvb3JkID0gY29vcmRpbmF0ZXNYICsgXCItXCIgKyAoY29vcmRpbmF0ZXNZIC0gMSk7XG4gICAgICBjb25zdCBlYXN0Q29vcmQgPSBjb29yZGluYXRlc1ggKyBcIi1cIiArIChjb29yZGluYXRlc1kgKyAxKTtcblxuICAgICAgY29uc3QgbGVnYWxNb3ZlcyA9IFtub3J0aENvb3JkLCBzb3V0aENvb3JkLCB3ZXN0Q29vcmQsIGVhc3RDb29yZF07XG5cbiAgICAgIGlmIChsZWdhbE1vdmVzLmluY2x1ZGVzKGN1cnJlbnRzZWxlY3Rpb24pKSB7XG4gICAgICAgIC8vIHdpdGggY3VycmVudCBzZWxlY3Rpb24sIHRoZSBzaGlwIHdvdWxkIGJlIHBsYWNlZCBob3c/XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb25TcGxpdCA9IGN1cnJlbnRzZWxlY3Rpb24uc3BsaXQoXCItXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uWCA9IE51bWJlcihjdXJyZW50U2VsZWN0aW9uU3BsaXRbMF0pO1xuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uWSA9IE51bWJlcihjdXJyZW50U2VsZWN0aW9uU3BsaXRbMV0pO1xuICAgICAgICBpZiAoY3VycmVudFNlbGVjdGlvblggPT09IGNvb3JkaW5hdGVzWCkge1xuICAgICAgICAgIC8vaG9yaXpvbnRhbFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNoZWNrSWZTaGlwRml0c0hvcml6b250YWxseShcbiAgICAgICAgICAgICAgc2hpcGxlbmd0aCxcbiAgICAgICAgICAgICAgY3VycmVudHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXNhcnJheVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZ29vZE1vdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3ZlcnRpY2FsXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2hlY2tJZlNoaXBGaXRzVmVydGljYWxseShcbiAgICAgICAgICAgICAgc2hpcGxlbmd0aCxcbiAgICAgICAgICAgICAgY3VycmVudHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXNhcnJheVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZ29vZE1vdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY29vcmRpbmF0ZXNYID0gW107XG4gICAgICBsZXQgY29vcmRpbmF0ZXNZID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2VwYXJhdGVDb29yZCA9IGNvb3JkaW5hdGVzYXJyYXlbaV0uc3BsaXQoXCItXCIpO1xuICAgICAgICBjb29yZGluYXRlc1gucHVzaChOdW1iZXIoc2VwYXJhdGVDb29yZFswXSkpO1xuICAgICAgICBjb29yZGluYXRlc1kucHVzaChOdW1iZXIoc2VwYXJhdGVDb29yZFsxXSkpO1xuICAgICAgfVxuICAgICAgaWYgKGNvb3JkaW5hdGVzWFswXSA9PT0gY29vcmRpbmF0ZXNYWzFdKSB7XG4gICAgICAgIC8vaG9yaXpvbnRhbFxuICAgICAgICBjb29yZGluYXRlc1kuc29ydChzb3J0ZXIpO1xuICAgICAgICBjb25zdCB3ZXN0Q29vcmQgPSBjb29yZGluYXRlc1hbMF0gKyBcIi1cIiArIChjb29yZGluYXRlc1lbMF0gLSAxKTtcbiAgICAgICAgY29uc3QgZWFzdENvb3JkID1cbiAgICAgICAgICBjb29yZGluYXRlc1hbMF0gKyBcIi1cIiArIChjb29yZGluYXRlc1lbY29vcmRpbmF0ZXNZLmxlbmd0aCAtIDFdICsgMSk7XG4gICAgICAgIGlmIChjdXJyZW50c2VsZWN0aW9uID09PSB3ZXN0Q29vcmQgfHwgY3VycmVudHNlbGVjdGlvbiA9PT0gZWFzdENvb3JkKSB7XG4gICAgICAgICAgZ29vZE1vdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3ZlcnRpY2FsXG4gICAgICAgIGNvb3JkaW5hdGVzWC5zb3J0KHNvcnRlcik7XG4gICAgICAgIGNvbnN0IG5vcnRoQ29vcmQgPSBjb29yZGluYXRlc1hbMF0gLSAxICsgXCItXCIgKyBjb29yZGluYXRlc1lbMF07XG4gICAgICAgIGNvbnN0IHNvdXRoQ29vcmQgPVxuICAgICAgICAgIGNvb3JkaW5hdGVzWFtjb29yZGluYXRlc1gubGVuZ3RoIC0gMV0gKyAxICsgXCItXCIgKyBjb29yZGluYXRlc1lbMF07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uID09PSBub3J0aENvb3JkIHx8XG4gICAgICAgICAgY3VycmVudHNlbGVjdGlvbiA9PT0gc291dGhDb29yZFxuICAgICAgICApIHtcbiAgICAgICAgICBnb29kTW92ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdvb2RNb3ZlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJZlNoaXBGaXRzVmVydGljYWxseShzaGlwbGVuZ3RoLCBjb29yZCwgY29vcmRpbmF0ZXNhcnJheSkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ29vcmQgPSBjb29yZC5zcGxpdChcIi1cIik7XG4gICAgY29uc3Qgc2VsZWN0ZWRYID0gTnVtYmVyKHNlbGVjdGVkQ29vcmRbMF0pO1xuICAgIGNvbnN0IHNlbGVjdGVkWSA9IE51bWJlcihzZWxlY3RlZENvb3JkWzFdKTtcbiAgICBsZXQgYXZhaWxhYmxlc3BhY2VzWSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5leHREaXZJRCA9IHNlbGVjdGVkWCArIGkgKyBcIi1cIiArIHNlbGVjdGVkWTtcbiAgICAgIGNvbnN0IG5leHREaXZOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dERpdklEKTtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dERpdk5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgbmV4dERpdk5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90U2VsZWN0ZWRBXCIpXG4gICAgICApIHtcbiAgICAgICAgKythdmFpbGFibGVzcGFjZXNZO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcGxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0RpdklEID0gc2VsZWN0ZWRYIC0gaiArIFwiLVwiICsgc2VsZWN0ZWRZO1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJldmlvdXNEaXZJRCk7XG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzRGl2Tm9kZSAhPT0gbnVsbCAmJlxuICAgICAgICBwcmV2aW91c0Rpdk5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90U2VsZWN0ZWRBXCIpXG4gICAgICApIHtcbiAgICAgICAgKythdmFpbGFibGVzcGFjZXNZO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdmFpbGFibGVzcGFjZXNZID49IHNoaXBsZW5ndGggLSBjb29yZGluYXRlc2FycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0lmU2hpcEZpdHNIb3Jpem9udGFsbHkoc2hpcGxlbmd0aCwgY29vcmQsIGNvb3JkaW5hdGVzYXJyYXkpIHtcbiAgICBjb25zdCBzZWxlY3RlZENvb3JkID0gY29vcmQuc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IHNlbGVjdGVkWCA9IE51bWJlcihzZWxlY3RlZENvb3JkWzBdKTtcbiAgICBjb25zdCBzZWxlY3RlZFkgPSBOdW1iZXIoc2VsZWN0ZWRDb29yZFsxXSk7XG5cbiAgICBsZXQgYXZhaWxhYmxlc3BhY2VzWCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5leHREaXZJRCA9IHNlbGVjdGVkWCArIFwiLVwiICsgKHNlbGVjdGVkWSArIGkpO1xuICAgICAgY29uc3QgbmV4dERpdk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0RGl2SUQpO1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0RGl2Tm9kZSAhPT0gbnVsbCAmJlxuICAgICAgICBuZXh0RGl2Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RTZWxlY3RlZEFcIilcbiAgICAgICkge1xuICAgICAgICArK2F2YWlsYWJsZXNwYWNlc1g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBsZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZJRCA9IHNlbGVjdGVkWCArIFwiLVwiICsgKHNlbGVjdGVkWSAtIGopO1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJldmlvdXNEaXZJRCk7XG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzRGl2Tm9kZSAhPT0gbnVsbCAmJlxuICAgICAgICBwcmV2aW91c0Rpdk5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90U2VsZWN0ZWRBXCIpXG4gICAgICApIHtcbiAgICAgICAgKythdmFpbGFibGVzcGFjZXNYO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhdmFpbGFibGVzcGFjZXNYID49IHNoaXBsZW5ndGggLSBjb29yZGluYXRlc2FycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0lmRmluaXNoZWQoY3VycmVudHNoaXAsIGNvb3JkKSB7XG4gICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRBXCIgKyBwbGFjZWQpO1xuICAgIGlmIChkaXZzLmxlbmd0aCA9PT0gY3VycmVudHNoaXAubGVuZ3RoKSB7XG4gICAgICBjb25zdCBhcnJheWNvb3JkID0gY29vcmQ7XG4gICAgICBjb25zdCBuZXdhcnJheWNvb3JkID0gYXJyYXljb29yZC5tYXAoKGVsZW1lbnQpID0+IFtcbiAgICAgICAgZWxlbWVudC5yZXBsYWNlKFwiLVwiLCBcIixcIiksXG4gICAgICBdKTtcbiAgICAgIHBsYXllckEuc2hpcHNbcGxhY2VkXS5jb29yZGluYXRlcyA9IG5ld2FycmF5Y29vcmQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld2FycmF5Y29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGxheWVyQS5nYW1lYm9hcmQuY29vcmRpbmF0ZXNbbmV3YXJyYXljb29yZFtpXS50b1N0cmluZygpXSA9IDE7XG4gICAgICB9XG4gICAgICBwbGFjZWQrKztcbiAgICAgIGlmIChwbGFjZWQgPT09IDUpIHtcbiAgICAgICAgY29udGludWVwbGF5aW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgcGxhY2VBbGxTaGlwcyB9O1xufSkoKTtcblxuc2VsZWN0U2hpcExvY2F0aW9uLnBsYWNlQWxsU2hpcHMoKTtcblxuY29uc3QgYXR0YWNrb25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGRpdiA9IGUudGFyZ2V0O1xuICBjb25zdCBkaXZJRCA9IGUudGFyZ2V0LmlkO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkQlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJub3RTZWxlY3RlZEJcIik7XG4gIGNvbnN0IGRpdmNvb3JkID0gW2RpdklELnJlcGxhY2UoXCItXCIsIFwiLFwiKV07XG4gIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrb25jbGljayk7XG4gIGdhbWVzdGF0dXMgPSBnYW1lTG9vcChkaXZjb29yZCwgcGxheWVyQSwgcGxheWVyQik7XG4gIGNvbnN0IG5ld21vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICsrbnVtbW92ZXM7XG5cbiAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICBuZXdtb3ZlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1vdmVjb3VudGVyXCI+JHtudW1tb3Zlc308L3NwYW4+IFske2RpdklEfV06IFlvdSBoYXZlIGhpdCBhIHNoaXAhYDtcbiAgICAvL25ld21vdmUudGV4dENvbnRlbnQgPSBgWyR7ZGl2SUR9XTogWW91IGhhdmUgaGl0IGEgc2hpcCEgYDtcbiAgfSBlbHNlIHtcbiAgICBuZXdtb3ZlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1vdmVjb3VudGVyXCI+JHtudW1tb3Zlc308L3NwYW4+IFske2RpdklEfV06IFlvdSBtaXNzZWRgO1xuICAgIC8vICAgIG5ld21vdmUudGV4dENvbnRlbnQgPSBgWyR7ZGl2SUR9XTogWW91IG1pc3NlZC4gYDtcbiAgfVxuICBjb25zdCBtb3Zlc0Rpc3BsYXllZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW92ZXNcIik7XG4gIGNvbnN0IG51bWJlck9mTW92ZXMgPSBtb3Zlc0Rpc3BsYXllZFswXS5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgaWYgKG51bWJlck9mTW92ZXMgPT09IDcpIHtcbiAgICBtb3Zlc0Rpc3BsYXllZFswXS5yZW1vdmVDaGlsZChtb3Zlc0Rpc3BsYXllZFswXS5maXJzdENoaWxkKTtcbiAgfVxuXG4gIG1vdmVzLmFwcGVuZENoaWxkKG5ld21vdmUpO1xuICAvLyBtb3Zlcy5pbnNlcnRCZWZvcmUoc3BhbiwgbmV3bW92ZSk7XG4gIGNvbnN0IGFkdmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHZCb2FyZFwiKTtcbiAgY29uc3QgYWxsZW1wdHlkaXZzID0gYWR2Ym9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RTZWxlY3RlZEJcIik7XG4gIGFsbGVtcHR5ZGl2cy5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja29uY2xpY2spXG4gICk7XG4gIGNoZWNrRm9yRW5kT2ZHYW1lKCk7XG4gIGlmICghZ2FtZXN0YXR1cykge1xuICAgIGNvbnRpbnVlcGxheWluZygpO1xuICB9XG59O1xuXG5jb25zdCBjb250aW51ZXBsYXlpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRTaGlwXCIpO1xuICBpbmZvLnRleHRDb250ZW50ID1cbiAgICBcIkF0dGFjayB0aGUgZW5lbXkgYnkgY2xpY2tpbmcgb24gYW4gZW1wdHkgc3F1YXJlIG9uIHRoZSBlbmVteSBib2FyZC5cIjtcbiAgY29uc3QgYWR2Ym9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkdkJvYXJkXCIpO1xuICBjb25zdCBhbGxlbXB0eWRpdnMgPSBhZHZib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdFNlbGVjdGVkQlwiKTtcbiAgYWxsZW1wdHlkaXZzLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrb25jbGljaylcbiAgKTtcbn07XG5cbmNvbnN0IGRvbVBsYXllckIgPSBmdW5jdGlvbiAoaGl0b3JtaXNzQnZzQSwgZGl2KSB7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRieUJcIik7XG4gIGlmIChoaXRvcm1pc3NCdnNBID09PSBcImhpdFwiIHx8IGhpdG9ybWlzc0J2c0EgPT09IFwiZ2FtZW92ZXJcIikge1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICB9XG4gIGNvbnN0IG5ld21vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIG5ld21vdmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvcHBvbmVudG1vdmVcIik7XG4gIGNvbnN0IG1vdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3Zlc1wiKTtcbiAgbnVtbW92ZXMrKztcbiAgY29uc3QgZGl2aWQgPSBkaXYuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gIGlmIChoaXRvcm1pc3NCdnNBID09PSBcImhpdFwiKSB7XG4gICAgLy8gbmV3bW92ZS50ZXh0Q29udGVudCA9IGBbJHtkaXZpZH1dOiBUaGUgY29tcHV0ZXIgaGl0IG9uZSBvZiB5b3VyIHNoaXBzLmA7XG4gICAgbmV3bW92ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtb3ZlY291bnRlclwiPiR7bnVtbW92ZXN9PC9zcGFuPiBbJHtkaXZpZH1dOiBUaGUgY29tcHV0ZXIgaGl0IG9uZSBvZiB5b3VyIHNoaXBzLmA7XG4gIH0gZWxzZSBpZiAoaGl0b3JtaXNzQnZzQSA9PT0gXCJtaXNzXCIpIHtcbiAgICAvLyBuZXdtb3ZlLnRleHRDb250ZW50ID0gYFske2RpdmlkfV06IFRoZSBjb21wdXRlciBtaXNzZWQuYDtcbiAgICBuZXdtb3ZlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1vdmVjb3VudGVyXCI+JHtudW1tb3Zlc308L3NwYW4+IFske2RpdmlkfV06IFRoZSBjb21wdXRlciBtaXNzZWQuYDtcbiAgfVxuICBjb25zdCBtb3Zlc0Rpc3BsYXllZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW92ZXNcIik7XG4gIGNvbnN0IG51bWJlck9mTW92ZXMgPSBtb3Zlc0Rpc3BsYXllZFswXS5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgaWYgKG51bWJlck9mTW92ZXMgPT09IDcpIHtcbiAgICBtb3Zlc0Rpc3BsYXllZFswXS5yZW1vdmVDaGlsZChtb3Zlc0Rpc3BsYXllZFswXS5maXJzdENoaWxkKTtcbiAgfVxuICBtb3Zlcy5hcHBlbmRDaGlsZChuZXdtb3ZlKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yRW5kT2ZHYW1lID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhnYW1lc3RhdHVzKTtcbiAgaWYgKGdhbWVzdGF0dXMpIHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gXCJHYW1lT3ZlclwiO1xuICAgIGNvbnN0IGFkdmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHZCb2FyZFwiKTtcbiAgICBjb25zdCBhbGxlbXB0eWRpdnMgPSBhZHZib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdFNlbGVjdGVkQlwiKTtcbiAgICBhbGxlbXB0eWRpdnMuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja29uY2xpY2spXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3Qgc29ydGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufTtcblxuLy90byBkb1xuXG4vLyByZW1vdmVyIGEgaW5mb3JtYWNhbyBxdWUgw6kgcGFyYSBhdGFjYXIuXG4vLyBzZW1wcmUgcXVlIHVtIG5hdmlvIHNlIGFmdW5kYXIgZGl6ZXIuIGUgYSBxdWVtIMOpIHF1ZSBvIG5hdmlvIHBlcnRlbmNpYVxuXG4vLyBtdWRhciBhIGNvciBkZXNzZSBuYXZpb1xuLy8gbGVnZW5kYSBkYXMgY29yZXMgZSBtdWRhciBhcyBjb3Jlc1xuLy8gZ2FtZSBvdmVyIGUgZGl6ZXIgcXVlbSDDqSBxdWUgZ2FuaG91XG4vLyB0YWx2ZXogbWVsaG9yYXIgbyBBSVxuIiwiZXhwb3J0IHsgY3JlYXRlUGxheWVyIH07XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHNoaXBzLCBnYW1lYm9hcmQsIGFkdmdhbWVib2FyZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zaGlwcyA9IHNoaXBzO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMuYWR2Z2FtZWJvYXJkID0gYWR2Z2FtZWJvYXJkO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9IGZ1bmN0aW9uIChwbGF5ZXIsIHNoaXBzLCBnYW1lYm9hcmQsIGFkdmdhbWVib2FyZCkge1xuICBjb25zdCBuZXdwbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllciwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKTtcbiAgcmV0dXJuIG5ld3BsYXllcjtcbn07XG5cbi8vbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXI7XG4iLCJleHBvcnQgeyBjcmVhdGVTaGlwRmxlZXQgfTtcblxuY29uc3QgY3JlYXRlQXJyYXlIaXRzID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICBsZXQgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFycmF5LnB1c2goMCk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcblxuY29uc3QgY2hlY2tJZlN1bmsgPSBmdW5jdGlvbiAoaGl0c2FycmF5KSB7XG4gIC8vY29uc29sZS5sb2coaGl0c2FycmF5KTtcbiAgaWYgKGhpdHNhcnJheS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSAwKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVTaGlwID0gZnVuY3Rpb24gKGxlbmd0aCwgbmFtZSwgcGxheWVyKSB7XG4gIGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgbmFtZSwgcGxheWVyKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuaGl0cyA9IGNyZWF0ZUFycmF5SGl0cyh0aGlzLmxlbmd0aCk7XG4gICAgICB0aGlzLnN1bmsgPSBjaGVja0lmU3Vuayh0aGlzLmhpdHMpO1xuICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtdO1xuICAgIH1cbiAgICBoaXQoaW5kZXgpIHtcbiAgICAgIHRoaXMuaGl0c1tpbmRleF0gPSAxO1xuICAgICAgdGhpcy5zdW5rID0gY2hlY2tJZlN1bmsodGhpcy5oaXRzKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hpcGNyZWF0ZWQgPSBuZXcgU2hpcChsZW5ndGgsIG5hbWUsIHBsYXllcik7XG4gIHJldHVybiBzaGlwY3JlYXRlZDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXBGbGVldCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgY29uc3QgY2FycmllciA9IGNyZWF0ZVNoaXAoNSwgXCJDYXJyaWVyXCIsIHBsYXllcik7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKDQsIFwiQmF0dGxlc2hpcFwiLCBwbGF5ZXIpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBjcmVhdGVTaGlwKDMsIFwiRGVzdHJveWVyXCIsIHBsYXllcik7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMywgXCJTdWJtYXJpbmVcIiwgcGxheWVyKTtcbiAgY29uc3QgcGF0cm9sYm9hdCA9IGNyZWF0ZVNoaXAoMiwgXCJQYXRyb2xib2F0XCIsIHBsYXllcik7XG4gIGNvbnN0IHNoaXBhcnJheSA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sYm9hdF07XG4gIHJldHVybiBzaGlwYXJyYXk7XG59O1xuXG4vLyBmb3Igbm9kZVxuLy9tb2R1bGUuZXhwb3J0cyA9IHNoaXBGbGVldDtcblxuLy8gc2hpcHMgc2hvdWxkIHByb2JhYmx5IGhhdmUgYSB1bmlxdWUgaWRcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==