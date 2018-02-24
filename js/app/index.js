"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const electron_1 = require("electron");
const app_page_1 = require("./app-page");
const { BrowserWindow } = electron_1.remote;
window.$ = window.jQuery = $;
require("bootstrap");
require("jquery-ui");
require("justifiedgallery");
require("tinymce");
$(() => {
    // 窗口改变事件 
    electron_1.remote.getCurrentWindow().on('resize', () => {
        app_page_1.indexPage.resizeIndex();
    });
    //读取菜单数据
    app_page_1.indexPage.loadSideBarLeft();
    //侧边栏隐藏和展示按钮绑定
    app_page_1.indexPage.showSilder();
    //菜单栏点击事件绑定
    $('.main-menu').on('click', 'a', app_page_1.indexPage.leftPageClick);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw0QkFBNEI7QUFDNUIsdUNBQWtDO0FBQ2xDLHlDQUFzQztBQUN0QyxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsaUJBQU0sQ0FBQztBQUNqQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLHFCQUFtQjtBQUNuQixxQkFBa0I7QUFDbEIsNEJBQXlCO0FBQ3pCLG1CQUFnQjtBQUNoQixDQUFDLENBQUMsR0FBRyxFQUFFO0lBQ0gsVUFBVTtJQUNWLGlCQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUN4QyxvQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUTtJQUNSLG9CQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUIsY0FBYztJQUNkLG9CQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkIsV0FBVztJQUNYLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxvQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDIn0=