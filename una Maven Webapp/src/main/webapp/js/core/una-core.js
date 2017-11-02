// 声明一个全局对象Namespace,用来注册命名空间
Namespace = new Object();

// 全局对象仅仅存在register函数,参数为命名空间全路径.如"UNA.common"
Namespace.register = function(fullNS) {
    // 将命名空间切成N部分, 比如UNA、common等
    var nsArray = fullNS.split('.');

    var sEval = "";
    var sNS = "";

    for (var i =0; i < nsArray.length; i++) {
        if (i != 0) {
            sNS += ".";
        }

        sNS += nsArray[i];

        // 依次创建构造命名空间对象(假如不存在的话)的语句
        // 比如先创建UNA,然后创建UNA.common,依次下去
        sEval += "if (typeof(" + sNS + ") == 'undefined') " + sNS + " = new Object();";
    }

    if (sEval != "") {
        eval(sEval);
    }
};

(function ($) {
    var compiled = {};
    $.fn.handlebars = function (template, data) {
        if (template instanceof jQuery) {
            template = $(template).html();
        }
        compiled[template] = Handlebars.compile(template);
        this.html(compiled[template](data));
    };
})(jQuery);

/**
 * 时间格式化
 * @param fmt
 * @returns {*}
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                      //日
        "h+": this.getHours(),                     //小时
        "m+": this.getMinutes(),                   //分
        "s+": this.getSeconds(),                   //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()                //毫秒
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }

    return fmt;
};