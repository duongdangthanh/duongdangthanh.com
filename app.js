const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port);
})