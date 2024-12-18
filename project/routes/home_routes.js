var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send("hello test api ")
});

module.exports = router;
