(function(){
    var util={
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
