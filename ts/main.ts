
import { app, BrowserWindow, Menu, shell, dialog } from 'electron';
import option from './config';
import { meunOption } from './topMenu'
let win: BrowserWindow | null;
// 创建窗口
function createWindow(): void {
    win = new BrowserWindow(option.win)
    option.runWindow(win);
}
/**
 * 事件: 'ready'
返回:

launchInfo Object macOS
当 Electron 完成初始化时被触发。 在 macOS 中, 如果从通知中心中启动，那么 launchInfo 中的 userInfo 包含用来打开应用程序的 NSUserNotification 信息。 你可以通过调用 app.isReady() 方法来检查此事件是否已触发。
 */
app.on('ready', () => {
    createWindow();
    const menu = Menu.buildFromTemplate(meunOption)
    Menu.setApplicationMenu(menu)
});
/**
 * 事件: 'window-all-closed'
当所有的窗口都被关闭时触发。

如果你没有监听此事件并且所有窗口都关闭了，
默认的行为是控制退出程序；但如果你监听了此事件，
你可以控制是否退出程序。 如果用户按下了 Cmd + Q，
或者开发者调用了 app.quit()，Electron 
会首先关闭所有的窗口然后触发 will-quit 事件，在这种情况下 window-all-closed 事件不会被触发。
 */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
/**
 * 当应用被激活时触发。 各种操作都可以触发此事件, 例如首次启动应用程序、尝试在应用程序已运行时或单击应用程序的坞站或任务栏图标时重新激活它。
 */
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
