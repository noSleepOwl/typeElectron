"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const config_1 = require("./config");
const topMenu_1 = require("./topMenu");
let win;
function createWindow() {
    win = new electron_1.BrowserWindow(config_1.default.win);
    config_1.default.runWindow(win);
}
function window_all_closed() {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', window_all_closed);
electron_1.app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
//加载顶部菜单
electron_1.app.on('ready', function () {
    const menu = electron_1.Menu.buildFromTemplate(topMenu_1.meunOption);
    electron_1.Menu.setApplicationMenu(menu);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBbUU7QUFDbkUscUNBQThCO0FBQzlCLHVDQUFzQztBQUN0QyxJQUFJLEdBQXlCLENBQUM7QUFFOUI7SUFDSSxHQUFHLEdBQUcsSUFBSSx3QkFBYSxDQUFDLGdCQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkMsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUNEO0lBQ0ksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLGNBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7QUFDTCxDQUFDO0FBRUQsY0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDOUIsY0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0FBQzlDLGNBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUNwQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNmLFlBQVksRUFBRSxDQUFDO0lBQ25CLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQTtBQUVGLFFBQVE7QUFDUixjQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNaLE1BQU0sSUFBSSxHQUFHLGVBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBVSxDQUFDLENBQUE7SUFDL0MsZUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQyxDQUFBIn0=