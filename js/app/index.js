"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const electron_1 = require("electron");
const app_page_1 = require("./app-page");
const { BrowserWindow } = electron_1.remote;
window.$ = window.jQuery = $;
require("bootstrap");
$(() => {
    $('button').click(function () {
        alert("ok 测试测试编译");
    });
    //菜单栏点击事件绑定
    $('.main-menu').on('click', 'a', app_page_1.indexPage.leftPageClick);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw0QkFBNEI7QUFDNUIsdUNBQWtDO0FBQ2xDLHlDQUFzQztBQUN0QyxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsaUJBQU0sQ0FBQztBQUNqQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLHFCQUFtQjtBQUVuQixDQUFDLENBQUMsR0FBRyxFQUFFO0lBQ0gsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNkLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUNILFdBQVc7SUFDWCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsb0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUMsQ0FBQSJ9