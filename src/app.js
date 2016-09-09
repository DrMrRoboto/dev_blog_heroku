var express = require('express');
app = express();

app.get ('/', function (req, res){
    res.send ('Hello!');
});

var server = app.listen (3000, function() {
    var port = server.address().port;
    console.log ('listening on port: ', port);
});
