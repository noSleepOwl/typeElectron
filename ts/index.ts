///<reference path="./declare/declare.d.ts"/>
import * as $ from 'jquery';
import { remote } from 'electron';
const { BrowserWindow } = remote;
window.$ = window.jQuery = $;
import 'bootstrap';
namespace html {
    export let button = `<button class="btn btn-info btn-lg">测试用的按钮</button>`;
    export let li = `<li class="list-group-item">......</li>`;
}
$(() => {
    $('#link_click').click(() => {
        $('.list-group').append(html.li)
    });
})
