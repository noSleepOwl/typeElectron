
import { join } from 'path';
import { BrowserWindow, app } from 'electron'
import { sync } from 'glob'
import { windowOptions } from './config'
var mainWindow: BrowserWindow | null = null;
/**
 * 主窗口生成
 */
(function () {
  var shouldQuit = makeSingleInstance()
  if (shouldQuit) return app.quit()
  function createWindow() {
    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL(join('file://', __dirname, '../view/html/index.html'))
    mainWindow.on('closed', function () {
      mainWindow = null
    })
  }
  app.on('ready', function () {
    createWindow()
  })
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow()
    }
  })
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
  if (process.mas) return false
  return app.makeSingleInstance(function () {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}
