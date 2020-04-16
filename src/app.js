const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./db');

const userRouter = require('./routers/user.router');
const authRouter = require('./routers/auth.router');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  return res.send("Pong");
});

app.post('/ping', (req, res) => {
  const { email, password } = req.body;
  return res.send({ email, password });
});

app.use('/user', userRouter);
app.use('/auth', authRouter);

module.exports = app;
