/*

安卓软件名称:电玩世界

项目注册地址(微信打开):http://www.shandw.com/sdwworld/download?sdsj_inviter_id=29999597

邀请码:29999597

cron 0-59/5 0-23 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_dwsj.js
变量配置文件地址:https://gitee.com/soy-tool/app-script/raw/master/dwsj_variable_data.js

注意:

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后找到 raw_master_dwsj_variable_data.js 文件按照提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改


脚本需要 node-rsa 依赖库,自行进依赖管理里面添加,不会就自行使用 ssh 安装 命令如: docker exec -it 你容器容器名称 bash -c "cd scripts && npm install node-rsa -g"
查看容器命令:docker ps -a
或者百度自行安装

*/


const $ = new Env('【闪电世界】版本:22/03/10_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodC='jsjiami.com.v6',_0xodC_=['_0xodC'],_0x131a=[_0xodC,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x74\x72\x61\x6e\x73\x66\x65\x72','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x75\x70\x64\x61\x74\x65','\x75\x72\x6c','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x76\x69\x65\x77','\x73\x69\x67\x6e','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x74\x6f\x75','\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x37\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x47\x61\x6d\x65\x4d\x79\x49\x6e\x66\x6f','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\x49\x44\uff1a','\x75\x73\x65\x72\x52\x65\x76\x65\x6e\x75\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u57ce\u5e02\u7b49\u7ea7\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u7c89\u4e1d\u6570\u91cf\uff1a','\x6d\x79\x49\x6e\x66\x6f','\x72\x66\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u5f53\u524d\u7e41\u8363\u5ea6\uff1a','\x75\x73\x65\x72','\x70\x72\x6f\x73\x70\x65\x72\x69\x74\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u58f0\u671b\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e78\u8fd0\u503c\uff1a','\x6c\x75\x63\x6b\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u89c6\u9891\u6b21\u6570\uff1a','\x72\x65\x66\x72\x65\x73\x68\x44\x61\x74\x61','\x61\x6c\x6c\x54\x69\x6d\x65\x73','\x0a\x2d\x2d\x2d\u5f53\u524d\u7ea2\u94bb\u6570\u91cf\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u91d1\u5e01\u4f59\u989d\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d26\u6237\u5730\u5740\uff1a','\x61\x63\x63\x6f\x75\x6e\x74\x55\x72\x6c','\x20\u7528\u6237\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x7b\x22\x74\x79\x70\x65\x22\x3a\x32\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x65\x72\x49\x6e\x66\x6f','\x6e\x69\x63\x6b','\x75\x73\x65\x72\x43\x69\x74\x79\x4c\x65\x76\x65\x6c','\x20\u83b7\u53d6\u57ce\u5e02\u4fe1\u606f\u3011\x3a\x20','\x2c\x22\x74\x61\x75\x22\x3a\x22','\x22\x2c\x22\x74\x6f\x47\x6f\x6c\x64\x73\x22\x3a','\x74\x72\x61\x6e\x73\x66\x65\x72\x4d\x6f\x6e\x65\x79','\x20\u8f6c\u8d60\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u8f6c\u8d60\u3011\x3a\x20','\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x76\x61\x6c\x54\x79\x70\x65','\x0a\x2d\x2d\x2d\u5f53\u524d','\x72\x65\x76\x65\x6e\x75\x65\x73','\x20\u94b1\u5305\u4f59\u989d\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x50\x72\x6f\x73\x70\x65\x63\x74\x52\x65\x76\x65\x6e\x75\x65\x44\x65\x74\x61\x69\x6c','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\x2d\x2d\x2d\u5f53\u524d\u5e7f\u544a\u4f63\u91d1\uff1a','\x6d\x6f\x6e\x65\x79','\u5143\x2c\u6ee1\x32\x30\u91ca\u653e','\x0a\x2d\x2d\x2d\u5f53\u524d\u672a\u5b9e\u540d\uff1a','\x75\x6e\x43\x65\x72\x74\x55\x73\x65\x72\x4e\x75\x6d','\u4eba\x2c\u4ea7\u751f','\x75\x6e\x53\x75\x6d\x4d\x6f\x6e\x65\x79','\u5143\x2c\u5b9e\u540d\u91ca\u653e','\x20\u5e7f\u544a\u6536\u76ca\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77\x50\x61\x67\x65','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x75\x73\x61\x62\x6c\x65\x4d\x6f\x6e\x65\x79','\x20\u5e7f\u544a\u4f63\u91d1\u4f59\u989d\u3011\x3a\x20','\x7b\x22\x76\x61\x6c\x54\x79\x70\x65\x22\x3a\x22\x30\x22\x2c\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x22\x32\x30\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x77\x61\x6c\x6c\x65\x74\x57\x69\x74\x68\x64\x72\x61\x77','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20\u6210\u529f','\x20\u5e7f\u544a\u4f63\u91d1\u63d0\u73b0\u3011\x3a\x20','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x2c\x22\x74\x69\x6d\x65\x22\x3a','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u819c\u62dc\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\u53d8\u91cf\u4e3a\u7a7a','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x30\x5f\x31\x35\x5f\x35\x20\x28\x45\x72\x67\u00e4\x6e\x7a\x65\x6e\x64\x65\x73\x20\x55\x70\x64\x61\x74\x65\x29\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x32\x2e\x31\x2e\x31\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x34\x45\x33\x30\x34\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u83b7\u53d6\u811a\u672c\u5730\u5740\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7535\u73a9\u4e16\u754c','\x6d\x61\x74\x63\x68','\x2f\x64\x77\x73\x6a\x5f\u7248\u672c\x3a','\x2e\x6a\x73','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x73\x74\x61\x72\x74','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30\x2c','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31\x2c','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u66f4\u65b0\u6570\u636e\u6210\u529f','\x6a\x77\x73\x6a\x69\x61\x53\x6d\x47\x69\x66\x2e\x63\x6c\x6f\x6d\x2e\x76\x36\x79\x71\x46\x49\x4a\x51\x42\x4a\x44\x43\x72\x3d\x3d'];function _0x255c(_0x33eb5e,_0x2be2a8){_0x33eb5e=~~'0x'['concat'](_0x33eb5e['slice'](0x0));var _0x2fd4b9=_0x131a[_0x33eb5e];return _0x2fd4b9;};(function(_0x3645fa,_0x14f59a){var _0x447d20=0x0;for(_0x14f59a=_0x3645fa['shift'](_0x447d20>>0x2);_0x14f59a&&_0x14f59a!==(_0x3645fa['pop'](_0x447d20>>0x3)+'')['replace'](/[wSGflyqFIJQBJDCr=]/g,'');_0x447d20++){_0x447d20=_0x447d20^0xd66ba;}}(_0x131a,_0x255c));const RSA_js=$[_0x255c('0')]()?require(_0x255c('1')):'';const fs=$[_0x255c('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x255c('0')]()?require(_0x255c('2')):'';!(async()=>{console[_0x255c('3')](_0x255c('4')+new Date(new Date()[_0x255c('5')]()+new Date()[_0x255c('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x255c('7')]()+_0x255c('8'));if(dwsj_variable[_0x255c('9')]!==0xc8){console[_0x255c('3')](_0x255c('a'));return;}console[_0x255c('3')](_0x255c('b')+dwsj_variable[_0x255c('c')][_0x255c('d')][_0x255c('e')]+_0x255c('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x255c('c')][_0x255c('d')][_0x255c('e')];i++){current=dwsj_variable[_0x255c('c')][_0x255c('d')][i];video_data=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('10')];user_ID=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('11')];main_user_ID=dwsj_variable[_0x255c('c')][_0x255c('d')][0x0][_0x255c('11')];dwsj_token=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('12')];dwsj_UA=dwsj_variable[_0x255c('c')][_0x255c('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('13')];dwsj_signtime=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('14')];dwsj_UPbuild=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('15')];dwsj_transfer=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('16')];dwsj_Business=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('17')];dwsj_viewnum=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('18')];dwsj_action=dwsj_variable[_0x255c('c')][_0x255c('d')][i][_0x255c('19')];notice=dwsj_variable[_0x255c('c')][_0x255c('1a')][0x0][_0x255c('1b')];update=dwsj_variable[_0x255c('c')][_0x255c('1a')][0x0][_0x255c('1c')];scripturl=dwsj_variable[_0x255c('c')][_0x255c('1a')][0x0][_0x255c('1d')];if(!dwsj_UA){dwsj_UA=_0x255c('1e');}$[_0x255c('1f')]=i+0x1;console[_0x255c('3')](_0x255c('20')+$[_0x255c('1f')]+_0x255c('21'));await implement();};if(update){await upscript();}if(notify){if(notice){if(subTitle){await notify[_0x255c('22')]($[_0x255c('23')],subTitle);}}}})()[_0x255c('24')](_0x59bda9=>$[_0x255c('25')](_0x59bda9))[_0x255c('26')](()=>$[_0x255c('27')]());async function implement(){let _0x38812f=new Date()[_0x255c('28')]();let _0x2ae93b=new Date()[_0x255c('29')]();await rollPoint();await getAdReward(_0x255c('2a'));await getRankByType();if(new Date()[_0x255c('28')]()==dwsj_signtime&&new Date()[_0x255c('29')]()<0xa){await getAdReward(_0x255c('2b'));}await UserWallet();await getUserWallet();await RevenueDetail();await getShopInfo();await getMyInfo();}function rollPoint(){let _0x54fb03=new Date()[_0x255c('5')]();let _0x428459=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('2d')+_0x54fb03+'\x7d');let _0x3ae1dc=Post_request(_0x255c('2e'),_0x428459);return new Promise((_0xe122e8,_0x10b5f3)=>{$[_0x255c('2f')](_0x3ae1dc,async(_0x2f82a5,_0x15478d,_0x48e172)=>{try{if(_0x2f82a5){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('31'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('31');console[_0x255c('3')](_0x2f82a5+'\x0a');}else{let _0x23af62=JSON[_0x255c('32')](_0x48e172);if(_0x23af62[_0x255c('9')]==0x1){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('33')+_0x23af62[_0x255c('34')][_0x255c('35')][_0x255c('36')]+_0x255c('37'));await addGoodsBuff();await $[_0x255c('38')](Math[_0x255c('39')](Math[_0x255c('3a')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x23af62[_0x255c('9')]==0x515){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('3b')+_0x23af62[_0x255c('3c')]);await getAdReward(_0x255c('3d'));await getBuildingEarn();}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('3b')+_0x23af62[_0x255c('3c')]);}}}catch(_0x15c7b1){console[_0x255c('3')](_0x15c7b1,_0x15478d);}finally{_0xe122e8();}});});}function addNewBuilding(){let _0x484034=new Date()[_0x255c('5')]();let _0x32eefd=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('3e')+_0x484034+'\x7d');let _0x4b6b4b=Post_request(_0x255c('3f'),_0x32eefd);return new Promise((_0x4657bd,_0x50d87d)=>{$[_0x255c('2f')](_0x4b6b4b,async(_0x146f82,_0xe7f5f5,_0x2b1b83)=>{try{if(_0x146f82){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('40'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('40');}else{let _0x1c96a2=JSON[_0x255c('32')](_0x2b1b83);if(_0x1c96a2[_0x255c('9')]==0x1){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('41')+_0x1c96a2[_0x255c('34')][_0x255c('42')][_0x255c('43')][_0x255c('44')]+_0x255c('37'));}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('45')+_0x1c96a2[_0x255c('3c')]);}}}catch(_0x23ea0c){console[_0x255c('3')](_0x23ea0c,_0xe7f5f5);}finally{_0x4657bd();}});});}function getBuildingEarn(){let _0x177e1c=new Date()[_0x255c('5')]();let _0x1757f0=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('3e')+_0x177e1c+'\x7d');let _0x548e49=Post_request(_0x255c('46'),_0x1757f0);return new Promise((_0x1e62f5,_0xba48ee)=>{$[_0x255c('2f')](_0x548e49,async(_0x54890e,_0x59731e,_0x36065b)=>{try{if(_0x54890e){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('47'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('47');}else{let _0x543bf8=JSON[_0x255c('32')](_0x36065b);if(_0x543bf8[_0x255c('9')]==0x1){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('48')+_0x543bf8[_0x255c('34')][_0x255c('42')][_0x255c('43')][_0x255c('44')]+_0x255c('37'));}else if(_0x543bf8[_0x255c('9')]==0x4bf||_0x543bf8[_0x255c('3c')]==_0x255c('49')){if(dwsj_build){await addNewBuilding();}}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('4a')+_0x543bf8[_0x255c('3c')]);}}}catch(_0xc0ba20){console[_0x255c('3')](_0xc0ba20,_0x59731e);}finally{_0x1e62f5();}});});}function buildingLevelUp(){let _0x5963e0=new Date()[_0x255c('5')]();let _0x2c0b5f=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('3e')+_0x5963e0+'\x7d');let _0x435027=Post_request(_0x255c('4b'),_0x2c0b5f);return new Promise((_0x4b984b,_0x650260)=>{$[_0x255c('2f')](_0x435027,async(_0x3c0bdc,_0x4fc498,_0xf9d858)=>{try{if(_0x3c0bdc){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('4c'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('4c');}else{let _0x4de9eb=JSON[_0x255c('32')](_0xf9d858);if(_0x4de9eb[_0x255c('9')]==0x1){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('4d')+_0x4de9eb[_0x255c('34')][_0x255c('42')][_0x255c('43')][_0x255c('44')]+_0x255c('37'));}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('4e')+_0x4de9eb[_0x255c('3c')]);}}}catch(_0x535cce){console[_0x255c('3')](_0x535cce,_0x4fc498);}finally{_0x4b984b();}});});}function addGoodsBuff(){let _0x5a3734=new Date()[_0x255c('5')]();let _0x40f0fe=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('4f')+_0x5a3734+'\x7d');let _0x4b1254=Post_request(_0x255c('50'),_0x40f0fe);return new Promise((_0x1be210,_0x25e582)=>{$[_0x255c('2f')](_0x4b1254,async(_0x35a678,_0x38727a,_0x1386c5)=>{try{if(_0x35a678){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('51'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('51');}else{}}catch(_0x27fdbd){console[_0x255c('3')](_0x27fdbd,_0x38727a);}finally{_0x1be210();}});});}function getRankByType(){let _0x597cc4=[_0x255c('44'),_0x255c('52'),_0x255c('52')];let _0x3679dd='';let _0x36763b=_0x597cc4[Math[_0x255c('39')](Math[_0x255c('3a')]()*_0x597cc4[_0x255c('e')])];if(_0x36763b==_0x255c('44')){_0x3679dd='\u91d1\u5e01';}else if(_0x36763b==_0x255c('52')){_0x3679dd='\u58f0\u671b';}if(_0x36763b==_0x255c('52')){_0x3679dd='\u6536\u76ca';}let _0x416fd5=new Date()[_0x255c('5')]();let _0x5436c6=RSA_encryption(_0x255c('53')+_0x36763b+_0x255c('54')+user_ID+_0x255c('55')+_0x416fd5+'\x7d');let _0x5881ff=Post_request(_0x255c('56'),_0x5436c6);return new Promise((_0x5584b5,_0x578bef)=>{$[_0x255c('2f')](_0x5881ff,async(_0x3716e8,_0x30e70f,_0x47b3fc)=>{try{if(_0x3716e8){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+'\x20'+_0x3679dd+_0x255c('57'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+'\x20'+_0x3679dd+_0x255c('57');console[_0x255c('3')](_0x3716e8+'\x0a');}else{let _0x1426bc=JSON[_0x255c('32')](_0x47b3fc);if(_0x1426bc[_0x255c('9')]==0x1){let _0x491971=['\x30','\x31','\x32','\x33','\x34'];let _0x171c22=_0x491971[Math[_0x255c('39')](Math[_0x255c('3a')]()*_0x597cc4[_0x255c('e')])];let _0x5cf29b=_0x1426bc[_0x255c('34')][_0x255c('58')][_0x171c22][_0x255c('59')];await getAdReward(_0x255c('5a'),_0x5cf29b);}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+'\x20'+_0x3679dd+_0x255c('5b')+_0x1426bc[_0x255c('3c')]);}}}catch(_0x52ad21){console[_0x255c('3')](_0x52ad21,_0x30e70f);}finally{_0x5584b5();}});});}function getMyInfo(){let _0x122764=new Date()[_0x255c('5')]();let _0x981b4d=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('3e')+_0x122764+'\x7d');let _0x42f9e6=Post_request(_0x255c('5c'),_0x981b4d);return new Promise((_0x384a0f,_0x3a7999)=>{$[_0x255c('2f')](_0x42f9e6,async(_0x53fff8,_0x3d07eb,_0x339c38)=>{try{if(_0x53fff8){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('5d'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('5d');}else{let _0x54c09a=JSON[_0x255c('32')](_0x339c38);if(_0x54c09a[_0x255c('9')]==0x1){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('5e')+_0x54c09a[_0x255c('34')][_0x255c('5f')][_0x255c('59')]+_0x255c('60')+nick+_0x255c('61')+userCityLevel+_0x255c('62')+_0x54c09a[_0x255c('34')][_0x255c('63')][_0x255c('64')]+_0x255c('65')+_0x54c09a[_0x255c('34')][_0x255c('66')][_0x255c('67')]+_0x255c('68')+_0x54c09a[_0x255c('34')][_0x255c('66')][_0x255c('52')]+_0x255c('69')+_0x54c09a[_0x255c('34')][_0x255c('66')][_0x255c('6a')]+_0x255c('6b')+_0x54c09a[_0x255c('34')][_0x255c('6c')][_0x255c('6d')]+order+game+red+platform+AD_profit+No_name+_0x255c('6e')+_0x54c09a[_0x255c('34')][_0x255c('5f')][_0x255c('6f')]+_0x255c('70')+_0x54c09a[_0x255c('34')][_0x255c('66')][_0x255c('44')]+_0x255c('71')+_0x54c09a[_0x255c('34')][_0x255c('66')][_0x255c('72')]);if($[_0x255c('1f')]==0x1){main_user_account=_0x54c09a[_0x255c('34')][_0x255c('66')][_0x255c('72')];}else{if(dwsj_transfer){if(_0x54c09a[_0x255c('34')][_0x255c('66')][_0x255c('44')]>=0x325aa0){await transferMoney(0x2dc6c0);}}}}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('73')+_0x54c09a[_0x255c('3c')]);}}}catch(_0x1c10db){console[_0x255c('3')](_0x1c10db,_0x3d07eb);}finally{_0x384a0f();}});});}function getShopInfo(){let _0xa5490e=new Date()[_0x255c('5')]();let _0x166cb1=RSA_encryption(_0x255c('74')+user_ID+_0x255c('55')+_0xa5490e+'\x7d');let _0x28253a=Post_request(_0x255c('75'),_0x166cb1);return new Promise((_0x5d12bd,_0x2492d4)=>{$[_0x255c('2f')](_0x28253a,async(_0x24ea90,_0xf36f77,_0xea5ddd)=>{try{nick='';userCityLevel='';if(_0x24ea90){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('76'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('76');}else{let _0x14819a=JSON[_0x255c('32')](_0xea5ddd);if(_0x14819a[_0x255c('9')]==0x1){nick=_0x14819a[_0x255c('34')][_0x255c('77')][_0x255c('78')];userCityLevel=_0x14819a[_0x255c('34')][_0x255c('77')][_0x255c('79')];}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('7a')+_0x14819a[_0x255c('3c')]);}}}catch(_0x154c56){console[_0x255c('3')](_0x154c56,_0xf36f77);}finally{_0x5d12bd();}});});}function transferMoney(_0x586103){let _0x3a2f7c=new Date()[_0x255c('5')]();let _0x1779cf=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('7b')+main_user_account+_0x255c('7c')+_0x586103+_0x255c('3e')+_0x3a2f7c+'\x7d');let _0x5c3ed8=Post_request(_0x255c('7d'),_0x1779cf);return new Promise((_0x374ec9,_0x415ad5)=>{$[_0x255c('2f')](_0x5c3ed8,async(_0x5f1968,_0x515f2,_0x4becd5)=>{try{if(_0x5f1968){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('7e'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('7e');}else{let _0x5e3df7=JSON[_0x255c('32')](_0x4becd5);if(_0x5e3df7[_0x255c('9')]==0x1){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('7f')+_0x5e3df7[_0x255c('3c')]);}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('7f')+_0x5e3df7[_0x255c('3c')]);}}}catch(_0x1cc727){console[_0x255c('3')](_0x1cc727,_0x515f2);}finally{_0x374ec9();}});});}function getUserWallet(){let _0x3e182a=new Date()[_0x255c('5')]();let _0x2d857f=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('80'));let _0x4b9764=Post_request(_0x255c('81'),_0x2d857f);return new Promise((_0x5a453b,_0x3e1b71)=>{$[_0x255c('2f')](_0x4b9764,async(_0x144cc1,_0x50e10a,_0x54a713)=>{try{if(_0x144cc1){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('82'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('82');}else{let _0x1782aa=JSON[_0x255c('32')](_0x54a713);if(_0x1782aa[_0x255c('9')]==0x1){for(let _0x26e684 of _0x1782aa[_0x255c('34')]){if(_0x26e684[_0x255c('83')]==0x0){platform=_0x255c('84')+_0x26e684[_0x255c('23')]+'\uff1a'+_0x26e684[_0x255c('85')];}if(_0x26e684[_0x255c('83')]==0x1){order=_0x255c('84')+_0x26e684[_0x255c('23')]+'\uff1a'+_0x26e684[_0x255c('85')];}if(_0x26e684[_0x255c('83')]==0x2){game=_0x255c('84')+_0x26e684[_0x255c('23')]+'\uff1a'+_0x26e684[_0x255c('85')];}if(_0x26e684[_0x255c('83')]==0x3){red=_0x255c('84')+_0x26e684[_0x255c('23')]+'\uff1a'+_0x26e684[_0x255c('85')];}}}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('86')+_0x1782aa[_0x255c('3c')]);}}}catch(_0x387703){console[_0x255c('3')](_0x387703,_0x50e10a);}finally{_0x5a453b();}});});}function RevenueDetail(){let _0x4d9a67=new Date()[_0x255c('5')]();let _0x31aa48=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('80'));let _0x2a2d3d=Post_request(_0x255c('87'),_0x31aa48);return new Promise((_0xfa3762,_0x4154e5)=>{$[_0x255c('2f')](_0x2a2d3d,async(_0x2ec998,_0x105a76,_0x3d9dc7)=>{try{if(_0x2ec998){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('88'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('88');}else{let _0x36def7=JSON[_0x255c('32')](_0x3d9dc7);if(_0x36def7[_0x255c('9')]==0x1){AD_profit=_0x255c('89')+_0x36def7[_0x255c('34')][0x0][_0x255c('8a')]/0x3e8+_0x255c('8b');No_name=_0x255c('8c')+_0x36def7[_0x255c('34')][0x0][_0x255c('8d')]+_0x255c('8e')+_0x36def7[_0x255c('34')][0x0][_0x255c('8f')]+_0x255c('90');}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('91')+_0x36def7[_0x255c('3c')]);}}}catch(_0x2dc754){console[_0x255c('3')](_0x2dc754,_0x105a76);}finally{_0xfa3762();}});});}function UserWallet(){let _0x52811a=new Date()[_0x255c('5')]();let _0x367fd5=RSA_encryption(_0x255c('92')+user_ID+_0x255c('93'));let _0x22d996=Post_request(_0x255c('94'),_0x367fd5);return new Promise((_0x45456c,_0x14fc46)=>{$[_0x255c('2f')](_0x22d996,async(_0x200b89,_0x3e9e60,_0xc39172)=>{try{if(_0x200b89){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('95'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('95');}else{let _0x5a4a8f=JSON[_0x255c('32')](_0xc39172);if(_0x5a4a8f[_0x255c('9')]==0x1){if(_0x5a4a8f[_0x255c('34')][_0x255c('96')]>=0x14){await walletWithdraw();}}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('97')+_0x5a4a8f[_0x255c('3c')]);}}}catch(_0x1304d9){console[_0x255c('3')](_0x1304d9,_0x3e9e60);}finally{_0x45456c();}});});}function walletWithdraw(){let _0x32cd77=new Date()[_0x255c('5')]();let _0x318378=RSA_encryption(_0x255c('98')+user_ID+_0x255c('93'));let _0x2f7877=Post_request(_0x255c('99'),_0x318378);return new Promise((_0x29e479,_0x144d31)=>{$[_0x255c('2f')](_0x2f7877,async(_0x50b79b,_0x5604df,_0x317771)=>{try{if(_0x50b79b){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('9a'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('9a');}else{let _0x249267=JSON[_0x255c('32')](_0x317771);if(_0x249267[_0x255c('9')]==0x1){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('9b'));}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('9c')+_0x249267[_0x255c('3c')]);}}}catch(_0x5d7f38){console[_0x255c('3')](_0x5d7f38,_0x5604df);}finally{_0x29e479();}});});}function getAdReward(_0x44a8e3,_0x469bf2){let _0x22e01e=new Date()[_0x255c('5')]();let _0xa9ba11='';let _0x28bdb3='';if(_0x44a8e3==_0x255c('2b')){_0xa9ba11=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('9d')+_0x22e01e+'\x7d');_0x28bdb3='\u7b7e\u5230';}else if(_0x44a8e3==_0x255c('2a')){_0xa9ba11=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('9e')+_0x22e01e+'\x7d');_0x28bdb3='\u52a0\u901f';}else if(_0x44a8e3==_0x255c('3d')){_0xa9ba11=RSA_encryption(_0x255c('2c')+user_ID+_0x255c('9f')+_0x22e01e+'\x7d');_0x28bdb3=_0x255c('a0');}else if(_0x44a8e3==_0x255c('5a')){_0xa9ba11=RSA_encryption(_0x255c('a1')+_0x469bf2+_0x255c('a2')+user_ID+_0x255c('55')+_0x22e01e+'\x7d');_0x28bdb3='\u819c\u62dc';}let _0x32d0db=Post_request(_0x255c('a3'),_0xa9ba11);return new Promise((_0x819e42,_0x214ee1)=>{$[_0x255c('2f')](_0x32d0db,async(_0x45aa72,_0x1b3687,_0x124885)=>{try{if(_0x45aa72){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('a4')+_0x28bdb3+_0x255c('a5'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('a4')+_0x28bdb3+_0x255c('a5');console[_0x255c('3')](_0x45aa72+'\x0a');}else{let _0x2ecf2a=JSON[_0x255c('32')](_0x124885);if(_0x2ecf2a[_0x255c('9')]==0x1){if(_0x44a8e3==_0x255c('2b')){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+'\x20'+_0x28bdb3+_0x255c('a6')+_0x2ecf2a[_0x255c('34')][_0x255c('42')][_0x255c('43')][_0x255c('a7')]+_0x255c('a8')+_0x2ecf2a[_0x255c('34')][_0x255c('42')][_0x255c('43')][_0x255c('6f')]);}else if(_0x44a8e3==_0x255c('3d')){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+'\x20'+_0x28bdb3+_0x255c('a9'));}else if(_0x44a8e3==_0x255c('2a')){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+'\x20'+_0x28bdb3+_0x255c('aa'));}else if(_0x44a8e3==_0x255c('5a')){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+'\x20'+_0x28bdb3+_0x255c('ab'));}}else if(_0x2ecf2a[_0x255c('9')]==0x76f&&_0x44a8e3==_0x255c('2a')){await reward_video(_0x255c('2a'));}else if(_0x2ecf2a[_0x255c('9')]==0x4b8){if(_0x44a8e3==_0x255c('2a')){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('a4')+_0x28bdb3+_0x255c('ac')+_0x2ecf2a[_0x255c('3c')]);await get_variable(_0x255c('2a'),_0x255c('ad'));}if(_0x44a8e3==_0x255c('3d')){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('a4')+_0x28bdb3+_0x255c('ac')+_0x2ecf2a[_0x255c('3c')]);await get_variable(_0x255c('3d'),_0x255c('ad'));}}else if(_0x2ecf2a[_0x255c('9')]==0x57f&&_0x44a8e3==_0x255c('5a')){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('a4')+_0x28bdb3+_0x255c('ac')+_0x2ecf2a[_0x255c('3c')]);await get_variable(_0x255c('5a'),_0x255c('ad'));}else if(_0x2ecf2a[_0x255c('9')]==0x76f&&_0x44a8e3==_0x255c('2a')){await reward_video(_0x255c('2a'));}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('a4')+_0x28bdb3+_0x255c('ac')+_0x2ecf2a[_0x255c('3c')]);}}}catch(_0x424f07){console[_0x255c('3')](_0x424f07,_0x1b3687);}finally{_0x819e42();}});});}function reward_video(_0x5c1d52){if(!video_data){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('ae'));}else{let _0x27027e=video_data[_0x255c('af')](/[\r\n]/g,'');let _0x42d616={'\x75\x72\x6c':_0x255c('b0'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x255c('b1'),'Content-Type':_0x255c('b2'),'Content-Length':_0x27027e[_0x255c('e')],'Accept-Encoding':_0x255c('b3'),'User-Agent':_0x255c('b4')},'\x62\x6f\x64\x79':_0x27027e};return new Promise((_0x1818f4,_0x224d3b)=>{$[_0x255c('2f')](_0x42d616,async(_0x56ee56,_0x481e2a,_0x4bb1f2)=>{try{if(_0x56ee56){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('b5'));subTitle+=_0x255c('30')+$[_0x255c('1f')]+_0x255c('b5');console[_0x255c('3')](_0x56ee56+'\x0a');}else{if(_0x4bb1f2[_0x255c('b6')](_0x255c('b7'))>-0x1){let _0x60e8=JSON[_0x255c('32')](_0x4bb1f2);if(_0x60e8[_0x255c('b7')]==0x3){await getAdReward(_0x5c1d52);}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('b8'));}}else{let _0x265593=JSON[_0x255c('32')](_0x4bb1f2);if(_0x265593[_0x255c('9')]==0xea67){await getAdReward(_0x5c1d52);}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('b8'));}}}}catch(_0x4af640){console[_0x255c('3')](_0x4af640,_0x481e2a);}finally{_0x1818f4();}});});}}function upscript(){let _0x1825e5={'\x75\x72\x6c':scripturl,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x255c('b9'),'User-Agent':_0x255c('ba')}};return new Promise((_0x1dda72,_0x139ba1)=>{$[_0x255c('bb')](_0x1825e5,async(_0x1a7416,_0x465879,_0x5c0058)=>{try{if(_0x1a7416){console[_0x255c('3')](_0x255c('bc'));subTitle+=_0x255c('bc');}else{if(_0x5c0058[_0x255c('b6')](_0x255c('bd'))>-0x1){if($[_0x255c('23')][_0x255c('be')](/版本:(\S*)/)[0x1]!=_0x5c0058[_0x255c('be')](/版本:(\S*)'/)[0x1]){let _0x3c9284=__dirname+(_0x255c('bf')+$[_0x255c('23')][_0x255c('be')](/版本:(\S*)/)[0x1][_0x255c('af')](new RegExp('\x2f','\x67\x69'),'\x5f')+_0x255c('c0'));fs[_0x255c('c1')](_0x3c9284,fs[_0x255c('c2')](__filename));fs[_0x255c('c3')](__filename,_0x5c0058,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x150c7f){if(_0x150c7f){console[_0x255c('3')](_0x150c7f);}});}}}}catch(_0x4d4bc6){console[_0x255c('3')](_0x4d4bc6,_0x465879);}finally{_0x1dda72();}});});}function Post_request(_0x52af82,_0x2dba0a,_0x3b3f01){let _0x59488b=_0x255c('c4');return{'\x75\x72\x6c':''+_0x59488b+_0x52af82,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x255c('c5'),'Connection':_0x255c('c6'),'Content-Length':_0x2dba0a[_0x255c('e')],'Pragma':_0x255c('c7'),'Cache-Control':_0x255c('c7'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x255c('c8'),'Accept':_0x255c('c9'),'Origin':_0x255c('ca'),'X-Requested-With':_0x255c('cb'),'Sec-Fetch-Site':_0x255c('cc'),'Sec-Fetch-Mode':_0x255c('cd'),'Sec-Fetch-Dest':_0x255c('ce'),'Referer':_0x255c('cf'),'Accept-Encoding':_0x255c('d0'),'Accept-Language':_0x255c('d1')},'\x62\x6f\x64\x79':_0x2dba0a};};function Get_request(_0x33e399){let _0x396736=_0x255c('c4');return{'\x75\x72\x6c':''+_0x396736+_0x33e399,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x255c('c5'),'Connection':_0x255c('c6'),'Content-Length':0x0,'Pragma':_0x255c('c7'),'Cache-Control':_0x255c('c7'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x255c('c8'),'Accept':_0x255c('c9'),'Origin':_0x255c('ca'),'X-Requested-With':_0x255c('cb'),'Sec-Fetch-Site':_0x255c('cc'),'Sec-Fetch-Mode':_0x255c('cd'),'Sec-Fetch-Dest':_0x255c('ce'),'Referer':_0x255c('cf'),'Accept-Encoding':_0x255c('d0'),'Accept-Language':_0x255c('d1')}};};function RSA_encryption(_0x329f95){var _0x3427f2=new RSA_js();_0x3427f2[_0x255c('d2')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x255c('d3')});_0x3427f2[_0x255c('d4')](_0x255c('d5'),_0x255c('d6'));var _0x281254=_0x3427f2[_0x255c('d7')](_0x329f95,_0x255c('d8'));return _0x281254;}function get_variable(_0x550b99,_0xffe12c){let _0x5e35f2=$[_0x255c('0')]()?require(_0x255c('2')):'';if(!_0x5e35f2){console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('d9'));return;}else{_0x5e35f2=JSON[_0x255c('da')](_0x5e35f2);}let _0x388660=JSON[_0x255c('da')](current);let _0x5369fd=_0x5e35f2[_0x255c('db')](0x0,_0x5e35f2[_0x255c('b6')](_0x388660));let _0x417b52=_0x5e35f2[_0x255c('e')]-_0x5369fd[_0x255c('e')]-_0x388660[_0x255c('e')];let _0x15d3bd=_0x5e35f2[_0x255c('db')](_0x5e35f2[_0x255c('e')]-_0x417b52,_0x5e35f2[_0x255c('e')]);let _0x30ef24='';if(_0x550b99==_0x255c('2a')&&_0xffe12c==_0x255c('dc')){_0x30ef24=JSON[_0x255c('32')](JSON[_0x255c('da')](_0x388660[_0x255c('af')](new RegExp(_0x255c('dd'),'\x67\x69'),_0x255c('de'))));}else if(_0x550b99==_0x255c('5a')&&_0xffe12c==_0x255c('dc')){_0x30ef24=JSON[_0x255c('32')](JSON[_0x255c('da')](_0x388660[_0x255c('af')](new RegExp(_0x255c('df'),'\x67\x69'),_0x255c('e0'))));}else if(_0x550b99==_0x255c('3d')&&_0xffe12c==_0x255c('dc')){_0x30ef24=JSON[_0x255c('32')](JSON[_0x255c('da')](_0x388660[_0x255c('af')](new RegExp(_0x255c('e1'),'\x67\x69'),_0x255c('e2'))));}else if(_0x550b99==_0x255c('2a')&&_0xffe12c==_0x255c('ad')){_0x30ef24=JSON[_0x255c('32')](JSON[_0x255c('da')](_0x388660[_0x255c('af')](new RegExp(_0x255c('e3'),'\x67\x69'),_0x255c('e4'))));}else if(_0x550b99==_0x255c('5a')&&_0xffe12c==_0x255c('ad')){_0x30ef24=JSON[_0x255c('32')](JSON[_0x255c('da')](_0x388660[_0x255c('af')](new RegExp(_0x255c('e0'),'\x67\x69'),_0x255c('df'))));}else if(_0x550b99==_0x255c('3d')&&_0xffe12c==_0x255c('ad')){_0x30ef24=JSON[_0x255c('32')](JSON[_0x255c('da')](_0x388660[_0x255c('af')](new RegExp(_0x255c('e2'),'\x67\x69'),_0x255c('e1'))));}fs[_0x255c('c3')](_0x255c('2'),_0x255c('e5')+_0x5369fd+_0x30ef24+_0x15d3bd,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x2692a3){if(_0x2692a3){console[_0x255c('3')](_0x2692a3);}else{console[_0x255c('3')](_0x255c('30')+$[_0x255c('1f')]+_0x255c('e6'));}});};_0xodC='jsjiami.com.v6';



function Env(t, e) {
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