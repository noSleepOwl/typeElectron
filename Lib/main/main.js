"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var electron_1 = require("electron");
var config_1 = require("./config");
var mainWindow = null;
/**
 * 主窗口生成
 */
(function () {
    var shouldQuit = makeSingleInstance();
    if (shouldQuit)
        return electron_1.app.quit();
    function createWindow() {
        mainWindow = new electron_1.BrowserWindow(config_1.windowOptions);
        mainWindow.loadURL(path_1.join('file://', __dirname, '../view/html/index.html'));
        mainWindow.on('closed', function () {
            mainWindow = null;
        });
    }
    electron_1.app.on('ready', function () {
        createWindow();
    });
    electron_1.app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('activate', function () {
        if (mainWindow === null) {
            createWindow();
        }
    });
})();
// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
/** 创建main woindow 的单例模式, 保持窗口只有一个*/
function makeSingleInstance() {
    if (process.mas)
        return false;
    return electron_1.app.makeSingleInstance(function () {
        if (mainWindow) {
            if (mainWindow.isMinimized())
                mainWindow.restore();
            mainWindow.focus();
        }
    });
}
