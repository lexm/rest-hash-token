'use strict';

var config = require(__dirname + '/../config/dbconfig');
process.env.MONGO_URI = config.testdb;
var mongoose = require('mongoose');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var request = chai.request;
var expect = chai.expect;

var testUser = 'amy';
var testPass = 'winehouse';
var testWrongUser = 'amie';
var testWrongPass = 'whinehoose';

require('../server');

describe('testing login', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should be able to create a new user', function(done) {
    var userParams = JSON.parse(`{"name": "${testUser}", "group": "users", "password": "${testPass}"}`);
    request('localhost:3000')
    .post('/admin')
    .send(userParams)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.text).to.eql(`Added user ${testUser}`);
      done();
    });
  });
  it('should be able to login with new user/password', function(done) {
    request('localhost:3000')
    .post('/login')
    .auth(testUser, testPass)
    // .set('Authorization', 'basic ' + (new Buffer(testUser + ':' + testPass).toString('base64')))
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body).to.have.property('token');
      expect(res.body.token).to.be.a('string');
      expect(res.body.token.split('.').length).to.eql(3);
      done();
    });
  });


  it('should fail with incorrect password', function(done) {
    let authValue = 'basic ' + (new Buffer(testUser + ':' + testWrongPass).toString('base64'));
    request('localhost:3000')
    .post('/login')
    .set('Authorization', authValue)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body).to.have.property('status');
      expect(res.body.status).to.eql('failure');
      done();
    });
  });
  it('should fail with incorrect username', function(done) {
    let authValue = 'basic ' + (new Buffer(testWrongUser + ':' + testPass).toString('base64'));
    request('localhost:3000')
    .post('/login')
    .set('Authorization', authValue)
    .end(function(err, res) {
      console.log();
      expect(err).to.eql(null);
      expect(res.body).to.have.property('status');
      expect(res.body.status).to.eql('failure');
      done();
    });
  });
});
