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
