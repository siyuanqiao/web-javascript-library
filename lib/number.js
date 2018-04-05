/**
 * 数字值相关功能
 * 遵循mozilla的规则：扩展内置原型的唯一理由是支持JavaScript 引擎的新特性，如Array.forEach。
 */

(function(){

    /**
     * 数字四舍五入（保留n位小数）
     * @param {number} [number] 要四舍五入的数字
     * @param {number} [n] 保留的位数
     * */
    Number.prototype.getFloat=function(number, n) {
        n = n ? parseInt(n) : 0;
        if(n <= 0) return Math.round(number);
        number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
        return number;
    }

    /*
     * 将数字转成数组
     * */
    Number.prototype.getNumToArray=function(number) {
        var aa;
        if(number < 10) {
            aa = '0' + number;
        } else {
            aa = number.toString();
        }

        var arr = aa.split("");
        return arr;
    }
}());