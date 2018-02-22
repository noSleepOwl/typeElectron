
import * as $ from 'jquery';
import { remote } from 'electron';
import { indexPage } from './app-page'
const { BrowserWindow } = remote;
window.$ = window.jQuery = $;
import 'bootstrap';

$(() => {
    // 窗口改变事件 
    remote.getCurrentWindow().on('resize', () => {
        indexPage.resizeIndex();
    })
    //菜单栏点击事件绑定
    $('.main-menu').on('click', 'a', indexPage.leftPageClick);
    indexPage.loadSideBarLeft();
})