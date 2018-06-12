//基本数据类型：Nndefined Null Boolean String Number
//引用数据类型：Object Symbol

import './base/Array.js';
import './base/Number.js';
import './base/Math.js';

import {setCookie,getCookie,deleteCookie} from "./cookies.js";

import OS from './OS.js';
import Util from './Util.js';
import URL from './URL.js';
import Texture from "./Texture.js";
import WXShare from "./WXShare.js";

export {
    OS,
    Util,
    URL,

    setCookie,
    getCookie,
    deleteCookie,

    Texture,
    WXShare
}