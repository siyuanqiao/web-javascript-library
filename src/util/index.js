import extend from './extend.js';
import {addClass, removeClass, hasClass, toggleClass} from "./class";
import {isPlainObject, isFunction, isArray, isRegExp} from "./require";

export default {
  extend,
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  isPlainObject,
  isFunction,
  isArray,
  isRegExp,
  /*
  * 秒转换成时分秒
  * @param {number} time 时间秒
  * @return {string} 时分秒 '00:00:00'
  * */
  formatTime: function (time) {
    //小于10前面加'0'
    var t = function (num) {
      if (num < 10) {
        return '0' + num.toString();
      }
      return num;
    }

    var hours = '', minutes = '', seconds = '';
    if (time > 0) {
      seconds = t(parseInt(time % 60));
      if (time >= 60) {
        minutes = t(parseInt(time / 60 % 60)) + ':';
        if (time >= 3600) {
          hours = t(parseInt(time / 3600 % 24)) + ':';
        }
      } else {
        minutes = '00:'
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
  addScript: function (url, onload, onerror) {
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
  getFloat: function (number, n) {
    n = n ? parseInt(n) : 0;
    if (n <= 0) return Math.round(number);
    number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
    return number;
  },
  /*
   * 将数字转成数组
   * */
  getNumToArray: function (number) {
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
  strReplace: function (str, a, b, mm) {
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
  leftpad: function (str, len, ch) {
    str = String(str);
    var i = -1;
    if (!ch && ch !== 0) ch = ' ';
    while (++i < len) {
      str = ch + str;
    }
    return str;
  }
};