'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var loginRouter = express.Router();
var userRouter = express.Router();

require('./routes/login_route')(loginRouter);
require('./routes/user_route')(userRouter)

app.use(bodyParser.json());
app.use('/login', loginRouter);
app.use('/users', userRouter);



app.listen(3000, () => {
  console.log('server started');
})
