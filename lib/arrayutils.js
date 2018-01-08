/*
 * 数组相关功能
 */
(function() {
	/**
	 * 洗牌算法 打乱数组
	 * @return 打乱后的数组
	 * */
    Array.prototype.shuffle=function(){
        var i,t,m=this.length;
        while(m){
            i=Math.floor(Math.random()*m--);
            t=this[m];
            this[m]=this[i];
            this[i]=t;
        }
        return this;
    }

	/**
	 * 获取数组中最小的值
	 * */
    Array.prototype.getMin= function() {
    	var arr=this;
        var min = arr[0];
        for(var i = 1; i < arr.length; i++) {
            if(min > arr[i]) {
                min = arr[i];
            }
        }
        return min;
    },

	/**
	 * 获取数组中最大的值
	 * */
	Array.prototype.getMax= function() {
    	var arr=this;
        var max = arr[0];
        for(var i = 1; i < arr.length; i++) {
            if(max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }

    var arrayutils = {}

	window.arrayutils = arrayutils;
}());
