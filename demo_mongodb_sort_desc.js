var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db('mydb');
    var mysort = { name: -1 };
    dbo.collection('customers').find().sort(mysort).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});