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

/***/ "./src/core/browser.js":
/*!*****************************!*\
  !*** ./src/core/browser.js ***!
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
var find = function find(needle) {
  return userAgent.indexOf(needle) !== -1;
};

function getBrowser() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf('HUAWEI') > -1) return 'HUAWEI'; // 华为手机浏览器
  if (ua.indexOf('amap') > -1) return 'amap'; // 高德地图浏览器
  if (ua.indexOf('appsearch') > -1) return 'appsearch'; // 百度手机助手
  if (ua.indexOf('micromessenger') > -1) return 'wechat';
  if (ua.indexOf('ucbrowser') > -1 || ua.indexOf('ucweb') > -1) return 'uc';
  if (ua.indexOf('chrome') > -1) return 'chrome';
  if (ua.indexOf('safari') > -1) return 'safari';
  if (ua.indexOf('mozilla') > -1) return 'firefox';
  if (ua.indexOf('ie') > -1) return 'ie';
  if (ua.indexOf('opera') > -1) return 'opera';
  if (ua.indexOf('kindle') > -1) return 'kindle';
  return 'unknown';
}

/***/ }),

/***/ "./src/core/cookies.js":
/*!*****************************!*\
  !*** ./src/core/cookies.js ***!
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
 * setCookie("yummy","choco2",getData('s3'));
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
function getData(str) {
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

exports.setCookie = setCookie;
exports.getCookie = getCookie;
exports.deleteCookie = deleteCookie;

/***/ }),

/***/ "./src/core/os.js":
/*!************************!*\
  !*** ./src/core/os.js ***!
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

/***/ "./src/core/url.js":
/*!*************************!*\
  !*** ./src/core/url.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var href = window.location.href;
var search = window.location.search;

exports.default = {
    /**
     * 解析url,待实现！！！！
     * @return
     * */
    parse: function parse() {
        //http://180.ai?a=1&b=2#tech
        return {
            protocol: 'http:',
            slashes: true,
            auth: null,
            host: '180.ai',
            port: null,
            hostname: '180.ai',
            hash: '#tech',
            search: '?a=1&b=2',
            query: 'a=1&b=2',
            pathname: '/',
            path: '/?a=1&b=2',
            href: 'http://180.ai/?a=1&b=2#tech'
        };
    },
    /**
     * 获取URL参数
     * @example
     * LAB.URL.queryString();
     *
     * @retrun {}
     * */
    queryString: function queryString() {
        //返回的参数对象
        var ags = {};
        if (search.length > 1) {
            var query = search.substring(1);
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
    }
};
module.exports = exports['default'];

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
exports.WX = exports.URL = exports.Util = undefined;

var _cookies = __webpack_require__(/*! ./core/cookies */ "./src/core/cookies.js");

Object.keys(_cookies).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cookies[key];
    }
  });
});

var _os = __webpack_require__(/*! ./core/os */ "./src/core/os.js");

Object.keys(_os).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _os[key];
    }
  });
});

var _browser = __webpack_require__(/*! ./core/browser */ "./src/core/browser.js");

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});

var _index = __webpack_require__(/*! ./util/index.js */ "./src/util/index.js");

Object.defineProperty(exports, "Util", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _url = __webpack_require__(/*! ./core/url.js */ "./src/core/url.js");

Object.defineProperty(exports, "URL", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_url).default;
  }
});

var _WX = __webpack_require__(/*! ./core/WX.js */ "./src/core/WX.js");

Object.defineProperty(exports, "WX", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WX).default;
  }
});

__webpack_require__(/*! ./base/index */ "./src/base/index.js");

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