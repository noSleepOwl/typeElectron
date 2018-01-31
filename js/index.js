"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="./declare/declare.d.ts"/>
const $ = require("jquery");
const electron_1 = require("electron");
const { BrowserWindow } = electron_1.remote;
window.$ = window.jQuery = $;
require("bootstrap");
$(() => {
    $('button').click(function () {
        alert("ok");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE2QztBQUM3Qyw0QkFBNEI7QUFDNUIsdUNBQWtDO0FBQ2xDLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxpQkFBTSxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDN0IscUJBQW1CO0FBRW5CLENBQUMsQ0FBQyxHQUFHLEVBQUU7SUFDSCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUEifQ==