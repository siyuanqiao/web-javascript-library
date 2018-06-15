import {longitude,latitude} from './geolocation.js';

export default function(arr){
    let _search="";
    let _option={
        dot:String(longitude)+","+String(latitude),
        gender:'3',
        weChatId:'000',
        ua:window.navigator.userAgent
    }
    for(let s in _option)_search+=(s+"="+_option[s]+"&");
    //去掉最后一个&符
    _search=_search.slice(0,-1);
    let img=new Image();
    img.src='http://monitor.180china.com:8080/monitor/mobile/u100000/p100003/201806131709/00.gif?'+_search;
}