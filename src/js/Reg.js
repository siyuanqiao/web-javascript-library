/**
 * Reg 类封装了常用的正则匹配
 * */
export class Reg {

  constructor () {

    /**
     * cookie
     * */
    this.cookie = null;
  }

  /**
   * 判断是否为手机号码
   * */
  isMobile (s) {
    var p = /^0*(13|14|15|16|17|18)\d{9}$/;
    return p.test(s);
  }

  /**
   * 判断就否为电子邮箱
   * */
  isEmail (s) {
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return myreg.test(s);
  }

  /**
   * 判断是否为身份证
   * */
  isID (s) {
    var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return myreg.test(s);
  }
}

