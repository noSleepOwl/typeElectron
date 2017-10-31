import { BrowserWindowConstructorOptions } from 'electron';
import * as url from 'url';
import * as path from 'path';
interface Option {
    win: BrowserWindowConstructorOptions;
    mainUrl: string;
}


namespace Option {
    let win: BrowserWindowConstructorOptions = {

    }
    let mainUrl: string = urlFormat('..html/index.html')
}
function urlFormat(urlStr: string) {
    return url.format({
        pathname: path.join(__dirname, urlStr),
        protocol: 'file',
        slashes: true
    })
}

let option: Option = {
    win: {
        width: 800,
        height: 600,
        title: '测试工具',
        minHeight: 800,
        minWidth: 600
    },
    mainUrl: urlFormat('../html/index.html')
};

export default option;
