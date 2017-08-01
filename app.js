const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const PORT = 3000;
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

// app.use(function (req, res, next) {
//   console.log(req.method, req.url, res.statusCode);
//   next();
// });

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(volleyball);

nunjucks.configure('views', { noCache: true });
// console.log(nunjucks.render('index.html', {
//   title: 'An Example',
//   people: [{name: 'Gandolf'}, {name: 'Frodo'}, {name: 'Hermione'}, {name: 'Harry Potter'}]
// }));

// app.get('/', function(req, res) {
//   // res.send('Welcome to twitter.js!');
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });

app.listen(PORT, function(req, res) {
  console.log('server listening at http://localhost:' + PORT + '/');
});
