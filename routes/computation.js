var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var t1 = Math.hypot(x);
  var t2 = Math.ceil(x);
  var t3 = Math.clz32(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.hypot(${x}) is ${t1} ; Math.ceil(${x}) is ${t2} ; Math.clz32(${x}) is ${t3}\n`);
});

module.exports = router;