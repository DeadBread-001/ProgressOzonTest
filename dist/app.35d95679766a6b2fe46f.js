/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/progressBar/progressBar.js":
/*!***************************************************!*\
  !*** ./src/components/progressBar/progressBar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _state = /*#__PURE__*/new WeakMap();
/** Класс, представляющий Прогресс-бар. */
var ProgressBar = /*#__PURE__*/function () {
  /**
   * Создает Прогресс-бар.
   * @param {HTMLElement} parentNode - Родительский узел для размещения Прогресс-бара.
   * @param {string} [progressBarTitle="Progress"] - Заголовок Прогресс-бара (отображается в верхнем левом углу).
   * @param {object} [initialState] - Начальное состояние Прогресс-бара.
   */
  function ProgressBar(parentNode) {
    var _this = this;
    var progressBarTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Progress";
    var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      value: 0,
      isAnimated: false,
      isHidden: false
    };
    _classCallCheck(this, ProgressBar);
    _classPrivateFieldInitSpec(this, _state, {
      value: 0,
      isAnimated: false,
      isHidden: false
    });
    _classPrivateFieldSet(_state, this, _objectSpread({}, initialState));
    if (!parentNode || !(parentNode instanceof HTMLElement)) {
      return;
    }
    var container = createStyledDiv("container");
    container.appendChild(createStyledDiv("title", progressBarTitle));
    var progressBar = createStyledDiv("progressBar");
    var progressCircleClasses = ["progressBar__circle"];
    if (_classPrivateFieldGet(_state, this).isHidden) {
      progressCircleClasses.push("progressBar__circle-hidden");
    }
    if (_classPrivateFieldGet(_state, this).isAnimated) {
      progressCircleClasses.push("progressBar__circle-animated");
    }
    var progressCircle = createStyledDiv(progressCircleClasses);
    progressBar.appendChild(progressCircle);
    progressBar.appendChild(createSettingsSection(_classPrivateFieldGet(_state, this).value, _classPrivateFieldGet(_state, this).isAnimated, _classPrivateFieldGet(_state, this).isHidden));
    container.appendChild(progressBar);
    parentNode.appendChild(container);
    this.addProgressHandler();
    if (_classPrivateFieldGet(_state, this).value) {
      this.setProgress(_classPrivateFieldGet(_state, this).value);
    }
    window.addEventListener("orientationchange", function () {
      progressBar.style.flexDirection = screen.orientation.type.match(/\w+/)[0] === "landscape" ? "row" : "column";
    });
    this.addClickHandler("#animate", function () {
      return _this.toggleAnimation();
    });
    this.addClickHandler("#hide", function () {
      return _this.toggleVisibility();
    });
  }

  /**
   * Устанавливает новое значение прогресса.
   * @param {number} newValue - Новое значение прогресса.
   * @return {void}
   */
  return _createClass(ProgressBar, [{
    key: "setProgress",
    value: function setProgress(newValue) {
      var valueInputField = document.querySelector("#value");
      valueInputField.value = newValue;
      _classPrivateFieldGet(_state, this).value = newValue;
      valueInputField.dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }

    /**
     * Переключает состояние анимации прогресса (вращение).
     */
  }, {
    key: "toggleAnimation",
    value: function toggleAnimation() {
      _classPrivateFieldGet(_state, this).isAnimated = !_classPrivateFieldGet(_state, this).isAnimated;
      toggleClass(".progressBar__circle", "progressBar__circle-animated");
      var animateToggle = document.querySelector("#animate");
      if (animateToggle) {
        animateToggle.checked = _classPrivateFieldGet(_state, this).isAnimated;
      }
    }

    /**
     * Переключает видимость прогресс-бара.
     */
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility() {
      _classPrivateFieldGet(_state, this).isHidden = !_classPrivateFieldGet(_state, this).isHidden;
      toggleClass(".progressBar__circle", "progressBar__circle-hidden");
      var hideToggle = document.querySelector("#hide");
      if (hideToggle) {
        hideToggle.checked = _classPrivateFieldGet(_state, this).isHidden;
      }
    }

    /**
     * Добавляет обработчик прогресса.
     */
  }, {
    key: "addProgressHandler",
    value: function addProgressHandler() {
      var valueInputField = document.querySelector("#value");
      var progressCircle = document.querySelector(".progressBar__circle");
      var animationId;
      var targetValue = 0;
      var currentValue = 0;
      var animate = function animate() {
        if (currentValue !== targetValue) {
          currentValue += (targetValue - currentValue) / 10; // Smooth animation
          progressCircle.style.setProperty("--progress", "".concat(currentValue));
          animationId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationId);
        }
      };
      valueInputField.addEventListener("input", function (e) {
        var newInputValue = validateInput(e.target.value);
        e.target.value = newInputValue;
        targetValue = +newInputValue;
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        animationId = requestAnimationFrame(animate);
      });
    }

    /**
     * Добавляет обработчик клика по элементу.
     * @param {string} selector - Селектор элемента.
     * @param {function} handler - Функция-обработчик клика.
     */
  }, {
    key: "addClickHandler",
    value: function addClickHandler(selector, handler) {
      var clickedNode = document.querySelector(selector);
      clickedNode.addEventListener("click", handler);
    }
  }]);
}();

/**
 * Проверяет строку на число от 0 до 100.
 * @param {string} inputString - Строка для проверки.
 * @return {number} Число от 0 до 100 или 0, если не число.
 */
function validateInput(inputString) {
  var trimmedInput = inputString.trim();
  if (trimmedInput === "" || isNaN(trimmedInput)) {
    return 0;
  }
  var value = parseInt(trimmedInput);
  return Math.max(0, Math.min(100, value));
}

/**
 * Добавляет или удаляет класс у элемента по селектору.
 * @param {string} selector - Селектор элемента.
 * @param {string} className - Имя класса.
 */
function toggleClass(selector, className) {
  var searchingNode = document.querySelector(selector);
  searchingNode.classList.toggle(className);
}

/**
 * Создает секцию настроек.
 * @param {number} value - Начальное значение прогресса.
 * @param {boolean} isAnimated - Флаг анимации.
 * @param {boolean} isHidden - Флаг видимости.
 * @return {HTMLElement} Элемент секции настроек.
 */
function createSettingsSection(value, isAnimated, isHidden) {
  var settings = createStyledDiv(["progressBar__settings", "settings"]);
  settings.appendChild(createInputFieldWithLabel("settings__property", "settings__input", "Value", value, "input", "value"));
  settings.appendChild(createInputFieldWithLabel("settings__property", "settings__checkbox", "Animate", isAnimated, "checkbox", "animate"));
  settings.appendChild(createInputFieldWithLabel("settings__property", "settings__checkbox", "Hide", isHidden, "checkbox", "hide"));
  return settings;
}

/**
 * Создает элемент ввода с текстом.
 * @param {string} className - Класс для обертки ввода.
 * @param {string} inputClassName - Класс для элемента ввода.
 * @param {string} inputText - Текст рядом с полем ввода.
 * @param {number|boolean} inputValue - Значение ввода.
 * @param {string} inputType - Тип ввода.
 * @param {string|number} id - ID ввода.
 * @return {HTMLElement} Элемент ввода с текстом.
 */
function createInputFieldWithLabel() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var inputClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var inputText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var inputValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var inputType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : String(Date.now());
  var inputContainer = createStyledDiv(className);
  var input = document.createElement("input");
  input.type = inputType;
  input.id = id;
  input.classList.add(inputClassName);
  var text = document.createElement("span");
  text.textContent = inputText;
  inputContainer.appendChild(input);
  if (inputType === "checkbox") {
    input.checked = inputValue;
    var label = document.createElement("label");
    label.setAttribute("for", id);
    label.classList.add("toggle");
    inputContainer.appendChild(label);
  } else {
    input.value = inputValue;
  }
  inputContainer.appendChild(text);
  return inputContainer;
}

/**
 * Создает div элемент с классами и текстом.
 * @param {string|string[]} className - Класс или массив классов для div элемента.
 * @param {string} text - Текст внутри div элемента.
 * @return {HTMLElement} Созданный div элемент.
 */
function createStyledDiv() {
  var _divElem$classList;
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var divElem = document.createElement("div");
  (_divElem$classList = divElem.classList).add.apply(_divElem$classList, _toConsumableArray(Array.isArray(className) ? className : [className]));
  divElem.textContent = text;
  return divElem;
}

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_progressBar_progressBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/progressBar/progressBar.js */ "./src/components/progressBar/progressBar.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");


var root = document.querySelector("#root");
new _components_progressBar_progressBar_js__WEBPACK_IMPORTED_MODULE_0__.ProgressBar(root, "Progress");
/******/ })()
;
//# sourceMappingURL=app.35d95679766a6b2fe46f.js.map