var express = require('express');

var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});

connection.connect();

app.get('/', function (req, res) {

    var query="insert into user1(name,email,password)values('maya','maya@gmail.com','3252')"

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send('insert');
    });
})

app.get('/select',function(req,res){

    var query = "select * from user1"
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});


app.get('/delete',function(req,res){

    var query = "delete from user1 where id=2"
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});

app.get('/update', function (req, res) {

    var query = "update user1 set password='maya@12' where id=3"
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send('update')
    });
});

    app.listen(3000);