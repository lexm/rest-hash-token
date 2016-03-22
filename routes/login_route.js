'use strict';

var jwt = require('jsonwebtoken');
var User = require('../models/user');
module.exports = (Router) => {
  Router.post('/', (req, res) => {
    console.log(req.headers.authorization);
    var authorizationArray = req.headers.authorization.split(' ');
    var method = authorizationArray[0];
    var base64ed = authorizationArray[1];
    var authArray = new Buffer(base64ed, 'base64').toString().split(':')
    console.log(method);
    var name = authArray[0];
    var password = authArray[1];
    console.log(name);
    console.log(password);
    User.find({name: name}, user => {
      console.log('user find');
      var valid = user.compareHash(password);
      if(!valid) {
        return res.json({status: 'failure'});
      }
      res.json({token: user.generateToken()});
    })
  })
}
