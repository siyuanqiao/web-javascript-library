var zb = (function(){
  function Z(doms){
    var i = 0;
    var len = doms.length;
    for(i;i<len;i++){
      this[i] = doms[i]
    }
    this.length = len
  }

  function $(){
    var doms = []
    return new Z(doms)
  }

  return $
})()

window.zb = zb
window.$ === undefined && (window.$ = zb)