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
    //jquer扩展
    jQuery.fn.swap = function (b) {
        let ele = $(b)[0];
        var a = this[0];
        var t = a.parentNode.insertBefore(document.createTextNode(''), a);
        ele.parentNode.insertBefore(a, ele);
        t.parentNode.insertBefore(ele, t);
        t.parentNode.removeChild(t);
        return this;
    };
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
//# sourceMappingURL=index.js.map