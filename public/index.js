/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _REST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./REST */ \"./src/REST.js\");\n\n\nfunction Controller(model, view) {\n  this._model = model;\n  this._view = view;\n  this._mtx = null;\n}\n\nController.prototype.init = function () {\n  this._view.init();\n\n  this.sendMatrixToView();\n  this.getRandom();\n  this.getVictory();\n\n  this._view.gameShuffle(this.shuffle.bind(this));\n\n  this._view.sendValue(this.getFromModel.bind(this));\n};\n\nController.prototype.sendMatrixToView = function () {\n  var _this = this;\n\n  var model = this._model.getMatrix();\n\n  model.forEach(function (array) {\n    array.forEach(function (element) {\n      _this._view.drawMatrix(element);\n    });\n  });\n  Object(_REST__WEBPACK_IMPORTED_MODULE_0__[\"sendGetRequest\"])(data);\n};\n\nController.prototype.getFromModel = function (value) {\n  var indexEl = this._model.findIndex(value);\n\n  var check = this.checkForZero(indexEl);\n\n  if (check) {\n    this._model.swapElems(indexEl, check);\n\n    console.log(this._model.getMatrix());\n\n    this._view.deleteItems();\n\n    this.sendMatrixToView();\n    this.getVictory();\n  }\n};\n\nController.prototype.checkForZero = function (item) {\n  var items = this._model.getMatrix();\n\n  try {\n    if (items[item.coordinateX + 1][item.coordinateY] === 0) {\n      return {\n        coordinateX: item.coordinateX + 1,\n        coordinateY: item.coordinateY\n      };\n    }\n  } catch (e) {}\n\n  try {\n    if (items[item.coordinateX - 1][item.coordinateY] === 0) {\n      return {\n        coordinateX: item.coordinateX - 1,\n        coordinateY: item.coordinateY\n      };\n    }\n  } catch (e) {}\n\n  try {\n    if (items[item.coordinateX][item.coordinateY + 1] === 0) {\n      return {\n        coordinateX: item.coordinateX,\n        coordinateY: item.coordinateY + 1\n      };\n    }\n  } catch (e) {}\n\n  try {\n    if (items[item.coordinateX][item.coordinateY - 1] === 0) {\n      return {\n        coordinateX: item.coordinateX,\n        coordinateY: item.coordinateY - 1\n      };\n    }\n  } catch (e) {}\n\n  return false;\n};\n\nController.prototype.getRandom = function () {\n  this._mtx = this._model.getMatrix();\n\n  var arr = this._mtx.flat();\n\n  var temp = 0;\n  var j = 0;\n\n  for (var i = arr.length - 1; i > 0; i--) {\n    j = Math.floor(Math.random() * i + 0.5);\n    temp = arr[j];\n    arr[j] = arr[i];\n    arr[i] = temp;\n  }\n\n  this._mtx = arr.map(function (_, i, a) {\n    return a.slice(i * 4, i * 4 + 4);\n  }).filter(function (el) {\n    return el.length;\n  });\n  Object(_REST__WEBPACK_IMPORTED_MODULE_0__[\"sendPutRequest\"])(this._mtx);\n};\n\nController.prototype.shuffle = function () {\n  this.getRandom();\n\n  this._model.setMatrix(this._mtx);\n\n  this._view.deleteItems();\n\n  this.sendMatrixToView();\n};\n\nController.prototype.getVictory = function () {\n  var testMatrix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];\n\n  var testArray = this._mtx.flat();\n\n  var test = JSON.stringify(testMatrix);\n  var defaultArr = JSON.stringify(testArray);\n\n  if (test === defaultArr) {\n    setTimeout(function () {\n      alert('YOU DID IT BROOO!!!!');\n    }, 200);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/Controller.js?");

/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Model() {\n  this._matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];\n  this._box = {\n    coordinateX: 0,\n    coordinateY: 0,\n    value: 0\n  };\n  this._zeroBox = {\n    coordinateX: 0,\n    coordinateY: 0,\n    value: 0\n  };\n}\n\n;\n\nModel.prototype.getMatrix = function () {\n  return this._matrix;\n};\n\nModel.prototype.setMatrix = function (array) {\n  this._matrix = array;\n};\n\nModel.prototype.findIndex = function (value) {\n  this._box.value = Number(value);\n\n  for (var i = 0; i < this._matrix.length; i++) {\n    for (var j = 0; j < this._matrix.length; j++) {\n      if (this._matrix[i][j] === this._box.value) {\n        this._box.coordinateX = i;\n        this._box.coordinateY = j;\n        return this._box;\n      }\n    }\n  }\n};\n\nModel.prototype.swapElems = function (elem1, elem2) {\n  this._box = elem1;\n  this._zeroBox = elem2;\n  var _ref = [this._matrix[this._zeroBox.coordinateX][this._zeroBox.coordinateY], this._matrix[this._box.coordinateX][this._box.coordinateY]];\n  this._matrix[this._box.coordinateX][this._box.coordinateY] = _ref[0];\n  this._matrix[this._zeroBox.coordinateX][this._zeroBox.coordinateY] = _ref[1];\n  console.log(this._matrix);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n\n//# sourceURL=webpack:///./src/Model.js?");

/***/ }),

/***/ "./src/REST.js":
/*!*********************!*\
  !*** ./src/REST.js ***!
  \*********************/
/*! exports provided: sendPUtRequest, sendGetRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendPUtRequest\", function() { return sendPUtRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendGetRequest\", function() { return sendGetRequest; });\nvar sendPUtRequest = function sendPUtRequest(data, cb) {\n  var xhr = new XMLHttpRequest();\n  var shuffleArray = Json.stringify(data);\n  xhr.open(\"PUT\", \"/setItems\");\n  xhr.setRequestHeader(\"Content-type\", \"application-json\");\n  xhr.send(shuffleArray);\n};\nvar sendGetRequest = function sendGetRequest(data, cb) {\n  var xhr = new XMLHttpRequest();\n  var dataInJson = Json.parse(data);\n  xhr.open(\"GET\", \"/getItems\");\n  xhr.setRequestHeader(\"Content-type\", \"application-json\");\n  xhr.send(dataInJson);\n};\n\n//# sourceURL=webpack:///./src/REST.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction View() {\n  this._root = document.querySelector('div#root');\n  this._gameBlock = null;\n  this._gameNumbers = null;\n  this.mix_button = null;\n}\n\nView.prototype.init = function () {\n  var container_welcome_page = createDiv({\n    \"class\": 'container_welcome_page',\n    id: 'welcome'\n  });\n  var container_game_page = createDiv({\n    \"class\": 'container_game_page',\n    id: 'gameContainer'\n  });\n  var welcome_page_bgColor = createDiv({\n    \"class\": 'welcome_page_bgColor'\n  });\n  var color_block = createDiv({\n    \"class\": 'color_block'\n  });\n  var light = createButton({\n    \"class\": 'color_block_light color'\n  });\n  var dark = createButton({\n    \"class\": 'color_block_dark color'\n  });\n  var white = createButton({\n    \"class\": 'color_block_white color'\n  });\n  var page_heading_light = createHeading({\n    \"class\": 'page_heading_light'\n  });\n  var play_button = createButton({\n    \"class\": 'play_button',\n    id: 'play_button'\n  });\n  var mixDiv = createDiv({\n    \"class\": 'mixDiv'\n  });\n  light.innerHTML = 'Colorful mode';\n  dark.innerHTML = 'Dark mode';\n  this._gameBlock = createDiv({\n    \"class\": 'game_dark'\n  });\n  white.innerHTML = 'White mode';\n  page_heading_light.innerHTML = 'WELCOME TO FIFTEEN!';\n  play_button.innerHTML = 'PLAY';\n  this.mix_button = createButton({\n    \"class\": 'mix_button',\n    id: 'mix_button'\n  });\n  this.mix_button.innerHTML = 'MIX';\n  container_game_page.append(mixDiv);\n  mixDiv.append(this.mix_button);\n  container_game_page.append(this._gameBlock);\n\n  this._root.append(container_welcome_page);\n\n  this._root.append(container_game_page);\n\n  color_block.append(light);\n  color_block.append(dark);\n  color_block.append(white);\n  container_welcome_page.append(page_heading_light);\n  container_welcome_page.append(play_button);\n  container_welcome_page.append(color_block);\n  container_welcome_page.append(welcome_page_bgColor);\n  this.visible();\n  this.lightMode();\n  this.dark();\n  this.white();\n};\n\nView.prototype.dark = function () {\n  var dark = document.querySelector('.color_block_dark');\n  dark.addEventListener('click', function () {\n    document.querySelector('.play_button').style.backgroundColor = '#ffffff';\n    document.querySelector('.play_button').style.color = '#000000';\n    document.querySelector('.container_welcome_page').style.background = '#000';\n    document.querySelector('.page_heading_light').style.color = '#fff';\n    document.querySelector('.container_game_page').style.backgroundImage = 'url(./images/fifteen_second_light_bg.jpg)';\n  });\n};\n\nView.prototype.white = function () {\n  var white = document.querySelector('.color_block_white');\n  white.addEventListener('click', function () {\n    document.querySelector('.container_welcome_page').style.background = '#ffffff';\n    document.querySelector('.play_button').style.backgroundColor = '#000000';\n    document.querySelector('.play_button').style.color = '#ffffff';\n    document.querySelector('.page_heading_light').style.color = '#000000';\n    document.querySelector('.container_game_page').style.backgroundImage = 'url(./images/fifteen_second-dark_bg.jpg)';\n    document.querySelector('.mix_button').style.backgroundColor = '#000000';\n    document.querySelector('.mix_button').style.color = '#ffffff';\n    document.querySelector('.game_dark').style.backgroundColor = '#000000';\n    document.querySelector('.game_dark').style.color = '#ffffff';\n    document.querySelector('.game_dark').style.border = '1px solid #ffffff';\n  });\n};\n\nView.prototype.lightMode = function () {\n  var light = document.querySelector('.color_block_light');\n  light.addEventListener('click', function () {\n    document.querySelector('.mix_button').style.backgroundColor = 'rgba(255, 47, 47, 0.31)';\n    document.querySelector('.mix_button').style.color = '#ffffff';\n    document.querySelector('.game_dark').style.backgroundColor = 'rgba(255, 47, 47, 0.31)';\n    document.querySelector('.game_dark').style.color = '#ffffff';\n    document.querySelector('.play_button').style.backgroundColor = 'rgb(226, 25, 25)';\n    document.querySelector('.play_button').style.color = '#ffffff';\n    document.querySelector('.container_game_page').style.backgroundImage = 'url(./images/light-bg.jpg)';\n    document.querySelector('.container_game_page').style.backgroundSize = 'cover';\n    document.querySelector('.container_welcome_page').style.background = 'linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)';\n    document.querySelector('.page_heading_light').style.color = '#ffffff';\n    document.querySelector('.game_blocks').classList.add('game_light_background');\n  });\n};\n\nView.prototype.visible = function () {\n  var play = document.querySelector('#play_button');\n  play.addEventListener('click', function () {\n    document.querySelector('#gameContainer').style.display = 'flex';\n    document.querySelector('.container_welcome_page').style.display = 'none';\n  });\n};\n\nvar createDiv = function createDiv(params) {\n  var div = document.createElement('div');\n  div.setAttribute('class', params[\"class\"]);\n  params.id && (div.id = params.id);\n  params.title && (div.title = params.title);\n  params.textContent && (div.textContent = params.textContent);\n  params.inner && (div.innerHTML = params.inner);\n  return div;\n};\n\nvar createHeading = function createHeading(params) {\n  var heading = document.createElement('h1');\n  heading.setAttribute('class', params[\"class\"]);\n  params.inner && (heading.innerHTML = params.inner);\n  return heading;\n};\n\nvar createButton = function createButton(params) {\n  var button = document.createElement('button');\n  button.setAttribute('class', params[\"class\"]);\n  params.id && (button.id = params.id);\n  params.inner && (button.innerHTML = params.inner);\n  params.onclick && (button.onclick = params.onclick);\n  return button;\n};\n\nView.prototype.drawMatrix = function (element) {\n  var gameNumbers = document.createElement('div');\n  gameNumbers.innerHTML = element;\n  gameNumbers.setAttribute('class', 'game_blocks');\n\n  if (!element) {\n    gameNumbers.setAttribute('class', 'game_blocks zero');\n  }\n\n  this._gameBlock.append(gameNumbers);\n};\n\nView.prototype.sendValue = function (callback) {\n  document.addEventListener('click', function (evt) {\n    var innerText = evt.target.innerText;\n    callback(innerText);\n  }, false);\n};\n\nView.prototype.deleteItems = function () {\n  var items = document.querySelectorAll('.game_blocks');\n  items.forEach(function (item) {\n    item.remove();\n  });\n};\n\nView.prototype.gameShuffle = function (cb) {\n  this.mix_button.addEventListener('click', function (evt) {\n    var innerText = evt.target.innerText;\n    cb(innerText);\n  }, false);\n};\n\nView.prototype.showVictory = function () {\n  this._gameBlock.addEventListener('click');\n};\n\nView.prototype.gameShuffle = function (cb) {\n  this.mix_button.addEventListener('click', function (evt) {\n    var array = evt.target.array;\n    cb(array);\n  }, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n//# sourceURL=webpack:///./src/View.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ \"./src/Model.js\");\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.js */ \"./src/View.js\");\n/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller.js */ \"./src/Controller.js\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction initialize() {\n  var model = new Model();\n  var view = new View();\n  var controller = new Controller(model, view);\n  controller.init();\n}\n\ninitialize();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.less?");

/***/ })

/******/ });