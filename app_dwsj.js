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


const $ = new Env('【电玩世界】版本:22/03/01_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodo='jsjiami.com.v6',_0xodo_=['_0xodo'],_0x2767=[_0xodo,'\x69\x73\x4e\x6f\x64\x65','\x6e\x6f\x64\x65\x2d\x72\x73\x61','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x62\x75\x69\x6c\x64','\x73\x69\x67\x6e\x74\x69\x6d\x65','\x55\x50\x62\x75\x69\x6c\x64','\x77\x6f\x72\x73\x68\x69\x70','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65','\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x74\x6f\x75','\x73\x74\x61\x72\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u6b64\u65f6\u95f4\u6bb5\u884c\u52a8\u6b21\u6570\u548c\u589e\u52a0\u6b21\u6570\u5df2\u7528\u5c3d','\x73\x69\x67\x6e','\x76\x69\x65\x77','\x20\u52a0\u901f\u3011\x3a\x20\u4eca\u65e5\u52a0\u901f\u6b21\u6570\u5df2\u7528\u5c3d','\x20\u819c\u62dc\u3011\x3a\x20\u4eca\u65e5\u819c\u62dc\u6b21\u6570\u5df2\u7528\u5c3d','\x7b\x22\x75\x69\x64\x22\x3a','\x2c\x22\x69\x73\x41\x64\x64\x52\x6f\x6c\x6c\x22\x3a\x30\x7d','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x72\x65\x73\x74\x69\x67\x65','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x7b\x22\x70\x61\x67\x65\x22\x3a\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x22','\x22\x2c\x22\x75\x69\x64\x22\x3a\x22','\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x31\x35\x35\x30\x32\x7d','\x67\x65\x74\x52\x61\x6e\x6b\x42\x79\x54\x79\x70\x65','\u6392\u884c\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x61\x6e\x6b','\x75\x69\x64','\x42\x75\x73\x69\x6e\x65\x73\x73','\u6392\u884c\u3011\x3a\x20','\x67\x65\x74\x55\x73\x65\x72\x57\x61\x6c\x6c\x65\x74\x50\x61\x67\x65','\x67\x65\x74\x4d\x79\x49\x6e\x66\x6f','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x31\x22\x7d','\x2c\x22\x69\x6e\x64\x65\x78\x22\x3a\x31\x32\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x33\x22\x7d','\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x7d','\u589e\u52a0\u884c\u52a8','\x7b\x22\x74\x79\x70\x65\x22\x3a\x34\x2c\x22\x74\x61\x72\x67\x65\x74\x55\x69\x64\x22\x3a','\x2c\x22\x75\x69\x64\x22\x3a\x22','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u89c2\u770b','\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f\x0a\x2d\x2d\x2d\u589e\u52a0\u884c\u52a8\u529b\uff1a','\x64\x69\x63\x65\x4e\x75\x6d','\x0a\x2d\x2d\x2d\u589e\u52a0\u94bb\u77f3\uff1a','\x75\x73\x61\x62\x6c\x65\x53\x63\x6f\x72\x65','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u5e7f\u544a\u3011\x3a\x20','\x65\x6e\x64','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x70\x6b\x63\x73\x31','\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79','\x4d\x49\x47\x66\x4d\x41\x30\x47\x43\x53\x71\x47\x53\x49\x62\x33\x44\x51\x45\x42\x41\x51\x55\x41\x41\x34\x47\x4e\x41\x44\x43\x42\x69\x51\x4b\x42\x67\x51\x43\x6c\x54\x5a\x70\x49\x37\x48\x74\x6b\x7a\x43\x2f\x63\x2b\x41\x48\x54\x73\x6d\x65\x31\x5a\x68\x72\x65\x72\x37\x6a\x61\x78\x38\x47\x52\x67\x55\x70\x79\x59\x78\x58\x41\x76\x6c\x2f\x6b\x75\x77\x6a\x4e\x43\x56\x42\x66\x31\x72\x37\x38\x41\x68\x34\x64\x46\x51\x6f\x6e\x4b\x77\x56\x45\x33\x6a\x66\x33\x78\x66\x4d\x6d\x4a\x54\x2f\x32\x47\x32\x7a\x4d\x2b\x4a\x61\x62\x6a\x75\x48\x76\x63\x32\x57\x6e\x79\x6e\x77\x58\x64\x58\x52\x55\x63\x73\x31\x32\x6f\x4a\x55\x59\x57\x4b\x74\x67\x68\x2b\x6f\x54\x6d\x55\x64\x46\x48\x2f\x59\x57\x4c\x6c\x48\x52\x66\x59\x39\x42\x79\x6f\x6d\x75\x51\x2f\x6b\x68\x73\x72\x5a\x52\x37\x61\x56\x31\x31\x4e\x58\x4c\x38\x41\x44\x2b\x37\x71\x51\x64\x35\x72\x37\x65\x4f\x51\x49\x44\x41\x51\x41\x42','\x70\x6b\x63\x73\x38\x2d\x70\x75\x62\x6c\x69\x63','\x65\x6e\x63\x72\x79\x70\x74','\x62\x61\x73\x65\x36\x34','\x20\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3011\x3a\x20\u914d\u7f6e\u6587\u4ef6\u4e3a\u7a7a\u6216\u8005\u6570\u636e\u5f02\u5e38','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x30','\x61\x63\x63\x65\x6c\x65\x72\x61\x74\x65\x22\x3a\x31','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x30','\x77\x6f\x72\x73\x68\x69\x70\x22\x3a\x31','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x30','\x61\x63\x74\x69\x6f\x6e\x22\x3a\x31','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d\x20','\x6a\x4c\x73\x41\x6a\x69\x61\x54\x4a\x65\x6d\x69\x4c\x6e\x56\x70\x44\x2e\x63\x56\x6f\x49\x59\x42\x4d\x52\x6d\x6e\x2e\x76\x36\x3d\x3d'];function _0x39b5(_0x5790d7,_0x2dd27c){_0x5790d7=~~'0x'['concat'](_0x5790d7['slice'](0x0));var _0x1048a9=_0x2767[_0x5790d7];return _0x1048a9;};(function(_0x445aff,_0x5ed800){var _0x1acd8f=0x0;for(_0x5ed800=_0x445aff['shift'](_0x1acd8f>>0x2);_0x5ed800&&_0x5ed800!==(_0x445aff['pop'](_0x1acd8f>>0x3)+'')['replace'](/[LATJeLnVpDVIYBMRn=]/g,'');_0x1acd8f++){_0x1acd8f=_0x1acd8f^0xd41fc;}}(_0x2767,_0x39b5));const RSA_js=$[_0x39b5('0')]()?require(_0x39b5('1')):'';const fs=$[_0x39b5('0')]()?require('\x66\x73'):'';const dwsj_variable=$[_0x39b5('0')]()?require(_0x39b5('2')):'';!(async()=>{console[_0x39b5('3')](_0x39b5('4')+new Date(new Date()[_0x39b5('5')]()+new Date()[_0x39b5('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x39b5('7')]()+_0x39b5('8'));if(dwsj_variable[_0x39b5('9')]!==0xc8){console[_0x39b5('3')](_0x39b5('a'));return;}console[_0x39b5('3')](_0x39b5('b')+dwsj_variable[_0x39b5('c')][_0x39b5('d')][_0x39b5('e')]+_0x39b5('f'));subTitle='';for(i=0x0;i<dwsj_variable[_0x39b5('c')][_0x39b5('d')][_0x39b5('e')];i++){current=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i];video_data=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i][_0x39b5('10')];user_ID=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i][_0x39b5('11')];dwsj_token=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i][_0x39b5('12')];dwsj_UA=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i]['\x55\x41'];dwsj_build=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i][_0x39b5('13')];dwsj_signtime=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i][_0x39b5('14')];dwsj_UPbuild=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i][_0x39b5('15')];dwsj_Business=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i][_0x39b5('16')];dwsj_viewnum=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i][_0x39b5('17')];dwsj_action=dwsj_variable[_0x39b5('c')][_0x39b5('d')][i][_0x39b5('18')];notice=dwsj_variable[_0x39b5('c')][_0x39b5('19')][0x0][_0x39b5('1a')];if(!dwsj_UA){dwsj_UA=_0x39b5('1b');}await get_QR();$[_0x39b5('1c')]=i+0x1;console[_0x39b5('3')](_0x39b5('1d')+$[_0x39b5('1c')]+_0x39b5('1e'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x39b5('1f')]($[_0x39b5('20')],subTitle);}}}})()[_0x39b5('21')](_0x1d257d=>$[_0x39b5('22')](_0x1d257d))[_0x39b5('23')](()=>$[_0x39b5('24')]());async function implement(){if(dwsj_action==0x1){if(new Date()[_0x39b5('25')]()==0x0||new Date()[_0x39b5('25')]()==0xc||new Date()[_0x39b5('25')]()==0x14){if(new Date()[_0x39b5('26')]()<0x1e){await get_variable(_0x39b5('27'),_0x39b5('28'));await rollPoint();}}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('2a'));await getBuildingEarn();}}else{await rollPoint();}let _0x127353=new Date()[_0x39b5('25')]();let _0x1b1976=new Date()[_0x39b5('26')]();if(_0x127353==dwsj_signtime&&_0x1b1976<0xa){await getAdReward(_0x39b5('2b'));}if(dwsj_viewnum==0x0){await getAdReward(_0x39b5('2c'));}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('2d'));}if(dwsj_Business==0x0){await getRankByType();}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('2e'));}}function rollPoint(){let _0x2f2378=RSA_encryption(_0x39b5('2f')+user_ID+_0x39b5('30'));let _0x4e2117=Post_request(_0x39b5('31'),_0x2f2378);return new Promise((_0x17bcbe,_0x30261c)=>{$[_0x39b5('32')](_0x4e2117,async(_0x4dd3ca,_0x528cba,_0x343afc)=>{try{if(_0x4dd3ca){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('33'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('33');console[_0x39b5('3')](_0x4dd3ca+'\x0a');}else{let _0x1a9efb=JSON[_0x39b5('34')](_0x343afc);if(_0x1a9efb[_0x39b5('9')]==0x1){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('35')+_0x1a9efb[_0x39b5('36')][_0x39b5('37')][_0x39b5('38')]+_0x39b5('39'));await addGoodsBuff();await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}}else if(_0x1a9efb[_0x39b5('9')]==0x515||_0x1a9efb[_0x39b5('3a')]==_0x39b5('3b')){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('3c')+_0x1a9efb[_0x39b5('3a')]);await getAdReward(_0x39b5('27'));}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('3c')+_0x1a9efb[_0x39b5('3a')]);}}}catch(_0x3cf976){console[_0x39b5('3')](_0x3cf976,_0x528cba);}finally{_0x17bcbe();}});});}function addNewBuilding(){let _0x33052e=RSA_encryption(_0x39b5('2f')+user_ID+'\x7d');let _0x4f1c80=Post_request(_0x39b5('3d'),_0x33052e);return new Promise((_0x90278c,_0x3dc1bf)=>{$[_0x39b5('32')](_0x4f1c80,async(_0x228051,_0x116de1,_0x3504c1)=>{try{if(_0x228051){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('3e'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('3e');}else{let _0x4c6a99=JSON[_0x39b5('34')](_0x3504c1);if(_0x4c6a99[_0x39b5('9')]==0x1){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('3f')+_0x4c6a99[_0x39b5('36')][_0x39b5('40')][_0x39b5('41')][_0x39b5('42')]+_0x39b5('39'));}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('43')+_0x4c6a99[_0x39b5('3a')]);}}}catch(_0x10b6ef){console[_0x39b5('3')](_0x10b6ef,_0x116de1);}finally{_0x90278c();}});});}function getBuildingEarn(){let _0x576508=RSA_encryption(_0x39b5('2f')+user_ID+'\x7d');let _0x494188=Post_request(_0x39b5('44'),_0x576508);return new Promise((_0x63c09a,_0x42b5af)=>{$[_0x39b5('32')](_0x494188,async(_0xc6541,_0xc84a48,_0x31fe7b)=>{try{if(_0xc6541){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('45'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('45');}else{let _0x132f8e=JSON[_0x39b5('34')](_0x31fe7b);if(_0x132f8e[_0x39b5('9')]==0x1){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('46')+_0x132f8e[_0x39b5('36')][_0x39b5('40')][_0x39b5('41')][_0x39b5('42')]+_0x39b5('39'));}else if(_0x132f8e[_0x39b5('9')]==0x4bf||_0x132f8e[_0x39b5('3a')]==_0x39b5('47')){if(dwsj_build){await addNewBuilding();}}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('48')+_0x132f8e[_0x39b5('3a')]);}}}catch(_0x40ba6f){console[_0x39b5('3')](_0x40ba6f,_0xc84a48);}finally{_0x63c09a();}});});}function buildingLevelUp(){let _0x77f501=RSA_encryption(_0x39b5('2f')+user_ID+'\x7d');let _0x38e34a=Post_request(_0x39b5('49'),_0x77f501);return new Promise((_0x51e217,_0x511f5d)=>{$[_0x39b5('32')](_0x38e34a,async(_0x2ed4b9,_0x340e73,_0x145eef)=>{try{if(_0x2ed4b9){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4a'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4a');}else{let _0x40172d=JSON[_0x39b5('34')](_0x145eef);if(_0x40172d[_0x39b5('9')]==0x1){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4b')+_0x40172d[_0x39b5('36')][_0x39b5('40')][_0x39b5('41')][_0x39b5('42')]+_0x39b5('39'));}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4c')+_0x40172d[_0x39b5('3a')]);}}}catch(_0x5f45d1){console[_0x39b5('3')](_0x5f45d1,_0x340e73);}finally{_0x51e217();}});});}function addGoodsBuff(){let _0x6a6ab7=RSA_encryption(_0x39b5('2f')+user_ID+'\x7d');let _0xd9728d=Post_request(_0x39b5('4d'),_0x6a6ab7);return new Promise((_0x223b31,_0x52dfa2)=>{$[_0x39b5('32')](_0xd9728d,async(_0x2b5005,_0x5e9db3,_0x1a8a78)=>{try{if(_0x2b5005){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4e'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4e');}else{}}catch(_0x2bb434){console[_0x39b5('3')](_0x2bb434,_0x5e9db3);}finally{_0x223b31();}});});}function getRankByType(){let _0x4188ca=[_0x39b5('42'),_0x39b5('4f'),_0x39b5('4f')];let _0x2f9805='';let _0x471b58=_0x4188ca[Math[_0x39b5('50')](Math[_0x39b5('51')]()*_0x4188ca[_0x39b5('e')])];if(_0x471b58==_0x39b5('42')){_0x2f9805='\u91d1\u5e01';}else if(_0x471b58==_0x39b5('4f')){_0x2f9805='\u58f0\u671b';}if(_0x471b58==_0x39b5('4f')){_0x2f9805='\u6536\u76ca';}let _0x41a0c8=RSA_encryption(_0x39b5('52')+_0x471b58+_0x39b5('53')+user_ID+_0x39b5('54'));let _0x6e1ad7=Post_request(_0x39b5('55'),_0x41a0c8);return new Promise((_0x482b6a,_0x54a827)=>{$[_0x39b5('32')](_0x6e1ad7,async(_0x3c878b,_0xbb92a4,_0x27670f)=>{try{if(_0x3c878b){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+'\x20'+_0x2f9805+_0x39b5('56'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+'\x20'+_0x2f9805+_0x39b5('56');console[_0x39b5('3')](_0x3c878b+'\x0a');}else{let _0x1f5713=JSON[_0x39b5('34')](_0x27670f);if(_0x1f5713[_0x39b5('9')]==0x1){let _0x205267=['\x30','\x31','\x32','\x33','\x34'];let _0x16f75e=_0x205267[Math[_0x39b5('50')](Math[_0x39b5('51')]()*_0x4188ca[_0x39b5('e')])];let _0x35d518=_0x1f5713[_0x39b5('36')][_0x39b5('57')][_0x16f75e][_0x39b5('58')];await getAdReward(_0x39b5('59'),_0x35d518);}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+'\x20'+_0x2f9805+_0x39b5('5a')+_0x1f5713[_0x39b5('3a')]);}}}catch(_0x588a99){console[_0x39b5('3')](_0x588a99,_0xbb92a4);}finally{_0x482b6a();}});});}function getUserWalletPage(){let _0x23fc68=RSA_encryption(_0x39b5('2f')+user_ID+'\x7d');let _0x10cb44=Post_request(_0x39b5('5b'),_0x23fc68);return new Promise((_0x2a207d,_0x3ad002)=>{$[_0x39b5('32')](_0x10cb44,async(_0x1340f1,_0x140cd1,_0x3f2a06)=>{try{if(_0x1340f1){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4e'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4e');}else{console[_0x39b5('3')](_0x3f2a06);}}catch(_0x39877e){console[_0x39b5('3')](_0x39877e,_0x140cd1);}finally{_0x2a207d();}});});}function getMyInfo(){let _0x2804b3=RSA_encryption(_0x39b5('2f')+user_ID+'\x7d');let _0x38606f=Post_request(_0x39b5('5c'),_0x2804b3);return new Promise((_0x2cbc84,_0x255694)=>{$[_0x39b5('32')](_0x38606f,async(_0x536ec3,_0x3202aa,_0x3d9262)=>{try{if(_0x536ec3){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4e'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('4e');}else{console[_0x39b5('3')](_0x3d9262);}}catch(_0x5e57ab){console[_0x39b5('3')](_0x5e57ab,_0x3202aa);}finally{_0x2cbc84();}});});}function getAdReward(_0x4031a5,_0xed945d){let _0x1c4590='';let _0x5c0c1d='';if(_0x4031a5==_0x39b5('2b')){_0x1c4590=RSA_encryption(_0x39b5('2f')+user_ID+_0x39b5('5d'));_0x5c0c1d='\u7b7e\u5230';}else if(_0x4031a5==_0x39b5('2c')){_0x1c4590=RSA_encryption(_0x39b5('2f')+user_ID+_0x39b5('5e'));_0x5c0c1d='\u52a0\u901f';}else if(_0x4031a5==_0x39b5('27')){_0x1c4590=RSA_encryption(_0x39b5('2f')+user_ID+_0x39b5('5f'));_0x5c0c1d=_0x39b5('60');}else if(_0x4031a5==_0x39b5('59')){_0x1c4590=RSA_encryption(_0x39b5('61')+_0xed945d+_0x39b5('62')+user_ID+_0x39b5('54'));_0x5c0c1d='\u819c\u62dc';}let _0x387013=Post_request(_0x39b5('63'),_0x1c4590);return new Promise((_0x2d7435,_0x411e19)=>{$[_0x39b5('32')](_0x387013,async(_0x3e468f,_0x2127a9,_0x226044)=>{try{if(_0x3e468f){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('64')+_0x5c0c1d+_0x39b5('65'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('64')+_0x5c0c1d+_0x39b5('65');console[_0x39b5('3')](_0x3e468f+'\x0a');}else{console[_0x39b5('3')](_0x226044);let _0x363aba=JSON[_0x39b5('34')](_0x226044);if(_0x363aba[_0x39b5('9')]==0x1){if(_0x4031a5==_0x39b5('2b')){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+'\x20'+_0x5c0c1d+_0x39b5('66')+_0x363aba[_0x39b5('36')][_0x39b5('40')][_0x39b5('41')][_0x39b5('67')]+_0x39b5('68')+_0x363aba[_0x39b5('36')][_0x39b5('40')][_0x39b5('41')][_0x39b5('69')]);}else if(_0x4031a5==_0x39b5('27')){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+'\x20'+_0x5c0c1d+_0x39b5('6a'));}else if(_0x4031a5==_0x39b5('2c')){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+'\x20'+_0x5c0c1d+_0x39b5('6b'));}else if(_0x4031a5==_0x39b5('59')){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+'\x20'+_0x5c0c1d+_0x39b5('6c'));}}else if(_0x363aba[_0x39b5('9')]==0x4b8){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('64')+_0x5c0c1d+_0x39b5('6d')+_0x363aba[_0x39b5('3a')]);if(_0x4031a5==_0x39b5('2c')){await get_variable(_0x39b5('2c'));}if(_0x4031a5==_0x39b5('27')){await get_variable(_0x39b5('27'),_0x39b5('6e'));}}else if(_0x363aba[_0x39b5('9')]==0x57f&&_0x4031a5==_0x39b5('59')){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('64')+_0x5c0c1d+_0x39b5('6d')+_0x363aba[_0x39b5('3a')]);await get_variable(_0x39b5('59'));}else if(_0x363aba[_0x39b5('9')]==0x76f&&_0x4031a5==_0x39b5('2c')){await reward_video(_0x39b5('2c'));}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('64')+_0x5c0c1d+_0x39b5('6d')+_0x363aba[_0x39b5('3a')]);}}}catch(_0x4fa55d){console[_0x39b5('3')](_0x4fa55d,_0x2127a9);}finally{_0x2d7435();}});});}function reward_video(_0x5626ea){let _0x4a5214=video_data[_0x39b5('6f')](/[\r\n]/g,'');let _0x4e4675={'\x75\x72\x6c':_0x39b5('70'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x39b5('71'),'Content-Type':_0x39b5('72'),'Content-Length':_0x4a5214[_0x39b5('e')],'Accept-Encoding':_0x39b5('73'),'User-Agent':_0x39b5('74')},'\x62\x6f\x64\x79':_0x4a5214};return new Promise((_0xfbf820,_0x55e1dc)=>{$[_0x39b5('32')](_0x4e4675,async(_0x13e2d5,_0x2282c7,_0x265f70)=>{try{if(_0x13e2d5){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('75'));subTitle+=_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('75');console[_0x39b5('3')](_0x13e2d5+'\x0a');}else{if(_0x265f70[_0x39b5('76')](_0x39b5('77'))>-0x1){let _0x2101a9=JSON[_0x39b5('34')](_0x265f70);if(_0x2101a9[_0x39b5('77')]==0x3){await getAdReward(_0x5626ea);}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('78'));}}else{let _0x48562d=JSON[_0x39b5('34')](_0x265f70);if(_0x48562d[_0x39b5('9')]==0xea67){await getAdReward(_0x5626ea);}else{console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('78'));}}}}catch(_0x314dc1){console[_0x39b5('3')](_0x314dc1,_0x2282c7);}finally{_0xfbf820();}});});}function Post_request(_0x3f4fcf,_0xd682b4){return{'\x75\x72\x6c':_0x39b5('79')+_0x3f4fcf,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x39b5('7a'),'Connection':_0x39b5('7b'),'Content-Length':_0xd682b4[_0x39b5('e')],'Pragma':_0x39b5('7c'),'Cache-Control':_0x39b5('7c'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x39b5('7d'),'Accept':_0x39b5('7e'),'Origin':_0x39b5('7f'),'X-Requested-With':_0x39b5('80'),'Sec-Fetch-Site':_0x39b5('81'),'Sec-Fetch-Mode':_0x39b5('82'),'Sec-Fetch-Dest':_0x39b5('83'),'Referer':_0x39b5('84'),'Accept-Encoding':_0x39b5('85'),'Accept-Language':_0x39b5('86')},'\x62\x6f\x64\x79':_0xd682b4};};function Get_request(_0x15fcaa){return{'\x75\x72\x6c':_0x39b5('79')+_0x15fcaa,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x39b5('7a'),'Connection':_0x39b5('7b'),'Content-Length':0x0,'Pragma':_0x39b5('7c'),'Cache-Control':_0x39b5('7c'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x39b5('7d'),'Accept':_0x39b5('7e'),'Origin':_0x39b5('7f'),'X-Requested-With':_0x39b5('80'),'Sec-Fetch-Site':_0x39b5('81'),'Sec-Fetch-Mode':_0x39b5('82'),'Sec-Fetch-Dest':_0x39b5('83'),'Referer':_0x39b5('84'),'Accept-Encoding':_0x39b5('85'),'Accept-Language':_0x39b5('86')}};};function RSA_encryption(_0x27e820){var _0x9fa94c=new RSA_js();_0x9fa94c[_0x39b5('87')]({'\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x53\x63\x68\x65\x6d\x65':_0x39b5('88')});_0x9fa94c[_0x39b5('89')](_0x39b5('8a'),_0x39b5('8b'));var _0x539d2d=_0x9fa94c[_0x39b5('8c')](_0x27e820,_0x39b5('8d'));return _0x539d2d;}function get_variable(_0x282799,_0x1221fa){let _0x11a624=$[_0x39b5('0')]()?require(_0x39b5('2')):'';if(!_0x11a624){console[_0x39b5('3')](_0x39b5('29')+$[_0x39b5('1c')]+_0x39b5('8e'));return;}else{_0x11a624=JSON[_0x39b5('8f')](_0x11a624);}let _0x704733=JSON[_0x39b5('8f')](current);let _0x36854c=_0x11a624[_0x39b5('90')](0x0,_0x11a624[_0x39b5('76')](_0x704733));let _0x269dd1=_0x11a624[_0x39b5('e')]-_0x36854c[_0x39b5('e')]-_0x704733[_0x39b5('e')];let _0x38a7ed=_0x11a624[_0x39b5('90')](_0x11a624[_0x39b5('e')]-_0x269dd1,_0x11a624[_0x39b5('e')]);let _0x11f0a0='';if(_0x282799==_0x39b5('2c')){_0x11f0a0=JSON[_0x39b5('34')](JSON[_0x39b5('8f')](_0x704733[_0x39b5('6f')](new RegExp(_0x39b5('91'),'\x67\x69'),_0x39b5('92'))));}else if(_0x282799==_0x39b5('59')){_0x11f0a0=JSON[_0x39b5('34')](JSON[_0x39b5('8f')](_0x704733[_0x39b5('6f')](new RegExp(_0x39b5('93'),'\x67\x69'),_0x39b5('94'))));}else if(_0x282799==_0x39b5('27')&&_0x1221fa==_0x39b5('6e')){_0x11f0a0=JSON[_0x39b5('34')](JSON[_0x39b5('8f')](_0x704733[_0x39b5('6f')](new RegExp(_0x39b5('95'),'\x67\x69'),_0x39b5('96'))));}else if(_0x282799==_0x39b5('27')&&_0x1221fa==_0x39b5('28')){_0x11f0a0=JSON[_0x39b5('34')](JSON[_0x39b5('8f')](_0x704733[_0x39b5('6f')](new RegExp(_0x39b5('96'),'\x67\x69'),_0x39b5('95'))));}fs[_0x39b5('97')](_0x39b5('2'),_0x39b5('98')+_0x36854c+_0x11f0a0+_0x38a7ed,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x3532cc){if(_0x3532cc){console[_0x39b5('3')](_0x3532cc);}});};_0xodo='jsjiami.com.v6';


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