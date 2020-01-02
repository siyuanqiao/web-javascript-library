let proto = String.prototype

/**
 * 判断是否为空字符
 * */
proto.isEmpty = function () {
  return this.trim().length === 0
}

/**
 * 在指定地方插入字符
 * @param {string} flg 要插入的字符串
 * @param {number} sn 要插入的位置
 * */
proto.insertStr = function (flg, sn) {
  var a = this.slice(0, sn)
  var b = this.slice(sn)
  return a + flg + b
}


/**
 * 删除指定地方的字符
 * @param {number} sn 要删除的位置
 * @param {number} len 删除字符的长度
 * */
proto.deleteStr = function (sn, len) {
  len = len || 1
  var arr = this.split('')
  arr.splice(sn - 1, len)
  return arr.join('')
}

/**
 * 随机A-Z|a-z|0-9 中的随机组合
 * @param {number} 随机组合的长度
 * @example String.prototype.randomString(); & ''.randomString();
 * @return {string} 随机组合的字符
 * */
proto.randomStr = function (len) {
  len = len || 32
  var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
    maxPos = $chars.length,
    i = 0,
    pwd = ''
  for (i; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}