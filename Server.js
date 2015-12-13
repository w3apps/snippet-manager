var express = require('express');
var app = express();

app.get('/main.js', function (req, res) {
    res.sendFile(__dirname + '/dist/main.js');
});
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('The server is not running on port: ' + port);
});
