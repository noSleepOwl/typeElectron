"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const config_1 = require("./config");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBOEM7QUFDOUMscUNBQThCO0FBRTlCLElBQUksR0FBeUIsQ0FBQztBQUU5QjtJQUNJLEdBQUcsR0FBRyxJQUFJLHdCQUFhLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuQyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRUQ7SUFDSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEMsY0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztBQUNMLENBQUM7QUFFRCxjQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM5QixjQUFHLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUE7QUFDOUMsY0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2YsWUFBWSxFQUFFLENBQUM7SUFDbkIsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFBIn0=