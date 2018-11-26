var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db('mydb');
    dbo.dropCollection('products', (err, delOk) => {
        if (err) throw err;
        if (delOk) console.log('collection deleted');
        db.close();
    });
});