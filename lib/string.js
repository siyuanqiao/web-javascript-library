/**
 * 字符相关功能
 * 遵循mozilla的规则：扩展内置原型的唯一理由是支持JavaScript 引擎的新特性，如Array.forEach。
 */
;(function() {
	var sp=String.prototype;

	/**
	 * 删除字符串两端的空白字符。
	 * @return 返回的是一个新的字符串
	 * */
	if(!sp.trim){sp.trim=function(){return this.replace(/(^\s*)|(\s*$)/g, "");}}

	//去除左空格
	if(!sp.ltrim){sp.ltrim=function(){return this.replace(/(^\s*)/g,"");}}

	//去除右空格
	if(!sp.rtrim)sp.rtrim=function(){return this.replace(/(\s*$)/g,"");}

	//判断是否为空字符
	sp.isEmpty=function(value) {
        var __temp = this.trim(value);
        return __temp.length == 0;
    }

	/**
	 * 在指定地方插入字符
	 * @param {string} flg 要插入的字符串
	 * @param {number} sn 要插入的位置
	 * */
    sp.insert_flg=function(flg, sn) {
        var newstr = "";
        var a = this.slice(0, sn);
        var b = this.slice(sn);
        newstr = a + flg + b;
        return newstr;
    }

	/**
	 * 删除指定地方的字符
	 * @param {number} sn 要删除的位置
	 * @param {number} len 删除字符的长度
	 * */
    sp.del_flg=function(sn,len) {
    	len=len||1;
        var newstr = "";
        var arr = this.split('');
        arr.splice(sn - 1, len);
        newstr = arr.join("");
        return newstr;
    }

	/**
	 * 随机A-Z|a-z|0-9 中的随机组合
	 * @param {number} 随机组合的长度
	 *
	 * @example
	 * String.prototype.randomString(); & ''.randomString();
	 *
	 * @return {string} 随机组合的字符
	 * */
    sp.randomString=function(len){
        len=len || 32;
        var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
            ,maxPos = $chars.length
            ,i = 0
            ,pwd = '';
        for (i; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
}());

;(function(window){
    var stringUtil={
        /*
         * 判断就否为手机号码
         * */
        isMobile:function(value) {
            var __temp = this.trim(value);
            var p = /^0*(13|14|15|16|17|18)\d{9}$/;
            return p.test(__temp);
        },
        /*
         * 将字符串中的指定字符全部替换成另一个字符
         * str:整个字符串
         * a:要被替换的字符
         * b:替换成这个字符
         * mm:匹配模式，如下:
         * 	g:全局匹配
            i:区分大小写
            m:多行匹配
         * */
        strReplace:function(str, a, b, mm) {
            if(m == null) {
                m = '';
            }
            var cc = str.replace(new RegExp(a, mm), b);
            return cc;
        },
        /*
         * 补位，给指定字符串前面补位，用指定的字符补位，默认为空格
         * str:指定字符
         * len:补几位
         * ch:补什么字符
         * */
        leftpad:function(str, len, ch) {
            str = String(str);
            var i = -1;
            if(!ch && ch !== 0) ch = ' ';
            while(++i < len) {
                str = ch + str;
            }
            return str;
        }
    };
    window.stringUtil=stringUtil;
})(window);

