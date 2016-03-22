'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var userSchema = mongoose.Schema({
  name: String,
  group: String,
  password: String
});
