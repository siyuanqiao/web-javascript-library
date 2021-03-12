(function (modules) {
  var installedModules = {};

  function require (moduleId) {

    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    var module = installedModules[moduleId] = {
      i: moduleId,
      exports: {}
    };

    var factory = modules[moduleId];

    factory.call(module.exports, module, module.exports, require);

    return module.exports;
  }

  require('src/js/index.js');
})({
  'src/js/index.js': function (module, exports, require) {
    "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require("./util");

Object.keys(_util).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _util[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _util[key];
    }
  });
});

/**
 * window.dm.util
 * */
var util = {};
/**
 * b 方法
 * */

function b() {}
/**
 * 添加script.
 * @param {string} url js url
 * @param {function} [onload] 加载成功回调
 * @param {function} [onerror] 加载失败回调
 * @return {HTMLElement} script引用
 */


function addScript(url, onload, onerror) {
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
  },
});