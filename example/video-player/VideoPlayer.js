
var VideoPlayer = function(params) {

    this._dom = $(params.el);
    this._video = this._dom.find("video")[0];
    this._video.src = params.url;
    this._video.volume=0;

    //skin
    this._skin = new Skin(this._video, this._dom[0]);
    this._skin.init();

};

var Skin = function(_v, _d) {
    var scope = this;

    this._onState = null;

    this._video = _v;
    this._dom = _d;

    this.init=function(){
        $('.time-current').text(formatTime(0));
        $('.time-duration').text(formatTime(0));

        addVideoEvents(_v);

        document.querySelector(".player_tips").addEventListener("click", function(e) {
            e.stopPropagation(); //不再派发事件
            if(scope._onState=='ended'){
                scope.toPlay();
                $('.player_ended').hide();
            }else{
                scope.togglePlay();
            }
        });
        this._dom.addEventListener("mouseover",function(){
            $('.player-controls').show();
        });
        this._dom.addEventListener("mouseout",function(){
            if(scope._onState==null || scope._onState=='pause' || scope._onState=='ended'){

            }else{
                $('.player-controls').hide();
            }
        });
        //播放和暂停按钮
        document.querySelector(".togg-btn").addEventListener('click',function(e){
            e.stopPropagation();
            scope.togglePlay();
        });
        document.querySelector('.process-bar').addEventListener('click',function(e){
            var offsetX=e.offsetX,barWidth=$(e.currentTarget).width();
            var n=(offsetX/barWidth);
            var d=_v.duration;
            var ct=n*d;
            console.log(offsetX,barWidth,n,ct,d);
            scope.seek(ct);
        });
    }

    function addVideoEvents(_v) {
        /*当音频/视频处于加载过程中时，会依次发生以下事件：*/
        _v.addEventListener("loadstart", function() {//客户端开始请求数据
            console.log('1、loadstart、客户端开始请求数据');
        }, false);
        _v.addEventListener("durationchange", function() {//资源长度改变
            console.log('2、durationchange、资源长度改变');
            $('.time-duration').text(formatTime(_v.duration));
        }, false);
        _v.addEventListener("loadedmetadata", function() {
            console.log('3、loadedmetadata、');
        }, false);
        _v.addEventListener("loadeddata", function() {
            console.log('4、loadeddata、');
        }, false);
        _v.addEventListener("progress", function() {
            var log='5、progress、';
            if(_v.readyState == 4){
                var n=Math.round(_v.buffered.end(0) / _v.duration * 100);
                log+='正在缓冲：' + n + '%';
                scope.setProcess(n);
            }
            //console.log(log);
        }, false);
        _v.addEventListener("canplay", function() {
            console.log('6、canplay、缓冲已足够开始时。-----每次卡住，再缓冲成功都会调用此方法');
            scope.hideWaiting();
        }, false);
        _v.addEventListener("canplaythrough", function() { //可以播放，歌曲全部加载完毕
            console.log('7、canplaythrough、');
        }, false);


        _v.addEventListener("waiting", function() {
            console.log('onwaiting,当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本');
            scope.onState='waiting';
        }, false);
        _v.addEventListener("play", function() {}, false);
        _v.addEventListener("playing", function() {
            console.log('playing,当媒介已开始播放时运行的脚本。-----加载提示影藏');
            scope.onState='playing';
        }, false);
        _v.addEventListener("pause", function() {
            console.log('pause,当媒介被用户或程序暂停时运行的脚本。-----视频播放结束也会调用此方法');
            scope.onState='pause';
        }, false);
        _v.addEventListener("ended", function() {
            console.log('ended,当媒介已到达结尾（可发送类似“感谢观看”之类的消息）。');
            scope.onState='ended';
            scope.seek(0);
        }, false);


        _v.addEventListener("suspend", function() {}, false); //延迟下载
        _v.addEventListener("abort", function() {}, false); //客户端主动终止下载（不是因为错误引起）
        _v.addEventListener("stalled", function() {}, false); //网速失速
        _v.addEventListener("seeking", function() {}, false);
        _v.addEventListener("seeked", function() {}, false);

        _v.addEventListener("ratechange", function() {}, false); //播放速率改变
        _v.addEventListener("volumechange", function() {}, false); //音量改变
        _v.addEventListener("timeupdate", function() {
            scope.updateBar();
        }, false);

        _v.addEventListener("error", videoError, false);
    }

    function videoError() {
        var err = {};
        err.code = scope._video.error.code;
        err.error = ""
        switch (err.code) {
            case 1:
                err.error = "播放过程中用户终止";
                break;
            case 2:
                err.error = "播放过程中网络错误";
                break;
            case 3:
                err.error = "播放过程中解码错误";
                break;
            case 4:
                err.error = "播放过程中URL无效"
        }

        scope.showWarning();
    }

};
Skin.prototype = {
    set onState(value){
        this._onState=value;
        if(value=='waiting'){
            this.showWaiting();
        }else if(value=='playing'){
            $('.togg-btn').removeClass('playing paused').addClass('paused');
        }else if(value=='pause'){
            $('.togg-btn').removeClass('playing paused').addClass('playing');
        }else if(value=='ended'){
            this.showEnded();
        }
    },
    showPause: function() {
    },
    hidePause: function() {
    },
    showProcessBar: function() {
    },
    hideProcessBar: function() {
    },
    updateBar: function() {

        var length = parseInt(this._video.duration),
            ct = parseInt(this._video.currentTime),
            n =  ct / length *100;

        $(".process-line").css({width: n+"%"});

        $('.time-current').text(formatTime(ct));
    },
    setProcess: function(n) {
        $('.process-buffer').css('width',n+'%');
    },
    seek: function(e) {
        this._video.currentTime = e
    },
    toPlay: function() {
        this._video.play();

        $('.player_play_btn').hide();
    },
    toPause: function() {
        this._video.pause();

        $('.player_play_btn').show();
    },
    showWaiting: function() {
        $(".player_waiting").show();
    },
    hideWaiting: function() {
        $(".player_waiting").hide();
    },
    showWarning: function() {

    },
    togglePlay:function(){
        if(this._video.paused){
            this.toPlay();
        }else{
            this.toPause();
            //如果当前在加载则影藏加载，显示出播放按钮
            this.hideWaiting();
        }

    },
    showEnded:function(){
        $('.player_ended').show();
    }
};

//小于10前面加0
var t=function(num){
    if(num<10){
        return '0'+num.toString();
    }
    return num;
}

//秒转换成时分秒
var formatTime=function(time){
    var hours='',minutes='',seconds='';
    if(time>0){
        seconds=t(parseInt(time%60));
        if(time>=60){
            minutes=t(parseInt(time/60%60))+':';
            if(time>=3600){
                hours=t(parseInt(time/3600%24))+':';
            }
        }else{
            minutes='00:'
        }
    }else{
        seconds='00:00';
    }
    return hours+minutes+seconds;
}