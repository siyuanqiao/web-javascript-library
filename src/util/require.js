/**
 * Get the raw type string of a value e.g. [object Object]
 */
const _toString = Object.prototype.toString

export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

/*
* 判断对象是否为函数
* */
export function isFunction(value) {
  return _toString.call(value) === '[Object Function]';
}

/*
  * 判断对象是否为数组
  * @param value - 判断的value
  * */
export function isArray(value) {
  return _toString.call(value) === '[Object Array]';
}

/*
* 判断对象是否为正则
* */
export function isRegExp(value) {
  return _toString.call(value) === '[Object RegExp]';
}

