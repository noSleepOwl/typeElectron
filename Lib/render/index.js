"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = require("sqlite3");
var path_1 = require("path");
var url_1 = require("./url");
var $ = require("jquery");
window.$ = $;
var db = new sqlite3_1.Database(path_1.join(url_1.dataPath, 'dbrest.db'));
function select() {
    db.serialize(function () {
        db.all('SELECT * FROM student', function (err, row) {
            var tr = '';
            $.each(row, function (index, student) {
                tr += "<tr>\n                <td>" + student.name + "</td>\n                <td>" + student.age + "</td>\n                <td>" + student.clazz + "</td>\n                </tr>";
            });
            $('#table').html(tr);
        });
    });
}
$(function () {
    select();
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
        select();
    });
});
