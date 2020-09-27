var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("HELLO");
  res.send(__dirname);;
});

module.exports = router;
