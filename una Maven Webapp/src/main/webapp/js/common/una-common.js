Namespace.register("UNA.common");

UNA.common.MEDIA_TYPE_ICON = {
    1: "icons_bg tv",
    2: "icons_bg paper",
    4: "icons_bg web",
    8: "icons_bg weibo",
    16: "icons_bg bbs",
    32: "icons_bg blog",
    64: "icons_bg weixin",
    128: "icons_bg app",
    256: "icons_bg radio"
};

UNA.common.render = function () {
    $.getJSON("/una/json/data.json", function (result) {
        $('#container').handlebars($('#tpl'), result.data);
        UNA.common.domBindData(result.data.data);
    });
};

UNA.common.domBindData = function (data) {
    var prefix = "news_";
    var flashHtml = UNA.util.flash.build();
    for (var i = 0, len = data.length; i < len; i++) {
        var news = data[i];

        // 绑定数据到dom
        $('#' + prefix + news.id).data(prefix + news.id, news);

        // tv & radio
        if (data[i].media === 1) {
            $('#img_' + news.id).attr('src', UNA.util.TV.outPath(news.code, 'png'));
            $("#emb_" + news.id).html(flashHtml);
        }

        if (data[i].media === 256) {
            UNA.util.radio.playRadio(data[i].id, data[i].code);
        }
    }
};

UNA.common.NewsItem = {
    /**
     * 删除新闻
     * @param id
     */
    del: function (id) {
        // 更新索引
        // 删除dom
    },
    /**
     * 新闻快照
     * @param code
     */
    cache: function (code) {
    },
    /**
     * 原始新闻
     * @param id
     */
    originalLink: function (id) {
    },
    /**
     * 书签
     * @param id
     */
    bookmark: function (id) {
    },
    /**
     * 加入报告
     * @param id
     */
    addReport: function (id) {
    },
    /**
     * 分享新闻
     * @param id
     */
    share: function (id) {
    },
    /**
     * 新闻纠错
     * @param id
     */
    correct: function (id) {
    },
    /**
     * 合并相似新闻
     * @param id
     */
    merge: function (id) {
    },
    /**
     * 添加标签
     * @param id
     */
    tagMark: function (id) {
    },
    /**
     * 彩信推送
     * @param id
     */
    sendMessage: function (id) {
    },
    /**
     * 标记正负面
     */
    sentimentMark: function () {
    }
};



