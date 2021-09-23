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
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ "./src/ships.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





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
  const shipFleet = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.createShipFleet)(player);
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
  const newplayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.createPlayer)(player, ships, gameboard, advgameboard);
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

//starts the player with empty coordinates
let playerA = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.setupPlayers)("playerA", [], {}, {});
let playerB = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.setupPlayers)("playerB", [], {}, {});
let nummoves = 0;
// starts the coordinates for the players (creates ships for both players and places ships for B)
const updatedPlayers = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.startGame)(playerA, playerB);

playerA = updatedPlayers[0];
playerB = updatedPlayers[1];

// displays the column numbers
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

// displays the row numbers
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

// creates divs for each player and starts them as notselected = empty
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

let gamestatus;

const selectShipLocation = (function () {
  let placed = 0;
  function placeShip(currentship) {
    let coordinates = [];
    //instructs player A on how to add ships to the board
    const currentshiptitle = document.getElementById("currentShip");
    let coordinatesLength;
    const shipLength = currentship.length;
    const shipName = currentship.name;
    if (shipName !== "Carrier") {
      increasefont();
      setTimeout(decreasefont, 600);
    }
    currentshiptitle.textContent = `Setup your fleet: select ${shipLength} consecutive spots for placing your ${shipName}.`;

    //
    const alldivs = document.querySelectorAll(".notSelectedA");
    // evaluates the player clicks so that the only valid clicks are clicks on empty divs where the current ship might fit; it also only lets the player place ships on consecutive divs
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
    // creates event listeners for every div
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
        // with current selection, how would the ship would be placed?
        const currentSelectionSplit = currentselection.split("-");
        const currentSelectionX = Number(currentSelectionSplit[0]);
        const currentSelectionY = Number(currentSelectionSplit[1]);
        if (currentSelectionX === coordinatesX) {
          //horizontally
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
          //vertically
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

window.onload = function () {
  selectShipLocation.placeAllShips();
};

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
  } else {
    newmove.innerHTML = `<span class="movecounter">${nummoves}</span> [${divID}]: You missed`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJiYWNrZ3JvdW5kMy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDk5dmg7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmY2ZmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMTAwcHg7XFxuICBoZWlnaHQ6IDkxJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgLyogaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTsgKi9cXG4gIC8qIG1hcmdpbjogMzBweCBhdXRvIDEwcHggYXV0bzsgKi9cXG4gIHBhZGRpbmc6IDMwcHggNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGZhOyAqL1xcbn1cXG5cXG4jYmF0dGxlZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDUwcHg7XFxufVxcbi5oaXRCb3gge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuI3BsYXllckJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjJweCk7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuI2FkdkJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjJweCk7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuI290aGVycGxheWVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2N1cnJlbnRTaGlwIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbW92ZXMge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnNlbGVjdGVkQTAsXFxuLnNlbGVjdGVkQTEsXFxuLnNlbGVjdGVkQTIsXFxuLnNlbGVjdGVkQTMsXFxuLnNlbGVjdGVkQTQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4M2U0NTtcXG59XFxuXFxuLnNlbGVjdGVkQiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3ZDhiO1xcbn1cXG5cXG4uc2VsZWN0ZWRieUIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwN2Q4YjtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1ZTUwO1xcbn1cXG5cXG4uc3F1YXJlUGxhY2VkLFxcbiNzcXVhcmVNaXNzLFxcbiNzcXVhcmVIaXQge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLnNxdWFyZVBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzZTQ1O1xcbn1cXG5cXG4jc3F1YXJlTWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3ZDhiO1xcbn1cXG5cXG4jc3F1YXJlSGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjVlNTA7XFxufVxcblxcbi5sYWJlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmxhYmVsc291dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuI3RvcG51bWJlckosXFxuI3RvcG51bWJlckpBZHYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyMnB4KTtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4jdG9wbnVtYmVySiBkaXYsXFxuI3RvcG51bWJlckpBZHYgZGl2IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGl2b3V0c2lkZSxcXG4jZGl2b3V0c2lkZUFkdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI251bWJlckksXFxuI251bWJlcklBZHYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbiNudW1iZXJJIGRpdixcXG4jbnVtYmVySUFkdiBkaXYge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vcHBvbmVudG1vdmUge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5tb3ZlY291bnRlciB7XFxuICBjb2xvcjogbGlnaHRncmV5O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuI2ZsZWV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNDBweDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2ZsZWV0cyA+IGRpdiB7XFxuICB3aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3VuayB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmZsZWV0Y2FycmllcixcXG4uZmxlZXRiYXR0bGVzaGlwLFxcbi5mbGVldGRlc3Ryb3llcixcXG4uZmxlZXRzdWJtYXJpbmUsXFxuLmZsZWV0cGF0cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAycHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnNoaXBkZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIC8qIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bzsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAvKiBwYWRkaW5nOiAyMHB4IDYwcHg7ICovXFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzI4M2U0NTtcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjOGI1ZTUwO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjNTA3ZDhiO1xcbn1cXG5cXG4ud2lubmVyYW5ub3VjZW1lbnQge1xcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMseURBQXdDO0VBQ3hDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7RUFLRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsUUFBUTtFQUNSLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7Ozs7RUFLRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogOTl2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJiYWNrZ3JvdW5kMy5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZjZmY7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDExMDBweDtcXG4gIGhlaWdodDogOTElO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpOyAqL1xcbiAgLyogbWFyZ2luOiAzMHB4IGF1dG8gMTBweCBhdXRvOyAqL1xcbiAgcGFkZGluZzogMzBweCA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZkZmE7ICovXFxufVxcblxcbiNiYXR0bGVmaWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNTBweDtcXG59XFxuLmhpdEJveCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4jYWR2Qm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMnB4KTtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4jb3RoZXJwbGF5ZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jY3VycmVudFNoaXAge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNtb3ZlcyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWRBMCxcXG4uc2VsZWN0ZWRBMSxcXG4uc2VsZWN0ZWRBMixcXG4uc2VsZWN0ZWRBMyxcXG4uc2VsZWN0ZWRBNCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzZTQ1O1xcbn1cXG5cXG4uc2VsZWN0ZWRCIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDdkOGI7XFxufVxcblxcbi5zZWxlY3RlZGJ5QiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3ZDhiO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjVlNTA7XFxufVxcblxcbi5zcXVhcmVQbGFjZWQsXFxuI3NxdWFyZU1pc3MsXFxuI3NxdWFyZUhpdCB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uc3F1YXJlUGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODNlNDU7XFxufVxcblxcbiNzcXVhcmVNaXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDdkOGI7XFxufVxcblxcbiNzcXVhcmVIaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWU1MDtcXG59XFxuXFxuLmxhYmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ubGFiZWxzb3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jdG9wbnVtYmVySixcXG4jdG9wbnVtYmVySkFkdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDIycHgpO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbiN0b3BudW1iZXJKIGRpdixcXG4jdG9wbnVtYmVySkFkdiBkaXYge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkaXZvdXRzaWRlLFxcbiNkaXZvdXRzaWRlQWR2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jbnVtYmVySSxcXG4jbnVtYmVySUFkdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDIycHgpO1xcbiAgZ2FwOiAycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuI251bWJlckkgZGl2LFxcbiNudW1iZXJJQWR2IGRpdiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9wcG9uZW50bW92ZSB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLm1vdmVjb3VudGVyIHtcXG4gIGNvbG9yOiBsaWdodGdyZXk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4jZmxlZXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA0MHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZmxlZXRzID4gZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZmxlZXRjYXJyaWVyLFxcbi5mbGVldGJhdHRsZXNoaXAsXFxuLmZsZWV0ZGVzdHJveWVyLFxcbi5mbGVldHN1Ym1hcmluZSxcXG4uZmxlZXRwYXRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDJweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uc2hpcGRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgLyogbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvOyAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIHBhZGRpbmc6IDIwcHggNjBweDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMjgzZTQ1O1xcbn1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgY29sb3I6ICM4YjVlNTA7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICM1MDdkOGI7XFxufVxcblxcbi53aW5uZXJhbm5vdWNlbWVudCB7XFxuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVTaGlwRmxlZXQgfSBmcm9tIFwiLi9zaGlwcy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBkb21QbGF5ZXJCIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmV4cG9ydCB7IHN0YXJ0R2FtZSwgc2V0dXBQbGF5ZXJzLCBnYW1lTG9vcCB9O1xuXG4vL2NyZWF0ZXMgYSBjbGVhbiBnYW1lYm9hcmQgZm9yIGEgcGxheWVyIHdpdGggdGhlIHZhbGlkIGNvb3JkaW5hdGVzXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIGNvbnN0IGJvYXJkT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICBvYmpbaSArIFwiLFwiICsgal0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuICBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzID0gYm9hcmRPYmplY3QoKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZChwbGF5ZXIpO1xuICByZXR1cm4gZ2FtZWJvYXJkO1xufTtcblxuY29uc3QgZ2V0UmFuZG9tSW50SW5jbHVzaXZlID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLy9waWNrcyBhIHJhbmRvbSBsb2NhdGlvbiB0aGF0IGhhc24ndCBiZWVuIHBpY2tlZCBiZWZvcmUgKG9uZSB0aGF0ICBpc24ndCBhIGhpdCBvciBhIG1pc3MpXG5jb25zdCBwaWNrTG9jYXRpb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IG9ialZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqKTtcbiAgY29uc3Qgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGxldCBlbXB0eUxvY2F0aW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ialZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChvYmpWYWx1ZXNbaV0gPT09IDApIHtcbiAgICAgIGVtcHR5TG9jYXRpb25zLnB1c2gob2JqS2V5c1tpXSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IG51bWJlckVtcHR5TG9jYXRpb25zID0gZW1wdHlMb2NhdGlvbnMubGVuZ3RoO1xuICBjb25zdCBwaWNrUmFuZG9tTG9jYXRpb24gPVxuICAgIGVtcHR5TG9jYXRpb25zW2dldFJhbmRvbUludEluY2x1c2l2ZSgwLCBudW1iZXJFbXB0eUxvY2F0aW9ucyAtIDEpXTtcbiAgcmV0dXJuIHBpY2tSYW5kb21Mb2NhdGlvbjtcbn07XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcmFuZG9tTG9jYXRpb247XG4gIGxldCByb3c7XG4gIGxldCBjb2x1bW47XG5cbiAgLy8gZnJvbSBhIHBsYXllciBib2FyZCwgYSBzaGlwLCBvcmllbnRhdGlvbiBhbmQgYSByb3cgb3IgY29sdW1uLCBjaGVja3MgdGhlIHZhbHVlcyBvbiB0aGF0IGNvbHVtbiBvciByb3cgKHVwIHRvIHRoZSBsZW5ndGggb2YgdGhlIHNoaXApIGFuZCByZXR1cm5zIGFsbCB0aGUgY29vcmRpbmF0ZXMgdGhhdCBhcmUgZW1wdHlcbiAgY29uc3QgbG9jYXRpb25zQXJyYXkgPSBmdW5jdGlvbiAoY3VycmVudGJvYXJkLCBjdXJyZW50c2hpcCwgb3JpZW50YXRpb24pIHtcbiAgICBsZXQgbmV3cG9zaXRpb247XG4gICAgbGV0IGZpeGVkcG9zaXRpb247XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInJvd1wiKSB7XG4gICAgICBuZXdwb3NpdGlvbiA9IGNvbHVtbjtcbiAgICAgIGZpeGVkcG9zaXRpb24gPSByb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld3Bvc2l0aW9uID0gcm93O1xuICAgICAgZml4ZWRwb3NpdGlvbiA9IGNvbHVtbjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjdXJyZW50c2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2hpZnRlZCA9IG5ld3Bvc2l0aW9uIC0gaTtcbiAgICAgIGlmIChzaGlmdGVkIDwgMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBsb2NhdGlvbjtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJyb3dcIikge1xuICAgICAgICBsb2NhdGlvbiA9IGZpeGVkcG9zaXRpb24gKyBcIixcIiArIHNoaWZ0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbiA9IHNoaWZ0ZWQgKyBcIixcIiArIGZpeGVkcG9zaXRpb247XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0dXNPbkxvY2F0aW9uID0gY3VycmVudGJvYXJkLmNvb3JkaW5hdGVzW2xvY2F0aW9uXTtcbiAgICAgIGlmIChzdGF0dXNPbkxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgIGFycmF5LnB1c2goc2hpZnRlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgY3VycmVudHNoaXAubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHNoaWZ0ZWQgPSBuZXdwb3NpdGlvbiArIGo7XG4gICAgICBpZiAoc2hpZnRlZCA+IDEwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGxvY2F0aW9uO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInJvd1wiKSB7XG4gICAgICAgIGxvY2F0aW9uID0gZml4ZWRwb3NpdGlvbiArIFwiLFwiICsgc2hpZnRlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gc2hpZnRlZCArIFwiLFwiICsgZml4ZWRwb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXR1c09uTG9jYXRpb24gPSBjdXJyZW50Ym9hcmQuY29vcmRpbmF0ZXNbbG9jYXRpb25dO1xuICAgICAgaWYgKHN0YXR1c09uTG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgYXJyYXkucHVzaChzaGlmdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHN1bVNlcXVlbmNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBiOyBpKyspIHtcbiAgICAgIHN1bSArPSBhICsgaTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfTtcblxuICAvLyBjaGVja3MgaWYgdGhlIGVtcHR5IGxvY2F0aW9ucyBhcmUgY29uc2VjdXRpdmVcbiAgY29uc3QgY29uc2VjdXRpdmVOdW1iZXJzID0gZnVuY3Rpb24gKGFycmF5LCBjdXJyZW50c2hpcGxlbmd0aCkge1xuICAgIGxldCBnb29kc3BvdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBiZWdpbm5pbmdPZlNoaXAgPSBhcnJheVtpXTtcbiAgICAgIGNvbnN0IGVuZE9mU2hpcCA9IGJlZ2lubmluZ09mU2hpcCArIGN1cnJlbnRzaGlwbGVuZ3RoIC0gMTtcbiAgICAgIGlmIChlbmRPZlNoaXAgPiBhcnJheVthcnJheS5sZW5ndGhdKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgY29uc2VjdXRpdmUgPSBzdW1TZXF1ZW5jZShiZWdpbm5pbmdPZlNoaXAsIGVuZE9mU2hpcCk7XG5cbiAgICAgIGNvbnN0IGluYXJyYXkgPSBzdW1TZXF1ZW5jZShcbiAgICAgICAgYmVnaW5uaW5nT2ZTaGlwLFxuICAgICAgICBhcnJheVtpICsgY3VycmVudHNoaXBsZW5ndGggLSAxXVxuICAgICAgKTtcbiAgICAgIGlmIChjb25zZWN1dGl2ZSA9PT0gaW5hcnJheSkge1xuICAgICAgICByZXR1cm4gYmVnaW5uaW5nT2ZTaGlwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ29vZHNwb3QgPSBmYWxzZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnb29kc3BvdDtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlTnVtYmVycyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9O1xuXG4gIC8vZm9yIGEgY2VydGFpbiBzaGlwIGFuZCBib2FyZCwgYW5kIHNlbGVjdGVkIGluaXRpYWwgbG9jYXRpb24sIGNoZWNrcyBpZiB0aGUgYm9hdCBmaXRzLlxuICBjb25zdCBjaGVja0ZvckZpdCA9IGZ1bmN0aW9uIChjdXJyZW50c2hpcCwgY3VycmVudGJvYXJkKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbml0aWFsTG9jYXRpb24gPSByb3cgKyBcIixcIiArIGNvbHVtbjtcbiAgICBjb25zdCBhdmFpbGFibGVTcGFjZXNSb3cgPSBsb2NhdGlvbnNBcnJheShjdXJyZW50Ym9hcmQsIGN1cnJlbnRzaGlwLCBcInJvd1wiKVxuICAgICAgLmNvbmNhdChjb2x1bW4pXG4gICAgICAuc29ydChjb21wYXJlTnVtYmVycyk7XG4gICAgY29uc3QgYXZhaWxhYmxlU3BhY2VzQ29sdW1uID0gbG9jYXRpb25zQXJyYXkoXG4gICAgICBjdXJyZW50Ym9hcmQsXG4gICAgICBjdXJyZW50c2hpcCxcbiAgICAgIFwiY29sdW1uXCJcbiAgICApXG4gICAgICAuY29uY2F0KHJvdylcbiAgICAgIC5zb3J0KGNvbXBhcmVOdW1iZXJzKTtcblxuICAgIC8vIHRvIGFkZCBzb21lIHZhcmlhYmlsaXR5IHRvIHRoZSBzaGlwIHBsYWNlbWVudCwgaWYgdGhlIHJvdyBvZiB0aGUgaW5pdGlhbCBzZWxlY3RlZCBsb2NhdGlvbiBpcyBhbiBvZGQgbnVtYmVyLCBzdGFydHMgYnkgY2hlY2tpbmcgaWYgdGhlIHNoaXAgZml0cyBob3Jpem9udGFsbHkuIGlmIGl0IGRvZXNuJ3QgZml0LCBpdCB0aGVuIGNoZWNrcyBpdCBmaXRzIHZlcnRpY2FsbHkuIEl0IGRvZXMgdGhlIG9wcG9zaXRlIGlmIHRoZSByb3cgaXMgYW4gZXZlbiBudW1iZXIuXG5cbiAgICBpZiAocm93ICUgMiA9PT0gMSkge1xuICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlc1Jvdy5sZW5ndGggPCBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlc0NvbHVtbi5sZW5ndGggPCBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRwb3NpdGlvbiA9IGNvbnNlY3V0aXZlTnVtYmVycyhcbiAgICAgICAgICAgIGF2YWlsYWJsZVNwYWNlc0NvbHVtbixcbiAgICAgICAgICAgIGN1cnJlbnRzaGlwLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCFzdGFydHBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJmYWlscyBjaGVja1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW3N0YXJ0cG9zaXRpb24sIGNvbHVtbiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRwb3NpdGlvbiA9IGNvbnNlY3V0aXZlTnVtYmVycyhcbiAgICAgICAgICBhdmFpbGFibGVTcGFjZXNSb3csXG4gICAgICAgICAgY3VycmVudHNoaXAubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGlmICghc3RhcnRwb3NpdGlvbikge1xuICAgICAgICAgIHJldHVybiBcImZhaWxzIGNoZWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyb3csIHN0YXJ0cG9zaXRpb24sIFwiaG9yaXpvbnRhbFwiXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlc0NvbHVtbi5sZW5ndGggPCBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlc1Jvdy5sZW5ndGggPCBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRwb3NpdGlvbiA9IGNvbnNlY3V0aXZlTnVtYmVycyhcbiAgICAgICAgICAgIGF2YWlsYWJsZVNwYWNlc1JvdyxcbiAgICAgICAgICAgIGN1cnJlbnRzaGlwLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCFzdGFydHBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJmYWlscyBjaGVja1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW3Jvdywgc3RhcnRwb3NpdGlvbiwgXCJob3Jpem9udGFsXCJdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGFydHBvc2l0aW9uID0gY29uc2VjdXRpdmVOdW1iZXJzKFxuICAgICAgICAgIGF2YWlsYWJsZVNwYWNlc0NvbHVtbixcbiAgICAgICAgICBjdXJyZW50c2hpcC5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFzdGFydHBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIFwiZmFpbHMgY2hlY2tcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3N0YXJ0cG9zaXRpb24sIGNvbHVtbiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gcGlja3MgYSByYW5kb20gZW1wdHkgbG9jYXRpb24gYW5kIHRoZW4gY2hlY2tzIGlmIHRoZSBzaGlwIGZpdHNcbiAgY29uc3QgY2hhbmdlQm9hcmQgPSBmdW5jdGlvbiAoYm9hcmRvYmosIGN1cnJlbnRzaGlwKSB7XG4gICAgcmFuZG9tTG9jYXRpb24gPSBwaWNrTG9jYXRpb24oYm9hcmRvYmouY29vcmRpbmF0ZXMpLnNwbGl0KFwiLFwiKTtcbiAgICByb3cgPSBOdW1iZXIocmFuZG9tTG9jYXRpb25bMF0pO1xuICAgIGNvbHVtbiA9IE51bWJlcihyYW5kb21Mb2NhdGlvblsxXSk7XG4gICAgY29uc3Qgc2VsZWN0SW5pdGlhbFBsYWNlbWVudCA9IGNoZWNrRm9yRml0KGN1cnJlbnRzaGlwLCBib2FyZG9iaik7XG4gICAgaWYgKHNlbGVjdEluaXRpYWxQbGFjZW1lbnQgPT09IFwiZmFpbHMgY2hlY2tcIiB8fCAhc2VsZWN0SW5pdGlhbFBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGNoYW5nZUJvYXJkKGJvYXJkb2JqLCBjdXJyZW50c2hpcCk7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRzaGlwbGVuZ3RoID0gY3VycmVudHNoaXAubGVuZ3RoO1xuICAgIGNvbnN0IGJvYXRPcmllbnRhdGlvbiA9IHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMl07XG4gICAgbGV0IGNvb3JkaW5hdGVzVG9DaGFuZ2UgPSBbXTtcbiAgICAvLyBhZnRlciBmaW5kaW5nIGEgZ29vZCBzdGFydGluZyBwb2ludCBhbmQgaGF2aW5nIGNob3NlbiB0aGUgYm9hdCBvcmllbnRhdGlvbiwgcGxhY2VzIHRoZSBzaGlwIG9uIHRoZSBib2FyZCBieSBjaGFuZ2luZyB0aGUgb2JqZWN0IGtleSB2YWx1ZSBhdCBlYWNoIGNvb3JkaW5hdGUuXG4gICAgaWYgKGJvYXRPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3Y29vcmQgPSBbXG4gICAgICAgICAgTnVtYmVyKHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMF0pICtcbiAgICAgICAgICAgIGkgK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgc2VsZWN0SW5pdGlhbFBsYWNlbWVudFsxXSxcbiAgICAgICAgXTtcbiAgICAgICAgY29vcmRpbmF0ZXNUb0NoYW5nZS5wdXNoKG5ld2Nvb3JkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50c2hpcGxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5ld2Nvb3JkID0gW1xuICAgICAgICAgIHNlbGVjdEluaXRpYWxQbGFjZW1lbnRbMF0gK1xuICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgKE51bWJlcihzZWxlY3RJbml0aWFsUGxhY2VtZW50WzFdKSArIGopLFxuICAgICAgICBdO1xuICAgICAgICBjb29yZGluYXRlc1RvQ2hhbmdlLnB1c2gobmV3Y29vcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvb3JkaW5hdGVzVG9DaGFuZ2UubGVuZ3RoOyBrKyspIHtcbiAgICAgIGJvYXJkb2JqLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzVG9DaGFuZ2Vba11dID0gMTtcbiAgICAgIGN1cnJlbnRzaGlwLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZXNUb0NoYW5nZVtrXSk7XG4gICAgfVxuICAgIHJldHVybiBcImRvbmVcIjtcbiAgfTtcbiAgcmV0dXJuIHsgY2hhbmdlQm9hcmQgfTtcbn0pKCk7XG5cbi8vIGNyZWF0ZXMgYSBib2FyZCwgYSBmbGVldCBhbmQgcGxhY2VzIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmQgZm9yIGEgcGxheWVyOyByZXR1cm5zIHRoZSBib2FyZCB3aXRoIHRoZSBzaGlwcyBsb2NhdGlvblxuY29uc3Qgc2V0dXBCb2FyZCA9IGZ1bmN0aW9uIChwbGF5ZXIsIHBsYXllcm9iaikge1xuICBsZXQgbmV3Qm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQocGxheWVyKTtcbiAgY29uc3Qgc2hpcEZsZWV0ID0gY3JlYXRlU2hpcEZsZWV0KHBsYXllcik7XG4gIHBsYXllcm9iai5zaGlwcyA9IHNoaXBGbGVldDtcbiAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJCXCIpIHtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbMF0pO1xuICAgIHBsYWNlU2hpcHMuY2hhbmdlQm9hcmQobmV3Qm9hcmQsIHNoaXBGbGVldFsxXSk7XG4gICAgcGxhY2VTaGlwcy5jaGFuZ2VCb2FyZChuZXdCb2FyZCwgc2hpcEZsZWV0WzJdKTtcbiAgICBwbGFjZVNoaXBzLmNoYW5nZUJvYXJkKG5ld0JvYXJkLCBzaGlwRmxlZXRbM10pO1xuICAgIHBsYWNlU2hpcHMuY2hhbmdlQm9hcmQobmV3Qm9hcmQsIHNoaXBGbGVldFs0XSk7XG4gIH1cbiAgcmV0dXJuIG5ld0JvYXJkO1xufTtcblxuY29uc3Qgc2V0dXBQbGF5ZXJzID0gZnVuY3Rpb24gKHBsYXllciwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKSB7XG4gIGNvbnN0IG5ld3BsYXllciA9IGNyZWF0ZVBsYXllcihwbGF5ZXIsIHNoaXBzLCBnYW1lYm9hcmQsIGFkdmdhbWVib2FyZCk7XG4gIHJldHVybiBuZXdwbGF5ZXI7XG59O1xuXG4vLyBmb3IgYSBjZXJ0YWluIGF0dGFja2VyIGFuZCB2aWN0aW0sIGNoZWNrcyB0aGUgc3RhdHVzIG9mIHRoZSB2aWN0aW0gYm9hcmQgZm9yIGFuIGF0dGFjayBhdCBhIGNlcnRhaW4gY29vcmRpbmF0ZTsgaWYgdGhlIHN0YXR1cyBvbiB0aGUgYm9hcmQgaXMgXCIxXCIsIGNoZWNrcyB3aGljaCBib2F0IGlzIGF0IHRoYXQgbG9jYXRpb24gYW5kIGdpdmVzIGl0IGEgXCJoaXRcIlxuY29uc3QgYXR0YWNrID0gZnVuY3Rpb24gKGF0dGFja2VyLCB2aWN0aW0sIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHZpY3RpbXNCb2FyZCA9IHZpY3RpbS5nYW1lYm9hcmQ7XG4gIGNvbnN0IGF0dGFja2VyQWR2Qm9hcmQgPSBhdHRhY2tlci5hZHZnYW1lYm9hcmQ7XG4gIGNvbnN0IHZpY3RpbXNGbGVldCA9IHZpY3RpbS5zaGlwcztcbiAgY29uc3QgYm9hcmRTdGF0dXNPbkNvb3JkaW5hdGVzID0gdmljdGltc0JvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXTtcbiAgY29uc3QgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IFtjb29yZGluYXRlc1swXSArIFwiLFwiICsgY29vcmRpbmF0ZXNbMV1dO1xuICBpZiAoYm9hcmRTdGF0dXNPbkNvb3JkaW5hdGVzID09PSAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWN0aW1zRmxlZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFycmF5T2ZDb29yZGluYXRlcyA9IHZpY3RpbXNGbGVldFtpXS5jb29yZGluYXRlcy5mbGF0KCk7XG4gICAgICBjb25zdCBpc0l0VGhpc1NoaXAgPSBhcnJheU9mQ29vcmRpbmF0ZXMuaW5jbHVkZXMoXG4gICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXNbMF1cbiAgICAgICk7XG4gICAgICBpZiAoaXNJdFRoaXNTaGlwKSB7XG4gICAgICAgIGNvbnN0IGhpdEluZGV4ID0gYXJyYXlPZkNvb3JkaW5hdGVzLmZpbmRJbmRleChcbiAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gdHJhbnNmb3JtZWRDb29yZGluYXRlc1swXVxuICAgICAgICApO1xuICAgICAgICB2aWN0aW1zRmxlZXRbaV0uaGl0KGhpdEluZGV4KTtcbiAgICAgICAgdmljdGltc0JvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXSA9IFwieFwiO1xuICAgICAgICBhdHRhY2tlckFkdkJvYXJkLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzXSA9IFwieFwiO1xuICAgICAgICB2aWN0aW1zRmxlZXRbaV0uaGl0cztcbiAgICAgICAgLy8gdHJhY2tzIGlmIGEgc2hpcCBoYXMgc3VuayBhbmQgcmV0dXJucyB0aGUgc2hpcCdzIG5hbWUgaWYgdHJ1ZTsgaWYgdGhlcmUgYXJlIDUgc2FuayBzaGlwcyBvZiB0aGUgc2FtZSBwbGF5ZXIgcmV0dXJucyBnYW1lb3ZlclxuICAgICAgICBpZiAodmljdGltc0ZsZWV0W2ldLnN1bmspIHtcbiAgICAgICAgICBjb25zdCBzdW5rZW5TaGlwcyA9IGNvdW50U3Vua2VuU2hpcHModmljdGltc0ZsZWV0KTtcbiAgICAgICAgICBpZiAoc3Vua2VuU2hpcHMgPT09IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJnYW1lb3ZlclwiLCB2aWN0aW1zRmxlZXRbaV0ubmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJoaXRcIiwgdmljdGltc0ZsZWV0W2ldLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1wiaGl0XCIsIFwic3RhbmRpbmdcIl07XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vaWYgdGhlIHN0YXR1cyBvbiBib2FyZCB3YXMgXCIwXCIsIHVwZGF0ZXMgaXQgdG8gXCJtXCIgd2hlbiBhIHBsYXllciBtaXNzZXNcbiAgICB2aWN0aW1zQm9hcmQuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNdID0gXCJtXCI7XG4gICAgYXR0YWNrZXJBZHZCb2FyZC5jb29yZGluYXRlc1tjb29yZGluYXRlc10gPSBcIm1cIjtcbiAgICByZXR1cm4gW1wibWlzc1wiLCBcIlwiXTtcbiAgfVxufTtcblxuY29uc3QgY291bnRTdW5rZW5TaGlwcyA9IGZ1bmN0aW9uIChhcnJheSkge1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2hpcCA9IGFycmF5W2ldO1xuICAgIGNvbnN0IHN1bmsgPSBzaGlwLnN1bms7XG4gICAgaWYgKHN1bmspIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb3VudDtcbn07XG5cbi8vIGF1eGlsaWFyIHZhcmlhYmxlcyBmb3IgaGVscGluZyB0aGUgY29tcHV0ZXJcbmxldCBsYXN0Y29vcmQgPSBbXTtcbmxldCBwb3NzaWJsZWJldHRlcmxvY2F0aW9ucyA9IFtdO1xuXG4vLyBnZXRzIGEgbG9jYXRpb24gZnJvbSBwbGF5ZXIgQSBhbmQgYXR0YWNrcyBCIGF0IHRoYXQgbG9jYXRpb25cbmZ1bmN0aW9uIGdhbWVMb29wKGxvY2F0aW9uLCBwbGF5ZXJBLCBwbGF5ZXJCKSB7XG4gIGxldCBzdG9wID0gZmFsc2U7XG4gIC8vIHBsYXllciBBIGF0dGFja3NcbiAgY29uc3QgbG9jYXRpb250ZW1wID0gbG9jYXRpb24udG9TdHJpbmcoKS5zcGxpdChcIixcIik7XG4gIGNvbnN0IGZpbmFsbG9jYXRpb24gPSBbTnVtYmVyKGxvY2F0aW9udGVtcFswXSksIE51bWJlcihsb2NhdGlvbnRlbXBbMV0pXTtcbiAgY29uc3QgYXR0YWNrUmVzdWx0ID0gYXR0YWNrKHBsYXllckEsIHBsYXllckIsIGZpbmFsbG9jYXRpb24pO1xuICBjb25zdCBoaXRvcm1pc3NBdnNCID0gYXR0YWNrUmVzdWx0WzBdO1xuICBjb25zdCBzdW5rU3RhdHVzQiA9IGF0dGFja1Jlc3VsdFsxXTtcblxuICAvLyBpZiBpdCdzIGEgaGl0LCBhZGRzIGEgY2xhc3MgdG8gdGhlIGhpdCBkaXZcbiAgaWYgKGhpdG9ybWlzc0F2c0IgPT09IFwiaGl0XCIgfHwgaGl0b3JtaXNzQXZzQiA9PT0gXCJnYW1lb3ZlclwiKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtY29vcmR0b2lkTG9jYXRpb24gPSBsb2NhdGlvbi50b1N0cmluZygpLnJlcGxhY2UoXCIsXCIsIFwiLVwiKTtcbiAgICBjb25zdCBvdGhlcnBsYXllcmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdGhlcnBsYXllclwiKTtcbiAgICBjb25zdCBmaW5kRGl2T3RoZXIgPSBvdGhlcnBsYXllcmJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2lkPVwiJHt0cmFuc2Zvcm1jb29yZHRvaWRMb2NhdGlvbn1cIl1gXG4gICAgKTtcblxuICAgIGZpbmREaXZPdGhlci5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICB9XG5cbiAgLy8gd2hlbiBhIHNoaXAgaGFzIHN1bmssIHVwZGF0ZXMgdGhlIGRvbSB3aXRoIHRoZSBuYW1lIG9mIHRoZSBzaGlwXG4gIGlmIChzdW5rU3RhdHVzQiAhPT0gXCJcIiAmJiBzdW5rU3RhdHVzQiAhPT0gXCJzdGFuZGluZ1wiKSB7XG4gICAgY29uc3Qgc3Vua2Vkc2hpcG5hbWUgPSBzdW5rU3RhdHVzQi50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHN1bmtlZHNoaXBIM0lkID0gc3Vua2Vkc2hpcG5hbWUgKyBcIkFkdlwiO1xuICAgIGNvbnN0IHNoaXBPbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN1bmtlZHNoaXBIM0lkKTtcbiAgICBjb25zdCBzaGlwUmVmZXJlbmNlRGl2ID0gc2hpcE9uRG9tLm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBhbGxkaXZzSW5zaWRlID0gc2hpcFJlZmVyZW5jZURpdi5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgIGFsbGRpdnNJbnNpZGUuZm9yRWFjaCgoZGl2KSA9PiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmV5XCIpKTtcbiAgICBzaGlwT25Eb20uY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgY29uc3Qgc3Vua3NoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bmtzaGlwXCIpO1xuICAgIHN1bmtzaGlwLnRleHRDb250ZW50ID1cbiAgICAgIFwiTGF0ZXN0IENhc3VhbHR5OiBDb21wdXRlcidzIFwiICsgc3Vua1N0YXR1c0IgKyBcIiBoYXMgc3Vuay5cIjtcbiAgfVxuICBpZiAoaGl0b3JtaXNzQXZzQiA9PT0gXCJnYW1lb3ZlclwiKSB7XG4gICAgY29uc3Qgc3Vua2Vkc2hpcG5hbWUgPSBzdW5rU3RhdHVzQi50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHN1bmtlZHNoaXBIM0lkID0gc3Vua2Vkc2hpcG5hbWUgKyBcIkFkdlwiO1xuICAgIGNvbnN0IHNoaXBPbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN1bmtlZHNoaXBIM0lkKTtcbiAgICBzaGlwT25Eb20uY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgc3RvcCA9IHRydWU7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFNoaXBcIik7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFwid2lubmVyYW5ub3VjZW1lbnRcIik7XG4gICAgaW5mby50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyLiBZb3UgYXJlIHRoZSB3aW5uZXIhXCI7XG4gICAgcmV0dXJuIHN0b3A7XG4gIH1cblxuICAvLyAgcGxheWVyIEIgcGlja3MgYSBjb29yZGluYXRlXG4gIC8vIHRoZSBmaXJzdCBjb29yZGluYXRlIGlzIHBpY2tlZCByYW5kb21seS4gaWYgdGhlIGNvb3JkaW5hdGUgd2FzIGEgaGl0LCB0aGUgY29tcHV0ZXIgdHJpZXMgZXZlcnkgcG9zc2libGUgbG9jYXRpb24gYXJvdW5kIHRoZSBoaXRcbiAgbGV0IHNlbGVjdGVkTG9jYXRpb247XG4gIGlmIChsYXN0Y29vcmQubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMb2NhdGlvblJhdyA9IHBpY2tMb2NhdGlvbihcbiAgICAgIHBsYXllckIuYWR2Z2FtZWJvYXJkLmNvb3JkaW5hdGVzXG4gICAgKS5zcGxpdChcIixcIik7XG4gICAgc2VsZWN0ZWRMb2NhdGlvbiA9IFtcbiAgICAgIE51bWJlcihzZWxlY3RlZExvY2F0aW9uUmF3WzBdKSxcbiAgICAgIE51bWJlcihzZWxlY3RlZExvY2F0aW9uUmF3WzFdKSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKHBvc3NpYmxlYmV0dGVybG9jYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHBvc3NpYmxlYmV0dGVybG9jYXRpb25zID0gcGlja0JldHRlckNvb3JkKGxhc3Rjb29yZCwgcGxheWVyQik7XG4gICAgbGV0IHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbDtcbiAgICBpZiAocG9zc2libGViZXR0ZXJsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uT3JpZ2luYWwgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9uc1swXS5zcGxpdChcIixcIik7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uID0gW1xuICAgICAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvbk9yaWdpbmFsWzBdKSxcbiAgICAgICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbFsxXSksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uT3JpZ2luYWwgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9uc1swXS5zcGxpdChcIixcIik7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uID0gW1xuICAgICAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvbk9yaWdpbmFsWzBdKSxcbiAgICAgICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbFsxXSksXG4gICAgICBdO1xuICAgICAgcG9zc2libGViZXR0ZXJsb2NhdGlvbnMgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9ucy5zbGljZSgxKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbDtcbiAgICBpZiAocG9zc2libGViZXR0ZXJsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uT3JpZ2luYWwgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9uc1swXS5zcGxpdChcIixcIik7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uID0gW1xuICAgICAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvbk9yaWdpbmFsWzBdKSxcbiAgICAgICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbFsxXSksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uT3JpZ2luYWwgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9uc1swXS5zcGxpdChcIixcIik7XG4gICAgICBzZWxlY3RlZExvY2F0aW9uID0gW1xuICAgICAgICBOdW1iZXIoc2VsZWN0ZWRMb2NhdGlvbk9yaWdpbmFsWzBdKSxcbiAgICAgICAgTnVtYmVyKHNlbGVjdGVkTG9jYXRpb25PcmlnaW5hbFsxXSksXG4gICAgICBdO1xuICAgICAgcG9zc2libGViZXR0ZXJsb2NhdGlvbnMgPSBwb3NzaWJsZWJldHRlcmxvY2F0aW9ucy5zbGljZSgxKTtcbiAgICB9XG4gIH1cblxuICAvL3BsYXllciBCIGF0dGFja3NcbiAgY29uc3QgdHJhbnNmb3JtY29vcmR0b2lkID0gc2VsZWN0ZWRMb2NhdGlvbi50b1N0cmluZygpLnJlcGxhY2UoXCIsXCIsIFwiLVwiKTtcbiAgY29uc3QgbWFpbnBsYXllcmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWlucGxheWVyXCIpO1xuICBjb25zdCBmaW5kRGl2ID0gbWFpbnBsYXllcmJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7dHJhbnNmb3JtY29vcmR0b2lkfVwiXWApO1xuICBjb25zdCBhdHRhY2tSZXN1bHRDb21wdXRlciA9IGF0dGFjayhwbGF5ZXJCLCBwbGF5ZXJBLCBzZWxlY3RlZExvY2F0aW9uKTtcbiAgY29uc3QgaGl0b3JtaXNzQnZzQSA9IGF0dGFja1Jlc3VsdENvbXB1dGVyWzBdO1xuICBjb25zdCBzdW5rU3RhdHVzQSA9IGF0dGFja1Jlc3VsdENvbXB1dGVyWzFdO1xuXG4gIC8vIHNhdmVzIHRoZSBjb29yZGluYXRlIGlmIHRoZSBjaG9zZSBsb2NhdGlvbiB3YXMgYSBoaXQgYW5kIHJlc2V0cyB0aGUgcG9zc2libGUgYmV0dGVyIGxvY2F0aW9uc1xuICBpZiAoXG4gICAgaGl0b3JtaXNzQnZzQSA9PT0gXCJoaXRcIiAmJlxuICAgIChzdW5rU3RhdHVzQSA9PT0gXCJzdGFuZGluZ1wiIHx8IHN1bmtTdGF0dXNBID09PSBcIlwiKVxuICApIHtcbiAgICBsYXN0Y29vcmQucHVzaChzZWxlY3RlZExvY2F0aW9uWzBdICsgXCIsXCIgKyBzZWxlY3RlZExvY2F0aW9uWzFdKTtcbiAgICBwb3NzaWJsZWJldHRlcmxvY2F0aW9ucyA9IFtdO1xuICB9XG5cbiAgLy92aXN1YWxseSB0aGUgY29tcHV0ZXIgdGFrZXMgMXMgdG8gcGxheVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBkb21QbGF5ZXJCKGhpdG9ybWlzc0J2c0EsIGZpbmREaXYsIHN1bmtTdGF0dXNBKTtcbiAgfSwgMTAwMCk7XG5cbiAgaWYgKHN1bmtTdGF0dXNBICE9PSBcInN0YW5kaW5nXCIgJiYgc3Vua1N0YXR1c0EgIT09IFwiXCIpIHtcbiAgICBsYXN0Y29vcmQgPSBbXTtcbiAgICBwb3NzaWJsZWJldHRlcmxvY2F0aW9ucyA9IFtdO1xuICB9XG5cbiAgaWYgKGhpdG9ybWlzc0J2c0EgPT09IFwiZ2FtZW92ZXJcIikge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRTaGlwXCIpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcIndpbm5lcmFubm91Y2VtZW50XCIpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBcIkdhbWUgT3Zlci4gVGhlIENvbXB1dGVyIGlzIHRoZSB3aW5uZXIhXCI7XG4gICAgc3RvcCA9IHRydWU7XG4gICAgcmV0dXJuIHN0b3A7XG4gIH1cbiAgcmV0dXJuIHN0b3A7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGNvbnN0IHBsYXllckFCb2FyZCA9IHNldHVwQm9hcmQoXCJwbGF5ZXJBXCIsIHBsYXllcjEpO1xuICBjb25zdCBwbGF5ZXJBVHJhY2tzQkJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyQVRyYWNrc0JcIik7XG4gIHBsYXllcjEuZ2FtZWJvYXJkID0gcGxheWVyQUJvYXJkO1xuICBwbGF5ZXIxLmFkdmdhbWVib2FyZCA9IHBsYXllckFUcmFja3NCQm9hcmQ7XG4gIGNvbnN0IHBsYXllckJCb2FyZCA9IHNldHVwQm9hcmQoXCJwbGF5ZXJCXCIsIHBsYXllcjIpO1xuICBjb25zdCBwbGF5ZXJCVHJhY2tzQUJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyQlRyYWNrc0FcIik7XG4gIHBsYXllcjIuZ2FtZWJvYXJkID0gcGxheWVyQkJvYXJkO1xuICBwbGF5ZXIyLmFkdmdhbWVib2FyZCA9IHBsYXllckJUcmFja3NBQm9hcmQ7XG4gIHJldHVybiBbcGxheWVyMSwgcGxheWVyMl07XG59XG5cbmZ1bmN0aW9uIHBpY2tCZXR0ZXJDb29yZChleGlzdGluZ0Nvb3JkLCBwbGF5ZXIpIHtcbiAgbGV0IGNvb3JkQXJyYXkgPSBbXTtcbiAgLy8gd2hlbiB0aGVyZSBpcyBvbmx5IG9uZSBjb29yZGluYXRlLCBjaGVja3MgYXQgdGhlIDQgbG9jYXRpb25zIGFyb3VuZCB0aGUgY29vcmRpbmF0ZVxuICBpZiAoZXhpc3RpbmdDb29yZC5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBzcGxpdEl0ID0gZXhpc3RpbmdDb29yZFswXS5zcGxpdChcIixcIik7XG4gICAgY29uc3QgaW5pdGlhbFggPSBOdW1iZXIoc3BsaXRJdFswXSk7XG4gICAgY29uc3QgaW5pdGlhbFkgPSBOdW1iZXIoc3BsaXRJdFsxXSk7XG4gICAgbGV0IG5vcnRoLCBzb3V0aCwgd2VzdCwgZWFzdDtcbiAgICBpZiAoaW5pdGlhbFggLSAxICE9PSAwKSB7XG4gICAgICBub3J0aCA9IGluaXRpYWxYIC0gMSArIFwiLFwiICsgaW5pdGlhbFk7XG4gICAgICBpZiAocGxheWVyLmFkdmdhbWVib2FyZC5jb29yZGluYXRlc1tub3J0aF0gPT09IDApIHtcbiAgICAgICAgY29vcmRBcnJheS5wdXNoKG5vcnRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluaXRpYWxYICsgMSAhPT0gMTEpIHtcbiAgICAgIHNvdXRoID0gaW5pdGlhbFggKyAxICsgXCIsXCIgKyBpbml0aWFsWTtcbiAgICAgIGlmIChwbGF5ZXIuYWR2Z2FtZWJvYXJkLmNvb3JkaW5hdGVzW3NvdXRoXSA9PT0gMCkge1xuICAgICAgICBjb29yZEFycmF5LnB1c2goc291dGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbml0aWFsWSAtIDEgIT09IDApIHtcbiAgICAgIGVhc3QgPSBpbml0aWFsWCArIFwiLFwiICsgKGluaXRpYWxZIC0gMSk7XG4gICAgICBpZiAocGxheWVyLmFkdmdhbWVib2FyZC5jb29yZGluYXRlc1tlYXN0XSA9PT0gMCkge1xuICAgICAgICBjb29yZEFycmF5LnB1c2goZWFzdCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbml0aWFsWSArIDEgIT09IDExKSB7XG4gICAgICB3ZXN0ID0gaW5pdGlhbFggKyBcIixcIiArIChpbml0aWFsWSArIDEpO1xuICAgICAgaWYgKHBsYXllci5hZHZnYW1lYm9hcmQuY29vcmRpbmF0ZXNbZWFzdF0gPT09IDApIHtcbiAgICAgICAgY29vcmRBcnJheS5wdXNoKHdlc3QpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiB0aGVyZSBhcmUgbW9yZSB0aGFuIDEgY29vcmRpbmF0ZSwgY2hlY2tzIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNoaXAgYW5kIHRoZW4gbG9va3MgZm9yIHBvc3NpYmxlIGxvY2F0aW9ucyBvbiB0aGF0IGRpcmVjdGlvblxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFycmF5Q29vcmQgPSBleGlzdGluZ0Nvb3JkO1xuICAgIGNvbnN0IGZpcnN0ID0gYXJyYXlDb29yZFswXS5zcGxpdChcIixcIik7XG4gICAgY29uc3Qgc2Vjb25kID0gYXJyYXlDb29yZFsxXS5zcGxpdChcIixcIik7XG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBpZiAoZmlyc3RbMF0gPT09IHNlY29uZFswXSkge1xuICAgICAgZGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCBjdXJyZW50WSA9IGFycmF5Q29vcmRbMF0uc3BsaXQoXCIsXCIpWzFdO1xuICAgICAgbGV0IGFycmF5T2ZYID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Q29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXlPZlgucHVzaChOdW1iZXIoYXJyYXlDb29yZFtpXS5zcGxpdChcIixcIilbMF0pKTtcbiAgICAgIH1cbiAgICAgIGFycmF5T2ZYLnNvcnQoc29ydGVyKTtcbiAgICAgIGxldCBub3J0aCwgc291dGg7XG4gICAgICBpZiAoYXJyYXlPZlhbMF0gLSAxICE9PSAwKSB7XG4gICAgICAgIG5vcnRoID0gYXJyYXlPZlhbMF0gLSAxICsgXCIsXCIgKyBjdXJyZW50WTtcbiAgICAgICAgaWYgKHBsYXllci5hZHZnYW1lYm9hcmQuY29vcmRpbmF0ZXNbbm9ydGhdID09PSAwKSB7XG4gICAgICAgICAgY29vcmRBcnJheS5wdXNoKG5vcnRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFycmF5T2ZYW2xlbmd0aCAtIDFdICsgMSAhPT0gMTEpIHtcbiAgICAgICAgc291dGggPSBhcnJheU9mWFthcnJheU9mWC5sZW5ndGggLSAxXSArIDEgKyBcIixcIiArIGN1cnJlbnRZO1xuICAgICAgICBpZiAocGxheWVyLmFkdmdhbWVib2FyZC5jb29yZGluYXRlc1tzb3V0aF0gPT09IDApIHtcbiAgICAgICAgICBjb29yZEFycmF5LnB1c2goc291dGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRYID0gYXJyYXlDb29yZFswXS5zcGxpdChcIixcIilbMF07XG4gICAgICBsZXQgYXJyYXlPZlkgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlDb29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheU9mWS5wdXNoKE51bWJlcihhcnJheUNvb3JkW2ldLnNwbGl0KFwiLFwiKVsxXSkpO1xuICAgICAgfVxuICAgICAgYXJyYXlPZlkuc29ydChzb3J0ZXIpO1xuICAgICAgbGV0IGVhc3QsIHdlc3Q7XG4gICAgICBpZiAoYXJyYXlPZllbMF0gLSAxICE9PSAwKSB7XG4gICAgICAgIGVhc3QgPSBjdXJyZW50WCArIFwiLFwiICsgKGFycmF5T2ZZWzBdIC0gMSk7XG4gICAgICAgIGlmIChwbGF5ZXIuYWR2Z2FtZWJvYXJkLmNvb3JkaW5hdGVzW2Vhc3RdID09PSAwKSB7XG4gICAgICAgICAgY29vcmRBcnJheS5wdXNoKGVhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYXJyYXlPZllbbGVuZ3RoIC0gMV0gIT09IDExKSB7XG4gICAgICAgIHdlc3QgPSBjdXJyZW50WCArIFwiLFwiICsgKGFycmF5T2ZZW2FycmF5T2ZZLmxlbmd0aCAtIDFdICsgMSk7XG4gICAgICAgIGlmIChwbGF5ZXIuYWR2Z2FtZWJvYXJkLmNvb3JkaW5hdGVzW3dlc3RdID09PSAwKSB7XG4gICAgICAgICAgY29vcmRBcnJheS5wdXNoKHdlc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb29yZEFycmF5O1xufVxuXG5jb25zdCBzb3J0ZXIgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSwgc2V0dXBQbGF5ZXJzLCBnYW1lTG9vcCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuZXhwb3J0IHsgZG9tUGxheWVyQiB9O1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyQm9hcmRcIik7XG5jb25zdCBhZHZCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWR2Qm9hcmRcIik7XG5cbi8vc3RhcnRzIHRoZSBwbGF5ZXIgd2l0aCBlbXB0eSBjb29yZGluYXRlc1xubGV0IHBsYXllckEgPSBzZXR1cFBsYXllcnMoXCJwbGF5ZXJBXCIsIFtdLCB7fSwge30pO1xubGV0IHBsYXllckIgPSBzZXR1cFBsYXllcnMoXCJwbGF5ZXJCXCIsIFtdLCB7fSwge30pO1xubGV0IG51bW1vdmVzID0gMDtcbi8vIHN0YXJ0cyB0aGUgY29vcmRpbmF0ZXMgZm9yIHRoZSBwbGF5ZXJzIChjcmVhdGVzIHNoaXBzIGZvciBib3RoIHBsYXllcnMgYW5kIHBsYWNlcyBzaGlwcyBmb3IgQilcbmNvbnN0IHVwZGF0ZWRQbGF5ZXJzID0gc3RhcnRHYW1lKHBsYXllckEsIHBsYXllckIpO1xuXG5wbGF5ZXJBID0gdXBkYXRlZFBsYXllcnNbMF07XG5wbGF5ZXJCID0gdXBkYXRlZFBsYXllcnNbMV07XG5cbi8vIGRpc3BsYXlzIHRoZSBjb2x1bW4gbnVtYmVyc1xuY29uc3QgdG9wbnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BudW1iZXJKXCIpO1xuY29uc3QgdG9wbnVtYmVyQWR2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BudW1iZXJKQWR2XCIpO1xuZm9yIChsZXQgayA9IDA7IGsgPD0gMTA7IGsrKykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaXZhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWYgKGsgPT09IDApIHtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRpdmEudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGs7XG4gICAgZGl2YS50ZXh0Q29udGVudCA9IGs7XG4gIH1cbiAgdG9wbnVtYmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIHRvcG51bWJlckFkdi5hcHBlbmRDaGlsZChkaXZhKTtcbn1cblxuLy8gZGlzcGxheXMgdGhlIHJvdyBudW1iZXJzXG5jb25zdCBudW1iZXJJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJJXCIpO1xuY29uc3QgbnVtYmVySUFkdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVySUFkdlwiKTtcbmZvciAobGV0IHogPSAxOyB6IDw9IDEwOyB6KyspIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGl2YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi50ZXh0Q29udGVudCA9IHo7XG4gIGRpdmEudGV4dENvbnRlbnQgPSB6O1xuICBudW1iZXJJLmFwcGVuZENoaWxkKGRpdik7XG4gIG51bWJlcklBZHYuYXBwZW5kQ2hpbGQoZGl2YSk7XG59XG5cbi8vIGNyZWF0ZXMgZGl2cyBmb3IgZWFjaCBwbGF5ZXIgYW5kIHN0YXJ0cyB0aGVtIGFzIG5vdHNlbGVjdGVkID0gZW1wdHlcbmZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgIGNvbnN0IGRpdkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpdkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkEuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSArIFwiLVwiICsgaik7XG4gICAgZGl2QS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpdEJveCBwbGF5ZXJBIG5vdFNlbGVjdGVkQVwiKTtcbiAgICBkaXZCLnNldEF0dHJpYnV0ZShcImlkXCIsIGkgKyBcIi1cIiArIGopO1xuICAgIGRpdkIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaXRCb3ggb3RoZXJwbGF5ZXIgbm90U2VsZWN0ZWRCXCIpO1xuICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKGRpdkEpO1xuICAgIGFkdkJvYXJkLmFwcGVuZENoaWxkKGRpdkIpO1xuICB9XG59XG5cbmxldCBnYW1lc3RhdHVzO1xuXG5jb25zdCBzZWxlY3RTaGlwTG9jYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcGxhY2VkID0gMDtcbiAgZnVuY3Rpb24gcGxhY2VTaGlwKGN1cnJlbnRzaGlwKSB7XG4gICAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gICAgLy9pbnN0cnVjdHMgcGxheWVyIEEgb24gaG93IHRvIGFkZCBzaGlwcyB0byB0aGUgYm9hcmRcbiAgICBjb25zdCBjdXJyZW50c2hpcHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgICBsZXQgY29vcmRpbmF0ZXNMZW5ndGg7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGN1cnJlbnRzaGlwLmxlbmd0aDtcbiAgICBjb25zdCBzaGlwTmFtZSA9IGN1cnJlbnRzaGlwLm5hbWU7XG4gICAgaWYgKHNoaXBOYW1lICE9PSBcIkNhcnJpZXJcIikge1xuICAgICAgaW5jcmVhc2Vmb250KCk7XG4gICAgICBzZXRUaW1lb3V0KGRlY3JlYXNlZm9udCwgNjAwKTtcbiAgICB9XG4gICAgY3VycmVudHNoaXB0aXRsZS50ZXh0Q29udGVudCA9IGBTZXR1cCB5b3VyIGZsZWV0OiBzZWxlY3QgJHtzaGlwTGVuZ3RofSBjb25zZWN1dGl2ZSBzcG90cyBmb3IgcGxhY2luZyB5b3VyICR7c2hpcE5hbWV9LmA7XG5cbiAgICAvL1xuICAgIGNvbnN0IGFsbGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdFNlbGVjdGVkQVwiKTtcbiAgICAvLyBldmFsdWF0ZXMgdGhlIHBsYXllciBjbGlja3Mgc28gdGhhdCB0aGUgb25seSB2YWxpZCBjbGlja3MgYXJlIGNsaWNrcyBvbiBlbXB0eSBkaXZzIHdoZXJlIHRoZSBjdXJyZW50IHNoaXAgbWlnaHQgZml0OyBpdCBhbHNvIG9ubHkgbGV0cyB0aGUgcGxheWVyIHBsYWNlIHNoaXBzIG9uIGNvbnNlY3V0aXZlIGRpdnNcbiAgICBmdW5jdGlvbiBzZWxlY3RTcXVhcmUoZSkge1xuICAgICAgY29uc3QgZGl2aWQgPSBlLnRhcmdldC5pZDtcbiAgICAgIGNvbnN0IGxlZ2FsTW92ZSA9IGNoZWNrQ29uc2VjdXRpdmVTcXVhcmVzKGRpdmlkLCBjb29yZGluYXRlcywgc2hpcExlbmd0aCk7XG4gICAgICBpZiAobGVnYWxNb3ZlKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goZGl2aWQpO1xuICAgICAgICBjb29yZGluYXRlc0xlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkQVwiICsgcGxhY2VkKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm5vdFNlbGVjdGVkQVwiKTtcbiAgICAgICAgY2hlY2tJZkZpbmlzaGVkKGN1cnJlbnRzaGlwLCBjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChjb29yZGluYXRlc0xlbmd0aCA9PT0gc2hpcExlbmd0aCkge1xuICAgICAgICAgIGFsbGRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0U3F1YXJlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocGxhY2VkIDwgNSkge1xuICAgICAgICAgICAgcGxhY2VBbGxTaGlwcygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBvdGhlcnBsYXllcmRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3RoZXJwbGF5ZXJcIik7XG4gICAgICAgICAgICBjb25zdCBmbGVldHNkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsZWV0c1wiKTtcbiAgICAgICAgICAgIG90aGVycGxheWVyZGl2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIGZsZWV0c2Rpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICBjcmVhdGVTaGlwUmVmZXJlbmNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNyZWF0ZXMgZXZlbnQgbGlzdGVuZXJzIGZvciBldmVyeSBkaXZcbiAgICBhbGxkaXZzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdFNxdWFyZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGlwUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHNoaXBjbGFzc2VzID0gW1xuICAgICAgXCJmbGVldGNhcnJpZXJcIixcbiAgICAgIFwiZmxlZXRiYXR0bGVzaGlwXCIsXG4gICAgICBcImZsZWV0ZGVzdHJveWVyXCIsXG4gICAgICBcImZsZWV0c3VibWFyaW5lXCIsXG4gICAgICBcImZsZWV0cGF0cm9sXCIsXG4gICAgXTtcbiAgICBjb25zdCBzaGlwTnVtYmVyU3F1YXJlcyA9IFs1LCA0LCAzLCAzLCAyXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcE51bWJlclNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRkaXZTZWxlY3RvciA9IFwiLlwiICsgc2hpcGNsYXNzZXNbaV07XG4gICAgICBjb25zdCBjdXJyZW50ZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjdXJyZW50ZGl2U2VsZWN0b3IpO1xuICAgICAgY3VycmVudGRpdi5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcE51bWJlclNxdWFyZXNbaV07IGorKykge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3F1YXJlUGxhY2VkXCIpO1xuICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VBbGxTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwc1RvQmVQbGFjZWQgPSBwbGF5ZXJBLnNoaXBzO1xuICAgIHBsYWNlU2hpcChzaGlwc1RvQmVQbGFjZWRbcGxhY2VkXSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbmNyZWFzZWZvbnQoKSB7XG4gICAgY29uc3Qgc2hpcHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgICBzaGlwdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgfVxuICBmdW5jdGlvbiBkZWNyZWFzZWZvbnQoKSB7XG4gICAgY29uc3Qgc2hpcHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50U2hpcFwiKTtcbiAgICBzaGlwdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjE3cHhcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ29uc2VjdXRpdmVTcXVhcmVzKFxuICAgIGN1cnJlbnRzZWxlY3Rpb24sXG4gICAgY29vcmRpbmF0ZXNhcnJheSxcbiAgICBzaGlwbGVuZ3RoXG4gICkge1xuICAgIGxldCBnb29kTW92ZSA9IGZhbHNlO1xuICAgIGlmIChjb29yZGluYXRlc2FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gY2hlY2tzIGlmIGl0IGZpdHMgaG9yaXpvbnRhbGx5IGZpcnN0IGFuZCB0aGVuIHZlcnRpY2FsbHkgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiAoXG4gICAgICAgIGNoZWNrSWZTaGlwRml0c0hvcml6b250YWxseShcbiAgICAgICAgICBzaGlwbGVuZ3RoLFxuICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24sXG4gICAgICAgICAgY29vcmRpbmF0ZXNhcnJheVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjaGVja0lmU2hpcEZpdHNWZXJ0aWNhbGx5KFxuICAgICAgICAgIHNoaXBsZW5ndGgsXG4gICAgICAgICAgY3VycmVudHNlbGVjdGlvbixcbiAgICAgICAgICBjb29yZGluYXRlc2FycmF5XG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvb3JkaW5hdGVzYXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlc051bWJlcnMgPSBjb29yZGluYXRlc2FycmF5WzBdLnNwbGl0KFwiLVwiKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzWCA9IE51bWJlcihjb29yZGluYXRlc051bWJlcnNbMF0pO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXNZID0gTnVtYmVyKGNvb3JkaW5hdGVzTnVtYmVyc1sxXSk7XG4gICAgICBjb25zdCBub3J0aENvb3JkID0gY29vcmRpbmF0ZXNYIC0gMSArIFwiLVwiICsgY29vcmRpbmF0ZXNZO1xuICAgICAgY29uc3Qgc291dGhDb29yZCA9IGNvb3JkaW5hdGVzWCArIDEgKyBcIi1cIiArIGNvb3JkaW5hdGVzWTtcbiAgICAgIGNvbnN0IHdlc3RDb29yZCA9IGNvb3JkaW5hdGVzWCArIFwiLVwiICsgKGNvb3JkaW5hdGVzWSAtIDEpO1xuICAgICAgY29uc3QgZWFzdENvb3JkID0gY29vcmRpbmF0ZXNYICsgXCItXCIgKyAoY29vcmRpbmF0ZXNZICsgMSk7XG5cbiAgICAgIGNvbnN0IGxlZ2FsTW92ZXMgPSBbbm9ydGhDb29yZCwgc291dGhDb29yZCwgd2VzdENvb3JkLCBlYXN0Q29vcmRdO1xuXG4gICAgICBpZiAobGVnYWxNb3Zlcy5pbmNsdWRlcyhjdXJyZW50c2VsZWN0aW9uKSkge1xuICAgICAgICAvLyB3aXRoIGN1cnJlbnQgc2VsZWN0aW9uLCBob3cgd291bGQgdGhlIHNoaXAgd291bGQgYmUgcGxhY2VkP1xuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uU3BsaXQgPSBjdXJyZW50c2VsZWN0aW9uLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvblggPSBOdW1iZXIoY3VycmVudFNlbGVjdGlvblNwbGl0WzBdKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvblkgPSBOdW1iZXIoY3VycmVudFNlbGVjdGlvblNwbGl0WzFdKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3Rpb25YID09PSBjb29yZGluYXRlc1gpIHtcbiAgICAgICAgICAvL2hvcml6b250YWxseVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNoZWNrSWZTaGlwRml0c0hvcml6b250YWxseShcbiAgICAgICAgICAgICAgc2hpcGxlbmd0aCxcbiAgICAgICAgICAgICAgY3VycmVudHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXNhcnJheVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZ29vZE1vdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3ZlcnRpY2FsbHlcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaGVja0lmU2hpcEZpdHNWZXJ0aWNhbGx5KFxuICAgICAgICAgICAgICBzaGlwbGVuZ3RoLFxuICAgICAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uLFxuICAgICAgICAgICAgICBjb29yZGluYXRlc2FycmF5XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBnb29kTW92ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb29yZGluYXRlc1ggPSBbXTtcbiAgICAgIGxldCBjb29yZGluYXRlc1kgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXNhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzZXBhcmF0ZUNvb3JkID0gY29vcmRpbmF0ZXNhcnJheVtpXS5zcGxpdChcIi1cIik7XG4gICAgICAgIGNvb3JkaW5hdGVzWC5wdXNoKE51bWJlcihzZXBhcmF0ZUNvb3JkWzBdKSk7XG4gICAgICAgIGNvb3JkaW5hdGVzWS5wdXNoKE51bWJlcihzZXBhcmF0ZUNvb3JkWzFdKSk7XG4gICAgICB9XG4gICAgICBpZiAoY29vcmRpbmF0ZXNYWzBdID09PSBjb29yZGluYXRlc1hbMV0pIHtcbiAgICAgICAgLy9ob3Jpem9udGFsXG4gICAgICAgIGNvb3JkaW5hdGVzWS5zb3J0KHNvcnRlcik7XG4gICAgICAgIGNvbnN0IHdlc3RDb29yZCA9IGNvb3JkaW5hdGVzWFswXSArIFwiLVwiICsgKGNvb3JkaW5hdGVzWVswXSAtIDEpO1xuICAgICAgICBjb25zdCBlYXN0Q29vcmQgPVxuICAgICAgICAgIGNvb3JkaW5hdGVzWFswXSArIFwiLVwiICsgKGNvb3JkaW5hdGVzWVtjb29yZGluYXRlc1kubGVuZ3RoIC0gMV0gKyAxKTtcbiAgICAgICAgaWYgKGN1cnJlbnRzZWxlY3Rpb24gPT09IHdlc3RDb29yZCB8fCBjdXJyZW50c2VsZWN0aW9uID09PSBlYXN0Q29vcmQpIHtcbiAgICAgICAgICBnb29kTW92ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vdmVydGljYWxcbiAgICAgICAgY29vcmRpbmF0ZXNYLnNvcnQoc29ydGVyKTtcbiAgICAgICAgY29uc3Qgbm9ydGhDb29yZCA9IGNvb3JkaW5hdGVzWFswXSAtIDEgKyBcIi1cIiArIGNvb3JkaW5hdGVzWVswXTtcbiAgICAgICAgY29uc3Qgc291dGhDb29yZCA9XG4gICAgICAgICAgY29vcmRpbmF0ZXNYW2Nvb3JkaW5hdGVzWC5sZW5ndGggLSAxXSArIDEgKyBcIi1cIiArIGNvb3JkaW5hdGVzWVswXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGN1cnJlbnRzZWxlY3Rpb24gPT09IG5vcnRoQ29vcmQgfHxcbiAgICAgICAgICBjdXJyZW50c2VsZWN0aW9uID09PSBzb3V0aENvb3JkXG4gICAgICAgICkge1xuICAgICAgICAgIGdvb2RNb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ29vZE1vdmU7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0lmU2hpcEZpdHNWZXJ0aWNhbGx5KHNoaXBsZW5ndGgsIGNvb3JkLCBjb29yZGluYXRlc2FycmF5KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb29yZCA9IGNvb3JkLnNwbGl0KFwiLVwiKTtcbiAgICBjb25zdCBzZWxlY3RlZFggPSBOdW1iZXIoc2VsZWN0ZWRDb29yZFswXSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRZID0gTnVtYmVyKHNlbGVjdGVkQ29vcmRbMV0pO1xuICAgIGxldCBhdmFpbGFibGVzcGFjZXNZID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV4dERpdklEID0gc2VsZWN0ZWRYICsgaSArIFwiLVwiICsgc2VsZWN0ZWRZO1xuICAgICAgY29uc3QgbmV4dERpdk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0RGl2SUQpO1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0RGl2Tm9kZSAhPT0gbnVsbCAmJlxuICAgICAgICBuZXh0RGl2Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RTZWxlY3RlZEFcIilcbiAgICAgICkge1xuICAgICAgICArK2F2YWlsYWJsZXNwYWNlc1k7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwbGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2SUQgPSBzZWxlY3RlZFggLSBqICsgXCItXCIgKyBzZWxlY3RlZFk7XG4gICAgICBjb25zdCBwcmV2aW91c0Rpdk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmV2aW91c0RpdklEKTtcbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNEaXZOb2RlICE9PSBudWxsICYmXG4gICAgICAgIHByZXZpb3VzRGl2Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RTZWxlY3RlZEFcIilcbiAgICAgICkge1xuICAgICAgICArK2F2YWlsYWJsZXNwYWNlc1k7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF2YWlsYWJsZXNwYWNlc1kgPj0gc2hpcGxlbmd0aCAtIGNvb3JkaW5hdGVzYXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSWZTaGlwRml0c0hvcml6b250YWxseShzaGlwbGVuZ3RoLCBjb29yZCwgY29vcmRpbmF0ZXNhcnJheSkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ29vcmQgPSBjb29yZC5zcGxpdChcIi1cIik7XG4gICAgY29uc3Qgc2VsZWN0ZWRYID0gTnVtYmVyKHNlbGVjdGVkQ29vcmRbMF0pO1xuICAgIGNvbnN0IHNlbGVjdGVkWSA9IE51bWJlcihzZWxlY3RlZENvb3JkWzFdKTtcblxuICAgIGxldCBhdmFpbGFibGVzcGFjZXNYID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV4dERpdklEID0gc2VsZWN0ZWRYICsgXCItXCIgKyAoc2VsZWN0ZWRZICsgaSk7XG4gICAgICBjb25zdCBuZXh0RGl2Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHREaXZJRCk7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHREaXZOb2RlICE9PSBudWxsICYmXG4gICAgICAgIG5leHREaXZOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFNlbGVjdGVkQVwiKVxuICAgICAgKSB7XG4gICAgICAgICsrYXZhaWxhYmxlc3BhY2VzWDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcGxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0RpdklEID0gc2VsZWN0ZWRYICsgXCItXCIgKyAoc2VsZWN0ZWRZIC0gaik7XG4gICAgICBjb25zdCBwcmV2aW91c0Rpdk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmV2aW91c0RpdklEKTtcbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNEaXZOb2RlICE9PSBudWxsICYmXG4gICAgICAgIHByZXZpb3VzRGl2Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RTZWxlY3RlZEFcIilcbiAgICAgICkge1xuICAgICAgICArK2F2YWlsYWJsZXNwYWNlc1g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF2YWlsYWJsZXNwYWNlc1ggPj0gc2hpcGxlbmd0aCAtIGNvb3JkaW5hdGVzYXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSWZGaW5pc2hlZChjdXJyZW50c2hpcCwgY29vcmQpIHtcbiAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZEFcIiArIHBsYWNlZCk7XG4gICAgaWYgKGRpdnMubGVuZ3RoID09PSBjdXJyZW50c2hpcC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGFycmF5Y29vcmQgPSBjb29yZDtcbiAgICAgIGNvbnN0IG5ld2FycmF5Y29vcmQgPSBhcnJheWNvb3JkLm1hcCgoZWxlbWVudCkgPT4gW1xuICAgICAgICBlbGVtZW50LnJlcGxhY2UoXCItXCIsIFwiLFwiKSxcbiAgICAgIF0pO1xuICAgICAgcGxheWVyQS5zaGlwc1twbGFjZWRdLmNvb3JkaW5hdGVzID0gbmV3YXJyYXljb29yZDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3YXJyYXljb29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBwbGF5ZXJBLmdhbWVib2FyZC5jb29yZGluYXRlc1tuZXdhcnJheWNvb3JkW2ldLnRvU3RyaW5nKCldID0gMTtcbiAgICAgIH1cbiAgICAgIHBsYWNlZCsrO1xuICAgICAgaWYgKHBsYWNlZCA9PT0gNSkge1xuICAgICAgICBjb250aW51ZXBsYXlpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBwbGFjZUFsbFNoaXBzIH07XG59KSgpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBzZWxlY3RTaGlwTG9jYXRpb24ucGxhY2VBbGxTaGlwcygpO1xufTtcblxuY29uc3QgYXR0YWNrb25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGRpdiA9IGUudGFyZ2V0O1xuICBjb25zdCBkaXZJRCA9IGUudGFyZ2V0LmlkO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkQlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJub3RTZWxlY3RlZEJcIik7XG4gIGNvbnN0IGRpdmNvb3JkID0gW2RpdklELnJlcGxhY2UoXCItXCIsIFwiLFwiKV07XG4gIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrb25jbGljayk7XG4gIGdhbWVzdGF0dXMgPSBnYW1lTG9vcChkaXZjb29yZCwgcGxheWVyQSwgcGxheWVyQik7XG4gIGNvbnN0IG5ld21vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICsrbnVtbW92ZXM7XG5cbiAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICBuZXdtb3ZlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1vdmVjb3VudGVyXCI+JHtudW1tb3Zlc308L3NwYW4+IFske2RpdklEfV06IFlvdSBoYXZlIGhpdCBhIHNoaXAhYDtcbiAgfSBlbHNlIHtcbiAgICBuZXdtb3ZlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1vdmVjb3VudGVyXCI+JHtudW1tb3Zlc308L3NwYW4+IFske2RpdklEfV06IFlvdSBtaXNzZWRgO1xuICB9XG4gIGNvbnN0IG1vdmVzRGlzcGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb3Zlc1wiKTtcbiAgY29uc3QgbnVtYmVyT2ZNb3ZlcyA9IG1vdmVzRGlzcGxheWVkWzBdLmNoaWxkTm9kZXMubGVuZ3RoO1xuICBpZiAobnVtYmVyT2ZNb3ZlcyA9PT0gNykge1xuICAgIG1vdmVzRGlzcGxheWVkWzBdLnJlbW92ZUNoaWxkKG1vdmVzRGlzcGxheWVkWzBdLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbW92ZXMuYXBwZW5kQ2hpbGQobmV3bW92ZSk7XG4gIGNvbnN0IGFkdmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHZCb2FyZFwiKTtcbiAgY29uc3QgYWxsZW1wdHlkaXZzID0gYWR2Ym9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RTZWxlY3RlZEJcIik7XG4gIGFsbGVtcHR5ZGl2cy5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja29uY2xpY2spXG4gICk7XG4gIGNoZWNrRm9yRW5kT2ZHYW1lKCk7XG4gIGlmICghZ2FtZXN0YXR1cykge1xuICAgIGNvbnRpbnVlcGxheWluZygpO1xuICB9XG59O1xuXG5jb25zdCBjb250aW51ZXBsYXlpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRTaGlwXCIpO1xuICBpbmZvLnRleHRDb250ZW50ID1cbiAgICBcIkF0dGFjayB0aGUgZW5lbXkgYnkgY2xpY2tpbmcgb24gYW4gZW1wdHkgc3F1YXJlIG9uIHRoZSBlbmVteSBib2FyZC5cIjtcbiAgY29uc3QgYWR2Ym9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkdkJvYXJkXCIpO1xuICBjb25zdCBhbGxlbXB0eWRpdnMgPSBhZHZib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdFNlbGVjdGVkQlwiKTtcbiAgYWxsZW1wdHlkaXZzLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrb25jbGljaylcbiAgKTtcbn07XG5cbmNvbnN0IGRvbVBsYXllckIgPSBmdW5jdGlvbiAoaGl0b3JtaXNzQnZzQSwgZGl2LCBzdW5rb3Jub3QpIHtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZGJ5QlwiKTtcbiAgaWYgKGhpdG9ybWlzc0J2c0EgPT09IFwiaGl0XCIgfHwgaGl0b3JtaXNzQnZzQSA9PT0gXCJnYW1lb3ZlclwiKSB7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gIH1cbiAgY29uc3QgbmV3bW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbmV3bW92ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9wcG9uZW50bW92ZVwiKTtcbiAgY29uc3QgbW92ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmVzXCIpO1xuICBudW1tb3ZlcysrO1xuICBjb25zdCBkaXZpZCA9IGRpdi5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgaWYgKGhpdG9ybWlzc0J2c0EgPT09IFwiaGl0XCIpIHtcbiAgICBuZXdtb3ZlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1vdmVjb3VudGVyXCI+JHtudW1tb3Zlc308L3NwYW4+IFske2RpdmlkfV06IFRoZSBjb21wdXRlciBoaXQgb25lIG9mIHlvdXIgc2hpcHMuYDtcbiAgICBpZiAoc3Vua29ybm90ICE9PSBcInN0YW5kaW5nXCIpIHtcbiAgICAgIGNvbnN0IHN1bmtlZHNoaXBuYW1lID0gc3Vua29ybm90LnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBzdW5rZWRzaGlwSDNJZCA9IHN1bmtlZHNoaXBuYW1lICsgXCJQXCI7XG4gICAgICBjb25zdCBzaGlwT25Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdW5rZWRzaGlwSDNJZCk7XG4gICAgICBjb25zdCBzaGlwUmVmZXJlbmNlRGl2ID0gc2hpcE9uRG9tLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGNvbnN0IGFsbGRpdnNJbnNpZGUgPSBzaGlwUmVmZXJlbmNlRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICBhbGxkaXZzSW5zaWRlLmZvckVhY2goKGRpdikgPT4gKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JleVwiKSk7XG4gICAgICBzaGlwT25Eb20uY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICBjb25zdCBzdW5rc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Vua3NoaXBcIik7XG4gICAgICBzdW5rc2hpcC50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiTGF0ZXN0IGNhc3VhbHR5OiBZb3VyIFwiICsgc3Vua29ybm90ICsgXCIgaGFzIHN1bmsuXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKGhpdG9ybWlzc0J2c0EgPT09IFwibWlzc1wiKSB7XG4gICAgbmV3bW92ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtb3ZlY291bnRlclwiPiR7bnVtbW92ZXN9PC9zcGFuPiBbJHtkaXZpZH1dOiBUaGUgY29tcHV0ZXIgbWlzc2VkLmA7XG4gIH1cbiAgY29uc3QgbW92ZXNEaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vdmVzXCIpO1xuICBjb25zdCBudW1iZXJPZk1vdmVzID0gbW92ZXNEaXNwbGF5ZWRbMF0uY2hpbGROb2Rlcy5sZW5ndGg7XG4gIGlmIChudW1iZXJPZk1vdmVzID09PSA3KSB7XG4gICAgbW92ZXNEaXNwbGF5ZWRbMF0ucmVtb3ZlQ2hpbGQobW92ZXNEaXNwbGF5ZWRbMF0uZmlyc3RDaGlsZCk7XG4gIH1cbiAgbW92ZXMuYXBwZW5kQ2hpbGQobmV3bW92ZSk7XG59O1xuXG5jb25zdCBjaGVja0ZvckVuZE9mR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGdhbWVzdGF0dXMpIHtcbiAgICBjb25zdCBhZHZib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWR2Qm9hcmRcIik7XG4gICAgY29uc3QgYWxsZW1wdHlkaXZzID0gYWR2Ym9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RTZWxlY3RlZEJcIik7XG4gICAgYWxsZW1wdHlkaXZzLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2tvbmNsaWNrKVxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IHNvcnRlciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBhIC0gYjtcbn07XG4iLCJleHBvcnQgeyBjcmVhdGVQbGF5ZXIgfTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNoaXBzID0gc2hpcHM7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgdGhpcy5hZHZnYW1lYm9hcmQgPSBhZHZnYW1lYm9hcmQ7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlUGxheWVyID0gZnVuY3Rpb24gKHBsYXllciwgc2hpcHMsIGdhbWVib2FyZCwgYWR2Z2FtZWJvYXJkKSB7XG4gIGNvbnN0IG5ld3BsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyLCBzaGlwcywgZ2FtZWJvYXJkLCBhZHZnYW1lYm9hcmQpO1xuICByZXR1cm4gbmV3cGxheWVyO1xufTtcbiIsImV4cG9ydCB7IGNyZWF0ZVNoaXBGbGVldCB9O1xuXG5jb25zdCBjcmVhdGVBcnJheUhpdHMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gIGxldCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXkucHVzaCgwKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5jb25zdCBjaGVja0lmU3VuayA9IGZ1bmN0aW9uIChoaXRzYXJyYXkpIHtcbiAgLy9jb25zb2xlLmxvZyhoaXRzYXJyYXkpO1xuICBpZiAoaGl0c2FycmF5LmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IDApID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSBmdW5jdGlvbiAobGVuZ3RoLCBuYW1lLCBwbGF5ZXIpIHtcbiAgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBuYW1lLCBwbGF5ZXIpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5oaXRzID0gY3JlYXRlQXJyYXlIaXRzKHRoaXMubGVuZ3RoKTtcbiAgICAgIHRoaXMuc3VuayA9IGNoZWNrSWZTdW5rKHRoaXMuaGl0cyk7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzID0gW107XG4gICAgfVxuICAgIGhpdChpbmRleCkge1xuICAgICAgdGhpcy5oaXRzW2luZGV4XSA9IDE7XG4gICAgICB0aGlzLnN1bmsgPSBjaGVja0lmU3Vuayh0aGlzLmhpdHMpO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGlwY3JlYXRlZCA9IG5ldyBTaGlwKGxlbmd0aCwgbmFtZSwgcGxheWVyKTtcbiAgcmV0dXJuIHNoaXBjcmVhdGVkO1xufTtcblxuY29uc3QgY3JlYXRlU2hpcEZsZWV0ID0gZnVuY3Rpb24gKHBsYXllcikge1xuICBjb25zdCBjYXJyaWVyID0gY3JlYXRlU2hpcCg1LCBcIkNhcnJpZXJcIiwgcGxheWVyKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCwgXCJCYXR0bGVzaGlwXCIsIHBsYXllcik7XG4gIGNvbnN0IGRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMywgXCJEZXN0cm95ZXJcIiwgcGxheWVyKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gY3JlYXRlU2hpcCgzLCBcIlN1Ym1hcmluZVwiLCBwbGF5ZXIpO1xuICBjb25zdCBwYXRyb2xib2F0ID0gY3JlYXRlU2hpcCgyLCBcIlBhdHJvbGJvYXRcIiwgcGxheWVyKTtcbiAgY29uc3Qgc2hpcGFycmF5ID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xib2F0XTtcbiAgcmV0dXJuIHNoaXBhcnJheTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9