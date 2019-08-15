let toString = Object.prototype.toString
let class2type = {}
"Boolean Number String Function Array Date RegExp Object".split(" ").forEach((name, i) => {
    class2type["[object " + name + "]"] = name.toLowerCase()
})

export function type(obj) {
    return obj == null
        ? String(obj)
        : class2type[toString.call(obj)] || "object"
}

var getProto = Object.getPrototypeOf

var hasOwn = class2type.hasOwnProperty

var fnToString = hasOwn.toString

var ObjectFunctionString = fnToString.call(Object)

export function isPlainObject(obj) {
    var proto, Ctor

    // Detect obvious negatives
    // Use toString instead of jQuery.type to catch host objects
    if (!obj || toString.call(obj) !== "[object Object]") {
        return false
    }

    proto = getProto(obj)

    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    if (!proto) {
        return true
    }

    // Objects with prototype are plain iff they were constructed by a global Object function
    Ctor = hasOwn.call(proto, "constructor") && proto.constructor
    return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString
}

// 为与源码的下标对应上，我们把第一个参数称为`第0个参数`，依次类推
export default function extend(...args) {
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {}, // 默认第0个参数为目标参数
        i = 1, // i表示从第几个参数开始向目标参数进行合并，默认从第1个参数开始向第0个参数进行合并
        length = arguments.length,
        deep = false // 默认为浅度拷贝

    // 判断第0个参数的类型，若第0个参数是boolean类型，则获取其为true还是false
    // 同时将第1个参数作为目标参数，i从当前目标参数的下一个
    if (typeof target === "boolean") {
        deep = target

        target = arguments[i] || {}
        i++
    }

    // 判断目标参数的类型，若目标参数既不是object类型，也不是function类型，则为目标参数重新赋值
    if (typeof target !== "object" && !(type(target) === "function")) {
        target = {}
    }

    // 若目标参数后面没有参数了，如$.extend({_name:'wenzi'}), $.extend(true, {_name:'wenzi'})
    // 则目标参数即为jQuery本身，而target表示的参数不再为目标参数
    if (i === length) {
        target = this
        i--
    }

    // 从第i个参数开始
    for (; i < length; i++) {
        // 获取第i个参数，且该参数不为null和undefind，在js中null和undefined，如果不区分类型，是相等的，null==undefined为true，
        // 因此可以用null来同时过滤掉null和undefind
        // 比如$.extend(target, {}, null);中的第2个参数null是不参与合并的
        if ((options = arguments[i]) != null) {

            // 使用for~in获取该参数中所有的字段

            // for (name in options) {
            //
            //   src = target[name] // 目标参数中name字段的值
            //   copy = options[name] // 当前参数中name字段的值
            //
            //   // 若参数中字段的值就是目标参数，停止赋值，进行下一个字段的赋值
            //   // 这是为了防止无限的循环嵌套，我们把这个称为，在下面进行比较详细的讲解
            //   // Prevent never-ending loop
            //   if ( name === "__proto__" || target === copy ) {
            //     continue;
            //   }
            //
            //   // 若deep为true，且当前参数中name字段的值存在且为object类型或Array类型，则进行深度赋值
            //   if (deep && copy && (type(copy) === "object" || (copyIsArray = Array.isArray( copy )))) {
            //     // 若当前参数中name字段的值为Array类型
            //     // 判断目标参数中name字段的值是否存在，若存在则使用原来的，否则进行初始化
            //     if (copyIsArray) {
            //       copyIsArray = false
            //       clone = src && (type(src) === "array" ? src : [])
            //
            //     } else {
            //       clone = src && (type(src) === "object" ? src : {})
            //     }
            //
            //     target[name] = extend(deep, clone, copy)
            //   } else if (copy !== undefined) {
            //     target[name] = copy
            //   }
            // }

            // tslint:disable-next-line
            for (name in options) {
                copy = options[name]

                // Prevent Object.prototype pollution
                // Prevent never-ending loop
                if (name === "__proto__" || target === copy) {
                    continue
                }

                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy)))) {
                    src = target[name]

                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) {
                        clone = []
                    } else if (!copyIsArray && !isPlainObject(src)) {
                        clone = {}
                    } else {
                        clone = src
                    }
                    copyIsArray = false

                    // Never move original objects, clone them
                    target[name] = extend(deep, clone, copy)

                    // Don't bring in undefined values
                } else if (copy !== undefined) {
                    target[name] = copy
                }
            }
        }
    }
    return target
};