
//重写1    https://kd.youth.cn/webApi/Nameless/getTaskBrowse   
//重写2    https://kandian.wkandian.com/v5/nameless/adlickstart.json
//主机名1  kd.youth.cn       
//主机名2  kandian.wkandian.com

const $ = new Env("肥皂看看赚   转载请留名字，谢谢");
let status;
const CryptoJS = $.isNode() ? require("./CryptoJS") : ``;
status = (status = ($.getval("zqkkzstatus") || "1")) > 1 ? `${status}` : "";
const zqkkzurlArr = [],
    zqkkzhdArr = [],
    zqkkzbodyArr = [],
    zqkkzhd1Arr = [],
    zqkkzcount = ''
let zqkkzurl = $.getdata('zqkkzurl')
let zqkkzhd = $.getdata('zqkkzhd')
let zqkkzhd1 = $.getdata('zqkkzhd1')
let zqkkzbody = $.getdata('zqkkzbody')

$.message = ''





    !(async () => {
        if (typeof $request !== "undefined") {
            await zqkkzck()
        } else {

            zqkkzurlArr.push($.getdata('zqkkzurl'))
            zqkkzhdArr.push($.getdata('zqkkzhd'))
            zqkkzbodyArr.push($.getdata('zqkkzbody'))
            zqkkzhd1Arr.push($.getdata('zqkkzhd1'))


            let zqkkzcount = ($.getval('zqkkzcount') || '1');
            for (let i = 0; i < zqkkzcount; i++) {
                zqkkzurlArr.push($.getdata(`zqkkzurl${i}`))
                zqkkzhdArr.push($.getdata(`zqkkzhd${i}`))
                zqkkzbodyArr.push($.getdata(`zqkkzbody${i}`))
                zqkkzhd1Arr.push($.getdata(`zqkkzhd1${i}`))
            }
            console.log(
                `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
                new Date().getTime() +
                new Date().getTimezoneOffset() * 60 * 1000 +
                8 * 60 * 60 * 1000
            ).toLocaleString()} ===============================================\n`);
            for (let i = 0; i < zqkkzhdArr.length; i++) {
                if (zqkkzhdArr[i]) {

                    zqkkzurl = zqkkzurlArr[i];
                    zqkkzhd = zqkkzhdArr[i];
                    zqkkzbody = zqkkzbodyArr[i];
                    zqkkz1hd = zqkkzhd1Arr[i];

                    $.index = i + 1;
                    console.log(`\n\n开始【肥皂中青看看赚${$.index}】`)
                    kkzlb()

                }
            }



        }
    })()

    .catch((e) => $.logErr(e))
    .finally(() => $.done())


function zqkkzck() {
    //https://kd.youth.cn/webApi/Nameless/getTaskBrowse
    if ($request.url.indexOf("Nameless/getTaskBrowse") > -1) {
        const zqkkzurl = $request.url
        if (zqkkzurl) $.setdata(zqkkzurl, `zqkkzurl${status}`)
        $.log(zqkkzurl)

        const zqkkzhd = JSON.stringify($request.headers)
        if (zqkkzhd) $.setdata(zqkkzhd, `zqkkzhd${status}`)
        $.log(zqkkzhd)

        $.msg($.name, "", `肥皂中青看看赚${status}获取列表成功`)

    }
    //https://kandian.wkandian.com/v5/nameless/adlickstart.json
    if ($request.url.indexOf("v5/nameless/adlickstart.jsone") > -1) {
        const zqkkzbody = $request.body
        if (zqkkzbody) $.setdata(zqkkzbody, `zqkkzbody${status}`)
        $.log(zqkkzbody)

        const zqkkz1hd = JSON.stringify($request.headers)
        if (zqkkz1hd) $.setdata(zqkkz1hd, `zqkkz1hd${status}`)
        $.log(zqkkz1hd)

        $.msg($.name, "", `肥皂中青看看赚${status}获取任务成功`)

    }
}


function kkzlb(timeout = 0) {

    return new Promise((resolve) => {
        let url = {
            url: zqkkzurl,
            headers: JSON.parse(zqkkzhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.data.list[0].id != '') {
                    console.log(`查询看看赚列表完毕\n  共有${data.data.list.length}个看看赚任务`)
                    for (let i = 0; i < data.data.list.length; i++) {
                        id = data.data.list[i].id
                        body0 = zqkkzbody.split('%3D')[0]
                        body1 = zqkkzbody.split('%3D')[1]
                        body2 = CryptoJS.DES_Decrypt(body1)
                        body3 = body2.replace(/&task_id=\d+&/g, `&task_id=${id}&`)
                        body4 = CryptoJS.DES_Encrypt(body3)
                        ibody = body0 + body4 + '=='
                        for (let o = 0; o < 6; o++) {
                            await kkzzx()
                            await $.wait(6000)
                        }

                        await kkzjl()
                        await $.wait(2000)

                    }
                } else {
                    console.log('查询看看赚列表失败\n')
                }
            } catch (e) {

            } finally {
                resolve()
            }
        }, timeout)
    })
}

function kkzzx(timeout = 0) {

    return new Promise((resolve) => {

        let url = {
            url: `https://kandian.wkandian.com/v5/nameless/bannerstatus.json`,
            headers: JSON.parse(zqkkzhd1),
            body: ibody,
        }
        $.post(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.error_code == 0) {
                    console.log(`执行成功`)
                } else {
                    console.log('执行失败\n')
                }
            } catch (e) {

            } finally {
                resolve()
            }
        }, timeout)
    })
}



function kkzjl(timeout = 0) {

    return new Promise((resolve) => {

        let url = {
            url: `https://kandian.wkandian.com/v5/nameless/adlickend.json`,
            headers: JSON.parse(zqkkzhd1),
            body: ibody,
        }
        $.post(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.error_code == 0) {
                    console.log(data.items.desc)
                } else {
                    console.log(data.message)
                }
            } catch (e) {

            } finally {
                resolve()
            }
        }, timeout)
    })
}









function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
