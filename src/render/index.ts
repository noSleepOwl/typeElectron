import { Database, RunResult, Statement } from 'sqlite3'
import { join } from 'path'
import { dataPath } from './url';
import * as $ from 'jquery'

interface student {
    name: string;
    age: string;
    clazz: string;
}

window.$ = $;
var db = new Database(join(dataPath, 'dbrest.db'));

function select() {

    db.serialize(function () {
        db.all('SELECT * FROM student', function (this: Statement, err: Error | null, row: student[]) {
            let tr = '';
            $.each(row, function (index, student) {
                tr += `<tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.clazz}</td>
                </tr>`
            })
            $('#table').html(tr);
        })
    })
}

$(function () {
    select();
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
        select();
    });

})