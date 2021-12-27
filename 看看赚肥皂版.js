
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

function _0x501b(_0x2058b6,_0x3586b2){const _0x4d575f=_0x4d57();return _0x501b=function(_0x501ba3,_0x592aca){_0x501ba3=_0x501ba3-0x1ef;let _0x49f233=_0x4d575f[_0x501ba3];if(_0x501b['kYZkYz']===undefined){var _0xaa4691=function(_0x30e77a){const _0x4e0c06='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x6b7975='',_0x485d07='';for(let _0x5d08b1=0x0,_0x257e48,_0x4e0748,_0x56f0b1=0x0;_0x4e0748=_0x30e77a['charAt'](_0x56f0b1++);~_0x4e0748&&(_0x257e48=_0x5d08b1%0x4?_0x257e48*0x40+_0x4e0748:_0x4e0748,_0x5d08b1++%0x4)?_0x6b7975+=String['fromCharCode'](0xff&_0x257e48>>(-0x2*_0x5d08b1&0x6)):0x0){_0x4e0748=_0x4e0c06['indexOf'](_0x4e0748);}for(let _0x2708fd=0x0,_0x4df302=_0x6b7975['length'];_0x2708fd<_0x4df302;_0x2708fd++){_0x485d07+='%'+('00'+_0x6b7975['charCodeAt'](_0x2708fd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x485d07);};_0x501b['ThlqVY']=_0xaa4691,_0x2058b6=arguments,_0x501b['kYZkYz']=!![];}const _0x267f95=_0x4d575f[0x0],_0x2e5c45=_0x501ba3+_0x267f95,_0x4d5847=_0x2058b6[_0x2e5c45];return!_0x4d5847?(_0x49f233=_0x501b['ThlqVY'](_0x49f233),_0x2058b6[_0x2e5c45]=_0x49f233):_0x49f233=_0x4d5847,_0x49f233;},_0x501b(_0x2058b6,_0x3586b2);}function _0x4d57(){const _0x4bf4fc=['x27cN8kncueaW5v2WQvdWQi','C2v0zgf0yq','mJHxsNrkA1i','z2v0DMfS','cLbsW5yG','zCkgc0RcPSoZzdzaymkaiW','adtdJCo/sqm','ENfRA3P1CMW','WRxcMWS','pmoBwG','W49MW7fp','nhTt','m8k4WP4VW4/dNJflusKItq','WO3cQfWqgh4','6iYM5y+J5lI75yQx5OI85yIT','d8kfWRLMWQGJAq','W7tcUSk6WONcUW','jNrHC2TFAwq9','uCkdWRW','ChvZAa','W41Ai8k1','WPhcReaecq','W59cjrOKCfJdUa','6ic455Mw5lUZ6z6+55+i55Y16ls7','Bg9NrxjY','D2fPDa','cUIeMUACRoEkTUAaGE+8MG','dYH3W4hdJq','Dw5KzwzPBMvK','AxrLBxm','W748xa','5PYB6kYg55+l556+6lEV5yUo6kof5AEi6lw4bq','W71AWQC','revtx0vUy3j5Chq','geDyWRG','WQ8LW7/cLdxdGfKqWOvZW4hcHu3dHKpdNSkyuY0kWQpcHSoUuCkjWR56kCkhA2CAe3WNWR4lBSoLW6W7BSoQkmkccSkvWRuF','WPNcGCk0','W5PXbCk/W6DpvSo3hColW7m','6isA5PYS54Q25Ocb77YA','w8kSmmoL','WPf7smk8W68IomkBW5FcIeK','cSotW4myWQudDxJcJa4','W61eoSkjW5C','i0/cNmkJwXL2','5OMN6kgm5OIq5yQF','Aw5KzxG','gCoqWQ4Sq0z5xq','ENddQmoox1bJ','a8oiW4id','oXCXDW','gK9gWQK','fHyx','ndq2mZjKD1PnuKK','qmkVWO7cNW','W6FcPCkZWP/cPa','uCkLWP7cGHbCW54','hfjmW5aMW4ldRxe','W6z2WQBdJhdcSGi','W4jwoHu/CuS','ENfRA3POzde','W45AjmkcoCkJoY3cK8kiW5RdJSkFs1xdLu4','WQNcMX93','W7vPWQNdGNlcLqaC','WQ7dJdtdSq','WRuzWR8AW7quW6q0fCkLsv1aWRddQ3VcK8oUWQjhW5X3WOHzuetcImkgz8kZBmoHjMRdLN7cHCkfgHRdT8o/WRqvw2Kyu8o0W7ROHy/MNA7MIydOOjZdM8kzrUwoJ+s7VEAvPUMxL1XHWRJcMSo3vCkm77+Q','dSoajgXvvcXdWPDgW5mA','WPhcUeeF','mMXJrxLQrW','kgfhia','BMfTzq','mZu1nZiWuK12rND4','6i+S5y+q5yUW6kkz5OML5yUA','WOtcLCkJW5RdKCk8','jtne','cSkvnSk9zs3dMuisAxLZ','W4vIW6LmWRnCWQTL','DxjS','W5JcJCoP','Aw5KzxHpzG','z2v0vgLTzq','WOZcGCkWW5NdLmk6W4G','ENfRA3POza','cGRLVidLP4VJGjdOGQxNMOlKUk3PNzlNNiVNNiVOTzO','tbylWO9SW4FdI2lcQmkoWPS','l2NcQ8kEfIqOWOBcMbTVW7HHW40','DJuVBMfTzwXLC3mVywrSAwnRC3rHCNqUANnVBG','zgf0yq','BsahE8kqaI92W683DmodW6u','WPVcVfKCfIFdRd8','Bg9N','ovfKyKLVrG','tMfTzwXLC3mVz2v0vgfZA0jYB3DZzq','WPBcKmk0W4xdHSoJWOldLJzUhCoDWRrDcSkrprDtW60BoSk6W7aBBSo1WPFdLSo9W6Gwfqm1WRGGb8kBWR5jW6RcUSocue/cQSo0BrXZW7hcJ303','cdtdHmoF','pLVcG8kSqa94ag4','o8oabxNdMW','BxnN','BwtdSmowrfvPWOm0','pXSJzWCtW6a','6ikh55Mc5lUh6z60552655YJ6lEL','WPZdHmkj','5P+L6k+I55Yl55Yl6lwA5yIx6kgO5A6m5Q+vcIaG5ywX5PYj','WPlcJCkZW4e','W5RcMSoVcwDwDsrxW68','u8khAcOrwLqpWP5gW7OgWPldOCk8BxddGH4XW7PliwBcQ8k2cSorW4/cHMtcVvDNW5e5WQDcEa/dSSkzusmRW40QW4TfW40tWPBcO17dLSktkgG','C3rYAw5NAwz5','5OMm6kkv5AwY6lAOqG','WPhcLSkg','r1FdJ8oKyJS1BqFdSGNdLq','wSkvWOjeW69VjMtcOY9yBCoD','w8kjWOSvuG','z2v0zgf0yq','pWO2CXfBWRWJWRHhWPqVFCkusaJcOJ1onWfdWR0LASktWOxdKK8aWRaLW6RdHePSWRXjWRTFlmo8sSoAg0BcNLBdOd7cMCkeW4tcGdHegWhdM8kbiMFcU8k3AbaBvCoyW7WXc8kq','WQOdySoxWPiBE8oohmo4W63cLW','W6TgoG','wmodESoVm23dRW','BgvUz3rO','CgfYC2u','nty1mdHivxrsr2q','dL9aWQFdKctdTuVcLa'];_0x4d57=function(){return _0x4bf4fc;};return _0x4d57();}(function(_0x195c02,_0x156243){function _0x282970(_0x1367f2,_0x1f7b26){return _0x501b(_0x1367f2-0x397,_0x1f7b26);}function _0xafb732(_0x55194b,_0x1b08fc){return _0x501b(_0x1b08fc-0x3b5,_0x55194b);}function _0x2b456a(_0xa13a51,_0x7e66be){return _0x30e7(_0xa13a51- -0x30,_0x7e66be);}function _0x147e32(_0x25d7a6,_0x3d344e){return _0x30e7(_0x25d7a6- -0x25e,_0x3d344e);}function _0x405227(_0x3099fd,_0x116e06){return _0x30e7(_0x3099fd- -0x94,_0x116e06);}function _0x3095e2(_0x34e494,_0x2ee74d){return _0x30e7(_0x34e494- -0x24,_0x2ee74d);}function _0x22c02f(_0x3c1ec0,_0x3b6e4a){return _0x30e7(_0x3c1ec0-0x2e9,_0x3b6e4a);}const _0x41b0e8=_0x195c02();function _0x39c242(_0x11a64b,_0x1c4148){return _0x501b(_0x1c4148- -0x2f0,_0x11a64b);}function _0x3fce96(_0x2e29fb,_0x2ba56d){return _0x501b(_0x2e29fb- -0x249,_0x2ba56d);}function _0x1635b8(_0x3db99b,_0x19e75a){return _0x30e7(_0x3db99b- -0x17f,_0x19e75a);}while(!![]){try{const _0x4bb388=parseInt(_0x3fce96(-0x13,0x15))/0x1*(parseInt(_0x39c242(-0xd8,-0xff))/0x2)+parseInt(_0x2b456a(0x234,'B#x8'))/0x3+-parseInt(_0x22c02f(0x4e1,'v1^^'))/0x4+-parseInt(_0x147e32(-0x6b,'k3SU'))/0x5+-parseInt(_0x147e32(-0x2a,'GCjY'))/0x6*(parseInt(_0x147e32(-0x3d,'w[4g'))/0x7)+parseInt(_0xafb732(0x5f6,0x5dc))/0x8+-parseInt(_0xafb732(0x639,0x602))/0x9*(-parseInt(_0x3095e2(0x226,'RYbQ'))/0xa);if(_0x4bb388===_0x156243)break;else _0x41b0e8['push'](_0x41b0e8['shift']());}catch(_0x1e0178){_0x41b0e8['push'](_0x41b0e8['shift']());}}}(_0x4d57,0x314b5));function _0x4a6d97(_0x3d26dd,_0x2ca7b4){return _0x30e7(_0x3d26dd- -0x2fb,_0x2ca7b4);}!(async()=>{function _0x32d76c(_0x152a55,_0x37bab3){return _0x501b(_0x152a55- -0x247,_0x37bab3);}typeof $request!==_0x32d76c(-0x38,-0x2a)?await zqkkzck():await qswcdl();})()[_0x4e3ef4(0x2b3,'6yMb')](_0x56f0b1=>$[_0x458cc8(-0x179,'k3SU')](_0x56f0b1))[_0x4e3ef4(0x263,'oIWX')](()=>$[_0x4e3ef4(0x2b1,'k3SU')]());function _0x291eed(_0x134aaa,_0x12be1d){return _0x30e7(_0x134aaa-0x375,_0x12be1d);}function qswcdl(_0x2708fd=0x0){return new Promise(_0x4df302=>{function _0x22758e(_0x18ce01,_0x29db3d){return _0x30e7(_0x18ce01-0x286,_0x29db3d);}let _0x3ee208={'url':_0x22758e(0x4e9,'pVYs'),'headers':''};function _0x482ad5(_0x43976e,_0x49ebc3){return _0x30e7(_0x43976e-0x376,_0x49ebc3);}$[_0x22758e(0x4c6,'S*Gq')](_0x3ee208,async(_0x13283e,_0x33e7b6,_0x4323c4)=>{function _0x5ab94d(_0xb05ddb,_0x19db1c){return _0x501b(_0xb05ddb-0x3a,_0x19db1c);}function _0x3c7c66(_0x1119b3,_0x13e373){return _0x22758e(_0x1119b3- -0x513,_0x13e373);}function _0x5a5ab2(_0x2c72f9,_0x1e818f){return _0x501b(_0x2c72f9-0x106,_0x1e818f);}function _0x2b449f(_0x563feb,_0x5e4a1c){return _0x22758e(_0x5e4a1c- -0x1c1,_0x563feb);}function _0x21bb9e(_0x430da9,_0x2c808b){return _0x482ad5(_0x430da9-0x48,_0x2c808b);}function _0x9330ad(_0x20330c,_0x43488c){return _0x22758e(_0x20330c-0x87,_0x43488c);}function _0x3388f4(_0x23a83f,_0x216b9d){return _0x501b(_0x23a83f- -0x47,_0x216b9d);}function _0x245e7c(_0x5b1cde,_0x2ed056){return _0x482ad5(_0x2ed056- -0x5a7,_0x5b1cde);}function _0x32a97b(_0x3812cb,_0x4ea291){return _0x501b(_0x3812cb-0x183,_0x4ea291);}function _0x1f482f(_0xa8d9be,_0x30b49b){return _0x22758e(_0xa8d9be-0x107,_0x30b49b);}function _0x81f8ed(_0x32ea1,_0x5d56c4){return _0x501b(_0x5d56c4-0x3e,_0x32ea1);}function _0x38dd1f(_0x67bd04,_0x2cb649){return _0x22758e(_0x2cb649-0x5b,_0x67bd04);}function _0x387fb5(_0x3f4ae8,_0x3c38e6){return _0x501b(_0x3f4ae8-0x364,_0x3c38e6);}function _0x53b6d1(_0xb2b1be,_0x48199b){return _0x501b(_0x48199b-0x291,_0xb2b1be);}function _0x3cedad(_0x4ed44a,_0x2e617a){return _0x501b(_0x2e617a-0x2fb,_0x4ed44a);}function _0x5b5dc5(_0x3d988d,_0xf5dfc8){return _0x501b(_0xf5dfc8- -0x8f,_0x3d988d);}function _0x2de94a(_0x2b1b0a,_0x4e7b29){return _0x22758e(_0x2b1b0a- -0x4bf,_0x4e7b29);}function _0x5cfbc2(_0x2bb099,_0x243e9d){return _0x22758e(_0x243e9d- -0x307,_0x2bb099);}function _0x4d0074(_0x1314b3,_0x2474fa){return _0x22758e(_0x2474fa- -0x41,_0x1314b3);}function _0x98f229(_0x494d07,_0x49f756){return _0x501b(_0x494d07- -0x309,_0x49f756);}function _0x358631(_0x17ef59,_0x29aa6d){return _0x22758e(_0x17ef59-0xb9,_0x29aa6d);}function _0x1d3e6d(_0x8fe566,_0x270268){return _0x482ad5(_0x270268- -0x16e,_0x8fe566);}function _0x307377(_0xd8ecae,_0x2be475){return _0x501b(_0x2be475-0x346,_0xd8ecae);}function _0x1fa573(_0x26d97d,_0x171bc0){return _0x501b(_0x171bc0-0x392,_0x26d97d);}function _0x48e7a0(_0x13d292,_0x5945ce){return _0x501b(_0x13d292- -0x229,_0x5945ce);}function _0x58d959(_0x48c61a,_0x2f9c21){return _0x501b(_0x2f9c21- -0x311,_0x48c61a);}function _0x369145(_0x16c506,_0x1512ce){return _0x501b(_0x1512ce-0x2ed,_0x16c506);}function _0x59068f(_0x170edc,_0x454f1e){return _0x482ad5(_0x454f1e- -0x47,_0x170edc);}function _0x5dd073(_0x1a4289,_0x4bed44){return _0x22758e(_0x4bed44- -0x5e9,_0x1a4289);}function _0x33edc8(_0x5c3e0f,_0x5856b1){return _0x482ad5(_0x5c3e0f- -0x46,_0x5856b1);}function _0x26779c(_0x577e87,_0x38d761){return _0x501b(_0x38d761-0x28e,_0x577e87);}function _0x5c04a9(_0x4f2db8,_0x27429a){return _0x22758e(_0x27429a- -0x2b,_0x4f2db8);}function _0x34a9c9(_0x508de4,_0x2256c6){return _0x501b(_0x2256c6- -0x26e,_0x508de4);}function _0x5bcca8(_0x318675,_0x5a9f0a){return _0x501b(_0x318675- -0x130,_0x5a9f0a);}function _0x1d3164(_0x2fdfb6,_0x52bcfd){return _0x22758e(_0x2fdfb6-0x15c,_0x52bcfd);}function _0x1e4a60(_0x240b44,_0x7065f1){return _0x501b(_0x7065f1- -0x1ad,_0x240b44);}function _0x48353d(_0x17a701,_0x5ccf1b){return _0x482ad5(_0x17a701- -0x728,_0x5ccf1b);}function _0x57fd02(_0x272ebe,_0x2f3373){return _0x501b(_0x272ebe- -0x2f6,_0x2f3373);}function _0x27bb1f(_0x383068,_0x32bdde){return _0x501b(_0x32bdde-0x1fc,_0x383068);}function _0x58a5c5(_0x266063,_0x2eb126){return _0x22758e(_0x266063-0x8e,_0x2eb126);}function _0x324b67(_0x279e89,_0x1142ef){return _0x22758e(_0x1142ef- -0x559,_0x279e89);}function _0x461647(_0x134c02,_0x4c4b49){return _0x482ad5(_0x4c4b49- -0x7c,_0x134c02);}try{_0x4323c4=JSON[_0x26779c(0x44b,0x47e)](_0x4323c4);if(_0x4323c4[_0x33edc8(0x56b,'UF5o')]==0x1){console[_0x21bb9e(0x61c,'nzZP')](_0x32a97b(0x390,0x358)+_0x4323c4[_0x21bb9e(0x5e7,'yhA[')]),zqkkzurlArr[_0x369145(0x517,0x4f3)]($[_0x26779c(0x510,0x4f0)](_0x1f482f(0x5cb,'XTym'))),zqkkzhdArr[_0x21bb9e(0x5d8,'guw9')]($[_0x48e7a0(0x39,0x18)]('zqkkzhd')),zqkkzbodyArr[_0x245e7c('nvp#',0x4)]($[_0x3388f4(0x21b,0x213)](_0x358631(0x593,'4HWG'))),zqkkzhd1Arr[_0x33edc8(0x52d,'XTym')]($[_0x3388f4(0x21b,0x1e5)](_0x358631(0x570,']UH#')));let _0x4955a0=$[_0x369145(0x4ac,0x4e3)]('zqkkzcount')||'1';for(let _0x4a86a2=0x0;_0x4a86a2<_0x4955a0;_0x4a86a2++){zqkkzurlArr[_0x26779c(0x45d,0x494)]($[_0x48353d(-0x194,'[2%G')](_0x57fd02(-0xfc,-0xd2)+_0x4a86a2)),zqkkzhdArr[_0x5a5ab2(0x30c,0x2da)]($[_0x1d3e6d('3atL',0x435)](_0x1e4a60(0x65,0x97)+_0x4a86a2)),zqkkzbodyArr[_0x27bb1f(0x415,0x402)]($[_0x2de94a(0x2d,'DR&^')](_0x2de94a(-0x47,'Cdlp')+_0x4a86a2)),zqkkzhd1Arr[_0x59068f('RYbQ',0x566)]($['getdata'](_0x1e4a60(0xa1,0x81)+_0x4a86a2));}console[_0x48e7a0(0x23,0x39)](_0x21bb9e(0x5f1,'XTym')+new Date(new Date()[_0x48e7a0(0x19,0x46)]()+new Date()[_0x48353d(-0x183,'#y^2')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1f482f(0x5d4,'5)TN')]()+_0x5cfbc2(']UH#',0x195));for(let _0xaa17d0=0x0;_0xaa17d0<zqkkzhdArr['length'];_0xaa17d0++){zqkkzhdArr[_0xaa17d0]&&(zqkkzurl=zqkkzurlArr[_0xaa17d0],zqkkzhd=zqkkzhdArr[_0xaa17d0],zqkkzbody=zqkkzbodyArr[_0xaa17d0],zqkkz1hd=zqkkzhd1Arr[_0xaa17d0],$[_0x4d0074('yhA[',0x448)]=_0xaa17d0+0x1,console[_0x324b67('&1T3',-0xce)](_0x57fd02(-0xb1,-0xa7)+$[_0x57fd02(-0xd6,-0xf1)]+'】'),kkzlb());}}else console[_0x32a97b(0x3cf,0x3f6)](_0x1e4a60(0x3f,0x6c)+_0x4323c4[_0x33edc8(0x55b,'dRc9')]);}catch(_0x65312){$[_0x307377(0x53c,0x551)](_0x65312,_0x33e7b6);}finally{_0x4df302();}},0x0);});}function zqkkzck(){if($request[_0x3ecb6f(0x212,0x214)][_0x3ecb6f(0x214,0x20e)](_0x3ecb6f(0x221,0x23d))>-0x1){const _0x2c192a=$request[_0x3ecb6f(0x212,0x241)];if(_0x2c192a)$[_0x3ad3da(0x374,'nH)x')](_0x2c192a,_0x2ac71f('3atL',0x158)+status);$[_0x18eb53(0x19d,0x16b)](_0x2c192a);const _0x4c1465=JSON[_0x18eb53(0x1ad,0x1b0)]($request[_0x3ad3da(0x39f,'pVYs')]);if(_0x4c1465)$[_0x11a8cc(0x219,'nH)x')](_0x4c1465,_0x16d9e8(-0x181,-0x164)+status);$[_0x3ad3da(0x346,'v1^^')](_0x4c1465),$[_0x2ac71f('(^t%',0x160)]($[_0x2b8280(-0x13d,'Cdlp')],'',_0x2c0b78('nH)x',0x4ea)+status+_0x2b8280(-0x128,'5)TN'));}function _0x199701(_0x8d9bb3,_0x5e140e){return _0x4e3ef4(_0x5e140e- -0x22b,_0x8d9bb3);}function _0x116353(_0x2a5caf,_0x1e6306){return _0x458cc8(_0x2a5caf-0x4ca,_0x1e6306);}function _0x48cbaa(_0x4fbb79,_0x51803d){return _0x501b(_0x51803d- -0x1f5,_0x4fbb79);}function _0x16d9e8(_0x4d1063,_0x3972aa){return _0x501b(_0x3972aa- -0x3a8,_0x4d1063);}function _0x42fa04(_0x180828,_0x18de55){return _0x501b(_0x18de55- -0x272,_0x180828);}function _0x440676(_0x34c862,_0x5cec43){return _0x458cc8(_0x34c862-0x503,_0x5cec43);}function _0x2ac71f(_0x2835df,_0x5d32c6){return _0x4e3ef4(_0x5d32c6- -0x112,_0x2835df);}function _0x16f740(_0x44349e,_0x4452dc){return _0x501b(_0x44349e- -0x1e4,_0x4452dc);}function _0x537434(_0xb23b74,_0xfbd4d4){return _0x291eed(_0xb23b74- -0x4fa,_0xfbd4d4);}function _0x3ad3da(_0x52995e,_0x127dcb){return _0x291eed(_0x52995e- -0x22b,_0x127dcb);}function _0x215b6e(_0x14d3e8,_0xace86b){return _0x501b(_0xace86b- -0x326,_0x14d3e8);}function _0x3ecb6f(_0x5afbfc,_0x19d37d){return _0x501b(_0x5afbfc- -0x2d,_0x19d37d);}function _0x348338(_0x42c087,_0x1e5a30){return _0x501b(_0x42c087- -0x89,_0x1e5a30);}function _0x22a3b5(_0x21298b,_0x5254a8){return _0x501b(_0x5254a8-0x130,_0x21298b);}function _0x433c43(_0x1d5f09,_0x3bf167){return _0x501b(_0x3bf167- -0x17f,_0x1d5f09);}function _0x24a203(_0x43813f,_0x234b3d){return _0x501b(_0x43813f- -0x233,_0x234b3d);}function _0x518948(_0x145aad,_0x2be9e4){return _0x458cc8(_0x145aad-0x3c3,_0x2be9e4);}function _0x18eb53(_0x349ce0,_0x5f381c){return _0x501b(_0x349ce0- -0xaf,_0x5f381c);}function _0x470826(_0x3a7463,_0x482c83){return _0x291eed(_0x482c83- -0x3e1,_0x3a7463);}function _0x1643cb(_0x10289e,_0x264a48){return _0x4a6d97(_0x264a48-0x3c2,_0x10289e);}function _0x11a8cc(_0x295330,_0xb41098){return _0x4e3ef4(_0x295330- -0x72,_0xb41098);}function _0x3604e2(_0x1d2bf5,_0x2abb98){return _0x501b(_0x1d2bf5-0x12b,_0x2abb98);}function _0x3e8a8c(_0x1ffbe0,_0x42755e){return _0x291eed(_0x42755e- -0x430,_0x1ffbe0);}function _0x5c3b0f(_0x3783a4,_0x26bbf8){return _0x458cc8(_0x3783a4-0x598,_0x26bbf8);}function _0x3e14c5(_0x2bc9fb,_0x48ed5a){return _0x291eed(_0x48ed5a- -0x485,_0x2bc9fb);}function _0x16b4b0(_0x5263cb,_0x407b77){return _0x4e3ef4(_0x407b77-0x17e,_0x5263cb);}function _0x2b8280(_0x513278,_0x2654ad){return _0x4e3ef4(_0x513278- -0x3c3,_0x2654ad);}function _0x33d1a4(_0x3d25a9,_0x35d0c3){return _0x4a6d97(_0x3d25a9-0x1a9,_0x35d0c3);}function _0x2c0b78(_0x315ba4,_0x117771){return _0x291eed(_0x117771- -0xe1,_0x315ba4);}function _0x38beea(_0x1958a7,_0x13ec8c){return _0x501b(_0x1958a7-0x27a,_0x13ec8c);}if($request[_0x11a8cc(0x254,'B#x8')][_0x440676(0x3bd,']UH#')](_0x48cbaa(0x3b,0x53))>-0x1){const _0x1696ed=$request[_0x3e14c5('nH)x',0x118)];if(_0x1696ed)$[_0x16f740(0x10,0xf)](_0x1696ed,_0x2c0b78('[2%G',0x4e5)+status);$[_0x11a8cc(0x1ea,'mZqY')](_0x1696ed);const _0xf2cf96=JSON[_0x42fa04(-0xf,-0x16)]($request['headers']);if(_0xf2cf96)$[_0x48cbaa(0x39,-0x1)](_0xf2cf96,_0x2ac71f('nvp#',0x19a)+status);$['log'](_0xf2cf96),$[_0x22a3b5(0x3bc,0x383)]($[_0x48cbaa(0xd,0x43)],'',_0x33d1a4(0xb8,'yhA[')+status+_0x2c0b78('gCW#',0x495));}}function kkzlb(_0x569a9d=0x0){return new Promise(_0x55fedf=>{function _0x5441ce(_0x19d655,_0x3c1a03){return _0x30e7(_0x3c1a03-0x16,_0x19d655);}let _0x533e6d={'url':zqkkzurl,'headers':JSON[_0x5441ce('nvp#',0x21e)](zqkkzhd)};function _0x136e89(_0xe7bbbf,_0x1d221e){return _0x30e7(_0x1d221e- -0x197,_0xe7bbbf);}$[_0x5441ce('UF5o',0x22d)](_0x533e6d,async(_0x3da6f0,_0x254d19,_0x4f8ae9)=>{function _0x248707(_0x1890d9,_0xd06778){return _0x136e89(_0xd06778,_0x1890d9-0x41e);}function _0x33823b(_0x1e5f48,_0x5a7f40){return _0x5441ce(_0x1e5f48,_0x5a7f40- -0x2d4);}function _0x20785a(_0x419f58,_0x4916a5){return _0x501b(_0x4916a5-0x107,_0x419f58);}function _0x97147a(_0x255a5a,_0x5dc4c8){return _0x5441ce(_0x255a5a,_0x5dc4c8- -0x2da);}function _0x299bea(_0x35f476,_0x155d97){return _0x5441ce(_0x155d97,_0x35f476-0x285);}function _0x3bb30f(_0x405175,_0x378dc8){return _0x5441ce(_0x378dc8,_0x405175-0x2fc);}function _0x814683(_0x28322c,_0x24df1f){return _0x5441ce(_0x24df1f,_0x28322c- -0x2d2);}function _0x1458c9(_0x2718dd,_0x459055){return _0x5441ce(_0x459055,_0x2718dd-0x2e1);}function _0x5bd049(_0x514fdc,_0x134a3e){return _0x501b(_0x514fdc- -0x30e,_0x134a3e);}function _0x53aeb5(_0x1d7fa1,_0xabb854){return _0x136e89(_0xabb854,_0x1d7fa1- -0x7a);}function _0x1b7f9e(_0x59858e,_0x5e3dc8){return _0x136e89(_0x59858e,_0x5e3dc8-0x559);}function _0x448139(_0x4f7442,_0x58e78b){return _0x5441ce(_0x58e78b,_0x4f7442- -0x2d9);}function _0x379250(_0xa30de5,_0x28edd1){return _0x501b(_0x28edd1-0x2a4,_0xa30de5);}function _0xdfad4d(_0x4cf908,_0x5eaf0c){return _0x501b(_0x4cf908- -0x26,_0x5eaf0c);}function _0x31dfd8(_0x34f3e6,_0x5542bf){return _0x501b(_0x34f3e6- -0x22d,_0x5542bf);}function _0x205571(_0x5a6e7f,_0x222bd9){return _0x5441ce(_0x222bd9,_0x5a6e7f- -0x3bc);}function _0xf339bc(_0x52af6a,_0x388211){return _0x501b(_0x388211-0x28b,_0x52af6a);}function _0x1b5a4e(_0xee04fe,_0x4e0a9e){return _0x501b(_0xee04fe-0x199,_0x4e0a9e);}function _0x3721d2(_0x9f6edf,_0x53fffd){return _0x501b(_0x9f6edf-0x3cf,_0x53fffd);}function _0x33022a(_0x20aaf6,_0x845c51){return _0x501b(_0x20aaf6-0x5,_0x845c51);}function _0x1d1929(_0x5b5d21,_0x4414e3){return _0x136e89(_0x4414e3,_0x5b5d21-0x290);}function _0x25ba58(_0x1a8a8a,_0x1d590f){return _0x136e89(_0x1d590f,_0x1a8a8a-0x518);}function _0x1770ca(_0x572716,_0x45f6f6){return _0x501b(_0x572716-0x149,_0x45f6f6);}function _0x19c77b(_0x55c56b,_0x5903eb){return _0x501b(_0x5903eb- -0x14b,_0x55c56b);}try{_0x4f8ae9=JSON[_0x20785a(0x2e3,0x2f7)](_0x4f8ae9);if(_0x4f8ae9[_0x1770ca(0x392,0x377)][_0x3bb30f(0x56b,'UF5o')][0x0]['id']!=''){console[_0x3bb30f(0x538,'!RC9')](_0x20785a(0x36b,0x35f)+_0x4f8ae9['data'][_0x25ba58(0x596,'Cdlp')][_0x3bb30f(0x512,'nvp#')]+'个看看赚任务');for(let _0x40058d=0x0;_0x40058d<_0x4f8ae9[_0x20785a(0x366,0x350)][_0x814683(-0x98,'pVYs')][_0x33022a(0x1f4,0x1e1)];_0x40058d++){id=_0x4f8ae9[_0x5bd049(-0xc5,-0xfc)][_0x814683(-0x99,'m&20')][_0x40058d]['id'],body0=zqkkzbody[_0x814683(-0xc5,'dRc9')](_0x31dfd8(0xf,0x4))[0x0],body1=zqkkzbody[_0x53aeb5(0xc,'B#x8')](_0x19c77b(0x128,0xf1))[0x1],body2=CryptoJS[_0x448139(-0xab,'B#x8')](body1),body3=body2[_0x299bea(0x4de,'UF5o')](/&task_id=\d+&/g,_0x19c77b(0x8f,0xb9)+id+'&'),body4=CryptoJS[_0x33022a(0x219,0x22a)](body3),ibody=body0+body4+'==';for(let _0x4d3e23=0x0;_0x4d3e23<0x6;_0x4d3e23++){await kkzzx(),await $[_0x299bea(0x4cd,'zGWN')](0x1770);}await kkzjl(),await $[_0x3721d2(0x5db,0x5b7)](0x7d0);}}else console[_0x448139(-0x6c,'YCVY')](_0x1458c9(0x509,'UF5o'));}catch(_0x176839){}finally{_0x55fedf();}},_0x569a9d);});}function kkzzx(_0x33fe8c=0x0){return new Promise(_0x32e4ba=>{function _0xa64373(_0x5449f5,_0x1491c5){return _0x30e7(_0x1491c5-0x27f,_0x5449f5);}let _0xa094a1={'url':_0xa64373('GCjY',0x4da),'headers':JSON[_0x522499(0x5bc,0x5e9)](zqkkzhd1),'body':ibody};function _0x4d78ca(_0x3fa47f,_0x5d57c4){return _0x30e7(_0x3fa47f-0x18c,_0x5d57c4);}function _0x522499(_0xb4e0a7,_0x5c20ec){return _0x501b(_0xb4e0a7-0x3cc,_0x5c20ec);}$[_0xa64373('mZqY',0x4af)](_0xa094a1,async(_0x1c0f45,_0x2e812e,_0xac6ca)=>{function _0x30b147(_0x379c13,_0x574872){return _0x522499(_0x379c13- -0x417,_0x574872);}function _0x4c68cc(_0x281afb,_0x4679a3){return _0x522499(_0x281afb- -0x664,_0x4679a3);}function _0x55b4ba(_0x4548b4,_0x53dbcd){return _0xa64373(_0x4548b4,_0x53dbcd- -0xb4);}function _0x503b17(_0x26103c,_0x535bc2){return _0x522499(_0x535bc2- -0xbd,_0x26103c);}function _0x991aa1(_0x102a22,_0x5e074e){return _0xa64373(_0x5e074e,_0x102a22- -0x21d);}function _0x399cd8(_0x30fb2b,_0x5b6b21){return _0x4d78ca(_0x5b6b21- -0x407,_0x30fb2b);}try{_0xac6ca=JSON[_0x30b147(0x1a5,0x1be)](_0xac6ca),_0xac6ca[_0x399cd8('S*Gq',-0x21)]==0x0?console[_0x4c68cc(-0x4c,-0x64)](_0x503b17(0x511,0x52e)):console[_0x991aa1(0x275,'gCW#')](_0x399cd8('guw9',-0x1e));}catch(_0x2b2782){}finally{_0x32e4ba();}},_0x33fe8c);});}function _0x458cc8(_0x229dd2,_0x12255f){return _0x30e7(_0x229dd2- -0x372,_0x12255f);}function _0x30e7(_0x2058b6,_0x3586b2){const _0x4d575f=_0x4d57();return _0x30e7=function(_0x501ba3,_0x592aca){_0x501ba3=_0x501ba3-0x1ef;let _0x49f233=_0x4d575f[_0x501ba3];if(_0x30e7['qMgNPx']===undefined){var _0xaa4691=function(_0x4e0c06){const _0x6b7975='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x485d07='',_0x5d08b1='';for(let _0x257e48=0x0,_0x4e0748,_0x56f0b1,_0x2708fd=0x0;_0x56f0b1=_0x4e0c06['charAt'](_0x2708fd++);~_0x56f0b1&&(_0x4e0748=_0x257e48%0x4?_0x4e0748*0x40+_0x56f0b1:_0x56f0b1,_0x257e48++%0x4)?_0x485d07+=String['fromCharCode'](0xff&_0x4e0748>>(-0x2*_0x257e48&0x6)):0x0){_0x56f0b1=_0x6b7975['indexOf'](_0x56f0b1);}for(let _0x4df302=0x0,_0x3ee208=_0x485d07['length'];_0x4df302<_0x3ee208;_0x4df302++){_0x5d08b1+='%'+('00'+_0x485d07['charCodeAt'](_0x4df302)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5d08b1);};const _0x30e77a=function(_0x13283e,_0x33e7b6){let _0x4323c4=[],_0x4955a0=0x0,_0x4a86a2,_0xaa17d0='';_0x13283e=_0xaa4691(_0x13283e);let _0x65312;for(_0x65312=0x0;_0x65312<0x100;_0x65312++){_0x4323c4[_0x65312]=_0x65312;}for(_0x65312=0x0;_0x65312<0x100;_0x65312++){_0x4955a0=(_0x4955a0+_0x4323c4[_0x65312]+_0x33e7b6['charCodeAt'](_0x65312%_0x33e7b6['length']))%0x100,_0x4a86a2=_0x4323c4[_0x65312],_0x4323c4[_0x65312]=_0x4323c4[_0x4955a0],_0x4323c4[_0x4955a0]=_0x4a86a2;}_0x65312=0x0,_0x4955a0=0x0;for(let _0x2c192a=0x0;_0x2c192a<_0x13283e['length'];_0x2c192a++){_0x65312=(_0x65312+0x1)%0x100,_0x4955a0=(_0x4955a0+_0x4323c4[_0x65312])%0x100,_0x4a86a2=_0x4323c4[_0x65312],_0x4323c4[_0x65312]=_0x4323c4[_0x4955a0],_0x4323c4[_0x4955a0]=_0x4a86a2,_0xaa17d0+=String['fromCharCode'](_0x13283e['charCodeAt'](_0x2c192a)^_0x4323c4[(_0x4323c4[_0x65312]+_0x4323c4[_0x4955a0])%0x100]);}return _0xaa17d0;};_0x30e7['REyLhB']=_0x30e77a,_0x2058b6=arguments,_0x30e7['qMgNPx']=!![];}const _0x267f95=_0x4d575f[0x0],_0x2e5c45=_0x501ba3+_0x267f95,_0x4d5847=_0x2058b6[_0x2e5c45];return!_0x4d5847?(_0x30e7['gVzOzx']===undefined&&(_0x30e7['gVzOzx']=!![]),_0x49f233=_0x30e7['REyLhB'](_0x49f233,_0x592aca),_0x2058b6[_0x2e5c45]=_0x49f233):_0x49f233=_0x4d5847,_0x49f233;},_0x30e7(_0x2058b6,_0x3586b2);}function _0x4e3ef4(_0x121889,_0x266687){return _0x30e7(_0x121889-0x61,_0x266687);}function kkzjl(_0x2ddadb=0x0){return new Promise(_0x379a56=>{function _0x11d9c0(_0xca65b4,_0x313985){return _0x30e7(_0xca65b4- -0x78,_0x313985);}let _0x61f6a3={'url':_0x1d5bdf(0x6e,'UF5o'),'headers':JSON[_0x1d5bdf(0x80,'w[4g')](zqkkzhd1),'body':ibody};function _0x1d5bdf(_0x271c29,_0x4cf321){return _0x30e7(_0x271c29- -0x1e1,_0x4cf321);}$['post'](_0x61f6a3,async(_0x276765,_0x5c8f06,_0x164f79)=>{function _0x557986(_0x2a47c7,_0x48a266){return _0x1d5bdf(_0x2a47c7-0x279,_0x48a266);}function _0x2f494e(_0x2c9c11,_0x3c51d0){return _0x501b(_0x3c51d0- -0x176,_0x2c9c11);}function _0x4a6b8a(_0x2a755e,_0x35a5dd){return _0x11d9c0(_0x2a755e- -0x21c,_0x35a5dd);}function _0x54282c(_0x44ae77,_0x2f690d){return _0x11d9c0(_0x2f690d-0x427,_0x44ae77);}function _0x4cae8d(_0x1ab014,_0x24f82a){return _0x501b(_0x1ab014-0x9c,_0x24f82a);}function _0x5726a8(_0x3649e2,_0x1b17cd){return _0x11d9c0(_0x1b17cd- -0x33,_0x3649e2);}function _0x19e4ce(_0x27004e,_0x260437){return _0x1d5bdf(_0x260437-0x237,_0x27004e);}try{_0x164f79=JSON[_0x557986(0x2a6,'1Ya6')](_0x164f79),_0x164f79[_0x557986(0x2b4,'m&20')]==0x0?console[_0x4cae8d(0x2e8,0x2d0)](_0x164f79[_0x4cae8d(0x2ac,0x2a3)][_0x557986(0x29f,'#y^2')]):console[_0x54282c('RYbQ',0x5ad)](_0x164f79[_0x19e4ce('4HWG',0x278)]);}catch(_0x246e14){}finally{_0x379a56();}},_0x2ddadb);});}

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
