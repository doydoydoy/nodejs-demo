var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // // res.write("The date and time are currently: " + dt.myDateTime());
    // var q = url.parse(req.url, true).query;
    // res.write(q.year + ' ' + q.month);
    // res.end();

    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

    // fs.appendFile('mynewfile1.txt', 'Nadagdagan; ', (err) => {
    //     if (err) throw err;
    //     console.log('Saved');
    // });

    // fs.open('mynewfile2.txt', 'w', (err, file) => {
    //     if (err) throw err;
    //     console.log('Saved');
    // });

    // fs.writeFile('mynewfile3.txt', 'Madadagdagan ba? ', (err) => {
    //     if (err) throw err;
    //     console.log('Saved');
    // });

    // fs.unlink('mynewfile2.txt', (err) => {
    //     if (err) throw err;
    //     console.log('File Deleted');
    // });

    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
        if (err) throw err;
        console.log('File Renamed');
    });
}).listen(8080);
