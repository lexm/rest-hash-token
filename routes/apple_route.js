module.exports = (router) => {
  var User = require(__dirname + '/../models/user');

  router.route('/')
  .get((req, res) => {
    console.log('recvd /apples GET request');
    res.write('here is an apple');
    res.end();
  })
  .post((req, res) => {
    console.log('recvd /apples POST request');
    res.write('thanks for the apple');
    res.end();
  })
  .put((req, res) => {
    console.log('recvd /apples PUT request');
    res.write('swapped out a rotten apple');
    res.end();
  })
  .delete((req, res) => {
    console.log('recvd /apples DELETE request');
    res.write('that apple is tossed');
    res.end();
  });
};
