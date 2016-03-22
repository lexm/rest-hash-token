'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var loginRouter = express.Router();
var appleRouter = express.Router();

require('./routes/login_route')(loginRouter);
require('./routes/apple_route')(appleRouter);

app.use(bodyParser.json());
app.use('/login', loginRouter);
app.use('/apples', appleRouter);



app.listen(3000, () => {
  console.log('server started');
})
