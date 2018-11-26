var fs = require('fs');
var rs = fs.createReadStream('./demofile1.html');
rs.on('open', () => {
    console.log('The file is open');
});