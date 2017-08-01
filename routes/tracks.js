var express = require('express');
var app = express();
var router = express.Router();
var Item = require('../models/item.js');


// router.use(function(req, res, next) {
//   console.log('%s %s %s', req.method, req.url, req.path);
// // Ensure user is authenticated or else redirect him to the login page
//   next();
// });


function isYoutubeVideo(video) {
    return video.indexOf('youtube.com/') !== -1 || video.indexOf('youtu.be/') !== -1;
}

const track_create_post = (req, res) => {
  console.log('helllo: ')
  console.log(req.body);
  var body = req.body;
  var event = body.event;

  if(event.type === 'message') {
    var start = event.text.indexOf('<');
    var end = event.text.indexOf('>');
    var url = event.text.substr(start + 1, end - start - 1);

    console.log('url:'+url);

    if( isYoutubeVideo(url) ) {

      var item = new Item({
        url: url,
        user: event.user,
        text: event.text
      })
      item.save((err, item) => {
        console.log(err);
        console.log(item)
      })
    }
  }

  res.json(req.body.challenge)
}

// Setting routes
// router.get('/new', ensureAuthenticated, track_create_get)
router.post('/', track_create_post)

// router.get('/all', ensureAuthenticated, list_tracks)

module.exports = router
