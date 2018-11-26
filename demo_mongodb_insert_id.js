var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db('mydb');
    var myobj = [
        { _id: 1, name: 'Chocolate Heaven' },
        { _id: 2, name: 'Tasty Lemon' },
        { _id: 3, name: 'Vanilla Dream' },
    ];

    dbo.collection('products').insertMany(myobj, (err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});