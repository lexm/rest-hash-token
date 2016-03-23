'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var config = require(__dirname + '/config/dbconfig');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();

var loginRouter = express.Router();
var appleRouter = express.Router();
var adminRouter = express.Router();

require('./routes/login_route')(loginRouter);
require('./routes/apple_route')(appleRouter);
require('./routes/admin_route')(adminRouter);

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/admin', adminRouter);
app.use('/login', loginRouter);
app.use('/apples', appleRouter);

mongoose.connect(config.database);

app.listen(3000, () => {
  console.log('server started');
});
