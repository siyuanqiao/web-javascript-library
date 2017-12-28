/*
 * 字符相关功能
 */
(function() {
	var string = {
		/*
		 * 去除右空格
		 * */
		rtrim: function(value) {
			return value.replace(/\s*$/, "");
		},
		/*
		 * 去除左空格
		 * */
		ltrim: function(value) {
			return value.replace(/^\s*/, "");
		},
		/*
		 * 去除左右空格
		 * */
		trim: function(value) {
			return this.rtrim(this.ltrim(value));
		},
		/*
		 * 判断是否为空字符
		 * */
		isEmpty: function(value) {
			var __temp = this.trim(value);
			return __temp.length == 0;
		},
		/*
		 * 判断就否为手机号码
		 * */
		isMobile: function(value) {
			var __temp = this.trim(value);
			var p = /^0*(13|14|15|16|17|18)\d{9}$/;
			return p.test(__temp);
		},
		/*
		 * 将字符串中的指定字符全部替换成另一个字符
		 * str:整个字符串
		 * a:要被替换的字符
		 * b:替换成这个字符
		 * mm:匹配模式，如下:
		 * 	g:全局匹配
			i:区分大小写
			m:多行匹配
		 * */
		strReplace: function(str, a, b, mm) {
			if(m == null) {
				m = '';
			}
			var cc = str.replace(new RegExp(a, mm), b);
			return cc;
		},
		/*
		 * 补位，给指定字符串前面补位，用指定的字符补位，默认为空格
		 * str:指定字符
		 * len:补几位
		 * ch:补什么字符
		 * */
		leftpad: function(str, len, ch) {
			str = String(str);
			var i = -1;
			if(!ch && ch !== 0) ch = ' ';
			while(++i < len) {
				str = ch + str;
			}
			return str;
		},
		/*
		 * 在指定地方插入字符
		 * str:指定字符串
		 * flg:要插入的字符串
		 * sn:{number} 要插入的位置
		 * */
		insert_flg: function(str, flg, sn) {
			var newstr = "";
			var a = str.slice(0, sn);
			var b = str.slice(sn);
			newstr = a + flg + b;
			return newstr;
		},
		/*
		 * 删除指定地方的字符
		 * str:指定字符串
		 * sn:{number} 要删除的位置
		 * */
		del_flg: function(str, sn) {
			var newstr = "";
			var arr = str.split('');
			arr.splice(sn - 1, 1);
			newstr = arr.join("");
			return newstr;
		}
	};
	window.string = string;
}());