var fs = require('fs');
var ds = require('./modules/date');

var filename = 'demo.txt';

fs.writeFile('demo.txt', ds.getDate(), function(err) {
    if (err) throw err;
    console.log('File saved!');
});

fs.readFile('demo.txt', 'utf8', function(err, data) {
    console.log("======CONTENT========");
    console.log(data);
    console.log("====================");


    fs.unlink(filename, function() {
        console.log('Delete file again');
    });

});


