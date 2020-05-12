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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _REST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./REST */ \"./src/REST.js\");\n\n\nfunction Controller(model, view) {\n  this._model = model;\n  this._view = view;\n  this._mtx = null;\n}\n\nController.prototype.init = function () {\n  this._view.init();\n\n  this.waitForData();\n  this.getRandom();\n  this.getVictory(); // this._view.clickPlay(this.sendMatrixToView.bind(this));\n\n  this._view.gameShuffle(this.shuffle.bind(this));\n\n  this._view.sendValue(this.getFromModel.bind(this));\n};\n\nController.prototype.waitForData = function () {\n  var _this = this;\n\n  var promise = new Promise(function (res, rej) {\n    res(Object(_REST__WEBPACK_IMPORTED_MODULE_0__[\"sendGetRequest\"])(this.setArray.bind(Controller)));\n  });\n  promise.then(function () {\n    return _this.sendMatrixToView();\n  });\n};\n\nController.prototype.sendMatrixToView = function () {\n  var _this2 = this;\n\n  var model = this._model.getMatrix();\n\n  console.log('sen to view matrix', model);\n  model.forEach(function (array) {\n    array.forEach(function (element) {\n      _this2._view.drawMatrix(element);\n    });\n  });\n};\n\nController.prototype.setArray = function (matrix) {\n  this._model.setMatrix(matrix);\n\n  console.log('setArray function ', this._model.getMatrix());\n};\n\nController.prototype.getFromModel = function (value) {\n  var indexEl = this._model.findIndex(value);\n\n  var check = this.checkForZero(indexEl);\n\n  if (check) {\n    this._model.swapElems(indexEl, check);\n\n    var matrix = this._model.getMatrix();\n\n    Object(_REST__WEBPACK_IMPORTED_MODULE_0__[\"sendPutRequest\"])(matrix);\n    console.log(this._model.getMatrix());\n\n    this._view.deleteItems();\n\n    this.sendMatrixToView();\n    this.getVictory();\n  }\n};\n\nController.prototype.checkForZero = function (item) {\n  var items = this._model.getMatrix();\n\n  try {\n    if (items[item.coordinateX + 1][item.coordinateY] === 0) {\n      return {\n        coordinateX: item.coordinateX + 1,\n        coordinateY: item.coordinateY\n      };\n    }\n  } catch (e) {}\n\n  try {\n    if (items[item.coordinateX - 1][item.coordinateY] === 0) {\n      return {\n        coordinateX: item.coordinateX - 1,\n        coordinateY: item.coordinateY\n      };\n    }\n  } catch (e) {}\n\n  try {\n    if (items[item.coordinateX][item.coordinateY + 1] === 0) {\n      return {\n        coordinateX: item.coordinateX,\n        coordinateY: item.coordinateY + 1\n      };\n    }\n  } catch (e) {}\n\n  try {\n    if (items[item.coordinateX][item.coordinateY - 1] === 0) {\n      return {\n        coordinateX: item.coordinateX,\n        coordinateY: item.coordinateY - 1\n      };\n    }\n  } catch (e) {}\n\n  return false;\n};\n\nController.prototype.getRandom = function () {\n  this._mtx = this._model.getMatrix();\n\n  var arr = this._mtx.flat();\n\n  var temp = 0;\n  var j = 0;\n\n  for (var i = arr.length - 1; i > 0; i--) {\n    j = Math.floor(Math.random() * i + 0.5);\n    temp = arr[j];\n    arr[j] = arr[i];\n    arr[i] = temp;\n  }\n\n  this._mtx = arr.map(function (_, i, a) {\n    return a.slice(i * 4, i * 4 + 4);\n  }).filter(function (el) {\n    return el.length;\n  });\n};\n\nController.prototype.shuffle = function () {\n  this.getRandom();\n\n  this._model.setMatrix(this._mtx);\n\n  this._view.deleteItems();\n\n  this.sendMatrixToView();\n};\n\nController.prototype.getVictory = function () {\n  var testMatrix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];\n\n  var testArray = this._mtx.flat();\n\n  var test = JSON.stringify(testMatrix);\n  var defaultArr = JSON.stringify(testArray);\n\n  if (test === defaultArr) {\n    setTimeout(function () {\n      alert('YOU DID IT BROOO!!!!');\n    }, 200);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller); // class Controller{\n// \tconstructor(model, view) {\n// \t\tthis._model = model;\n//     \tthis._view = view;\n//     \tthis._mtx = null;\n// \t}\n// \tinit() {\n// \t\tthis._view.init();\n// \t    this.sendMatrixToView();\n// \t    this.getRandom();\n// \t    this.getVictory();\n// \t    this._view.gameShuffle(this.shuffle.bind(this));\n// \t    this._view.sendValue(this.getFromModel.bind(this));\n// \t}\n// \tsendMatrixToView() {\n// \t\tconst model = this._model.getMatrix();\n// \t    model.forEach(array => {\n// \t        array.forEach(element => {\n// \t            this._view.drawMatrix(element); \n// \t        })\n// \t    })\n// \t}\n// \tgetFromModel(value) {\n// \t\tconst indexEl = this._model.findIndex(value);\n// \t    const check = this.checkForZero(indexEl);\n// \t    if(check) {\n// \t        this._model.swapElems(indexEl, check);\n// \t        console.log(this._model.getMatrix());\n// \t        this._view.deleteItems();\n// \t        this.sendMatrixToView();\n// \t        this.getVictory();\n// \t    }\n// \t}\n// \tcheckForZero(item) {\n// \t\tconst items = this._model.getMatrix();\n// \t    try {\n// \t        if (items[item.coordinateX + 1][item.coordinateY] === 0) {\n// \t            return { coordinateX: item.coordinateX + 1, coordinateY: item.coordinateY };\n// \t        }\n// \t    } catch (e) {\n// \t    }\n// \t    try {\n// \t        if (items[item.coordinateX - 1][item.coordinateY] === 0) {\n// \t            return { coordinateX: item.coordinateX - 1, coordinateY: item.coordinateY };\n// \t        }\n// \t    } catch (e) {\n// \t    }\n// \t    try {\n// \t        if (items[item.coordinateX][item.coordinateY + 1] === 0) {\n// \t            return { coordinateX: item.coordinateX, coordinateY: item.coordinateY + 1 };\n// \t        }\n// \t    } catch (e) {\n// \t    }\n// \t    try {\n// \t        if (items[item.coordinateX][item.coordinateY - 1] === 0) {\n// \t            return { coordinateX: item.coordinateX, coordinateY: item.coordinateY - 1 };\n// \t        }\n// \t    } catch (e) {\n// \t    }\n// \t    return false;\n// \t}\n// \tgetRandom() {\n// \t\tthis._mtx = this._model.getMatrix();\n// \t    let arr = this._mtx.flat();\n// \t    let temp = 0;\n// \t    let j = 0;\n// \t    for(let i = arr .length - 1; i > 0; i--){\n// \t        j = Math.floor(Math.random()* i + 0.5);\n// \t        temp = arr[j];\n// \t        arr[j] = arr[i];\n// \t        arr[i] = temp;\n// \t    }\n// \t    this._mtx = arr.map((_, i, a) => a.slice(i * 4, i * 4 + 4)).filter((el) => el.length);\n// \t}\n// \tshuffle() {\n// \t\tthis.getRandom();\n// \t    this._model.setMatrix(this._mtx);\n// \t    this._view.deleteItems();    \n// \t    this.sendMatrixToView();\n// \t}\n// \twin() {\n// \t\tconst arr = this._mtx;\n// \t    const matrix = this._model.getMatrix();\n// \t    for(let i = 0; i < arr.length; i++ ) {\n// \t        for(let j = 0; j < arr.length; j++) {\n// \t            if(arr[i][j] === matrix[i][j]) {\n// \t                alert('You did it bro!!!!');\n// \t            }\n// \t        }\n// \t    }\n// \t}\n// \tgetVictory() {\n// \t\tconst testMatrix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];\n// \t    let testArray = this._mtx.flat();\n// \t    let test = JSON.stringify(testMatrix);\n// \t    let defaultArr = JSON.stringify(testArray);\n// \t    if(test === defaultArr) {\n// \t        setTimeout(function(){ alert('YOU DID IT BROOO!!!!'); }, 200);\n// \t    }\n// \t}\n// }\n\n//# sourceURL=webpack:///./src/Controller.js?");

/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Model() {\n  this._matrix = [];\n  this._box = {\n    coordinateX: 0,\n    coordinateY: 0,\n    value: 0\n  };\n  this._zeroBox = {\n    coordinateX: 0,\n    coordinateY: 0,\n    value: 0\n  };\n}\n\n;\n\nModel.prototype.getMatrix = function () {\n  return this._matrix;\n};\n\nModel.prototype.setMatrix = function (array) {\n  this._matrix = array;\n  console.log('model set matrix', this._matrix);\n};\n\nModel.prototype.findIndex = function (value) {\n  this._box.value = Number(value);\n\n  for (var i = 0; i < this._matrix.length; i++) {\n    for (var j = 0; j < this._matrix.length; j++) {\n      if (this._matrix[i][j] === this._box.value) {\n        this._box.coordinateX = i;\n        this._box.coordinateY = j;\n        return this._box;\n      }\n    }\n  }\n};\n\nModel.prototype.swapElems = function (elem1, elem2) {\n  this._box = elem1;\n  this._zeroBox = elem2;\n  var _ref = [this._matrix[this._zeroBox.coordinateX][this._zeroBox.coordinateY], this._matrix[this._box.coordinateX][this._box.coordinateY]];\n  this._matrix[this._box.coordinateX][this._box.coordinateY] = _ref[0];\n  this._matrix[this._zeroBox.coordinateX][this._zeroBox.coordinateY] = _ref[1];\n  console.log(this._matrix);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model); // class Model{\n// \tconstructor() {\n// \t\tthis._matrix = [\n// \t        [1, 2, 3, 4],\n// \t        [5, 6, 7, 8],\n// \t        [9, 10, 11, 12],\n// \t        [13, 14, 15, 0]\n// \t    ];\n// \t    this._box = {\n// \t        coordinateX: 0,\n// \t        coordinateY: 0,\n// \t        value: 0\n// \t    };\n// \t    this._zeroBox = {\n// \t        coordinateX: 0,\n// \t        coordinateY: 0,\n// \t        value: 0\n//         };\n// \t}\n// \tgetMatrix() {\n// \t\treturn this._matrix;\n// \t}\n// \tsetMatrix(array) {\n// \t\tthis._matrix = array;\n// \t}\n// \tfindIndex(value) {\n// \t\tthis._box.value = Number(value);\n// \t    for(let i = 0; i < this._matrix.length; i++) {\n// \t        for(let j = 0; j < this._matrix.length; j++) {\n// \t            if(this._matrix[i][j] === this._box.value) {\n// \t                this._box.coordinateX = i;\n// \t                this._box.coordinateY = j;\n// \t                return this._box;\n// \t            }\n// \t        }\n// \t    }\n// \t}\n// \tswapElems(elem1, elem2) {\n// \t\tthis._box = elem1;\n//     \tthis._zeroBox = elem2;\n// \t    [\n// \t        this._matrix[this._box.coordinateX][this._box.coordinateY],\n// \t        this._matrix[this._zeroBox.coordinateX][this._zeroBox.coordinateY]\n// \t    ] =\n// \t    [\n// \t        this._matrix[this._zeroBox.coordinateX][this._zeroBox.coordinateY],\n// \t        this._matrix[this._box.coordinateX][this._box.coordinateY]\n// \t    ]\n// \t} \n// }\n\n//# sourceURL=webpack:///./src/Model.js?");

/***/ }),

/***/ "./src/REST.js":
/*!*********************!*\
  !*** ./src/REST.js ***!
  \*********************/
/*! exports provided: sendGetRequest, sendPutRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendGetRequest\", function() { return sendGetRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendPutRequest\", function() { return sendPutRequest; });\nvar sendGetRequest = function sendGetRequest(cb) {\n  var xhr = new XMLHttpRequest();\n  xhr.open(\"GET\", \"/getItems\");\n  xhr.setRequestHeader(\"Content-type\", \"application-json\");\n  xhr.send();\n\n  xhr.onload = function () {\n    if (xhr.status != 200) {\n      console.log(xhr.statusText);\n    } else {\n      var data = JSON.parse(xhr.response);\n      console.log(data);\n      cb(data);\n    }\n  };\n};\nvar sendPutRequest = function sendPutRequest(data) {\n  var xhr = new XMLHttpRequest();\n  var dataInJson = JSON.stringify(data);\n  xhr.open(\"PUT\", \"/setItems\");\n  xhr.setRequestHeader(\"Content-type\", \"application-json\");\n  xhr.send(dataInJson);\n};\n\n//# sourceURL=webpack:///./src/REST.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_fifteen_second_dark_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/fifteen_second-dark_bg.jpg */ \"./src/images/fifteen_second-dark_bg.jpg\");\n/* harmony import */ var _images_light_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/light-bg.jpg */ \"./src/images/light-bg.jpg\");\n/* harmony import */ var _images_fifteen_second_light_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/fifteen_second_light_bg.jpg */ \"./src/images/fifteen_second_light_bg.jpg\");\n\n\n\n\nfunction View() {\n  this._root = document.querySelector('div#root');\n  this._gameBlock = null;\n  this._gameNumbers = null;\n  this.mix_button = null;\n  this.play_button = null;\n}\n\nView.prototype.init = function () {\n  var container_welcome_page = createDiv({\n    \"class\": 'container_welcome_page',\n    id: 'welcome'\n  });\n  var container_game_page = createDiv({\n    \"class\": 'container_game_page',\n    id: 'gameContainer'\n  });\n  var welcome_page_bgColor = createDiv({\n    \"class\": 'welcome_page_bgColor'\n  });\n  var color_block = createDiv({\n    \"class\": 'color_block'\n  });\n  var light = createButton({\n    \"class\": 'color_block_light color'\n  });\n  var dark = createButton({\n    \"class\": 'color_block_dark color'\n  });\n  var white = createButton({\n    \"class\": 'color_block_white color'\n  });\n  var page_heading_light = createHeading({\n    \"class\": 'page_heading_light'\n  });\n  this.play_button = createButton({\n    \"class\": 'play_button',\n    id: 'play_button'\n  });\n  var mixDiv = createDiv({\n    \"class\": 'mixDiv'\n  });\n  light.innerHTML = 'Colorful mode';\n  dark.innerHTML = 'Dark mode';\n  this._gameBlock = createDiv({\n    \"class\": 'game_dark'\n  });\n  white.innerHTML = 'White mode';\n  page_heading_light.innerHTML = 'WELCOME TO FIFTEEN!';\n  this.play_button.innerHTML = 'PLAY';\n  this.mix_button = createButton({\n    \"class\": 'mix_button',\n    id: 'mix_button'\n  });\n  this.mix_button.innerHTML = 'MIX';\n  container_game_page.append(mixDiv);\n  mixDiv.append(this.mix_button);\n  container_game_page.append(this._gameBlock);\n\n  this._root.append(container_welcome_page);\n\n  this._root.append(container_game_page);\n\n  color_block.append(light);\n  color_block.append(dark);\n  color_block.append(white);\n  container_welcome_page.append(page_heading_light);\n  container_welcome_page.append(this.play_button);\n  container_welcome_page.append(color_block);\n  container_welcome_page.append(welcome_page_bgColor);\n  this.visible();\n  this.lightMode();\n  this.dark();\n  this.white();\n};\n\nView.prototype.dark = function () {\n  var dark = document.querySelector('.color_block_dark');\n  dark.addEventListener('click', function () {\n    document.querySelector('.play_button').style.backgroundColor = '#ffffff';\n    document.querySelector('.play_button').style.color = '#000000';\n    document.querySelector('.container_welcome_page').style.background = '#000';\n    document.querySelector('.page_heading_light').style.color = '#fff';\n    document.querySelector('.container_game_page').style.backgroundImage = \"url(\".concat(_images_fifteen_second_light_bg_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \")\");\n  });\n};\n\nView.prototype.white = function () {\n  var white = document.querySelector('.color_block_white');\n  white.addEventListener('click', function () {\n    document.querySelector('.container_welcome_page').style.background = '#ffffff';\n    document.querySelector('.play_button').style.backgroundColor = '#000000';\n    document.querySelector('.play_button').style.color = '#ffffff';\n    document.querySelector('.page_heading_light').style.color = '#000000';\n    document.querySelector('.container_game_page').style.backgroundImage = \"url(\".concat(_images_fifteen_second_dark_bg_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \")\");\n    document.querySelector('.mix_button').style.backgroundColor = '#000000';\n    document.querySelector('.mix_button').style.color = '#ffffff';\n    document.querySelector('.game_dark').style.backgroundColor = '#000000';\n    document.querySelector('.game_dark').style.color = '#ffffff';\n    document.querySelector('.game_dark').style.border = '1px solid #ffffff';\n  });\n}; // View.prototype.clickPlay = function(cb) {\n//     this.play_button.onclick = function() {\n//         cb();\n//     }\n// }\n\n\nView.prototype.lightMode = function () {\n  var light = document.querySelector('.color_block_light');\n  light.addEventListener('click', function () {\n    document.querySelector('.mix_button').style.backgroundColor = 'rgba(255, 47, 47, 0.31)';\n    document.querySelector('.mix_button').style.color = '#ffffff';\n    document.querySelector('.game_dark').style.backgroundColor = 'rgba(255, 47, 47, 0.31)';\n    document.querySelector('.game_dark').style.color = '#ffffff';\n    document.querySelector('.play_button').style.backgroundColor = 'rgb(226, 25, 25)';\n    document.querySelector('.play_button').style.color = '#ffffff';\n    document.querySelector('.container_game_page').style.backgroundImage = \"url(\".concat(_images_light_bg_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \")\");\n    document.querySelector('.container_game_page').style.backgroundSize = 'cover';\n    document.querySelector('.container_welcome_page').style.background = 'linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)';\n    document.querySelector('.page_heading_light').style.color = '#ffffff';\n    document.querySelector('.game_blocks').classList.add('game_light_background');\n  });\n};\n\nView.prototype.visible = function () {\n  var play = document.querySelector('#play_button');\n  play.addEventListener('click', function () {\n    document.querySelector('#gameContainer').style.display = 'flex';\n    document.querySelector('.container_welcome_page').style.display = 'none';\n  });\n};\n\nvar createDiv = function createDiv(params) {\n  var div = document.createElement('div');\n  div.setAttribute('class', params[\"class\"]);\n  params.id && (div.id = params.id);\n  params.title && (div.title = params.title);\n  params.textContent && (div.textContent = params.textContent);\n  params.inner && (div.innerHTML = params.inner);\n  return div;\n};\n\nvar createHeading = function createHeading(params) {\n  var heading = document.createElement('h1');\n  heading.setAttribute('class', params[\"class\"]);\n  params.inner && (heading.innerHTML = params.inner);\n  return heading;\n};\n\nvar createButton = function createButton(params) {\n  var button = document.createElement('button');\n  button.setAttribute('class', params[\"class\"]);\n  params.id && (button.id = params.id);\n  params.inner && (button.innerHTML = params.inner);\n  params.onclick && (button.onclick = params.onclick);\n  return button;\n};\n\nView.prototype.drawMatrix = function (element) {\n  var gameNumbers = document.createElement('div');\n  gameNumbers.innerHTML = element;\n  gameNumbers.setAttribute('class', 'game_blocks');\n\n  if (!element) {\n    gameNumbers.setAttribute('class', 'game_blocks zero');\n  }\n\n  this._gameBlock.append(gameNumbers);\n};\n\nView.prototype.sendValue = function (callback) {\n  document.addEventListener('click', function (evt) {\n    var innerText = evt.target.innerText;\n    callback(innerText);\n  }, false);\n};\n\nView.prototype.deleteItems = function () {\n  var items = document.querySelectorAll('.game_blocks');\n  items.forEach(function (item) {\n    item.remove();\n  });\n};\n\nView.prototype.gameShuffle = function (cb) {\n  this.mix_button.addEventListener('click', function (evt) {\n    var innerText = evt.target.innerText;\n    cb(innerText);\n  }, false);\n};\n\nView.prototype.gameShuffle = function (cb) {\n  this.mix_button.addEventListener('click', function (evt) {\n    var array = evt.target.array;\n    cb(array);\n  }, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View); // import fifteenSecondDarkBg from './images/fifteen_second-dark_bg.jpg';\n// import lightBg from './images/light-bg.jpg';\n// import fifteenSecondLightBg from './images/fifteen_second_light_bg.jpg';\n// class View{\n// \tconstructor() {\n// \t\tthis._root = document.querySelector('div#root');\n// \t    this._gameBlock = null;\n// \t    this._gameNumbers = null;\n// \t    this.mix_button = null;\n// \t}\n// \tinit() {\n// \t\tconst container_welcome_page = createDiv({class: 'container_welcome_page', id: 'welcome'});\n// \t    const container_game_page = createDiv({class: 'container_game_page', id: 'gameContainer'});\n// \t    const welcome_page_bgColor = createDiv({class: 'welcome_page_bgColor'});\n// \t    const color_block = createDiv({class: 'color_block'});\n// \t    const light = createButton({class: 'color_block_light color'});\n// \t    const dark = createButton({class: 'color_block_dark color'});\n// \t    const white = createButton({class: 'color_block_white color'});\n// \t    const page_heading_light = createHeading({class: 'page_heading_light'});\n// \t    const play_button = createButton({class: 'play_button', id: 'play_button'});\n// \t    const mixDiv = createDiv({class: 'mixDiv'});\n// \t    light.innerHTML = 'Colorful mode';\n// \t    dark.innerHTML = 'Dark mode';\n// \t    this._gameBlock = createDiv({class: 'game_dark'});\n// \t    white.innerHTML = 'White mode';\n// \t    page_heading_light.innerHTML = 'WELCOME TO FIFTEEN!';\n// \t    play_button.innerHTML = 'PLAY';\n// \t    this.mix_button = createButton({class: 'mix_button', id: 'mix_button'});\n// \t    this.mix_button.innerHTML = 'MIX';\n// \t    container_game_page.append(mixDiv);\n// \t    mixDiv.append(this.mix_button);\n// \t    container_game_page.append(this._gameBlock);\n// \t    this._root.append(container_welcome_page);\n// \t    this._root.append(container_game_page);\n// \t    color_block.append(light);\n// \t    color_block.append(dark);\n// \t    color_block.append(white);\n// \t    container_welcome_page.append(page_heading_light);\n// \t    container_welcome_page.append(play_button);\n// \t    container_welcome_page.append(color_block);\n// \t    container_welcome_page.append(welcome_page_bgColor);\n// \t    this.visible();\n// \t    this.lightMode();\n// \t    this.dark();\n// \t    this.white();\n// \t}\n// \tdark() {\n// \t\tconst dark = document.querySelector('.color_block_dark');\n//     \tdark.addEventListener('click', () => {\n// \t        document.querySelector('.play_button').style.backgroundColor = '#ffffff';\n// \t        document.querySelector('.play_button').style.color = '#000000';\n// \t        document.querySelector('.container_welcome_page').style.background = '#000'; \n// \t        document.querySelector('.page_heading_light').style.color = '#fff';\n// \t        document.querySelector('.container_game_page').style.backgroundImage = `url(${fifteenSecondLightBg})`; \n//     \t})\n// \t}\n// \twhite() {\n// \t\tconst white = document.querySelector('.color_block_white');\n// \t    white.addEventListener('click', () => {\n// \t        document.querySelector('.container_welcome_page').style.background = '#ffffff';\n// \t        document.querySelector('.play_button').style.backgroundColor = '#000000';\n// \t        document.querySelector('.play_button').style.color = '#ffffff';\n// \t        document.querySelector('.page_heading_light').style.color = '#000000';\n// \t        document.querySelector('.container_game_page').style.backgroundImage = `url(${fifteenSecondDarkBg})`;\n// \t        document.querySelector('.mix_button').style.backgroundColor = '#000000';\n// \t        document.querySelector('.mix_button').style.color = '#ffffff';\n// \t        document.querySelector('.game_dark').style.backgroundColor = '#000000';\n// \t        document.querySelector('.game_dark').style.color = '#ffffff';\n// \t        document.querySelector('.game_dark').style.border = '1px solid #ffffff';\n// \t    })\n// \t}\n// \tlightMode() {\n// \t\tconst light = document.querySelector('.color_block_light');\n// \t    light.addEventListener('click', () => {\n// \t        document.querySelector('.mix_button').style.backgroundColor = 'rgba(255, 47, 47, 0.31)';\n// \t        document.querySelector('.mix_button').style.color = '#ffffff';\n// \t        document.querySelector('.game_dark').style.backgroundColor = 'rgba(255, 47, 47, 0.31)';\n// \t        document.querySelector('.game_dark').style.color = '#ffffff';\n// \t        document.querySelector('.play_button').style.backgroundColor = 'rgb(226, 25, 25)';\n// \t        document.querySelector('.play_button').style.color = '#ffffff';\n// \t        document.querySelector('.container_game_page').style.backgroundImage = `url(${lightBg})`;\n// \t        document.querySelector('.container_game_page').style.backgroundSize = 'cover';\n// \t        document.querySelector('.container_welcome_page').style.background = 'linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)';\n// \t        document.querySelector('.page_heading_light').style.color = '#ffffff';\n// \t        document.querySelector('.game_blocks').classList.add('game_light_background');\n// \t    })\n// \t}\n// \tvisible() {\n// \t\tconst play = document.querySelector('#play_button');\n// \t    play.addEventListener('click', () => {\n// \t        document.querySelector('#gameContainer').style.display = 'flex';\n// \t        document.querySelector('.container_welcome_page').style.display = 'none';\n// \t    });\n// \t}\n// \tdrawMatrix(element) {\n// \t\tlet gameNumbers = document.createElement('div');\n// \t    gameNumbers.innerHTML = element;\n// \t    gameNumbers.setAttribute('class', 'game_blocks');\n// \t    if (!element) {\n// \t        gameNumbers.setAttribute('class', 'game_blocks zero')\n// \t    }\n// \t    this._gameBlock.append(gameNumbers);\n// \t}\n// \tsendValue(callback) {\n// \t\tdocument.addEventListener('click', evt => {\n// \t        const { innerText } = evt.target;\n// \t        callback(innerText);\n// \t    }, false);\n// \t}\n// \tdeleteItems() {\n// \t\tconst items = document.querySelectorAll('.game_blocks');\n//     \titems.forEach(item => {\n//         \titem.remove();\n//     \t})\n// \t}\n// \tgameShuffle(cb) {\n// \t\tthis.mix_button.addEventListener('click', evt => {\n//         \tconst { innerText } = evt.target;\n//         \tcb(innerText);\n//     \t}, false)\n// \t}\n// }\n// const createDiv = params => {\n//     const div = document.createElement('div');\n//     div.setAttribute('class', params.class);\n//     params.id && (div.id = params.id);\n//     params.title && (div.title = params.title);\n//     params.textContent && (div.textContent = params.textContent);\n//     params.inner && (div.innerHTML = params.inner);\n//     return div;\n// }\n// const createHeading = params => {\n//     const heading = document.createElement('h1');\n//     heading.setAttribute('class', params.class);\n//     params.inner && (heading.innerHTML = params.inner);\n//     return heading;\n// }\n// const createButton = params => {\n//     const button = document.createElement('button');\n//     button.setAttribute('class',params.class);\n//     params.id && (button.id = params.id);\n//     params.inner && (button.innerHTML = params.inner);\n//     params.onclick && (button.onclick = params.onclick);\n//     return button;\n// }\n\n//# sourceURL=webpack:///./src/View.js?");

/***/ }),

/***/ "./src/images/fifteen_second-dark_bg.jpg":
/*!***********************************************!*\
  !*** ./src/images/fifteen_second-dark_bg.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/fifteen_second-dark_bg.jpg\");\n\n//# sourceURL=webpack:///./src/images/fifteen_second-dark_bg.jpg?");

/***/ }),

/***/ "./src/images/fifteen_second_light_bg.jpg":
/*!************************************************!*\
  !*** ./src/images/fifteen_second_light_bg.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/fifteen_second_light_bg.jpg\");\n\n//# sourceURL=webpack:///./src/images/fifteen_second_light_bg.jpg?");

/***/ }),

/***/ "./src/images/light-bg.jpg":
/*!*********************************!*\
  !*** ./src/images/light-bg.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/light-bg.jpg\");\n\n//# sourceURL=webpack:///./src/images/light-bg.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ \"./src/Model.js\");\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.js */ \"./src/View.js\");\n/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller.js */ \"./src/Controller.js\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction initialize() {\n  var model = new _Model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var view = new _View_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  var controller = new _Controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](model, view);\n  controller.init();\n}\n\ninitialize();\n\n//# sourceURL=webpack:///./src/index.js?");

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