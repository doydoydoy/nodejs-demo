var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db('mydb');
    var query = { address: /^S/ };
    dbo.collection('customers').find(query).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    })
});