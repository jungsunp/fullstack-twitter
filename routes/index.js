const express = require('express');
const tweetBank = require('../tweetBank');

module.exports = function (io) {
  const router = express.Router();

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get('/users/:name', function(req, res) {
    let name = req.params.name;
    let list = tweetBank.find( {name: name} );
    res.render( 'index', { name: name, tweets: list, showForm: true } );
  });

  router.get('/tweets/:id', function(req, res){
    let id = +req.params.id;
    let tweet = tweetBank.find( {id: id} );
    res.render( 'index', { tweets: tweet });
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    if (name && text){
      let newTweet = tweetBank.add(name, text);
      io.sockets.emit('newTweet', newTweet);
    }
    res.redirect('/');
  });

  router.use(express.static('public'));

  return router;
};
