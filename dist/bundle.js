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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wrapper_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper.jsx */ \"./src/wrapper.jsx\");\n/* harmony import */ var _login_form_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-form.jsx */ \"./src/login-form.jsx\");\n/* harmony import */ var _user_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.jsx */ \"./src/user.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      user: {\n        userName: null,\n        photo: null\n      }\n    };\n    _this.setUser = _this.setUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.removeUser = _this.removeUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"removeUser\",\n    value: function removeUser() {\n      this.setState({\n        user: {\n          userName: null,\n          photo: null\n        }\n      });\n    }\n  }, {\n    key: \"setUser\",\n    value: function setUser(userName, photo) {\n      this.setState({\n        user: {\n          userName: userName,\n          photo: photo\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(this.state);\n      return React.createElement(_wrapper_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, !this.state.user.photo && !this.state.user.userName && React.createElement(_login_form_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        setUser: this.setUser\n      }), this.state.user.photo && this.state.user.userName && React.createElement(_user_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        logOut: this.removeUser,\n        photo: this.state.user.photo,\n        userName: this.state.user.userName\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./src/app.jsx?");

/***/ }),

/***/ "./src/button.jsx":
/*!************************!*\
  !*** ./src/button.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Button(props) {\n  return React.createElement(\"button\", {\n    className: props.className,\n    id: props.id,\n    type: \"submit\"\n  }, props.children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/button.jsx?");

/***/ }),

/***/ "./src/input.jsx":
/*!***********************!*\
  !*** ./src/input.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction Input(props) {\n  return React.createElement(\"div\", null, React.createElement(\"input\", _extends({\n    className: \"block__input\"\n  }, props)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n//# sourceURL=webpack:///./src/input.jsx?");

/***/ }),

/***/ "./src/login-form.jsx":
/*!****************************!*\
  !*** ./src/login-form.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.jsx */ \"./src/button.jsx\");\n/* harmony import */ var _input_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.jsx */ \"./src/input.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar URL_SEND = \"https://us-central1-mercdev-academy.cloudfunctions.net/login\";\nvar SUCCESS_STATUS = 200;\n\nvar LoginForm =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(LoginForm, _React$Component);\n\n  function LoginForm(props) {\n    var _this;\n\n    _classCallCheck(this, LoginForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));\n    _this.state = {\n      email: \"user@example.com\",\n      password: \"mercdev\",\n      isFormDisabled: false,\n      isLoginError: false\n    };\n    _this.login = _this.login.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.request = _this.request.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleChangeEmail = _this.handleChangeEmail.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleChangePassword = _this.handleChangePassword.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(LoginForm, [{\n    key: \"handleChangeEmail\",\n    value: function handleChangeEmail(evt) {\n      this.setState({\n        email: evt.target.value\n      });\n    }\n  }, {\n    key: \"handleChangePassword\",\n    value: function handleChangePassword(evt) {\n      this.setState({\n        password: evt.target.value\n      });\n    }\n  }, {\n    key: \"request\",\n    value: function request(url, email, password) {\n      return new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n        var json = {\n          email: email,\n          password: password\n        };\n        xhr.responseType = \"json\";\n        xhr.open(\"POST\", url);\n        xhr.setRequestHeader(\"Content-Type\", \"application/json\");\n        xhr.send(JSON.stringify(json));\n\n        xhr.onload = function () {\n          if (xhr.status === SUCCESS_STATUS) {\n            resolve(xhr.response);\n          } else {\n            reject(\"Произошла ошибка. Код ответа: \" + xhr.status);\n          }\n        };\n\n        xhr.onerror = function () {\n          var errorText = \"Произошла ошибка соединения\";\n          reject(errorText);\n        };\n      });\n    }\n  }, {\n    key: \"login\",\n    value: function login(evt) {\n      var _this2 = this;\n\n      evt.preventDefault();\n      this.request(URL_SEND, this.state.email, this.state.password).then(function (response) {\n        _this2.props.setUser(response.name, response.photoUrl);\n      }).catch(function (text) {\n        _this2.setState({\n          isFormDisabled: false,\n          isLoginError: true,\n          email: \"\",\n          password: \"\"\n        });\n\n        alert(text);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"h2\", {\n        className: \"block__text block__text--title\"\n      }, \"Log In\"), React.createElement(\"form\", {\n        className: \"block__form\",\n        id: \"form\",\n        method: \"post\",\n        onSubmit: this.login\n      }, React.createElement(_input_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        name: \"email\",\n        id: \"email\",\n        type: \"email\",\n        placeholder: \"E-Mail\",\n        onChange: this.handleChangeEmail,\n        value: this.state.email\n      }), React.createElement(_input_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        name: \"password\",\n        id: \"password\",\n        type: \"password\",\n        placeholder: \"Password\",\n        onChange: this.handleChangePassword,\n        value: this.state.password\n      }), this.state.isLoginError && React.createElement(\"p\", {\n        className: \"block__error\"\n      }, \"E-Mail or password is incorrect\"), React.createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        className: \"block__button\",\n        id: \"login\"\n      }, \"Login\")));\n    }\n  }]);\n\n  return LoginForm;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\n//# sourceURL=webpack:///./src/login-form.jsx?");

/***/ }),

/***/ "./src/user.jsx":
/*!**********************!*\
  !*** ./src/user.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.jsx */ \"./src/button.jsx\");\n\n\nfunction User(props) {\n  return React.createElement(\"div\", null, React.createElement(\"img\", {\n    className: \"block__avatar\",\n    id: \"img\",\n    alt: \"avatar\",\n    src: props.photo\n  }), React.createElement(\"p\", {\n    className: \"block__text block__text--name\",\n    id: \"user\"\n  }, props.userName), React.createElement(\"form\", {\n    className: \"block__form-logout\",\n    id: \"form-logout\",\n    onSubmit: props.logOut\n  }, React.createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    className: \"block__button block__button--logout\",\n    id: \"login\"\n  }, \"Logout\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/user.jsx?");

/***/ }),

/***/ "./src/wrapper.jsx":
/*!*************************!*\
  !*** ./src/wrapper.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Wrapper(props) {\n  return React.createElement(\"div\", null, React.createElement(\"img\", {\n    className: \"logo\",\n    alt: \"logo\",\n    src: \"img/logo.svg\"\n  }), React.createElement(\"section\", {\n    className: \"block\"\n  }, props.children));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\n//# sourceURL=webpack:///./src/wrapper.jsx?");

/***/ })

/******/ });