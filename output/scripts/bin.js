"use strict";

(function (win, l) {
  /**
   * window.l 对象
   * */
  window.l = l || {};
})(window);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (win, l) {
  /**
   * 工具类
   * */
  var Util = function Util() {
    _classCallCheck(this, Util);

    /**
     * cookie 操作对象
     * */
    this.cookie = null;
  };

  Util.prototype = {
    /**
     * a 方法
     * */
    a: function a() {}
  };
  l.util = new Util();
})(window, window.l || {});
"use strict";

(function () {
  var proto = Array.prototype;
  /**
   * 洗牌算法 打乱数组
   * @return 打乱后的数组
   * */

  proto.shuffle = function () {
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


  proto.getValue = function (str) {
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
})();
"use strict";

(function () {
  var proto = String.prototype;
  /**
   * 判断是否为空字符
   * */

  proto.isEmpty = function () {
    return this.trim().length === 0;
  };
  /**
   * 在指定地方插入字符
   * @param {string} flg 要插入的字符串
   * @param {number} sn 要插入的位置
   * */


  proto.insertStr = function (flg, sn) {
    var a = this.slice(0, sn);
    var b = this.slice(sn);
    return a + flg + b;
  };
  /**
   * 删除指定地方的字符
   * @param {number} sn 要删除的位置
   * @param {number} len 删除字符的长度
   * */


  proto.deleteStr = function (sn, len) {
    len = len || 1;
    var arr = this.split('');
    arr.splice(sn - 1, len);
    return arr.join('');
  };
  /**
   * 随机A-Z|a-z|0-9 中的随机组合
   * @param {number} 随机组合的长度
   * @example String.prototype.randomString(); & ''.randomString();
   * @return {string} 随机组合的字符
   * */


  proto.randomStr = function (len) {
    len = len || 32;
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
        maxPos = $chars.length,
        i = 0,
        pwd = '';

    for (i; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }

    return pwd;
  };
  /**
   * 将字符串中的指定字符全部替换成另一个字符
   * @param str 整个字符串
   * @param a 要被替换的字符
   * @param b 替换成这个字符
   * @param mm 匹配模式 (g:全局匹配 i:区分大小写 m:多行匹配)
   * */


  function strReplace(str, a, b, mm) {
    mm = mm || '';
    return str.replace(new RegExp(a, mm), b);
  }
  /**
   * 补位，给指定字符串前面补位，用指定的字符补位，默认为空格
   * @param str 指定字符
   * @param len 补几位
   * @param ch 补什么字符
   * */


  function leftpad(str, len, ch) {
    str = String(str);
    var i = -1;
    if (!ch && ch !== 0) ch = ' ';

    while (++i < len) {
      str = ch + str;
    }

    return str;
  }
  /**
   * 截取指定长度的中英文混合字符串
   * @param {String} str string to be intercepted
   * @param {Number} len intercept length (double in Chinese characters)
   * @return {String} 截取后的字符
   * */


  function sub(str, len) {
    var newLength = 0;
    var newStr = ''; // eslint-disable-next-line

    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = '';
    var strLength = str.replace(chineseRegex, '**').length;

    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();

      if (singleChar.match(chineseRegex) != null) {
        newLength += 2;
      } else {
        newLength++;
      }

      if (newLength > len) {
        break;
      }

      newStr += singleChar;
    }

    if (strLength > len) {
      newStr += '...';
    }

    return newStr;
  }
  /**
   * Intercept the mixed Chinese and English mixed strings of the specified length
   * @param {String} str string to be intercepted
   * @param {Number} n intercept length (double in Chinese characters)
   * @return {String} intercepted string
   */


  function subString2(str, n) {
    // eslint-disable-next-line
    var r = /[ ^ \x00 - \xff ]/g;
    var m;

    if (str.replace(r, ' ** ').length > n) {
      m = Math.floor(n / 2);

      for (var i = m, l = str.length; i < l; i++) {
        if (str.substr(0, i).replace(r, ' ** ').length >= n) {
          return str.substr(0, i);
        }
      }
    }

    return str;
  }
})();
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (win, l) {
  var _l$cookie;

  l.cookie = (_l$cookie = {
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
     * @example setCookie("tasty","strawberry2")
     * @example setCookie("yummy","choco2",getDate('s3'))
     */
    setCookie: function setCookie(name, value, expires, path, domain, secure) {
      document.cookie = name + '=' + escape(value) + (expires ? '; expires=' + expires.toUTCString() : '') + (path ? '; path=' + path : '') + (domain ? '; domain=' + domain : '') + (secure ? '; secure' : '');
    }
  }, _defineProperty(_l$cookie, "setCookie", function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + '=' + escape(value) + (expires ? '; expires=' + expires.toUTCString() : '') + (path ? '; path=' + path : '') + (domain ? '; domain=' + domain : '') + (secure ? '; secure' : '');
  }), _defineProperty(_l$cookie, "getCookie", function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + '=';
    var begin = dc.indexOf('; ' + prefix);

    if (begin === -1) {
      begin = dc.indexOf(prefix);
      if (begin !== 0) return null;
    } else {
      begin += 2;
    }

    var end = document.cookie.indexOf(';', begin);

    if (end === -1) {
      end = dc.length;
    }

    return unescape(dc.substring(begin + prefix.length, end));
  }), _defineProperty(_l$cookie, "deleteCookie", function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
      document.cookie = name + '=' + (path ? '; path=' + path : '') + (domain ? '; domain=' + domain : '') + '; expires=Thu, 01-Jan-70 00:00:01 GMT';
    }
  }), _defineProperty(_l$cookie, "getDate", function getDate(str) {
    var str1 = str.substring(0, 1);
    var str2 = str.substring(1, str.length) * 1;
    var time = 0;

    if (str1 === 's') {
      time = str2 * 1000;
    } else if (str1 === 'h') {
      time = str2 * 60 * 60 * 1000;
    } else if (str1 === 'd') {
      time = str2 * 24 * 60 * 60 * 1000;
    }

    var data = new Date();
    data.setTime(data.valueOf() + time);
    return data;
  }), _l$cookie);
})(window, window.l || {});
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (win, l) {
  /**
   * 纹理类
   * */
  var Texture = /*#__PURE__*/function () {
    function Texture($img) {
      _classCallCheck(this, Texture);

      this._img = $img;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
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
            if (_alpha > 0) xyData.push({
              x: j,
              y: i,
              r: _red,
              g: _green,
              b: _blue,
              a: _alpha
            });
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

  l.Texture = Texture;
})(window, window.l || {});