const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const PORT = 3000;
const routes = require('./routes');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const app = express();

app.set('view engine', 'html');

app.engine('html', nunjucks.render);

app.use(volleyball);

nunjucks.configure('views', { noCache: true });

app.use(bodyParser.urlencoded({ extended: false }));

let server = app.listen(PORT, function(req, res) {
  console.log('server listening at http://localhost:' + PORT + '/');
});

let io = socketio.listen(server);

app.use('/', routes(io));
