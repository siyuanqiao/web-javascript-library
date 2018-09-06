/**
 * 获取操作系统信息
 * */

export function getOS()
{
  var pf = window.navigator.platform
  var ua = window.navigator.userAgent
  if (ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) return 'ios'
  if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) return 'android'
  if ((pf === 'Win32') || (pf === 'Windows') || (ua.indexOf('Windows') > -1)) return 'windows'
  if ((pf === 'Mac68K') || (pf === 'MacPPC') || (pf === 'Macintosh') || (pf === 'MacIntel')) return 'mac'
  if (pf === 'X11') return 'unix'
  if (String(pf).indexOf('Linux') > -1) return 'linux'
  return 'unknown'
}