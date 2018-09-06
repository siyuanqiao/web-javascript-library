/**
 * 获取浏览器信息
 * */
let find = function (needle) {
  return userAgent.indexOf(needle) !== -1;
}

export function getBrowser()
{
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.indexOf('HUAWEI') > -1) return 'HUAWEI' // 华为手机浏览器
  if (ua.indexOf('amap') > -1) return 'amap' // 高德地图浏览器
  if (ua.indexOf('appsearch') > -1) return 'appsearch' // 百度手机助手
  if (ua.indexOf('micromessenger') > -1) return 'wechat'
  if (ua.indexOf('ucbrowser') > -1 || ua.indexOf('ucweb') > -1) return 'uc'
  if (ua.indexOf('chrome') > -1) return 'chrome'
  if (ua.indexOf('safari') > -1) return 'safari'
  if (ua.indexOf('mozilla') > -1) return 'firefox'
  if (ua.indexOf('ie') > -1) return 'ie'
  if (ua.indexOf('opera') > -1) return 'opera'
  if (ua.indexOf('kindle') > -1) return 'kindle'
  return 'unknown'
}