module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "a7bf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
// EXTERNAL MODULE: ./src/lib/index.css
var lib = __webpack_require__("a7bf");

// CONCATENATED MODULE: ./src/lib/index.js




var lib_Signature = /*#__PURE__*/function () {
  function Signature(nodeId) {
    _classCallCheck(this, Signature);

    this.img = '';
    this.nodeId = nodeId;
  } //获取签章图片


  _createClass(Signature, [{
    key: "getSignatureImg",
    value: function getSignatureImg() {
      this.img = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fexp-picture.cdn.bcebos.com%2Fd47cb624d8e9ccd2f4d6afec0e40102a05e2c905.jpg%3Fx-bce-process%3Dimage%2Fresize%2Cm_lfit%2Cw_500%2Climit_1&refer=http%3A%2F%2Fexp-picture.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652496565&t=b74e99b2c770fb785fd717e6255dc4ac";
    } //页面签章

  }, {
    key: "signature",
    value: function signature() {
      this.getSignatureImg();
      var node = document.getElementById("".concat(this.nodeId));

      if (node.querySelectorAll("#signature_node").length) {
        toast("已存在签章", 1000);
      } else {
        var boxNode = document.createElement("div");
        boxNode.setAttribute("id", 'signature_node');
        var imgNode = document.createElement("img");
        imgNode.className = "signature_img";
        imgNode.setAttribute("src", this.img);
        imgNode.setAttribute("draggable", "false");
        boxNode.appendChild(imgNode);
        node.appendChild(boxNode); //阻止点击事件冒泡

        imgNode.onclick = function (e) {
          var event = e || window.event;

          if (event.stopPropagation) {
            event.stopPropagation();
          } else {
            event.cancelBubble = true;
          }
        };

        imgNode.addEventListener("mousedown", function (divEvent) {
          document.onmousemove = function (ev) {
            imgNode.style.left = ev.clientX - divEvent.offsetX - node.offsetLeft + "px";
            imgNode.style.top = ev.clientY - divEvent.offsetY - node.offsetHeight - node.offsetTop + "px";
          };

          imgNode.onmouseup = function () {
            document.onmousemove = null;
          };

          document.onmouseup = function () {
            document.onmousemove = null;
          };
        });
      }
    }
  }]);

  return Signature;
}();

function toast(text, time) {
  var toastArr = document.getElementsByClassName('toast_box');

  if (!toastArr.length) {
    var toast_box = document.createElement('div');
    toast_box.className = "toast_box";

    var _toast = document.createElement('p');

    _toast.setAttribute("id", "toast");

    document.body.appendChild(toast_box);
    toast_box.appendChild(_toast);
    _toast.innerHTML = text;
    toast_box.style.animation = 'show 0.2s';
    toast_box.style.display = 'inline-block';
    var timer = setTimeout(function () {
      toast_box.style.animation = 'hide 0.2s';
      clearTimeout(timer);
      var timerinner = setTimeout(function () {
        document.body.removeChild(toast_box);
        clearTimeout(timerinner);
      }, 200);
    }, time);
  }
}

window.Signature = lib_Signature;
/* harmony default export */ var src_lib = (lib_Signature);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_lib);



/***/ })

/******/ });
//# sourceMappingURL=signature-web.common.js.map