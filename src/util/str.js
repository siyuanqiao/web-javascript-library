/**
 * 将字符串中的指定字符全部替换成另一个字符
 *
 * str:整个字符串
 * a:要被替换的字符
 * b:替换成这个字符
 * mm:匹配模式，如下:
 *  g:全局匹配 i:区分大小写 m:多行匹配
 * */
export function strReplace(str, a, b, mm) {
  mm = mm || ''
  return str.replace(new RegExp(a, mm), b);
}

/**
 * 补位，给指定字符串前面补位，用指定的字符补位，默认为空格
 *
 * str:指定字符
 * len:补几位
 * ch:补什么字符
 * */
export function leftpad(str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  while (++i < len) {
    str = ch + str;
  }
  return str;
}