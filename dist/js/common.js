function ajax(options){

}

/*
 * 数组相关功能
 */
(function() {
	/**
	 * 洗牌算法 打乱数组
	 * @return 打乱后的数组
	 * */
    Array.prototype.shuffle=function(){
        var i,t,m=this.length;
        while(m){
            i=Math.floor(Math.random()*m--);
            t=this[m];
            this[m]=this[i];
            this[i]=t;
        }
        return this;
    }

	/**
	 * 获取数组中最小的值
	 * */
    Array.prototype.getMin= function() {
    	var arr=this;
        var min = arr[0];
        for(var i = 1; i < arr.length; i++) {
            if(min > arr[i]) {
                min = arr[i];
            }
        }
        return min;
    },

	/**
	 * 获取数组中最大的值
	 * */
	Array.prototype.getMax= function() {
    	var arr=this;
        var max = arr[0];
        for(var i = 1; i < arr.length; i++) {
            if(max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }

    var arrayutils = {}

	window.arrayutils = arrayutils;
}());

////////////////////////////////////////////////////////////////////////////////
//
//  ADOBE SYSTEMS INCORPORATED
//  Copyright 2006-2007 Adobe Systems Incorporated
//  All Rights Reserved.
//
//  NOTICE: Adobe permits you to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
//
////////////////////////////////////////////////////////////////////////////////


/**
 * Sets a Cookie with the given name and value.
 *
 * name       Name of the cookie
 * value      Value of the cookie
 * [expires]  Expiration date of the cookie (default: end of current session)
 * [path]     Path where the cookie is valid (default: path of calling document)
 * [domain]   Domain where the cookie is valid
 *              (default: domain of calling document)
 * [secure]   Boolean value indicating if the cookie transmission requires a
 *              secure transmission
 *
 * @param
 * setCookie("tasty","strawberry2");
 * setCookie("yummy","choco2",getData('s3'));
 */
function setCookie(name, value, expires, path, domain, secure)
{
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toUTCString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

/**
 * Gets the value of the specified cookie.
 *
 * name  Name of the desired cookie.
 *
 * Returns a string containing value of specified cookie,
 *   or null if cookie does not exist.
 *
 * @param
 * console.log(getCookie('tasty'));
 */
function getCookie(name)
{
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1)
    {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
    {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

/**
 * Deletes the specified cookie.
 *
 * name      name of the cookie
 * [path]    path of the cookie (must be same as path used to create cookie)
 * [domain]  domain of the cookie (must be same as domain used to create cookie)
 *
 * @param deleteCookie('tasty');
 */
function deleteCookie(name, path, domain)
{
    if (getCookie(name))
    {
        document.cookie = name + "=" + 
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

/*
 * 获取想要的时间
 * @param {string} str s1一秒 h1一小时 d1一天
 * @return {number} 当前时间+str的时间
 * */
function getData(str){
    var str1=str.substring(0,1);
    var str2=str.substring(1,str.length)*1;
    var time=0;
    if(str1=='s'){
        time=str2*1000;
    }else if(str1=='h'){
        time=str2*60*60*1000;
    }else if(str1=='d'){
        time=str2*24*60*60*1000;
    }
    var data=new Date();
    data.setTime(data.valueOf()+time);
    return data;
}

/*
 * 数学相关的功能
 */
(function() {
	var mathutils = {
		/**
		 * 计算两点间距离
		 * @param {object} [p1] 点1
		 * @param {object} [p2] 点2
		 * */
		getDistance: function(p1, p2) {
			var a = p2.x - p1.x;
			var b = p2.y - p1.y;
			var n = Math.sqrt(a * a + b * b);
			return n;
		},

		/**
		 * 计算两点间直线任意点的坐标，p1 p2为直线的两个端点，_x和_y为要求的坐标点中的一个坐标，求另一个
		 * @param {object} [p1] 点1
		 * @param {object} [p2] 点2
		 * @param {number} [_x] 要求的点的x坐标，求x坐标的话，该参数填null
		 * @param {number} [_y] 要求的点的y坐标，求x坐标的话，该参数填null
		 * */
		getOnLineXY: function(p1, p2, _x, _y) {
			var k = (p2.y - p1.y) / (p2.x - p1.x);
			var b = p1.y - k * (p1.x);
			if(_x == null) {
				_x = (_y - b) / k;
			} else if(_y == null) {
				_y = k * _x + b;
			}
			var p = {
				x: _x,
				y: _y
			};
			return p;
		},

		/**
		 * 计算两点间直线中心点坐标
		 * @param {object} [p1] 点1
		 * @param {object} [p2] 点2
		 * */
		getOnLineCenter: function(p1, p2) {
			var xx = (p1.x + p2.x) / 2;
			var yy = (p1.y + p1.y) / 2;
			var p = {
				x: xx,
				y: yy
			};
			return p;
		},

		/**
		 * 返回起点到终点的角度
		 * @param {object} [start] 起点
		 * @param {object} [end] 终点
		 * */
		Cangle: function(start, end) {
			var diff_x = end.x - start.x,
				diff_y = end.y - start.y;
			//返回角度,不是弧度
			return 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
		},

		/**
		 * 每隔三位数加一个逗号
		 * @param {string/number} [value] 要转换的值
		 * */
		cutStr: function(value) {
			var temp = parseFloat(value).toLocaleString();
			return temp;
		},

		/**
		 * 获取椭圆内随机一点
		 * @param {number} radiusX 椭圆X轴半径
		 * @param {number} radiusY 椭圆Y轴半径
		 * @param {object} 随机点
		 * */
        getEllipseRandomPoint:function(radiusX,radiusY){
            var angle=(Math.random()*360);
            //正弦函数图像特点 x∈[0,2π] 5点观察值[0,1, 0,-1,0]
            //余弦函数图像特点 x∈[0,2π] 5点观察值[1,0,-1, 0,1]
            return {
            	x:Math.sin(Math.PI/180*angle)*(Math.random()*randiusX),
				y:Math.cos(Math.PI/180*angle)*(Math.random()*randiusY)
			}
        },

        /**
		 * 计算斐波那契数列 递归
         */
        fbnq:function(n){
			if(n==1||n==2){
				return 1;
			}
			return Math.fbnq(n-1)+Math.fbnq(n-2);
		},

        /**
         * 计算斐波那契数列 非递归
         */
		fbnq2:function(n){
            var a,b,res;
            a = b = 1;
            for(var i=3;i<=n;i++){
                res = a + b;
                a = b;
                b = res;
            }
            return res;
		}
	};

	Object.assign(Math,mathutils);
}());
/**
 * 数字值相关功能
 * 遵循mozilla的规则：扩展内置原型的唯一理由是支持JavaScript 引擎的新特性，如Array.forEach。
 */

(function(){

    /**
     * 数字四舍五入（保留n位小数）
     * @param {number} [number] 要四舍五入的数字
     * @param {number} [n] 保留的位数
     * */
    Number.prototype.getFloat=function(number, n) {
        n = n ? parseInt(n) : 0;
        if(n <= 0) return Math.round(number);
        number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
        return number;
    }

    /*
     * 将数字转成数组
     * */
    Number.prototype.getNumToArray=function(number) {
        var aa;
        if(number < 10) {
            aa = '0' + number;
        } else {
            aa = number.toString();
        }

        var arr = aa.split("");
        return arr;
    }
}());
(function(){
    var userAgent=window.navigator.userAgent;
    var find=function(needle){
        return userAgent.indexOf(needle) !== -1;
    }
    var os={};
    os.iphone=find('iphone');
    os.ipod=find('ipod');
    os.ipad=find('ipad');
    os.ios=os.iphone || os.ipod || os.ipad;

    window.os=os;
}());


/**
 * 字符相关功能
 * 遵循mozilla的规则：扩展内置原型的唯一理由是支持JavaScript 引擎的新特性，如Array.forEach。
 */


(function() {
	//扩展内置String对象
	var sp=String.prototype;

	/**
	 * 删除字符串两端的空白字符。
	 * @return 返回的是一个新的字符串
	 * */
	if(!sp.trim){
		sp.trim=function(){
            return this.replace(/(^\s*)|(\s*$)/g, "");
		}
	}

	/**
	 * 去除左空格
	 * */
	if(!sp.ltrim){sp.ltrim=function(){return this.replace(/(^\s*)/g,"");}}

	/**
	 * 去除右空格
	 * */
	if(!sp.rtrim)sp.rtrim=function(){return this.replace(/(\s*$)/g,"");}

	/**
	 * 判断是否为空字符
	 * */
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


	var stringutils = {

		/*
		 * 判断就否为手机号码
		 * */
		isMobile: function(value) {
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
		strReplace: function(str, a, b, mm) {
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
		leftpad: function(str, len, ch) {
			str = String(str);
			var i = -1;
			if(!ch && ch !== 0) ch = ' ';
			while(++i < len) {
				str = ch + str;
			}
			return str;
		},
		/*
		 * 随机A-Z|a-z|0-9 中的随机组合
		 * @param {number} 随机组合的长度
		 * @return {string} 随机组合的字符
		 * */
        randomString:function(len){
            len=len || 32;
            var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
                ,maxPos = $chars.length
                ,i = 0
                ,pwd = '';
            for (i; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        },
	};
	window.stringutils = stringutils;
}());
(function(){
    var url={
        /*
        * 获取URL参数
        * @retrun
        * */
        getParam:function(){
            var qs=window.location.search.length>0?location.search.substring(1):'';
            //参数对象
            var ags={};
            var items=qs.split('&');
            var item=null;
            for(var i=0,len=items.length;i<len;i++){
                item=items[i].split("=");
                var key=decodeURIComponent(item[0]);
                var val=decodeURIComponent(item[1]);
                ags[key]=val;
            }
            return ags;
        },
        /*
        * 查询是否有某个参数
        * @param {string} [name] 参数名称
        * @return {string|undefined}
        * */
        queryString:function(name){
            return url.getParam()[name];
        }
    }
    window.url=url;
}());

(function(){
    var util={
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
            return Object.prototype.toString().call(value)==='[Object Array]';
        },
        /*
        * 判断对象是否为函数
        * */
        isFunction:function(value){
            return Object.prototype.toString().call(value)==='[Object Function]';
        },
        /*
        * 判断对象是否为正则
        * */
        isRegExp:function(value){
            return Object.prototype.toString().call(value)==='[Object RegExp]';
        }
    };
    window.util=util;
}());
