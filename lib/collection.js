var lab =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index_collection.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/WX.js":
/*!************************!*\
  !*** ./src/core/WX.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __webpack_require__(/*! ../util/extend.js */ "./src/util/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _index = __webpack_require__(/*! ../util/index.js */ "./src/util/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WX = function () {
    /**
     * @param _shareConfig {object} 分享信息
     * */
    function WX(_shareConfig) {
        var _this = this;

        _classCallCheck(this, WX);

        /*{
            sharePath: window.location.href, //分享地址
            shareImg: "https://cdn.180china.com/plusday/static/resource/share.jpg", //分享图片
            shareTitle: "京东PLUS会员狂欢日", //分享title
            shareDesc: "PLUS会员，抢618元神券礼包；开通PLUS会员，尊享九大特权！" //分享描述
        };*/
        this.shareConfig = _shareConfig || null;

        _index2.default.addScript('//res.wx.qq.com/open/js/jweixin-1.2.0.js', function () {
            /*$.getJSON('https://cdn.180china.com/wx-help/get-wx-config1',function(msg){
              console.log(msg);
            });*/
            _this.getWXConfig();
        }, function () {
            new Error('load jweixin-1.2.0.js error！');
        });
    }

    /**
     * 获取微信分享配置信息
     * */


    _createClass(WX, [{
        key: 'getWXConfig',
        value: function getWXConfig() {
            var _this2 = this;

            $.ajax({
                url: '/wx-help/get-wx-config',
                type: "POST",
                dataType: "json",
                success: function success(config) {
                    //alert(JSON.stringify(msg));
                    _this2.configWxShare(config);
                },
                error: function error(_error) {
                    //alert(JSON.stringify(error));
                }
            });
        }
    }, {
        key: 'configWxShare',
        value: function configWxShare(config) {
            var _this3 = this;

            wx.config({
                debug: false,
                appId: config.appid,
                timestamp: config.timestamp,
                nonceStr: config.nonceStr,
                signature: config.signature,
                jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'openLocation', 'getLocation']
            });
            wx.ready(function () {
                _this3.setShare(_this3.shareConfig);
            });
        }

        /**
         * 设置分享文案
         * */

    }, {
        key: 'setShare',
        value: function setShare(obj) {
            this.shareObj = (0, _extend2.default)(this.shareObj || {}, obj);
            var shareObj = this.shareObj;
            // 分享到朋友圈
            wx.onMenuShareTimeline({
                title: shareObj.shareTitle, // 分享标题
                link: shareObj.sharePath, // 分享链接
                imgUrl: shareObj.shareImg, // 分享图标
                success: function success() {},
                cancel: function cancel() {
                    // 用户取消分享后执行的回调函数
                }
            });
            //分享给朋友
            wx.onMenuShareAppMessage({
                title: shareObj.shareTitle, // 分享标题
                desc: shareObj.shareDesc, // 分享描述
                link: shareObj.sharePath, // 分享链接
                imgUrl: shareObj.shareImg, // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function success() {},
                cancel: function cancel() {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.getLocation({
                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function success(res) {
                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    var speed = res.speed; // 速度，以米/每秒计
                    var accuracy = res.accuracy; // 位置精度

                    alert('获取微信经纬度成功：' + latitude + "---" + longitude);

                    lab.arrayMethods.push({
                        dot: latitude + "," + longitude,
                        gender: '',
                        weChatId: '',
                        ua: window.navigator.userAgent
                    });
                }
            });
        }
    }, {
        key: 'getLocation',
        value: function getLocation(srccess) {}
    }]);

    return WX;
}();

exports.default = WX;
module.exports = exports['default'];

/***/ }),

/***/ "./src/core/collection.js":
/*!********************************!*\
  !*** ./src/core/collection.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (opt) {
    var _search = "";
    var _option = (0, _type.type)(opt) === 'object' ? opt : {
        dot: "longitude,latitude",
        gender: '3',
        weChatId: '000',
        ua: window.navigator.userAgent
    };
    for (var s in _option) {
        _search += s + "=" + _option[s] + "&";
    } //去掉最后一个&符
    _search = _search.slice(0, -1);
    var img = new Image();
    img.src = 'http://monitor.180china.com:8080/monitor/mobile/u100000/p100003/201806131709/00.gif?' + _search;
};

var _type = __webpack_require__(/*! ../util/type.js */ "./src/util/type.js");

// import {longitude,latitude} from './geolocation.js';
module.exports = exports["default"];

/***/ }),

/***/ "./src/core/observer/array.js":
/*!************************************!*\
  !*** ./src/core/observer/array.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arrayMethods = undefined;

var _collection = __webpack_require__(/*! ../collection.js */ "./src/core/collection.js");

var _collection2 = _interopRequireDefault(_collection);

var _lang = __webpack_require__(/*! ../../util/lang.js */ "./src/util/lang.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
var arrayProto = Array.prototype;
var arrayMethods = exports.arrayMethods = Object.create(arrayProto);

var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    (0, _lang.def)(arrayMethods, method, function mutator() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var result = original.apply(this, args);
        switch (method) {
            case 'push':
            case 'unshift':
                (0, _collection2.default)(args);
                break;
        }
        return result;
    });
});

/***/ }),

/***/ "./src/index_collection.js":
/*!*********************************!*\
  !*** ./src/index_collection.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _array = __webpack_require__(/*! ./core/observer/array.js */ "./src/core/observer/array.js");

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _array[key];
    }
  });
});

var _WX = __webpack_require__(/*! ./core/WX.js */ "./src/core/WX.js");

Object.defineProperty(exports, "WX", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WX).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/util/class.js":
/*!***************************!*\
  !*** ./src/util/class.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.hasClass = hasClass;
exports.toggleClass = toggleClass;
/*
* DOM添加类
* @param {HTMLElement} element - DOM元素
* @param {string} className - 类名
* */
function addClass(element, className) {
  var regClassName = new RegExp('(^| )' + className + '( |$)');
  // ( /\s+/ 匹配任何空白符，包括\n,\r,\f,\t,\v等（换行、回车、空格、tab等）})
  if (!regClassName.test(element.className)) {
    element.className = element.className.split(/\s+/).concat(className).join(' ');
  }
}

/*
* DOM删除类
* */
function removeClass(element, className) {
  var regClassName = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
  element.className = element.className.replace(regClassName, '');
}

/*
* 判断DOM是否有某个类名
* */
function hasClass(element, className) {
  return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

/*
* DOM添加/删除类的切换操作
* */
function toggleClass(element, className) {
  if (hasClass(element, className)) {
    removeClass(element, className);
  } else {
    addClass(element, className);
  }
}

/***/ }),

/***/ "./src/util/extend.js":
/*!****************************!*\
  !*** ./src/util/extend.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 为与源码的下标对应上，我们把第一个参数称为`第0个参数`，依次类推


exports.default = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        // 默认第0个参数为目标参数
    i = 1,
        // i表示从第几个参数凯斯想目标参数进行合并，默认从第1个参数开始向第0个参数进行合并
    length = arguments.length,
        deep = false; // 默认为浅度拷贝

    // 判断第0个参数的类型，若第0个参数是boolean类型，则获取其为true还是false
    // 同时将第1个参数作为目标参数，i从当前目标参数的下一个
    // Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;

        // Skip the boolean and the target
        target = arguments[i] || {};
        i++;
    }

    // 判断目标参数的类型，若目标参数既不是object类型，也不是function类型，则为目标参数重新赋值
    // Handle case when target is a string or something (possible in deep copy)
    // if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
    if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !(0, _type.type)(target) === "function") {
        target = {};
    }

    // 若目标参数后面没有参数了，如$.extend({_name:'wenzi'}), $.extend(true, {_name:'wenzi'})
    // 则目标参数即为jQuery本身，而target表示的参数不再为目标参数
    // Extend jQuery itself if only one argument is passed
    if (i === length) {
        target = this;
        i--;
    }

    // 从第i个参数开始
    for (; i < length; i++) {
        // 获取第i个参数，且该参数不为null和undefind，在js中null和undefined，如果不区分类型，是相等的，null==undefined为true，
        // 因此可以用null来同时过滤掉null和undefind
        // 比如$.extend(target, {}, null);中的第2个参数null是不参与合并的
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {

            // 使用for~in获取该参数中所有的字段
            // Extend the base object
            for (name in options) {
                src = target[name]; // 目标参数中name字段的值
                copy = options[name]; // 当前参数中name字段的值

                // 若参数中字段的值就是目标参数，停止赋值，进行下一个字段的赋值
                // 这是为了防止无限的循环嵌套，我们把这个称为，在下面进行比较详细的讲解
                // Prevent never-ending loop
                if (target === copy) {
                    continue;
                }

                // 若deep为true，且当前参数中name字段的值存在且为object类型或Array类型，则进行深度赋值
                // Recurse if we're merging plain objects or arrays
                // if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                if (deep && copy && ((0, _type.type)(copy) == "object" || (copyIsArray = (0, _type.type)(copy) === "array"))) {
                    // 若当前参数中name字段的值为Array类型
                    // 判断目标参数中name字段的值是否存在，若存在则使用原来的，否则进行初始化
                    if (copyIsArray) {
                        copyIsArray = false;
                        // clone = src && jQuery.isArray(src) ? src : [];
                        clone = src && ((0, _type.type)(src) === 'array' ? src : []);
                    } else {
                        // 若原对象存在，则直接进行使用，而不是创建
                        // clone = src && jQuery.isPlainObject(src) ? src : {};
                        clone = src && ((0, _type.type)(src) === 'object' ? src : {});
                    }

                    // 递归处理，此处为2.2
                    // Never move original objects, clone them
                    target[name] = extend(deep, clone, copy);

                    // deep为false，则表示浅度拷贝，直接进行赋值
                    // 若copy是简单的类型且存在值，则直接进行赋值
                    // Don't bring in undefined values
                } else if (copy !== undefined) {
                    // 若原对象存在name属性，则直接覆盖掉；若不存在，则创建新的属性
                    target[name] = copy;
                }
            }
        }
    }

    // 返回修改后的目标参数
    // Return the modified object
    return target;
};

var _type = __webpack_require__(/*! ./type.js */ "./src/util/type.js");

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extend = __webpack_require__(/*! ./extend.js */ "./src/util/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _class = __webpack_require__(/*! ./class */ "./src/util/class.js");

var _require = __webpack_require__(/*! ./require */ "./src/util/require.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  extend: _extend2.default,
  addClass: _class.addClass,
  removeClass: _class.removeClass,
  hasClass: _class.hasClass,
  toggleClass: _class.toggleClass,
  isPlainObject: _require.isPlainObject,
  isFunction: _require.isFunction,
  isArray: _require.isArray,
  isRegExp: _require.isRegExp,
  /*
  * 秒转换成时分秒
  * @param {number} time 时间秒
  * @return {string} 时分秒 '00:00:00'
  * */
  formatTime: function formatTime(time) {
    //小于10前面加'0'
    var t = function t(num) {
      if (num < 10) {
        return '0' + num.toString();
      }
      return num;
    };

    var hours = '',
        minutes = '',
        seconds = '';
    if (time > 0) {
      seconds = t(parseInt(time % 60));
      if (time >= 60) {
        minutes = t(parseInt(time / 60 % 60)) + ':';
        if (time >= 3600) {
          hours = t(parseInt(time / 3600 % 24)) + ':';
        }
      } else {
        minutes = '00:';
      }
    } else {
      seconds = '00:00';
    }
    return hours + minutes + seconds;
  },
  /**
   * 添加script.
   * @param {string} url js url
   * @param {function} [onload] 加载成功回调
   * @param {function} [onerror] 加载失败回调
   * @return {HTMLElement} script引用
   */
  addScript: function addScript(url, onload, onerror) {
    var script = document.createElement('script');
    if (onload) {
      script.onload = function () {
        onload(script);
      };
    }
    script.onerror = function () {
      if (onerror) {
        onerror(script);
      } else if (onload) {
        onload(script);
      }
    };
    script.src = url;
    document.head.appendChild(script);
    return script;
  },
  /**
   * 数字四舍五入（保留n位小数）
   * @param {number} [number] 要四舍五入的数字
   * @param {number} [n] 保留的位数
   * */
  getFloat: function getFloat(number, n) {
    n = n ? parseInt(n) : 0;
    if (n <= 0) return Math.round(number);
    number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
    return number;
  },
  /*
   * 将数字转成数组
   * */
  getNumToArray: function getNumToArray(number) {
    var aa;
    if (number < 10) {
      aa = '0' + number;
    } else {
      aa = number.toString();
    }

    var arr = aa.split("");
    return arr;
  },
  /**
   * 将字符串中的指定字符全部替换成另一个字符
   * str:整个字符串
   * a:要被替换的字符
   * b:替换成这个字符
   * mm:匹配模式，如下:
   *  g:全局匹配
   i:区分大小写
   m:多行匹配
   * */
  strReplace: function strReplace(str, a, b, mm) {
    if (m == null) {
      m = '';
    }
    var cc = str.replace(new RegExp(a, mm), b);
    return cc;
  },
  /**
   * 补位，给指定字符串前面补位，用指定的字符补位，默认为空格
   * str:指定字符
   * len:补几位
   * ch:补什么字符
   * */
  leftpad: function leftpad(str, len, ch) {
    str = String(str);
    var i = -1;
    if (!ch && ch !== 0) ch = ' ';
    while (++i < len) {
      str = ch + str;
    }
    return str;
  }
};
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/lang.js":
/*!**************************!*\
  !*** ./src/util/lang.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.def = def;
/* @flow */

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/***/ }),

/***/ "./src/util/require.js":
/*!*****************************!*\
  !*** ./src/util/require.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = isPlainObject;
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.isRegExp = isRegExp;
/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

/*
* 判断对象是否为函数
* */
function isFunction(value) {
  return _toString.call(value) === '[Object Function]';
}

/*
  * 判断对象是否为数组
  * @param value - 判断的value
  * */
function isArray(value) {
  return _toString.call(value) === '[Object Array]';
}

/*
* 判断对象是否为正则
* */
function isRegExp(value) {
  return _toString.call(value) === '[Object RegExp]';
}

/***/ }),

/***/ "./src/util/type.js":
/*!**************************!*\
  !*** ./src/util/type.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toString = Object.prototype.toString;
var class2type = {};
"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function (name, i) {
    class2type["[object " + name + "]"] = name.toLowerCase();
});

var type = exports.type = function type(obj) {
    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
};

/***/ })

/******/ });