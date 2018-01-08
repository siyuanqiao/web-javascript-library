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
 * Read the JavaScript cookies tutorial at:
 *   http://www.netspade.com/articles/javascript/cookies.xml
 */

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
 */
function setCookie(name, value, expires, path, domain, secure)
{
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
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


/**
 * 自写cookie相关方法
 * */
(function(){

    /*
     * 获取cookie值
     * @param {string} name - 要获取的cookie的name
     * @retrun {string|''}
     * */
    function getCookie(name)
    {
        if (document.cookie.length>0)
        {
            var c_start=document.cookie.indexOf(name + "=");
            if (c_start!=-1)
            {
                c_start=c_start + name.length+1
                var c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1)c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end));
            }
        }
        return "";
    }

    /*
     * 设置cookie
     * @param {string} name - 设置cookie的name
     * @param {value} value - 设置cookie的值
     * @param {number|string} time - 0时不设定过期时间、's20'=20秒、'h12'=12小时、'd30'=30天
     * */
    function setCookie(name,value,time){
        var cookieString=name+'='+escape(value);
        if(time!=0){
            var strsec=getsec(time);
            var exp=new Date();
            exp.setTime(exp.getTime()+strsec*1);
            cookieString+=';expires='+exp.toGMTString();
        }
        document.cookie=cookieString;
    }

    /*
     * 时间转换
     * @param {string} time - 转换的时间
     * @return {number} 转换时间后的毫秒值
     * */
    function getsec(time){
        var str1=time.substring(0,1);
        var str2=time.substring(1,time.length)*1;
        if(str1=='s'){
            return str2*1000;
        }else if(str1=='h'){
            return str2*60*60*1000;
        }else if(str1=='d'){
            return str2*24*60*60*1000;
        }
    }

    /*
     * 删除cookie
     * @param {string} name - 删除cookie的name
     * */
    function delCookie(name){
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }

    //setCookie("tasty","strawberry2",0);
    //setCookie("yummy","choco2",'s2');
    //delCookie('tasty');
}());