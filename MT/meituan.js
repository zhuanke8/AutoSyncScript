//美团天天神卷+赚米粒
//百度 美团登录自己抓Token
//只支持青龙
// 环境变量 mtTk
//多账号用 @

// https://gitee.com/xiecoll/radish-script/raw/master/MT/meituan.js

const _0x32f796=_0x49a8;(function(_0x18a8ac,_0xcd810){const _0x5c910e=_0x49a8,_0x55b5d5=_0x18a8ac();while(!![]){try{const _0x244137=parseInt(_0x5c910e(0xdf))/0x1+parseInt(_0x5c910e(0x139))/0x2+-parseInt(_0x5c910e(0x9f))/0x3*(parseInt(_0x5c910e(0xd7))/0x4)+-parseInt(_0x5c910e(0x86))/0x5+parseInt(_0x5c910e(0xe5))/0x6*(-parseInt(_0x5c910e(0xb3))/0x7)+-parseInt(_0x5c910e(0xe9))/0x8*(-parseInt(_0x5c910e(0x124))/0x9)+parseInt(_0x5c910e(0xa3))/0xa*(parseInt(_0x5c910e(0x12f))/0xb);if(_0x244137===_0xcd810)break;else _0x55b5d5['push'](_0x55b5d5['shift']());}catch(_0x5a7b84){_0x55b5d5['push'](_0x55b5d5['shift']());}}}(_0x4fd4,0x68d8d));const $=new Env(_0x32f796(0x126));let status;status=(status=$[_0x32f796(0xdc)](_0x32f796(0x99))||'1')>0x1?''+status:'';let slckArr=[],time=Math['round'](Date['now']()/0x3e8),acceptTagCode,queryTagCode,num=rand(0xa,0x63),slcks='',mtToken;!(async()=>{const _0x2b417c=_0x32f796;if(typeof $request!==_0x2b417c(0xf4))fhxzck();else{if(!$['isNode']()){}else{process[_0x2b417c(0x88)][_0x2b417c(0xca)]&&process[_0x2b417c(0x88)][_0x2b417c(0xca)]['indexOf']('@')>-0x1?(slckArr=process[_0x2b417c(0x88)][_0x2b417c(0xca)][_0x2b417c(0xfc)]('@'),console[_0x2b417c(0xd3)]('您选择的是用\x22@\x22隔开\x0a')):slcks=[process[_0x2b417c(0x88)][_0x2b417c(0xca)]];;Object[_0x2b417c(0xc6)](slcks)[_0x2b417c(0x134)](_0x295f1d=>{slcks[_0x295f1d]&&slckArr['push'](slcks[_0x295f1d]);}),console[_0x2b417c(0xd3)](_0x2b417c(0xbe)+slckArr['length']+_0x2b417c(0x7c)),await qswcdl();}}})()['catch'](_0x2b048a=>$[_0x32f796(0xe1)](_0x2b048a))[_0x32f796(0x96)](()=>$[_0x32f796(0x83)]());function qswcdl(_0x43e914=0x0){return new Promise(_0xe6fe68=>{const _0x3fcf91=_0x49a8;let _0x4f02d0={'url':_0x3fcf91(0x13d),'headers':''};$[_0x3fcf91(0x11b)](_0x4f02d0,async(_0x28c0e7,_0x418799,_0x47c79e)=>{const _0x960325=_0x3fcf91;try{_0x47c79e=JSON[_0x960325(0x90)](_0x47c79e);if(_0x47c79e[_0x960325(0xb9)]==0x1){console['log'](_0x960325(0xa8)+_0x47c79e[_0x960325(0xb4)]);for(let _0x1d1905=0x0;_0x1d1905<slckArr[_0x960325(0x79)];_0x1d1905++){$[_0x960325(0x91)]='',mtToken=slckArr[_0x1d1905],$[_0x960325(0xba)]=_0x1d1905+0x1,console[_0x960325(0xd3)](_0x960325(0xaa)+$[_0x960325(0xba)]+'】'),console[_0x960325(0xd3)](_0x960325(0x108)),await gundamGrabV3(),await fetchcoupon(),await shenquan(),console[_0x960325(0xd3)](_0x960325(0xa2)),await aggregationpage(),await signin(),await startvisittaskop(),await homepageicon(),await visittaskop(),await dinnersignin(),$['log']('------------------任务结束------------------');}}else console[_0x960325(0xd3)]('脚本状态'+_0x47c79e['msg']);}catch(_0x8cfbcb){$['logErr'](_0x8cfbcb,_0x418799);}finally{_0xe6fe68();}},0x0);});}function fhxzck(){const _0x3e24a6=_0x32f796;if($request[_0x3e24a6(0xfe)][_0x3e24a6(0xe0)](_0x3e24a6(0x12b))>-0x1){const _0x19ec6b=$request['headers']['Cookie'];if(_0x19ec6b)$[_0x3e24a6(0x102)](_0x19ec6b,'elmck'+status);$[_0x3e24a6(0xd3)](_0x19ec6b),$['msg']($[_0x3e24a6(0x13e)],'',_0x3e24a6(0xd8)+status+_0x3e24a6(0x116));}}function fetchcoupon(){return new Promise(_0x4a1b27=>{const _0x4f2600=_0x49a8;let _0x4ba9a6={'url':_0x4f2600(0x119)+mtToken,'headers':{'Host':_0x4f2600(0x7d),'Connection':_0x4f2600(0x141),'content-type':_0x4f2600(0xaf),'X-Requested-With':_0x4f2600(0x7b),'Accept-Encoding':_0x4f2600(0x85),'User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2012_1_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/16D39\x20MicroMessenger/8.0.14(0x18000e2f)\x20NetType/WIFI\x20Language/zh_CN','Referer':'https://servicewechat.com/wx2c348cf579062e56/568/page'}};$[_0x4f2600(0x11b)](_0x4ba9a6,async(_0x29384f,_0x4dbd74,_0x44cb4c)=>{const _0x5a2d8d=_0x4f2600;try{console[_0x5a2d8d(0xd3)](_0x5a2d8d(0x10a));let _0x58dec0=JSON[_0x5a2d8d(0x90)](_0x44cb4c);console[_0x5a2d8d(0xd3)](_0x58dec0['msg']);}catch(_0x3ed34d){$[_0x5a2d8d(0xe1)](_0x3ed34d,_0x4dbd74);}finally{_0x4a1b27();}},0x0);});}function gundamGrabV3(){return new Promise(_0xf55d64=>{const _0x6e2203=_0x49a8;let _0x356a61={'url':_0x6e2203(0x137),'headers':{'Host':_0x6e2203(0xf7),'Content-Type':_0x6e2203(0x113),'Origin':_0x6e2203(0xcd),'Accept-Encoding':_0x6e2203(0xdd),'Cookie':_0x6e2203(0xb0)+mtToken+';'},'body':_0x6e2203(0xe7)};$[_0x6e2203(0xf2)](_0x356a61,async(_0x5700ca,_0x185bc2,_0x16823e)=>{const _0x3e3462=_0x6e2203;try{console[_0x3e3462(0xd3)](_0x3e3462(0xd6));let _0x39933a=JSON[_0x3e3462(0x90)](_0x16823e);_0x39933a[_0x3e3462(0xd9)][_0x3e3462(0x7a)][_0x3e3462(0x134)](_0x222f40=>{const _0x3b5c58=_0x3e3462;console['log'](_0x3b5c58(0x106)+_0x222f40['couponAmount']+'元'+_0x222f40[_0x3b5c58(0x13c)]+'的'+_0x222f40[_0x3b5c58(0x131)]);});}catch(_0xeb8a44){$[_0x3e3462(0xe1)](_0xeb8a44,_0x185bc2);}finally{_0xf55d64();}},0x0);});}function _0x49a8(_0x1209ae,_0x3ffebf){const _0x4fd435=_0x4fd4();return _0x49a8=function(_0x49a8fe,_0x93f66b){_0x49a8fe=_0x49a8fe-0x6e;let _0x3fb7df=_0x4fd435[_0x49a8fe];return _0x3fb7df;},_0x49a8(_0x1209ae,_0x3ffebf);}function drawlottery(_0x10bf96){return new Promise(_0x4d6835=>{const _0x8c37a3=_0x49a8;let _0x13df8e={'url':_0x8c37a3(0x101),'body':'parActivityId=Gh1tkq-wvFU2xEP_ZPzHPQ&wm_latitude=22931249&wm_longitude=113387349&token='+mtToken+_0x8c37a3(0x78)+_0x10bf96+'&isShareLink=true&propType=1&propId=2','headers':{'Host':_0x8c37a3(0xd0),'Connection':_0x8c37a3(0x141),'content-type':'application/x-www-form-urlencoded','wm-ctype':_0x8c37a3(0xdb),'Accept-Encoding':_0x8c37a3(0x85),'User-Agent':_0x8c37a3(0x8d)}};$['post'](_0x13df8e,async(_0x5ea1ed,_0x255a03,_0x1f52a9)=>{const _0x2b206f=_0x8c37a3;try{console[_0x2b206f(0xd3)](_0x1f52a9);}catch(_0x2076d8){$['logErr'](_0x2076d8,_0x255a03);}finally{_0x4d6835();}},0x0);});}function corepage(){return new Promise(_0x12ce3c=>{const _0x30d92d=_0x49a8;let _0x1b29af={'url':_0x30d92d(0xe2),'body':_0x30d92d(0x130)+mtToken,'headers':{'Host':_0x30d92d(0x104),'User-Agent':'MeituanGroup/11.9.208','x-requested-with':_0x30d92d(0x7b),'content-type':'application/x-www-form-urlencoded'}};$['post'](_0x1b29af,async(_0x458e26,_0x479f7e,_0x25b7ba)=>{const _0x2ddb6d=_0x30d92d;try{console[_0x2ddb6d(0xd3)](_0x2ddb6d(0xf5));let _0x44bc13=JSON[_0x2ddb6d(0x90)](_0x25b7ba),_0x5c7463=_0x44bc13[_0x2ddb6d(0xd9)][_0x2ddb6d(0xd1)];await drawlottery(_0x5c7463);}catch(_0x5a214c){$[_0x2ddb6d(0xe1)](_0x5a214c,_0x479f7e);}finally{_0x12ce3c();}},0x0);});}function shenquan(){return new Promise(_0x26e4b4=>{const _0x42d4f8=_0x49a8;let _0x331897={'url':_0x42d4f8(0xfa),'headers':{'Host':_0x42d4f8(0xc7),'Content-Type':_0x42d4f8(0x113),'Origin':'https://i.waimai.meituan.com','Accept-Encoding':_0x42d4f8(0xdd),'Cookie':'token='+mtToken+';'}};$[_0x42d4f8(0x11b)](_0x331897,async(_0xcb57f2,_0x548988,_0x1629f8)=>{const _0x47fcf9=_0x42d4f8;try{let _0x57ba6d=JSON[_0x47fcf9(0x90)](_0x1629f8);if(_0x57ba6d[_0x47fcf9(0xf6)]==0x0){console['log'](_0x47fcf9(0x10c));for(let _0x596a65=0x0;_0x596a65<_0x57ba6d[_0x47fcf9(0xd9)][_0x47fcf9(0x79)];_0x596a65++){console[_0x47fcf9(0xd3)]('第'+(_0x596a65+0x1)+_0x47fcf9(0xe6)+_0x57ba6d[_0x47fcf9(0xd9)][_0x596a65]['couponOuterType']+'减'+_0x57ba6d[_0x47fcf9(0xd9)][_0x596a65][_0x47fcf9(0xc0)]+_0x47fcf9(0x10b));let _0x16b450=_0x57ba6d[_0x47fcf9(0xd9)][_0x596a65][_0x47fcf9(0x81)];await multiple(_0x16b450),await $['wait'](0x3e8);}}else console[_0x47fcf9(0xd3)](_0x57ba6d['msg']);}catch(_0x4d2760){$[_0x47fcf9(0xe1)](_0x4d2760,_0x548988);}finally{_0x26e4b4();}},0x0);});}function multiple(_0x524d3c){return new Promise(_0x2fc078=>{const _0x27ed26=_0x49a8;let _0x3fb928={'url':'https://promotion.waimai.meituan.com/playcenter/common/v1/coupon/multiple?isMini=0&ctype=iphone&isInDpEnv=0','headers':{'Host':_0x27ed26(0xc7),'Content-Type':'application/json;charset=UTF-8','Origin':_0x27ed26(0xa5),'Accept-Encoding':_0x27ed26(0xdd),'Cookie':'token='+mtToken+';'},'body':_0x27ed26(0xf3)+_0x524d3c+'\x22}'};$[_0x27ed26(0xf2)](_0x3fb928,async(_0x2b4da4,_0x14fe87,_0x38a709)=>{const _0x5560ba=_0x27ed26;try{let _0x44f351=JSON[_0x5560ba(0x90)](_0x38a709);_0x44f351[_0x5560ba(0xf6)]==0x0?console['log'](_0x44f351['data'][0x0][_0x5560ba(0x11c)]):console[_0x5560ba(0xd3)]('不能再膨胀了');}catch(_0xfd2b2c){$[_0x5560ba(0xe1)](_0xfd2b2c,_0x14fe87);}finally{_0x2fc078();}},0x0);});}function aggregationpage(){return new Promise(_0x277954=>{const _0x3fe2c1=_0x49a8;let _0x282b3a={'url':'https://wx.waimai.meituan.com/weapp/v1/wlwc/aggregationpage','body':_0x3fe2c1(0x8c)+mtToken+_0x3fe2c1(0xbb)+mtToken+_0x3fe2c1(0xb5),'headers':{'Host':_0x3fe2c1(0xd0),'Connection':_0x3fe2c1(0x141),'content-type':'application/x-www-form-urlencoded','wm-ctype':'wxapp','Accept-Encoding':_0x3fe2c1(0x85),'User-Agent':_0x3fe2c1(0x8d)}};$[_0x3fe2c1(0xf2)](_0x282b3a,async(_0x35733a,_0x5de400,_0x52f4fb)=>{const _0x55225e=_0x3fe2c1;try{}catch(_0x147663){$[_0x55225e(0xe1)](_0x147663,_0x5de400);}finally{_0x277954();}},0x0);});}function _0x4fd4(){const _0x5903ac=['getdata','&latitude=22.931276321411','252AEAEqX','msgi','&waimai_sign=%2F&wm_actual_longitude=113387210&wm_actual_latitude=22931233&userid=2544167052&user_id=2544167052&uuid=588f38c0-1d1d-4134-b9b9-728f9b911f13&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE&sdkVersion=2.17.0','toLocaleLowerCase','attribute','method','mtcode','index','&userToken=','setjson','existsSync','-------------共','getjson','couponCount','fetch','writeFileSync','@chavy_boxjs_userCfgs.httpapi','https://wx.waimai.meituan.com/weapp/v1/wlwc/aggregationpage','open-url','keys','promotion.waimai.meituan.com','getDate','time','mtTk','%22,%22extra%22:%7B%22missionDefId%22:',',\x20开始!','https://market.waimai.meituan.com','stringify','exports','wx.waimai.meituan.com','batchId','got','log','http://','mediaUrl','天天领神券:','951180iTKFoW','饿了么','data','redirect','wxapp','getval','br,\x20gzip,\x20deflate','rawBody','776139JBYOda','indexOf','logErr','https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/corepage','不可重复领取','substr','138690XYxUpY','张神券：满','{\x22gundamId\x22:20625,\x22grabKey\x22:\x220084BF0333F844A2846DA0827C21EBF7,34BCA492BAEA4D2E8CD0394B31D5CB26,AD317E383B064F84ACE3A8DCDC8C2572,DFEAE6C5C7664DBBB5A64E5F52297B5C\x22,\x22defaultGrabKey\x22:\x22E28198A627324F85B4FF89FA10D093EC\x22,\x22actualLongitude\x22:113.387177,\x22actualLatitude\x22:22.931219,\x22needTj\x22:true,\x22couponConfigIdOrderCommaString\x22:\x22392417317,392417289,344150580,367284451,277807308\x22}','isLoon','1576ZOcsUs','领取成功','cktough','CookieJar','wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&wm_dversion=8.0.3&wm_dplatform=ios&wm_uuid=588f38c0-1d1d-4134-b9b9-728f9b911f13&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken=','https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22','iconv-lite','utf-8','toStr','post','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x22couponViewId\x22:\x22','undefined','\x0a天天神券\x20签到🧧','code','mediacps.meituan.com','encoding','runScript','https://promotion.waimai.meituan.com/playcenter/common/v1/mycoupons/shenquan?isMini=0&ctype=iphone&isInDpEnv=0','cookieJar','split','wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&wm_dversion=8.0.3&taskStatus=3&wm_dplatform=ios&wm_uuid=588f38c0-1d1d-4134-b9b9-728f9b911f13&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken=','url','logSeparator','==============📣系统通知📣==============','https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/drawlottery','setdata','isNode','i.waimai.meituan.com','%22%7D%7D&bizCode=biz_code_main&longitude=113.38713836669','领到:','media-url','\x0a【天天神卷】🧧','isShadowrocket','\x0a【下午茶红包】🧧',',去膨胀','\x0a【神券膨胀】🧧','join','decode','timeout','getHours','test','isMute','application/json;charset=UTF-8','startTime','setValueForKey','数据获取成功','POST','openUrl','https://promotion-waimai.meituan.com/invite/fetchcoupon?version=8.0.14&ctype=wxapp&fpPlatform=13&app=13&initialLng=113387518&initialLat=22931265&inviteCode=NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPgN86y4RcZwmbDNeilsjadKKx8C_xcAtb9biugMRpa1nHJplwNd25nXQxgtWHn9006X_TBXSsJXEvvpgsevw4IOO1GodOJn4IOG_sQpdLKzqo&isMini=1&token=','getMilliseconds','get','couponTitleDoc','initGotEnv','assign','setval','GET','ckjar','body','getMinutes','6597UobrYw',',\x20错误!','美团天天神卷+赚米粒','concat','reduce','then','Content-Type','svip','statusCode','send','Content-Length','66jxnrOP','parActivityId=Gh1tkq-wvFU2xEP_ZPzHPQ&wm_ctype=mtandroid&wm_latitude=22931249&wm_longitude=113387349&token=','couponName','push','/v1/scripting/evaluate','forEach','read','resolve','https://mediacps.meituan.com/gundam/gundamGrabV3','null','1287888uugRlR','https://wx.waimai.meituan.com/weapp/v1/wlwc/signintask/signin','trim','amountLimit','https://luobook.coding.net/p/code.json/d/luobook/git/raw/master/code.json','name','\x0a领取浏览任务奖励：','exec','keep-alive','getSeconds','loaddata','map','write',',%22missionCollectionId%22:','isNeedRewrite','isMuteLog','match','slice','stack','dataFile','&batchId=','length','coupons','XMLHttpRequest','个账号-------------\x0a','promotion-waimai.meituan.com','isSurge','logs','wait','couponViewId','xmessage','done','setCookieSync','gzip,compress,br,deflate','2566990jmNkfh','Cookie','env','cron','current_points','toString','wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&firstInit=false&wm_dversion=8.0.3&wm_dplatform=ios&wm_uuid=588f38c0-1d1d-4134-b9b9-728f9b911f13&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken=','Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2012_1_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/16D39\x20MicroMessenger/8.0.14(0x18000e2f)\x20NetType/WIFI\x20Language/zh_CN','headers','https://wx.waimai.meituan.com/weapp/v1/wlwc/visittaskop','parse','message','@chavy_boxjs_userCfgs.httpapi_timeout','cwd','getMonth','领取成功，当前米粒：','finally','msg','set-cookie','fhxzstatus','美团赚米粒签到：','path','replace','lodash_get','floor','9hCkIby','lodash_set','call','\x0a【赚米粒】','1539820uZxBFk','opts','https://i.waimai.meituan.com','isQuanX','status','\x0a脚本状态：','\x0a任务：三餐领米粒','\x0a开始【美团账户\x20','writedata','getTime','random','getScript','application/x-www-form-urlencoded','token='];_0x4fd4=function(){return _0x5903ac;};return _0x4fd4();}function signin(){return new Promise(_0xa9455f=>{const _0x3d7935=_0x49a8;let _0x54b95f={'url':_0x3d7935(0x13a),'body':_0x3d7935(0xed)+mtToken+_0x3d7935(0xbb)+mtToken+_0x3d7935(0xb5),'headers':{'Host':_0x3d7935(0xd0),'Connection':_0x3d7935(0x141),'content-type':_0x3d7935(0xaf),'wm-ctype':_0x3d7935(0xdb),'Accept-Encoding':_0x3d7935(0x85),'User-Agent':_0x3d7935(0x8d)}};$[_0x3d7935(0xf2)](_0x54b95f,async(_0x2dd21a,_0x3dec22,_0x487986)=>{const _0x3cd2b6=_0x3d7935;try{console[_0x3cd2b6(0xd3)](_0x3cd2b6(0x9a));let _0x42bddd=JSON[_0x3cd2b6(0x90)](_0x487986);console[_0x3cd2b6(0xd3)](_0x42bddd[_0x3cd2b6(0x97)]);}catch(_0x4fc0ee){$[_0x3cd2b6(0xe1)](_0x4fc0ee,_0x3dec22);}finally{_0xa9455f();}},0x0);});}function startvisittaskop(){return new Promise(_0x30593c=>{const _0xff8013=_0x49a8;let _0x304880={'url':_0xff8013(0x8f),'body':'wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&wm_dversion=8.0.3&taskStatus=1&wm_dplatform=ios&wm_uuid=588f38c0-1d1d-4134-b9b9-728f9b911f13&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken='+mtToken+'&userToken='+mtToken+_0xff8013(0xb5),'headers':{'Host':'wx.waimai.meituan.com','Connection':'keep-alive','content-type':_0xff8013(0xaf),'wm-ctype':'wxapp','Accept-Encoding':'gzip,compress,br,deflate','User-Agent':_0xff8013(0x8d)}};$[_0xff8013(0xf2)](_0x304880,async(_0x4e5bc9,_0x54da45,_0x357a07)=>{const _0x37d01c=_0xff8013;try{}catch(_0x5bd39e){$[_0x37d01c(0xe1)](_0x5bd39e,_0x54da45);}finally{_0x30593c();}},0x0);});}function homepageicon(){return new Promise(_0x36330b=>{const _0x8f7697=_0x49a8;let _0x16b928={'url':_0x8f7697(0xc4),'body':'wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&firstInit=true&wm_dversion=8.0.3&wm_dplatform=ios&wm_uuid=588f38c0-1d1d-4134-b9b9-728f9b911f13&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken='+mtToken+'&userToken='+mtToken+_0x8f7697(0xb5),'headers':{'Host':_0x8f7697(0xd0),'Connection':_0x8f7697(0x141),'content-type':'application/x-www-form-urlencoded','wm-ctype':'wxapp','Accept-Encoding':'gzip,compress,br,deflate','User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2012_1_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/16D39\x20MicroMessenger/8.0.14(0x18000e2f)\x20NetType/WIFI\x20Language/zh_CN'}};$[_0x8f7697(0xf2)](_0x16b928,async(_0x4442be,_0x15c57c,_0x3d70e6)=>{const _0x23aa72=_0x8f7697;try{}catch(_0x3ebec5){$[_0x23aa72(0xe1)](_0x3ebec5,_0x15c57c);}finally{_0x36330b();}},0x0);});}function visittaskop(){return new Promise(_0x5d9e2b=>{const _0x2a5b91=_0x49a8;let _0x35f442={'url':_0x2a5b91(0x8f),'body':_0x2a5b91(0xfd)+mtToken+_0x2a5b91(0xbb)+mtToken+_0x2a5b91(0xb5),'headers':{'Host':_0x2a5b91(0xd0),'Connection':_0x2a5b91(0x141),'content-type':_0x2a5b91(0xaf),'wm-ctype':_0x2a5b91(0xdb),'Accept-Encoding':_0x2a5b91(0x85),'User-Agent':_0x2a5b91(0x8d)}};$[_0x2a5b91(0xf2)](_0x35f442,async(_0x203df9,_0x16f346,_0x3992cc)=>{const _0x3b4e5f=_0x2a5b91;try{console[_0x3b4e5f(0xd3)](_0x3b4e5f(0x13f));let _0x2a5c04=JSON['parse'](_0x3992cc);_0x2a5c04[_0x3b4e5f(0xf6)]==0x0?console[_0x3b4e5f(0xd3)](_0x3b4e5f(0xea)):console[_0x3b4e5f(0xd3)](_0x3b4e5f(0xe3));}catch(_0x3a4c41){$['logErr'](_0x3a4c41,_0x16f346);}finally{_0x5d9e2b();}},0x0);});}function dinnersignin(){return new Promise(_0x438ce5=>{const _0x5bca25=_0x49a8;let _0xe4509b={'url':'https://wx.waimai.meituan.com/weapp/v1/wlwc/dinnersignin/sign','body':_0x5bca25(0xfd)+mtToken+_0x5bca25(0xbb)+mtToken+'&waimai_sign=%2F&wm_actual_longitude=113387210&wm_actual_latitude=22931233&userid=2544167052&user_id=2544167052&uuid=588f38c0-1d1d-4134-b9b9-728f9b911f13&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE&sdkVersion=2.17.0','headers':{'Host':_0x5bca25(0xd0),'Connection':'keep-alive','content-type':_0x5bca25(0xaf),'wm-ctype':'wxapp','Accept-Encoding':_0x5bca25(0x85),'User-Agent':_0x5bca25(0x8d)}};$[_0x5bca25(0xf2)](_0xe4509b,async(_0x23fc2a,_0x1624c7,_0x24a6d6)=>{const _0x22d1e0=_0x5bca25;try{console[_0x22d1e0(0xd3)](_0x22d1e0(0xa9));let _0x4092e8=JSON['parse'](_0x24a6d6);_0x4092e8[_0x22d1e0(0xf6)]==0x0?console['log'](_0x22d1e0(0x95)+_0x4092e8[_0x22d1e0(0xd9)][_0x22d1e0(0x8a)]):console[_0x22d1e0(0xd3)](_0x4092e8[_0x22d1e0(0x97)]);}catch(_0xc8b04c){$[_0x22d1e0(0xe1)](_0xc8b04c,_0x1624c7);}finally{_0x438ce5();}},0x0);});}function visittaskop60(){return new Promise(_0x5486f0=>{const _0x538bf8=_0x49a8;let _0x45219d={'url':'https://wx.waimai.meituan.com/weapp/v1/wlwc/visittaskop','body':'wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&wm_dversion=8.0.3&taskStatus=3&wm_dplatform=ios&wm_uuid=588f38c0-1d1d-4134-b9b9-728f9b911f13&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken='+mtToken+_0x538bf8(0xbb)+mtToken+_0x538bf8(0xb5),'headers':{'Host':_0x538bf8(0xd0),'Connection':_0x538bf8(0x141),'content-type':_0x538bf8(0xaf),'wm-ctype':'wxapp','Accept-Encoding':_0x538bf8(0x85),'User-Agent':_0x538bf8(0x8d)}};$[_0x538bf8(0xf2)](_0x45219d,async(_0x576fc7,_0x3bed29,_0x4013db)=>{const _0x9084d3=_0x538bf8;try{console[_0x9084d3(0xd3)](_0x4013db);}catch(_0x3b0a55){$['logErr'](_0x3b0a55,_0x3bed29);}finally{_0x5486f0();}},0x0);});}function running(_0xc0a1ea,_0x1295a8,_0x4f43df){return new Promise(_0x5367ce=>{const _0x554bd0=_0x49a8;let _0xdc5185={'url':_0x554bd0(0xee)+acceptTagCode+_0x554bd0(0xcb)+_0xc0a1ea+_0x554bd0(0x71)+_0x1295a8+',%22missionType%22:%22'+_0x4f43df+_0x554bd0(0x105)+num+_0x554bd0(0xb2)+num,'headers':{'Cookie':elmck}};$[_0x554bd0(0x11b)](_0xdc5185,async(_0x60b59,_0x1ac7d1,_0x96d089)=>{const _0x54473c=_0x554bd0;try{let _0x436c10=JSON[_0x54473c(0x90)](_0x96d089);_0x436c10[_0x54473c(0xd9)][0x0][_0x54473c(0xb7)][_0x54473c(0xf6)]?console[_0x54473c(0xd3)](_0x436c10['data'][0x0]['attribute']['message']):console[_0x54473c(0xd3)]('任务失败：'+_0x436c10[_0x54473c(0xd9)][0x0][_0x54473c(0x82)]);}catch(_0x2441be){$[_0x54473c(0xe1)](_0x2441be,_0x1ac7d1);}finally{_0x5367ce();}},0x0);});}function rand(_0x474891,_0x3bdb4d){const _0x289c3a=_0x32f796;return parseInt(Math[_0x289c3a(0xad)]()*(_0x3bdb4d-_0x474891+0x1)+_0x474891,0xa);}function Env(_0x9d3ec,_0x1d09f5){const _0x50aad4=_0x32f796;class _0x2b578f{constructor(_0x13b6e){this['env']=_0x13b6e;}['send'](_0x58e4d5,_0x43f69b=_0x50aad4(0x120)){const _0x1f449c=_0x50aad4;_0x58e4d5='string'==typeof _0x58e4d5?{'url':_0x58e4d5}:_0x58e4d5;let _0x5aa368=this[_0x1f449c(0x11b)];return _0x1f449c(0x117)===_0x43f69b&&(_0x5aa368=this[_0x1f449c(0xf2)]),new Promise((_0x2444ab,_0x3b6dd1)=>{const _0x52ef22=_0x1f449c;_0x5aa368[_0x52ef22(0xa1)](this,_0x58e4d5,(_0x1fa023,_0x51d280,_0x232e9b)=>{_0x1fa023?_0x3b6dd1(_0x1fa023):_0x2444ab(_0x51d280);});});}['get'](_0xfd1f8){const _0x438a7d=_0x50aad4;return this[_0x438a7d(0x12d)][_0x438a7d(0xa1)](this[_0x438a7d(0x88)],_0xfd1f8);}[_0x50aad4(0xf2)](_0x1e3ab0){const _0x4fe384=_0x50aad4;return this[_0x4fe384(0x12d)]['call'](this[_0x4fe384(0x88)],_0x1e3ab0,_0x4fe384(0x117));}}return new class{constructor(_0xbc19cb,_0x41fe1e){const _0x37a1b8=_0x50aad4;this[_0x37a1b8(0x13e)]=_0xbc19cb,this['http']=new _0x2b578f(this),this[_0x37a1b8(0xd9)]=null,this['dataFile']='box.dat',this[_0x37a1b8(0x7f)]=[],this['isMute']=!0x1,this[_0x37a1b8(0x72)]=!0x1,this[_0x37a1b8(0xff)]='\x0a',this['encoding']=_0x37a1b8(0xf0),this['startTime']=new Date()[_0x37a1b8(0xac)](),Object['assign'](this,_0x41fe1e),this['log']('','🔔'+this['name']+_0x37a1b8(0xcc));}[_0x50aad4(0x103)](){const _0x484814=_0x50aad4;return _0x484814(0xf4)!=typeof module&&!!module[_0x484814(0xcf)];}[_0x50aad4(0xa6)](){return'undefined'!=typeof $task;}['isSurge'](){const _0x8dab8d=_0x50aad4;return _0x8dab8d(0xf4)!=typeof $httpClient&&_0x8dab8d(0xf4)==typeof $loon;}[_0x50aad4(0xe8)](){const _0x2d2d2b=_0x50aad4;return _0x2d2d2b(0xf4)!=typeof $loon;}[_0x50aad4(0x109)](){return'undefined'!=typeof $rocket;}['toObj'](_0x2c5734,_0x1a610f=null){const _0x5df259=_0x50aad4;try{return JSON[_0x5df259(0x90)](_0x2c5734);}catch{return _0x1a610f;}}[_0x50aad4(0xf1)](_0x20c368,_0xe3ed3d=null){const _0x13f964=_0x50aad4;try{return JSON[_0x13f964(0xce)](_0x20c368);}catch{return _0xe3ed3d;}}[_0x50aad4(0xbf)](_0x4159a9,_0x1a4a9f){const _0x56fcf4=_0x50aad4;let _0x4efaab=_0x1a4a9f;const _0x3d672e=this[_0x56fcf4(0xb1)](_0x4159a9);if(_0x3d672e)try{_0x4efaab=JSON[_0x56fcf4(0x90)](this[_0x56fcf4(0xb1)](_0x4159a9));}catch{}return _0x4efaab;}[_0x50aad4(0xbc)](_0x1e384e,_0x123342){const _0x1f7685=_0x50aad4;try{return this['setdata'](JSON[_0x1f7685(0xce)](_0x1e384e),_0x123342);}catch{return!0x1;}}[_0x50aad4(0xae)](_0x51f057){return new Promise(_0x5756cc=>{const _0x34a9fb=_0x49a8;this[_0x34a9fb(0x11b)]({'url':_0x51f057},(_0x5dd6e6,_0x5d8b3c,_0xb7976a)=>_0x5756cc(_0xb7976a));});}[_0x50aad4(0xf9)](_0x4caf0b,_0x1e3991){const _0x5eece5=_0x50aad4;return new Promise(_0x1ee2be=>{const _0x52cbf7=_0x49a8;let _0x187457=this[_0x52cbf7(0xb1)](_0x52cbf7(0xc3));_0x187457=_0x187457?_0x187457['replace'](/\n/g,'')[_0x52cbf7(0x13b)]():_0x187457;let _0x1565f0=this[_0x52cbf7(0xb1)](_0x52cbf7(0x92));_0x1565f0=_0x1565f0?0x1*_0x1565f0:0x14,_0x1565f0=_0x1e3991&&_0x1e3991[_0x52cbf7(0x10f)]?_0x1e3991[_0x52cbf7(0x10f)]:_0x1565f0;const [_0x26612b,_0x2922ff]=_0x187457[_0x52cbf7(0xfc)]('@'),_0x565434={'url':_0x52cbf7(0xd4)+_0x2922ff+_0x52cbf7(0x133),'body':{'script_text':_0x4caf0b,'mock_type':_0x52cbf7(0x89),'timeout':_0x1565f0},'headers':{'X-Key':_0x26612b,'Accept':'*/*'}};this[_0x52cbf7(0xf2)](_0x565434,(_0x2aa71d,_0x558043,_0x39d15a)=>_0x1ee2be(_0x39d15a));})['catch'](_0x1dcf9e=>this[_0x5eece5(0xe1)](_0x1dcf9e));}[_0x50aad4(0x6e)](){const _0x32aa17=_0x50aad4;if(!this[_0x32aa17(0x103)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x32aa17(0x9b)]=this[_0x32aa17(0x9b)]?this[_0x32aa17(0x9b)]:require('path');const _0x2829e1=this['path'][_0x32aa17(0x136)](this[_0x32aa17(0x77)]),_0x1f21c1=this[_0x32aa17(0x9b)][_0x32aa17(0x136)](process['cwd'](),this[_0x32aa17(0x77)]),_0x5c76ae=this['fs'][_0x32aa17(0xbd)](_0x2829e1),_0x136426=!_0x5c76ae&&this['fs'][_0x32aa17(0xbd)](_0x1f21c1);if(!_0x5c76ae&&!_0x136426)return{};{const _0x580691=_0x5c76ae?_0x2829e1:_0x1f21c1;try{return JSON[_0x32aa17(0x90)](this['fs']['readFileSync'](_0x580691));}catch(_0x1a27fb){return{};}}}}[_0x50aad4(0xab)](){const _0x2fef48=_0x50aad4;if(this[_0x2fef48(0x103)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x2fef48(0x9b)]=this[_0x2fef48(0x9b)]?this[_0x2fef48(0x9b)]:require(_0x2fef48(0x9b));const _0x4741e5=this[_0x2fef48(0x9b)][_0x2fef48(0x136)](this[_0x2fef48(0x77)]),_0xbcec42=this[_0x2fef48(0x9b)][_0x2fef48(0x136)](process[_0x2fef48(0x93)](),this[_0x2fef48(0x77)]),_0x248576=this['fs'][_0x2fef48(0xbd)](_0x4741e5),_0x1b7f21=!_0x248576&&this['fs']['existsSync'](_0xbcec42),_0x34d0cc=JSON['stringify'](this[_0x2fef48(0xd9)]);_0x248576?this['fs'][_0x2fef48(0xc2)](_0x4741e5,_0x34d0cc):_0x1b7f21?this['fs']['writeFileSync'](_0xbcec42,_0x34d0cc):this['fs'][_0x2fef48(0xc2)](_0x4741e5,_0x34d0cc);}}[_0x50aad4(0x9d)](_0x5d078f,_0x21987d,_0x5f1a6e){const _0x8d5c80=_0x50aad4,_0x361d5e=_0x21987d[_0x8d5c80(0x9c)](/\[(\d+)\]/g,'.$1')['split']('.');let _0x190f01=_0x5d078f;for(const _0x3d461d of _0x361d5e)if(_0x190f01=Object(_0x190f01)[_0x3d461d],void 0x0===_0x190f01)return _0x5f1a6e;return _0x190f01;}[_0x50aad4(0xa0)](_0x149a62,_0x570c4d,_0x3ace33){const _0x1ec63e=_0x50aad4;return Object(_0x149a62)!==_0x149a62?_0x149a62:(Array['isArray'](_0x570c4d)||(_0x570c4d=_0x570c4d['toString']()[_0x1ec63e(0x74)](/[^.[\]]+/g)||[]),_0x570c4d[_0x1ec63e(0x75)](0x0,-0x1)[_0x1ec63e(0x128)]((_0x4fb632,_0x4d04de,_0x715fb3)=>Object(_0x4fb632[_0x4d04de])===_0x4fb632[_0x4d04de]?_0x4fb632[_0x4d04de]:_0x4fb632[_0x4d04de]=Math['abs'](_0x570c4d[_0x715fb3+0x1])>>0x0==+_0x570c4d[_0x715fb3+0x1]?[]:{},_0x149a62)[_0x570c4d[_0x570c4d[_0x1ec63e(0x79)]-0x1]]=_0x3ace33,_0x149a62);}['getdata'](_0x4d0c37){const _0x1908df=_0x50aad4;let _0x3a3d62=this[_0x1908df(0xdc)](_0x4d0c37);if(/^@/[_0x1908df(0x111)](_0x4d0c37)){const [,_0x704694,_0x3be2fa]=/^@(.*?)\.(.*?)$/['exec'](_0x4d0c37),_0x1e0e38=_0x704694?this['getval'](_0x704694):'';if(_0x1e0e38)try{const _0x166650=JSON['parse'](_0x1e0e38);_0x3a3d62=_0x166650?this[_0x1908df(0x9d)](_0x166650,_0x3be2fa,''):_0x3a3d62;}catch(_0x503ae8){_0x3a3d62='';}}return _0x3a3d62;}[_0x50aad4(0x102)](_0x228c0c,_0x283c5d){const _0x204b25=_0x50aad4;let _0x1738a9=!0x1;if(/^@/[_0x204b25(0x111)](_0x283c5d)){const [,_0x110c8c,_0x1a96e7]=/^@(.*?)\.(.*?)$/[_0x204b25(0x140)](_0x283c5d),_0x46275e=this['getval'](_0x110c8c),_0x2f204d=_0x110c8c?_0x204b25(0x138)===_0x46275e?null:_0x46275e||'{}':'{}';try{const _0x4d3c65=JSON[_0x204b25(0x90)](_0x2f204d);this['lodash_set'](_0x4d3c65,_0x1a96e7,_0x228c0c),_0x1738a9=this[_0x204b25(0x11f)](JSON[_0x204b25(0xce)](_0x4d3c65),_0x110c8c);}catch(_0x1b56f9){const _0x5a3b97={};this[_0x204b25(0xa0)](_0x5a3b97,_0x1a96e7,_0x228c0c),_0x1738a9=this[_0x204b25(0x11f)](JSON[_0x204b25(0xce)](_0x5a3b97),_0x110c8c);}}else _0x1738a9=this[_0x204b25(0x11f)](_0x228c0c,_0x283c5d);return _0x1738a9;}[_0x50aad4(0xdc)](_0x2abb09){const _0x1a6420=_0x50aad4;return this[_0x1a6420(0x7e)]()||this[_0x1a6420(0xe8)]()?$persistentStore[_0x1a6420(0x135)](_0x2abb09):this[_0x1a6420(0xa6)]()?$prefs['valueForKey'](_0x2abb09):this[_0x1a6420(0x103)]()?(this['data']=this[_0x1a6420(0x6e)](),this[_0x1a6420(0xd9)][_0x2abb09]):this[_0x1a6420(0xd9)]&&this[_0x1a6420(0xd9)][_0x2abb09]||null;}[_0x50aad4(0x11f)](_0x65340d,_0x31af21){const _0x241d29=_0x50aad4;return this['isSurge']()||this['isLoon']()?$persistentStore[_0x241d29(0x70)](_0x65340d,_0x31af21):this[_0x241d29(0xa6)]()?$prefs[_0x241d29(0x115)](_0x65340d,_0x31af21):this[_0x241d29(0x103)]()?(this[_0x241d29(0xd9)]=this[_0x241d29(0x6e)](),this[_0x241d29(0xd9)][_0x31af21]=_0x65340d,this[_0x241d29(0xab)](),!0x0):this[_0x241d29(0xd9)]&&this[_0x241d29(0xd9)][_0x31af21]||null;}[_0x50aad4(0x11d)](_0x54abb8){const _0x1695c9=_0x50aad4;this[_0x1695c9(0xd2)]=this['got']?this['got']:require('got'),this[_0x1695c9(0xeb)]=this[_0x1695c9(0xeb)]?this[_0x1695c9(0xeb)]:require('tough-cookie'),this['ckjar']=this['ckjar']?this['ckjar']:new this[(_0x1695c9(0xeb))][(_0x1695c9(0xec))](),_0x54abb8&&(_0x54abb8['headers']=_0x54abb8[_0x1695c9(0x8e)]?_0x54abb8['headers']:{},void 0x0===_0x54abb8[_0x1695c9(0x8e)][_0x1695c9(0x87)]&&void 0x0===_0x54abb8[_0x1695c9(0xfb)]&&(_0x54abb8[_0x1695c9(0xfb)]=this[_0x1695c9(0x121)]));}[_0x50aad4(0x11b)](_0x8f8e2e,_0x3a3526=()=>{}){const _0x3c1ad7=_0x50aad4;if(_0x8f8e2e[_0x3c1ad7(0x8e)]&&(delete _0x8f8e2e[_0x3c1ad7(0x8e)][_0x3c1ad7(0x12a)],delete _0x8f8e2e[_0x3c1ad7(0x8e)][_0x3c1ad7(0x12e)]),this[_0x3c1ad7(0x7e)]()||this[_0x3c1ad7(0xe8)]())this[_0x3c1ad7(0x7e)]()&&this[_0x3c1ad7(0x72)]&&(_0x8f8e2e[_0x3c1ad7(0x8e)]=_0x8f8e2e['headers']||{},Object['assign'](_0x8f8e2e[_0x3c1ad7(0x8e)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['get'](_0x8f8e2e,(_0x36886e,_0x1a8106,_0x4eda7c)=>{const _0x138992=_0x3c1ad7;!_0x36886e&&_0x1a8106&&(_0x1a8106[_0x138992(0x122)]=_0x4eda7c,_0x1a8106[_0x138992(0x12c)]=_0x1a8106[_0x138992(0xa7)]),_0x3a3526(_0x36886e,_0x1a8106,_0x4eda7c);});else{if(this[_0x3c1ad7(0xa6)]())this[_0x3c1ad7(0x72)]&&(_0x8f8e2e['opts']=_0x8f8e2e[_0x3c1ad7(0xa4)]||{},Object[_0x3c1ad7(0x11e)](_0x8f8e2e[_0x3c1ad7(0xa4)],{'hints':!0x1})),$task['fetch'](_0x8f8e2e)['then'](_0x2942f7=>{const {statusCode:_0x33ef02,statusCode:_0x4ddce1,headers:_0x436f2e,body:_0x817340}=_0x2942f7;_0x3a3526(null,{'status':_0x33ef02,'statusCode':_0x4ddce1,'headers':_0x436f2e,'body':_0x817340},_0x817340);},_0x2b9bc4=>_0x3a3526(_0x2b9bc4));else{if(this['isNode']()){let _0x581c1f=require(_0x3c1ad7(0xef));this[_0x3c1ad7(0x11d)](_0x8f8e2e),this[_0x3c1ad7(0xd2)](_0x8f8e2e)['on'](_0x3c1ad7(0xda),(_0x36af3f,_0x59c07a)=>{const _0x144059=_0x3c1ad7;try{if(_0x36af3f[_0x144059(0x8e)]['set-cookie']){const _0x489ba7=_0x36af3f[_0x144059(0x8e)][_0x144059(0x98)][_0x144059(0x6f)](this[_0x144059(0xeb)]['Cookie'][_0x144059(0x90)])[_0x144059(0x8b)]();_0x489ba7&&this[_0x144059(0x121)][_0x144059(0x84)](_0x489ba7,null),_0x59c07a[_0x144059(0xfb)]=this[_0x144059(0x121)];}}catch(_0x568036){this['logErr'](_0x568036);}})['then'](_0x25eade=>{const _0x4f3c4d=_0x3c1ad7,{statusCode:_0xc8a1c4,statusCode:_0x1b9cfe,headers:_0x58f295,rawBody:_0x3ab2a1}=_0x25eade;_0x3a3526(null,{'status':_0xc8a1c4,'statusCode':_0x1b9cfe,'headers':_0x58f295,'rawBody':_0x3ab2a1},_0x581c1f[_0x4f3c4d(0x10e)](_0x3ab2a1,this['encoding']));},_0x565b1e=>{const _0x35c354=_0x3c1ad7,{message:_0x19a8b3,response:_0x4787c9}=_0x565b1e;_0x3a3526(_0x19a8b3,_0x4787c9,_0x4787c9&&_0x581c1f['decode'](_0x4787c9[_0x35c354(0xde)],this[_0x35c354(0xf8)]));});}}}}[_0x50aad4(0xf2)](_0x30f6c3,_0x51117a=()=>{}){const _0x8efe2=_0x50aad4,_0x19ee2f=_0x30f6c3[_0x8efe2(0xb8)]?_0x30f6c3['method'][_0x8efe2(0xb6)]():_0x8efe2(0xf2);if(_0x30f6c3[_0x8efe2(0x122)]&&_0x30f6c3['headers']&&!_0x30f6c3[_0x8efe2(0x8e)][_0x8efe2(0x12a)]&&(_0x30f6c3['headers'][_0x8efe2(0x12a)]='application/x-www-form-urlencoded'),_0x30f6c3[_0x8efe2(0x8e)]&&delete _0x30f6c3[_0x8efe2(0x8e)]['Content-Length'],this[_0x8efe2(0x7e)]()||this[_0x8efe2(0xe8)]())this[_0x8efe2(0x7e)]()&&this[_0x8efe2(0x72)]&&(_0x30f6c3['headers']=_0x30f6c3['headers']||{},Object['assign'](_0x30f6c3[_0x8efe2(0x8e)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x19ee2f](_0x30f6c3,(_0x4b8f0b,_0x5bcbf0,_0x2ad6bd)=>{const _0x52a86b=_0x8efe2;!_0x4b8f0b&&_0x5bcbf0&&(_0x5bcbf0[_0x52a86b(0x122)]=_0x2ad6bd,_0x5bcbf0['statusCode']=_0x5bcbf0[_0x52a86b(0xa7)]),_0x51117a(_0x4b8f0b,_0x5bcbf0,_0x2ad6bd);});else{if(this[_0x8efe2(0xa6)]())_0x30f6c3[_0x8efe2(0xb8)]=_0x19ee2f,this[_0x8efe2(0x72)]&&(_0x30f6c3[_0x8efe2(0xa4)]=_0x30f6c3[_0x8efe2(0xa4)]||{},Object[_0x8efe2(0x11e)](_0x30f6c3[_0x8efe2(0xa4)],{'hints':!0x1})),$task[_0x8efe2(0xc1)](_0x30f6c3)[_0x8efe2(0x129)](_0x47498d=>{const {statusCode:_0x383dbe,statusCode:_0x3fc89f,headers:_0x298ac7,body:_0x11275c}=_0x47498d;_0x51117a(null,{'status':_0x383dbe,'statusCode':_0x3fc89f,'headers':_0x298ac7,'body':_0x11275c},_0x11275c);},_0x194084=>_0x51117a(_0x194084));else{if(this[_0x8efe2(0x103)]()){let _0x57a894=require('iconv-lite');this[_0x8efe2(0x11d)](_0x30f6c3);const {url:_0x495ad3,..._0x4d7c4f}=_0x30f6c3;this[_0x8efe2(0xd2)][_0x19ee2f](_0x495ad3,_0x4d7c4f)[_0x8efe2(0x129)](_0x5e58e1=>{const _0x1d02a0=_0x8efe2,{statusCode:_0x358a3a,statusCode:_0x1d629d,headers:_0x203025,rawBody:_0x19cbd4}=_0x5e58e1;_0x51117a(null,{'status':_0x358a3a,'statusCode':_0x1d629d,'headers':_0x203025,'rawBody':_0x19cbd4},_0x57a894[_0x1d02a0(0x10e)](_0x19cbd4,this[_0x1d02a0(0xf8)]));},_0x574229=>{const _0x5d33d1=_0x8efe2,{message:_0x176492,response:_0x43cfca}=_0x574229;_0x51117a(_0x176492,_0x43cfca,_0x43cfca&&_0x57a894[_0x5d33d1(0x10e)](_0x43cfca[_0x5d33d1(0xde)],this[_0x5d33d1(0xf8)]));});}}}}[_0x50aad4(0xc9)](_0x1af9ff,_0xb0276f=null){const _0x359601=_0x50aad4,_0x19ef1f=_0xb0276f?new Date(_0xb0276f):new Date();let _0x5e1e65={'M+':_0x19ef1f['getMonth']()+0x1,'d+':_0x19ef1f[_0x359601(0xc8)](),'H+':_0x19ef1f[_0x359601(0x110)](),'m+':_0x19ef1f[_0x359601(0x123)](),'s+':_0x19ef1f[_0x359601(0x142)](),'q+':Math[_0x359601(0x9e)]((_0x19ef1f[_0x359601(0x94)]()+0x3)/0x3),'S':_0x19ef1f[_0x359601(0x11a)]()};/(y+)/[_0x359601(0x111)](_0x1af9ff)&&(_0x1af9ff=_0x1af9ff[_0x359601(0x9c)](RegExp['$1'],(_0x19ef1f['getFullYear']()+'')[_0x359601(0xe4)](0x4-RegExp['$1'][_0x359601(0x79)])));for(let _0x3ab5ae in _0x5e1e65)new RegExp('('+_0x3ab5ae+')')[_0x359601(0x111)](_0x1af9ff)&&(_0x1af9ff=_0x1af9ff[_0x359601(0x9c)](RegExp['$1'],0x1==RegExp['$1'][_0x359601(0x79)]?_0x5e1e65[_0x3ab5ae]:('00'+_0x5e1e65[_0x3ab5ae])[_0x359601(0xe4)]((''+_0x5e1e65[_0x3ab5ae])[_0x359601(0x79)])));return _0x1af9ff;}[_0x50aad4(0x97)](_0x20f863=_0x9d3ec,_0x830e71='',_0x5c9bc5='',_0x17f702){const _0xe00cea=_0x50aad4,_0x406cc7=_0x4b2402=>{const _0x2fd2fd=_0x49a8;if(!_0x4b2402)return _0x4b2402;if('string'==typeof _0x4b2402)return this[_0x2fd2fd(0xe8)]()?_0x4b2402:this[_0x2fd2fd(0xa6)]()?{'open-url':_0x4b2402}:this[_0x2fd2fd(0x7e)]()?{'url':_0x4b2402}:void 0x0;if('object'==typeof _0x4b2402){if(this[_0x2fd2fd(0xe8)]()){let _0x44bc34=_0x4b2402[_0x2fd2fd(0x118)]||_0x4b2402['url']||_0x4b2402[_0x2fd2fd(0xc5)],_0x5ef820=_0x4b2402[_0x2fd2fd(0xd5)]||_0x4b2402[_0x2fd2fd(0x107)];return{'openUrl':_0x44bc34,'mediaUrl':_0x5ef820};}if(this['isQuanX']()){let _0x2c86fa=_0x4b2402[_0x2fd2fd(0xc5)]||_0x4b2402[_0x2fd2fd(0xfe)]||_0x4b2402[_0x2fd2fd(0x118)],_0x18780f=_0x4b2402[_0x2fd2fd(0x107)]||_0x4b2402['mediaUrl'];return{'open-url':_0x2c86fa,'media-url':_0x18780f};}if(this['isSurge']()){let _0x467306=_0x4b2402[_0x2fd2fd(0xfe)]||_0x4b2402[_0x2fd2fd(0x118)]||_0x4b2402[_0x2fd2fd(0xc5)];return{'url':_0x467306};}}};if(this[_0xe00cea(0x112)]||(this[_0xe00cea(0x7e)]()||this[_0xe00cea(0xe8)]()?$notification['post'](_0x20f863,_0x830e71,_0x5c9bc5,_0x406cc7(_0x17f702)):this[_0xe00cea(0xa6)]()&&$notify(_0x20f863,_0x830e71,_0x5c9bc5,_0x406cc7(_0x17f702))),!this[_0xe00cea(0x73)]){let _0xb87f0e=['',_0xe00cea(0x100)];_0xb87f0e[_0xe00cea(0x132)](_0x20f863),_0x830e71&&_0xb87f0e[_0xe00cea(0x132)](_0x830e71),_0x5c9bc5&&_0xb87f0e[_0xe00cea(0x132)](_0x5c9bc5),console[_0xe00cea(0xd3)](_0xb87f0e[_0xe00cea(0x10d)]('\x0a')),this[_0xe00cea(0x7f)]=this[_0xe00cea(0x7f)][_0xe00cea(0x127)](_0xb87f0e);}}[_0x50aad4(0xd3)](..._0x278108){const _0x4c499b=_0x50aad4;_0x278108[_0x4c499b(0x79)]>0x0&&(this['logs']=[...this[_0x4c499b(0x7f)],..._0x278108]),console[_0x4c499b(0xd3)](_0x278108[_0x4c499b(0x10d)](this['logSeparator']));}[_0x50aad4(0xe1)](_0x235a3e,_0x54d5e2){const _0x5447dd=_0x50aad4,_0x2d57bf=!this[_0x5447dd(0x7e)]()&&!this[_0x5447dd(0xa6)]()&&!this[_0x5447dd(0xe8)]();_0x2d57bf?this[_0x5447dd(0xd3)]('','❗️'+this[_0x5447dd(0x13e)]+_0x5447dd(0x125),_0x235a3e[_0x5447dd(0x76)]):this[_0x5447dd(0xd3)]('','❗️'+this['name']+',\x20错误!',_0x235a3e);}[_0x50aad4(0x80)](_0x4c2f02){return new Promise(_0x1ee19a=>setTimeout(_0x1ee19a,_0x4c2f02));}['done'](_0x5b8500={}){const _0xb57020=_0x50aad4,_0x59bcf8=new Date()[_0xb57020(0xac)](),_0x12b36b=(_0x59bcf8-this[_0xb57020(0x114)])/0x3e8;this[_0xb57020(0xd3)]('','🔔'+this[_0xb57020(0x13e)]+',\x20结束!\x20🕛\x20'+_0x12b36b+'\x20秒'),this['log'](),(this[_0xb57020(0x7e)]()||this[_0xb57020(0xa6)]()||this[_0xb57020(0xe8)]())&&$done(_0x5b8500);}}(_0x9d3ec,_0x1d09f5);}