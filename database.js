var mysql = require('mysql');
var chalk = require('chalk');

if (!process.argv[2] || !process.argv[3] || !process.argv[4]) {
    console.log(chalk.red('host username password [port] needed as argument!'));
    return;
}

var con = mysql.createConnection({
    host: process.argv[2],
    user: process.argv[3],
    password: process.argv[4],
    port: process.argv[5] ? process.argv[5] : 3306,
});

con.connect(function(err) {
    if (err) throw err;
    con.query('Show DATABASES;', function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
