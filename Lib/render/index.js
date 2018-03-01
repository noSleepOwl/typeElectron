"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = require("sqlite3");
var path_1 = require("path");
var url_1 = require("./url");
console.log(path_1.join(url_1.dataPath, 'dbrest.db'));
var db = new sqlite3_1.Database(path_1.join(url_1.dataPath, 'dbrest.db'));
db.serialize(function () {
    db.run("INSERT INTO lorem(info,info2) VALUES ($d1,$d2)", { $d1: "f1", $d2: "f2" }, function (err, res) {
        console.log(arguments);
    });
    db.run("delete from lorem where rowid > 1", function (err, res) {
        console.log(arguments);
    });
    db.run("UPDATE lorem SET info = ? WHERE rowid = ?", ["bar", 2]);
    db.get("select * from lorem where rowid=?", [1], function (err, res) {
        console.log(arguments);
    });
    db.all("select * from lorem", function (err, res) {
        console.log(arguments);
    });
});
