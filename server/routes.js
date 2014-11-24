var jwt = require('jsonwebtoken'),
    auth = require('./auth')();

module.exports.initialize = function(app) {
  app.post('/login', auth.authenticate, function (req, res) {
    var token = jwt.sign({
      username: auth.user.username
    }, auth.jwtSecret);

    res.send({
      token: token,
      user: auth.user
    });
  });

  app.get('/', function (req, res) {
    res.sendFile(app.get('root') + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
};