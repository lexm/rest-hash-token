module.exports = (router) => {
  var User = require(__dirname + '/../models/user');

  router.route('/')
  .get((req, res) => {
    console.log('recvd /users GET request');
    res.end();
  })
  .post((req, res) => {
    console.log('recvd /users POST request');
    res.end();
  })
  .put((req, res) => {
    console.log('recvd /users PUT request');
    res.end();
  })
  .delete((req, res) => {
    console.log('recvd /users DELETE request');
    res.end();
  });
}
