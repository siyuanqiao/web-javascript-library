function addScript(url, onload, onerror) {
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
}

addScript('//res.wx.qq.com/open/js/jweixin-1.0.0.js',function(){
    $.ajax({
        url: '/wx-help/get-wx-config',
        type: "POST",
        dataType: "json",
        success: function(msg) {
            configWxShare(msg);
        }
    });
},function(){
    new Error('load jweixin-1.0.0.js error！');
});

function configWxShare(a) {
    wx.config({
        debug: false,
        appId: a.appid,
        timestamp: a.timestamp,
        nonceStr: a.nonceStr,
        signature: a.signature,
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ]
    });
    wx.ready(function(){
        setShare();
    });
}

var shareObj = {
    sharePath: window.location.href, //分享地址
    shareImg: "https://cdn.180china.com/activity/2018/JD-guopinri/img/share.jpg", //分享图片
    shareTitle: "3.15京东国品日，京东联合CCTV国家品牌计划成员共同发出品质宣言！", //分享title
    shareDesc: "为品质，在一起！共创品质新时代！" //分享描述
};

//设置分享内容
function setShare() {
    // 分享到朋友圈
    wx.onMenuShareTimeline({
        title: shareObj.shareTitle, // 分享标题
        link: shareObj.sharePath, // 分享链接
        imgUrl: shareObj.shareImg, // 分享图标
        success: function() {},
        cancel: function() {
            // 用户取消分享后执行的回调函数
        }
    });
    //分享给朋友
    wx.onMenuShareAppMessage({
        title: shareObj.shareTitle, // 分享标题
        desc: shareObj.shareDesc, // 分享描述
        link: shareObj.sharePath, // 分享链接
        imgUrl: shareObj.shareImg, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function() {},
        cancel: function() {
            // 用户取消分享后执行的回调函数
        }
    });
}