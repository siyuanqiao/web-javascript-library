/**
 * 获取浏览器信息
 * */
let ua = window.navigator.userAgent.toLowerCase()

function find(needle) {
  return ua.indexOf(needle) !== -1;
}

export function getBrowser()
{
  if (find('HUAWEI')) return 'HUAWEI' // 华为手机浏览器
  if (find('amap')) return 'amap' // 高德地图浏览器
  if (find('appsearch')) return 'appsearch' // 百度手机助手
  if (find('micromessenger')) return 'wechat'
  if (find('ucbrowser') || find('ucweb')) return 'uc'
  if (find('chrome')) return 'chrome'
  if (find('safari')) return 'safari'
  if (find('mozilla')) return 'firefox'
  if (find('ie')) return 'ie'
  if (find('opera')) return 'opera'
  if (find('kindle')) return 'kindle'
  return 'unknown'
}