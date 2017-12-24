(function(){
    var util={
        /*
        * 添加script脚本文件
        * @param url 路径
        * @param completeFun 加载完成执行的函数
        * @param void
        * */
        addScript:function(url,completeFun){
            var script=document.createElement('script');
            script.onload=function(){
                if(completeFun)completeFun();
            }
            script.src=url;
            document.body.appendChild(script);
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
});
