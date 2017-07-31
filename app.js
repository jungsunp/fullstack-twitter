const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const PORT = 3000;

// app.use(function (req, res, next) {
//   console.log(req.method, req.url, res.statusCode);
//   next();
// });

app.use(volleyball);
nunjucks.configure('./views');
console.log(nunjucks.render('index.html', {
  title: 'An Example',
  people: [{name: 'Gandolf'}, {name:'Frodo'}, {name:'Hermione'}, {name:'Harry Potter'}]
}));

app.get('/', function(req, res) {
  res.send('Welcome to twitter.js!');
});

app.listen(PORT, function(req, res) {
  console.log('server listening at http://localhost:' + PORT + '/');
});



