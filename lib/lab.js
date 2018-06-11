var LAB =
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

/***/ "./src/Math.js":
/*!*********************!*\
  !*** ./src/Math.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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
};
module.exports = exports["default"];

/***/ }),

/***/ "./src/OS.js":
/*!*******************!*\
  !*** ./src/OS.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var userAgent = window.navigator.userAgent;
var find = function find(needle) {
    return userAgent.indexOf(needle) !== -1;
};

var os = {};
os.iphone = find('iPhone');
os.ipod = find('iPod');
os.ipad = find('iPad');
os.ios = os.iphone || os.ipod || os.ipad;

os.android = find('Android');

//华为手机
os.isHuaWei = find('HUAWEI');

//微信APP终端
os.weChat = find('MicroMessenger');

//高德APP终端
os.amap = find('amap');

//是否是移动端(网络抄取，待优化！！！)
os.isMobile = userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

exports.default = os;
module.exports = exports['default'];

/***/ }),

/***/ "./src/Texture.js":
/*!************************!*\
  !*** ./src/Texture.js ***!
  \************************/
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

/***/ "./src/URL.js":
/*!********************!*\
  !*** ./src/URL.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var href = window.location.href;

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
     * window.urlUtil.queryString();
     *
     * @retrun {}
     * */
    queryString: function queryString() {
        //返回的参数对象
        var ags = {};
        if (href.length > 1) {
            var query = href.substring(1);
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

/***/ "./src/Util.js":
/*!*********************!*\
  !*** ./src/Util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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
    /*
    * DOM添加类
    * @param {HTMLElement} element - DOM元素
    * @param {string} className - 类名
    * */
    addClass: function addClass(element, className) {
        var regClassName = new RegExp('(^| )' + className + '( |$)');
        //( /\s+/ 匹配任何空白符，包括\n,\r,\f,\t,\v等（换行、回车、空格、tab等）})
        if (!regClassName.test(element.className)) {
            element.className = element.className.split(/\s+/).concat(className).join(' ');
        }
    },
    /*
    * DOM删除类
    * */
    removeClass: function removeClass(element, className) {
        var regClassName = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
        element.className = element.className.replace(regClassName, '');
    },
    /*
    * 判断DOM是否有某个类名
    * */
    hasClass: function hasClass(element, className) {
        return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    },
    /*
    * DOM添加/删除类的切换操作
    * */
    toggleClass: function toggleClass(element, className) {
        if (this.hasClass(element, className)) {
            this.removeClass(element, className);
        } else {
            this.addClass(element, className);
        }
    },
    /*
    * 获取DOM第几个子元素
    * */
    getElementIndex: function getElementIndex(ele) {
        var elements = ele.parentNode.childNodes;
        for (var index = 0, i = 0, len = elements.length; i < len; i++) {
            if (ele === elements[i]) {
                return index;
            }
            if (elements[i].nodeType == 1) {
                index++;
            }
        }
        throw '获取错误';
    },
    /*
    * 判断对象是否为数组
    * @param value - 判断的value
    * */
    isArray: function isArray(value) {
        return Object.prototype.toString().call(value) === '[Object Array]';
    },
    /*
    * 判断对象是否为函数
    * */
    isFunction: function isFunction(value) {
        return Object.prototype.toString().call(value) === '[Object Function]';
    },
    /*
    * 判断对象是否为正则
    * */
    isRegExp: function isRegExp(value) {
        return Object.prototype.toString().call(value) === '[Object RegExp]';
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
    * 	g:全局匹配
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
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/Array.js":
/*!***************************!*\
  !*** ./src/base/Array.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 洗牌算法 打乱数组
 * @return 打乱后的数组
 * */
Array.prototype.shuffle = function () {
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
};

/**
 * 获取数组中的 最小值|最大值
 * @param {string} str {'min'|'max'}
 * @return 数组中的一个值
 * */
Array.prototype.getValue = function (str) {
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
};

/**
 * 随机抓取N个元素生成新数组，如果__num为0或不填，则返回原数组
 * @param {Number} __num
 * */
Array.prototype.getExt = function (__num) {
	if (__num === 0 || !__num) {
		return this;
	}
	var arr = this.shuffle();
	var arr2 = [];
	for (var i = 0; i < __num; i++) {
		arr2.push(arr[i]);
	}

	return arr2;
};

/***/ }),

/***/ "./src/base/Number.js":
/*!****************************!*\
  !*** ./src/base/Number.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 数字值相关功能
 * 遵循mozilla的规则：扩展内置原型的唯一理由是支持JavaScript 引擎的新特性，如Array.forEach。
 */

exports.default = {};
module.exports = exports["default"];

/***/ }),

/***/ "./src/cookies.js":
/*!************************!*\
  !*** ./src/cookies.js ***!
  \************************/
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
exports.Texture = exports.deleteCookie = exports.getCookie = exports.setCookie = exports.URL = exports.Util = exports.OS = exports.Math = undefined;

__webpack_require__(/*! ./base/Array.js */ "./src/base/Array.js");

__webpack_require__(/*! ./base/Number.js */ "./src/base/Number.js");

var _Math = __webpack_require__(/*! ./Math.js */ "./src/Math.js");

var _Math2 = _interopRequireDefault(_Math);

var _OS = __webpack_require__(/*! ./OS.js */ "./src/OS.js");

var _OS2 = _interopRequireDefault(_OS);

var _Util = __webpack_require__(/*! ./Util.js */ "./src/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _URL = __webpack_require__(/*! ./URL.js */ "./src/URL.js");

var _URL2 = _interopRequireDefault(_URL);

var _cookies = __webpack_require__(/*! ./cookies.js */ "./src/cookies.js");

var _Texture = __webpack_require__(/*! ./Texture.js */ "./src/Texture.js");

var _Texture2 = _interopRequireDefault(_Texture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//基本数据类型：Nndefined Null Boolean String Number
//引用数据类型：Object Symbol

exports.Math = _Math2.default;
exports.OS = _OS2.default;
exports.Util = _Util2.default;
exports.URL = _URL2.default;
exports.setCookie = _cookies.setCookie;
exports.getCookie = _cookies.getCookie;
exports.deleteCookie = _cookies.deleteCookie;
exports.Texture = _Texture2.default;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MQUIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTEFCLy4vc3JjL01hdGguanMiLCJ3ZWJwYWNrOi8vTEFCLy4vc3JjL09TLmpzIiwid2VicGFjazovL0xBQi8uL3NyYy9UZXh0dXJlLmpzIiwid2VicGFjazovL0xBQi8uL3NyYy9VUkwuanMiLCJ3ZWJwYWNrOi8vTEFCLy4vc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vTEFCLy4vc3JjL2Jhc2UvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vTEFCLy4vc3JjL2Jhc2UvTnVtYmVyLmpzIiwid2VicGFjazovL0xBQi8uL3NyYy9jb29raWVzLmpzIiwid2VicGFjazovL0xBQi8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJhIiwieCIsImIiLCJ5IiwibiIsIk1hdGgiLCJzcXJ0IiwiZ2V0T25MaW5lWFkiLCJfeCIsIl95IiwiayIsInAiLCJnZXRPbkxpbmVDZW50ZXIiLCJ4eCIsInl5IiwiZ2V0QW5nbGUiLCJzdGFydCIsImVuZCIsImFicyIsInoiLCJwb3ciLCJjb3MiLCJyYWRpbmEiLCJhY29zIiwiYW5nbGUiLCJmbG9vciIsIlBJIiwiY3V0U3RyIiwidmFsdWUiLCJ0ZW1wIiwicGFyc2VGbG9hdCIsInRvTG9jYWxlU3RyaW5nIiwiZ2V0RWxsaXBzZVJhbmRvbVBvaW50IiwicmFkaXVzWCIsInJhZGl1c1kiLCJyYW5kb20iLCJzaW4iLCJyYW5kaXVzWCIsInJhbmRpdXNZIiwiZmJucSIsImZibnEyIiwicmVzIiwiaSIsImdjZCIsIm51bTEiLCJudW0yIiwibGNtIiwibnVtIiwiZ2V0UHJvIiwiX19hcnIiLCJMIiwiZ2V0TENNIiwiQSIsImwiLCJsZW5ndGgiLCJfX3AiLCJyYW5kb21JbnRlZ2VyIiwibG93IiwiaGlnaCIsIl9femVybyIsInplcm8iLCJuTWF0aCIsInJhbmRvbUZsb2F0IiwidXNlckFnZW50Iiwid2luZG93IiwibmF2aWdhdG9yIiwiZmluZCIsIm5lZWRsZSIsImluZGV4T2YiLCJvcyIsImlwaG9uZSIsImlwb2QiLCJpcGFkIiwiaW9zIiwiYW5kcm9pZCIsImlzSHVhV2VpIiwid2VDaGF0IiwiYW1hcCIsImlzTW9iaWxlIiwibWF0Y2giLCJUZXh0dXJlIiwiJGltZyIsIl9pbWciLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJ0ZXh0dXJlV2lkdGgiLCJoZWlnaHQiLCJ0ZXh0dXJlSGVpZ2h0IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsInh5RGF0YSIsImoiLCJfbnVtIiwiX3JlZCIsImRhdGEiLCJfZ3JlZW4iLCJfYmx1ZSIsIl9hbHBoYSIsInB1c2giLCJyIiwiZyIsImhyZWYiLCJsb2NhdGlvbiIsInBhcnNlIiwicHJvdG9jb2wiLCJzbGFzaGVzIiwiYXV0aCIsImhvc3QiLCJwb3J0IiwiaG9zdG5hbWUiLCJoYXNoIiwic2VhcmNoIiwicXVlcnkiLCJwYXRobmFtZSIsInBhdGgiLCJxdWVyeVN0cmluZyIsImFncyIsInN1YnN0cmluZyIsIml0ZW1zIiwic3BsaXQiLCJpdGVtIiwibGVuIiwia2V5IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidmFsIiwiZm9ybWF0VGltZSIsInRpbWUiLCJ0IiwidG9TdHJpbmciLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwicGFyc2VJbnQiLCJhZGRTY3JpcHQiLCJ1cmwiLCJvbmxvYWQiLCJvbmVycm9yIiwic2NyaXB0Iiwic3JjIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmVnQ2xhc3NOYW1lIiwiUmVnRXhwIiwidGVzdCIsImNvbmNhdCIsImpvaW4iLCJyZW1vdmVDbGFzcyIsInJlcGxhY2UiLCJoYXNDbGFzcyIsInRvZ2dsZUNsYXNzIiwiZ2V0RWxlbWVudEluZGV4IiwiZWxlIiwiZWxlbWVudHMiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImluZGV4Iiwibm9kZVR5cGUiLCJpc0FycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImdldEZsb2F0IiwibnVtYmVyIiwicm91bmQiLCJnZXROdW1Ub0FycmF5IiwiYWEiLCJhcnIiLCJzdHJSZXBsYWNlIiwic3RyIiwibW0iLCJtIiwiY2MiLCJsZWZ0cGFkIiwiY2giLCJTdHJpbmciLCJBcnJheSIsInNodWZmbGUiLCJnZXRWYWx1ZSIsImdldEV4dCIsIl9fbnVtIiwiYXJyMiIsInNldENvb2tpZSIsIm5hbWUiLCJleHBpcmVzIiwiZG9tYWluIiwic2VjdXJlIiwiY29va2llIiwiZXNjYXBlIiwidG9VVENTdHJpbmciLCJnZXRDb29raWUiLCJkYyIsInByZWZpeCIsImJlZ2luIiwidW5lc2NhcGUiLCJkZWxldGVDb29raWUiLCJnZXREYXRhIiwic3RyMSIsInN0cjIiLCJEYXRlIiwic2V0VGltZSIsInZhbHVlT2YiLCJPUyIsIlV0aWwiLCJVUkwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNB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QTs7QUFFQTs7Ozs7O0FBWkE7QUFDQTs7UUFjSXZNLEksR0FBQUEsYztRQUNBOE0sRSxHQUFBQSxZO1FBQ0FDLEksR0FBQUEsYztRQUNBQyxHLEdBQUFBLGE7UUFFQXRCLFMsR0FBQUEsa0I7UUFDQVEsUyxHQUFBQSxrQjtRQUNBSyxZLEdBQUFBLHFCO1FBRUE1SCxPLEdBQUFBLGlCIiwiZmlsZSI6ImxhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqIOiuoeeul+S4pOeCuemXtOi3neemu1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbcDFdIOeCuTFcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3AyXSDngrkyXG4gICAgICogKi9cbiAgICBnZXREaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgICAgIHZhciBhID0gcDIueCAtIHAxLng7XG4gICAgICAgIHZhciBiID0gcDIueSAtIHAxLnk7XG4gICAgICAgIHZhciBuID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6h566X5Lik54K56Ze055u057q/5Lu75oSP54K555qE5Z2Q5qCH77yMcDEgcDLkuLrnm7Tnur/nmoTkuKTkuKrnq6/ngrnvvIxfeOWSjF955Li66KaB5rGC55qE5Z2Q5qCH54K55Lit55qE5LiA5Liq5Z2Q5qCH77yM5rGC5Y+m5LiA5LiqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtwMV0g54K5MVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbcDJdIOeCuTJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW194XSDopoHmsYLnmoTngrnnmoR45Z2Q5qCH77yM5rGCeOWdkOagh+eahOivne+8jOivpeWPguaVsOWhq251bGxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW195XSDopoHmsYLnmoTngrnnmoR55Z2Q5qCH77yM5rGCeOWdkOagh+eahOivne+8jOivpeWPguaVsOWhq251bGxcbiAgICAgKiAqL1xuICAgIGdldE9uTGluZVhZOiBmdW5jdGlvbihwMSwgcDIsIF94LCBfeSkge1xuICAgICAgICB2YXIgayA9IChwMi55IC0gcDEueSkgLyAocDIueCAtIHAxLngpO1xuICAgICAgICB2YXIgYiA9IHAxLnkgLSBrICogKHAxLngpO1xuICAgICAgICBpZihfeCA9PSBudWxsKSB7XG4gICAgICAgICAgICBfeCA9IChfeSAtIGIpIC8gaztcbiAgICAgICAgfSBlbHNlIGlmKF95ID09IG51bGwpIHtcbiAgICAgICAgICAgIF95ID0gayAqIF94ICsgYjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcCA9IHtcbiAgICAgICAgICAgIHg6IF94LFxuICAgICAgICAgICAgeTogX3lcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuoeeul+S4pOeCuemXtOebtOe6v+S4reW/g+eCueWdkOagh1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbcDFdIOeCuTFcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3AyXSDngrkyXG4gICAgICogKi9cbiAgICBnZXRPbkxpbmVDZW50ZXI6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgICB2YXIgeHggPSAocDEueCArIHAyLngpIC8gMjtcbiAgICAgICAgdmFyIHl5ID0gKHAxLnkgKyBwMS55KSAvIDI7XG4gICAgICAgIHZhciBwID0ge1xuICAgICAgICAgICAgeDogeHgsXG4gICAgICAgICAgICB5OiB5eVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue6LW354K55Yiw57uI54K555qE6KeS5bqm77yM5LulWei9tOS4uuS4reW/g++8jOS7juS4iuWPs+S4i+W3puaYrzAsOTAsMTgwLDI3MCwzNjBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3N0YXJ0XSDotbfngrlcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW2VuZF0g57uI54K5XG4gICAgICogKi9cbiAgICBnZXRBbmdsZTogZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgICB2YXIgeCA9IE1hdGguYWJzKHN0YXJ0LnggLSBlbmQueCk7XG4gICAgICAgIHZhciB5ID0gTWF0aC5hYnMoc3RhcnQueSAtIGVuZC55KTtcbiAgICAgICAgdmFyIHogPSBNYXRoLnNxcnQoTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKSk7XG4gICAgICAgIHZhciBjb3MgPSB5IC8gejtcbiAgICAgICAgdmFyIHJhZGluYSA9IE1hdGguYWNvcyhjb3MpOyAvL+eUqOWPjeS4ieinkuWHveaVsOaxguW8p+W6plxuICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmZsb29yKDE4MCAvIChNYXRoLlBJIC8gcmFkaW5hKSk7IC8v5bCG5byn5bqm6L2s5o2i5oiQ6KeS5bqmXG5cbiAgICAgICAgaWYoZW5kLnggPiBzdGFydC54ICYmIGVuZC55ID4gc3RhcnQueSkgeyAvL+m8oOagh+WcqOesrOWbm+ixoemZkFxuICAgICAgICAgICAgYW5nbGUgPSAxODAgLSBhbmdsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGVuZC54ID09IHN0YXJ0LnggJiYgZW5kLnkgPiBzdGFydC55KSB7IC8v6byg5qCH5Zyoeei9tOi0n+aWueWQkeS4ilxuICAgICAgICAgICAgYW5nbGUgPSAxODA7XG4gICAgICAgIH1cblxuICAgICAgICBpZihlbmQueCA+IHN0YXJ0LnggJiYgZW5kLnkgPT0gc3RhcnQueSkgeyAvL+m8oOagh+WcqHjovbTmraPmlrnlkJHkuIpcbiAgICAgICAgICAgIGFuZ2xlID0gOTA7XG4gICAgICAgIH1cblxuICAgICAgICBpZihlbmQueCA8IHN0YXJ0LnggJiYgZW5kLnkgPiBzdGFydC55KSB7IC8v6byg5qCH5Zyo56ys5LiJ6LGh6ZmQXG4gICAgICAgICAgICBhbmdsZSA9IDE4MCArIGFuZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZW5kLnggPCBzdGFydC54ICYmIGVuZC55ID09IHN0YXJ0LnkpIHsgLy/pvKDmoIflnKh46L206LSf5pa55ZCRXG4gICAgICAgICAgICBhbmdsZSA9IDI3MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGVuZC54IDwgc3RhcnQueCAmJiBlbmQueSA8IHN0YXJ0LnkpIHsgLy/pvKDmoIflnKjnrKzkuozosaHpmZBcbiAgICAgICAgICAgIGFuZ2xlID0gMzYwIC0gYW5nbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvL+i/lOWbnuinkuW6pizkuI3mmK/lvKfluqZcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmr4/pmpTkuInkvY3mlbDliqDkuIDkuKrpgJflj7dcbiAgICAgKiBAcGFyYW0ge3N0cmluZy9udW1iZXJ9IFt2YWx1ZV0g6KaB6L2s5o2i55qE5YC8XG4gICAgICogKi9cbiAgICBjdXRTdHI6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZhciB0ZW1wID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluakreWchuWGhemaj+acuuS4gOeCuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXNYIOakreWchljovbTljYrlvoRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzWSDmpK3lnIZZ6L205Y2K5b6EXG4gICAgICogQHBhcmFtIHtvYmplY3R9IOmaj+acuueCuVxuICAgICAqICovXG4gICAgZ2V0RWxsaXBzZVJhbmRvbVBvaW50OiBmdW5jdGlvbihyYWRpdXNYLCByYWRpdXNZKSB7XG4gICAgICAgIHZhciBhbmdsZSA9IChNYXRoLnJhbmRvbSgpICogMzYwKTtcbiAgICAgICAgLy/mraPlvKblh73mlbDlm77lg4/nibnngrkgeOKIiFswLDLPgF0gNeeCueinguWvn+WAvFswLDEsIDAsLTEsMF1cbiAgICAgICAgLy/kvZnlvKblh73mlbDlm77lg4/nibnngrkgeOKIiFswLDLPgF0gNeeCueinguWvn+WAvFsxLDAsLTEsIDAsMV1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IE1hdGguc2luKE1hdGguUEkgLyAxODAgKiBhbmdsZSkgKiAoTWF0aC5yYW5kb20oKSAqIHJhbmRpdXNYKSxcbiAgICAgICAgICAgIHk6IE1hdGguY29zKE1hdGguUEkgLyAxODAgKiBhbmdsZSkgKiAoTWF0aC5yYW5kb20oKSAqIHJhbmRpdXNZKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuoeeul+aWkOazoumCo+WlkeaVsOWIlyDpgJLlvZJcbiAgICAgKi9cbiAgICBmYm5xOiBmdW5jdGlvbihuKSB7XG4gICAgICAgIGlmKG4gPT0gMSB8fCBuID09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLmZibnEobiAtIDEpICsgTWF0aC5mYm5xKG4gLSAyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6h566X5paQ5rOi6YKj5aWR5pWw5YiXIOmdnumAkuW9klxuICAgICAqL1xuICAgIGZibnEyOiBmdW5jdGlvbihuKSB7XG4gICAgICAgIHZhciBhLCBiLCByZXM7XG4gICAgICAgIGEgPSBiID0gMTtcbiAgICAgICAgZm9yKHZhciBpID0gMzsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgICAgIHJlcyA9IGEgKyBiO1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gcmVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaxguS4pOS4quaVsOeahOacgOWkp+WFrOe6puaVsFxuICAgICAqL1xuICAgIGdjZDogZnVuY3Rpb24obnVtMSwgbnVtMikge1xuICAgICAgICBpZihudW0xICUgbnVtMiA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmdjZChudW0yLCBudW0xICUgbnVtMik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5rGC5Lik5Liq5pWw55qE5pyA5bCP5YWs5YCN5pWwXG4gICAgICovXG4gICAgbGNtOiBmdW5jdGlvbihudW0xLCBudW0yKSB7XG4gICAgICAgIHZhciBudW0gPSBudW0xICogbnVtMiAvIE1hdGguZ2NkKG51bTEsIG51bTIpO1xuICAgICAgICByZXR1cm4gbnVtO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7mlbDnu4Tph4znmoTmpoLnjoflhYPntKDvvIznlJ/miJDmlrDnmoTmpoLnjofmlbDnu4RcbiAgICAgKiBA5L6L77yadmFyIGE9WzAuNSwwLjEsMC4yLDAuMl07IOWwseaYrzUwJeS4qjDvvIwxMCXkuKox77yMMjAl5LiqMu+8jDIwJeS4qjPvvIznlJ/miJDnmoTmlbDnu4TlsLHmmK9bMCwwLDAsMCwwLDEsMiwyLDMsM11cbiAgICAgKiDms6jvvJrmlbDnu4TlhYPntKDnmoTlkozkuI3opoHlpKfkuo4x77yM5YGa5qaC546H55u45YWz55qE56iL5bqP5pe25Y+v5Lul55So5Yiw5a6DXG4gICAgICog5Zug5Li655So5Yiw5LqG5pyA5bCP5YWs5YCN5pWw5Ye95pWw77yM5omA5Lul5bCx5oqK5a6D5pS+5Yiw5pWw5a2m57G76YeM5LqG77yM6ICM5rKh5pS+5Yiw5pWw57uE57G76YeMXG4gICAgICogKi9cbiAgICBnZXRQcm86IGZ1bmN0aW9uKF9fYXJyKSB7XG4gICAgICAgIHZhciBwID0gX19hcnI7XG4gICAgICAgIHZhciBMID0gZ2V0TENNKHApOyAvL+iOt+WPluacgOWwj+WFrOWAjeaVsFxuXG4gICAgICAgIHZhciBBID0gW107XG4gICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrID0gTCAqIHBbaV0gKyBsO1xuICAgICAgICAgICAgd2hpbGUobCA8IGspIHtcbiAgICAgICAgICAgICAgICBBW2xdID0gaTtcbiAgICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRMQ00oX19wKSB7XG4gICAgICAgICAgICB2YXIgbiA9IDE7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG4gPSBNYXRoLmxjbShuLCAxIC8gcFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIOiMg+WbtOWGhemaj+acuuWPluaVtCxfX3plcm/vvJrmmK/lkKbmjpLpmaQw77yMdHJ1ZeaYr+aOkumZpO+8jGZhbHNl5piv5LiN5o6S6Zmk77yM6buY6K6k5Li6ZmFsc2VcbiAgICAgKiAqL1xuICAgIHJhbmRvbUludGVnZXI6IGZ1bmN0aW9uKGxvdywgaGlnaCwgX196ZXJvKSB7XG4gICAgICAgIHZhciB6ZXJvID0gX196ZXJvIHx8IGZhbHNlO1xuICAgICAgICB2YXIgbk1hdGggPSBsb3cgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdykpO1xuICAgICAgICBpZih6ZXJvID09IHRydWUpIHtcbiAgICAgICAgICAgIHdoaWxlKG5NYXRoID09IDApIHtcbiAgICAgICAgICAgICAgICBuTWF0aCA9IGxvdyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5NYXRoO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIOiMg+WbtOWGhemaj+acuuWPluWwj+aVsFxuICAgICAqICovXG4gICAgcmFuZG9tRmxvYXQ6IGZ1bmN0aW9uKGxvdywgaGlnaCwgX196ZXJvKSB7XG4gICAgICAgIHZhciB6ZXJvID0gX196ZXJvIHx8IGZhbHNlO1xuICAgICAgICB2YXIgbk1hdGggPSBsb3cgKyAoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSk7XG4gICAgICAgIGlmKHplcm8gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgd2hpbGUobk1hdGggPT0gMCkge1xuICAgICAgICAgICAgICAgIG5NYXRoID0gbG93ICsgKE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuTWF0aDtcbiAgICB9XG59IiwidmFyIHVzZXJBZ2VudD13aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbnZhciBmaW5kPWZ1bmN0aW9uKG5lZWRsZSl7XG4gICAgcmV0dXJuIHVzZXJBZ2VudC5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xufVxuXG52YXIgb3M9e307XG5vcy5pcGhvbmU9ZmluZCgnaVBob25lJyk7XG5vcy5pcG9kPWZpbmQoJ2lQb2QnKTtcbm9zLmlwYWQ9ZmluZCgnaVBhZCcpO1xub3MuaW9zPW9zLmlwaG9uZSB8fCBvcy5pcG9kIHx8IG9zLmlwYWQ7XG5cbm9zLmFuZHJvaWQ9ZmluZCgnQW5kcm9pZCcpO1xuXG4vL+WNjuS4uuaJi+aculxub3MuaXNIdWFXZWk9ZmluZCgnSFVBV0VJJyk7XG5cbi8v5b6u5L+hQVBQ57uI56uvXG5vcy53ZUNoYXQ9ZmluZCgnTWljcm9NZXNzZW5nZXInKTtcblxuLy/pq5jlvrdBUFDnu4jnq69cbm9zLmFtYXA9ZmluZCgnYW1hcCcpO1xuXG4vL+aYr+WQpuaYr+enu+WKqOerryjnvZHnu5zmioTlj5bvvIzlvoXkvJjljJbvvIHvvIHvvIEpXG5vcy5pc01vYmlsZT11c2VyQWdlbnQubWF0Y2goLyhwaG9uZXxwYWR8cG9kfGlQaG9uZXxpUG9kfGlvc3xpUGFkfEFuZHJvaWR8TW9iaWxlfEJsYWNrQmVycnl8SUVNb2JpbGV8TVFRQnJvd3NlcnxKVUN8RmVubmVjfHdPU0Jyb3dzZXJ8QnJvd3Nlck5HfFdlYk9TfFN5bWJpYW58V2luZG93cyBQaG9uZSkvaSk7XG5cbmV4cG9ydCBkZWZhdWx0IG9zOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmV7XG5cbiAgICBjb25zdHJ1Y3RvcigkaW1nKSB7XG4gICAgICAgIHRoaXMuX2ltZz0kaW1nO1xuXG4gICAgICAgIHRoaXMuY2FudmFzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmN0eD10aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnRleHR1cmVXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy50ZXh0dXJlSGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWcsIDAsIDAsIHRoaXMudGV4dHVyZVdpZHRoLCB0aGlzLnRleHR1cmVIZWlnaHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHiuaUvue6ueeQhlxuICAgICAqICovXG4gICAgZGlzcG9zZSAoICl7XG5cbiAgICB9XG5cbiAgICBnZXRQaXhlbDMyICgpe1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5oyH5a6a5YOP57Sg5Yy65Z+f55qE6aKc6Imy5YC8XG4gICAgICogKi9cbiAgICBnZXRQaXhlbHMgKCB4LCB5ICwgd2lkdGgsIGhlaWdodCl7XG4gICAgICAgIGxldCBpbWdEYXRhPXRoaXMuY3R4LmdldEltYWdlRGF0YSh4LCB4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBsZXQgeHlEYXRhID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBfbnVtID0gKGkgKiB3aWR0aCArIGopICogNDtcbiAgICAgICAgICAgICAgICBsZXQgX3JlZD1pbWdEYXRhLmRhdGFbX251bSArIDBdO1xuICAgICAgICAgICAgICAgIGxldCBfZ3JlZW49aW1nRGF0YS5kYXRhW19udW0gKyAxXTtcbiAgICAgICAgICAgICAgICBsZXQgX2JsdWU9aW1nRGF0YS5kYXRhW19udW0gKyAyXTtcbiAgICAgICAgICAgICAgICBsZXQgX2FscGhhPWltZ0RhdGEuZGF0YVtfbnVtICsgM107XG4gICAgICAgICAgICAgICAgaWYgKF9hbHBoYSA+IDApIHh5RGF0YS5wdXNoKHt4OmoseTppLHI6X3JlZCxnOl9ncmVlbixiOl9ibHVlLGE6X2FscGhhfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHh5RGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAg6KOB5Ymq5oyH5a6a5Yy65Z+f5bm25L+d5a2Y5oiQ5Zu+54mHXG4gICAgICogKi9cbiAgICBzYXZlVG9GaWxlICgpe1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L2s5o2i5oiQYmFzZTY05a2X56ym5Liy77yM5aaC5p6c5Zu+54mH77yI5oiW6ICF5YyF5ZCr55qE5Zu+54mH77yJ6Leo5Z+f77yM5YiZ6L+U5ZuebnVsbFxuICAgICAqICovXG4gICAgdG9EYXRhVVJMICgpe1xuXG4gICAgfVxuXG4gICAgZ2V0IHRleHR1cmVXaWR0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faW1nLndpZHRoO1xuICAgIH1cbiAgICBnZXQgdGV4dHVyZUhlaWdodCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faW1nLmhlaWdodDtcbiAgICB9XG59IiwibGV0IGhyZWY9d2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKiDop6PmnpB1cmws5b6F5a6e546w77yB77yB77yB77yBXG4gICAgICogQHJldHVyblxuICAgICAqICovXG4gICAgcGFyc2U6ZnVuY3Rpb24oKXtcbiAgICAgICAgLy9odHRwOi8vMTgwLmFpP2E9MSZiPTIjdGVjaFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvdG9jb2w6ICdodHRwOicsXG4gICAgICAgICAgICBzbGFzaGVzOiB0cnVlLFxuICAgICAgICAgICAgYXV0aDogbnVsbCxcbiAgICAgICAgICAgIGhvc3Q6ICcxODAuYWknLFxuICAgICAgICAgICAgcG9ydDogbnVsbCxcbiAgICAgICAgICAgIGhvc3RuYW1lOiAnMTgwLmFpJyxcbiAgICAgICAgICAgIGhhc2g6ICcjdGVjaCcsXG4gICAgICAgICAgICBzZWFyY2g6ICc/YT0xJmI9MicsXG4gICAgICAgICAgICBxdWVyeTogJ2E9MSZiPTInLFxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvJyxcbiAgICAgICAgICAgIHBhdGg6ICcvP2E9MSZiPTInLFxuICAgICAgICAgICAgaHJlZjogJ2h0dHA6Ly8xODAuYWkvP2E9MSZiPTIjdGVjaCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+WVVJM5Y+C5pWwXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB3aW5kb3cudXJsVXRpbC5xdWVyeVN0cmluZygpO1xuICAgICAqXG4gICAgICogQHJldHJ1biB7fVxuICAgICAqICovXG4gICAgcXVlcnlTdHJpbmc6ZnVuY3Rpb24oKXtcbiAgICAgICAgLy/ov5Tlm57nmoTlj4LmlbDlr7nosaFcbiAgICAgICAgdmFyIGFncz17fTtcbiAgICAgICAgaWYoaHJlZi5sZW5ndGg+MSl7XG4gICAgICAgICAgICB2YXIgcXVlcnk9aHJlZi5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICB2YXIgaXRlbXM9cXVlcnkuc3BsaXQoJyYnKTtcbiAgICAgICAgICAgIHZhciBpdGVtPW51bGw7XG4gICAgICAgICAgICBmb3IodmFyIGk9MCxsZW49aXRlbXMubGVuZ3RoO2k8bGVuO2krKyl7XG4gICAgICAgICAgICAgICAgaXRlbT1pdGVtc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgdmFyIGtleT1kZWNvZGVVUklDb21wb25lbnQoaXRlbVswXSk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbD1kZWNvZGVVUklDb21wb25lbnQoaXRlbVsxXSk7XG4gICAgICAgICAgICAgICAgYWdzW2tleV09dmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZ3M7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgLypcbiAgICAqIOenkui9rOaNouaIkOaXtuWIhuenklxuICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWUg5pe26Ze056eSXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IOaXtuWIhuenkiAnMDA6MDA6MDAnXG4gICAgKiAqL1xuICAgIGZvcm1hdFRpbWU6ZnVuY3Rpb24odGltZSl7XG4gICAgICAgIC8v5bCP5LqOMTDliY3pnaLliqAnMCdcbiAgICAgICAgdmFyIHQ9ZnVuY3Rpb24obnVtKXtcbiAgICAgICAgICAgIGlmKG51bTwxMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcwJytudW0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaG91cnM9JycsbWludXRlcz0nJyxzZWNvbmRzPScnO1xuICAgICAgICBpZih0aW1lPjApe1xuICAgICAgICAgICAgc2Vjb25kcz10KHBhcnNlSW50KHRpbWUlNjApKTtcbiAgICAgICAgICAgIGlmKHRpbWU+PTYwKXtcbiAgICAgICAgICAgICAgICBtaW51dGVzPXQocGFyc2VJbnQodGltZS82MCU2MCkpKyc6JztcbiAgICAgICAgICAgICAgICBpZih0aW1lPj0zNjAwKXtcbiAgICAgICAgICAgICAgICAgICAgaG91cnM9dChwYXJzZUludCh0aW1lLzM2MDAlMjQpKSsnOic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbWludXRlcz0nMDA6J1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlY29uZHM9JzAwOjAwJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG91cnMrbWludXRlcytzZWNvbmRzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5re75Yqgc2NyaXB0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwganMgdXJsXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29ubG9hZF0g5Yqg6L295oiQ5Yqf5Zue6LCDXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29uZXJyb3JdIOWKoOi9veWksei0peWbnuiwg1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBzY3JpcHTlvJXnlKhcbiAgICAgKi9cbiAgICBhZGRTY3JpcHQ6IGZ1bmN0aW9uKHVybCwgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgaWYgKG9ubG9hZCkge1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG9ubG9hZChzY3JpcHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYob25lcnJvcil7XG4gICAgICAgICAgICAgICAgb25lcnJvcihzY3JpcHQpO1xuICAgICAgICAgICAgfWVsc2UgaWYob25sb2FkKXtcbiAgICAgICAgICAgICAgICBvbmxvYWQoc2NyaXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICByZXR1cm4gc2NyaXB0O1xuICAgIH0sXG4gICAgLypcbiAgICAqIERPTea3u+WKoOexu1xuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIERPTeWFg+e0oFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIOexu+WQjVxuICAgICogKi9cbiAgICBhZGRDbGFzczogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgcmVnQ2xhc3NOYW1lID0gbmV3IFJlZ0V4cCgnKF58ICknICsgY2xhc3NOYW1lICsgJyggfCQpJyk7XG4gICAgICAgIC8vKCAvXFxzKy8g5Yy56YWN5Lu75L2V56m655m956ym77yM5YyF5ousXFxuLFxccixcXGYsXFx0LFxcduetie+8iOaNouihjOOAgeWbnui9puOAgeepuuagvOOAgXRhYuetie+8iX0pXG4gICAgICAgIGlmICghcmVnQ2xhc3NOYW1lLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykuY29uY2F0KGNsYXNzTmFtZSkuam9pbignICcpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKlxuICAgICogRE9N5Yig6Zmk57G7XG4gICAgKiAqL1xuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHZhciByZWdDbGFzc05hbWUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NOYW1lICsgJyhcXFxcc3wkKScsICdnJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZWdDbGFzc05hbWUsICcnKTtcbiAgICB9LFxuICAgIC8qXG4gICAgKiDliKTmlq1ET03mmK/lkKbmnInmn5DkuKrnsbvlkI1cbiAgICAqICovXG4gICAgaGFzQ2xhc3M6ZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNsYXNzTmFtZSArICcoXFxcXHN8JCknKSk7XG4gICAgfSxcbiAgICAvKlxuICAgICogRE9N5re75YqgL+WIoOmZpOexu+eahOWIh+aNouaTjeS9nFxuICAgICogKi9cbiAgICB0b2dnbGVDbGFzczpmdW5jdGlvbiAoZWxlbWVudCxjbGFzc05hbWUpe1xuICAgICAgICBpZih0aGlzLmhhc0NsYXNzKGVsZW1lbnQsY2xhc3NOYW1lKSl7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKlxuICAgICog6I635Y+WRE9N56ys5Yeg5Liq5a2Q5YWD57SgXG4gICAgKiAqL1xuICAgIGdldEVsZW1lbnRJbmRleDpmdW5jdGlvbihlbGUpe1xuICAgICAgICB2YXIgZWxlbWVudHM9ZWxlLnBhcmVudE5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgZm9yKHZhciBpbmRleD0wLGk9MCxsZW49ZWxlbWVudHMubGVuZ3RoO2k8bGVuO2krKyl7XG4gICAgICAgICAgICBpZihlbGU9PT1lbGVtZW50c1tpXSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZWxlbWVudHNbaV0ubm9kZVR5cGU9PTEpe1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgJ+iOt+WPlumUmeivryc7XG4gICAgfSxcbiAgICAvKlxuICAgICog5Yik5pat5a+56LGh5piv5ZCm5Li65pWw57uEXG4gICAgKiBAcGFyYW0gdmFsdWUgLSDliKTmlq3nmoR2YWx1ZVxuICAgICogKi9cbiAgICBpc0FycmF5OmZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKS5jYWxsKHZhbHVlKT09PSdbT2JqZWN0IEFycmF5XSc7XG4gICAgfSxcbiAgICAvKlxuICAgICog5Yik5pat5a+56LGh5piv5ZCm5Li65Ye95pWwXG4gICAgKiAqL1xuICAgIGlzRnVuY3Rpb246ZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpLmNhbGwodmFsdWUpPT09J1tPYmplY3QgRnVuY3Rpb25dJztcbiAgICB9LFxuICAgIC8qXG4gICAgKiDliKTmlq3lr7nosaHmmK/lkKbkuLrmraPliJlcbiAgICAqICovXG4gICAgaXNSZWdFeHA6ZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpLmNhbGwodmFsdWUpPT09J1tPYmplY3QgUmVnRXhwXSc7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmlbDlrZflm5voiI3kupTlhaXvvIjkv53nlZlu5L2N5bCP5pWw77yJXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtudW1iZXJdIOimgeWbm+iIjeS6lOWFpeeahOaVsOWtl1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbl0g5L+d55WZ55qE5L2N5pWwXG4gICAgICogKi9cbiAgICBnZXRGbG9hdDpmdW5jdGlvbihudW1iZXIsIG4pIHtcbiAgICAgICAgbiA9IG4gPyBwYXJzZUludChuKSA6IDA7XG4gICAgICAgIGlmKG4gPD0gMCkgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICAgICAgbnVtYmVyID0gTWF0aC5yb3VuZChudW1iZXIgKiBNYXRoLnBvdygxMCwgbikpIC8gTWF0aC5wb3coMTAsIG4pO1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH0sXG4gICAgLypcbiAgICAgKiDlsIbmlbDlrZfovazmiJDmlbDnu4RcbiAgICAgKiAqL1xuICAgIGdldE51bVRvQXJyYXk6ZnVuY3Rpb24obnVtYmVyKSB7XG4gICAgICAgIHZhciBhYTtcbiAgICAgICAgaWYobnVtYmVyIDwgMTApIHtcbiAgICAgICAgICAgIGFhID0gJzAnICsgbnVtYmVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWEgPSBudW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhcnIgPSBhYS5zcGxpdChcIlwiKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIC8qKlxuICAgICog5bCG5a2X56ym5Liy5Lit55qE5oyH5a6a5a2X56ym5YWo6YOo5pu/5o2i5oiQ5Y+m5LiA5Liq5a2X56ymXG4gICAgKiBzdHI65pW05Liq5a2X56ym5LiyXG4gICAgKiBhOuimgeiiq+abv+aNoueahOWtl+esplxuICAgICogYjrmm7/mjaLmiJDov5nkuKrlrZfnrKZcbiAgICAqIG1tOuWMuemFjeaooeW8j++8jOWmguS4izpcbiAgICAqIFx0ZzrlhajlsYDljLnphY1cbiAgICBpOuWMuuWIhuWkp+Wwj+WGmVxuICAgIG065aSa6KGM5Yy56YWNXG4gICAgKiAqL1xuICAgIHN0clJlcGxhY2U6IGZ1bmN0aW9uKHN0ciwgYSwgYiwgbW0pIHtcbiAgICAgICAgaWYobSA9PSBudWxsKSB7XG4gICAgICAgICAgICBtID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNjID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChhLCBtbSksIGIpO1xuICAgICAgICByZXR1cm4gY2M7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDooaXkvY3vvIznu5nmjIflrprlrZfnrKbkuLLliY3pnaLooaXkvY3vvIznlKjmjIflrprnmoTlrZfnrKbooaXkvY3vvIzpu5jorqTkuLrnqbrmoLxcbiAgICAgKiBzdHI65oyH5a6a5a2X56ymXG4gICAgICogbGVuOuihpeWHoOS9jVxuICAgICAqIGNoOuihpeS7gOS5iOWtl+esplxuICAgICAqICovXG4gICAgbGVmdHBhZDogZnVuY3Rpb24oc3RyLCBsZW4sIGNoKSB7XG4gICAgICAgIHN0ciA9IFN0cmluZyhzdHIpO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICBpZighY2ggJiYgY2ggIT09IDApIGNoID0gJyAnO1xuICAgICAgICB3aGlsZSgrK2kgPCBsZW4pIHtcbiAgICAgICAgICAgIHN0ciA9IGNoICsgc3RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufTsiLCIvKipcbiAqIOa0l+eJjOeul+azlSDmiZPkubHmlbDnu4RcbiAqIEByZXR1cm4g5omT5Lmx5ZCO55qE5pWw57uEXG4gKiAqL1xuQXJyYXkucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcblx0dmFyIGksIHQsIG0gPSB0aGlzLmxlbmd0aDtcblx0d2hpbGUobSkge1xuXHRcdGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xuXHRcdHQgPSB0aGlzW21dO1xuXHRcdHRoaXNbbV0gPSB0aGlzW2ldO1xuXHRcdHRoaXNbaV0gPSB0O1xuXHR9XG5cdHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIOiOt+WPluaVsOe7hOS4reeahCDmnIDlsI/lgLx85pyA5aSn5YC8XG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIHsnbWluJ3wnbWF4J31cbiAqIEByZXR1cm4g5pWw57uE5Lit55qE5LiA5Liq5YC8XG4gKiAqL1xuQXJyYXkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24oc3RyKSB7XG5cdHZhciBhcnIgPSB0aGlzO1xuXHR2YXIgdmFsdWUgPSBhcnJbMF07XG5cdGZvcih2YXIgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRpZihzdHIgPT09ICdtaW4nICYmIHZhbHVlID4gYXJyW2ldKSB7XG5cdFx0XHR2YWx1ZSA9IGFycltpXTtcblx0XHR9IGVsc2UgaWYoc3RyID09PSAnbWF4JyAmJiB2YWx1ZSA8IGFycltpXSkge1xuXHRcdFx0dmFsdWUgPSBhcnJbaV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiDpmo/mnLrmipPlj5ZO5Liq5YWD57Sg55Sf5oiQ5paw5pWw57uE77yM5aaC5p6cX19udW3kuLow5oiW5LiN5aGr77yM5YiZ6L+U5Zue5Y6f5pWw57uEXG4gKiBAcGFyYW0ge051bWJlcn0gX19udW1cbiAqICovXG5BcnJheS5wcm90b3R5cGUuZ2V0RXh0ID0gZnVuY3Rpb24oX19udW0pIHtcblx0aWYoX19udW0gPT09IDAgfHwgIV9fbnVtKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0dmFyIGFyciA9IHRoaXMuc2h1ZmZsZSgpO1xuXHR2YXIgYXJyMiA9IFtdO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgX19udW07IGkrKykge1xuXHRcdGFycjIucHVzaChhcnJbaV0pO1xuXHR9XG5cblx0cmV0dXJuIGFycjI7XG59XG4iLCIvKipcbiAqIOaVsOWtl+WAvOebuOWFs+WKn+iDvVxuICog6YG15b6qbW96aWxsYeeahOinhOWIme+8muaJqeWxleWGhee9ruWOn+Wei+eahOWUr+S4gOeQhueUseaYr+aUr+aMgUphdmFTY3JpcHQg5byV5pOO55qE5paw54m55oCn77yM5aaCQXJyYXkuZm9yRWFjaOOAglxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcblxufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vICBBRE9CRSBTWVNURU1TIElOQ09SUE9SQVRFRFxyXG4vLyAgQ29weXJpZ2h0IDIwMDYtMjAwNyBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZFxyXG4vLyAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIE5PVElDRTogQWRvYmUgcGVybWl0cyB5b3UgdG8gdXNlLCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgZmlsZVxyXG4vLyAgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSB0ZXJtcyBvZiB0aGUgbGljZW5zZSBhZ3JlZW1lbnQgYWNjb21wYW55aW5nIGl0LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIGEgQ29va2llIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIHZhbHVlLlxyXG4gKlxyXG4gKiBuYW1lICAgICAgIE5hbWUgb2YgdGhlIGNvb2tpZVxyXG4gKiB2YWx1ZSAgICAgIFZhbHVlIG9mIHRoZSBjb29raWVcclxuICogW2V4cGlyZXNdICBFeHBpcmF0aW9uIGRhdGUgb2YgdGhlIGNvb2tpZSAoZGVmYXVsdDogZW5kIG9mIGN1cnJlbnQgc2Vzc2lvbilcclxuICogW3BhdGhdICAgICBQYXRoIHdoZXJlIHRoZSBjb29raWUgaXMgdmFsaWQgKGRlZmF1bHQ6IHBhdGggb2YgY2FsbGluZyBkb2N1bWVudClcclxuICogW2RvbWFpbl0gICBEb21haW4gd2hlcmUgdGhlIGNvb2tpZSBpcyB2YWxpZFxyXG4gKiAgICAgICAgICAgICAgKGRlZmF1bHQ6IGRvbWFpbiBvZiBjYWxsaW5nIGRvY3VtZW50KVxyXG4gKiBbc2VjdXJlXSAgIEJvb2xlYW4gdmFsdWUgaW5kaWNhdGluZyBpZiB0aGUgY29va2llIHRyYW5zbWlzc2lvbiByZXF1aXJlcyBhXHJcbiAqICAgICAgICAgICAgICBzZWN1cmUgdHJhbnNtaXNzaW9uXHJcbiAqXHJcbiAqIEBwYXJhbVxyXG4gKiBzZXRDb29raWUoXCJ0YXN0eVwiLFwic3RyYXdiZXJyeTJcIik7XHJcbiAqIHNldENvb2tpZShcInl1bW15XCIsXCJjaG9jbzJcIixnZXREYXRhKCdzMycpKTtcclxuICovXHJcbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpXHJcbntcclxuICAgIGRvY3VtZW50LmNvb2tpZT0gbmFtZSArIFwiPVwiICsgZXNjYXBlKHZhbHVlKSArXHJcbiAgICAgICAgKChleHBpcmVzKSA/IFwiOyBleHBpcmVzPVwiICsgZXhwaXJlcy50b1VUQ1N0cmluZygpIDogXCJcIikgK1xyXG4gICAgICAgICgocGF0aCkgPyBcIjsgcGF0aD1cIiArIHBhdGggOiBcIlwiKSArXHJcbiAgICAgICAgKChkb21haW4pID8gXCI7IGRvbWFpbj1cIiArIGRvbWFpbiA6IFwiXCIpICtcclxuICAgICAgICAoKHNlY3VyZSkgPyBcIjsgc2VjdXJlXCIgOiBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgY29va2llLlxyXG4gKlxyXG4gKiBuYW1lICBOYW1lIG9mIHRoZSBkZXNpcmVkIGNvb2tpZS5cclxuICpcclxuICogUmV0dXJucyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlIG9mIHNwZWNpZmllZCBjb29raWUsXHJcbiAqICAgb3IgbnVsbCBpZiBjb29raWUgZG9lcyBub3QgZXhpc3QuXHJcbiAqXHJcbiAqIEBwYXJhbVxyXG4gKiBjb25zb2xlLmxvZyhnZXRDb29raWUoJ3Rhc3R5JykpO1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpXHJcbntcclxuICAgIHZhciBkYyA9IGRvY3VtZW50LmNvb2tpZTtcclxuICAgIHZhciBwcmVmaXggPSBuYW1lICsgXCI9XCI7XHJcbiAgICB2YXIgYmVnaW4gPSBkYy5pbmRleE9mKFwiOyBcIiArIHByZWZpeCk7XHJcbiAgICBpZiAoYmVnaW4gPT0gLTEpXHJcbiAgICB7XHJcbiAgICAgICAgYmVnaW4gPSBkYy5pbmRleE9mKHByZWZpeCk7XHJcbiAgICAgICAgaWYgKGJlZ2luICE9IDApIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGJlZ2luICs9IDI7XHJcbiAgICB9XHJcbiAgICB2YXIgZW5kID0gZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCI7XCIsIGJlZ2luKTtcclxuICAgIGlmIChlbmQgPT0gLTEpXHJcbiAgICB7XHJcbiAgICAgICAgZW5kID0gZGMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZXNjYXBlKGRjLnN1YnN0cmluZyhiZWdpbiArIHByZWZpeC5sZW5ndGgsIGVuZCkpO1xyXG59XHJcblxyXG4vKipcclxuICogRGVsZXRlcyB0aGUgc3BlY2lmaWVkIGNvb2tpZS5cclxuICpcclxuICogbmFtZSAgICAgIG5hbWUgb2YgdGhlIGNvb2tpZVxyXG4gKiBbcGF0aF0gICAgcGF0aCBvZiB0aGUgY29va2llIChtdXN0IGJlIHNhbWUgYXMgcGF0aCB1c2VkIHRvIGNyZWF0ZSBjb29raWUpXHJcbiAqIFtkb21haW5dICBkb21haW4gb2YgdGhlIGNvb2tpZSAobXVzdCBiZSBzYW1lIGFzIGRvbWFpbiB1c2VkIHRvIGNyZWF0ZSBjb29raWUpXHJcbiAqXHJcbiAqIEBwYXJhbSBkZWxldGVDb29raWUoJ3Rhc3R5Jyk7XHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxldGVDb29raWUobmFtZSwgcGF0aCwgZG9tYWluKVxyXG57XHJcbiAgICBpZiAoZ2V0Q29va2llKG5hbWUpKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIFxyXG4gICAgICAgICAgICAoKHBhdGgpID8gXCI7IHBhdGg9XCIgKyBwYXRoIDogXCJcIikgK1xyXG4gICAgICAgICAgICAoKGRvbWFpbikgPyBcIjsgZG9tYWluPVwiICsgZG9tYWluIDogXCJcIikgK1xyXG4gICAgICAgICAgICBcIjsgZXhwaXJlcz1UaHUsIDAxLUphbi03MCAwMDowMDowMSBHTVRcIjtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuICog6I635Y+W5oOz6KaB55qE5pe26Ze0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgczHkuIDnp5IgaDHkuIDlsI/ml7YgZDHkuIDlpKlcclxuICogQHJldHVybiB7bnVtYmVyfSDlvZPliY3ml7bpl7Qrc3Ry55qE5pe26Ze0XHJcbiAqICovXHJcbmZ1bmN0aW9uIGdldERhdGEoc3RyKXtcclxuICAgIHZhciBzdHIxPXN0ci5zdWJzdHJpbmcoMCwxKTtcclxuICAgIHZhciBzdHIyPXN0ci5zdWJzdHJpbmcoMSxzdHIubGVuZ3RoKSoxO1xyXG4gICAgdmFyIHRpbWU9MDtcclxuICAgIGlmKHN0cjE9PSdzJyl7XHJcbiAgICAgICAgdGltZT1zdHIyKjEwMDA7XHJcbiAgICB9ZWxzZSBpZihzdHIxPT0naCcpe1xyXG4gICAgICAgIHRpbWU9c3RyMio2MCo2MCoxMDAwO1xyXG4gICAgfWVsc2UgaWYoc3RyMT09J2QnKXtcclxuICAgICAgICB0aW1lPXN0cjIqMjQqNjAqNjAqMTAwMDtcclxuICAgIH1cclxuICAgIHZhciBkYXRhPW5ldyBEYXRlKCk7XHJcbiAgICBkYXRhLnNldFRpbWUoZGF0YS52YWx1ZU9mKCkrdGltZSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBzZXRDb29raWUsXHJcbiAgICBnZXRDb29raWUsXHJcbiAgICBkZWxldGVDb29raWUsXHJcbn0iLCIvL+WfuuacrOaVsOaNruexu+Wei++8mk5uZGVmaW5lZCBOdWxsIEJvb2xlYW4gU3RyaW5nIE51bWJlclxuLy/lvJXnlKjmlbDmja7nsbvlnovvvJpPYmplY3QgU3ltYm9sXG5cbmltcG9ydCAnLi9iYXNlL0FycmF5LmpzJztcbmltcG9ydCAnLi9iYXNlL051bWJlci5qcyc7XG5cbmltcG9ydCBNYXRoIGZyb20gJy4vTWF0aC5qcyc7XG5pbXBvcnQgT1MgZnJvbSAnLi9PUy5qcyc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuaW1wb3J0IFVSTCBmcm9tICcuL1VSTC5qcyc7XG5pbXBvcnQge3NldENvb2tpZSxnZXRDb29raWUsZGVsZXRlQ29va2llfSBmcm9tIFwiLi9jb29raWVzLmpzXCI7XG5cbmltcG9ydCBUZXh0dXJlIGZyb20gXCIuL1RleHR1cmUuanNcIjtcblxuZXhwb3J0IHtcbiAgICBNYXRoLFxuICAgIE9TLFxuICAgIFV0aWwsXG4gICAgVVJMLFxuXG4gICAgc2V0Q29va2llLFxuICAgIGdldENvb2tpZSxcbiAgICBkZWxldGVDb29raWUsXG5cbiAgICBUZXh0dXJlLFxufSJdLCJzb3VyY2VSb290IjoiIn0=