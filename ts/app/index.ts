
import * as $ from 'jquery';
import { remote } from 'electron';
import { indexPage } from './app-page'
const { BrowserWindow } = remote;
window.$ = window.jQuery = $;
import 'bootstrap';
import 'jquery-ui'
import 'justifiedgallery'
import 'tinymce'
$(() => {
    //jquer扩展
    jQuery.fn.swap = function (b: JQuery) {
        let ele = $(b)[0];
        var a = this[0];
        var t = a.parentNode!.insertBefore(document.createTextNode(''), a);
        ele.parentNode!.insertBefore(a, ele);
        t.parentNode!.insertBefore(ele, t);
        t.parentNode!.removeChild(t);
        return this;
    };
    // 窗口改变事件 
    remote.getCurrentWindow().on('resize', () => {
        indexPage.resizeIndex();
    })
    //读取菜单数据
    indexPage.loadSideBarLeft();
    //侧边栏隐藏和展示按钮绑定
    indexPage.showSilder();
    //菜单栏点击事件绑定
    $('.main-menu').on('click', 'a', indexPage.leftPageClick);
});