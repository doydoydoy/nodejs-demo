var http = require('http');
var uc = require('upper-case');
var _ = require('lodash');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(_.first(['b', 'a']));
    res.end();
}).listen(8080);