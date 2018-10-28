//var http = require('http');

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");

// });

var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

app.get('/', function(req, res)
{
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render('pages/index')
});

var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
