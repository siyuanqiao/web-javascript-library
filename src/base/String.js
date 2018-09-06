import extend from '../util/extend.js';

extend(String.prototype,{
    /**
     * 删除字符串两端的空白字符。
     * @return 返回的是一个新的字符串
     * */
    trim:function() {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    },
    //去除左空格
    ltrim:function() {
        return this.replace(/(^\s*)/g, "");
    },
    //去除右空格
    rtrim:function() {
        return this.replace(/(\s*$)/g, "");
    },
    //判断是否为空字符
    isEmpty:function() {
        var __temp = this.trim();
        return __temp.length == 0;
    },
    /**
     * 在指定地方插入字符
     * @param {string} flg 要插入的字符串
     * @param {number} sn 要插入的位置
     * */
    insert_flg:function(flg, sn) {
        var newstr = "";
        var a = this.slice(0, sn);
        var b = this.slice(sn);
        newstr = a + flg + b;
        return newstr;
    },
    /**
     * 删除指定地方的字符
     * @param {number} sn 要删除的位置
     * @param {number} len 删除字符的长度
     * */
    del_flg:function(sn, len) {
        len = len || 1;
        var newstr = "";
        var arr = this.split('');
        arr.splice(sn - 1, len);
        newstr = arr.join("");
        return newstr;
    },
    /**
     * 随机A-Z|a-z|0-9 中的随机组合
     * @param {number} 随机组合的长度
     *
     * @example
     * String.prototype.randomString(); & ''.randomString();
     *
     * @return {string} 随机组合的字符
     * */
    randomString:function(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
            maxPos = $chars.length,
            i = 0,
            pwd = '';
        for(i; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    /**
     * 获取URL参数
     * @example
     * window.location.search.getURLParam();
     *
     * @retrun {}
     * */
    getQuerystring:function() {
        //返回的参数对象
        var ags = {};
        if(this.length > 1) {
            var query = this.substring(1);
            var items = query.split('&');
            var item = null;
            for(var i = 0, len = items.length; i < len; i++) {
                item = items[i].split("=");
                var key = decodeURIComponent(item[0]);
                var val = decodeURIComponent(item[1]);
                ags[key] = val;
            }
        }
        return ags;
    },
    /**
     * 判断是否为手机号码
     * */
    isMobile:function() {
        var __temp = this.trim();
        var p = /^0*(13|14|15|16|17|18)\d{9}$/;
        return p.test(__temp);
    },
    /**
     * 判断就否为电子邮箱
     * */
    isEmail:function() {
        var __temp = this.trim();
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return myreg.test(__temp);
    },
    /**
     * 判断是否为身份证
     * */
    isID:function() {
        var __temp = this.trim();
        var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return myreg.test(__temp);
    }
});