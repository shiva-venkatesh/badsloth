var express = require('express');
var app = express();
var router = express.Router();
// router.use(function(req, res, next) {
//   console.log('%s %s %s', req.method, req.url, req.path);
// // Ensure user is authenticated or else redirect him to the login page
//   next();
// });

const track_create_post = (req, res) => {
  console.log('helllo: ')
  console.log(req.body);
  res.json(req.body.challenge)
}

// Setting routes
// router.get('/new', ensureAuthenticated, track_create_get)
router.post('/', track_create_post)

// router.get('/all', ensureAuthenticated, list_tracks)

module.exports = router
