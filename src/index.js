//基本数据类型：Nndefined Null Boolean String Number
//引用数据类型：Object Symbol

import './base/Array.js';
import './base/Number.js';

import Math from './Math.js';
import OS from './OS.js';
import Util from './Util.js';
import URL from './URL.js';
import {setCookie,getCookie,deleteCookie} from "./cookies.js";

import Texture from "./Texture.js";
import WXShare from "./WXShare.js";

export {
    Math,
    OS,
    Util,
    URL,

    setCookie,
    getCookie,
    deleteCookie,

    Texture,
    WXShare
}