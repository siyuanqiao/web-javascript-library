var userAgent=window.navigator.userAgent;
var find=function(needle){
    return userAgent.indexOf(needle) !== -1;
}
var os={
    iphone:find('iphone'),
    ipod:find('ipod'),
    ipad:find('ipad'),
    ios:os.iphone || os.ipod || os.ipad
}