var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/single', function(req, res, next) {
  res.json({
      message: 'respond with a resource',
      value: 1,
      array: [1, 2, 3],
  });
});


module.exports = router;
