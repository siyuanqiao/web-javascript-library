(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bin"] = factory();
	else
		root["bin"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/$/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/$/domapi.js":
/*!*************************!*\
  !*** ./src/$/domapi.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAttribute = setAttribute;
function setAttribute(node, name, value) {
  value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
}

/***/ }),

/***/ "./src/$/index.js":
/*!************************!*\
  !*** ./src/$/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _require = __webpack_require__(/*! ./require */ "./src/$/require.js");

var _domapi = __webpack_require__(/*! ./domapi */ "./src/$/domapi.js");

var _utils = __webpack_require__(/*! ./utils */ "./src/$/utils.js");

var document = window.document,
    docElem = document.documentElement,
    body = document.body,
    tempParent = document.createElement('div'),
    emptyArr = [],
    _filter = emptyArr.filter,
    _slice = emptyArr.slice,
    forEach = emptyArr.forEach,
    simpleSelectorRE = /^[\w-]*$/,
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    //判断字符串是否为标签
singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    //判断是否为标签的形式（如<div></div>）
tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
  'tr': document.createElement('tbody'),
  'tbody': table, 'thead': table, 'tfoot': table,
  'td': tableRow, 'th': tableRow,
  '*': document.createElement('div')

  // 去除数组中重复出现的元素，返回新数组
};function uniq(array) {
  return _filter.call(array, function (item, idx) {
    return array.indexOf(item) === idx;
  });
}

// 过滤数组中值为null undefined的元素，返回新数组
function compact(array) {
  return _filter.call(array, function (item) {
    return item != null;
  });
}

function matches(element, selector) {
  if (!selector || !element || element.nodeType !== 1) return false;
  // matches 方法用于检测元素( element )是否匹配特定的选择器( selector )
  var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
  if (matchesSelector) return matchesSelector.call(element, selector);

  var math,
      parent = element.parentNode,
      temp = !parent;

  if (temp) (parent = tempParent).appendChild(element);

  math = ~qsa(parent, selector).indexOf(element);

  temp && tempParent.removeChild(element);
  return math;
}

function filtered(nodes, selector) {
  return selector === null || !selector ? $(nodes) : $(nodes).filter(selector);
}

function funcArg(context, arg, idx, payload) {
  return (0, _require.isFunction)(arg) ? arg.call(context, idx, payload) : arg;
}

// 判断是否为类数组
function likeArray(obj) {
  var length = !!obj && 'length' in obj && obj.length;

  // length === 0 其实就是将其看作为空数组
  // 最后一种情况必须要满足三个条件：
  // 1.length 必须为数字
  // 2.length 必须大于 0 ，表示有元素存在于类数组中
  // 3.key length - 1 必须存在于 obj 中。我们都知道，数组最后的 index 值为 length -1 ，这里也是检查最后一个 key 是否存在。
  return !(0, _require.isFunction)(obj) && !(0, _require.isWindow)(obj) && ((0, _require.isArray)(obj) || length === 0 || typeof length == 'number' && length > 0 && length - 1 in obj);
}

function fragment(html, name, properties) {
  var dom, container;

  // A special case optimization for a single tag
  if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

  if (!dom) {
    if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
    if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
    if (!(name in containers)) name = '*';

    container = containers[name];
    container.innerHTML = '' + html;
    dom = $.each(_slice.call(container.childNodes), function () {
      container.removeChild(this);
    });
  }

  return dom;
}

function qsa(element, selector) {
  var found,
      maybeID = selector[0] === '#',
      // ID
  maybeClass = !maybeID && selector[0] === '.',
      // class
  nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
      // 将id或class前面的符号去掉
  isSimple = simpleSelectorRE.test(nameOnly); // 是否为单个选择器

  return element.getElementById && isSimple && maybeID ? (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? // 1 元素节点, 9 Document节点, 11 DocumentFragment节点
  [] : _slice.call(isSimple && !maybeID && element.getElementsByClassName ? maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector) : element.querySelectorAll(selector));
}

function Bin(doms) {
  var i = 0;
  var len = doms ? doms.length : 0;
  for (i; i < len; i++) {
    this[i] = doms[i];
  }
  this.length = len;
}

// 定义$对象的原型对象
Bin.prototype = {
  constructor: Bin,
  indexOf: emptyArr.indexOf,
  method: function method() {
    return this;
  },
  each: function each(callback) {
    emptyArr.every.call(this, function (el, idx) {
      return callback.call(el, idx, el) !== false;
    });
    return this;
  },
  pluck: function pluck(property) {
    return $.map(this, function (ele) {
      return ele[property];
    });
  },
  map: function map(fn) {
    return $($.map(this, function (el, i) {
      return fn.call(el, el, i);
    }));
  },
  slice: function slice() {
    // arguments是类数组，此处用调用slice方法需要使用apply
    return $(_slice.apply(this, arguments));
  },
  eq: function eq(idx) {
    return idx === -1 ? this.slice(-1) : this.slice(idx, idx + 1);
  },
  filter: function filter(selector) {
    return $(_filter.call(this, function (element) {
      return matches(element, selector);
    }));
  },
  not: function not(selector) {
    var nodes = [];
    var excludes = typeof selector === 'string' ? this.filter(selector) : [];
    $.each(this, function (idx, ele) {
      if (excludes.indexOf(ele) < 0) nodes.push(ele);
    });

    return $(nodes);
  },
  parent: function parent(selector) {
    return filtered(uniq(this.pluck('parentNode')), selector);
  },
  children: function children(selector) {
    return filtered(this.map(function (element) {
      return $.map(element.childNodes, function (node) {
        if (node.nodeType == 1) return node;
      });
    }), selector);
  },
  attr: function attr(name, value) {
    var result;
    return typeof name == 'string' && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined : this.each(function (idx) {
      if (this.nodeType !== 1) {
        return;
      }

      if ((0, _require.isObject)(name)) for (var key in name) {
        (0, _domapi.setAttribute)(this, key, name[key]);
      } else (0, _domapi.setAttribute)(this, name, value);
    });
  },
  offset: function offset() {
    if (!this.length) return null;

    if (docElem !== this[0] && !$.contains(docElem, this[0])) return { top: 0, left: 0 };

    var obj = this[0].getBoundingClientRect();
    var clientTop = docElem.clientTop || body.clientTop || 0,
        clientLeft = docElem.clientLeft || body.clientLeft || 0,
        scrollTop = window.pageYOffset && docElem.scrollTop || body.scrollTop,
        scrollLeft = window.pageXOffset && docElem.scrollLeft || body.scrollLeft,
        left = obj.left + scrollLeft - clientLeft,
        top = obj.top + scrollTop - clientTop;

    return {
      left: left,
      top: top,
      width: obj.width,
      height: obj.height
    };
  },
  css: function css(property, value) {
    // 一个参数，{strig | array}获取属性
    if (arguments.length < 2) {
      var element = this[0];
      if (!element) return;

      if (typeof property === 'string') {
        return element.style[(0, _utils.camelize)(property)] || getComputedStyle(element, '').getPropertyValue(property);
      } else if ((0, _require.isArray)(property)) {
        var props = {};
        var styleDeclaration = getComputedStyle(element, '');
        $.each(property, function (idx, prop) {
          props[prop] = element.style[(0, _utils.camelize)(prop)] || styleDeclaration.getPropertyValue(prop);
        });
        return props;
      }
    }

    //设置属性
    var css = '';
    if ((0, _require.type)(property) === 'string') {
      if (!value && value !== 0) this.each(function () {
        this.style.removeProperty((0, _utils.dasherize)(value));
      });else css = (0, _utils.dasherize)(property) + ':' + (0, _utils.maybeAddPx)(property, value);
    } else {
      for (var key in property) {
        if (!property[key] && property[key] !== 0) this.each(function () {
          this.style.removeProperty((0, _utils.dasherize)(key));
        });else css += (0, _utils.dasherize)(key) + ':' + (0, _utils.maybeAddPx)(key, property[key]) + ';';
      }
    }

    return this.each(function () {
      this.style.cssText += ';' + css;
    });
  },
  index: function index(element) {
    return element ? this.indexOf(element) : this.parent().children().indexOf(this[0]);
  },
  hasClass: function hasClass(selector) {
    var rclass = /[\n\t\r]/g;
    var className = " " + selector + " ";

    return emptyArr.some.call(this, function (ele) {
      return (" " + ele.className + " ").replace(rclass, " ").indexOf(className) > -1;
    });
  },

  addClass: function addClass(value) {
    if (!value) return this;

    var rspace = /\s+/,
        classNames,
        i,
        cl,
        setClass;

    return this.each(function (idx) {
      if (value && typeof value === "string") {
        classNames = value.split(rspace);
        if (!this.className && classNames.length === 1) {
          this.className = value;
        } else {
          setClass = " " + this.className + " ";
          for (i = 0, cl = classNames.length; i < cl; i++) {
            if (!~setClass.indexOf(" " + classNames[i] + " ")) {
              setClass += classNames[i] + " ";
            }
          }
          this.className = setClass.trim();
        }
      }
    });
  },
  removeClass: function removeClass(value) {
    var rspace = /\s+/;
    var rclass = /[\n\t\r]/g;
    var classNames, className, c, cl;

    return this.each(function () {
      if (this.nodeType === 1 && this.className) {
        if (value && typeof value === "string" || value === undefined) {
          classNames = (value || "").split(rspace);

          if (value) {
            className = (" " + this.className + " ").replace(rclass, " ");
            for (c = 0, cl = classNames.length; c < cl; c++) {
              className = className.replace(" " + classNames[c] + " ", " ");
            }
            this.className = className.trim();
          } else {
            this.className = "";
          }
        }
      }
    });
  },

  toggleClass: function toggleClass(value) {
    if (!value) return;

    var rspace = /\s+/;
    // toggle individual class names
    var className,
        i = 0,
        classNames = value.split(rspace);

    return this.each(function () {
      var $this = $(this);
      while (className = classNames[i++]) {
        $this.hasClass(className) ? $this.removeClass(className) : $this.addClass(className);
      }
    });
  }
};

function $(selector, context) {
  var doms;
  if (!selector) {
    return new Bin();
  } else if (typeof selector === 'string') {
    // html标签文本，选择器
    selector = selector.trim();

    if (selector[0] === '<' && fragmentRE.test(selector)) {
      doms = fragment(selector, RegExp.$1, context);
      selector = null;
    } else if (context !== undefined) {
      return '$(context).find(selector)';
    } else {
      doms = qsa(document, selector);
    }
  } else if ((0, _require.isFunction)(selector)) {
    // 方法
    return '$(document).ready(selector)';
  } else if (selector instanceof Bin) {
    // $对象
    return selector;
  } else {
    if ((0, _require.isArray)(selector)) {
      // 数组
      doms = compact(selector);
    } else if ((0, _require.isObject)(selector)) {
      // 纯对象 {}
      doms = [selector];
      selector = null;
    } else {
      doms = qsa(document, selector);
    }
  }
  return new Bin(doms);
}

$.map = function (elements, callback) {
  var _ref;

  var value,
      values = [],
      i,
      key;
  if (likeArray(elements)) {
    for (i = 0; i < elements.length; i++) {
      value = callback(elements[i], i);
      if (value != null) values.push(value);
    }
  } else {
    for (key in elements) {
      value = callback[(elements[key], i)];
      if (value != null) values.push(value);
    }
  }
  return (_ref = []).concat.apply(_ref, values);
};

$.each = function (elements, callback) {
  var i, key;
  if (likeArray(elements)) {
    for (i = 0; i < elements.length; i++) {
      if (callback.call(elements[i], i, elements[i]) === false) return elements;
    }
  } else {
    for (key in elements) {
      if (callback.call(elements[key], key, elements[key]) === false) return elements;
    }
  }

  return elements;
};

$.contains = document.documentElement.contains ? function (parent, node) {
  return parent !== node && parent.contains(node);
} : function (parent, node) {
  while (node && (node = node.parentNode)) {
    if (node === parent) return true;
  }return false;
};

$.fn = Bin.prototype

// Generate the `width` and `height` functions
;['width', 'height'].forEach(function (dimension) {
  var dimensionProperty = dimension.replace(/./, function (m) {
    return m[0].toUpperCase();
  });

  $.fn[dimension] = function (value) {
    var offset,
        el = this[0];
    if (value === undefined) return (0, _require.isWindow)(el) ? el['inner' + dimensionProperty] : (0, _require.isDocument)(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
      el = $(this);
      el.css(dimension, funcArg(this, value, idx, el[dimension]()));
    });
  };
});

exports.default = $;
module.exports = exports["default"];

/***/ }),

/***/ "./src/$/require.js":
/*!**************************!*\
  !*** ./src/$/require.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = type;
exports.isWindow = isWindow;
exports.isDocument = isDocument;
exports.isPlainObject = isPlainObject;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isArray = isArray;
var toString = Object.prototype.toString;
var class2type = {};
"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function (name, i) {
  class2type["[object " + name + "]"] = name.toLowerCase();
});

function type(obj) {
  return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
}

function isWindow(obj) {
  return obj != null && obj === obj.window;
}

function isDocument(obj) {
  return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
}

function isPlainObject(obj) {
  return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype;
}

function isObject(obj) {
  return type(obj) === 'object';
}

function isFunction(value) {
  return type(value) === 'function';
}

function isArray(value) {
  return type(value) === 'array';
}

/***/ }),

/***/ "./src/$/utils.js":
/*!************************!*\
  !*** ./src/$/utils.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelize = camelize;
exports.dasherize = dasherize;
exports.maybeAddPx = maybeAddPx;
/**
 *将 word-word 的形式的字符串转换成 wordWord 的形式， - 可以为一个或多个。
 * */
function camelize(str) {
  // console.log('cameliza param str is:',str)
  return str.replace(/-+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  });
}

/**
 * 将驼峰式的写法转换成连字符 - 的写法。
 * */
function dasherize(str) {
  return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
}

var cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1
  /**
   * 数值是否添加单位
   * */
};function maybeAddPx(name, value) {
  return typeof value === "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
}

/***/ })

/******/ });
});