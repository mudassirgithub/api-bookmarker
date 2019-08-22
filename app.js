var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'This is api-bookmarker app' }));
});

app.listen(port, function () {
    console.log('api-bookmarker app listening on port !');
});