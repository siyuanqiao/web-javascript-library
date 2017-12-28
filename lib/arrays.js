/*
 * 数组相关功能
 */
(function() {
	var arrays = {
		/*
		 * 将数字转成数组
		 * */
		getNumToArray: function(__num) {
			var aa;
			if(__num < 10) {
				aa = '0' + __num;
			} else {
				aa = __num.toString();
			}

			var arr = aa.split("");
			return arr;
		},
		/*
		 * 获取数组中最小的值
		 * */
		getMin: function(arr) {
			var min = arr[0];
			for(var i = 1; i < arr.length; i++) {
				if(min > arr[i]) {
					min = arr[i];
				}
			}
			return min;
		},
		/*
		 * 获取数组中最大的值
		 * */
		getMax: function(arr) {
			var max = arr[0];
			for(var i = 1; i < arr.length; i++) {
				if(max < arr[i]) {
					max = arr[i];
				}
			}
			return max;
		},
		/*
		 * 打乱数组顺序生成新的数组
		 * */
		upsetArray: function(arr) {
			var arr2 = new Array();
			while(arr.length > 0) {
				var n = Math.floor(Math.random() * arr.length);
				var temp = arr[n];
				arr2.push(temp);
				arr.splice(n, 1);
			}
			return arr2;
		}
	}
	window.arrays = arrays;
}());