var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db('mydb');
    var myquery = { address: /^S/ };
    var newvalues = { $set: { name: 'Minnie' } };
    dbo.collection('customers').updateMany(myquery, newvalues, (err, res) => {
        if (err) throw err;
        console.log(res.result.nModified + ' document(s) updated');
        db.close();
    });
});