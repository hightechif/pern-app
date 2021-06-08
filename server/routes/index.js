var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json({ title: 'Express API Running' });
  res.redirect("/api")
});

module.exports = router;
