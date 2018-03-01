import { Database, RunResult } from 'sqlite3'
import { join } from 'path'
import { dataPath } from './url';
console.log(join(dataPath, 'dbrest.db'))
var db = new Database(join(dataPath, 'dbrest.db'));
db.serialize(function () {
    db.run("INSERT INTO lorem(info,info2) VALUES ($d1,$d2)", { $d1: "f1", $d2: "f2" }, function (this: RunResult, err: Error | null, res: any) {
        console.log(arguments);
    });
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
