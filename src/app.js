const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./db');

const userRouter = require('./routers/user.router');
const authRouter = require('./routers/auth.router');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/auth', authRouter);

module.exports = app;
