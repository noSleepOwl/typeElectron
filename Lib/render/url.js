"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
function getPath(path) {
    return path_1.join(__dirname, path);
}
var html = getPath('../view/html');
exports.index = html + "\\index.html";
exports.dataPath = getPath('../data');
