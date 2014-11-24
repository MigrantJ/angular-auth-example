module.exports = (function () {
  var user = {
    username: 'testuser',
    password: 'p'
  };

  var jwtSecret = 'fjkdlsajfoew239053/3uk';

  function authenticate(req, res, next) {
    var body = req.body;
    if (!body.username || !body.password) {
      res.status(400).end('Must provide username or password');
    } else if (body.username !== user.username || body.password !== user.password) {
      res.status(401).end('Username or password incorrect');
    } else {
      next();
    }
  }

  return {
    user: user,
    jwtSecret: jwtSecret,
    authenticate: authenticate
  };
})();