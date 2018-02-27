"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const path = require("path");
var Option;
(function (Option) {
    //  配置信息
    Option.win = {
        width: 800,
        height: 600,
        title: '测试工具',
        minHeight: 800,
        minWidth: 600
    };
    // 格式化请求地址
    let mainUrl = urlFormat('../html/index.html');
    // 创建窗口
    function runWindow(win) {
        if (win != null) {
            //打开控制台
            win.webContents.openDevTools();
            // 读取页面
            win.loadURL(mainUrl);
            //绑定事件
            win.on('close', () => {
                win = null;
            });
        }
    }
    Option.runWindow = runWindow;
})(Option || (Option = {}));
// 地址函数返回
function urlFormat(urlStr) {
    return url.format({
        pathname: path.join(__dirname, urlStr),
        protocol: 'file',
        slashes: true
    });
}
// 默认导出配置项目
exports.default = Option;
//# sourceMappingURL=config.js.map