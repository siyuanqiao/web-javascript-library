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

    os.android=find('Android');

    //是否是移动端(网络抄取，待优化！！！)
    os.isMobile=userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

    window.os=os;
}());
