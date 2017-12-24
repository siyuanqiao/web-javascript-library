(function(){
    var util={
        /*
        * 添加script脚本文件
        * @param url 路基
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
        }
    };
});
