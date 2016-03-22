'use strict';
var User = require(__dirname + '/../models/user');

module.exports = (router) => {

  router.route('/')
  .post((req, res) => {
    var newUser = new User(req.body);
    newUser.save((err, user) => {
      res.write('Added user ' + user.name);
      res.end();
    });
  })
  .get((req, res) => {
    console.log('/admin GET gotten');
    res.write('got it');
    res.end();
  });
};
