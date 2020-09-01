var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lyri-sept-2020', function(req, res, next) {
  res.render('lyri-sept-2020', { title: 'Express' });
});

router.get('/atelo-sept-2020', function(req, res, next) {
  res.render('atelo-sept-2020', { title: 'Express' });
});

router.get('/aiden-craig-sept-2020', function(req, res, next) {
  res.render('aiden-craig-sept-2020', { title: 'Express' });
});

module.exports = router;
