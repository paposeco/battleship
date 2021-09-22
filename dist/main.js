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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! background3.png */ "./src/background3.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  height: 99vh;\n  font-family: \"Inter\", sans-serif;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: #fafcff;\n}\n\nbody {\n  width: 1100px;\n  height: 91%;\n  margin: 20px auto;\n  /* height: calc(100% - 60px); */\n  /* margin: 30px auto 10px auto; */\n  padding: 30px 60px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  /* background-color: #fffdfa; */\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  border-radius: 25px;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 2px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 2px;\n}\n\n#otherplayer {\n  visibility: hidden;\n}\n\n#currentShip {\n  font-size: 17px;\n  transition: all 0.5s ease-in-out;\n}\n\n#moves {\n  margin-top: 10px;\n}\n\n.selectedA0,\n.selectedA1,\n.selectedA2,\n.selectedA3,\n.selectedA4 {\n  background-color: #283e45;\n}\n\n.selectedB {\n  background-color: #507d8b;\n}\n\n.selectedbyB {\n  background-color: #507d8b;\n}\n\n.hit {\n  background-color: #8b5e50;\n}\n\n.squarePlaced,\n#squareMiss,\n#squareHit {\n  width: 20px;\n  height: 20px;\n  border: solid 1px grey;\n  border-radius: 25px;\n}\n\n.squarePlaced {\n  background-color: #283e45;\n}\n\n#squareMiss {\n  background-color: #507d8b;\n}\n\n#squareHit {\n  background-color: #8b5e50;\n}\n\n.labels {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n}\n\n.labelsout {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\n#topnumberJ,\n#topnumberJAdv {\n  display: grid;\n  grid-template-columns: repeat(11, 22px);\n  gap: 2px;\n}\n\n#topnumberJ div,\n#topnumberJAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n#divoutside,\n#divoutsideAdv {\n  display: flex;\n  flex-direction: row;\n}\n\n#numberI,\n#numberIAdv {\n  display: grid;\n  grid-template-rows: repeat(10, 22px);\n  gap: 2px;\n  margin-right: 4px;\n}\n\n#numberI div,\n#numberIAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.opponentmove {\n  color: grey;\n}\n\n.movecounter {\n  color: lightgrey;\n  font-weight: normal;\n}\n\n#fleets {\n  display: flex;\n  flex-direction: row;\n  gap: 40px;\n  width: 600px;\n  visibility: hidden;\n}\n\n#fleets > div {\n  width: 50%;\n  text-align: center;\n}\n\n.sunk {\n  text-decoration: line-through;\n}\n\n.fleetcarrier,\n.fleetbattleship,\n.fleetdestroyer,\n.fleetsubmarine,\n.fleetpatrol {\n  display: flex;\n  flex-direction: row;\n  gap: 2px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.shipdescription {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\nfooter {\n  /* margin: 20px auto 20px auto; */\n  text-align: center;\n  justify-self: end;\n  background-color: white;\n  /* padding: 20px 60px; */\n  width: 100%;\n}\n\na {\n  color: #283e45;\n}\n\na:visited {\n  color: #8b5e50;\n}\n\na:hover {\n  color: #507d8b;\n}\n\n.winnerannoucement {\n  font-size: 30px !important;\n  font-weight: bolder;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,YAAY;EACZ,gCAAgC;EAChC,yDAAwC;EACxC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;EACjB,+BAA+B;EAC/B,iCAAiC;EACjC,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;;;EAKE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;;EAGE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,QAAQ;EACR,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;;;;EAKE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;EACxB,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,kBAAkB;AACpB","sourcesContent":["html {\n  box-sizing: border-box;\n  height: 99vh;\n  font-family: \"Inter\", sans-serif;\n  background-image: url(\"background3.png\");\n  background-color: #fafcff;\n}\n\nbody {\n  width: 1100px;\n  height: 91%;\n  margin: 20px auto;\n  /* height: calc(100% - 60px); */\n  /* margin: 30px auto 10px auto; */\n  padding: 30px 60px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  /* background-color: #fffdfa; */\n}\n\n#battlefield {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n}\n.hitBox {\n  border: solid 1px grey;\n  border-radius: 25px;\n  width: 20px;\n  height: 20px;\n}\n\n#playerBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 2px;\n}\n\n#advBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 22px);\n  gap: 2px;\n}\n\n#otherplayer {\n  visibility: hidden;\n}\n\n#currentShip {\n  font-size: 17px;\n  transition: all 0.5s ease-in-out;\n}\n\n#moves {\n  margin-top: 10px;\n}\n\n.selectedA0,\n.selectedA1,\n.selectedA2,\n.selectedA3,\n.selectedA4 {\n  background-color: #283e45;\n}\n\n.selectedB {\n  background-color: #507d8b;\n}\n\n.selectedbyB {\n  background-color: #507d8b;\n}\n\n.hit {\n  background-color: #8b5e50;\n}\n\n.squarePlaced,\n#squareMiss,\n#squareHit {\n  width: 20px;\n  height: 20px;\n  border: solid 1px grey;\n  border-radius: 25px;\n}\n\n.squarePlaced {\n  background-color: #283e45;\n}\n\n#squareMiss {\n  background-color: #507d8b;\n}\n\n#squareHit {\n  background-color: #8b5e50;\n}\n\n.labels {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n}\n\n.labelsout {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\n#topnumberJ,\n#topnumberJAdv {\n  display: grid;\n  grid-template-columns: repeat(11, 22px);\n  gap: 2px;\n}\n\n#topnumberJ div,\n#topnumberJAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n#divoutside,\n#divoutsideAdv {\n  display: flex;\n  flex-direction: row;\n}\n\n#numberI,\n#numberIAdv {\n  display: grid;\n  grid-template-rows: repeat(10, 22px);\n  gap: 2px;\n  margin-right: 4px;\n}\n\n#numberI div,\n#numberIAdv div {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.opponentmove {\n  color: grey;\n}\n\n.movecounter {\n  color: lightgrey;\n  font-weight: normal;\n}\n\n#fleets {\n  display: flex;\n  flex-direction: row;\n  gap: 40px;\n  width: 600px;\n  visibility: hidden;\n}\n\n#fleets > div {\n  width: 50%;\n  text-align: center;\n}\n\n.sunk {\n  text-decoration: line-through;\n}\n\n.fleetcarrier,\n.fleetbattleship,\n.fleetdestroyer,\n.fleetsubmarine,\n.fleetpatrol {\n  display: flex;\n  flex-direction: row;\n  gap: 2px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.shipdescription {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\nfooter {\n  /* margin: 20px auto 20px auto; */\n  text-align: center;\n  justify-self: end;\n  background-color: white;\n  /* padding: 20px 60px; */\n  width: 100%;\n}\n\na {\n  color: #283e45;\n}\n\na:visited {\n  color: #8b5e50;\n}\n\na:hover {\n  color: #507d8b;\n}\n\n.winnerannoucement {\n  font-size: 30px !important;\n  font-weight: bolder;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop),
/* harmony export */   "pickBetterCoord": () => (/* binding */ pickBetterCoord)
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
  //displayboard(newBoard);
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
          //console.log("ship sunk: " + victimsFleet[i].name);
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

let lastcoord = [];
let possiblebetterlocations = [];

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
  console.log("player B picks");
  console.log(lastcoord);
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
  //console.log("B Location selected: " + selectedLocation);
  //player B attacks
  //console.log(selectedLocation);
  const transformcoordtoid = selectedLocation.toString().replace(",", "-");
  const mainplayerboard = document.getElementById("mainplayer");
  const findDiv = mainplayerboard.querySelector(`[id="${transformcoordtoid}"]`);
  const attackResultComputer = attack(playerB, playerA, selectedLocation);
  const hitormissBvsA = attackResultComputer[0];
  const sunkStatusA = attackResultComputer[1];

  if (
    hitormissBvsA === "hit" &&
    (sunkStatusA === "standing" || sunkStatusA === "")
  ) {
    lastcoord.push(selectedLocation[0] + "," + selectedLocation[1]);
    console.log(lastcoord);
    possiblebetterlocations = [];
  }

  setTimeout(function () {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.domPlayerB)(hitormissBvsA, findDiv, sunkStatusA);
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

//x,y = 1,2
function pickBetterCoord(existingCoord, player) {
  let coordArray = [];
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

//startGame();

// let loopit = gameLoopPrompt();
// while (!loopit) {
//   loopit = gameLoopPrompt();
// }

//ai smarter:
// ignore empty spaces without other spaces around
// pick the larger ship not found yet and find space for it on the board: pick the middle square first


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


/***/ }),

/***/ "./src/background3.png":
/*!*****************************!*\
  !*** ./src/background3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e491643cb3ac8be5841.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkJBQTJCO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImJhY2tncm91bmQzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogOTl2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZjZmY7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDExMDBweDtcXG4gIGhlaWdodDogOTElO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpOyAqL1xcbiAgLyogbWFyZ2luOiAzMHB4IGF1dG8gMTBweCBhdXRvOyAqL1xcbiAgcGFkZGluZzogMzBweCA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZkZmE7ICovXFxufVxcblxcbiNiYXR0bGVmaWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNTBweDtcXG59XFxuLmhpdEJveCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4jYWR2Qm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4jb3RoZXJwbGF5ZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jY3VycmVudFNoaXAge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNtb3ZlcyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWRBMCxcXG4uc2VsZWN0ZWRBMSxcXG4uc2VsZWN0ZWRBMixcXG4uc2VsZWN0ZWRBMyxcXG4uc2VsZWN0ZWRBNCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzZTQ1O1xcbn1cXG5cXG4uc2VsZWN0ZWRCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDdkOGI7XFxufVxcblxcbi5zZWxlY3RlZGJ5QiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3ZDhiO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjVlNTA7XFxufVxcblxcbi5zcXVhcmVQbGFjZWQsXFxuI3NxdWFyZU1pc3MsXFxuI3NxdWFyZUhpdCB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uc3F1YXJlUGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODNlNDU7XFxufVxcblxcbiNzcXVhcmVNaXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDdkOGI7XFxufVxcblxcbiNzcXVhcmVIaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWU1MDtcXG59XFxuXFxuLmxhYmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ubGFiZWxzb3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jdG9wbnVtYmVySixcXG4jdG9wbnVtYmVySkFkdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDIycHgpO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbiN0b3BudW1iZXJKIGRpdixcXG4jdG9wbnVtYmVySkFkdiBkaXYge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkaXZvdXRzaWRlLFxcbiNkaXZvdXRzaWRlQWR2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jbnVtYmVySSxcXG4jbnVtYmVySUFkdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiAycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuI251bWJlckkgZGl2LFxcbiNudW1iZXJJQWR2IGRpdiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9wcG9uZW50bW92ZSB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLm1vdmVjb3VudGVyIHtcXG4gIGNvbG9yOiBsaWdodGdyZXk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4jZmxlZXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA0MHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZmxlZXRzID4gZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZmxlZXRjYXJyaWVyLFxcbi5mbGVldGJhdHRsZXNoaXAsXFxuLmZsZWV0ZGVzdHJveWVyLFxcbi5mbGVldHN1Ym1hcmluZSxcXG4uZmxlZXRwYXRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDJweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uc2hpcGRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgLyogbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvOyAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIHBhZGRpbmc6IDIwcHggNjBweDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMjgzZTQ1O1xcbn1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgY29sb3I6ICM4YjVlNTA7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICM1MDdkOGI7XFxufVxcblxcbi53aW5uZXJhbm5vdWNlbWVudCB7XFxuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyx5REFBd0M7RUFDeEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7OztFQUtFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsUUFBUTtBQUNWOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7OztFQUtFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiA5OXZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImJhY2tncm91bmQzLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmNmZjtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTEwMHB4O1xcbiAgaGVpZ2h0OiA5MSU7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIC8qIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7ICovXFxuICAvKiBtYXJnaW46IDMwcHggYXV0byAxMHB4IGF1dG87ICovXFxuICBwYWRkaW5nOiAzMHB4IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmYTsgKi9cXG59XFxuXFxuI2JhdHRsZWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG4uaGl0Qm94IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbiNhZHZCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbiNvdGhlcnBsYXllciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNjdXJyZW50U2hpcCB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI21vdmVzIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5zZWxlY3RlZEEwLFxcbi5zZWxlY3RlZEExLFxcbi5zZWxlY3RlZEEyLFxcbi5zZWxlY3RlZEEzLFxcbi5zZWxlY3RlZEE0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODNlNDU7XFxufVxcblxcbi5zZWxlY3RlZEIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwN2Q4YjtcXG59XFxuXFxuLnNlbGVjdGVkYnlCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDdkOGI7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWU1MDtcXG59XFxuXFxuLnNxdWFyZVBsYWNlZCxcXG4jc3F1YXJlTWlzcyxcXG4jc3F1YXJlSGl0IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5zcXVhcmVQbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4M2U0NTtcXG59XFxuXFxuI3NxdWFyZU1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwN2Q4YjtcXG59XFxuXFxuI3NxdWFyZUhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1ZTUwO1xcbn1cXG5cXG4ubGFiZWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5sYWJlbHNvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiN0b3BudW1iZXJKLFxcbiN0b3BudW1iZXJKQWR2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjJweCk7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuI3RvcG51bWJlckogZGl2LFxcbiN0b3BudW1iZXJKQWR2IGRpdiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Rpdm91dHNpZGUsXFxuI2Rpdm91dHNpZGVBZHYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbiNudW1iZXJJLFxcbiNudW1iZXJJQWR2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjJweCk7XFxuICBnYXA6IDJweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4jbnVtYmVySSBkaXYsXFxuI251bWJlcklBZHYgZGl2IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3Bwb25lbnRtb3ZlIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ubW92ZWNvdW50ZXIge1xcbiAgY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbiNmbGVldHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDQwcHg7XFxuICB3aWR0aDogNjAwcHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNmbGVldHMgPiBkaXYge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN1bmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5mbGVldGNhcnJpZXIsXFxuLmZsZWV0YmF0dGxlc2hpcCxcXG4uZmxlZXRkZXN0cm95ZXIsXFxuLmZsZWV0c3VibWFyaW5lLFxcbi5mbGVldHBhdHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMnB4O1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5zaGlwZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAvKiBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87ICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogcGFkZGluZzogMjBweCA2MHB4OyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICMyODNlNDU7XFxufVxcblxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogIzhiNWU1MDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzUwN2Q4YjtcXG59XFxuXFxuLndpbm5lcmFubm91Y2VtZW50IHtcXG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVNoaXBGbGVldCB9IGZyb20gXCIuL3NoaXBzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IGRvbVBsYXllckIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuZXhwb3J0IHsgc3RhcnRHYW1lLCBzZXR1cFBsYXllcnMsIGdhbWVMb29wLCBwaWNrQmV0dGVyQ29vcmQgfTtcblxuLy9jb25zdCBjcmVhdGVTaGlwRmxlZXQgPSByZXF1aXJlKFwiLi9zaGlwcy5qc1wiKTtcbi8vY29uc3QgY3JlYXRlUGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyLmpzXCIpO1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIGNvbnN0IGJvYXJkT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICBvYmpbaSArIFwiLFwiICsgal0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuICBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzID0gYm9hcmRPYmplY3QoKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZChwbGF5ZXIpO1xuICByZXR1cm4gZ2FtZWJvYXJkO1xufTtcblxuY29uc3QgZ2V0UmFuZG9tSW50SW5jbHVzaXZlID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuY29uc3QgcGlja0xvY2F0aW9uID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBvYmpWYWx1ZXMgPSBPYmplY3QudmFsdWVzKG9iaik7XG4gIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBsZXQgZW1wdHlMb2NhdGlvbnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob2JqVmFsdWVzW2ldID09PSAwKSB7XG4gICAgICBlbXB0eUxvY2F0aW9ucy5wdXNoKG9iaktleXNbaV0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBudW1iZXJFbXB0eUxvY2F0aW9ucyA9IGVtcHR5TG9jYXRpb25zLmxlbmd0aDtcbiAgY29uc3QgcGlja1JhbmRvbUxvY2F0aW9uID1cbiAgICBlbXB0eUxvY2F0aW9uc1tnZXRSYW5kb21JbnRJbmNsdXNpdmUoMCwgbnVtYmVyRW1wdHlMb2NhdGlvbnMgLSAxKV07XG4gIHJldHVybiBwaWNrUmFuZG9tTG9jYXRpb247XG59O1xuXG5jb25zdCBwbGFjZVNoaXBzID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHJhbmRvbUxvY2F0aW9uO1xuICBsZXQgcm93O1xuICBsZXQgY29sdW1uO1xuXG4gIGNvbnN0IGxvY2F0aW9uc0FycmF5ID0gZnVuY3Rpb24gKGN1cnJlbnRib2FyZCwgY3VycmVudHNoaXAsIG9yaWVudGF0aW9uKSB7XG4gICAgbGV0IG5ld3Bvc2l0aW9uO1xuICAgIGxldCBmaXhlZHBvc2l0aW9uO1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJyb3dcIikge1xuICAgICAgbmV3cG9zaXRpb24gPSBjb2x1bW47XG4gICAgICBmaXhlZHBvc2l0aW9uID0gcm93O1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdwb3NpdGlvbiA9IHJvdztcbiAgICAgIGZpeGVkcG9zaXRpb24gPSBjb2x1bW47XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY3VycmVudHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaWZ0ZWQgPSBuZXdwb3NpdGlvbiAtIGk7XG4gICAgICBpZiAoc2hpZnRlZCA8IDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgbG9jYXRpb247XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwicm93XCIpIHtcbiAgICAgICAgbG9jYXRpb24gPSBmaXhlZHBvc2l0aW9uICsgXCIsXCIgKyBzaGlmdGVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24gPSBzaGlmdGVkICsgXCIsXCIgKyBmaXhlZHBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdHVzT25Mb2NhdGlvbiA9IGN1cnJlbnRib2FyZC5jb29yZGluYXRlc1tsb2NhdGlvbl07XG4gICAgICBpZiAoc3RhdHVzT25Mb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICBhcnJheS5wdXNoKHNoaWZ0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IGN1cnJlbnRzaGlwLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBzaGlmdGVkID0gbmV3cG9zaXRpb24gKyBqO1xuICAgICAgaWYgKHNoaWZ0ZWQgPiAxMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBsb2NhdGlvbjtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJyb3dcIikge1xuICAgICAgICBsb2NhdGlvbiA9IGZpeGVkcG9zaXRpb24gKyBcIixcIiArIHNoaWZ0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbiA9IHNoaWZ0ZWQgKyBcIixcIiArIGZpeGVkcG9zaXRpb247XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0dXNPbkxvY2F0aW9uID0gY3VycmVudGJvYXJkLmNvb3JkaW5hdGVzW2xvY2F0aW9uXTtcbiAgICAgIGlmIChzdGF0dXNPbkxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgIGFycmF5LnB1c2goc2hpZnRlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfTtcblxuICBjb25zdCBzdW1TZXF1ZW5jZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYjsgaSsrKSB7XG4gICAgICBzdW0gKz0gYSArIGk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG4gIH07XG5cbiAgY29uc3QgY29uc2VjdXRpdmVOdW1iZXJzID0gZnVuY3Rpb24gKGFycmF5LCBjdXJyZW50c2hpcGxlbmd0aCkge1xuICAgIGxldCBnb29kc3BvdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBiZWdpbm5pbmdPZlNoaXAgPSBhcnJheVtpXTtcbiAgICAgIC8vdGhlIGZpcnN0IHBvc2l0aW9uIGFsc28gY291bnRzXG4gICAgICBjb25zdCBlbmRPZlNoaXAgPSBiZWdpbm5pbmdPZlNoaXAgKyBjdXJyZW50c2hpcGxlbmd0aCAtIDE7XG4gICAgICBpZiAoZW5kT2ZTaGlwID4gYXJyYXlbYXJyYXkubGVuZ3RoXSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnNlY3V0aXZlID0gc3VtU2VxdWVuY2UoYmVnaW5uaW5nT2ZTaGlwLCBlbmRPZlNoaXApO1xuXG4gICAgICBjb25zdCBpbmFycmF5ID0gc3VtU2VxdWVuY2UoXG4gICAgICAgIGJlZ2lubmluZ09mU2hpcCxcbiAgICAgICAgYXJyYXlbaSArIGN1cnJlbnRzaGlwbGVuZ3RoIC0gMV1cbiAgICAgICk7XG4gICAgICBpZiAoY29uc2VjdXRpdmUgPT09IGluYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGJlZ2lubmluZ09mU2hpcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdvb2RzcG90ID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ29vZHNwb3Q7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZU51bWJlcnMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfTtcblxuICBjb25zdCBjaGVja0ZvckZpdCA9IGZ1bmN0aW9uIChjdXJyZW50c2hpcCwgY3VycmVudGJvYXJkKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbml0aWFsTG9jYXRpb24gPSByb3cgKyBcIixcIiArIGNvbHVtbjtcbiAgICBjb25zdCBhdmFpbGFibGVTcGFjZXNSb3cgPSBsb2NhdGlvbnNBcnJheShjdXJyZW50Ym9hcmQsIGN1cnJlbnRzaGlwLCBcInJvd1wiKVxuICAgICAgLmNvbmNhdChjb2x1bW4pXG4gICAgICAuc29ydChjb21wYXJlTnVtYmVycyk7XG4gICAgY29uc3QgYXZhaWxhYmxlU3BhY2VzQ29sdW1uID0gbG9jYXRpb25zQXJyYXkoXG4gICAgICBjdXJyZW50Ym9hcmQsXG4gICAgICBjdXJyZW50c2hpcCxcbiAgICAgIFwiY29sdW1uXCJcbiAgICApXG4gICAgICAuY29uY2F0KHJvdylcbiAgICAgIC5zb3J0KGNvbXBhcmVOdW1iZXJzKTtcblxuICAgIGlmIChyb3cgJSAyID09PSAxKSB7XG4gICAgICBpZiAoYXZhaWxhYmxlU3BhY2VzUm93Lmxlbmd0aCA8IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgICBpZiAoYXZhaWxhYmxlU3BhY2VzQ29sdW1uLmxlbmd0aCA8IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdGFydHBvc2l0aW9uID0gY29uc2VjdXRpdmVOdW1iZXJzKFxuICAgICAgICAgICAgYXZhaWxhYmxlU3BhY2VzQ29sdW1uLFxuICAgICAgICAgICAgY3VycmVudHNoaXAubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIXN0YXJ0cG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBcImZhaWxzIGNoZWNrXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbc3RhcnRwb3NpdGlvbiwgY29sdW1uLCBcInZlcnRpY2FsXCJdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGFydHBvc2l0aW9uID0gY29uc2VjdXRpdmVOdW1iZXJzKFxuICAgICAgICAgIGF2YWlsYWJsZVNwYWNlc1JvdyxcbiAgICAgICAgICBjdXJyZW50c2hpcC5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFzdGFydHBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIFwiZmFpbHMgY2hlY2tcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3Jvdywgc3RhcnRwb3NpdGlvbiwgXCJob3Jpem9udGFsXCJdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXZhaWxhYmxlU3BhY2VzQ29sdW1uLmxlbmd0aCA8IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgICBpZiAoYXZhaWxhYmxlU3BhY2VzUm93Lmxlbmd0aCA8IGN1cnJlbnRzaGlwLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdGFydHBvc2l0aW9uID0gY29uc2VjdXRpdmVOdW1iZXJzKFxuICAgICAgICAgICAgYXZhaWxhYmxlU3BhY2VzUm93LFxuICAgICAgICAgICAgY3VycmVudHNoaXAubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIXN0YXJ0cG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBcImZhaWxzIGNoZWNrXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbcm93LCBzdGFydHBvc2l0aW9uLCBcImhvcml6b250YWxcIl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0cG9zaXRpb24gPSBjb25zZWN1dGl2ZU51bWJlcnMoXG4gICAgICAgICAgYXZhaWxhYmxlU3BhY2VzQ29sdW1uLFxuICAgICAgICAgIGN1cnJlbnRzaGlwLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAoIXN0YXJ0cG9zaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gXCJmYWlscyBjaGVja1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbc3RhcnRwb3NpdGlvbiwgY29sdW1uLCBcInZlcnRpY2FsXCJdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hhbmdlQm9hcmQgPSBmdW5jdGlvbiAoYm9hcmRvYmosIGN1cnJlbnRzaGlwKSB7XG4gICAgcmFuZG9tTG9jYXRpb24gPSBwaWNrTG9jYXRpb24oYm9hcmRvYmouY29vcmRpbmF0ZXMpLnNwbGl0KFwiLFwiKTtcbiAgICByb3cgPSBOdW1iZXIocmFuZG9tTG9jYXRpb25bMF0pO1xuICAgIGNvbHVtbiA9IE51bWJlcihyYW5kb21Mb2NhdGlvblsxXSk7XG4gICAgY29uc3Qgc2VsZWN0SW5pdGlhbFBsYWNlbWVudCA9IGNoZWNrRm9yRml0KGN1cnJlbnRzaGlwLCBib2FyZG9iaik7XG4gICAgaWYgKHNlbGVjdEluaXRpYWxQbGFjZW1lbnQgPT09IFwiZmFpbHMgY2hlY2tcIiB8fCAhc2VsZWN0SW5pdGlhbFBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGNoYW5nZUJvYXJkKGJvYXJkb2JqLCBjdXJyZW50c2hpcCk7XG4gICAgfVxuICAgIC8vIGlmICghc2VsZWN0SW5pdGlhbFBsYWNlbWVudCkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAvLyAgIHJldHVybiBcIkVSUk9SIEVSUk9SXCI7XG4gICAgLy8gfVxuICAgIGNvbnN0IGN1cnJlbnRzaGlwbGVuZ3RoID0gY3VycmVudHNoaXAubGVuZ3RoO1xuICAgIGNvbnN0IGJvYXRPcmllbnRhdGlvbiA9IHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMl07XG4gICAgbGV0IGNvb3JkaW5hdGVzVG9DaGFuZ2UgPSBbXTtcbiAgICBpZiAoYm9hdE9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudHNoaXBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuZXdjb29yZCA9IFtcbiAgICAgICAgICBOdW1iZXIoc2VsZWN0SW5pdGlhbFBsYWNlbWVudFswXSkgK1xuICAgICAgICAgICAgaSArXG4gICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICBzZWxlY3RJbml0aWFsUGxhY2VtZW50WzFdLFxuICAgICAgICBdO1xuICAgICAgICBjb29yZGluYXRlc1RvQ2hhbmdlLnB1c2gobmV3Y29vcmQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRzaGlwbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgbmV3Y29vcmQgPSBbXG4gICAgICAgICAgc2VsZWN0SW5pdGlhbFBsYWNlbWVudFswXSArXG4gICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICAoTnVtYmVyKHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMV0pICsgaiksXG4gICAgICAgIF07XG4gICAgICAgIGNvb3JkaW5hdGVzVG9DaGFuZ2UucHVzaChuZXdjb29yZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY29vcmRpbmF0ZXNUb0NoYW5nZS5sZW5ndGg7IGsrKykge1xuICAgICAgYm9hcmRvYmouY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNUb0NoYW5nZVtrXV0gPSAxO1xuICAgICAgY3VycmVudHNoaXAuY29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlc1RvQ2hhbmdlW2tdKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiZG9uZVwiO1xuICB9O1xuICByZXR1cm4geyBjaGFuZ2VCb2FyZCB9O1xufSkoKTtcblxuY29uc3Qgc2V0dXBCb2FyZCA9IGZ1bmN0aW9uIChwbGF5ZXIsIHBsYXllcm9iaikge1xuICBsZXQgbmV3Qm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQocGxheWVyKTtcbiAgY29uc3Qgc2hpcEZsZWV0ID0gY3JlYXRlU2hpcEZsZWV0KHBsYXllcik7XG4gIHBsYXllcm9iai5zaGlwcyA9IHNoaXBGbGVldDtcbiAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJCXCIpIHtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbMF0pO1xuICAgIHBsYWNlU2hpcHMuY2hhbmdlQm9hcmQobmV3Qm9hcmQsIHNoaXBGbGVldFsxXSk7XG4gICAgcGxhY2VTaGlwcy5jaGFuZ2VCb2FyZChuZXdCb2FyZCwgc2hpcEZsZWV0WzJdKTtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbM10pO1xuICAgIHBsYWNlU2hpcHMuY2hhbmdlQm9hcmQobmV3Qm9hcmQsIHNoaXBGbGVldFs0XSk7XG4gIH1cbiAgLy9kaXNwbGF5Ym9hcmQobmV3Qm9hcmQpO1xuICByZXR1cm4gbmV3Qm9hcmQ7XG59O1xuXG5jb25zdCBzZXR1cFBsYXllcnMgPSBmdW5jdGlvbiAocGxheWVyLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpIHtcbiAgY29uc3QgbmV3cGxheWVyID0gY3JlYXRlUGxheWVyKHBsYXllciwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKTtcbiAgcmV0dXJuIG5ld3BsYXllcjtcbn07XG5cbmNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uIChhdHRhY2tlciwgdmljdGltLCBjb29yZGluYXRlcykge1xuICBjb25zdCB2aWN0aW1zQm9hcmQgPSB2aWN0aW0uZ2FtZWJvYXJkO1xuICBjb25zdCBhdHRhY2tlckFkdkJvYXJkID0gYXR0YWNrZXIuYWR2Z2FtZWJvYXJkO1xuICBjb25zdCB2aWN0aW1zRmxlZXQgPSB2aWN0aW0uc2hpcHM7XG4gIGNvbnN0IGJvYXJkU3RhdHVzT25Db29yZGluYXRlcyA9IHZpY3RpbXNCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc107XG4gIGNvbnN0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSBbY29vcmRpbmF0ZXNbMF0gKyBcIixcIiArIGNvb3JkaW5hdGVzWzFdXTtcbiAgaWYgKGJvYXJkU3RhdHVzT25Db29yZGluYXRlcyA9PT0gMSkge1xuICAgIC8vY29uc29sZS5sb2coXCJoaXRcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWN0aW1zRmxlZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFycmF5T2ZDb29yZGluYXRlcyA9IHZpY3RpbXNGbGVldFtpXS5jb29yZGluYXRlcy5mbGF0KCk7XG4gICAgICBjb25zdCBpc0l0VGhpc1NoaXAgPSBhcnJheU9mQ29vcmRpbmF0ZXMuaW5jbHVkZXMoXG4gICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXNbMF1cbiAgICAgICk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2aWN0aW1zRmxlZXRbaV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjb29yZGluYXRlc1wiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidHJhbnNmb3JtZWRcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXNpdFwiICsgaXNJdFRoaXNTaGlwKTtcbiAgICAgIGlmIChpc0l0VGhpc1NoaXApIHtcbiAgICAgICAgY29uc3QgaGl0SW5kZXggPSBhcnJheU9mQ29vcmRpbmF0ZXMuZmluZEluZGV4KFxuICAgICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50ID09PSB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzWzBdXG4gICAgICAgICk7XG4gICAgICAgIHZpY3RpbXNGbGVldFtpXS5oaXQoaGl0SW5kZXgpO1xuICAgICAgICB2aWN0aW1zQm9hcmQuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNdID0gXCJ4XCI7XG4gICAgICAgIGF0dGFja2VyQWR2Qm9hcmQuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNdID0gXCJ4XCI7XG4gICAgICAgIHZpY3RpbXNGbGVldFtpXS5oaXRzO1xuICAgICAgICBpZiAodmljdGltc0ZsZWV0W2ldLnN1bmspIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2hpcCBzdW5rOiBcIiArIHZpY3RpbXNGbGVldFtpXS5uYW1lKTtcbiAgICAgICAgICBjb25zdCBzdW5rZW5TaGlwcyA9IGNvdW50U3Vua2VuU2hpcHModmljdGltc0ZsZWV0KTtcbiAgICAgICAgICBpZiAoc3Vua2VuU2hpcHMgPT09IDUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnYW1lb3ZlclwiKTtcbiAgICAgICAgICAgIHJldHVybiBbXCJnYW1lb3ZlclwiLCB2aWN0aW1zRmxlZXRbaV0ubmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJoaXRcIiwgdmljdGltc0ZsZWV0W2ldLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1wiaGl0XCIsIFwic3RhbmRpbmdcIl07XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vY29uc29sZS5sb2coXCJtaXNzXCIpO1xuICAgIHZpY3RpbXNCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcIm1cIjtcbiAgICBhdHRhY2tlckFkdkJvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXSA9IFwibVwiO1xuICAgIHJldHVybiBbXCJtaXNzXCIsIFwiXCJdO1xuICB9XG59O1xuXG5jb25zdCBjb3VudFN1bmtlblNoaXBzID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzaGlwID0gYXJyYXlbaV07XG4gICAgY29uc3Qgc3VuayA9IHNoaXAuc3VuaztcbiAgICBpZiAoc3Vuaykge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufTtcblxuY29uc3QgZGlzcGxheWJvYXJkID0gZnVuY3Rpb24gKGN1cnJlbnRib2FyZCkge1xuICBjb25zb2xlLmxvZyhcIiBcIik7XG4gIGNvbnN0IGNvb3JkID0gY3VycmVudGJvYXJkLmNvb3JkaW5hdGVzO1xuICBjb25zb2xlLmxvZygwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCBcImRcIik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICBpZiAoaSA9PT0gMTApIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcImRcIixcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgMV0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDJdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyAzXSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgNF0sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDVdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA2XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgN10sXG4gICAgICAgIGNvb3JkW2kgKyBcIixcIiArIDhdLFxuICAgICAgICBjb29yZFtpICsgXCIsXCIgKyA5XSxcbiAgICAgICAgY29vcmRbaSArIFwiLFwiICsgMTBdXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgaSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDFdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgMl0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyAzXSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDRdLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgNV0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA2XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDddLFxuICAgICAgY29vcmRbaSArIFwiLFwiICsgOF0sXG4gICAgICBjb29yZFtpICsgXCIsXCIgKyA5XSxcbiAgICAgIGNvb3JkW2kgKyBcIixcIiArIDEwXVxuICAgICk7XG4gIH1cbn07XG5cbmxldCBsYXN0Y29vcmQgPSBbXTtcbmxldCBwb3NzaWJsZWJldHRlcmxvY2F0aW9ucyA9IFtdO1xuXG5mdW5jdGlvbiBnYW1lTG9vcChsb2NhdGlvbiwgcGxheWVyQSwgcGxheWVyQikge1xuICBsZXQgc3RvcCA9IGZhbHNlO1xuICAvL3BsYXllciBBIHBpY2tzIGEgY29vcmRpbmF0ZVxuXG4gIC8vY29uc29sZS5sb2coXCJBIExvY2F0aW9uIHNlbGVjdGVkOiBcIik7XG4gIC8vY29uc29sZS5sb2cobG9jYXRpb24pO1xuICAvLyBwbGF5ZXIgQSBhdHRhY2tzXG4gIGNvbnN0IGxvY2F0aW9udGVtcCA9IGxvY2F0aW9uLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpO1xuICBjb25zdCBmaW5hbGxvY2F0aW9uID0gW051bWJlcihsb2NhdGlvbnRlbXBbMF0pLCBOdW1iZXIobG9jYXRpb250ZW1wWzFdKV07XG4gIGNvbnN0IGF0dGFja1Jlc3VsdCA9IGF0dGFjayhwbGF5ZXJBLCBwbGF5ZXJCLCBmaW5hbGxvY2F0aW9uKTtcbiAgY29uc3QgaGl0b3JtaXNzQXZzQiA9IGF0dGFja1Jlc3VsdFswXTtcbiAgY29uc3Qgc3Vua1N0YXR1c0IgPSBhdHRhY2tSZXN1bHRbMV07XG5cbiAgaWYgKGhpdG9ybWlzc0F2c0IgPT09IFwiaGl0XCIgfHwgaGl0b3JtaXNzQXZzQiA9PT0gXCJnYW1lb3ZlclwiKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtY29vcmR0b2lkTG9jYXRpb24gPSBsb2NhdGlvbi50b1N0cmluZygpLnJlcGxhY2UoXCIsXCIsIFwiLVwiKTtcbiAgICBjb25zdCBvdGhlcnBsYXllcmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdGhlcnBsYXllclwiKTtcbiAgICBjb25zdCBmaW5kRGl2T3RoZXIgPSBvdGhlcnBsYXllcmJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2lkPVwiJHt0cmFuc2Zvcm1jb29yZHRvaWRMb2NhdGlvbn1cIl1gXG4gICAgKTtcblxuICAgIGZpbmREaXZPdGhlci5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICB9XG5cbiAgaWYgKHN1bmtTdGF0dXNCICE9PSBcIlwiICYmIHN1bmtTdGF0dXNCICE9PSBcInN0YW5kaW5nXCIpIHtcbiAgICBjb25zdCBzdW5rZWRzaGlwbmFtZSA9IHN1bmtTdGF0dXNCLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgc3Vua2Vkc2hpcEgzSWQgPSBzdW5rZWRzaGlwbmFtZSArIFwiQWR2XCI7XG4gICAgY29uc3Qgc2hpcE9uRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3Vua2Vkc2hpcEgzSWQpO1xuICAgIGNvbnN0IHNoaXBSZWZlcmVuY2VEaXYgPSBzaGlwT25Eb20ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IGFsbGRpdnNJbnNpZGUgPSBzaGlwUmVmZXJlbmNlRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgYWxsZGl2c0luc2lkZS5mb3JFYWNoKChkaXYpID0+IChkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyZXlcIikpO1xuICAgIHNoaXBPbkRvbS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICBjb25zdCBzdW5rc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Vua3NoaXBcIik7XG4gICAgc3Vua3NoaXAudGV4dENvbnRlbnQgPVxuICAgICAgXCJMYXRlc3QgQ2FzdWFsdHk6IENvbXB1dGVyJ3MgXCIgKyBzdW5rU3RhdHVzQiArIFwiIGhhcyBzdW5rLlwiO1xuICB9XG4gIGlmIChoaXRvcm1pc3NBdnNCID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBjb25zdCBzdW5rZWRzaGlwbmFtZSA9IHN1bmtTdGF0dXNCLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgc3Vua2Vkc2hpcEgzSWQgPSBzdW5rZWRzaGlwbmFtZSArIFwiQWR2XCI7XG4gICAgY29uc3Qgc2hpcE9uRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3Vua2Vkc2hpcEgzSWQpO1xuICAgIHNoaXBPbkRvbS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICBzdG9wID0gdHJ1ZTtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJhbm5vdWNlbWVudFwiKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXIuIFlvdSBhcmUgdGhlIHdpbm5lciFcIjtcbiAgICByZXR1cm4gc3RvcDtcbiAgfVxuXG4gIC8vICBwbGF5ZXIgQiBwaWNrcyBhIGNvb3JkaW5hdGVcbiAgY29uc29sZS5sb2coXCJwbGF5ZXIgQiBwaWNrc1wiKTtcbiAgY29uc29sZS5sb2cobGFzdGNvb3JkKTtcbiAgbGV0IHNlbGVjdGVkTG9jYXRpb247XG4gIGlmIChsYXN0Y29vcmQubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMb2NhdGlvblJhdyA9IHBpY2tMb2NhdGlvbihcbiAgICAgIHBsYXllckIuYWR2Z2FtZWJvYXJkLmNvb3JkaW5hdGVzXG4gICAgKS5zcGxpdChcIixcIik7XG4gICAgc2VsZWN0ZWRMb2NhdGlvbiA9IFtcbiAgICAgIE51bWJlcihzZWxlY3RlZExvY2F0aW9uUmF3WzBdKSxcbiAgICAgIE51bWJlcihzZWxlY3RlZExvY2F0aW9uUmF3WzFdKSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKHBvc3NpYmxlYmV0dGVybG9jYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHBvc3NpYmxlYmV0dGVybG9jYXRpb25zID0gcGlja0JldHRlckNvb3JkKGxhc3Rjb29yZCwgcGxheWVyQik7XG4gICAgbGV0IHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbDtcbiAgICBpZiAocG9zc2libGViZXR0ZXJsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uT3JpZ2luYWwgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9uc1swXS5zcGxpdChcIixcIik7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uID0gW1xuICAgICAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvbk9yaWdpbmFsWzBdKSxcbiAgICAgICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbFsxXSksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uT3JpZ2luYWwgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9uc1swXS5zcGxpdChcIixcIik7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uID0gW1xuICAgICAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvbk9yaWdpbmFsWzBdKSxcbiAgICAgICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbFsxXSksXG4gICAgICBdO1xuICAgICAgcG9zc2libGViZXR0ZXJsb2NhdGlvbnMgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9ucy5zbGljZSgxKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbDtcbiAgICBpZiAocG9zc2libGViZXR0ZXJsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uT3JpZ2luYWwgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9uc1swXS5zcGxpdChcIixcIik7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uID0gW1xuICAgICAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvbk9yaWdpbmFsWzBdKSxcbiAgICAgICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbFsxXSksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uT3JpZ2luYWwgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9uc1swXS5zcGxpdChcIixcIik7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uID0gW1xuICAgICAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvbk9yaWdpbmFsWzBdKSxcbiAgICAgICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbFsxXSksXG4gICAgICBdO1xuICAgICAgcG9zc2libGViZXR0ZXJsb2NhdGlvbnMgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9ucy5zbGljZSgxKTtcbiAgICB9XG4gIH1cbiAgLy9jb25zb2xlLmxvZyhcIkIgTG9jYXRpb24gc2VsZWN0ZWQ6IFwiICsgc2VsZWN0ZWRMb2NhdGlvbik7XG4gIC8vcGxheWVyIEIgYXR0YWNrc1xuICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkTG9jYXRpb24pO1xuICBjb25zdCB0cmFuc2Zvcm1jb29yZHRvaWQgPSBzZWxlY3RlZExvY2F0aW9uLnRvU3RyaW5nKCkucmVwbGFjZShcIixcIiwgXCItXCIpO1xuICBjb25zdCBtYWlucGxheWVyYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5wbGF5ZXJcIik7XG4gIGNvbnN0IGZpbmREaXYgPSBtYWlucGxheWVyYm9hcmQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHt0cmFuc2Zvcm1jb29yZHRvaWR9XCJdYCk7XG4gIGNvbnN0IGF0dGFja1Jlc3VsdENvbXB1dGVyID0gYXR0YWNrKHBsYXllckIsIHBsYXllckEsIHNlbGVjdGVkTG9jYXRpb24pO1xuICBjb25zdCBoaXRvcm1pc3NCdnNBID0gYXR0YWNrUmVzdWx0Q29tcHV0ZXJbMF07XG4gIGNvbnN0IHN1bmtTdGF0dXNBID0gYXR0YWNrUmVzdWx0Q29tcHV0ZXJbMV07XG5cbiAgaWYgKFxuICAgIGhpdG9ybWlzc0J2c0EgPT09IFwiaGl0XCIgJiZcbiAgICAoc3Vua1N0YXR1c0EgPT09IFwic3RhbmRpbmdcIiB8fCBzdW5rU3RhdHVzQSA9PT0gXCJcIilcbiAgKSB7XG4gICAgbGFzdGNvb3JkLnB1c2goc2VsZWN0ZWRMb2NhdGlvblswXSArIFwiLFwiICsgc2VsZWN0ZWRMb2NhdGlvblsxXSk7XG4gICAgY29uc29sZS5sb2cobGFzdGNvb3JkKTtcbiAgICBwb3NzaWJsZWJldHRlcmxvY2F0aW9ucyA9IFtdO1xuICB9XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZG9tUGxheWVyQihoaXRvcm1pc3NCdnNBLCBmaW5kRGl2LCBzdW5rU3RhdHVzQSk7XG4gIH0sIDEwMDApO1xuXG4gIGlmIChzdW5rU3RhdHVzQSAhPT0gXCJzdGFuZGluZ1wiICYmIHN1bmtTdGF0dXNBICE9PSBcIlwiKSB7XG4gICAgbGFzdGNvb3JkID0gW107XG4gICAgcG9zc2libGViZXR0ZXJsb2NhdGlvbnMgPSBbXTtcbiAgfVxuXG4gIGlmIChoaXRvcm1pc3NCdnNBID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJhbm5vdWNlbWVudFwiKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXIuIFRoZSBDb21wdXRlciBpcyB0aGUgd2lubmVyIVwiO1xuICAgIHN0b3AgPSB0cnVlO1xuICAgIHJldHVybiBzdG9wO1xuICB9XG4gIHJldHVybiBzdG9wO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBjb25zdCBwbGF5ZXJBQm9hcmQgPSBzZXR1cEJvYXJkKFwicGxheWVyQVwiLCBwbGF5ZXIxKTtcbiAgY29uc3QgcGxheWVyQVRyYWNrc0JCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcInBsYXllckFUcmFja3NCXCIpO1xuICBwbGF5ZXIxLmdhbWVib2FyZCA9IHBsYXllckFCb2FyZDtcbiAgcGxheWVyMS5hZHZnYW1lYm9hcmQgPSBwbGF5ZXJBVHJhY2tzQkJvYXJkO1xuICBjb25zdCBwbGF5ZXJCQm9hcmQgPSBzZXR1cEJvYXJkKFwicGxheWVyQlwiLCBwbGF5ZXIyKTtcbiAgY29uc3QgcGxheWVyQlRyYWNrc0FCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcInBsYXllckJUcmFja3NBXCIpO1xuICBwbGF5ZXIyLmdhbWVib2FyZCA9IHBsYXllckJCb2FyZDtcbiAgcGxheWVyMi5hZHZnYW1lYm9hcmQgPSBwbGF5ZXJCVHJhY2tzQUJvYXJkO1xuICByZXR1cm4gW3BsYXllcjEsIHBsYXllcjJdO1xufVxuXG4vL3gseSA9IDEsMlxuZnVuY3Rpb24gcGlja0JldHRlckNvb3JkKGV4aXN0aW5nQ29vcmQsIHBsYXllcikge1xuICBsZXQgY29vcmRBcnJheSA9IFtdO1xuICBpZiAoZXhpc3RpbmdDb29yZC5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBzcGxpdEl0ID0gZXhpc3RpbmdDb29yZFswXS5zcGxpdChcIixcIik7XG4gICAgY29uc3QgaW5pdGlhbFggPSBOdW1iZXIoc3BsaXRJdFswXSk7XG4gICAgY29uc3QgaW5pdGlhbFkgPSBOdW1iZXIoc3BsaXRJdFsxXSk7XG4gICAgbGV0IG5vcnRoLCBzb3V0aCwgd2VzdCwgZWFzdDtcbiAgICBpZiAoaW5pdGlhbFggLSAxICE9PSAwKSB7XG4gICAgICBub3J0aCA9IGluaXRpYWxYIC0gMSArIFwiLFwiICsgaW5pdGlhbFk7XG4gICAgICBpZiAocGxheWVyLmFkdmdhbWVib2FyZC5jb29yZGluYXRlc1tub3J0aF0gPT09IDApIHtcbiAgICAgICAgY29vcmRBcnJheS5wdXNoKG5vcnRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluaXRpYWxYICsgMSAhPT0gMTEpIHtcbiAgICAgIHNvdXRoID0gaW5pdGlhbFggKyAxICsgXCIsXCIgKyBpbml0aWFsWTtcbiAgICAgIGlmIChwbGF5ZXIuYWR2Z2FtZWJvYXJkLmNvb3JkaW5hdGVzW3NvdXRoXSA9PT0gMCkge1xuICAgICAgICBjb29yZEFycmF5LnB1c2goc291dGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbml0aWFsWSAtIDEgIT09IDApIHtcbiAgICAgIGVhc3QgPSBpbml0aWFsWCArIFwiLFwiICsgKGluaXRpYWxZIC0gMSk7XG4gICAgICBpZiAocGxheWVyLmFkdmdhbWVib2FyZC5jb29yZGluYXRlc1tlYXN0XSA9PT0gMCkge1xuICAgICAgICBjb29yZEFycmF5LnB1c2goZWFzdCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbml0aWFsWSArIDEgIT09IDExKSB7XG4gICAgICB3ZXN0ID0gaW5pdGlhbFggKyBcIixcIiArIChpbml0aWFsWSArIDEpO1xuICAgICAgaWYgKHBsYXllci5hZHZnYW1lYm9hcmQuY29vcmRpbmF0ZXNbZWFzdF0gPT09IDApIHtcbiAgICAgICAgY29vcmRBcnJheS5wdXNoKHdlc3QpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBhcnJheUNvb3JkID0gZXhpc3RpbmdDb29yZDtcbiAgICBjb25zdCBmaXJzdCA9IGFycmF5Q29vcmRbMF0uc3BsaXQoXCIsXCIpO1xuICAgIGNvbnN0IHNlY29uZCA9IGFycmF5Q29vcmRbMV0uc3BsaXQoXCIsXCIpO1xuICAgIGxldCBkaXJlY3Rpb247XG4gICAgaWYgKGZpcnN0WzBdID09PSBzZWNvbmRbMF0pIHtcbiAgICAgIGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgY29uc3QgY3VycmVudFkgPSBhcnJheUNvb3JkWzBdLnNwbGl0KFwiLFwiKVsxXTtcbiAgICAgIGxldCBhcnJheU9mWCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUNvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5T2ZYLnB1c2goTnVtYmVyKGFycmF5Q29vcmRbaV0uc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgICB9XG4gICAgICBhcnJheU9mWC5zb3J0KHNvcnRlcik7XG4gICAgICBsZXQgbm9ydGgsIHNvdXRoO1xuICAgICAgaWYgKGFycmF5T2ZYWzBdIC0gMSAhPT0gMCkge1xuICAgICAgICBub3J0aCA9IGFycmF5T2ZYWzBdIC0gMSArIFwiLFwiICsgY3VycmVudFk7XG4gICAgICAgIGlmIChwbGF5ZXIuYWR2Z2FtZWJvYXJkLmNvb3JkaW5hdGVzW25vcnRoXSA9PT0gMCkge1xuICAgICAgICAgIGNvb3JkQXJyYXkucHVzaChub3J0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhcnJheU9mWFtsZW5ndGggLSAxXSArIDEgIT09IDExKSB7XG4gICAgICAgIHNvdXRoID0gYXJyYXlPZlhbYXJyYXlPZlgubGVuZ3RoIC0gMV0gKyAxICsgXCIsXCIgKyBjdXJyZW50WTtcbiAgICAgICAgaWYgKHBsYXllci5hZHZnYW1lYm9hcmQuY29vcmRpbmF0ZXNbc291dGhdID09PSAwKSB7XG4gICAgICAgICAgY29vcmRBcnJheS5wdXNoKHNvdXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50WCA9IGFycmF5Q29vcmRbMF0uc3BsaXQoXCIsXCIpWzBdO1xuICAgICAgbGV0IGFycmF5T2ZZID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Q29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXlPZlkucHVzaChOdW1iZXIoYXJyYXlDb29yZFtpXS5zcGxpdChcIixcIilbMV0pKTtcbiAgICAgIH1cbiAgICAgIGFycmF5T2ZZLnNvcnQoc29ydGVyKTtcbiAgICAgIGxldCBlYXN0LCB3ZXN0O1xuICAgICAgaWYgKGFycmF5T2ZZWzBdIC0gMSAhPT0gMCkge1xuICAgICAgICBlYXN0ID0gY3VycmVudFggKyBcIixcIiArIChhcnJheU9mWVswXSAtIDEpO1xuICAgICAgICBpZiAocGxheWVyLmFkdmdhbWVib2FyZC5jb29yZGluYXRlc1tlYXN0XSA9PT0gMCkge1xuICAgICAgICAgIGNvb3JkQXJyYXkucHVzaChlYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFycmF5T2ZZW2xlbmd0aCAtIDFdICE9PSAxMSkge1xuICAgICAgICB3ZXN0ID0gY3VycmVudFggKyBcIixcIiArIChhcnJheU9mWVthcnJheU9mWS5sZW5ndGggLSAxXSArIDEpO1xuICAgICAgICBpZiAocGxheWVyLmFkdmdhbWVib2FyZC5jb29yZGluYXRlc1t3ZXN0XSA9PT0gMCkge1xuICAgICAgICAgIGNvb3JkQXJyYXkucHVzaCh3ZXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29vcmRBcnJheTtcbn1cblxuY29uc3Qgc29ydGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufTtcblxuLy9zdGFydEdhbWUoKTtcblxuLy8gbGV0IGxvb3BpdCA9IGdhbWVMb29wUHJvbXB0KCk7XG4vLyB3aGlsZSAoIWxvb3BpdCkge1xuLy8gICBsb29waXQgPSBnYW1lTG9vcFByb21wdCgpO1xuLy8gfVxuXG4vL2FpIHNtYXJ0ZXI6XG4vLyBpZ25vcmUgZW1wdHkgc3BhY2VzIHdpdGhvdXQgb3RoZXIgc3BhY2VzIGFyb3VuZFxuLy8gcGljayB0aGUgbGFyZ2VyIHNoaXAgbm90IGZvdW5kIHlldCBhbmQgZmluZCBzcGFjZSBmb3IgaXQgb24gdGhlIGJvYXJkOiBwaWNrIHRoZSBtaWRkbGUgc3F1YXJlIGZpcnN0XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgc3RhcnRHYW1lLFxuICBzZXR1cFBsYXllcnMsXG4gIGdhbWVMb29wLFxuICBwaWNrQmV0dGVyQ29vcmQsXG59IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuZXhwb3J0IHsgZG9tUGxheWVyQiB9O1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyQm9hcmRcIik7XG5jb25zdCBhZHZCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWR2Qm9hcmRcIik7XG4vL2knbSBhdHJpYnV0dGluZyBjb29yZGluYXRlcyBkbyBwbGF5ZXIncyBBIHNoaXBzLCBhbmQgY2hhbmdpbmcgdGhlbSBsYXRlciBhY2NvcmRpbmcgdG8gdXNlciBpbnB1dFxubGV0IHBsYXllckEgPSBzZXR1cFBsYXllcnMoXCJwbGF5ZXJBXCIsIFtdLCB7fSwge30pO1xubGV0IHBsYXllckIgPSBzZXR1cFBsYXllcnMoXCJwbGF5ZXJCXCIsIFtdLCB7fSwge30pO1xubGV0IG51bW1vdmVzID0gMDtcbmNvbnN0IHVwZGF0ZWRQbGF5ZXJzID0gc3RhcnRHYW1lKHBsYXllckEsIHBsYXllckIpO1xuXG5wbGF5ZXJBID0gdXBkYXRlZFBsYXllcnNbMF07XG5wbGF5ZXJCID0gdXBkYXRlZFBsYXllcnNbMV07XG5cbi8vb25wYWdlbG9hZFxuXG5jb25zdCB0b3BudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcG51bWJlckpcIik7XG5jb25zdCB0b3BudW1iZXJBZHYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcG51bWJlckpBZHZcIik7XG5mb3IgKGxldCBrID0gMDsgayA8PSAxMDsgaysrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRpdmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZiAoayA9PT0gMCkge1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZGl2YS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgZGl2LnRleHRDb250ZW50ID0gaztcbiAgICBkaXZhLnRleHRDb250ZW50ID0gaztcbiAgfVxuICB0b3BudW1iZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgdG9wbnVtYmVyQWR2LmFwcGVuZENoaWxkKGRpdmEpO1xufVxuXG5jb25zdCBudW1iZXJJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJJXCIpO1xuY29uc3QgbnVtYmVySUFkdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVySUFkdlwiKTtcbmZvciAobGV0IHogPSAxOyB6IDw9IDEwOyB6KyspIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGl2YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi50ZXh0Q29udGVudCA9IHo7XG4gIGRpdmEudGV4dENvbnRlbnQgPSB6O1xuICBudW1iZXJJLmFwcGVuZENoaWxkKGRpdik7XG4gIG51bWJlcklBZHYuYXBwZW5kQ2hpbGQoZGl2YSk7XG59XG5cbmZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgIGNvbnN0IGRpdkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpdkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkEuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSArIFwiLVwiICsgaik7XG4gICAgZGl2QS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpdEJveCBwbGF5ZXJBIG5vdFNlbGVjdGVkQVwiKTtcbiAgICBkaXZCLnNldEF0dHJpYnV0ZShcImlkXCIsIGkgKyBcIi1cIiArIGopO1xuICAgIGRpdkIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaXRCb3ggb3RoZXJwbGF5ZXIgbm90U2VsZWN0ZWRCXCIpO1xuICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKGRpdkEpO1xuICAgIGFkdkJvYXJkLmFwcGVuZENoaWxkKGRpdkIpO1xuICB9XG59XG5cbi8vIHBsYWNlIHNoaXBzXG5cbmxldCBnYW1lc3RhdHVzO1xuY29uc3Qgc2VsZWN0U2hpcExvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHBsYWNlZCA9IDA7XG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChjdXJyZW50c2hpcCkge1xuICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgIGNvbnN0IGN1cnJlbnRzaGlwdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRTaGlwXCIpO1xuICAgIGxldCBjb29yZGluYXRlc0xlbmd0aDtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gY3VycmVudHNoaXAubGVuZ3RoO1xuICAgIGNvbnN0IHNoaXBOYW1lID0gY3VycmVudHNoaXAubmFtZTtcbiAgICBpZiAoc2hpcE5hbWUgIT09IFwiQ2FycmllclwiKSB7XG4gICAgICBpbmNyZWFzZWZvbnQoKTtcbiAgICAgIHNldFRpbWVvdXQoZGVjcmVhc2Vmb250LCA2MDApO1xuICAgIH1cblxuICAgIGN1cnJlbnRzaGlwdGl0bGUudGV4dENvbnRlbnQgPSBgU2V0dXAgeW91ciBmbGVldDogc2VsZWN0ICR7c2hpcExlbmd0aH0gY29uc2VjdXRpdmUgc3BvdHMgZm9yIHBsYWNpbmcgeW91ciAke3NoaXBOYW1lfS5gO1xuXG4gICAgY29uc3QgYWxsZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90U2VsZWN0ZWRBXCIpO1xuICAgIGZ1bmN0aW9uIHNlbGVjdFNxdWFyZShlKSB7XG4gICAgICBjb25zdCBkaXZpZCA9IGUudGFyZ2V0LmlkO1xuICAgICAgY29uc3QgbGVnYWxNb3ZlID0gY2hlY2tDb25zZWN1dGl2ZVNxdWFyZXMoZGl2aWQsIGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoKTtcbiAgICAgIGlmIChsZWdhbE1vdmUpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChkaXZpZCk7XG4gICAgICAgIGNvb3JkaW5hdGVzTGVuZ3RoID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRBXCIgKyBwbGFjZWQpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwibm90U2VsZWN0ZWRBXCIpO1xuICAgICAgICBjaGVja0lmRmluaXNoZWQoY3VycmVudHNoaXAsIGNvb3JkaW5hdGVzKTtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzTGVuZ3RoID09PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgYWxsZGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RTcXVhcmUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChwbGFjZWQgPCA1KSB7XG4gICAgICAgICAgICBwbGFjZUFsbFNoaXBzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG90aGVycGxheWVyZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdGhlcnBsYXllclwiKTtcbiAgICAgICAgICAgIGNvbnN0IGZsZWV0c2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxlZXRzXCIpO1xuICAgICAgICAgICAgb3RoZXJwbGF5ZXJkaXYuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgZmxlZXRzZGl2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIGNyZWF0ZVNoaXBSZWZlcmVuY2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgYWxsZGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RTcXVhcmUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hpcFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBzaGlwY2xhc3NlcyA9IFtcbiAgICAgIFwiZmxlZXRjYXJyaWVyXCIsXG4gICAgICBcImZsZWV0YmF0dGxlc2hpcFwiLFxuICAgICAgXCJmbGVldGRlc3Ryb3llclwiLFxuICAgICAgXCJmbGVldHN1Ym1hcmluZVwiLFxuICAgICAgXCJmbGVldHBhdHJvbFwiLFxuICAgIF07XG4gICAgY29uc3Qgc2hpcE51bWJlclNxdWFyZXMgPSBbNSwgNCwgMywgMywgMl07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBOdW1iZXJTcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ZGl2U2VsZWN0b3IgPSBcIi5cIiArIHNoaXBjbGFzc2VzW2ldO1xuICAgICAgY29uc3QgY3VycmVudGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY3VycmVudGRpdlNlbGVjdG9yKTtcbiAgICAgIGN1cnJlbnRkaXYuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBOdW1iZXJTcXVhcmVzW2ldOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNxdWFyZVBsYWNlZFwiKTtcbiAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlQWxsU2hpcHMoKSB7XG4gICAgY29uc3Qgc2hpcHNUb0JlUGxhY2VkID0gcGxheWVyQS5zaGlwcztcbiAgICBwbGFjZVNoaXAoc2hpcHNUb0JlUGxhY2VkW3BsYWNlZF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVhc2Vmb250KCkge1xuICAgIGNvbnN0IHNoaXB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFNoaXBcIik7XG4gICAgc2hpcHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XG4gIH1cbiAgZnVuY3Rpb24gZGVjcmVhc2Vmb250KCkge1xuICAgIGNvbnN0IHNoaXB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFNoaXBcIik7XG4gICAgc2hpcHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIxN3B4XCI7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NvbnNlY3V0aXZlU3F1YXJlcyhcbiAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgIGNvb3JkaW5hdGVzYXJyYXksXG4gICAgc2hpcGxlbmd0aFxuICApIHtcbiAgICBsZXQgZ29vZE1vdmUgPSBmYWxzZTtcbiAgICBpZiAoY29vcmRpbmF0ZXNhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIGNoZWNrcyBpZiBpdCBmaXRzIGhvcml6b250YWxseSBmaXJzdCBhbmQgdGhlbiB2ZXJ0aWNhbGx5IGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKFxuICAgICAgICBjaGVja0lmU2hpcEZpdHNIb3Jpem9udGFsbHkoXG4gICAgICAgICAgc2hpcGxlbmd0aCxcbiAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgICAgICAgIGNvb3JkaW5hdGVzYXJyYXlcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY2hlY2tJZlNoaXBGaXRzVmVydGljYWxseShcbiAgICAgICAgICBzaGlwbGVuZ3RoLFxuICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24sXG4gICAgICAgICAgY29vcmRpbmF0ZXNhcnJheVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb29yZGluYXRlc2FycmF5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXNOdW1iZXJzID0gY29vcmRpbmF0ZXNhcnJheVswXS5zcGxpdChcIi1cIik7XG4gICAgICBjb25zdCBjb29yZGluYXRlc1ggPSBOdW1iZXIoY29vcmRpbmF0ZXNOdW1iZXJzWzBdKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzWSA9IE51bWJlcihjb29yZGluYXRlc051bWJlcnNbMV0pO1xuICAgICAgY29uc3Qgbm9ydGhDb29yZCA9IGNvb3JkaW5hdGVzWCAtIDEgKyBcIi1cIiArIGNvb3JkaW5hdGVzWTtcbiAgICAgIGNvbnN0IHNvdXRoQ29vcmQgPSBjb29yZGluYXRlc1ggKyAxICsgXCItXCIgKyBjb29yZGluYXRlc1k7XG4gICAgICBjb25zdCB3ZXN0Q29vcmQgPSBjb29yZGluYXRlc1ggKyBcIi1cIiArIChjb29yZGluYXRlc1kgLSAxKTtcbiAgICAgIGNvbnN0IGVhc3RDb29yZCA9IGNvb3JkaW5hdGVzWCArIFwiLVwiICsgKGNvb3JkaW5hdGVzWSArIDEpO1xuXG4gICAgICBjb25zdCBsZWdhbE1vdmVzID0gW25vcnRoQ29vcmQsIHNvdXRoQ29vcmQsIHdlc3RDb29yZCwgZWFzdENvb3JkXTtcblxuICAgICAgaWYgKGxlZ2FsTW92ZXMuaW5jbHVkZXMoY3VycmVudHNlbGVjdGlvbikpIHtcbiAgICAgICAgLy8gd2l0aCBjdXJyZW50IHNlbGVjdGlvbiwgdGhlIHNoaXAgd291bGQgYmUgcGxhY2VkIGhvdz9cbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvblNwbGl0ID0gY3VycmVudHNlbGVjdGlvbi5zcGxpdChcIi1cIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb25YID0gTnVtYmVyKGN1cnJlbnRTZWxlY3Rpb25TcGxpdFswXSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb25ZID0gTnVtYmVyKGN1cnJlbnRTZWxlY3Rpb25TcGxpdFsxXSk7XG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0aW9uWCA9PT0gY29vcmRpbmF0ZXNYKSB7XG4gICAgICAgICAgLy9ob3Jpem9udGFsXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2hlY2tJZlNoaXBGaXRzSG9yaXpvbnRhbGx5KFxuICAgICAgICAgICAgICBzaGlwbGVuZ3RoLFxuICAgICAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgICAgICAgICAgICBjb29yZGluYXRlc2FycmF5XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBnb29kTW92ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vdmVydGljYWxcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaGVja0lmU2hpcEZpdHNWZXJ0aWNhbGx5KFxuICAgICAgICAgICAgICBzaGlwbGVuZ3RoLFxuICAgICAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgICAgICAgICAgICBjb29yZGluYXRlc2FycmF5XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBnb29kTW92ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb29yZGluYXRlc1ggPSBbXTtcbiAgICAgIGxldCBjb29yZGluYXRlc1kgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXNhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzZXBhcmF0ZUNvb3JkID0gY29vcmRpbmF0ZXNhcnJheVtpXS5zcGxpdChcIi1cIik7XG4gICAgICAgIGNvb3JkaW5hdGVzWC5wdXNoKE51bWJlcihzZXBhcmF0ZUNvb3JkWzBdKSk7XG4gICAgICAgIGNvb3JkaW5hdGVzWS5wdXNoKE51bWJlcihzZXBhcmF0ZUNvb3JkWzFdKSk7XG4gICAgICB9XG4gICAgICBpZiAoY29vcmRpbmF0ZXNYWzBdID09PSBjb29yZGluYXRlc1hbMV0pIHtcbiAgICAgICAgLy9ob3Jpem9udGFsXG4gICAgICAgIGNvb3JkaW5hdGVzWS5zb3J0KHNvcnRlcik7XG4gICAgICAgIGNvbnN0IHdlc3RDb29yZCA9IGNvb3JkaW5hdGVzWFswXSArIFwiLVwiICsgKGNvb3JkaW5hdGVzWVswXSAtIDEpO1xuICAgICAgICBjb25zdCBlYXN0Q29vcmQgPVxuICAgICAgICAgIGNvb3JkaW5hdGVzWFswXSArIFwiLVwiICsgKGNvb3JkaW5hdGVzWVtjb29yZGluYXRlc1kubGVuZ3RoIC0gMV0gKyAxKTtcbiAgICAgICAgaWYgKGN1cnJlbnRzZWxlY3Rpb24gPT09IHdlc3RDb29yZCB8fCBjdXJyZW50c2VsZWN0aW9uID09PSBlYXN0Q29vcmQpIHtcbiAgICAgICAgICBnb29kTW92ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vdmVydGljYWxcbiAgICAgICAgY29vcmRpbmF0ZXNYLnNvcnQoc29ydGVyKTtcbiAgICAgICAgY29uc3Qgbm9ydGhDb29yZCA9IGNvb3JkaW5hdGVzWFswXSAtIDEgKyBcIi1cIiArIGNvb3JkaW5hdGVzWVswXTtcbiAgICAgICAgY29uc3Qgc291dGhDb29yZCA9XG4gICAgICAgICAgY29vcmRpbmF0ZXNYW2Nvb3JkaW5hdGVzWC5sZW5ndGggLSAxXSArIDEgKyBcIi1cIiArIGNvb3JkaW5hdGVzWVswXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24gPT09IG5vcnRoQ29vcmQgfHxcbiAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uID09PSBzb3V0aENvb3JkXG4gICAgICAgICkge1xuICAgICAgICAgIGdvb2RNb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ29vZE1vdmU7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0lmU2hpcEZpdHNWZXJ0aWNhbGx5KHNoaXBsZW5ndGgsIGNvb3JkLCBjb29yZGluYXRlc2FycmF5KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb29yZCA9IGNvb3JkLnNwbGl0KFwiLVwiKTtcbiAgICBjb25zdCBzZWxlY3RlZFggPSBOdW1iZXIoc2VsZWN0ZWRDb29yZFswXSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRZID0gTnVtYmVyKHNlbGVjdGVkQ29vcmRbMV0pO1xuICAgIGxldCBhdmFpbGFibGVzcGFjZXNZID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV4dERpdklEID0gc2VsZWN0ZWRYICsgaSArIFwiLVwiICsgc2VsZWN0ZWRZO1xuICAgICAgY29uc3QgbmV4dERpdk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0RGl2SUQpO1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0RGl2Tm9kZSAhPT0gbnVsbCAmJlxuICAgICAgICBuZXh0RGl2Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RTZWxlY3RlZEFcIilcbiAgICAgICkge1xuICAgICAgICArK2F2YWlsYWJsZXNwYWNlc1k7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwbGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2SUQgPSBzZWxlY3RlZFggLSBqICsgXCItXCIgKyBzZWxlY3RlZFk7XG4gICAgICBjb25zdCBwcmV2aW91c0Rpdk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmV2aW91c0RpdklEKTtcbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNEaXZOb2RlICE9PSBudWxsICYmXG4gICAgICAgIHByZXZpb3VzRGl2Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RTZWxlY3RlZEFcIilcbiAgICAgICkge1xuICAgICAgICArK2F2YWlsYWJsZXNwYWNlc1k7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF2YWlsYWJsZXNwYWNlc1kgPj0gc2hpcGxlbmd0aCAtIGNvb3JkaW5hdGVzYXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSWZTaGlwRml0c0hvcml6b250YWxseShzaGlwbGVuZ3RoLCBjb29yZCwgY29vcmRpbmF0ZXNhcnJheSkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ29vcmQgPSBjb29yZC5zcGxpdChcIi1cIik7XG4gICAgY29uc3Qgc2VsZWN0ZWRYID0gTnVtYmVyKHNlbGVjdGVkQ29vcmRbMF0pO1xuICAgIGNvbnN0IHNlbGVjdGVkWSA9IE51bWJlcihzZWxlY3RlZENvb3JkWzFdKTtcblxuICAgIGxldCBhdmFpbGFibGVzcGFjZXNYID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV4dERpdklEID0gc2VsZWN0ZWRYICsgXCItXCIgKyAoc2VsZWN0ZWRZICsgaSk7XG4gICAgICBjb25zdCBuZXh0RGl2Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHREaXZJRCk7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHREaXZOb2RlICE9PSBudWxsICYmXG4gICAgICAgIG5leHREaXZOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFNlbGVjdGVkQVwiKVxuICAgICAgKSB7XG4gICAgICAgICsrYXZhaWxhYmxlc3BhY2VzWDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcGxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0RpdklEID0gc2VsZWN0ZWRYICsgXCItXCIgKyAoc2VsZWN0ZWRZIC0gaik7XG4gICAgICBjb25zdCBwcmV2aW91c0Rpdk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmV2aW91c0RpdklEKTtcbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNEaXZOb2RlICE9PSBudWxsICYmXG4gICAgICAgIHByZXZpb3VzRGl2Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RTZWxlY3RlZEFcIilcbiAgICAgICkge1xuICAgICAgICArK2F2YWlsYWJsZXNwYWNlc1g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF2YWlsYWJsZXNwYWNlc1ggPj0gc2hpcGxlbmd0aCAtIGNvb3JkaW5hdGVzYXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSWZGaW5pc2hlZChjdXJyZW50c2hpcCwgY29vcmQpIHtcbiAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZEFcIiArIHBsYWNlZCk7XG4gICAgaWYgKGRpdnMubGVuZ3RoID09PSBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGFycmF5Y29vcmQgPSBjb29yZDtcbiAgICAgIGNvbnN0IG5ld2FycmF5Y29vcmQgPSBhcnJheWNvb3JkLm1hcCgoZWxlbWVudCkgPT4gW1xuICAgICAgICBlbGVtZW50LnJlcGxhY2UoXCItXCIsIFwiLFwiKSxcbiAgICAgIF0pO1xuICAgICAgcGxheWVyQS5zaGlwc1twbGFjZWRdLmNvb3JkaW5hdGVzID0gbmV3YXJyYXljb29yZDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3YXJyYXljb29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBwbGF5ZXJBLmdhbWVib2FyZC5jb29yZGluYXRlc1tuZXdhcnJheWNvb3JkW2ldLnRvU3RyaW5nKCldID0gMTtcbiAgICAgIH1cbiAgICAgIHBsYWNlZCsrO1xuICAgICAgaWYgKHBsYWNlZCA9PT0gNSkge1xuICAgICAgICBjb250aW51ZXBsYXlpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBwbGFjZUFsbFNoaXBzIH07XG59KSgpO1xuXG5zZWxlY3RTaGlwTG9jYXRpb24ucGxhY2VBbGxTaGlwcygpO1xuXG5jb25zdCBhdHRhY2tvbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgZGl2ID0gZS50YXJnZXQ7XG4gIGNvbnN0IGRpdklEID0gZS50YXJnZXQuaWQ7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRCXCIpO1xuICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcIm5vdFNlbGVjdGVkQlwiKTtcbiAgY29uc3QgZGl2Y29vcmQgPSBbZGl2SUQucmVwbGFjZShcIi1cIiwgXCIsXCIpXTtcbiAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2tvbmNsaWNrKTtcbiAgZ2FtZXN0YXR1cyA9IGdhbWVMb29wKGRpdmNvb3JkLCBwbGF5ZXJBLCBwbGF5ZXJCKTtcbiAgY29uc3QgbmV3bW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgKytudW1tb3ZlcztcblxuICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgIG5ld21vdmUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibW92ZWNvdW50ZXJcIj4ke251bW1vdmVzfTwvc3Bhbj4gWyR7ZGl2SUR9XTogWW91IGhhdmUgaGl0IGEgc2hpcCFgO1xuICAgIC8vbmV3bW92ZS50ZXh0Q29udGVudCA9IGBbJHtkaXZJRH1dOiBZb3UgaGF2ZSBoaXQgYSBzaGlwISBgO1xuICB9IGVsc2Uge1xuICAgIG5ld21vdmUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibW92ZWNvdW50ZXJcIj4ke251bW1vdmVzfTwvc3Bhbj4gWyR7ZGl2SUR9XTogWW91IG1pc3NlZGA7XG4gICAgLy8gICAgbmV3bW92ZS50ZXh0Q29udGVudCA9IGBbJHtkaXZJRH1dOiBZb3UgbWlzc2VkLiBgO1xuICB9XG4gIGNvbnN0IG1vdmVzRGlzcGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb3Zlc1wiKTtcbiAgY29uc3QgbnVtYmVyT2ZNb3ZlcyA9IG1vdmVzRGlzcGxheWVkWzBdLmNoaWxkTm9kZXMubGVuZ3RoO1xuICBpZiAobnVtYmVyT2ZNb3ZlcyA9PT0gNykge1xuICAgIG1vdmVzRGlzcGxheWVkWzBdLnJlbW92ZUNoaWxkKG1vdmVzRGlzcGxheWVkWzBdLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbW92ZXMuYXBwZW5kQ2hpbGQobmV3bW92ZSk7XG4gIC8vIG1vdmVzLmluc2VydEJlZm9yZShzcGFuLCBuZXdtb3ZlKTtcbiAgY29uc3QgYWR2Ym9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkdkJvYXJkXCIpO1xuICBjb25zdCBhbGxlbXB0eWRpdnMgPSBhZHZib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdFNlbGVjdGVkQlwiKTtcbiAgYWxsZW1wdHlkaXZzLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrb25jbGljaylcbiAgKTtcbiAgY2hlY2tGb3JFbmRPZkdhbWUoKTtcbiAgaWYgKCFnYW1lc3RhdHVzKSB7XG4gICAgY29udGludWVwbGF5aW5nKCk7XG4gIH1cbn07XG5cbmNvbnN0IGNvbnRpbnVlcGxheWluZyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFNoaXBcIik7XG4gIGluZm8udGV4dENvbnRlbnQgPVxuICAgIFwiQXR0YWNrIHRoZSBlbmVteSBieSBjbGlja2luZyBvbiBhbiBlbXB0eSBzcXVhcmUgb24gdGhlIGVuZW15IGJvYXJkLlwiO1xuICBjb25zdCBhZHZib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWR2Qm9hcmRcIik7XG4gIGNvbnN0IGFsbGVtcHR5ZGl2cyA9IGFkdmJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90U2VsZWN0ZWRCXCIpO1xuICBhbGxlbXB0eWRpdnMuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2tvbmNsaWNrKVxuICApO1xufTtcblxuY29uc3QgZG9tUGxheWVyQiA9IGZ1bmN0aW9uIChoaXRvcm1pc3NCdnNBLCBkaXYsIHN1bmtvcm5vdCkge1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkYnlCXCIpO1xuICBpZiAoaGl0b3JtaXNzQnZzQSA9PT0gXCJoaXRcIiB8fCBoaXRvcm1pc3NCdnNBID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgfVxuICBjb25zdCBuZXdtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBuZXdtb3ZlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib3Bwb25lbnRtb3ZlXCIpO1xuICBjb25zdCBtb3ZlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZXNcIik7XG4gIG51bW1vdmVzKys7XG4gIGNvbnN0IGRpdmlkID0gZGl2LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICBpZiAoaGl0b3JtaXNzQnZzQSA9PT0gXCJoaXRcIikge1xuICAgIG5ld21vdmUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibW92ZWNvdW50ZXJcIj4ke251bW1vdmVzfTwvc3Bhbj4gWyR7ZGl2aWR9XTogVGhlIGNvbXB1dGVyIGhpdCBvbmUgb2YgeW91ciBzaGlwcy5gO1xuICAgIGlmIChzdW5rb3Jub3QgIT09IFwic3RhbmRpbmdcIikge1xuICAgICAgY29uc3Qgc3Vua2Vkc2hpcG5hbWUgPSBzdW5rb3Jub3QudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHN1bmtlZHNoaXBIM0lkID0gc3Vua2Vkc2hpcG5hbWUgKyBcIlBcIjtcbiAgICAgIGNvbnN0IHNoaXBPbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN1bmtlZHNoaXBIM0lkKTtcbiAgICAgIGNvbnN0IHNoaXBSZWZlcmVuY2VEaXYgPSBzaGlwT25Eb20ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgY29uc3QgYWxsZGl2c0luc2lkZSA9IHNoaXBSZWZlcmVuY2VEaXYucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgIGFsbGRpdnNJbnNpZGUuZm9yRWFjaCgoZGl2KSA9PiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmV5XCIpKTtcbiAgICAgIHNoaXBPbkRvbS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgIGNvbnN0IHN1bmtzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5rc2hpcFwiKTtcbiAgICAgIHN1bmtzaGlwLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJMYXRlc3QgY2FzdWFsdHk6IFlvdXIgXCIgKyBzdW5rb3Jub3QgKyBcIiBoYXMgc3Vuay5cIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGl0b3JtaXNzQnZzQSA9PT0gXCJtaXNzXCIpIHtcbiAgICBuZXdtb3ZlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1vdmVjb3VudGVyXCI+JHtudW1tb3Zlc308L3NwYW4+IFske2RpdmlkfV06IFRoZSBjb21wdXRlciBtaXNzZWQuYDtcbiAgfVxuICBjb25zdCBtb3Zlc0Rpc3BsYXllZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW92ZXNcIik7XG4gIGNvbnN0IG51bWJlck9mTW92ZXMgPSBtb3Zlc0Rpc3BsYXllZFswXS5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgaWYgKG51bWJlck9mTW92ZXMgPT09IDcpIHtcbiAgICBtb3Zlc0Rpc3BsYXllZFswXS5yZW1vdmVDaGlsZChtb3Zlc0Rpc3BsYXllZFswXS5maXJzdENoaWxkKTtcbiAgfVxuICBtb3Zlcy5hcHBlbmRDaGlsZChuZXdtb3ZlKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yRW5kT2ZHYW1lID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZ2FtZXN0YXR1cykge1xuICAgIGNvbnN0IGFkdmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHZCb2FyZFwiKTtcbiAgICBjb25zdCBhbGxlbXB0eWRpdnMgPSBhZHZib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdFNlbGVjdGVkQlwiKTtcbiAgICBhbGxlbXB0eWRpdnMuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja29uY2xpY2spXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3Qgc29ydGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufTtcbiIsImV4cG9ydCB7IGNyZWF0ZVBsYXllciB9O1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc2hpcHMgPSBzaGlwcztcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLmFkdmdhbWVib2FyZCA9IGFkdmdhbWVib2FyZDtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSBmdW5jdGlvbiAocGxheWVyLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpIHtcbiAgY29uc3QgbmV3cGxheWVyID0gbmV3IFBsYXllcihwbGF5ZXIsIHNoaXBzLCBnYW1lYm9hcmQsIGFkdmdhbWVib2FyZCk7XG4gIHJldHVybiBuZXdwbGF5ZXI7XG59O1xuXG4vL21vZHVsZS5leHBvcnRzID0gY3JlYXRlUGxheWVyO1xuIiwiZXhwb3J0IHsgY3JlYXRlU2hpcEZsZWV0IH07XG5cbmNvbnN0IGNyZWF0ZUFycmF5SGl0cyA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgbGV0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheS5wdXNoKDApO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmNvbnN0IGNoZWNrSWZTdW5rID0gZnVuY3Rpb24gKGhpdHNhcnJheSkge1xuICAvL2NvbnNvbGUubG9nKGhpdHNhcnJheSk7XG4gIGlmIChoaXRzYXJyYXkuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gMCkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlU2hpcCA9IGZ1bmN0aW9uIChsZW5ndGgsIG5hbWUsIHBsYXllcikge1xuICBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUsIHBsYXllcikge1xuICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLmhpdHMgPSBjcmVhdGVBcnJheUhpdHModGhpcy5sZW5ndGgpO1xuICAgICAgdGhpcy5zdW5rID0gY2hlY2tJZlN1bmsodGhpcy5oaXRzKTtcbiAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXTtcbiAgICB9XG4gICAgaGl0KGluZGV4KSB7XG4gICAgICB0aGlzLmhpdHNbaW5kZXhdID0gMTtcbiAgICAgIHRoaXMuc3VuayA9IGNoZWNrSWZTdW5rKHRoaXMuaGl0cyk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoaXBjcmVhdGVkID0gbmV3IFNoaXAobGVuZ3RoLCBuYW1lLCBwbGF5ZXIpO1xuICByZXR1cm4gc2hpcGNyZWF0ZWQ7XG59O1xuXG5jb25zdCBjcmVhdGVTaGlwRmxlZXQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIGNvbnN0IGNhcnJpZXIgPSBjcmVhdGVTaGlwKDUsIFwiQ2FycmllclwiLCBwbGF5ZXIpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gY3JlYXRlU2hpcCg0LCBcIkJhdHRsZXNoaXBcIiwgcGxheWVyKTtcbiAgY29uc3QgZGVzdHJveWVyID0gY3JlYXRlU2hpcCgzLCBcIkRlc3Ryb3llclwiLCBwbGF5ZXIpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBjcmVhdGVTaGlwKDMsIFwiU3VibWFyaW5lXCIsIHBsYXllcik7XG4gIGNvbnN0IHBhdHJvbGJvYXQgPSBjcmVhdGVTaGlwKDIsIFwiUGF0cm9sYm9hdFwiLCBwbGF5ZXIpO1xuICBjb25zdCBzaGlwYXJyYXkgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbGJvYXRdO1xuICByZXR1cm4gc2hpcGFycmF5O1xufTtcblxuLy8gZm9yIG5vZGVcbi8vbW9kdWxlLmV4cG9ydHMgPSBzaGlwRmxlZXQ7XG5cbi8vIHNoaXBzIHNob3VsZCBwcm9iYWJseSBoYXZlIGEgdW5pcXVlIGlkXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9