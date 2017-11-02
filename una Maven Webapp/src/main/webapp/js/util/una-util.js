Namespace.register("UNA.util");

UNA.util.flash = {
    _cfs: function (basePath, a) {
        return basePath + a;
    },
    AC_GetArgs: function (b, e, g, d, h) {

        var a = new Object();
        a.embedAttrs = new Object();
        a.params = new Object();
        a.objAttrs = new Object();
        for (var c = 0; c < b.length; c = c + 2) {
            var f = b[c].toLowerCase();
            switch (f) {
                case 'classid':
                    break;
                case 'pluginspage':
                    a.embedAttrs[b[c]] = b[c + 1];
                    break;
                case 'src':
                case 'movie':
                    b[c + 1] = this.AC_AddExtension(b[c + 1], e);
                    a.embedAttrs.src = b[c + 1];
                    a.params[g] = b[c + 1];
                    break;
                case 'onafterupdate':
                case 'onbeforeupdate':
                case 'onblur':
                case 'oncellchange':
                case 'onclick':
                case 'ondblclick':
                case 'ondrag':
                case 'ondragend':
                case 'ondragenter':
                case 'ondragleave':
                case 'ondragover':
                case 'ondrop':
                case 'onfinish':
                case 'onfocus':
                case 'onhelp':
                case 'onmousedown':
                case 'onmouseup':
                case 'onmouseover':
                case 'onmousemove':
                case 'onmouseout':
                case 'onkeypress':
                case 'onkeydown':
                case 'onkeyup':
                case 'onload':
                case 'onlosecapture':
                case 'onpropertychange':
                case 'onreadystatechange':
                case 'onrowsdelete':
                case 'onrowenter':
                case 'onrowexit':
                case 'onrowsinserted':
                case 'onstart':
                case 'onscroll':
                case 'onbeforeeditfocus':
                case 'onactivate':
                case 'onbeforedeactivate':
                case 'ondeactivate':
                case 'type':
                case 'codebase':
                    a.objAttrs[b[c]] = b[c + 1];
                    break;
                case 'id':
                case 'name':
                case 'width':
                case 'height':
                case 'align':
                case 'vspace':
                case 'hspace':
                case 'class':
                case 'title':
                case 'accesskey':
                case 'tabindex':
                    a.embedAttrs[b[c]] = a.objAttrs[b[c]] = b[c + 1];
                    break;
                default:
                    a.embedAttrs[b[c]] = a.params[b[c]] = b[c + 1];
            }
        }
        a.objAttrs.classid = d;
        if (h) {
            a.embedAttrs.type = h;
        }
        return a;
    },
    _browser: function () {
        function Browser() {
            var b = navigator.userAgent;
            this.IE = b.indexOf('MSIE') != -1;
            this.FX = b.indexOf('Firefox') != -1;
            this.MZ = b.indexOf('Mozila') != -1;
            this.OP = b.indexOf('Opera') != -1;
            this.SAFARI = b.indexOf('AppleWebKit') != -1;
            this.IE6 = b.indexOf('MSIE 6') != -1;
            this.IE7 = b.indexOf('MSIE 7') != -1;
            this.IE8 = b.indexOf('MSIE 8') != -1;
            this.IE9 = b.indexOf('MSIE 9') != -1;
            this.IE10 = b.indexOf('MSIE 10.0') != -1;
            this.IE11 = b.indexOf("rv:11.0") != -1;
            this.FX2 = b.indexOf('Firefox/2') != -1;
            this.FX3 = b.indexOf('Firefox/3') != -1;
            this.GOOGLE = b.indexOf('Chrome') != -1;
            var a = navigator.appVersion.toLowerCase();
            this.WIN = a.indexOf('win') != -1;
            this.MAC = a.indexOf('mac') != -1;
            this.WIN2000 = b.indexOf('NT 5.0') != -1;
            this.XP = b.indexOf('NT 5.1') != -1;
            this.WIN2003 = b.indexOf('NT 5.2') != -1;
            this.VISTA = b.indexOf('NT 6.0') != -1;
            this.WIN2008 = b.indexOf('NT 6.1') != -1;
            this.WIN7 = b.indexOf('NT 7.0') != -1;
            this.IPOD = b.indexOf('iPod') != -1;
            this.IPHONE = b.indexOf('iPhone') != -1;
            this.IPAD = b.indexOf('iPad') != -1;
        }

        return new Browser();
    },
    AC_Generateobj: function (e, d, a) {
        var c = '';

        /**
         * CASE IE: 生成<object><embed></embed></object>
         * CASE FF/CHROME: 生成<embed>
         */
        if (this._browser.IE || this._browser.IE11) {
            var embed = "";

            embed += '<embed id="emb" ';
            for (var b in a) {
                if (a[b] && a[b].length > 0) {
                    embed += b + '="' + a[b] + '" ';
                }
            }
            embed += '></embed>';

            c += '<object id="flashObj" ';
            for (var b in e) {
                c += b + '="' + e[b] + '" ';
            }
            c += '>';

            for (var b in d) {
                if (d[b] && d[b].length > 0) {
                    c += '<param name="' + b + '" value="' + d[b] + '" /> ';
                }
            }

            c += embed;
            c += '</object>';
        } else {

            c += '<embed id="emb" ';
            for (var b in a) {
                if (a[b] && a[b].length > 0) {
                    c += b + '="' + a[b] + '" ';
                }
            }
            c += '></embed>';
        }

        return c;
    },
    AC_AddExtension: function (b, a) {
        if (b.indexOf('?') != -1) {
            return b.replace(/\?/, a + '?');
        } else {
            return b + a;
        }
    },
    getParams: function () {
        var params = [];

        params.push('width');
        params.push('320');
        params.push('height');
        params.push('272');
        params.push('src');
        params.push('/una/plugin/f');
        params.push('quality');
        params.push('high');
        params.push('align');
        params.push('middle');
        params.push('play');
        params.push('true');
        params.push('loop');
        params.push('true');
        params.push('scale');
        params.push('showall');
        params.push('wmode');
        params.push('transparent');
        params.push('devicefont');
        params.push('false');
        params.push('bgcolor');
        params.push('#cccccc');
        params.push('menu');
        params.push('true');
        params.push('allowFullScreen');
        params.push('true');
        params.push('allowScriptAccess');
        params.push('always');
        params.push('movie');
        params.push('/una/plugin/f');
        params.push('salign');
        params.push('');
        params.push('codebase');
        params.push('http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0');
        params.push('pluginspage');
        params.push('http://www.macromedia.com/go/getflashplayer');

        return params;
    },
    build: function () {

        var a = this.AC_GetArgs(this.getParams(), '.swf', 'movie', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000', 'application/x-shockwave-flash');
        var flash = this.AC_Generateobj(a.objAttrs, a.params, a.embedAttrs);

        return flash;
    }
};

UNA.util.TV = {
    FILE_SERVER: 'http://f141.uunfs.com/', // 视频和图片服务器
    FLV_SUFFIX: '.flv', // flv后缀
    PNG_SUFFIX: '.png', // png后缀
    LINK: '/',
    _f: function (a) {
        return this._i((a % (1000 * 1000 * 1000)) / (1000 * 1000)) + '/' + this._i((a % (1000 * 1000)) / 1000) + '/' + this._i(a % 1000);
    },
    _i: function (b) {
        var a = ('00' + parseInt(b));
        return a.substring(a.length - 3);
    },
    _s: function (d) {
        var section = [290000, 540000, 875000, 999999999];
        var context = ['data2', 'data3', 'data4', 'data5'];

        var a = section.length;
        var b = 0;
        for (var c = 0; c < a; c++) {
            if (b <= d && d < section[c]) {
                return context[c];
            }
            b = section[c];
        }
        return context[d - 1];
    },
    outPath: function (code, fileType) {
        return this.FILE_SERVER + this._s(code) + this.LINK + this._f(code) + ((fileType === 'flv') ? this.FLV_SUFFIX : this.PNG_SUFFIX);
    },
    playTV: function (id) {
        $(".flv-img").removeClass("hidden");
        $(".player").addClass("hidden");

        $("#play_img_" + id).addClass('hidden');
        $("#emb_" + id).removeClass('hidden');
        var newsData = $("#news_" + id).data("news_" + id);

        var embed = $("#emb_" + id).find("#emb")[0];
        embed.SetVariable('file', this.outPath(newsData.code, 'flv'));
    }
};

UNA.util.radio = {
    FILE_SERVER: 'http://f141.uunfs.com/',
    SUFFIX: '.mp3',
    swfPath: "/Uuwatch_Template/js/jPlayer",
    radio_f: function (a) {
        return this.radio_i((a % (1000 * 1000 * 1000 * 10)) / (1000 * 1000 * 10)) + '/' + this.radio_i(a / 10000) + '/' + this.radio_i((a % 10000) / 10) + '/' + this.radio_i((a % 10));
    },
    radio_i: function (b) {
        var a = ('00' + parseInt(b));
        return a.substring(a.length - 3);
    },
    playRadio: function (id, code) {
        var obj = this;
        $("#jquery_jplayer_" + id).jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: obj.FILE_SERVER + obj.radio_f(code) + obj.SUFFIX,
                });
            },
            cssSelectorAncestor: "#jp_container_" + id,
            swfPath: obj.swfPath,
            supplied: "mp3",
            wmode: "window",
            globalVolume: true,
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            play: function () {
                // 当前媒体播放时，其他媒体暂停播放
                $(this).jPlayer("pauseOthers");
            }
        });
    }
};