/**
 * ??????
 */
import { BrowserWindowConstructorOptions } from 'electron';
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
    export let mainUrl: string = urlFormat('../html/index.html')
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
