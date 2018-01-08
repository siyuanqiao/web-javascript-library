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
