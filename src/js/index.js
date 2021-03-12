import {Util} from './util';

import {Texture} from 'canvas/Texture'

/**
 * b 方法
 * */
function b () {

}

/**
 * 添加script.
 * @param {string} url js url
 * @param {function} [onload] 加载成功回调
 * @param {function} [onerror] 加载失败回调
 * @return {HTMLElement} script引用
 */
function addScript (url, onload, onerror) {
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
}


/**
 * dm.util
 * */
const util = new Util()

/**
 * dm.Texture
 * */
const Textur = Texture