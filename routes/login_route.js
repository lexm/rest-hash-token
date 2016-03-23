'use strict';

var jwt = require('jsonwebtoken');
var User = require('../models/user');
module.exports = (Router) => {
  Router.post('/', (req, res) => {
    var authorizationArray = req.headers.authorization.split(' ');
    var method = authorizationArray[0];
    var base64ed = authorizationArray[1];
    var authArray = new Buffer(base64ed, 'base64').toString().split(':');
    var name = authArray[0];
    var password = authArray[1];
    console.log(authArray);
    User.find({name: name}, function(err, user) {
      if (err) console.log(err);
      var valid = user[0].compareHash(password);
      console.log(valid, user);
      if(!valid) {
        return res.json({status: 'failure'});
      }
      var newToken = user[0].generateToken();
      console.log(valid, newToken);
      res.json({token: newToken});
    });
  });
};
