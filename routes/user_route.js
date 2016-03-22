module.exports = (router) => {
  var User = require(__dirname + '/../models/user');

  router.route('/users')
  .get((req, res) => {
    console.log('recd /users GET request');
  })
  .post((req, res) => {
    console.log('recd /users POST request');
  })
  .put((req, res) => {
    console.log('recvd /users PUT request');
  })
  .delete((req, res) => {
    console.log('recvd /users DELETE request');
  });
}
