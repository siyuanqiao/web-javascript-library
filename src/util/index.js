import extend from './extend';
import {addClass, removeClass, hasClass, toggleClass} from "./class";
import {isPlainObject, isFunction, isArray, isRegExp} from "./require";

import {getDate,setCookie,getCookie,deleteCookie} from "./cookies";

import {getOS} from "./os";
import {getBrowser} from "./browser";
import {addScript} from "./script";
import {Math2} from "./Math2"

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

  getDate,
  setCookie,
  getCookie,
  deleteCookie,

  getOS,
  getBrowser,

  addScript,
  Math2
};