"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = require("sqlite3");
var path_1 = require("path");
var url_1 = require("./url");
require("jquery");
window.$ = $;
var db = new sqlite3_1.Database(path_1.join(url_1.dataPath, 'dbrest.db'));
db.serialize(function () {
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
$(function () {
    var add = $('#add');
    add.find('button').click(function () {
        var arg = {};
        add.find('input[name]').each(function () {
            var name = $(this).attr('name');
            var val = $(this).val();
            switch (name) {
                case 'name':
                    arg['$d1'] = val;
                    break;
                case 'age':
                    arg['$d2'] = val;
                    break;
                case 'clazz':
                    arg['$d3'] = val;
                    break;
                default:
                    break;
            }
        });
        db.serialize(function () {
            db.run("INSERT INTO student(name,age,clazz) VALUES ($d1,$d2,$d3)", arg, function (err, res) {
                console.log(arguments);
            });
        });
    });
});
