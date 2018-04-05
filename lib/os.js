;(function(window){
    var userAgent=window.navigator.userAgent;
    var find=function(needle){
        return userAgent.indexOf(needle) !== -1;
    }
    var os={};
    os.iphone=find('iPhone');
    os.ipod=find('iPod');
    os.ipad=find('iPad');
    os.ios=os.iphone || os.ipod || os.ipad;

    os.android=find('Android');

    //华为手机
    os.isHuaWei=find('HUAWEI');

    //微信APP终端
    os.weChat=find('MicroMessenger');

    //高德APP终端
    os.amap=find('amap');

    //是否是移动端(网络抄取，待优化！！！)
    os.isMobile=userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

    window.os=os;
})(window);
