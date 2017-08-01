const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const PORT = 3000;
const routes = require('./routes');

app.set('view engine', 'html');

app.engine('html', nunjucks.render);

app.use(volleyball);

nunjucks.configure('views', { noCache: true });

app.use('/', routes);

app.listen(PORT, function(req, res) {
  console.log('server listening at http://localhost:' + PORT + '/');
});

