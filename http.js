var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var q = url.parse(req.url, true).query;
    var txt =  + " " + q.month;

    res.end(q.year + ' ' + q.month);
}).listen(8080);
