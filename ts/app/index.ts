
import * as $ from 'jquery';
import { remote } from 'electron';
import { indexPage } from './app-page'
const { BrowserWindow } = remote;
window.$ = window.jQuery = $;
import 'bootstrap';

$(() => {
    $('button').click(function () {
        alert("ok 测试测试编译");
    });
    //菜单栏点击事件绑定
    $('.main-menu').on('click', 'a', indexPage.leftPageClick);
})