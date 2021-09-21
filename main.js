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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  width: 1100px;\n  height: 600px;\n  margin: 200px auto;\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#otherplayer {\n  visibility: hidden;\n}\n\n#currentShip {\n  transition: all 3s ease-in-out;\n}\n\n.selectedA0,\n.selectedA1,\n.selectedA2,\n.selectedA3,\n.selectedA4 {\n  background-color: #283e45;\n}\n\n.selectedB {\n  background-color: #507d8b;\n}\n\n.selectedbyB {\n  background-color: #507d8b;\n}\n\n.hit {\n  background-color: #8b5e50;\n}\n\n#squarePlaced,\n#squareMiss,\n#squareHit {\n  width: 20px;\n  height: 20px;\n  border: solid 1px grey;\n}\n\n#squarePlaced {\n  background-color: #283e45;\n}\n\n#squareMiss {\n  background-color: #507d8b;\n}\n\n#squareHit {\n  background-color: #8b5e50;\n}\n\n.labels {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n}\n\n.labelsout {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\n#topnumberJ,\n#topnumberJAdv {\n  display: grid;\n  grid-template-columns: repeat(11, 22px);\n  gap: 4px;\n}\n\n#topnumberJ div,\n#topnumberJAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n#divoutside,\n#divoutsideAdv {\n  display: flex;\n  flex-direction: row;\n}\n\n#numberI,\n#numberIAdv {\n  display: grid;\n  grid-template-rows: repeat(10, 22px);\n  gap: 4px;\n  margin-right: 4px;\n}\n\n#numberI div,\n#numberIAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.opponentmove {\n  color: grey;\n}\n\n.movecounter {\n  color: lightgrey;\n  font-weight: normal;\n}\n\n#fleets {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  width: 400px;\n  margin: auto;\n  visibility: hidden;\n}\n\n#fleets div {\n  width: 200px;\n  text-align: center;\n}\n\n.sunk {\n  text-decoration: line-through;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;;EAGE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,QAAQ;EACR,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["body {\n  width: 1100px;\n  height: 600px;\n  margin: 200px auto;\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 4px;\n}\n\n#otherplayer {\n  visibility: hidden;\n}\n\n#currentShip {\n  transition: all 3s ease-in-out;\n}\n\n.selectedA0,\n.selectedA1,\n.selectedA2,\n.selectedA3,\n.selectedA4 {\n  background-color: #283e45;\n}\n\n.selectedB {\n  background-color: #507d8b;\n}\n\n.selectedbyB {\n  background-color: #507d8b;\n}\n\n.hit {\n  background-color: #8b5e50;\n}\n\n#squarePlaced,\n#squareMiss,\n#squareHit {\n  width: 20px;\n  height: 20px;\n  border: solid 1px grey;\n}\n\n#squarePlaced {\n  background-color: #283e45;\n}\n\n#squareMiss {\n  background-color: #507d8b;\n}\n\n#squareHit {\n  background-color: #8b5e50;\n}\n\n.labels {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n}\n\n.labelsout {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\n#topnumberJ,\n#topnumberJAdv {\n  display: grid;\n  grid-template-columns: repeat(11, 22px);\n  gap: 4px;\n}\n\n#topnumberJ div,\n#topnumberJAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n#divoutside,\n#divoutsideAdv {\n  display: flex;\n  flex-direction: row;\n}\n\n#numberI,\n#numberIAdv {\n  display: grid;\n  grid-template-rows: repeat(10, 22px);\n  gap: 4px;\n  margin-right: 4px;\n}\n\n#numberI div,\n#numberIAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.opponentmove {\n  color: grey;\n}\n\n.movecounter {\n  color: lightgrey;\n  font-weight: normal;\n}\n\n#fleets {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  width: 400px;\n  margin: auto;\n  visibility: hidden;\n}\n\n#fleets div {\n  width: 200px;\n  text-align: center;\n}\n\n.sunk {\n  text-decoration: line-through;\n}\n"],"sourceRoot":""}]);
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
    if (selectInitialPlacement === "fails check" || !selectInitialPlacement) {
      return changeBoard(boardobj, currentship);
    }
    // if (!selectInitialPlacement) {
    //   console.log("error");
    //   return "ERROR ERROR";
    // }
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
            return ["gameover", victimsFleet[i].name];
          } else {
            return ["hit", victimsFleet[i].name];
          }
        }
        return ["hit", "standing"];
      }
    }
  } else {
    //console.log("miss");
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
  const attackResult = attack(playerA, playerB, finallocation);
  const hitormissAvsB = attackResult[0];
  const sunkStatusB = attackResult[1];
  //console.log(hitormissAvsB);

  if (hitormissAvsB === "hit" || hitormissAvsB === "gameover") {
    const transformcoordtoidLocation = location.toString().replace(",", "-");
    const otherplayerboard = document.getElementById("otherplayer");
    const findDivOther = otherplayerboard.querySelector(
      `[id="${transformcoordtoidLocation}"]`
    );

    findDivOther.classList.add("hit");
  }

  if (sunkStatusB !== "" && sunkStatusB !== "standing") {
    const sunkedshipname = sunkStatusB.toLowerCase();
    const sunkedshipH3Id = sunkedshipname + "Adv";
    const shipOnDom = document.getElementById(sunkedshipH3Id);
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
    info.textContent = "Game Over. You are the winner!";
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
  const attackResultComputer = attack(playerB, playerA, selectedLocation);
  const hitormissBvsA = attackResultComputer[0];
  const sunkStatusA = attackResultComputer[1];

  setTimeout(function () {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.domPlayerB)(hitormissBvsA, findDiv, sunkStatusA);
  }, 1000);

  if (hitormissBvsA === "gameover") {
    const info = document.getElementById("currentShip");
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
            setTimeout(placeAllShips, 500);
          } else {
            const otherplayerdiv = document.getElementById("otherplayer");
            const fleetsdiv = document.getElementById("fleets");
            otherplayerdiv.style.visibility = "visible";
            fleetsdiv.style.visibility = "visible";
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
    increasefont();
    setTimeout(decreasefont, 500);
    const shipsToBePlaced = playerA.ships;
    placeShip(shipsToBePlaced[placed]);
  }

  function increasefont() {
    const shiptitle = document.getElementById("currentShip");
    shiptitle.style.fontSize = "18px";
  }
  function decreasefont() {
    const shiptitle = document.getElementById("currentShip");
    shiptitle.style.fontSize = "16px";
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
    // newmove.textContent = `[${divid}]: The computer hit one of your ships.`;
    newmove.innerHTML = `<span class="movecounter">${nummoves}</span> [${divid}]: The computer hit one of your ships.`;
    if (sunkornot !== "standing") {
      const sunkedshipname = sunkornot.toLowerCase();
      const sunkedshipH3Id = sunkedshipname + "P";
      const shipOnDom = document.getElementById(sunkedshipH3Id);
      shipOnDom.classList.add("sunk");
      const sunkship = document.getElementById("sunkship");
      sunkship.textContent =
        "Latest casualty: Your " + sunkornot + " has sunk.";
    }
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

//to do

// mudar a cor desse navio
// legenda das cores e mudar as cores


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGtCQUFrQixrQkFBa0IsdUJBQXVCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLFdBQVcsMkJBQTJCLGdCQUFnQixpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLDRDQUE0QyxhQUFhLEdBQUcsZUFBZSxrQkFBa0IsNENBQTRDLGFBQWEsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsa0JBQWtCLG1DQUFtQyxHQUFHLHlFQUF5RSw4QkFBOEIsR0FBRyxnQkFBZ0IsOEJBQThCLEdBQUcsa0JBQWtCLDhCQUE4QixHQUFHLFVBQVUsOEJBQThCLEdBQUcsOENBQThDLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsbUJBQW1CLDhCQUE4QixHQUFHLGlCQUFpQiw4QkFBOEIsR0FBRyxnQkFBZ0IsOEJBQThCLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLGFBQWEsR0FBRyxnQkFBZ0Isa0JBQWtCLHdCQUF3QixjQUFjLHFCQUFxQixzQkFBc0IsR0FBRyxrQ0FBa0Msa0JBQWtCLDRDQUE0QyxhQUFhLEdBQUcsMENBQTBDLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsa0NBQWtDLGtCQUFrQix3QkFBd0IsR0FBRyw0QkFBNEIsa0JBQWtCLHlDQUF5QyxhQUFhLHNCQUFzQixHQUFHLG9DQUFvQyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLG1CQUFtQixnQkFBZ0IsR0FBRyxrQkFBa0IscUJBQXFCLHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLHdCQUF3QixjQUFjLGlCQUFpQixpQkFBaUIsdUJBQXVCLEdBQUcsaUJBQWlCLGlCQUFpQix1QkFBdUIsR0FBRyxXQUFXLGtDQUFrQyxHQUFHLFNBQVMsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGdDQUFnQyxrQkFBa0Isa0JBQWtCLHVCQUF1QixHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxXQUFXLDJCQUEyQixnQkFBZ0IsaUJBQWlCLEdBQUcsa0JBQWtCLGtCQUFrQiw0Q0FBNEMsYUFBYSxHQUFHLGVBQWUsa0JBQWtCLDRDQUE0QyxhQUFhLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLGtCQUFrQixtQ0FBbUMsR0FBRyx5RUFBeUUsOEJBQThCLEdBQUcsZ0JBQWdCLDhCQUE4QixHQUFHLGtCQUFrQiw4QkFBOEIsR0FBRyxVQUFVLDhCQUE4QixHQUFHLDhDQUE4QyxnQkFBZ0IsaUJBQWlCLDJCQUEyQixHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRyxpQkFBaUIsOEJBQThCLEdBQUcsZ0JBQWdCLDhCQUE4QixHQUFHLGFBQWEsa0JBQWtCLHdCQUF3QixhQUFhLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0IsY0FBYyxxQkFBcUIsc0JBQXNCLEdBQUcsa0NBQWtDLGtCQUFrQiw0Q0FBNEMsYUFBYSxHQUFHLDBDQUEwQyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLGtDQUFrQyxrQkFBa0Isd0JBQXdCLEdBQUcsNEJBQTRCLGtCQUFrQix5Q0FBeUMsYUFBYSxzQkFBc0IsR0FBRyxvQ0FBb0MsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUIsZ0JBQWdCLEdBQUcsa0JBQWtCLHFCQUFxQix3QkFBd0IsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsY0FBYyxpQkFBaUIsaUJBQWlCLHVCQUF1QixHQUFHLGlCQUFpQixpQkFBaUIsdUJBQXVCLEdBQUcsV0FBVyxrQ0FBa0MsR0FBRyxxQkFBcUI7QUFDeHJLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRW5mLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkM7QUFDRjtBQUNIO0FBQ2E7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isd0RBQVk7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkJBQTJCO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELG1CQUFtQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHFEQUFVO0FBQ2QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGNxQjtBQUM4QztBQUM3Qzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsY0FBYywyREFBWSxrQkFBa0IsSUFBSTtBQUNoRCxjQUFjLDJEQUFZLGtCQUFrQixJQUFJO0FBQ2hEO0FBQ0EsdUJBQXVCLHdEQUFTOztBQUVoQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLFNBQVM7QUFDekIsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxZQUFZLHVDQUF1QyxTQUFTOztBQUV6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHNCQUFzQiw2QkFBNkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxTQUFTLFdBQVcsTUFBTTtBQUMvRSxnQ0FBZ0MsTUFBTTtBQUN0QyxJQUFJO0FBQ0oscURBQXFELFNBQVMsV0FBVyxNQUFNO0FBQy9FLG9DQUFvQyxNQUFNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxNQUFNO0FBQ3ZDLHFEQUFxRCxTQUFTLFdBQVcsTUFBTTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osaUNBQWlDLE1BQU07QUFDdkMscURBQXFELFNBQVMsV0FBVyxNQUFNO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoYXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQjJCOztBQUUzQjtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgd2lkdGg6IDExMDBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW46IDIwMHB4IGF1dG87XFxufVxcblxcbiNiYXR0bGVmaWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNTBweDtcXG59XFxuLmhpdEJveCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbiNhZHZCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbiNvdGhlcnBsYXllciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNjdXJyZW50U2hpcCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWxlY3RlZEEwLFxcbi5zZWxlY3RlZEExLFxcbi5zZWxlY3RlZEEyLFxcbi5zZWxlY3RlZEEzLFxcbi5zZWxlY3RlZEE0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODNlNDU7XFxufVxcblxcbi5zZWxlY3RlZEIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwN2Q4YjtcXG59XFxuXFxuLnNlbGVjdGVkYnlCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDdkOGI7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWU1MDtcXG59XFxuXFxuI3NxdWFyZVBsYWNlZCxcXG4jc3F1YXJlTWlzcyxcXG4jc3F1YXJlSGl0IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG59XFxuXFxuI3NxdWFyZVBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzZTQ1O1xcbn1cXG5cXG4jc3F1YXJlTWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3ZDhiO1xcbn1cXG5cXG4jc3F1YXJlSGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjVlNTA7XFxufVxcblxcbi5sYWJlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmxhYmVsc291dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuI3RvcG51bWJlckosXFxuI3RvcG51bWJlckpBZHYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jdG9wbnVtYmVySiBkaXYsXFxuI3RvcG51bWJlckpBZHYgZGl2IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGl2b3V0c2lkZSxcXG4jZGl2b3V0c2lkZUFkdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI251bWJlckksXFxuI251bWJlcklBZHYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbiNudW1iZXJJIGRpdixcXG4jbnVtYmVySUFkdiBkaXYge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vcHBvbmVudG1vdmUge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5tb3ZlY291bnRlciB7XFxuICBjb2xvcjogbGlnaHRncmV5O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuI2ZsZWV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2ZsZWV0cyBkaXYge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3VuayB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsUUFBUTtBQUNWOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIHdpZHRoOiAxMTAwcHg7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luOiAyMDBweCBhdXRvO1xcbn1cXG5cXG4jYmF0dGxlZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDUwcHg7XFxufVxcbi5oaXRCb3gge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jYWR2Qm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jb3RoZXJwbGF5ZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jY3VycmVudFNoaXAge1xcbiAgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VsZWN0ZWRBMCxcXG4uc2VsZWN0ZWRBMSxcXG4uc2VsZWN0ZWRBMixcXG4uc2VsZWN0ZWRBMyxcXG4uc2VsZWN0ZWRBNCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzZTQ1O1xcbn1cXG5cXG4uc2VsZWN0ZWRCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDdkOGI7XFxufVxcblxcbi5zZWxlY3RlZGJ5QiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3ZDhiO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjVlNTA7XFxufVxcblxcbiNzcXVhcmVQbGFjZWQsXFxuI3NxdWFyZU1pc3MsXFxuI3NxdWFyZUhpdCB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxufVxcblxcbiNzcXVhcmVQbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4M2U0NTtcXG59XFxuXFxuI3NxdWFyZU1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwN2Q4YjtcXG59XFxuXFxuI3NxdWFyZUhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1ZTUwO1xcbn1cXG5cXG4ubGFiZWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5sYWJlbHNvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiN0b3BudW1iZXJKLFxcbiN0b3BudW1iZXJKQWR2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjJweCk7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI3RvcG51bWJlckogZGl2LFxcbiN0b3BudW1iZXJKQWR2IGRpdiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Rpdm91dHNpZGUsXFxuI2Rpdm91dHNpZGVBZHYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbiNudW1iZXJJLFxcbiNudW1iZXJJQWR2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjJweCk7XFxuICBnYXA6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4jbnVtYmVySSBkaXYsXFxuI251bWJlcklBZHYgZGl2IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3Bwb25lbnRtb3ZlIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ubW92ZWNvdW50ZXIge1xcbiAgY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbiNmbGVldHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNmbGVldHMgZGl2IHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN1bmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVTaGlwRmxlZXQgfSBmcm9tIFwiLi9zaGlwcy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBkb21QbGF5ZXJCIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmV4cG9ydCB7IHN0YXJ0R2FtZSwgc2V0dXBQbGF5ZXJzLCBhdHRhY2ssIGdhbWVMb29wIH07XG5cbi8vY29uc3QgY3JlYXRlU2hpcEZsZWV0ID0gcmVxdWlyZShcIi4vc2hpcHMuanNcIik7XG4vL2NvbnN0IGNyZWF0ZVBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllci5qc1wiKTtcblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gZnVuY3Rpb24gKHBsYXllcikge1xuICBjb25zdCBib2FyZE9iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgb2JqID0ge307XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgb2JqW2kgKyBcIixcIiArIGpdID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbiAgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcbiAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGJvYXJkT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQocGxheWVyKTtcbiAgcmV0dXJuIGdhbWVib2FyZDtcbn07XG5cbmNvbnN0IGdldFJhbmRvbUludEluY2x1c2l2ZSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn07XG5cbmNvbnN0IHBpY2tMb2NhdGlvbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3Qgb2JqVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvYmopO1xuICBjb25zdCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgbGV0IGVtcHR5TG9jYXRpb25zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9ialZhbHVlc1tpXSA9PT0gMCkge1xuICAgICAgZW1wdHlMb2NhdGlvbnMucHVzaChvYmpLZXlzW2ldKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgbnVtYmVyRW1wdHlMb2NhdGlvbnMgPSBlbXB0eUxvY2F0aW9ucy5sZW5ndGg7XG4gIGNvbnN0IHBpY2tSYW5kb21Mb2NhdGlvbiA9XG4gICAgZW1wdHlMb2NhdGlvbnNbZ2V0UmFuZG9tSW50SW5jbHVzaXZlKDAsIG51bWJlckVtcHR5TG9jYXRpb25zIC0gMSldO1xuICByZXR1cm4gcGlja1JhbmRvbUxvY2F0aW9uO1xufTtcblxuY29uc3QgcGxhY2VTaGlwcyA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCByYW5kb21Mb2NhdGlvbjtcbiAgbGV0IHJvdztcbiAgbGV0IGNvbHVtbjtcblxuICBjb25zdCBsb2NhdGlvbnNBcnJheSA9IGZ1bmN0aW9uIChjdXJyZW50Ym9hcmQsIGN1cnJlbnRzaGlwLCBvcmllbnRhdGlvbikge1xuICAgIGxldCBuZXdwb3NpdGlvbjtcbiAgICBsZXQgZml4ZWRwb3NpdGlvbjtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwicm93XCIpIHtcbiAgICAgIG5ld3Bvc2l0aW9uID0gY29sdW1uO1xuICAgICAgZml4ZWRwb3NpdGlvbiA9IHJvdztcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3cG9zaXRpb24gPSByb3c7XG4gICAgICBmaXhlZHBvc2l0aW9uID0gY29sdW1uO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGN1cnJlbnRzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzaGlmdGVkID0gbmV3cG9zaXRpb24gLSBpO1xuICAgICAgaWYgKHNoaWZ0ZWQgPCAxKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGxvY2F0aW9uO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInJvd1wiKSB7XG4gICAgICAgIGxvY2F0aW9uID0gZml4ZWRwb3NpdGlvbiArIFwiLFwiICsgc2hpZnRlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gc2hpZnRlZCArIFwiLFwiICsgZml4ZWRwb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXR1c09uTG9jYXRpb24gPSBjdXJyZW50Ym9hcmQuY29vcmRpbmF0ZXNbbG9jYXRpb25dO1xuICAgICAgaWYgKHN0YXR1c09uTG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgYXJyYXkucHVzaChzaGlmdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBjdXJyZW50c2hpcC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgc2hpZnRlZCA9IG5ld3Bvc2l0aW9uICsgajtcbiAgICAgIGlmIChzaGlmdGVkID4gMTApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgbG9jYXRpb247XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwicm93XCIpIHtcbiAgICAgICAgbG9jYXRpb24gPSBmaXhlZHBvc2l0aW9uICsgXCIsXCIgKyBzaGlmdGVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24gPSBzaGlmdGVkICsgXCIsXCIgKyBmaXhlZHBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdHVzT25Mb2NhdGlvbiA9IGN1cnJlbnRib2FyZC5jb29yZGluYXRlc1tsb2NhdGlvbl07XG4gICAgICBpZiAoc3RhdHVzT25Mb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICBhcnJheS5wdXNoKHNoaWZ0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH07XG5cbiAgY29uc3Qgc3VtU2VxdWVuY2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGI7IGkrKykge1xuICAgICAgc3VtICs9IGEgKyBpO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9O1xuXG4gIGNvbnN0IGNvbnNlY3V0aXZlTnVtYmVycyA9IGZ1bmN0aW9uIChhcnJheSwgY3VycmVudHNoaXBsZW5ndGgpIHtcbiAgICBsZXQgZ29vZHNwb3Q7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYmVnaW5uaW5nT2ZTaGlwID0gYXJyYXlbaV07XG4gICAgICAvL3RoZSBmaXJzdCBwb3NpdGlvbiBhbHNvIGNvdW50c1xuICAgICAgY29uc3QgZW5kT2ZTaGlwID0gYmVnaW5uaW5nT2ZTaGlwICsgY3VycmVudHNoaXBsZW5ndGggLSAxO1xuICAgICAgaWYgKGVuZE9mU2hpcCA+IGFycmF5W2FycmF5Lmxlbmd0aF0pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBjb25zZWN1dGl2ZSA9IHN1bVNlcXVlbmNlKGJlZ2lubmluZ09mU2hpcCwgZW5kT2ZTaGlwKTtcblxuICAgICAgY29uc3QgaW5hcnJheSA9IHN1bVNlcXVlbmNlKFxuICAgICAgICBiZWdpbm5pbmdPZlNoaXAsXG4gICAgICAgIGFycmF5W2kgKyBjdXJyZW50c2hpcGxlbmd0aCAtIDFdXG4gICAgICApO1xuICAgICAgaWYgKGNvbnNlY3V0aXZlID09PSBpbmFycmF5KSB7XG4gICAgICAgIHJldHVybiBiZWdpbm5pbmdPZlNoaXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnb29kc3BvdCA9IGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdvb2RzcG90O1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVOdW1iZXJzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tGb3JGaXQgPSBmdW5jdGlvbiAoY3VycmVudHNoaXAsIGN1cnJlbnRib2FyZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkSW5pdGlhbExvY2F0aW9uID0gcm93ICsgXCIsXCIgKyBjb2x1bW47XG4gICAgY29uc3QgYXZhaWxhYmxlU3BhY2VzUm93ID0gbG9jYXRpb25zQXJyYXkoY3VycmVudGJvYXJkLCBjdXJyZW50c2hpcCwgXCJyb3dcIilcbiAgICAgIC5jb25jYXQoY29sdW1uKVxuICAgICAgLnNvcnQoY29tcGFyZU51bWJlcnMpO1xuICAgIGNvbnN0IGF2YWlsYWJsZVNwYWNlc0NvbHVtbiA9IGxvY2F0aW9uc0FycmF5KFxuICAgICAgY3VycmVudGJvYXJkLFxuICAgICAgY3VycmVudHNoaXAsXG4gICAgICBcImNvbHVtblwiXG4gICAgKVxuICAgICAgLmNvbmNhdChyb3cpXG4gICAgICAuc29ydChjb21wYXJlTnVtYmVycyk7XG5cbiAgICBpZiAocm93ICUgMiA9PT0gMSkge1xuICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlc1Jvdy5sZW5ndGggPCBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlc0NvbHVtbi5sZW5ndGggPCBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRwb3NpdGlvbiA9IGNvbnNlY3V0aXZlTnVtYmVycyhcbiAgICAgICAgICAgIGF2YWlsYWJsZVNwYWNlc0NvbHVtbixcbiAgICAgICAgICAgIGN1cnJlbnRzaGlwLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCFzdGFydHBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJmYWlscyBjaGVja1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW3N0YXJ0cG9zaXRpb24sIGNvbHVtbiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRwb3NpdGlvbiA9IGNvbnNlY3V0aXZlTnVtYmVycyhcbiAgICAgICAgICBhdmFpbGFibGVTcGFjZXNSb3csXG4gICAgICAgICAgY3VycmVudHNoaXAubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGlmICghc3RhcnRwb3NpdGlvbikge1xuICAgICAgICAgIHJldHVybiBcImZhaWxzIGNoZWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyb3csIHN0YXJ0cG9zaXRpb24sIFwiaG9yaXpvbnRhbFwiXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlc0NvbHVtbi5sZW5ndGggPCBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlc1Jvdy5sZW5ndGggPCBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRwb3NpdGlvbiA9IGNvbnNlY3V0aXZlTnVtYmVycyhcbiAgICAgICAgICAgIGF2YWlsYWJsZVNwYWNlc1JvdyxcbiAgICAgICAgICAgIGN1cnJlbnRzaGlwLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCFzdGFydHBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJmYWlscyBjaGVja1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW3Jvdywgc3RhcnRwb3NpdGlvbiwgXCJob3Jpem9udGFsXCJdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGFydHBvc2l0aW9uID0gY29uc2VjdXRpdmVOdW1iZXJzKFxuICAgICAgICAgIGF2YWlsYWJsZVNwYWNlc0NvbHVtbixcbiAgICAgICAgICBjdXJyZW50c2hpcC5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFzdGFydHBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIFwiZmFpbHMgY2hlY2tcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3N0YXJ0cG9zaXRpb24sIGNvbHVtbiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGNoYW5nZUJvYXJkID0gZnVuY3Rpb24gKGJvYXJkb2JqLCBjdXJyZW50c2hpcCkge1xuICAgIHJhbmRvbUxvY2F0aW9uID0gcGlja0xvY2F0aW9uKGJvYXJkb2JqLmNvb3JkaW5hdGVzKS5zcGxpdChcIixcIik7XG4gICAgcm93ID0gTnVtYmVyKHJhbmRvbUxvY2F0aW9uWzBdKTtcbiAgICBjb2x1bW4gPSBOdW1iZXIocmFuZG9tTG9jYXRpb25bMV0pO1xuICAgIGNvbnN0IHNlbGVjdEluaXRpYWxQbGFjZW1lbnQgPSBjaGVja0ZvckZpdChjdXJyZW50c2hpcCwgYm9hcmRvYmopO1xuICAgIGlmIChzZWxlY3RJbml0aWFsUGxhY2VtZW50ID09PSBcImZhaWxzIGNoZWNrXCIgfHwgIXNlbGVjdEluaXRpYWxQbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBjaGFuZ2VCb2FyZChib2FyZG9iaiwgY3VycmVudHNoaXApO1xuICAgIH1cbiAgICAvLyBpZiAoIXNlbGVjdEluaXRpYWxQbGFjZW1lbnQpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgLy8gICByZXR1cm4gXCJFUlJPUiBFUlJPUlwiO1xuICAgIC8vIH1cbiAgICBjb25zdCBjdXJyZW50c2hpcGxlbmd0aCA9IGN1cnJlbnRzaGlwLmxlbmd0aDtcbiAgICBjb25zdCBib2F0T3JpZW50YXRpb24gPSBzZWxlY3RJbml0aWFsUGxhY2VtZW50WzJdO1xuICAgIGxldCBjb29yZGluYXRlc1RvQ2hhbmdlID0gW107XG4gICAgaWYgKGJvYXRPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3Y29vcmQgPSBbXG4gICAgICAgICAgTnVtYmVyKHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMF0pICtcbiAgICAgICAgICAgIGkgK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgc2VsZWN0SW5pdGlhbFBsYWNlbWVudFsxXSxcbiAgICAgICAgXTtcbiAgICAgICAgY29vcmRpbmF0ZXNUb0NoYW5nZS5wdXNoKG5ld2Nvb3JkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50c2hpcGxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5ld2Nvb3JkID0gW1xuICAgICAgICAgIHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMF0gK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgKE51bWJlcihzZWxlY3RJbml0aWFsUGxhY2VtZW50WzFdKSArIGopLFxuICAgICAgICBdO1xuICAgICAgICBjb29yZGluYXRlc1RvQ2hhbmdlLnB1c2gobmV3Y29vcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvb3JkaW5hdGVzVG9DaGFuZ2UubGVuZ3RoOyBrKyspIHtcbiAgICAgIGJvYXJkb2JqLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzVG9DaGFuZ2Vba11dID0gMTtcbiAgICAgIGN1cnJlbnRzaGlwLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZXNUb0NoYW5nZVtrXSk7XG4gICAgfVxuICAgIHJldHVybiBcImRvbmVcIjtcbiAgfTtcbiAgcmV0dXJuIHsgY2hhbmdlQm9hcmQgfTtcbn0pKCk7XG5cbmNvbnN0IHNldHVwQm9hcmQgPSBmdW5jdGlvbiAocGxheWVyLCBwbGF5ZXJvYmopIHtcbiAgbGV0IG5ld0JvYXJkID0gY3JlYXRlR2FtZWJvYXJkKHBsYXllcik7XG4gIGNvbnN0IHNoaXBGbGVldCA9IGNyZWF0ZVNoaXBGbGVldChwbGF5ZXIpO1xuICBwbGF5ZXJvYmouc2hpcHMgPSBzaGlwRmxlZXQ7XG4gIGlmIChwbGF5ZXIgPT09IFwicGxheWVyQlwiKSB7XG4gICAgcGxhY2VTaGlwcy5jaGFuZ2VCb2FyZChuZXdCb2FyZCwgc2hpcEZsZWV0WzBdKTtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbMV0pO1xuICAgIHBsYWNlU2hpcHMuY2hhbmdlQm9hcmQobmV3Qm9hcmQsIHNoaXBGbGVldFsyXSk7XG4gICAgcGxhY2VTaGlwcy5jaGFuZ2VCb2FyZChuZXdCb2FyZCwgc2hpcEZsZWV0WzNdKTtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbNF0pO1xuICB9XG4gIGRpc3BsYXlib2FyZChuZXdCb2FyZCk7XG4gIHJldHVybiBuZXdCb2FyZDtcbn07XG5cbmNvbnN0IHNldHVwUGxheWVycyA9IGZ1bmN0aW9uIChwbGF5ZXIsIHNoaXBzLCBnYW1lYm9hcmQsIGFkdmdhbWVib2FyZCkge1xuICBjb25zdCBuZXdwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIocGxheWVyLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpO1xuICByZXR1cm4gbmV3cGxheWVyO1xufTtcblxuY29uc3QgYXR0YWNrID0gZnVuY3Rpb24gKGF0dGFja2VyLCB2aWN0aW0sIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHZpY3RpbXNCb2FyZCA9IHZpY3RpbS5nYW1lYm9hcmQ7XG4gIGNvbnN0IGF0dGFja2VyQWR2Qm9hcmQgPSBhdHRhY2tlci5hZHZnYW1lYm9hcmQ7XG4gIGNvbnN0IHZpY3RpbXNGbGVldCA9IHZpY3RpbS5zaGlwcztcbiAgY29uc3QgYm9hcmRTdGF0dXNPbkNvb3JkaW5hdGVzID0gdmljdGltc0JvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXTtcbiAgY29uc3QgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IFtjb29yZGluYXRlc1swXSArIFwiLFwiICsgY29vcmRpbmF0ZXNbMV1dO1xuICBpZiAoYm9hcmRTdGF0dXNPbkNvb3JkaW5hdGVzID09PSAxKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcImhpdFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpY3RpbXNGbGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYXJyYXlPZkNvb3JkaW5hdGVzID0gdmljdGltc0ZsZWV0W2ldLmNvb3JkaW5hdGVzLmZsYXQoKTtcbiAgICAgIGNvbnN0IGlzSXRUaGlzU2hpcCA9IGFycmF5T2ZDb29yZGluYXRlcy5pbmNsdWRlcyhcbiAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlc1swXVxuICAgICAgKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZpY3RpbXNGbGVldFtpXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNvb3JkaW5hdGVzXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0cmFuc2Zvcm1lZFwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJpc2l0XCIgKyBpc0l0VGhpc1NoaXApO1xuICAgICAgaWYgKGlzSXRUaGlzU2hpcCkge1xuICAgICAgICBjb25zdCBoaXRJbmRleCA9IGFycmF5T2ZDb29yZGluYXRlcy5maW5kSW5kZXgoXG4gICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXNbMF1cbiAgICAgICAgKTtcbiAgICAgICAgdmljdGltc0ZsZWV0W2ldLmhpdChoaXRJbmRleCk7XG4gICAgICAgIHZpY3RpbXNCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcInhcIjtcbiAgICAgICAgYXR0YWNrZXJBZHZCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcInhcIjtcbiAgICAgICAgdmljdGltc0ZsZWV0W2ldLmhpdHM7XG4gICAgICAgIGlmICh2aWN0aW1zRmxlZXRbaV0uc3Vuaykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hpcCBzdW5rOiBcIiArIHZpY3RpbXNGbGVldFtpXS5uYW1lKTtcbiAgICAgICAgICBjb25zdCBzdW5rZW5TaGlwcyA9IGNvdW50U3Vua2VuU2hpcHModmljdGltc0ZsZWV0KTtcbiAgICAgICAgICBpZiAoc3Vua2VuU2hpcHMgPT09IDUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnYW1lb3ZlclwiKTtcbiAgICAgICAgICAgIHJldHVybiBbXCJnYW1lb3ZlclwiLCB2aWN0aW1zRmxlZXRbaV0ubmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJoaXRcIiwgdmljdGltc0ZsZWV0W2ldLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1wiaGl0XCIsIFwic3RhbmRpbmdcIl07XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vY29uc29sZS5sb2coXCJtaXNzXCIpO1xuICAgIHZpY3RpbXNCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcIm1cIjtcbiAgICBhdHRhY2tlckFkdkJvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXSA9IFwibVwiO1xuICAgIHJldHVybiBbXCJtaXNzXCIsIFwiXCJdO1xuICB9XG59O1xuXG5jb25zdCBjb3VudFN1bmtlblNoaXBzID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzaGlwID0gYXJyYXlbaV07XG4gICAgY29uc3Qgc3VuayA9IHNoaXAuc3VuaztcbiAgICBpZiAoc3Vuaykge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufTtcblxuY29uc3QgZGlzcGxheWJvYXJkID0gZnVuY3Rpb24gKGN1cnJlbnRib2FyZCkge1xuICBjb25zb2xlLmxvZyhcIiBcIik7XG4gIGNvbnN0IGNvb3JkID0gY3VycmVudGJvYXJkLmNvb3JkaW5hdGVzO1xuICBjb25zb2xlLmxvZygwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCBcImRcIik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICBpZiAoaSA9PT0gMTApIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcImRcIixcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgMV0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDJdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyAzXSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgNF0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDVdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA2XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgN10sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDhdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA5XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgMTBdXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgaSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDFdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgMl0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyAzXSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDRdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgNV0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA2XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDddLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgOF0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA5XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDEwXVxuICAgICk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdhbWVMb29wKGxvY2F0aW9uLCBwbGF5ZXJBLCBwbGF5ZXJCKSB7XG4gIGxldCBzdG9wID0gZmFsc2U7XG4gIC8vcGxheWVyIEEgcGlja3MgYSBjb29yZGluYXRlXG5cbiAgLy9jb25zb2xlLmxvZyhcIkEgTG9jYXRpb24gc2VsZWN0ZWQ6IFwiKTtcbiAgLy9jb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gIC8vIHBsYXllciBBIGF0dGFja3NcbiAgY29uc3QgbG9jYXRpb250ZW1wID0gbG9jYXRpb24udG9TdHJpbmcoKS5zcGxpdChcIixcIik7XG4gIGNvbnN0IGZpbmFsbG9jYXRpb24gPSBbTnVtYmVyKGxvY2F0aW9udGVtcFswXSksIE51bWJlcihsb2NhdGlvbnRlbXBbMV0pXTtcbiAgY29uc3QgYXR0YWNrUmVzdWx0ID0gYXR0YWNrKHBsYXllckEsIHBsYXllckIsIGZpbmFsbG9jYXRpb24pO1xuICBjb25zdCBoaXRvcm1pc3NBdnNCID0gYXR0YWNrUmVzdWx0WzBdO1xuICBjb25zdCBzdW5rU3RhdHVzQiA9IGF0dGFja1Jlc3VsdFsxXTtcbiAgLy9jb25zb2xlLmxvZyhoaXRvcm1pc3NBdnNCKTtcblxuICBpZiAoaGl0b3JtaXNzQXZzQiA9PT0gXCJoaXRcIiB8fCBoaXRvcm1pc3NBdnNCID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1jb29yZHRvaWRMb2NhdGlvbiA9IGxvY2F0aW9uLnRvU3RyaW5nKCkucmVwbGFjZShcIixcIiwgXCItXCIpO1xuICAgIGNvbnN0IG90aGVycGxheWVyYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm90aGVycGxheWVyXCIpO1xuICAgIGNvbnN0IGZpbmREaXZPdGhlciA9IG90aGVycGxheWVyYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbaWQ9XCIke3RyYW5zZm9ybWNvb3JkdG9pZExvY2F0aW9ufVwiXWBcbiAgICApO1xuXG4gICAgZmluZERpdk90aGVyLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gIH1cblxuICBpZiAoc3Vua1N0YXR1c0IgIT09IFwiXCIgJiYgc3Vua1N0YXR1c0IgIT09IFwic3RhbmRpbmdcIikge1xuICAgIGNvbnN0IHN1bmtlZHNoaXBuYW1lID0gc3Vua1N0YXR1c0IudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBzdW5rZWRzaGlwSDNJZCA9IHN1bmtlZHNoaXBuYW1lICsgXCJBZHZcIjtcbiAgICBjb25zdCBzaGlwT25Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdW5rZWRzaGlwSDNJZCk7XG4gICAgc2hpcE9uRG9tLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgIGNvbnN0IHN1bmtzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5rc2hpcFwiKTtcbiAgICBzdW5rc2hpcC50ZXh0Q29udGVudCA9XG4gICAgICBcIkxhdGVzdCBDYXN1YWx0eTogQ29tcHV0ZXIncyBcIiArIHN1bmtTdGF0dXNCICsgXCIgaGFzIHN1bmsuXCI7XG4gIH1cbiAgaWYgKGhpdG9ybWlzc0F2c0IgPT09IFwiZ2FtZW92ZXJcIikge1xuICAgIGNvbnN0IHN1bmtlZHNoaXBuYW1lID0gc3Vua1N0YXR1c0IudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBzdW5rZWRzaGlwSDNJZCA9IHN1bmtlZHNoaXBuYW1lICsgXCJBZHZcIjtcbiAgICBjb25zdCBzaGlwT25Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdW5rZWRzaGlwSDNJZCk7XG4gICAgc2hpcE9uRG9tLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgIHN0b3AgPSB0cnVlO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRTaGlwXCIpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBcIkdhbWUgT3Zlci4gWW91IGFyZSB0aGUgd2lubmVyIVwiO1xuICAgIHJldHVybiBzdG9wO1xuICB9XG5cbiAgLy8gIHBsYXllciBCIHBpY2tzIGEgY29vcmRpbmF0ZVxuXG4gIGNvbnN0IHNlbGVjdGVkTG9jYXRpb25SYXcgPSBwaWNrTG9jYXRpb24oXG4gICAgcGxheWVyQi5hZHZnYW1lYm9hcmQuY29vcmRpbmF0ZXNcbiAgKS5zcGxpdChcIixcIik7XG4gIGNvbnN0IHNlbGVjdGVkTG9jYXRpb24gPSBbXG4gICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25SYXdbMF0pLFxuICAgIE51bWJlcihzZWxlY3RlZExvY2F0aW9uUmF3WzFdKSxcbiAgXTtcbiAgLy9jb25zb2xlLmxvZyhcIkIgTG9jYXRpb24gc2VsZWN0ZWQ6IFwiICsgc2VsZWN0ZWRMb2NhdGlvbik7XG4gIC8vcGxheWVyIEIgYXR0YWNrc1xuICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkTG9jYXRpb24pO1xuICBjb25zdCB0cmFuc2Zvcm1jb29yZHRvaWQgPSBzZWxlY3RlZExvY2F0aW9uLnRvU3RyaW5nKCkucmVwbGFjZShcIixcIiwgXCItXCIpO1xuICBjb25zdCBtYWlucGxheWVyYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5wbGF5ZXJcIik7XG4gIGNvbnN0IGZpbmREaXYgPSBtYWlucGxheWVyYm9hcmQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHt0cmFuc2Zvcm1jb29yZHRvaWR9XCJdYCk7XG4gIGNvbnN0IGF0dGFja1Jlc3VsdENvbXB1dGVyID0gYXR0YWNrKHBsYXllckIsIHBsYXllckEsIHNlbGVjdGVkTG9jYXRpb24pO1xuICBjb25zdCBoaXRvcm1pc3NCdnNBID0gYXR0YWNrUmVzdWx0Q29tcHV0ZXJbMF07XG4gIGNvbnN0IHN1bmtTdGF0dXNBID0gYXR0YWNrUmVzdWx0Q29tcHV0ZXJbMV07XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZG9tUGxheWVyQihoaXRvcm1pc3NCdnNBLCBmaW5kRGl2LCBzdW5rU3RhdHVzQSk7XG4gIH0sIDEwMDApO1xuXG4gIGlmIChoaXRvcm1pc3NCdnNBID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXIuIFRoZSBDb21wdXRlciBpcyB0aGUgd2lubmVyIVwiO1xuICAgIHN0b3AgPSB0cnVlO1xuICAgIHJldHVybiBzdG9wO1xuICB9XG4gIHJldHVybiBzdG9wO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBwbGF5ZXJBQm9hcmQgPSBzZXR1cEJvYXJkKFwicGxheWVyQVwiLCBwbGF5ZXIxKTtcbiAgY29uc3QgcGxheWVyQVRyYWNrc0JCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcInBsYXllckFUcmFja3NCXCIpO1xuICBwbGF5ZXIxLmdhbWVib2FyZCA9IHBsYXllckFCb2FyZDtcbiAgcGxheWVyMS5hZHZnYW1lYm9hcmQgPSBwbGF5ZXJBVHJhY2tzQkJvYXJkO1xuICBjb25zdCBwbGF5ZXJCQm9hcmQgPSBzZXR1cEJvYXJkKFwicGxheWVyQlwiLCBwbGF5ZXIyKTtcbiAgY29uc3QgcGxheWVyQlRyYWNrc0FCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcInBsYXllckJUcmFja3NBXCIpO1xuICBwbGF5ZXIyLmdhbWVib2FyZCA9IHBsYXllckJCb2FyZDtcbiAgcGxheWVyMi5hZHZnYW1lYm9hcmQgPSBwbGF5ZXJCVHJhY2tzQUJvYXJkO1xuICByZXR1cm4gW3BsYXllcjEsIHBsYXllcjJdO1xufVxuXG4vL3N0YXJ0R2FtZSgpO1xuXG4vLyBsZXQgbG9vcGl0ID0gZ2FtZUxvb3BQcm9tcHQoKTtcbi8vIHdoaWxlICghbG9vcGl0KSB7XG4vLyAgIGxvb3BpdCA9IGdhbWVMb29wUHJvbXB0KCk7XG4vLyB9XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgc3RhcnRHYW1lLCBzZXR1cFBsYXllcnMsIGdhbWVMb29wIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLmpzXCI7XG5leHBvcnQgeyBkb21QbGF5ZXJCIH07XG5cbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJCb2FyZFwiKTtcbmNvbnN0IGFkdkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHZCb2FyZFwiKTtcbi8vaSdtIGF0cmlidXR0aW5nIGNvb3JkaW5hdGVzIGRvIHBsYXllcidzIEEgc2hpcHMsIGFuZCBjaGFuZ2luZyB0aGVtIGxhdGVyIGFjY29yZGluZyB0byB1c2VyIGlucHV0XG5sZXQgcGxheWVyQSA9IHNldHVwUGxheWVycyhcInBsYXllckFcIiwgW10sIHt9LCB7fSk7XG5sZXQgcGxheWVyQiA9IHNldHVwUGxheWVycyhcInBsYXllckJcIiwgW10sIHt9LCB7fSk7XG5sZXQgbnVtbW92ZXMgPSAwO1xuY29uc3QgdXBkYXRlZFBsYXllcnMgPSBzdGFydEdhbWUocGxheWVyQSwgcGxheWVyQik7XG5cbnBsYXllckEgPSB1cGRhdGVkUGxheWVyc1swXTtcbnBsYXllckIgPSB1cGRhdGVkUGxheWVyc1sxXTtcblxuLy9vbnBhZ2Vsb2FkXG5cbmNvbnN0IHRvcG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wbnVtYmVySlwiKTtcbmNvbnN0IHRvcG51bWJlckFkdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wbnVtYmVySkFkdlwiKTtcbmZvciAobGV0IGsgPSAwOyBrIDw9IDEwOyBrKyspIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGl2YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmIChrID09PSAwKSB7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkaXZhLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBrO1xuICAgIGRpdmEudGV4dENvbnRlbnQgPSBrO1xuICB9XG4gIHRvcG51bWJlci5hcHBlbmRDaGlsZChkaXYpO1xuICB0b3BudW1iZXJBZHYuYXBwZW5kQ2hpbGQoZGl2YSk7XG59XG5cbmNvbnN0IG51bWJlckkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlcklcIik7XG5jb25zdCBudW1iZXJJQWR2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJJQWR2XCIpO1xuZm9yIChsZXQgeiA9IDE7IHogPD0gMTA7IHorKykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaXZhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LnRleHRDb250ZW50ID0gejtcbiAgZGl2YS50ZXh0Q29udGVudCA9IHo7XG4gIG51bWJlckkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgbnVtYmVySUFkdi5hcHBlbmRDaGlsZChkaXZhKTtcbn1cblxuZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgY29uc3QgZGl2QSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGl2QiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2QS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpICsgXCItXCIgKyBqKTtcbiAgICBkaXZBLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGl0Qm94IHBsYXllckEgbm90U2VsZWN0ZWRBXCIpO1xuICAgIGRpdkIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSArIFwiLVwiICsgaik7XG4gICAgZGl2Qi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpdEJveCBvdGhlcnBsYXllciBub3RTZWxlY3RlZEJcIik7XG4gICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoZGl2QSk7XG4gICAgYWR2Qm9hcmQuYXBwZW5kQ2hpbGQoZGl2Qik7XG4gIH1cbn1cblxuLy8gcGxhY2Ugc2hpcHNcblxubGV0IGdhbWVzdGF0dXM7XG5jb25zdCBzZWxlY3RTaGlwTG9jYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcGxhY2VkID0gMDtcbiAgZnVuY3Rpb24gcGxhY2VTaGlwKGN1cnJlbnRzaGlwKSB7XG4gICAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gICAgY29uc3QgY3VycmVudHNoaXB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFNoaXBcIik7XG4gICAgbGV0IGNvb3JkaW5hdGVzTGVuZ3RoO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBjdXJyZW50c2hpcC5sZW5ndGg7XG4gICAgY29uc3Qgc2hpcE5hbWUgPSBjdXJyZW50c2hpcC5uYW1lO1xuXG4gICAgY3VycmVudHNoaXB0aXRsZS50ZXh0Q29udGVudCA9IGBTZWxlY3QgJHtzaGlwTGVuZ3RofSBjb25zZWN1dGl2ZSBzcXVhcmVzIGZvciBwbGFjaW5nIHlvdXIgJHtzaGlwTmFtZX0uYDtcblxuICAgIGNvbnN0IGFsbGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdFNlbGVjdGVkQVwiKTtcbiAgICBmdW5jdGlvbiBzZWxlY3RTcXVhcmUoZSkge1xuICAgICAgY29uc3QgZGl2aWQgPSBlLnRhcmdldC5pZDtcbiAgICAgIGNvbnN0IGxlZ2FsTW92ZSA9IGNoZWNrQ29uc2VjdXRpdmVTcXVhcmVzKGRpdmlkLCBjb29yZGluYXRlcywgc2hpcExlbmd0aCk7XG4gICAgICBpZiAobGVnYWxNb3ZlKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goZGl2aWQpO1xuICAgICAgICBjb29yZGluYXRlc0xlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkQVwiICsgcGxhY2VkKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm5vdFNlbGVjdGVkQVwiKTtcbiAgICAgICAgY2hlY2tJZkZpbmlzaGVkKGN1cnJlbnRzaGlwLCBjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChjb29yZGluYXRlc0xlbmd0aCA9PT0gc2hpcExlbmd0aCkge1xuICAgICAgICAgIGFsbGRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0U3F1YXJlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocGxhY2VkIDwgNSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChwbGFjZUFsbFNoaXBzLCA1MDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBvdGhlcnBsYXllcmRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3RoZXJwbGF5ZXJcIik7XG4gICAgICAgICAgICBjb25zdCBmbGVldHNkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsZWV0c1wiKTtcbiAgICAgICAgICAgIG90aGVycGxheWVyZGl2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIGZsZWV0c2Rpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGFsbGRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0U3F1YXJlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlQWxsU2hpcHMoKSB7XG4gICAgaW5jcmVhc2Vmb250KCk7XG4gICAgc2V0VGltZW91dChkZWNyZWFzZWZvbnQsIDUwMCk7XG4gICAgY29uc3Qgc2hpcHNUb0JlUGxhY2VkID0gcGxheWVyQS5zaGlwcztcbiAgICBwbGFjZVNoaXAoc2hpcHNUb0JlUGxhY2VkW3BsYWNlZF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVhc2Vmb250KCkge1xuICAgIGNvbnN0IHNoaXB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFNoaXBcIik7XG4gICAgc2hpcHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XG4gIH1cbiAgZnVuY3Rpb24gZGVjcmVhc2Vmb250KCkge1xuICAgIGNvbnN0IHNoaXB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFNoaXBcIik7XG4gICAgc2hpcHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NvbnNlY3V0aXZlU3F1YXJlcyhcbiAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgIGNvb3JkaW5hdGVzYXJyYXksXG4gICAgc2hpcGxlbmd0aFxuICApIHtcbiAgICBsZXQgZ29vZE1vdmUgPSBmYWxzZTtcbiAgICBpZiAoY29vcmRpbmF0ZXNhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIGNoZWNrcyBpZiBpdCBmaXRzIGhvcml6b250YWxseSBmaXJzdCBhbmQgdGhlbiB2ZXJ0aWNhbGx5IGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKFxuICAgICAgICBjaGVja0lmU2hpcEZpdHNIb3Jpem9udGFsbHkoXG4gICAgICAgICAgc2hpcGxlbmd0aCxcbiAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgICAgICAgIGNvb3JkaW5hdGVzYXJyYXlcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjaGVja0lmU2hpcEZpdHNWZXJ0aWNhbGx5KFxuICAgICAgICAgIHNoaXBsZW5ndGgsXG4gICAgICAgICAgY3VycmVudHNlbGVjdGlvbixcbiAgICAgICAgICBjb29yZGluYXRlc2FycmF5XG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvb3JkaW5hdGVzYXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlc051bWJlcnMgPSBjb29yZGluYXRlc2FycmF5WzBdLnNwbGl0KFwiLVwiKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzWCA9IE51bWJlcihjb29yZGluYXRlc051bWJlcnNbMF0pO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXNZID0gTnVtYmVyKGNvb3JkaW5hdGVzTnVtYmVyc1sxXSk7XG4gICAgICBjb25zdCBub3J0aENvb3JkID0gY29vcmRpbmF0ZXNYIC0gMSArIFwiLVwiICsgY29vcmRpbmF0ZXNZO1xuICAgICAgY29uc3Qgc291dGhDb29yZCA9IGNvb3JkaW5hdGVzWCArIDEgKyBcIi1cIiArIGNvb3JkaW5hdGVzWTtcbiAgICAgIGNvbnN0IHdlc3RDb29yZCA9IGNvb3JkaW5hdGVzWCArIFwiLVwiICsgKGNvb3JkaW5hdGVzWSAtIDEpO1xuICAgICAgY29uc3QgZWFzdENvb3JkID0gY29vcmRpbmF0ZXNYICsgXCItXCIgKyAoY29vcmRpbmF0ZXNZICsgMSk7XG5cbiAgICAgIGNvbnN0IGxlZ2FsTW92ZXMgPSBbbm9ydGhDb29yZCwgc291dGhDb29yZCwgd2VzdENvb3JkLCBlYXN0Q29vcmRdO1xuXG4gICAgICBpZiAobGVnYWxNb3Zlcy5pbmNsdWRlcyhjdXJyZW50c2VsZWN0aW9uKSkge1xuICAgICAgICAvLyB3aXRoIGN1cnJlbnQgc2VsZWN0aW9uLCB0aGUgc2hpcCB3b3VsZCBiZSBwbGFjZWQgaG93P1xuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uU3BsaXQgPSBjdXJyZW50c2VsZWN0aW9uLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvblggPSBOdW1iZXIoY3VycmVudFNlbGVjdGlvblNwbGl0WzBdKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvblkgPSBOdW1iZXIoY3VycmVudFNlbGVjdGlvblNwbGl0WzFdKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3Rpb25YID09PSBjb29yZGluYXRlc1gpIHtcbiAgICAgICAgICAvL2hvcml6b250YWxcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaGVja0lmU2hpcEZpdHNIb3Jpem9udGFsbHkoXG4gICAgICAgICAgICAgIHNoaXBsZW5ndGgsXG4gICAgICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24sXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzYXJyYXlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGdvb2RNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy92ZXJ0aWNhbFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNoZWNrSWZTaGlwRml0c1ZlcnRpY2FsbHkoXG4gICAgICAgICAgICAgIHNoaXBsZW5ndGgsXG4gICAgICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24sXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzYXJyYXlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGdvb2RNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvb3JkaW5hdGVzWCA9IFtdO1xuICAgICAgbGV0IGNvb3JkaW5hdGVzWSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlc2FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRlQ29vcmQgPSBjb29yZGluYXRlc2FycmF5W2ldLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgY29vcmRpbmF0ZXNYLnB1c2goTnVtYmVyKHNlcGFyYXRlQ29vcmRbMF0pKTtcbiAgICAgICAgY29vcmRpbmF0ZXNZLnB1c2goTnVtYmVyKHNlcGFyYXRlQ29vcmRbMV0pKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb29yZGluYXRlc1hbMF0gPT09IGNvb3JkaW5hdGVzWFsxXSkge1xuICAgICAgICAvL2hvcml6b250YWxcbiAgICAgICAgY29vcmRpbmF0ZXNZLnNvcnQoc29ydGVyKTtcbiAgICAgICAgY29uc3Qgd2VzdENvb3JkID0gY29vcmRpbmF0ZXNYWzBdICsgXCItXCIgKyAoY29vcmRpbmF0ZXNZWzBdIC0gMSk7XG4gICAgICAgIGNvbnN0IGVhc3RDb29yZCA9XG4gICAgICAgICAgY29vcmRpbmF0ZXNYWzBdICsgXCItXCIgKyAoY29vcmRpbmF0ZXNZW2Nvb3JkaW5hdGVzWS5sZW5ndGggLSAxXSArIDEpO1xuICAgICAgICBpZiAoY3VycmVudHNlbGVjdGlvbiA9PT0gd2VzdENvb3JkIHx8IGN1cnJlbnRzZWxlY3Rpb24gPT09IGVhc3RDb29yZCkge1xuICAgICAgICAgIGdvb2RNb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy92ZXJ0aWNhbFxuICAgICAgICBjb29yZGluYXRlc1guc29ydChzb3J0ZXIpO1xuICAgICAgICBjb25zdCBub3J0aENvb3JkID0gY29vcmRpbmF0ZXNYWzBdIC0gMSArIFwiLVwiICsgY29vcmRpbmF0ZXNZWzBdO1xuICAgICAgICBjb25zdCBzb3V0aENvb3JkID1cbiAgICAgICAgICBjb29yZGluYXRlc1hbY29vcmRpbmF0ZXNYLmxlbmd0aCAtIDFdICsgMSArIFwiLVwiICsgY29vcmRpbmF0ZXNZWzBdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY3VycmVudHNlbGVjdGlvbiA9PT0gbm9ydGhDb29yZCB8fFxuICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24gPT09IHNvdXRoQ29vcmRcbiAgICAgICAgKSB7XG4gICAgICAgICAgZ29vZE1vdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnb29kTW92ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSWZTaGlwRml0c1ZlcnRpY2FsbHkoc2hpcGxlbmd0aCwgY29vcmQsIGNvb3JkaW5hdGVzYXJyYXkpIHtcbiAgICBjb25zdCBzZWxlY3RlZENvb3JkID0gY29vcmQuc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IHNlbGVjdGVkWCA9IE51bWJlcihzZWxlY3RlZENvb3JkWzBdKTtcbiAgICBjb25zdCBzZWxlY3RlZFkgPSBOdW1iZXIoc2VsZWN0ZWRDb29yZFsxXSk7XG4gICAgbGV0IGF2YWlsYWJsZXNwYWNlc1kgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXh0RGl2SUQgPSBzZWxlY3RlZFggKyBpICsgXCItXCIgKyBzZWxlY3RlZFk7XG4gICAgICBjb25zdCBuZXh0RGl2Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHREaXZJRCk7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHREaXZOb2RlICE9PSBudWxsICYmXG4gICAgICAgIG5leHREaXZOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFNlbGVjdGVkQVwiKVxuICAgICAgKSB7XG4gICAgICAgICsrYXZhaWxhYmxlc3BhY2VzWTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBsZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZJRCA9IHNlbGVjdGVkWCAtIGogKyBcIi1cIiArIHNlbGVjdGVkWTtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZXZpb3VzRGl2SUQpO1xuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91c0Rpdk5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgcHJldmlvdXNEaXZOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFNlbGVjdGVkQVwiKVxuICAgICAgKSB7XG4gICAgICAgICsrYXZhaWxhYmxlc3BhY2VzWTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXZhaWxhYmxlc3BhY2VzWSA+PSBzaGlwbGVuZ3RoIC0gY29vcmRpbmF0ZXNhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJZlNoaXBGaXRzSG9yaXpvbnRhbGx5KHNoaXBsZW5ndGgsIGNvb3JkLCBjb29yZGluYXRlc2FycmF5KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb29yZCA9IGNvb3JkLnNwbGl0KFwiLVwiKTtcbiAgICBjb25zdCBzZWxlY3RlZFggPSBOdW1iZXIoc2VsZWN0ZWRDb29yZFswXSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRZID0gTnVtYmVyKHNlbGVjdGVkQ29vcmRbMV0pO1xuXG4gICAgbGV0IGF2YWlsYWJsZXNwYWNlc1ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXh0RGl2SUQgPSBzZWxlY3RlZFggKyBcIi1cIiArIChzZWxlY3RlZFkgKyBpKTtcbiAgICAgIGNvbnN0IG5leHREaXZOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dERpdklEKTtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dERpdk5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgbmV4dERpdk5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90U2VsZWN0ZWRBXCIpXG4gICAgICApIHtcbiAgICAgICAgKythdmFpbGFibGVzcGFjZXNYO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwbGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2SUQgPSBzZWxlY3RlZFggKyBcIi1cIiArIChzZWxlY3RlZFkgLSBqKTtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZXZpb3VzRGl2SUQpO1xuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91c0Rpdk5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgcHJldmlvdXNEaXZOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFNlbGVjdGVkQVwiKVxuICAgICAgKSB7XG4gICAgICAgICsrYXZhaWxhYmxlc3BhY2VzWDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXZhaWxhYmxlc3BhY2VzWCA+PSBzaGlwbGVuZ3RoIC0gY29vcmRpbmF0ZXNhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJZkZpbmlzaGVkKGN1cnJlbnRzaGlwLCBjb29yZCkge1xuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkQVwiICsgcGxhY2VkKTtcbiAgICBpZiAoZGl2cy5sZW5ndGggPT09IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgY29uc3QgYXJyYXljb29yZCA9IGNvb3JkO1xuICAgICAgY29uc3QgbmV3YXJyYXljb29yZCA9IGFycmF5Y29vcmQubWFwKChlbGVtZW50KSA9PiBbXG4gICAgICAgIGVsZW1lbnQucmVwbGFjZShcIi1cIiwgXCIsXCIpLFxuICAgICAgXSk7XG4gICAgICBwbGF5ZXJBLnNoaXBzW3BsYWNlZF0uY29vcmRpbmF0ZXMgPSBuZXdhcnJheWNvb3JkO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdhcnJheWNvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllckEuZ2FtZWJvYXJkLmNvb3JkaW5hdGVzW25ld2FycmF5Y29vcmRbaV0udG9TdHJpbmcoKV0gPSAxO1xuICAgICAgfVxuICAgICAgcGxhY2VkKys7XG4gICAgICBpZiAocGxhY2VkID09PSA1KSB7XG4gICAgICAgIGNvbnRpbnVlcGxheWluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHBsYWNlQWxsU2hpcHMgfTtcbn0pKCk7XG5cbnNlbGVjdFNoaXBMb2NhdGlvbi5wbGFjZUFsbFNoaXBzKCk7XG5cbmNvbnN0IGF0dGFja29uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBkaXYgPSBlLnRhcmdldDtcbiAgY29uc3QgZGl2SUQgPSBlLnRhcmdldC5pZDtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJcIik7XG4gIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwibm90U2VsZWN0ZWRCXCIpO1xuICBjb25zdCBkaXZjb29yZCA9IFtkaXZJRC5yZXBsYWNlKFwiLVwiLCBcIixcIildO1xuICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja29uY2xpY2spO1xuICBnYW1lc3RhdHVzID0gZ2FtZUxvb3AoZGl2Y29vcmQsIHBsYXllckEsIHBsYXllckIpO1xuICBjb25zdCBuZXdtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICArK251bW1vdmVzO1xuXG4gIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgbmV3bW92ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtb3ZlY291bnRlclwiPiR7bnVtbW92ZXN9PC9zcGFuPiBbJHtkaXZJRH1dOiBZb3UgaGF2ZSBoaXQgYSBzaGlwIWA7XG4gICAgLy9uZXdtb3ZlLnRleHRDb250ZW50ID0gYFske2RpdklEfV06IFlvdSBoYXZlIGhpdCBhIHNoaXAhIGA7XG4gIH0gZWxzZSB7XG4gICAgbmV3bW92ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtb3ZlY291bnRlclwiPiR7bnVtbW92ZXN9PC9zcGFuPiBbJHtkaXZJRH1dOiBZb3UgbWlzc2VkYDtcbiAgICAvLyAgICBuZXdtb3ZlLnRleHRDb250ZW50ID0gYFske2RpdklEfV06IFlvdSBtaXNzZWQuIGA7XG4gIH1cbiAgY29uc3QgbW92ZXNEaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vdmVzXCIpO1xuICBjb25zdCBudW1iZXJPZk1vdmVzID0gbW92ZXNEaXNwbGF5ZWRbMF0uY2hpbGROb2Rlcy5sZW5ndGg7XG4gIGlmIChudW1iZXJPZk1vdmVzID09PSA3KSB7XG4gICAgbW92ZXNEaXNwbGF5ZWRbMF0ucmVtb3ZlQ2hpbGQobW92ZXNEaXNwbGF5ZWRbMF0uZmlyc3RDaGlsZCk7XG4gIH1cblxuICBtb3Zlcy5hcHBlbmRDaGlsZChuZXdtb3ZlKTtcbiAgLy8gbW92ZXMuaW5zZXJ0QmVmb3JlKHNwYW4sIG5ld21vdmUpO1xuICBjb25zdCBhZHZib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWR2Qm9hcmRcIik7XG4gIGNvbnN0IGFsbGVtcHR5ZGl2cyA9IGFkdmJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90U2VsZWN0ZWRCXCIpO1xuICBhbGxlbXB0eWRpdnMuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2tvbmNsaWNrKVxuICApO1xuICBjaGVja0ZvckVuZE9mR2FtZSgpO1xuICBpZiAoIWdhbWVzdGF0dXMpIHtcbiAgICBjb250aW51ZXBsYXlpbmcoKTtcbiAgfVxufTtcblxuY29uc3QgY29udGludWVwbGF5aW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgaW5mby50ZXh0Q29udGVudCA9XG4gICAgXCJBdHRhY2sgdGhlIGVuZW15IGJ5IGNsaWNraW5nIG9uIGFuIGVtcHR5IHNxdWFyZSBvbiB0aGUgZW5lbXkgYm9hcmQuXCI7XG4gIGNvbnN0IGFkdmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHZCb2FyZFwiKTtcbiAgY29uc3QgYWxsZW1wdHlkaXZzID0gYWR2Ym9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RTZWxlY3RlZEJcIik7XG4gIGFsbGVtcHR5ZGl2cy5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja29uY2xpY2spXG4gICk7XG59O1xuXG5jb25zdCBkb21QbGF5ZXJCID0gZnVuY3Rpb24gKGhpdG9ybWlzc0J2c0EsIGRpdiwgc3Vua29ybm90KSB7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRieUJcIik7XG4gIGlmIChoaXRvcm1pc3NCdnNBID09PSBcImhpdFwiIHx8IGhpdG9ybWlzc0J2c0EgPT09IFwiZ2FtZW92ZXJcIikge1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICB9XG4gIGNvbnN0IG5ld21vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIG5ld21vdmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvcHBvbmVudG1vdmVcIik7XG4gIGNvbnN0IG1vdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3Zlc1wiKTtcbiAgbnVtbW92ZXMrKztcbiAgY29uc3QgZGl2aWQgPSBkaXYuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gIGlmIChoaXRvcm1pc3NCdnNBID09PSBcImhpdFwiKSB7XG4gICAgLy8gbmV3bW92ZS50ZXh0Q29udGVudCA9IGBbJHtkaXZpZH1dOiBUaGUgY29tcHV0ZXIgaGl0IG9uZSBvZiB5b3VyIHNoaXBzLmA7XG4gICAgbmV3bW92ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtb3ZlY291bnRlclwiPiR7bnVtbW92ZXN9PC9zcGFuPiBbJHtkaXZpZH1dOiBUaGUgY29tcHV0ZXIgaGl0IG9uZSBvZiB5b3VyIHNoaXBzLmA7XG4gICAgaWYgKHN1bmtvcm5vdCAhPT0gXCJzdGFuZGluZ1wiKSB7XG4gICAgICBjb25zdCBzdW5rZWRzaGlwbmFtZSA9IHN1bmtvcm5vdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3Qgc3Vua2Vkc2hpcEgzSWQgPSBzdW5rZWRzaGlwbmFtZSArIFwiUFwiO1xuICAgICAgY29uc3Qgc2hpcE9uRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3Vua2Vkc2hpcEgzSWQpO1xuICAgICAgc2hpcE9uRG9tLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgICAgY29uc3Qgc3Vua3NoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bmtzaGlwXCIpO1xuICAgICAgc3Vua3NoaXAudGV4dENvbnRlbnQgPVxuICAgICAgICBcIkxhdGVzdCBjYXN1YWx0eTogWW91ciBcIiArIHN1bmtvcm5vdCArIFwiIGhhcyBzdW5rLlwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChoaXRvcm1pc3NCdnNBID09PSBcIm1pc3NcIikge1xuICAgIC8vIG5ld21vdmUudGV4dENvbnRlbnQgPSBgWyR7ZGl2aWR9XTogVGhlIGNvbXB1dGVyIG1pc3NlZC5gO1xuICAgIG5ld21vdmUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibW92ZWNvdW50ZXJcIj4ke251bW1vdmVzfTwvc3Bhbj4gWyR7ZGl2aWR9XTogVGhlIGNvbXB1dGVyIG1pc3NlZC5gO1xuICB9XG4gIGNvbnN0IG1vdmVzRGlzcGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb3Zlc1wiKTtcbiAgY29uc3QgbnVtYmVyT2ZNb3ZlcyA9IG1vdmVzRGlzcGxheWVkWzBdLmNoaWxkTm9kZXMubGVuZ3RoO1xuICBpZiAobnVtYmVyT2ZNb3ZlcyA9PT0gNykge1xuICAgIG1vdmVzRGlzcGxheWVkWzBdLnJlbW92ZUNoaWxkKG1vdmVzRGlzcGxheWVkWzBdLmZpcnN0Q2hpbGQpO1xuICB9XG4gIG1vdmVzLmFwcGVuZENoaWxkKG5ld21vdmUpO1xufTtcblxuY29uc3QgY2hlY2tGb3JFbmRPZkdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChnYW1lc3RhdHVzKSB7XG4gICAgY29uc3QgYWR2Ym9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkdkJvYXJkXCIpO1xuICAgIGNvbnN0IGFsbGVtcHR5ZGl2cyA9IGFkdmJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90U2VsZWN0ZWRCXCIpO1xuICAgIGFsbGVtcHR5ZGl2cy5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrb25jbGljaylcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBzb3J0ZXIgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59O1xuXG4vL3RvIGRvXG5cbi8vIG11ZGFyIGEgY29yIGRlc3NlIG5hdmlvXG4vLyBsZWdlbmRhIGRhcyBjb3JlcyBlIG11ZGFyIGFzIGNvcmVzXG4iLCJleHBvcnQgeyBjcmVhdGVQbGF5ZXIgfTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNoaXBzID0gc2hpcHM7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgdGhpcy5hZHZnYW1lYm9hcmQgPSBhZHZnYW1lYm9hcmQ7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlUGxheWVyID0gZnVuY3Rpb24gKHBsYXllciwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKSB7XG4gIGNvbnN0IG5ld3BsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpO1xuICByZXR1cm4gbmV3cGxheWVyO1xufTtcblxuLy9tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVBsYXllcjtcbiIsImV4cG9ydCB7IGNyZWF0ZVNoaXBGbGVldCB9O1xuXG5jb25zdCBjcmVhdGVBcnJheUhpdHMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gIGxldCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXkucHVzaCgwKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5jb25zdCBjaGVja0lmU3VuayA9IGZ1bmN0aW9uIChoaXRzYXJyYXkpIHtcbiAgLy9jb25zb2xlLmxvZyhoaXRzYXJyYXkpO1xuICBpZiAoaGl0c2FycmF5LmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IDApID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSBmdW5jdGlvbiAobGVuZ3RoLCBuYW1lLCBwbGF5ZXIpIHtcbiAgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBuYW1lLCBwbGF5ZXIpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5oaXRzID0gY3JlYXRlQXJyYXlIaXRzKHRoaXMubGVuZ3RoKTtcbiAgICAgIHRoaXMuc3VuayA9IGNoZWNrSWZTdW5rKHRoaXMuaGl0cyk7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzID0gW107XG4gICAgfVxuICAgIGhpdChpbmRleCkge1xuICAgICAgdGhpcy5oaXRzW2luZGV4XSA9IDE7XG4gICAgICB0aGlzLnN1bmsgPSBjaGVja0lmU3Vuayh0aGlzLmhpdHMpO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGlwY3JlYXRlZCA9IG5ldyBTaGlwKGxlbmd0aCwgbmFtZSwgcGxheWVyKTtcbiAgcmV0dXJuIHNoaXBjcmVhdGVkO1xufTtcblxuY29uc3QgY3JlYXRlU2hpcEZsZWV0ID0gZnVuY3Rpb24gKHBsYXllcikge1xuICBjb25zdCBjYXJyaWVyID0gY3JlYXRlU2hpcCg1LCBcIkNhcnJpZXJcIiwgcGxheWVyKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCwgXCJCYXR0bGVzaGlwXCIsIHBsYXllcik7XG4gIGNvbnN0IGRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMywgXCJEZXN0cm95ZXJcIiwgcGxheWVyKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gY3JlYXRlU2hpcCgzLCBcIlN1Ym1hcmluZVwiLCBwbGF5ZXIpO1xuICBjb25zdCBwYXRyb2xib2F0ID0gY3JlYXRlU2hpcCgyLCBcIlBhdHJvbGJvYXRcIiwgcGxheWVyKTtcbiAgY29uc3Qgc2hpcGFycmF5ID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xib2F0XTtcbiAgcmV0dXJuIHNoaXBhcnJheTtcbn07XG5cbi8vIGZvciBub2RlXG4vL21vZHVsZS5leHBvcnRzID0gc2hpcEZsZWV0O1xuXG4vLyBzaGlwcyBzaG91bGQgcHJvYmFibHkgaGF2ZSBhIHVuaXF1ZSBpZFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9