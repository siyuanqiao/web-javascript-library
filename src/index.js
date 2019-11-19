import $ from './$'
import detect from './detect'
import parseURL from './utils/url'

console.log(parseURL(window.location.href))

detect.call($, navigator.userAgent, navigator.platform)
$.__detect = detect

export {$ as default}

console.log($.__detect.browser)

var ele = document.getElementById('container')
var $z = $()
console.log($z)
console.log($('#container'))
console.log($('.container'))
console.log($($z))
console.log($(['1', '2', '3']))
console.log($({}))
console.log($(ele))
console.log(ele = $('<div style="border:1px solid red;"><span>fragment div</span><p>my p tag</p></div>'))
document.body.appendChild(ele[0])

console.log('-------------- 属性 ------------------')
ele.attr('id', 'mydiv')
ele.attr({'class': 'a b'})
ele.addClass('a b c d e b')

console.log('-------------- 过滤 ------------------')
console.log($('div').eq(1).css('background-color', 'red'))
console.log($('div').filter('.container'))
console.log($('div').not('.container'))

console.log('-------------- 对象访问 ------------------')
console.log($('div').index(ele[0]))
console.log($('div,span').index())
console.log($('.container').index())

console.log('---------------------------------')
setTimeout(() => {
  ele.toggleClass('a f')

  // console.log(ele.css(['width','height']))
  console.log(ele.css('width', '200px'))
  console.log(ele.css({
    'height': 200,
    'background-color': '#f5f5f5'
  }))
  console.log(ele.css('color'))
  console.log(ele.offset())
  console.log(ele.width())
  console.log(ele.height())

  // console.log($(window).offset())
  console.log($(window).width())
  console.log($(window).height())

  console.log($(document).width())
  console.log($(document).height())

  setTimeout(() => {
    ele.toggleClass('a f')
  }, 1000)
}, 1000)

