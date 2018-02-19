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
    Option.mainUrl = urlFormat('../html/index.html');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUc3QixJQUFVLE1BQU0sQ0FXZjtBQVhELFdBQVUsTUFBTTtJQUNaLFFBQVE7SUFDRyxVQUFHLEdBQW9DO1FBQzlDLEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTSxFQUFFLEdBQUc7UUFDWCxLQUFLLEVBQUUsTUFBTTtRQUNiLFNBQVMsRUFBRSxHQUFHO1FBQ2QsUUFBUSxFQUFFLEdBQUc7S0FDaEIsQ0FBQTtJQUNELFVBQVU7SUFDQyxjQUFPLEdBQVcsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUE7QUFDaEUsQ0FBQyxFQVhTLE1BQU0sS0FBTixNQUFNLFFBV2Y7QUFDRCxTQUFTO0FBQ1QsbUJBQW1CLE1BQWM7SUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1FBQ3RDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLE9BQU8sRUFBRSxJQUFJO0tBQ2hCLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFDRCxXQUFXO0FBQ1gsa0JBQWUsTUFBTSxDQUFDIn0=