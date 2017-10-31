"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="./declare/declare.d.ts"/>
const $ = require("jquery");
const electron_1 = require("electron");
const { BrowserWindow } = electron_1.remote;
window.$ = window.jQuery = $;
require("bootstrap");
var html;
(function (html) {
    html.button = `<button class="btn btn-info btn-lg">测试用的按钮</button>`;
    html.li = `<li class="list-group-item">......</li>`;
})(html || (html = {}));
$(() => {
    $('#link_click').click(() => {
        $('.list-group').append(html.li);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE2QztBQUM3Qyw0QkFBNEI7QUFDNUIsdUNBQWtDO0FBQ2xDLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxpQkFBTSxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDN0IscUJBQW1CO0FBQ25CLElBQVUsSUFBSSxDQUdiO0FBSEQsV0FBVSxJQUFJO0lBQ0MsV0FBTSxHQUFHLHFEQUFxRCxDQUFDO0lBQy9ELE9BQUUsR0FBRyx5Q0FBeUMsQ0FBQztBQUM5RCxDQUFDLEVBSFMsSUFBSSxLQUFKLElBQUksUUFHYjtBQUNELENBQUMsQ0FBQyxHQUFHLEVBQUU7SUFDSCxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUN4QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFBIn0=