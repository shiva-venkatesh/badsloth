var express = require('express');
var app = express();
var router = express.Router();
var Item = require('../models/item.js');

router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
// Ensure user is authenticated or else redirect him to the login page
  next();
});

const items_get = (req, res) => {
  console.log('hello : ')
  Item.find().exec(function(err, items) {
    if(err) {
      res.json(err);
    }
    res.json(items);
  })

}

// Setting routes
// router.get('/new', ensureAuthenticated, track_create_get)
// router.post('/', items_post)
router.get('/', items_get)

// router.get('/all', ensureAuthenticated, list_tracks)

module.exports = router
