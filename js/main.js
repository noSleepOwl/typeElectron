"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const config_1 = require("./config");
let win;
function createWindow() {
    win = new electron_1.BrowserWindow(config_1.default.win);
    win.loadURL(config_1.default.mainUrl);
    win.on('close', () => {
        win = null;
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBOEM7QUFDOUMscUNBQThCO0FBRTlCLElBQUksR0FBeUIsQ0FBQztBQUU5QjtJQUNJLEdBQUcsR0FBRyxJQUFJLHdCQUFhLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuQyxHQUFHLENBQUMsT0FBTyxDQUFDLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ2pCLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFDRDtJQUNJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoQyxjQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDO0FBQ0wsQ0FBQztBQUtELGNBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzlCLGNBQUcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTtBQUM5QyxjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7SUFDcEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDZixZQUFZLEVBQUUsQ0FBQztJQUNuQixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUEifQ==