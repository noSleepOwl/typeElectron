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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUc3QixJQUFVLE1BQU0sQ0F3QmY7QUF4QkQsV0FBVSxNQUFNO0lBQ1osUUFBUTtJQUNHLFVBQUcsR0FBb0M7UUFDOUMsS0FBSyxFQUFFLEdBQUc7UUFDVixNQUFNLEVBQUUsR0FBRztRQUNYLEtBQUssRUFBRSxNQUFNO1FBQ2IsU0FBUyxFQUFFLEdBQUc7UUFDZCxRQUFRLEVBQUUsR0FBRztLQUNoQixDQUFBO0lBQ0QsVUFBVTtJQUNWLElBQUksT0FBTyxHQUFXLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQ3JELE9BQU87SUFDUCxtQkFBMEIsR0FBeUI7UUFDL0MsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZCxPQUFPO1lBQ1AsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMvQixPQUFPO1lBQ1AsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixNQUFNO1lBQ04sR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNqQixHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQVhlLGdCQUFTLFlBV3hCLENBQUE7QUFDTCxDQUFDLEVBeEJTLE1BQU0sS0FBTixNQUFNLFFBd0JmO0FBQ0QsU0FBUztBQUNULG1CQUFtQixNQUFjO0lBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztRQUN0QyxRQUFRLEVBQUUsTUFBTTtRQUNoQixPQUFPLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUE7QUFDTixDQUFDO0FBQ0QsV0FBVztBQUNYLGtCQUFlLE1BQU0sQ0FBQyJ9