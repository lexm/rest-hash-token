'use strict';
var User = require(__dirname + '/../models/user');
var mongoose = require('mongoose');

module.exports = (router) => {

  router.route('/')
  .post((req, res) => {
    var newUser = new User(req.body);
    newUser.save((err, user) => {
      if(err) {
        console.log(err);
      } else {
        console.log('Added user ' + user.name);
        res.write('Added user ' + user.name);
        res.end();
      }
    });
    console.log(newUser);
  })
  .get((req, res) => {
    User.find({}, function (err, users) {
      if(err) {console.log(err);}
      res.json(users);
      res.end();
    });
  });
};
