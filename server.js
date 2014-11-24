var   express = require('express'),
      bodyParser = require('body-parser'),
      http = require('http'),
      routes = require('./server/routes.js'),
      app = express();

app.set('port', process.env.PORT || 8000);
app.set('root', __dirname);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/build/'));

//init route
routes.initialize(app);

var server = http.createServer(app);

server.listen(app.get('port'), function() {
  console.log('Express GO! Listening on port:' + app.get('port'));
});