
import { app, BrowserWindow, Menu, shell, dialog } from 'electron';
import option from './config';
import { meunOption } from './topMenu'
let win: BrowserWindow | null;

function createWindow(): void {
    win = new BrowserWindow(option.win)
    option.runWindow(win);
}
function window_all_closed() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
}

app.on('ready', createWindow);
app.on('window-all-closed', window_all_closed)
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})

//加载顶部菜单
app.on('ready', function () {
    const menu = Menu.buildFromTemplate(meunOption)
    Menu.setApplicationMenu(menu)
})
