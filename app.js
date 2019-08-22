var express = require('express');
var port = process.env.PORT || 9000;
var unfurled = require('unfurled');

var app = express();

app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'This is api-bookmarker app' }));
});

app.route('/url')
    .post(function (req, res) {
        const url = {
            urlgot: req.body.urlgot
        }
        unfurled(url.urlgot)
            .then(resp => {
                console.log(resp);
                res.json(resp)
            })
            .catch(err => console.log(err))
    })
    .get(function (req, res) {
        res.send(JSON.stringify({ Message: 'post a url to this route to get unfurled info' }));
    })

app.listen(port, function () {
    console.log('api-bookmarker app listening on port !');
});