module.exports = (router) => {
  var User = require(__dirname + '/../models/user');

  router.route('/')
  .get((req, res) => {
    console.log('recvd /users GET request');
    res.write('ya done got a login');
    res.end();
  })
  .post((req, res) => {
    console.log('recvd /users POST request');
    res.write('yep, you\'re posting');
    res.end();
  })
  .put((req, res) => {
    console.log('recvd /users PUT request');
    res.write('you put away your login');
    res.end();
  })
  .delete((req, res) => {
    console.log('recvd /users DELETE request');
    res.write('you can delete stuff now');
    res.end();
  });
};
