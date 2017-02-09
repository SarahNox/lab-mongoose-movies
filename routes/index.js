var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Celebrities and Movies 2017' });
});

module.exports = router;
