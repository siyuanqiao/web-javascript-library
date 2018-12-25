(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lab"] = factory();
	else
		root["lab"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/base/Array.js":
/*!***************************!*\
  !*** ./src/base/Array.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extend = __webpack_require__(/*! ../util/extend.js */ "./src/util/extend.js");

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _extend2.default)(Array.prototype, {
    /**
     * 洗牌算法 打乱数组
     * @return 打乱后的数组
     * */
    shuffle: function shuffle() {
        var i,
            t,
            m = this.length;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this[m];
            this[m] = this[i];
            this[i] = t;
        }
        return this;
    },
    /**
     * 获取数组中的 最小值|最大值
     * @param {string} str {'min'|'max'}
     * @return 数组中的一个值
     * */
    getValue: function getValue(str) {
        var arr = this;
        var value = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (str === 'min' && value > arr[i]) {
                value = arr[i];
            } else if (str === 'max' && value < arr[i]) {
                value = arr[i];
            }
        }
        return value;
    },
    /**
     * 随机抓取N个元素生成新数组，如果__num为0或不填，则返回原数组
     * @param {Number} __num
     * */
    getExt: function getExt(__num) {
        if (__num === 0 || !__num) {
            return this;
        }
        var arr = this.shuffle();
        var arr2 = [];
        for (var i = 0; i < __num; i++) {
            arr2.push(arr[i]);
        }

        return arr2;
    }
});

/***/ }),

/***/ "./src/base/Math.js":
/*!**************************!*\
  !*** ./src/base/Math.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extend = __webpack_require__(/*! ../util/extend.js */ "./src/util/extend.js");

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _extend2.default)(Math, {
    /**
     * 计算两点间距离
     * @param {object} [p1] 点1
     * @param {object} [p2] 点2
     * */
    getDistance: function getDistance(p1, p2) {
        var a = p2.x - p1.x;
        var b = p2.y - p1.y;
        var n = Math.sqrt(a * a + b * b);
        return n;
    },

    /**
     * 计算两点间直线任意点的坐标，p1 p2为直线的两个端点，_x和_y为要求的坐标点中的一个坐标，求另一个
     * @param {object} [p1] 点1
     * @param {object} [p2] 点2
     * @param {number} [_x] 要求的点的x坐标，求x坐标的话，该参数填null
     * @param {number} [_y] 要求的点的y坐标，求x坐标的话，该参数填null
     * */
    getOnLineXY: function getOnLineXY(p1, p2, _x, _y) {
        var k = (p2.y - p1.y) / (p2.x - p1.x);
        var b = p1.y - k * p1.x;
        if (_x == null) {
            _x = (_y - b) / k;
        } else if (_y == null) {
            _y = k * _x + b;
        }
        var p = {
            x: _x,
            y: _y
        };
        return p;
    },

    /**
     * 计算两点间直线中心点坐标
     * @param {object} [p1] 点1
     * @param {object} [p2] 点2
     * */
    getOnLineCenter: function getOnLineCenter(p1, p2) {
        var xx = (p1.x + p2.x) / 2;
        var yy = (p1.y + p1.y) / 2;
        var p = {
            x: xx,
            y: yy
        };
        return p;
    },

    /**
     * 返回起点到终点的角度，以Y轴为中心，从上右下左是0,90,180,270,360
     * @param {object} [start] 起点
     * @param {object} [end] 终点
     * */
    getAngle: function getAngle(start, end) {
        var x = Math.abs(start.x - end.x);
        var y = Math.abs(start.y - end.y);
        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var cos = y / z;
        var radina = Math.acos(cos); //用反三角函数求弧度
        var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度

        if (end.x > start.x && end.y > start.y) {
            //鼠标在第四象限
            angle = 180 - angle;
        }

        if (end.x == start.x && end.y > start.y) {
            //鼠标在y轴负方向上
            angle = 180;
        }

        if (end.x > start.x && end.y == start.y) {
            //鼠标在x轴正方向上
            angle = 90;
        }

        if (end.x < start.x && end.y > start.y) {
            //鼠标在第三象限
            angle = 180 + angle;
        }

        if (end.x < start.x && end.y == start.y) {
            //鼠标在x轴负方向
            angle = 270;
        }

        if (end.x < start.x && end.y < start.y) {
            //鼠标在第二象限
            angle = 360 - angle;
        }

        //返回角度,不是弧度
        return angle;
    },

    /**
     * 每隔三位数加一个逗号
     * @param {string/number} [value] 要转换的值
     * */
    cutStr: function cutStr(value) {
        var temp = parseFloat(value).toLocaleString();
        return temp;
    },

    /**
     * 获取椭圆内随机一点
     * @param {number} radiusX 椭圆X轴半径
     * @param {number} radiusY 椭圆Y轴半径
     * @param {object} 随机点
     * */
    getEllipseRandomPoint: function getEllipseRandomPoint(radiusX, radiusY) {
        var angle = Math.random() * 360;
        //正弦函数图像特点 x∈[0,2π] 5点观察值[0,1, 0,-1,0]
        //余弦函数图像特点 x∈[0,2π] 5点观察值[1,0,-1, 0,1]
        return {
            x: Math.sin(Math.PI / 180 * angle) * (Math.random() * randiusX),
            y: Math.cos(Math.PI / 180 * angle) * (Math.random() * randiusY)
        };
    },

    /**
     * 计算斐波那契数列 递归
     */
    fbnq: function fbnq(n) {
        if (n == 1 || n == 2) {
            return 1;
        }
        return Math.fbnq(n - 1) + Math.fbnq(n - 2);
    },

    /**
     * 计算斐波那契数列 非递归
     */
    fbnq2: function fbnq2(n) {
        var a, b, res;
        a = b = 1;
        for (var i = 3; i <= n; i++) {
            res = a + b;
            a = b;
            b = res;
        }
        return res;
    },

    /**
     * 求两个数的最大公约数
     */
    gcd: function gcd(num1, num2) {
        if (num1 % num2 == 0) {
            return num2;
        } else {
            return Math.gcd(num2, num1 % num2);
        }
    },

    /**
     * 求两个数的最小公倍数
     */
    lcm: function lcm(num1, num2) {
        var num = num1 * num2 / Math.gcd(num1, num2);
        return num;
    },

    /**
     * 根据数组里的概率元素，生成新的概率数组
     * @例：var a=[0.5,0.1,0.2,0.2]; 就是50%个0，10%个1，20%个2，20%个3，生成的数组就是[0,0,0,0,0,1,2,2,3,3]
     * 注：数组元素的和不要大于1，做概率相关的程序时可以用到它
     * 因为用到了最小公倍数函数，所以就把它放到数学类里了，而没放到数组类里
     * */
    getPro: function getPro(__arr) {
        var p = __arr;
        var L = getLCM(p); //获取最小公倍数

        var A = [];
        var l = 0;
        for (var i = 0; i < p.length; i++) {
            var k = L * p[i] + l;
            while (l < k) {
                A[l] = i;
                l++;
            }
        }

        function getLCM(__p) {
            var n = 1;
            for (var i = 0; i < p.length; i++) {
                n = Math.lcm(n, 1 / p[i]);
            }
            return n;
        }

        return A;
    },

    /*
     * 范围内随机取整,__zero：是否排除0，true是排除，false是不排除，默认为false
     * */
    randomInteger: function randomInteger(low, high, __zero) {
        var zero = __zero || false;
        var nMath = low + Math.floor(Math.random() * (high - low));
        if (zero == true) {
            while (nMath == 0) {
                nMath = low + Math.floor(Math.random() * (high - low));
            }
        }
        return nMath;
    },

    /*
     * 范围内随机取小数
     * */
    randomFloat: function randomFloat(low, high, __zero) {
        var zero = __zero || false;
        var nMath = low + Math.random() * (high - low);
        if (zero == true) {
            while (nMath == 0) {
                nMath = low + Math.random() * (high - low);
            }
        }
        return nMath;
    }
});

/***/ }),

/***/ "./src/base/String.js":
/*!****************************!*\
  !*** ./src/base/String.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extend = __webpack_require__(/*! ../util/extend.js */ "./src/util/extend.js");

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _extend2.default)(String.prototype, {
    /**
     * 删除字符串两端的空白字符。
     * @return 返回的是一个新的字符串
     * */
    trim: function trim() {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    },
    //去除左空格
    ltrim: function ltrim() {
        return this.replace(/(^\s*)/g, "");
    },
    //去除右空格
    rtrim: function rtrim() {
        return this.replace(/(\s*$)/g, "");
    },
    //判断是否为空字符
    isEmpty: function isEmpty() {
        var __temp = this.trim();
        return __temp.length == 0;
    },
    /**
     * 在指定地方插入字符
     * @param {string} flg 要插入的字符串
     * @param {number} sn 要插入的位置
     * */
    insert_flg: function insert_flg(flg, sn) {
        var newstr = "";
        var a = this.slice(0, sn);
        var b = this.slice(sn);
        newstr = a + flg + b;
        return newstr;
    },
    /**
     * 删除指定地方的字符
     * @param {number} sn 要删除的位置
     * @param {number} len 删除字符的长度
     * */
    del_flg: function del_flg(sn, len) {
        len = len || 1;
        var newstr = "";
        var arr = this.split('');
        arr.splice(sn - 1, len);
        newstr = arr.join("");
        return newstr;
    },
    /**
     * 随机A-Z|a-z|0-9 中的随机组合
     * @param {number} 随机组合的长度
     *
     * @example
     * String.prototype.randomString(); & ''.randomString();
     *
     * @return {string} 随机组合的字符
     * */
    randomString: function randomString(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
            maxPos = $chars.length,
            i = 0,
            pwd = '';
        for (i; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    /**
     * 获取URL参数
     * @example
     * window.location.search.getURLParam();
     *
     * @retrun {}
     * */
    getQuerystring: function getQuerystring() {
        //返回的参数对象
        var ags = {};
        if (this.length > 1) {
            var query = this.substring(1);
            var items = query.split('&');
            var item = null;
            for (var i = 0, len = items.length; i < len; i++) {
                item = items[i].split("=");
                var key = decodeURIComponent(item[0]);
                var val = decodeURIComponent(item[1]);
                ags[key] = val;
            }
        }
        return ags;
    },
    /**
     * 判断是否为手机号码
     * */
    isMobile: function isMobile() {
        var __temp = this.trim();
        var p = /^0*(13|14|15|16|17|18)\d{9}$/;
        return p.test(__temp);
    },
    /**
     * 判断就否为电子邮箱
     * */
    isEmail: function isEmail() {
        var __temp = this.trim();
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return myreg.test(__temp);
    },
    /**
     * 判断是否为身份证
     * */
    isID: function isID() {
        var __temp = this.trim();
        var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return myreg.test(__temp);
    }
});

/***/ }),

/***/ "./src/base/index.js":
/*!***************************!*\
  !*** ./src/base/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./String */ "./src/base/String.js");

__webpack_require__(/*! ./Array */ "./src/base/Array.js");

__webpack_require__(/*! ./Math */ "./src/base/Math.js");

/***/ }),

/***/ "./src/canvas/Texture.js":
/*!*******************************!*\
  !*** ./src/canvas/Texture.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Texture = function () {
    function Texture($img) {
        _classCallCheck(this, Texture);

        this._img = $img;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = this.textureWidth;
        this.canvas.height = this.textureHeight;

        this.ctx.drawImage(this._img, 0, 0, this.textureWidth, this.textureHeight);
    }

    /**
     * 释放纹理
     * */


    _createClass(Texture, [{
        key: "dispose",
        value: function dispose() {}
    }, {
        key: "getPixel32",
        value: function getPixel32() {}

        /**
         * 获取指定像素区域的颜色值
         * */

    }, {
        key: "getPixels",
        value: function getPixels(x, y, width, height) {
            var imgData = this.ctx.getImageData(x, x, width, height);

            var xyData = [];
            for (var i = 0; i < height; i++) {
                for (var j = 0; j < width; j++) {
                    var _num = (i * width + j) * 4;
                    var _red = imgData.data[_num + 0];
                    var _green = imgData.data[_num + 1];
                    var _blue = imgData.data[_num + 2];
                    var _alpha = imgData.data[_num + 3];
                    if (_alpha > 0) xyData.push({ x: j, y: i, r: _red, g: _green, b: _blue, a: _alpha });
                }
            }
            return xyData;
        }

        /**
         *  裁剪指定区域并保存成图片
         * */

    }, {
        key: "saveToFile",
        value: function saveToFile() {}

        /**
         * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null
         * */

    }, {
        key: "toDataURL",
        value: function toDataURL() {}
    }, {
        key: "textureWidth",
        get: function get() {
            return this._img.width;
        }
    }, {
        key: "textureHeight",
        get: function get() {
            return this._img.height;
        }
    }]);

    return Texture;
}();

exports.default = Texture;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.Texture = undefined;

var _Texture = __webpack_require__(/*! ./canvas/Texture.js */ "./src/canvas/Texture.js");

Object.defineProperty(exports, 'Texture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Texture).default;
  }
});

var _index = __webpack_require__(/*! ./util/index.js */ "./src/util/index.js");

Object.defineProperty(exports, 'util', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

__webpack_require__(/*! ./base/index */ "./src/base/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/util/browser.js":
/*!*****************************!*\
  !*** ./src/util/browser.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBrowser = getBrowser;
/**
 * 获取浏览器信息
 * */
var ua = window.navigator.userAgent.toLowerCase();

function find(needle) {
  return ua.indexOf(needle) !== -1;
}

function getBrowser() {
  if (find('HUAWEI')) return 'HUAWEI'; // 华为手机浏览器
  if (find('amap')) return 'amap'; // 高德地图浏览器
  if (find('appsearch')) return 'appsearch'; // 百度手机助手
  if (find('micromessenger')) return 'wechat';
  if (find('ucbrowser') || find('ucweb')) return 'uc';
  if (find('chrome')) return 'chrome';
  if (find('safari')) return 'safari';
  if (find('mozilla')) return 'firefox';
  if (find('ie')) return 'ie';
  if (find('opera')) return 'opera';
  if (find('kindle')) return 'kindle';
  return 'unknown';
}

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
* @param {string} value - 类名
* */
function addClass(element, value) {
  var rspace = /\s+/,
      classNames,
      i,
      cl,
      setClass;
  if (element.nodeType === 1) {
    if (value && typeof value === "string") {
      classNames = value.split(rspace);
      if (!element.className && classNames.length === 1) {
        element.className = value;
      } else {
        setClass = " " + element.className + " ";
        for (i = 0, cl = classNames.length; i < cl; i++) {
          if (!~setClass.indexOf(" " + classNames[i] + " ")) {
            setClass += classNames[i] + " ";
          }
        }
        element.className = setClass.trim();
      }
    }
  }
  return element;
}

/*
* DOM删除类
* */
function removeClass(elem, value) {
  var rspace = /\s+/;
  var rclass = /[\n\t\r]/g;
  var classNames, className, c, cl;

  if (elem.nodeType === 1 && elem.className) {
    if (value && typeof value === "string" || value === undefined) {
      classNames = (value || "").split(rspace);

      if (value) {
        className = (" " + elem.className + " ").replace(rclass, " ");
        for (c = 0, cl = classNames.length; c < cl; c++) {
          className = className.replace(" " + classNames[c] + " ", " ");
        }
        elem.className = className.trim();
      } else {
        elem.className = "";
      }
    }
  }

  return elem;
}

/*
* 判断DOM是否有某个类名
* */
function hasClass(element, selector) {
  var rclass = /[\n\t\r]/g;
  var className = " " + selector + " ";
  if ((" " + element.className + " ").replace(rclass, " ").indexOf(className) > -1) {
    return true;
  }
  return false;
}

/*
* DOM添加/删除类的切换操作
* */
function toggleClass(elem, value) {
  var rspace = /\s+/;
  // toggle individual class names
  var className,
      i = 0,
      classNames = value.split(rspace),
      fn;

  while (className = classNames[i++]) {
    fn = hasClass(elem, className) ? removeClass : addClass;
    fn(elem, className);
  }
  return elem;
}

/***/ }),

/***/ "./src/util/cookies.js":
/*!*****************************!*\
  !*** ./src/util/cookies.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
////////////////////////////////////////////////////////////////////////////////
//
//  ADOBE SYSTEMS INCORPORATED
//  Copyright 2006-2007 Adobe Systems Incorporated
//  All Rights Reserved.
//
//  NOTICE: Adobe permits you to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
//
////////////////////////////////////////////////////////////////////////////////


/**
 * Sets a Cookie with the given name and value.
 *
 * name       Name of the cookie
 * value      Value of the cookie
 * [expires]  Expiration date of the cookie (default: end of current session)
 * [path]     Path where the cookie is valid (default: path of calling document)
 * [domain]   Domain where the cookie is valid
 *              (default: domain of calling document)
 * [secure]   Boolean value indicating if the cookie transmission requires a
 *              secure transmission
 *
 * @param
 * setCookie("tasty","strawberry2");
 * setCookie("yummy","choco2",getDate('s3'));
 */
function setCookie(name, value, expires, path, domain, secure) {
  document.cookie = name + "=" + escape(value) + (expires ? "; expires=" + expires.toUTCString() : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
}

/**
 * Gets the value of the specified cookie.
 *
 * name  Name of the desired cookie.
 *
 * Returns a string containing value of specified cookie,
 *   or null if cookie does not exist.
 *
 * @param
 * console.log(getCookie('tasty'));
 */
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
  }
  var end = document.cookie.indexOf(";", begin);
  if (end == -1) {
    end = dc.length;
  }
  return unescape(dc.substring(begin + prefix.length, end));
}

/**
 * Deletes the specified cookie.
 *
 * name      name of the cookie
 * [path]    path of the cookie (must be same as path used to create cookie)
 * [domain]  domain of the cookie (must be same as domain used to create cookie)
 *
 * @param deleteCookie('tasty');
 */
function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

/*
 * 获取想要的时间
 * @param {string} str s1一秒 h1一小时 d1一天
 * @return {number} 当前时间+str的时间
 * */
function getDate(str) {
  var str1 = str.substring(0, 1);
  var str2 = str.substring(1, str.length) * 1;
  var time = 0;
  if (str1 == 's') {
    time = str2 * 1000;
  } else if (str1 == 'h') {
    time = str2 * 60 * 60 * 1000;
  } else if (str1 == 'd') {
    time = str2 * 24 * 60 * 60 * 1000;
  }
  var data = new Date();
  data.setTime(data.valueOf() + time);
  return data;
}

exports.getDate = getDate;
exports.setCookie = setCookie;
exports.getCookie = getCookie;
exports.deleteCookie = deleteCookie;

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

var _extend = __webpack_require__(/*! ./extend */ "./src/util/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _class = __webpack_require__(/*! ./class */ "./src/util/class.js");

var _require = __webpack_require__(/*! ./require */ "./src/util/require.js");

var _cookies = __webpack_require__(/*! ./cookies */ "./src/util/cookies.js");

var _os = __webpack_require__(/*! ./os */ "./src/util/os.js");

var _browser = __webpack_require__(/*! ./browser */ "./src/util/browser.js");

var _script = __webpack_require__(/*! ./script */ "./src/util/script.js");

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

  getDate: _cookies.getDate,
  setCookie: _cookies.setCookie,
  getCookie: _cookies.getCookie,
  deleteCookie: _cookies.deleteCookie,

  getOS: _os.getOS,
  getBrowser: _browser.getBrowser,

  addScript: _script.addScript
};
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/os.js":
/*!************************!*\
  !*** ./src/util/os.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOS = getOS;
/**
 * 获取操作系统信息
 * */
function getOS() {
  var pf = window.navigator.platform;
  var ua = window.navigator.userAgent;
  if (ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) return 'ios';
  if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) return 'android';
  if (pf === 'Win32' || pf === 'Windows' || ua.indexOf('Windows') > -1) return 'windows';
  if (pf === 'Mac68K' || pf === 'MacPPC' || pf === 'Macintosh' || pf === 'MacIntel') return 'mac';
  if (pf === 'X11') return 'unix';
  if (String(pf).indexOf('Linux') > -1) return 'linux';
  return 'unknown';
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

/***/ "./src/util/script.js":
/*!****************************!*\
  !*** ./src/util/script.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addScript = addScript;
/**
 * 添加script.
 * @param {string} url js url
 * @param {function} [onload] 加载成功回调
 * @param {function} [onerror] 加载失败回调
 * @return {HTMLElement} script引用
 */
function addScript(url, onload, onerror) {
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
exports.type = type;
var toString = Object.prototype.toString;
var class2type = {};
"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function (name, i) {
  class2type["[object " + name + "]"] = name.toLowerCase();
});

function type(obj) {
  return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
}

/***/ })

/******/ });
});