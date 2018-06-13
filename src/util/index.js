import extend from '../base/extend.js';

export default {
    extend:extend,
    /*
    * 秒转换成时分秒
    * @param {number} time 时间秒
    * @return {string} 时分秒 '00:00:00'
    * */
    formatTime:function(time){
        //小于10前面加'0'
        var t=function(num){
            if(num<10){
                return '0'+num.toString();
            }
            return num;
        }

        var hours='',minutes='',seconds='';
        if(time>0){
            seconds=t(parseInt(time%60));
            if(time>=60){
                minutes=t(parseInt(time/60%60))+':';
                if(time>=3600){
                    hours=t(parseInt(time/3600%24))+':';
                }
            }else{
                minutes='00:'
            }
        }else{
            seconds='00:00';
        }
        return hours+minutes+seconds;
    },
    /**
     * 添加script.
     * @param {string} url js url
     * @param {function} [onload] 加载成功回调
     * @param {function} [onerror] 加载失败回调
     * @return {HTMLElement} script引用
     */
    addScript: function(url, onload, onerror) {
        var script = document.createElement('script');
        if (onload) {
            script.onload = function() {
                onload(script);
            };
        }
        script.onerror = function() {
            if(onerror){
                onerror(script);
            }else if(onload){
                onload(script);
            }
        };
        script.src = url;
        document.head.appendChild(script);
        return script;
    },
    /*
    * DOM添加类
    * @param {HTMLElement} element - DOM元素
    * @param {string} className - 类名
    * */
    addClass: function (element, className) {
        var regClassName = new RegExp('(^| )' + className + '( |$)');
        //( /\s+/ 匹配任何空白符，包括\n,\r,\f,\t,\v等（换行、回车、空格、tab等）})
        if (!regClassName.test(element.className)) {
            element.className = element.className.split(/\s+/).concat(className).join(' ');
        }
    },
    /*
    * DOM删除类
    * */
    removeClass: function (element, className) {
        var regClassName = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
        element.className = element.className.replace(regClassName, '');
    },
    /*
    * 判断DOM是否有某个类名
    * */
    hasClass:function (element, className) {
        return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    },
    /*
    * DOM添加/删除类的切换操作
    * */
    toggleClass:function (element,className){
        if(this.hasClass(element,className)){
            this.removeClass(element, className);
        }else{
            this.addClass(element, className);
        }
    },
    /*
    * 获取DOM第几个子元素
    * */
    getElementIndex:function(ele){
        var elements=ele.parentNode.childNodes;
        for(var index=0,i=0,len=elements.length;i<len;i++){
            if(ele===elements[i]){
                return index;
            }
            if(elements[i].nodeType==1){
                index++;
            }
        }
        throw '获取错误';
    },
    /*
    * 判断对象是否为数组
    * @param value - 判断的value
    * */
    isArray:function(value){
        return Object.prototype.toString.call(value)==='[Object Array]';
    },
    /*
    * 判断对象是否为函数
    * */
    isFunction:function(value){
        return Object.prototype.toString.call(value)==='[Object Function]';
    },
    /*
    * 判断对象是否为正则
    * */
    isRegExp:function(value){
        return Object.prototype.toString.call(value)==='[Object RegExp]';
    },
    /**
     * 数字四舍五入（保留n位小数）
     * @param {number} [number] 要四舍五入的数字
     * @param {number} [n] 保留的位数
     * */
    getFloat:function(number, n) {
        n = n ? parseInt(n) : 0;
        if(n <= 0) return Math.round(number);
        number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
        return number;
    },
    /*
     * 将数字转成数组
     * */
    getNumToArray:function(number) {
        var aa;
        if(number < 10) {
            aa = '0' + number;
        } else {
            aa = number.toString();
        }

        var arr = aa.split("");
        return arr;
    },
    /**
    * 将字符串中的指定字符全部替换成另一个字符
    * str:整个字符串
    * a:要被替换的字符
    * b:替换成这个字符
    * mm:匹配模式，如下:
    * 	g:全局匹配
    i:区分大小写
    m:多行匹配
    * */
    strReplace: function(str, a, b, mm) {
        if(m == null) {
            m = '';
        }
        var cc = str.replace(new RegExp(a, mm), b);
        return cc;
    },
    /**
     * 补位，给指定字符串前面补位，用指定的字符补位，默认为空格
     * str:指定字符
     * len:补几位
     * ch:补什么字符
     * */
    leftpad: function(str, len, ch) {
        str = String(str);
        var i = -1;
        if(!ch && ch !== 0) ch = ' ';
        while(++i < len) {
            str = ch + str;
        }
        return str;
    }
};