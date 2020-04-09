const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.post("/login", (req, res) => {
    const { userName, password } = req.body;
    return res.send({ userName, password });
})

app.get("/user", (req, res) => {
    return res.send("Success");
})

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port);
})