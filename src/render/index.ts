import { Database, RunResult } from 'sqlite3'
import { join } from 'path'
import { dataPath } from './url';
import 'jquery'
window.$ = $;
var db = new Database(join(dataPath, 'dbrest.db'));
db.serialize(function () {

    db.run("delete from lorem where rowid > 1", function (this: RunResult, err: Error | null, res: any) {
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
    let add = $('#add');
    add.find('button').click(function () {
        let arg: any = {};
        add.find('input[name]').each(function () {
            let name = $(this).attr('name');
            let val = $(this).val();
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
            db.run("INSERT INTO student(name,age,clazz) VALUES ($d1,$d2,$d3)", arg, function (this: RunResult, err: Error | null, res: any) {
                console.log(arguments);
            });
        })
    });
})