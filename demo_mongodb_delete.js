var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db('mydb');
    var myquery = { address: 'Highway 35' };
    dbo.collection('customers').deleteOne(myquery, (err, obj) => {
        if (err) throw err;
        console.log('1 document deleted');
        db.close();
    });
});