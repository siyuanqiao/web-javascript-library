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