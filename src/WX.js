import extend from "./base/extend.js";
import util from './util/index.js';

export default class WX{
    /**
     * @param _shareConfig {object} 分享信息
     * */
    constructor(_shareConfig){
        /*{
            sharePath: window.location.href, //分享地址
            shareImg: "https://cdn.180china.com/plusday/static/resource/share.jpg", //分享图片
            shareTitle: "京东PLUS会员狂欢日", //分享title
            shareDesc: "PLUS会员，抢618元神券礼包；开通PLUS会员，尊享九大特权！" //分享描述
        };*/
        this.shareConfig=_shareConfig||null;

        if(this.shareConfig){
            this.getWXConfig();
        }
    }

    /**
     * 获取微信分享配置信息
     * */
    getWXConfig(){
        util.addScript('//res.wx.qq.com/open/js/jweixin-1.2.0.js',()=>{
            /*$.getJSON('https://cdn.180china.com/wx-help/get-wx-config1',function(msg){
              console.log(msg);
            });*/
            $.ajax({
                url: '/wx-help/get-wx-config',
                type: "POST",
                dataType: "json",
                success: (config)=>{
                    //alert(JSON.stringify(msg));
                    this.wxconfig=config;
                    this.configWxShare(config);
                },
                error:(error)=>{
                    //alert(JSON.stringify(error));
                }
            });
        },()=>{
            new Error('load jweixin-1.2.0.js error！');
        });
    }

    configWxShare(config) {
        wx.config({
            debug: false,
            appId: config.appid,
            timestamp: config.timestamp,
            nonceStr: config.nonceStr,
            signature: config.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo'
            ]
        });
        wx.ready(()=>{
            this.setShare(this.shareConfig);
        });
    }

    /**
     * 设置分享文案
     * */
    setShare(obj){
        this.shareObj=extend(this.shareObj || {},obj);
        let shareObj=this.shareObj;
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
}