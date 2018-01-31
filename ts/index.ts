///<reference path="./declare/declare.d.ts"/>
import * as $ from 'jquery';
import { remote } from 'electron';
const { BrowserWindow } = remote;
window.$ = window.jQuery = $;
import 'bootstrap';

$(() => {
    $('button').click(function () {
        alert("ok");
    });
})