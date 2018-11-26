var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fishbidding',
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected');
    con.query('Select id from users', (err, result) => {
        if (err) throw err;
        console.log('Result: ' + result);
    })
});