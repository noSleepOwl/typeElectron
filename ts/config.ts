/**
 * ??????
 */
import { BrowserWindowConstructorOptions, BrowserWindow } from 'electron';
import * as url from 'url';
import * as path from 'path';


namespace Option {
    //  配置信息
    export let win: BrowserWindowConstructorOptions = {
        width: 800,
        height: 600,
        title: '测试工具',
        minHeight: 800,
        minWidth: 600
    }
    // 格式化请求地址
    let mainUrl: string = urlFormat('../html/index.html')
    // 创建窗口
    export function runWindow(win: BrowserWindow | null) {
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
}
// 地址函数返回
function urlFormat(urlStr: string) {
    return url.format({
        pathname: path.join(__dirname, urlStr),
        protocol: 'file',
        slashes: true
    })
}
// 默认导出配置项目
export default Option;
