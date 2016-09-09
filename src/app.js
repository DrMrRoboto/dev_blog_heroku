var express = require('express');
app = express();

var index = require('../routes/index');

app.use('/',index);

app.get ('/', function (req, res){
    res.send ('Hello World!');
});

var server = app.listen (3000, function() {
    var port = server.address().port;
    console.log ('listening on port: ', port);
});
