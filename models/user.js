'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var userSchema = mongoose.Schema({
  name: String,
  group: String,
  password: String
});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  next();
});

userSchema.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.password)
};

userSchema.methods.generateToken = function() {
  jwt.sign({_id: this._id, group: group}, 'some phrase');
};

var User = mongoose.model('User', userSchema)
module.exports = User;
