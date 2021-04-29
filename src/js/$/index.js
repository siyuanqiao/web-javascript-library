let cssNumber = {
  'font-weight': 1,
  'line-height': 1,
  'opacity': 1,
  'z-index': 1,
  'zoom': 1
}

let toString = Object.prototype.toString
let class2type = {}
'Boolean Number String Function Array Date RegExp Object'.split(' ').forEach(name => (class2type['[object ' + name + ']'] = name.toLowerCase()))

// 将 word-word 的形式的字符串转换成 wordWord 的形式， - 可以为一个或多个。
export const camelize = (str) => {
  return str.replace(/-+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : ''
  })
}

// 将驼峰式的写法转换成连字符 - 的写法。
export const dasherize = (str) => {
  return str.replace(/::/g, '/')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .replace(/_/g, '-')
    .toLowerCase()
}

// 数值是否添加单位
export const maybeAddPx = (name, value) => ((typeof value === 'number' && !cssNumber[dasherize(name)]) ? value + 'px' : value)

// 去除数组中重复出现的元素，返回新数组
export const uniq = (array => array.filter((item, idx) => array.indexOf(item) === idx));

// 过滤数组中值为null undefined的元素，返回新数组
export const compact = (array => array.filter((item) => item != null));

export const type = (obj) => (obj == null ? String(obj) : class2type[toString.call(obj)] || 'object')

export const isWindow = (obj) => (obj != null && obj === obj.window)

export const isDocument = (obj) => (obj != null && obj.nodeType == obj.DOCUMENT_NODE)

export const isObject = (value) => (type(value) === 'object')

export const isFunction = (value) => (type(value) === 'function')

var document = window.document,
  docElem = document.documentElement,
  body = document.body,
  tempParent = document.createElement('div'),
  emptyArr = [],
  filter = emptyArr.filter,
  slice = emptyArr.slice,
  simpleSelectorRE = /^[\w-]*$/,
  fragmentRE = /^\s*<(\w+|!)[^>]*>/, //判断字符串是否为标签
  singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, //判断是否为标签的形式（如<div></div>）
  tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
  table = document.createElement('table'),
  tableRow = document.createElement('tr'),
  containers = {
    'tr': document.createElement('tbody'),
    'tbody': table, 'thead': table, 'tfoot': table,
    'td': tableRow, 'th': tableRow,
    '*': document.createElement('div')
  }

function setAttribute (node, name, value) {
  value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
}

function matches (element, selector) {
  if (!selector || !element || element.nodeType !== 1) return false
  // matches 方法用于检测元素( element )是否匹配特定的选择器( selector )
  var matchesSelector = element.matches || element.webkitMatchesSelector ||
    element.mozMatchesSelector || element.oMatchesSelector ||
    element.matchesSelector
  if (matchesSelector) return matchesSelector.call(element, selector)

  var math,
    parent = element.parentNode,
    temp = !parent

  if (temp) (parent = tempParent).appendChild(element)

  math = ~qsa(parent, selector).indexOf(element)

  temp && tempParent.removeChild(element)
  return math
}

function filtered (nodes, selector) {
  return (selector === null || !selector) ? $(nodes) : $(nodes).filter(selector)
}

function funcArg (context, arg, idx, payload) {
  return isFunction(arg) ? arg.call(context, idx, payload) : arg
}

//eslint-disable-next-line
function fragment (html, name, properties) {
  var dom, container

  // A special case optimization for a single tag
  if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

  if (!dom) {
    if (html.replace) html = html.replace(tagExpanderRE, '<$1></$2>')
    if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
    if (!(name in containers)) name = '*'

    container = containers[name]
    container.innerHTML = '' + html
    dom = $.each(slice.call(container.childNodes), function () {
      container.removeChild(this)
    })
  }

  return dom
}

function qsa (element, selector) {
  var found,
    maybeID = (selector[0] === '#'), // ID
    maybeClass = !maybeID && selector[0] === '.', // class
    nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // 将id或class前面的符号去掉
    isSimple = simpleSelectorRE.test(nameOnly) // 是否为单个选择器

  return (element.getElementById && isSimple && maybeID)
    //eslint-disable-next-line
    ? ((found = element.getElementById(nameOnly)) ? [found] : [])
    : (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) // 1 元素节点, 9 Document节点, 11 DocumentFragment节点
      ? []
      : slice.call(
        isSimple && !maybeID && element.getElementsByClassName
          ? (maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector))
          : element.querySelectorAll(selector)
      )
}

function Bin (doms) {
  var i = 0
  var len = doms ? doms.length : 0
  for (i; i < len; i++) {
    this[i] = doms[i]
  }
  this.length = len
}

Bin.prototype = {
  constructor: Bin,
  indexOf: emptyArr.indexOf,
  each: function (callback) {
    emptyArr.every.call(this, function (el, idx) {
      return callback.call(el, idx, el) !== false
    })
    return this
  },
  index: function (element) {
    return element ? this.indexOf(element) : this.parent().children().indexOf(this[0])
  },
  // 筛选
  eq: function (idx) {
    return idx === -1 ? this.slice(-1) : this.slice(idx, idx + 1)
  },
  filter: function (selector) {
    return $(filter.call(this, function (element) {
      return matches(element, selector)
    }))
  },
  map: function (fn) {
    return $($.map(this, function (el, i) {
      return fn.call(el, el, i)
    }))
  },
  not: function (selector) {
    var nodes = []
    var excludes = (typeof selector === 'string'
      ? this.filter(selector)
      : [])
    $.each(this, function (idx, ele) {
      if (excludes.indexOf(ele) < 0) nodes.push(ele)
    })

    return $(nodes)
  },
  slice: function () {
    // arguments是类数组，此处用调用slice方法需要使用apply
    return $(slice.apply(this, arguments))
  },
  children: function (selector) {
    return filtered(this.map(function (element) {
      return $.map(element.childNodes, function (node) {
        if (node.nodeType == 1) return node
      })
    }), selector)
  },
  parent: function (selector) {
    return filtered(uniq(this.pluck('parentNode')), selector)
  },
  // 属性
  attr: function (name, value) {
    var result
    return (typeof name == 'string' && !(1 in arguments))
      ? (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined)
      : this.each(function () {
        if (this.nodeType !== 1) {
          return
        }

        if (isObject(name))
          for (var key in name) setAttribute(this, key, name[key])
        else
          setAttribute(this, name, value)
      })
  },
  hasClass (selector) {
    var rclass = /[\n\t\r]/g
    var className = ' ' + selector + ' '

    return emptyArr.some.call(this, function (ele) {
      return (' ' + ele.className + ' ').replace(rclass, ' ').indexOf(className) > -1
    })
  },
  addClass: function (value) {
    if (!value) return this

    var rspace = /\s+/,
      classNames,
      i,
      cl,
      setClass

    return this.each(function () {
      if (value && typeof value === 'string') {
        classNames = value.split(rspace)
        if (!this.className && classNames.length === 1) {
          this.className = value
        } else {
          setClass = ' ' + this.className + ' '
          for (i = 0 , cl = classNames.length; i < cl; i++) {
            if (!~setClass.indexOf(' ' + classNames[i] + ' ')) {
              setClass += classNames[i] + ' '
            }
          }
          this.className = setClass.trim()
        }
      }
    })
  },
  removeClass (value) {
    var rspace = /\s+/
    var rclass = /[\n\t\r]/g
    var classNames,
      className,
      c,
      cl

    return this.each(function () {
      if (this.nodeType === 1 && this.className) {
        if ((value && typeof value === 'string') || value === undefined) {
          classNames = (value || '').split(rspace)

          if (value) {
            className = (' ' + this.className + ' ').replace(rclass, ' ')
            for (c = 0, cl = classNames.length; c < cl; c++) {
              className = className.replace(' ' + classNames[c] + ' ', ' ')
            }
            this.className = className.trim()

          } else {
            this.className = ''
          }
        }
      }
    })
  },
  toggleClass: function (value) {
    if (!value) return

    var rspace = /\s+/
    // toggle individual class names
    var className,
      i = 0,
      classNames = value.split(rspace)

    return this.each(function () {
      var $this = $(this)
      while ((className = classNames[i++])) {
        $this.hasClass(className)
          ? $this.removeClass(className)
          : $this.addClass(className)
      }
    })
  },
  // CSS
  css: function (property, value) {
    // 一个参数，{strig | array}获取属性
    if (arguments.length < 2) {
      var element = this[0]
      if (!element) return

      if (typeof property === 'string') {
        return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)
      } else if (Array.isArray(property)) {
        var props = {}
        var styleDeclaration = getComputedStyle(element, '')
        $.each(property, function (idx, prop) {
          props[prop] = element.style[camelize(prop)] || styleDeclaration.getPropertyValue(prop)
        })
        return props
      }
    }

    //设置属性
    var css = ''
    if (type(property) === 'string') {
      if (!value && value !== 0)
        this.each(function () {
          this.style.removeProperty(dasherize(value))
        })
      else
        css = dasherize(property) + ':' + maybeAddPx(property, value)
    } else {
      for (var key in property)
        if (!property[key] && property[key] !== 0)
          this.each(function () {
            this.style.removeProperty(dasherize(key))
          })
        else
          css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
    }

    return this.each(function () {
      this.style.cssText += ';' + css
    })
  },
  offset: function () {
    if (!this.length) return null

    if (docElem !== this[0] && !$.contains(docElem, this[0])) return {top: 0, left: 0}

    var obj = this[0].getBoundingClientRect()
    var clientTop = docElem.clientTop || body.clientTop || 0,
      clientLeft = docElem.clientLeft || body.clientLeft || 0,
      scrollTop = window.pageYOffset && docElem.scrollTop || body.scrollTop,
      scrollLeft = window.pageXOffset && docElem.scrollLeft || body.scrollLeft,
      left = obj.left + scrollLeft - clientLeft,
      top = obj.top + scrollTop - clientTop

    return {
      left: left,
      top: top,
      width: obj.width,
      height: obj.height
    }
  },
}

function $ (selector, context) {
  var doms
  if (!selector) {
    return new Bin()
  } else if (typeof selector === 'string') { // 选择器或HTML标签文本
    selector = selector.trim()

    if (selector[0] === '<' && fragmentRE.test(selector)) {
      doms = fragment(selector, RegExp.$1, context)
      selector = null
    } else if (context !== undefined) {
      return new Error('$(context).find(selector) 待实现！')
    } else {
      doms = qsa(document, selector)
    }
  } else if (isFunction(selector)) { // 方法
    return new Error('$(function(){ }) 待实现！')
  } else if (selector instanceof Bin) { // $对象
    return selector
  } else {
    if (Array.isArray(selector)) {// 数组
      doms = compact(selector)
    } else if (isObject(selector)) {// 纯对象 {}
      doms = [selector]
      selector = null
    } else {
      doms = qsa(document, selector)
    }
  }
  return new Bin(doms)
}

$.map = function (elements, callback) {
  var value, values = [], i, key
  if (likeArray(elements)) {
    for (i = 0; i < elements.length; i++) {
      value = callback(elements[i], i)
      if (value != null) values.push(value)
    }
  } else {
    for (key in elements) {
      value = callback[elements[key], i]
      if (value != null) values.push(value)
    }
  }
  return [].concat(...values)
}

$.each = function (elements, callback) {
  var i, key
  if (likeArray(elements)) {
    for (i = 0; i < elements.length; i++)
      if (callback.call(elements[i], i, elements[i]) === false) return elements
  } else {
    for (key in elements)
      if (callback.call(elements[key], key, elements[key]) === false) return elements
  }

  return elements
}

$.contains = document.documentElement.contains
  ? (function (parent, node) {return parent !== node && parent.contains(node)})
  : (function (parent, node) {
    while (node && (node = node.parentNode))
      if (node === parent) return true
    return false
  })

$.fn = Bin.prototype;

['width', 'height'].forEach(function (dimension) {
  var dimensionProperty = dimension.replace(/./, m => m[0].toUpperCase())

  $.fn[dimension] = function (value) {
    var offset, el = this[0]
    if (value === undefined)
      return isWindow(el)
        ? el['inner' + dimensionProperty]
        : isDocument(el)
          ? el.documentElement['scroll' + dimensionProperty]
          : (offset = this.offset()) && offset[dimension]
    else return this.each(function (idx) {
      el = $(this)
      el.css(dimension, funcArg(this, value, idx, el[dimension]()))
    })
  }
})

export {$ as default}