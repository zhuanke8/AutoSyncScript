//重写1    https://kd.youth.cn/webApi/Nameless/getTaskBrowse   
//重写2    https://kandian.wkandian.com/v5/nameless/adlickstart.json
//主机名1  kd.youth.cn       
//主机名2  kandian.wkandian.com

//青龙  zqkkzurl  重写1的整个url    多账号@
//      zqkkzlbhd  重写1的header
//		zqkkzrwhd  重写2的header
//		zqkkzbody  重写2的body

const $ = new Env("肥皂看看赚   转载请留名字，谢谢");
let status;
const CryptoJS = $.isNode() ? require("./CryptoJS") : ``;
status = (status = ($.getval("zqkkzstatus") || "1")) > 1 ? `${status}` : "";
const zqkkzurlArr = [],
    zqkkzhdArr = [],
    zqkkzbodyArr = [],
    zqkkzhd1Arr = [],
    zqkkzcount = ''
let zqkkzurl = $.isNode() ? (process.env.zqkkzurl ? process.env.zqkkzurl : "") : ($.getdata('zqkkzurl') ? $.getdata('zqkkzurl') : "")
let zqkkzhd = $.isNode() ? (process.env.zqkkzlbhd ? process.env.zqkkzlbhd : "") : ($.getdata('zqkkzhd') ? $.getdata('zqkkzhd') : "")
let zqkkzhd1 = $.isNode() ? (process.env.zqkkzrwhd ? process.env.zqkkzrwhd : "") : ($.getdata('zqkkzhd1') ? $.getdata('zqkkzhd1') : "")
let zqkkzbody = $.isNode() ? (process.env.zqkkzbody ? process.env.zqkkzbody : "") : ($.getdata('zqkkzbody') ? $.getdata('zqkkzbody') : "")

$.message = ''


function _0x16ef(_0x3f4ead,_0x16a979){const _0xf5c7d=_0xf5c7();return _0x16ef=function(_0x2bea08,_0x44cc4f){_0x2bea08=_0x2bea08-0x1c8;let _0x5d6a3e=_0xf5c7d[_0x2bea08];if(_0x16ef['KtNqRU']===undefined){var _0x48aa7f=function(_0x5d46dd){const _0x1a7232='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xa1fd49='',_0x8cbad2='';for(let _0x5e2aaa=0x0,_0x36de55,_0x4a4ebd,_0x4255e0=0x0;_0x4a4ebd=_0x5d46dd['charAt'](_0x4255e0++);~_0x4a4ebd&&(_0x36de55=_0x5e2aaa%0x4?_0x36de55*0x40+_0x4a4ebd:_0x4a4ebd,_0x5e2aaa++%0x4)?_0xa1fd49+=String['fromCharCode'](0xff&_0x36de55>>(-0x2*_0x5e2aaa&0x6)):0x0){_0x4a4ebd=_0x1a7232['indexOf'](_0x4a4ebd);}for(let _0x31aeae=0x0,_0x544f9f=_0xa1fd49['length'];_0x31aeae<_0x544f9f;_0x31aeae++){_0x8cbad2+='%'+('00'+_0xa1fd49['charCodeAt'](_0x31aeae)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x8cbad2);};const _0x16ef12=function(_0x563bb7,_0x1f5907){let _0x44f670=[],_0x5eb10b=0x0,_0x2d3a77,_0x4655ff='';_0x563bb7=_0x48aa7f(_0x563bb7);let _0xb1f56c;for(_0xb1f56c=0x0;_0xb1f56c<0x100;_0xb1f56c++){_0x44f670[_0xb1f56c]=_0xb1f56c;}for(_0xb1f56c=0x0;_0xb1f56c<0x100;_0xb1f56c++){_0x5eb10b=(_0x5eb10b+_0x44f670[_0xb1f56c]+_0x1f5907['charCodeAt'](_0xb1f56c%_0x1f5907['length']))%0x100,_0x2d3a77=_0x44f670[_0xb1f56c],_0x44f670[_0xb1f56c]=_0x44f670[_0x5eb10b],_0x44f670[_0x5eb10b]=_0x2d3a77;}_0xb1f56c=0x0,_0x5eb10b=0x0;for(let _0x222c70=0x0;_0x222c70<_0x563bb7['length'];_0x222c70++){_0xb1f56c=(_0xb1f56c+0x1)%0x100,_0x5eb10b=(_0x5eb10b+_0x44f670[_0xb1f56c])%0x100,_0x2d3a77=_0x44f670[_0xb1f56c],_0x44f670[_0xb1f56c]=_0x44f670[_0x5eb10b],_0x44f670[_0x5eb10b]=_0x2d3a77,_0x4655ff+=String['fromCharCode'](_0x563bb7['charCodeAt'](_0x222c70)^_0x44f670[(_0x44f670[_0xb1f56c]+_0x44f670[_0x5eb10b])%0x100]);}return _0x4655ff;};_0x16ef['UWyWpV']=_0x16ef12,_0x3f4ead=arguments,_0x16ef['KtNqRU']=!![];}const _0x35ce50=_0xf5c7d[0x0],_0x26cfcd=_0x2bea08+_0x35ce50,_0x2771be=_0x3f4ead[_0x26cfcd];return!_0x2771be?(_0x16ef['NBsRIm']===undefined&&(_0x16ef['NBsRIm']=!![]),_0x5d6a3e=_0x16ef['UWyWpV'](_0x5d6a3e,_0x44cc4f),_0x3f4ead[_0x26cfcd]=_0x5d6a3e):_0x5d6a3e=_0x2771be,_0x5d6a3e;},_0x16ef(_0x3f4ead,_0x16a979);}(function(_0x3a50f0,_0x4cc039){function _0x26d47d(_0x22e628,_0x5c6f29){return _0x16ef(_0x22e628-0x316,_0x5c6f29);}function _0x886461(_0x25ac36,_0x37b1a3){return _0x16ef(_0x37b1a3- -0x1d1,_0x25ac36);}function _0x456264(_0x1bc897,_0x41bc33){return _0x2bea(_0x41bc33- -0x356,_0x1bc897);}function _0x146106(_0x451f63,_0x441e66){return _0x16ef(_0x441e66- -0x1ae,_0x451f63);}function _0x2cf2c7(_0xae4682,_0x2c8cf8){return _0x16ef(_0xae4682- -0x5,_0x2c8cf8);}const _0x2ecfb1=_0x3a50f0();function _0x467dce(_0x19c9a2,_0x229125){return _0x16ef(_0x19c9a2-0x122,_0x229125);}function _0x43d14a(_0x291801,_0x21d19e){return _0x16ef(_0x291801- -0x20f,_0x21d19e);}function _0x2cd7a3(_0x35229f,_0x41c874){return _0x16ef(_0x41c874- -0x56,_0x35229f);}function _0x486823(_0x3a637b,_0x51c8f5){return _0x16ef(_0x3a637b-0x1c4,_0x51c8f5);}while(!![]){try{const _0x13ff56=parseInt(_0x26d47d(0x530,'Nl0['))/0x1+-parseInt(_0x486823(0x409,'mX*2'))/0x2+parseInt(_0x486823(0x3f7,'HZ)f'))/0x3+parseInt(_0x26d47d(0x516,'jQIF'))/0x4*(parseInt(_0x2cf2c7(0x1e7,'LoR4'))/0x5)+-parseInt(_0x467dce(0x360,'mX*2'))/0x6+parseInt(_0x456264(-0x12a,-0x138))/0x7*(parseInt(_0x43d14a(-0x21,'nKtt'))/0x8)+-parseInt(_0x26d47d(0x56c,'Nl0['))/0x9;if(_0x13ff56===_0x4cc039)break;else _0x2ecfb1['push'](_0x2ecfb1['shift']());}catch(_0x375b6e){_0x2ecfb1['push'](_0x2ecfb1['shift']());}}}(_0xf5c7,0x3637d),!(async()=>{function _0x570ff4(_0x5815a4,_0x469a1a){return _0x2bea(_0x469a1a-0x394,_0x5815a4);}typeof $request!==_0x570ff4(0x59b,0x57b)?await zqkkzck():await qswcdl();})()[_0x11a5eb('@uIo',-0x194)](_0x4a4ebd=>$[_0x264f6a(0x529,0x524)](_0x4a4ebd))[_0x11a5eb('nX[Y',-0x18f)](()=>$[_0x1ff0f9(0x184,0x154)]()));function _0xf5c7(){const _0x39a85c=['otaWnJy2D2Hrzxjq','D2fPDa','Dw5KzwzPBMvK','BgvUz3rO','f3/dICoADZtdLW','W4VdH8kiuCkCW4y','Aw5KzxHpzG','W73dK8kmW55QsunRW4nH','chZdKmoEFWpdKbvHWRG','W6Xbe8oJCXTXWQNdMCo5WQq','nZm2nZuYnNPpCwjMza','BxnN','WQf4W7m/','WPX+oMZdUCkB','WORcN03cOeG','W6yhyGVcQL/cGrmS','lSosvCo5W60','dM/dLSoszq','q8kBW6yoWRdcU8ou','yYldNCkCWRFdUMCd','5P+L6k+I55Yl55Yl6lwA5yIx6kgO5A6m5Q+vcIaG5ywX5PYj','zgf0yq','rLPSWP/cRSkjsG','jtne','5lMZ55+z552Q6lsN5lUI5yMr','CIZcSa','W7ZcK8olWO/cPq','W5m/AJxdHCkoWQmPt8oo','Ahr0Chm6lY9SDw9IB29RlMnVzgLUzY5UzxqVCc9JB2rLlMPZB24Vzc9SDw9IB29Rl2DPDc9YyxCVBwfZDgvYl2nVzguUANnVBG','D1VdJmkHW4q','ChvZAa','6ikL55Qc5lIT6z2s55Yl55Yl6lwA','5P+p6k+p556/556Z6lwm5yIR6ko45AsS6lApbW','W6GcBxW','W57cG3e','z2v0vgLTzxPVBMvpzMzZzxq','oaRcJmo3gHyEoSkBsSo0','6iYj5y+h5lIB5yUw5OIH5yQ9','W5ymwWanW6VcImorWQnzWPef','WPfnd1Xb','W410WPqtufBcHG','g3u1dCoGWQRdHedcUG','WO9HpwBdPCkXWOW','6icB55Qt5lUn6zYL55Y655YP6lA9','BgLZDa','mmkMbbbQ','Bg9N','W47dM8kH','ENfRA3PIB2r5','W6yhyGVcQKJcNbS','C3bSAxq','W6ZOHjxMNBxNIRxMGPZVV6q','o8kgu8ki','xdb/uCk2W77dUeRcQ2uoWQO','revtx0rLy3j5Chq','hxmR','o8ksuSktdq','mJi0AhnJEwrN','z2v0','lbRdGSkp','WQHJW7iKjs0GW6a','jNrHC2TFAwq9','Dg9mB2nHBgvtDhjPBMC','WPHmdKzs','W6K5W5CGa8o3W5VdNGdcOw8Q','W5VcGL4w','WPpcKfVcTLu','zg9Uzq','WQr/W6qUlY81','W4hcHKqrW4hdHem','WPfxnf0','bJ7cTmodjraz','Df7dK8kG','W5CnuanTWQJcLmopWOvV','zw52','WQBdHNvCvqGN','W5j0WO4qruO','WPJcHIldPmo2','W5hdL2dcOCkLa8o+W5VdJMHKjW','mCkcs8kleSkZWP0BW6S','DJuVBMfTzwXLC3mVywrSAwnRC3rHCNqUANnVBG','lmkwvmkecCkLWPm','ufZdN8otBeNdONe','id09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09cG','z2v0DMfS','WQb7WOr8sCkRW7m','cGO9pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09psdOHjRMNkZMIAFOOyWGlsdLJjFKUQZML7BPL7qOvvrdkZGP77YA','lxtdVMZcSZ55WQLw','C2v0zgf0yq','hHldTmkLW5r8WPpdOmkzWQhdRKa','W47cMSkF','tMfTzwXLC3mVz2v0vgfZA0jYB3DZzq','W6tcSSoMWQBdKmk3zW','ENfRA3PJB3vUDa','ENfRA3POzde','W4BdJvm','frNdVCkMW5vWWQNdHmkhWOpdO1q','6iAK5PY954Mw5Og277YR','xmo/WOm','pmkGeXjRWQ9Gm1OU','AgvHzgvYCW','aw8JaCo2','W6tcVHXU','z2v0zgf0yq','Ahr0Chm6lY9Ryw5KAwfUlNDRyw5KAwfUlMnVBs92ns9Uyw1LBgvZCY9HzgXPy2TLBMqUANnVBG','DtZdKq','W7azBG','yM9KEq','dc7cRCoBoG','aw8JaCo2WOldIW','bJ7cTmodjrazEq','W4rGWOSCs0RcG8ox','W67cOarXdmklfa','xZjXu8k7W7/cM1ZcJgeaWQVdPq','mtiZnunxthnhAa','W45WWPieva','WRLBBmoKW71cW73dTSk5kmo7','kCkNeHu','pSomWRb9rNRcVG','bZbQWPW','W78UW63dTSo3','Bg9NrxjY','zgvZyW','WRBcKmouWObtDMSP','DxjS','WPHmcf5pWRdcUCkm','odGXnde4DNzRuu9H','z2v0vgLTzq','WOqHWP0Rlqfc','5OU76kc65As46lwfW5O','ENfRA3POza','ENfRA3P1CMW','WO8HWOCOob0','W6tcSb1PeW','W5j+WOC','5OI56ko/5OI35yIv','Ahr0Chm6lY9Ryw5KAwfUlNDRyw5KAwfUlMnVBs92ns9Uyw1LBgvZCY9Iyw5UzxjZDgf0DxmUANnVBG','lCowu8oUW6L1WRi','W5L0WPqtufBcHG','W7dcSbT7','vKxcTSoL','W5ddK18PzCo3W7ZdTW','6i635y+w5yIx6kgO5OIq5yQF','gZr3WPxcVCozpa','qI7LVBdLPl3JGQpOGlpNMzBKU5JPN4tNNARNN6BOTjO'];_0xf5c7=function(){return _0x39a85c;};return _0xf5c7();}function qswcdl(_0x4255e0=0x0){return new Promise(_0x31aeae=>{function _0x4f456f(_0x2574db,_0x2bf9eb){return _0x2bea(_0x2bf9eb-0x24b,_0x2574db);}let _0x544f9f={'url':_0x4f456f(0x427,0x44c),'headers':''};$['get'](_0x544f9f,async(_0x563bb7,_0x1f5907,_0x44f670)=>{function _0x91e7f6(_0x4d768b,_0x10706f){return _0x4f456f(_0x4d768b,_0x10706f- -0x1dd);}function _0x12b9f1(_0x3a934a,_0x111b3c){return _0x16ef(_0x111b3c- -0x26c,_0x3a934a);}function _0x4eec70(_0x2c85b5,_0x429a50){return _0x16ef(_0x429a50-0x37b,_0x2c85b5);}function _0x28700e(_0x42e130,_0x273a97){return _0x4f456f(_0x273a97,_0x42e130- -0x294);}function _0x18c047(_0x2c110f,_0x3d594a){return _0x16ef(_0x2c110f-0x29a,_0x3d594a);}function _0x36ee04(_0x45ff92,_0x3e6314){return _0x16ef(_0x45ff92-0x218,_0x3e6314);}function _0x791b5a(_0x109cfc,_0x36f151){return _0x4f456f(_0x36f151,_0x109cfc- -0xb1);}function _0x478e54(_0x2008e2,_0x9734eb){return _0x16ef(_0x2008e2-0x2db,_0x9734eb);}function _0x1a9251(_0x6fa59d,_0x64d469){return _0x16ef(_0x6fa59d- -0x3dd,_0x64d469);}function _0x1b27a5(_0x547c88,_0x59b195){return _0x16ef(_0x59b195- -0x3cc,_0x547c88);}function _0x379f58(_0x24128d,_0x5b75e4){return _0x4f456f(_0x24128d,_0x5b75e4- -0x4cd);}function _0x3f1857(_0x2c397c,_0x48bb74){return _0x16ef(_0x2c397c-0x2bd,_0x48bb74);}function _0x582da5(_0x409a7f,_0x2b585e){return _0x4f456f(_0x409a7f,_0x2b585e- -0x632);}function _0x911b5d(_0x1fd754,_0x117525){return _0x4f456f(_0x117525,_0x1fd754- -0x3f7);}function _0x50be54(_0x101190,_0x1c54e0){return _0x4f456f(_0x101190,_0x1c54e0- -0xda);}function _0xebcfc7(_0x340ba4,_0x5bfb11){return _0x16ef(_0x5bfb11- -0xc3,_0x340ba4);}function _0x115eb0(_0x19cd7d,_0x19761b){return _0x16ef(_0x19cd7d-0x63,_0x19761b);}function _0x11bc4a(_0x4590f6,_0x4e5f80){return _0x4f456f(_0x4e5f80,_0x4590f6- -0x34c);}function _0x5f53a6(_0x75ceae,_0x36e7b4){return _0x16ef(_0x36e7b4-0x3a5,_0x75ceae);}function _0xc636a8(_0x14ff4f,_0x26bad0){return _0x16ef(_0x26bad0-0x358,_0x14ff4f);}function _0x2c2376(_0x4b36a3,_0x453268){return _0x4f456f(_0x453268,_0x4b36a3- -0x103);}function _0x25851b(_0x49a5f3,_0x43a634){return _0x4f456f(_0x49a5f3,_0x43a634-0xbd);}function _0x168be3(_0x495445,_0x5f2117){return _0x16ef(_0x5f2117- -0x3f,_0x495445);}function _0xd5f86c(_0x4413a8,_0x1fd5d7){return _0x16ef(_0x1fd5d7-0x368,_0x4413a8);}function _0x4fe869(_0x1bc415,_0x59eec1){return _0x4f456f(_0x1bc415,_0x59eec1- -0x21d);}function _0x519339(_0x3c190c,_0x4992fa){return _0x4f456f(_0x4992fa,_0x3c190c- -0x51b);}function _0x55e358(_0x4f9124,_0x355382){return _0x16ef(_0x4f9124-0x200,_0x355382);}function _0xa5a7a0(_0x5f2f39,_0x5dc02e){return _0x4f456f(_0x5f2f39,_0x5dc02e- -0x264);}function _0x19d64f(_0x3d5ab0,_0x5dba1b){return _0x4f456f(_0x5dba1b,_0x3d5ab0- -0xa1);}function _0x27cf45(_0x4abb6f,_0x42656e){return _0x4f456f(_0x4abb6f,_0x42656e- -0x3a4);}function _0x753e4d(_0x500472,_0x1771ad){return _0x4f456f(_0x500472,_0x1771ad-0x99);}function _0x2f4329(_0xbfdb8a,_0x504a1c){return _0x16ef(_0x504a1c- -0x21c,_0xbfdb8a);}function _0x1027fd(_0x45caee,_0x1044ba){return _0x16ef(_0x45caee-0x27d,_0x1044ba);}function _0x32cd57(_0xbcf547,_0x218053){return _0x16ef(_0x218053-0x2d8,_0xbcf547);}function _0x4537fb(_0x3e6cb5,_0x4df0ae){return _0x16ef(_0x4df0ae-0x193,_0x3e6cb5);}function _0x2ee6f1(_0xae9bcf,_0x236d5d){return _0x16ef(_0x236d5d-0x6a,_0xae9bcf);}function _0x2d75b5(_0x340495,_0x21a221){return _0x16ef(_0x21a221- -0x184,_0x340495);}function _0x1aa84d(_0x47e5eb,_0x44da9a){return _0x4f456f(_0x47e5eb,_0x44da9a- -0x5ba);}function _0x4b27b4(_0x3da9fd,_0x51632a){return _0x16ef(_0x3da9fd-0x280,_0x51632a);}function _0x591836(_0x1217d7,_0x447087){return _0x16ef(_0x447087-0x268,_0x1217d7);}function _0x2bbcf9(_0x3d4668,_0x2af855){return _0x16ef(_0x2af855- -0x36c,_0x3d4668);}function _0x1af3d0(_0x16eeb4,_0xa0cf5a){return _0x4f456f(_0x16eeb4,_0xa0cf5a-0x171);}function _0x33b694(_0x44082b,_0x2b8673){return _0x4f456f(_0x44082b,_0x2b8673- -0x180);}function _0x560bc1(_0x1a0614,_0x1b435c){return _0x16ef(_0x1a0614-0x53,_0x1b435c);}function _0x43f4f2(_0x3fb202,_0x2d64a8){return _0x16ef(_0x3fb202-0x98,_0x2d64a8);}function _0x4ff900(_0x80192d,_0x24c6e8){return _0x4f456f(_0x80192d,_0x24c6e8- -0x190);}function _0x37089f(_0x266b45,_0x496bfa){return _0x4f456f(_0x266b45,_0x496bfa-0x95);}function _0x49211d(_0x457b3f,_0x4f091c){return _0x4f456f(_0x457b3f,_0x4f091c- -0x5d6);}function _0xd5066f(_0x17597d,_0x3bd4c7){return _0x16ef(_0x17597d-0x149,_0x3bd4c7);}function _0x2b3e71(_0x3440e3,_0x1106db){return _0x16ef(_0x3440e3-0x21,_0x1106db);}function _0x56ebd5(_0xf68829,_0x81381d){return _0x4f456f(_0xf68829,_0x81381d- -0x315);}function _0x3fe504(_0x44ea57,_0x51d8cd){return _0x4f456f(_0x51d8cd,_0x44ea57- -0x45);}function _0x1993fb(_0x5e13cf,_0x57a9a9){return _0x16ef(_0x5e13cf-0xa3,_0x57a9a9);}function _0x8ae820(_0x1f5042,_0x464d47){return _0x16ef(_0x464d47-0x363,_0x1f5042);}function _0x3ee4a3(_0xc2ccfb,_0x184dea){return _0x4f456f(_0x184dea,_0xc2ccfb- -0x58d);}function _0x48fa48(_0x1619d2,_0x42d3f8){return _0x4f456f(_0x1619d2,_0x42d3f8- -0x5bc);}function _0x29989d(_0x15c484,_0x396597){return _0x16ef(_0x15c484- -0x57,_0x396597);}function _0x2884b2(_0x5ce9cb,_0x4535c5){return _0x4f456f(_0x5ce9cb,_0x4535c5- -0x255);}function _0x3a1443(_0x4eeed9,_0xc5c46){return _0x16ef(_0x4eeed9- -0x3d3,_0xc5c46);}function _0x29d413(_0x79f83c,_0x4ccde4){return _0x4f456f(_0x4ccde4,_0x79f83c- -0x3ec);}function _0x33c346(_0x3a6152,_0x75d683){return _0x4f456f(_0x75d683,_0x3a6152- -0x471);}function _0x1ff698(_0x53b058,_0x4d83a5){return _0x4f456f(_0x4d83a5,_0x53b058-0x19);}function _0x4013d5(_0x2859fc,_0x3b8fab){return _0x4f456f(_0x3b8fab,_0x2859fc- -0x229);}function _0x2d6fdb(_0x50e401,_0x255250){return _0x16ef(_0x255250- -0x33d,_0x50e401);}function _0x491c4a(_0xcb8b,_0x2bf5f6){return _0x16ef(_0x2bf5f6-0x16f,_0xcb8b);}function _0x751416(_0x490c38,_0x16d87a){return _0x4f456f(_0x16d87a,_0x490c38- -0x37);}function _0x38533f(_0x3bf960,_0x2532cb){return _0x16ef(_0x3bf960- -0x15b,_0x2532cb);}function _0x22ef84(_0x4d7566,_0x488abd){return _0x4f456f(_0x4d7566,_0x488abd-0xdd);}function _0x28e50f(_0x32ca3c,_0x58cfdb){return _0x16ef(_0x58cfdb-0xe3,_0x32ca3c);}function _0x26d9a6(_0x20af64,_0x189da2){return _0x4f456f(_0x20af64,_0x189da2-0x137);}function _0x3a94ab(_0x55a083,_0x5ad5f0){return _0x4f456f(_0x55a083,_0x5ad5f0-0x159);}function _0x18946a(_0x579bf3,_0x19043c){return _0x16ef(_0x579bf3- -0x24,_0x19043c);}function _0x5c33f0(_0x436997,_0x51ba44){return _0x16ef(_0x436997- -0x2ec,_0x51ba44);}function _0x168782(_0x17846e,_0x538333){return _0x16ef(_0x17846e-0xaa,_0x538333);}function _0x5f04cc(_0x5d5026,_0x3b490b){return _0x4f456f(_0x5d5026,_0x3b490b-0x47);}function _0x1901a4(_0x1c8259,_0x435efc){return _0x16ef(_0x1c8259- -0x353,_0x435efc);}function _0x1a6a3f(_0x24e7e7,_0x3ad791){return _0x4f456f(_0x24e7e7,_0x3ad791- -0x3c8);}function _0x44dce2(_0x256974,_0x120a64){return _0x4f456f(_0x120a64,_0x256974- -0x148);}function _0x2edd31(_0x296ec,_0x11c4c2){return _0x16ef(_0x11c4c2-0x5e,_0x296ec);}try{_0x44f670=JSON[_0x2b3e71(0x272,'ge&Q')](_0x44f670);if(_0x44f670[_0xebcfc7('jQIF',0x12f)]==0x1){console[_0x1aa84d(-0x16d,-0x15c)](_0xebcfc7('jQIF',0x155)+_0x44f670[_0x2b3e71(0x245,'@McE')]);if($[_0x2d75b5('oRV#',0x66)]())process[_0x33b694(0x2f6,0x2fa)][_0x3a1443(-0x1bd,'[kyN')]&&process[_0x4ff900(0x300,0x2ea)][_0x1993fb(0x2da,'Wa7n')][_0x582da5(-0x212,-0x1fc)]('@')>-0x1&&(zqkkzurlArr=process[_0x33b694(0x2fd,0x2fa)][_0x2b3e71(0x219,'v#ja')][_0x1aa84d(-0x14e,-0x158)]('@')),process[_0x4b27b4(0x4c7,'qBPF')][_0x33b694(0x2dd,0x2a1)]&&process[_0x56ebd5(0x126,0x165)][_0x2b3e71(0x24d,'ge&Q')][_0x5c33f0(-0x122,'kSnp')]('@')>-0x1&&(zqkkzhdArr=process[_0x1aa84d(-0x171,-0x140)][_0x18946a(0x231,'X8o0')][_0x18c047(0x4a6,'@McE')]('@')),process[_0x582da5(-0x1e6,-0x1b8)][_0x38533f(0x74,'LoR4')]&&process[_0x26d9a6(0x5dd,0x5b1)][_0x33b694(0x2e0,0x30e)][_0x4b27b4(0x4a9,'0$ib')]('@')>-0x1&&(zqkkzhd1Arr=process[_0x4ff900(0x2c9,0x2ea)][_0x25851b(0x561,0x54b)][_0x2b3e71(0x1ed,'XXz@')]('@')),process[_0x5c33f0(-0xe5,'!61V')][_0x4013d5(0x237,0x20d)]&&process[_0x56ebd5(0x1a8,0x165)][_0x1af3d0(0x598,0x5d1)][_0x1b27a5('jQIF',-0x1bd)]('@')>-0x1&&(zqkkzhd1Arr=process[_0x560bc1(0x292,'pJZq')][_0x26d9a6(0x5b9,0x597)][_0x2b3e71(0x220,'m1Px')]('@'));else{zqkkzurlArr[_0x38533f(0xbe,'189n')]($[_0x4013d5(0x26e,0x274)](_0x4013d5(0x1f9,0x214))),zqkkzhdArr[_0x18946a(0x209,'MuDV')]($[_0x32cd57('UXCr',0x4ac)](_0x2d75b5('@uIo',0x65))),zqkkzbodyArr[_0x19d64f(0x3ad,0x3ca)]($[_0x1a9251(-0x1a7,'189n')](_0x478e54(0x50f,'189n'))),zqkkzhd1Arr[_0x19d64f(0x3ad,0x38e)]($[_0x1aa84d(-0x10c,-0x123)](_0x1027fd(0x44e,'@McE')));let _0x5eb10b=$[_0x582da5(-0x1d1,-0x1ae)](_0x1aa84d(-0xe7,-0x12d))||'1';for(let _0x2d3a77=0x0;_0x2d3a77<_0x5eb10b;_0x2d3a77++){zqkkzurlArr[_0x26d9a6(0x54e,0x585)]($[_0x19d64f(0x3f6,0x42e)](_0x38533f(0x86,'$u&D')+_0x2d3a77)),zqkkzhdArr[_0x3a94ab(0x5ce,0x5a7)]($[_0x911b5d(0xa0,0x5f)](_0x19d64f(0x380,0x3c7)+_0x2d3a77)),zqkkzbodyArr[_0x1901a4(-0x18a,'$k$H')]($[_0x115eb0(0x241,'D%IE')](_0x1a9251(-0x1e9,'[kyN')+_0x2d3a77)),zqkkzhd1Arr[_0x55e358(0x406,'K5*6')]($[_0xd5066f(0x340,'X7Jm')](_0x2d6fdb('D%IE',-0xe9)+_0x2d3a77));}}console[_0x2b3e71(0x1fb,'D%IE')](_0x2c2376(0x383,0x39c)+new Date(new Date()[_0x48fa48(-0x1d3,-0x19e)]()+new Date()[_0x379f58(-0x69,-0x7a)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1a6a3f(0x8a,0xa6)]()+_0x1af3d0(0x5c3,0x5f4));for(let _0x4655ff=0x0;_0x4655ff<zqkkzhdArr[_0x5f04cc(0x480,0x47a)];_0x4655ff++){zqkkzhdArr[_0x4655ff]&&(zqkkzurl=zqkkzurlArr[_0x4655ff],zqkkzhd=zqkkzhdArr[_0x4655ff],zqkkzbody=zqkkzbodyArr[_0x4655ff],zqkkz1hd=zqkkzhd1Arr[_0x4655ff],$[_0x1993fb(0x296,'ZU5o')]=_0x4655ff+0x1,console[_0x28700e(0x1ca,0x197)](_0x2ee6f1('2gia',0x24e)+$[_0x8ae820('Nl0[',0x5ad)]+'】'),kkzlb());}}else console[_0x2d6fdb('[kyN',-0xee)](_0x18946a(0x222,'D%IE')+_0x44f670[_0x1027fd(0x49e,'0$ib')]);}catch(_0xb1f56c){$[_0x1a6a3f(0x95,0x50)](_0xb1f56c,_0x1f5907);}finally{_0x31aeae();}},0x0);});}function _0x11a5eb(_0x4c85f1,_0x34296e){return _0x16ef(_0x34296e- -0x38a,_0x4c85f1);}function _0x264f6a(_0x3bba47,_0x592118){return _0x2bea(_0x3bba47-0x35c,_0x592118);}function _0x5a735d(_0x1c91b8,_0x1c25d3){return _0x16ef(_0x1c25d3-0x84,_0x1c91b8);}function zqkkzck(){function _0x10924d(_0x5bed7d,_0xfc55c3){return _0x11a5eb(_0xfc55c3,_0x5bed7d-0x67);}function _0x30a1ff(_0x10524d,_0x5cfb4d){return _0x5a735d(_0x10524d,_0x5cfb4d- -0x2e9);}function _0x48bc01(_0x3a7451,_0x30595d){return _0x1ff0f9(_0x3a7451,_0x30595d- -0x2fe);}function _0x5e0de2(_0x31d48e,_0x1c9b7d){return _0x11a5eb(_0x1c9b7d,_0x31d48e-0x1c3);}function _0x15b869(_0x3b431,_0x247083){return _0x5a735d(_0x3b431,_0x247083- -0x107);}function _0x2dc014(_0x2402d7,_0x162ed7){return _0x1ff0f9(_0x2402d7,_0x162ed7- -0x56);}function _0x2ee091(_0x2619a9,_0x202209){return _0x11a5eb(_0x2619a9,_0x202209-0x68b);}function _0x1b174e(_0x5d83ce,_0x4f895f){return _0x1ff0f9(_0x5d83ce,_0x4f895f-0x47a);}function _0x57ba2a(_0x4799fe,_0x651ec2){return _0x11a5eb(_0x4799fe,_0x651ec2-0x486);}function _0x314312(_0x197237,_0x18e3b8){return _0x11a5eb(_0x197237,_0x18e3b8-0x385);}function _0x2e9d53(_0x106bca,_0x2dec8c){return _0x1ff0f9(_0x106bca,_0x2dec8c-0x1b2);}function _0x216169(_0x3e5b2f,_0x3001ef){return _0x5a735d(_0x3001ef,_0x3e5b2f-0x2e0);}function _0x504851(_0x23bd7b,_0x4c32fa){return _0x264f6a(_0x23bd7b-0x5c,_0x4c32fa);}if($request[_0x504851(0x588,0x5ae)][_0x57ba2a('Nl0[',0x34e)](_0x447361(0x491,0x4a4))>-0x1){const _0x222c70=$request[_0x48bc01(-0x1ef,-0x202)];if(_0x222c70)$[_0x57ba2a('8N@)',0x33d)](_0x222c70,_0x447361(0x428,0x427)+status);$[_0x216bb8(0x529,0x521)](_0x222c70);const _0x50674d=JSON[_0x30a1ff('@L6J',-0x29)]($request[_0x10924d(-0xf3,'FttL')]);if(_0x50674d)$[_0x216bb8(0x553,0x573)](_0x50674d,_0x10924d(-0xe9,']q%d')+status);$[_0x314312('oRV#',0x20f)](_0x50674d),$[_0x494189(0x455,0x40d)]($[_0x337ea5('p5I&',0xd8)],'',_0x5e0de2(0x49,'D%IE')+status+_0x416c50(-0xc1,-0xde));}function _0x2a00bf(_0x17bbdf,_0x40d25d){return _0x11a5eb(_0x40d25d,_0x17bbdf-0x251);}function _0x1545e3(_0x303f7b,_0x58429e){return _0x5a735d(_0x58429e,_0x303f7b-0x18d);}function _0x189c0b(_0x32544b,_0x25105f){return _0x11a5eb(_0x32544b,_0x25105f-0x756);}function _0x4e88ae(_0x376011,_0x2950f0){return _0x5a735d(_0x2950f0,_0x376011-0x14d);}function _0x447361(_0x10961c,_0x10dfca){return _0x1ff0f9(_0x10dfca,_0x10961c-0x325);}function _0x40f307(_0x39f335,_0x2d70df){return _0x1ff0f9(_0x39f335,_0x2d70df-0x3fe);}function _0x416c50(_0x1569e5,_0x5ee228){return _0x264f6a(_0x5ee228- -0x61c,_0x1569e5);}function _0x9997db(_0x56fcf6,_0x21956a){return _0x5a735d(_0x56fcf6,_0x21956a-0x282);}function _0x494189(_0x3656d4,_0x3df5fc){return _0x1ff0f9(_0x3df5fc,_0x3656d4-0x339);}function _0x216bb8(_0x48d777,_0x2322b){return _0x264f6a(_0x48d777- -0x46,_0x2322b);}function _0x1ab31b(_0x2168c1,_0x522d82){return _0x264f6a(_0x522d82- -0x483,_0x2168c1);}function _0x337ea5(_0x47ff0b,_0x300045){return _0x5a735d(_0x47ff0b,_0x300045- -0x1cc);}function _0x2ffe27(_0x10e589,_0x491391){return _0x264f6a(_0x10e589- -0x4d2,_0x491391);}function _0x93d01e(_0x2337dc,_0x1f8d47){return _0x264f6a(_0x1f8d47- -0x707,_0x2337dc);}function _0x4bd750(_0x22d50c,_0x35d0af){return _0x1ff0f9(_0x35d0af,_0x22d50c- -0x1fa);}function _0x4e5227(_0x19a66d,_0xcaab8a){return _0x1ff0f9(_0x19a66d,_0xcaab8a-0x195);}function _0x165695(_0xb30765,_0x575f67){return _0x5a735d(_0xb30765,_0x575f67-0x67);}function _0x9199f7(_0x53ba2d,_0x1271c3){return _0x5a735d(_0x53ba2d,_0x1271c3-0x310);}function _0x4dfeff(_0x27d6d5,_0x1c5843){return _0x11a5eb(_0x27d6d5,_0x1c5843-0x31);}if($request[_0x4e88ae(0x3ed,'Nl0[')][_0x216bb8(0x501,0x501)](_0x504851(0x5ed,0x617))>-0x1){const _0x575a85=$request[_0x216bb8(0x566,0x533)];if(_0x575a85)$[_0x2a00bf(0xa4,'6TJ1')](_0x575a85,_0x4e88ae(0x405,'189n')+status);$[_0x416c50(-0x94,-0xad)](_0x575a85);const _0x380c59=JSON[_0x9199f7('Nl0[',0x5a2)]($request[_0x494189(0x4ae,0x4d1)]);if(_0x380c59)$[_0x337ea5('D%IE',0xc5)](_0x380c59,_0x57ba2a('ge&Q',0x34f)+status);$[_0x5e0de2(0x7d,'$u&D')](_0x380c59),$[_0x2ffe27(0x7a,0x3b)]($[_0x314312('fd@S',0x1c6)],'',_0x504851(0x5bc,0x5c2)+status+_0x1545e3(0x41b,'D%IE'));}}function kkzlb(_0x3ae197=0x0){return new Promise(_0x26ae90=>{function _0x4b988e(_0x451a92,_0x16aa10){return _0x16ef(_0x16aa10- -0x118,_0x451a92);}let _0x5dabb5={'url':zqkkzurl,'headers':JSON[_0x4b988e('6TJ1',0xdd)](zqkkzhd)};function _0x46dbc7(_0x460257,_0x63085e){return _0x2bea(_0x63085e- -0x191,_0x460257);}$[_0x46dbc7(0x4b,0x8e)](_0x5dabb5,async(_0x54285d,_0x34827c,_0x479b45)=>{function _0xdabeca(_0x5c590e,_0x5cf996){return _0x46dbc7(_0x5c590e,_0x5cf996- -0x49);}function _0x97ed62(_0x199765,_0x66dd12){return _0x4b988e(_0x66dd12,_0x199765-0x1ee);}function _0x2a777f(_0x479118,_0x180bee){return _0x46dbc7(_0x180bee,_0x479118-0x4a7);}function _0x26d10d(_0x191b8e,_0x25bd5c){return _0x46dbc7(_0x191b8e,_0x25bd5c-0x41f);}function _0x407d49(_0x27d82a,_0x3e0a9e){return _0x46dbc7(_0x27d82a,_0x3e0a9e- -0x16e);}function _0x586b8c(_0x3e1d98,_0x2292aa){return _0x4b988e(_0x2292aa,_0x3e1d98-0x16);}function _0x295009(_0x52b504,_0x446608){return _0x4b988e(_0x446608,_0x52b504- -0x2ce);}function _0x3bf024(_0x236a7a,_0x2549db){return _0x4b988e(_0x236a7a,_0x2549db-0xfa);}function _0x4525ce(_0x1c02b3,_0x54999e){return _0x46dbc7(_0x54999e,_0x1c02b3-0x4e9);}function _0x2b7f9f(_0x874a58,_0x4b2638){return _0x46dbc7(_0x4b2638,_0x874a58- -0x1ba);}function _0x53d977(_0x4a1052,_0x366466){return _0x4b988e(_0x4a1052,_0x366466-0x132);}function _0xe9ca3e(_0x564448,_0x51e3b0){return _0x46dbc7(_0x51e3b0,_0x564448- -0x44);}function _0x3d022c(_0xc95d5d,_0x43e30f){return _0x4b988e(_0x43e30f,_0xc95d5d- -0x1c4);}function _0x2e0f6c(_0x3da18a,_0x435931){return _0x46dbc7(_0x435931,_0x3da18a-0x292);}function _0x475a02(_0x5efc8e,_0x52ee7a){return _0x46dbc7(_0x52ee7a,_0x5efc8e- -0x38);}function _0x25c34c(_0x4eae72,_0x353d9b){return _0x4b988e(_0x4eae72,_0x353d9b- -0x100);}function _0x7ccede(_0x521d85,_0x51aa6c){return _0x46dbc7(_0x51aa6c,_0x521d85-0x3b5);}function _0x329d25(_0xaf151c,_0x53104a){return _0x46dbc7(_0x53104a,_0xaf151c-0x12e);}function _0x4549f8(_0x1a17e8,_0x3ad5b0){return _0x4b988e(_0x3ad5b0,_0x1a17e8-0x58);}function _0x885f8(_0x4eef1b,_0x4c1343){return _0x4b988e(_0x4eef1b,_0x4c1343-0x10f);}function _0x25907d(_0x47ac35,_0x3add18){return _0x46dbc7(_0x47ac35,_0x3add18-0x42);}function _0x152a96(_0x1ad3b8,_0x18c708){return _0x4b988e(_0x18c708,_0x1ad3b8-0x376);}function _0x44dbfa(_0x1a0632,_0x1defb0){return _0x46dbc7(_0x1defb0,_0x1a0632- -0x16e);}function _0xf6f0b4(_0x24da38,_0x5dc002){return _0x4b988e(_0x24da38,_0x5dc002-0x440);}function _0xcce5c1(_0x5f620a,_0x3b9260){return _0x4b988e(_0x5f620a,_0x3b9260-0x1f2);}function _0x192a81(_0x22e5fb,_0x4b61a8){return _0x4b988e(_0x4b61a8,_0x22e5fb-0x24);}try{_0x479b45=JSON[_0x53d977('ZU5o',0x241)](_0x479b45);if(_0x479b45[_0x407d49(-0x11a,-0x105)][_0x53d977('0$ib',0x20b)][0x0]['id']!=''){console[_0x53d977('[kyN',0x269)](_0x25907d(0xec,0xaa)+_0x479b45[_0x7ccede(0x41e,0x429)][_0x407d49(-0x12f,-0xee)][_0x885f8('D%IE',0x228)]+_0x3d022c(-0xdf,'$k$H'));for(let _0x565508=0x0;_0x565508<_0x479b45[_0x26d10d(0x47b,0x488)][_0x407d49(-0x12a,-0xee)][_0x53d977('UXCr',0x1f2)];_0x565508++){id=_0x479b45[_0x53d977('X8o0',0x1f9)][_0x53d977('oE8W',0x245)][_0x565508]['id'],body0=zqkkzbody[_0x25907d(0x8a,0xc8)](_0x329d25(0x199,0x1ca))[0x0],body1=zqkkzbody[_0x885f8('MuDV',0x1f9)](_0x2b7f9f(-0x14f,-0x17c))[0x1],body2=CryptoJS[_0x407d49(-0xd4,-0xe4)](body1),body3=body2[_0x3d022c(-0xf9,'fd@S')](/&task_id=\d+&/g,_0x26d10d(0x4d9,0x4b0)+id+'&'),body4=CryptoJS[_0x885f8('ge&Q',0x200)](body3),ibody=body0+body4+'==';for(let _0x18a6fc=0x0;_0x18a6fc<0x6;_0x18a6fc++){await kkzzx(),await $[_0x7ccede(0x40a,0x3db)](0x1770);}await kkzjl(),await $[_0x3bf024('rg$h',0x208)](0x7d0);}}else console[_0x25907d(0xca,0xc4)](_0x885f8('Wa7n',0x1fc));}catch(_0x3301b6){}finally{_0x26ae90();}},_0x3ae197);});}function _0x1ff0f9(_0x1a7c74,_0x3f831e){return _0x2bea(_0x3f831e- -0xd4,_0x1a7c74);}function kkzzx(_0x5ad3c9=0x0){return new Promise(_0x111c0b=>{function _0x5e1a05(_0x1a1bb2,_0xf4ebf6){return _0x16ef(_0xf4ebf6-0x289,_0x1a1bb2);}let _0x4a9304={'url':_0x4283a(0x393,0x38c),'headers':JSON[_0x5e1a05('189n',0x4a6)](zqkkzhd1),'body':ibody};function _0x19a62d(_0x260d4b,_0x3b9a80){return _0x16ef(_0x260d4b- -0x5a,_0x3b9a80);}function _0x4283a(_0x28c107,_0x566ef3){return _0x2bea(_0x566ef3-0x1b0,_0x28c107);}$[_0x19a62d(0x1f1,'X8o0')](_0x4a9304,async(_0x5ed669,_0x21a72c,_0x431ae8)=>{function _0x2ad33f(_0x1554f4,_0x78f446){return _0x19a62d(_0x78f446- -0x321,_0x1554f4);}function _0x20e2b9(_0x5780d5,_0x516487){return _0x5e1a05(_0x516487,_0x5780d5- -0x435);}function _0x18b376(_0x225207,_0x5d2da3){return _0x5e1a05(_0x225207,_0x5d2da3- -0x584);}function _0x33d871(_0x1fe084,_0x2ce222){return _0x5e1a05(_0x2ce222,_0x1fe084-0x5);}function _0x4274d3(_0x37454c,_0x33d6e6){return _0x5e1a05(_0x33d6e6,_0x37454c- -0x19a);}function _0x391049(_0x29cf0b,_0x58bff0){return _0x19a62d(_0x29cf0b- -0xaa,_0x58bff0);}try{_0x431ae8=JSON[_0x4274d3(0x2c8,'X8o0')](_0x431ae8),_0x431ae8[_0x18b376('@uIo',-0x10e)]==0x0?console[_0x20e2b9(0x52,'qVOR')](_0x18b376('6TJ1',-0x120)):console[_0x18b376('v#ja',-0xad)](_0x33d871(0x463,'[kyN'));}catch(_0x4814a9){}finally{_0x111c0b();}},_0x5ad3c9);});}function _0x2bea(_0x3f4ead,_0x16a979){const _0xf5c7d=_0xf5c7();return _0x2bea=function(_0x2bea08,_0x44cc4f){_0x2bea08=_0x2bea08-0x1c8;let _0x5d6a3e=_0xf5c7d[_0x2bea08];if(_0x2bea['GatOHM']===undefined){var _0x48aa7f=function(_0x16ef12){const _0x5d46dd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1a7232='',_0xa1fd49='';for(let _0x8cbad2=0x0,_0x5e2aaa,_0x36de55,_0x4a4ebd=0x0;_0x36de55=_0x16ef12['charAt'](_0x4a4ebd++);~_0x36de55&&(_0x5e2aaa=_0x8cbad2%0x4?_0x5e2aaa*0x40+_0x36de55:_0x36de55,_0x8cbad2++%0x4)?_0x1a7232+=String['fromCharCode'](0xff&_0x5e2aaa>>(-0x2*_0x8cbad2&0x6)):0x0){_0x36de55=_0x5d46dd['indexOf'](_0x36de55);}for(let _0x4255e0=0x0,_0x31aeae=_0x1a7232['length'];_0x4255e0<_0x31aeae;_0x4255e0++){_0xa1fd49+='%'+('00'+_0x1a7232['charCodeAt'](_0x4255e0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xa1fd49);};_0x2bea['IVfEXg']=_0x48aa7f,_0x3f4ead=arguments,_0x2bea['GatOHM']=!![];}const _0x35ce50=_0xf5c7d[0x0],_0x26cfcd=_0x2bea08+_0x35ce50,_0x2771be=_0x3f4ead[_0x26cfcd];return!_0x2771be?(_0x5d6a3e=_0x2bea['IVfEXg'](_0x5d6a3e),_0x3f4ead[_0x26cfcd]=_0x5d6a3e):_0x5d6a3e=_0x2771be,_0x5d6a3e;},_0x2bea(_0x3f4ead,_0x16a979);}function kkzjl(_0x1a5526=0x0){return new Promise(_0x15ae39=>{let _0x267b34={'url':_0x5d158f(0x407,0x424),'headers':JSON[_0x5aef69('HZ)f',-0xf0)](zqkkzhd1),'body':ibody};function _0x5d158f(_0x835f2c,_0x2ecfd1){return _0x2bea(_0x2ecfd1-0x1d7,_0x835f2c);}function _0x5aef69(_0xc24640,_0xd27623){return _0x16ef(_0xd27623- -0x322,_0xc24640);}function _0x173814(_0x730a90,_0x1ed7c6){return _0x16ef(_0x730a90- -0x108,_0x1ed7c6);}$[_0x5aef69('mX*2',-0x142)](_0x267b34,async(_0x521cc2,_0x1d0592,_0x23f891)=>{function _0x58c2eb(_0x361ad4,_0x356767){return _0x5aef69(_0x361ad4,_0x356767-0x150);}function _0x4367a7(_0x35baef,_0x1aa704){return _0x5d158f(_0x35baef,_0x1aa704- -0x18b);}function _0x529790(_0x304357,_0x331d0e){return _0x5aef69(_0x331d0e,_0x304357-0x236);}function _0x5a0043(_0x1508b3,_0x25745d){return _0x5d158f(_0x1508b3,_0x25745d-0x54);}function _0x1b8303(_0x2b23db,_0x102dd8){return _0x5aef69(_0x102dd8,_0x2b23db-0x354);}function _0x3b7391(_0x258e0e,_0x28ae64){return _0x5aef69(_0x28ae64,_0x258e0e-0x247);}function _0x1fe15c(_0x39788f,_0x529111){return _0x173814(_0x39788f- -0xa2,_0x529111);}try{_0x23f891=JSON[_0x529790(0x16c,'D%IE')](_0x23f891),_0x23f891[_0x529790(0x15c,'$k$H')]==0x0?console[_0x4367a7(0x26f,0x25f)](_0x23f891[_0x1fe15c(0x68,'$k$H')][_0x5a0043(0x41b,0x3f9)]):console[_0x1b8303(0x230,'qVOR')](_0x23f891[_0x58c2eb('rg$h',0x58)]);}catch(_0x4f8785){}finally{_0x15ae39();}},_0x1a5526);});}

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
            } catch { }
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
        get(t, e = (() => { })) {
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
        post(t, e = (() => { })) {
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
