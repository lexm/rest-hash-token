'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var loginRouter = express.Router();
var userRouter = express.Router();

require('./routes/login')(loginRouter);

app.use('/login', loginRouter);



app.listen(3000, () => {
  console.log('server started');
})
