//var http = require('http');

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");

// });

var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res)
{
    var obj = JSON.parse(fs.readFileSync('devices.json', 'utf8'))
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render('pages/index', {devices: obj})
});

app.get('/jobs', function(req, res)
{
    var obj = JSON.parse(fs.readFileSync('ratman.json', 'utf8'));
    res.render('pages/jobs', {jobs: obj})
});

app.get('/resource', function(req, res)
{
    //var obj = JSON.parse(fs.readFileSync('ratman.json', 'utf8'));
    res.render('pages/resource');//, {jobs: obj})
});

app.get('/job', function(req, res)
{
    var obj = JSON.parse(fs.readFileSync('ratman.json', 'utf8'));

    var result = obj.filter((value, index, array) =>
    {
        return value.LocationID == req.query.id;
    });

    res.render('pages/job', {job: result[0]});
});

var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
