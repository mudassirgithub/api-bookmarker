var express = require('express');
var port = process.env.PORT || 9000;
var unfurled = require('unfurled');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.json())

app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'This is api-bookmarker app' }));
});

app.post('/url', function (req, res) {
    var urlgot = req.body.urlgot
    if (urlgot === null) {
        res.json({
            hasError: true,
            errorMsg: "got empty filed"
        })
    }
    else {
        unfurled(urlgot)
            .then(resp => {
                console.log(resp);
                res.json(resp)
            })
            .catch(err => {
                console.log(err)
                res.json({
                    hasError: true,
                    errorMsg: "Invalid Url"
                })
            })
    }
});

app.get('/url', function (req, res) {
    res.send(JSON.stringify({ message: 'to get unfurled info post url to this route' }));
});


app.listen(port, function () {
    console.log('api-bookmarker app listening on port !');
});