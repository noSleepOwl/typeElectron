
import { app, BrowserWindow } from 'electron';
import option from './config';

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

