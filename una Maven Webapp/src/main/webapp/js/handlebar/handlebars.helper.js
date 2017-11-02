Handlebars.registerHelper({
    /**
     * 格式化时间
     * @param time
     * @returns {string}
     */
    'formatTime': function (time) {
        var fmt = "yyyy-MM-dd hh:mm:ss";
        if (time) {
            return (new Date(time)).format(fmt);
        } else {
            return '';
        }
    },
    'showTitle' : function (title, hlTitle) {
        return hlTitle ? hlTitle : title;
    },
    /**
     * 媒体类型图标
     * @param media
     * @returns {*}
     */
    'mediaTypeIcon' : function (media) {
        return UNA.common.MEDIA_TYPE_ICON[media];
    },
    'newsEmotion' : function (emotion) {
        var num1 = 0, num2 = 0.25, num3 = 0.75;
        if (emotion >= num1 && emotion < num2) {
            return '负面';
        } else if (emotion >= num2 && emotion <= num3) {
            return '中立';
        } else if (emotion > num3) {
            return '正面';
        }
    },
    'ifTvOrRadio' : function(media, options) {
        // 电视或广播
        if (media === 1 || media === 256) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },
    'ifTV' : function(media, options) {
        return media === 1 ? options.fn(this) : options.inverse(this);
    },
    'ifRadio' : function(media, options) {
        return media === 256 ? options.fn(this) : options.inverse(this);
    },
    'playerStyle' : function(media) {
        return (media === 1 || media === 256) ? "news-player-summary-content" : "news-summary-content";
    }
});