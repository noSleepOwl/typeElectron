"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const path = require("path");
var Option;
(function (Option) {
    let win = {};
    let mainUrl = urlFormat('..html/index.html');
})(Option || (Option = {}));
function urlFormat(urlStr) {
    return url.format({
        pathname: path.join(__dirname, urlStr),
        protocol: 'file',
        slashes: true
    });
}
let option = {
    win: {
        width: 800,
        height: 600,
        title: '测试工具',
        minHeight: 800,
        minWidth: 600
    },
    mainUrl: urlFormat('../html/index.html')
};
exports.default = option;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQU83QixJQUFVLE1BQU0sQ0FLZjtBQUxELFdBQVUsTUFBTTtJQUNaLElBQUksR0FBRyxHQUFvQyxFQUUxQyxDQUFBO0lBQ0QsSUFBSSxPQUFPLEdBQVcsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUE7QUFDeEQsQ0FBQyxFQUxTLE1BQU0sS0FBTixNQUFNLFFBS2Y7QUFDRCxtQkFBbUIsTUFBYztJQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFDdEMsUUFBUSxFQUFFLE1BQU07UUFDaEIsT0FBTyxFQUFFLElBQUk7S0FDaEIsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQUVELElBQUksTUFBTSxHQUFXO0lBQ2pCLEdBQUcsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTSxFQUFFLEdBQUc7UUFDWCxLQUFLLEVBQUUsTUFBTTtRQUNiLFNBQVMsRUFBRSxHQUFHO1FBQ2QsUUFBUSxFQUFFLEdBQUc7S0FDaEI7SUFDRCxPQUFPLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixDQUFDO0NBQzNDLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMifQ==