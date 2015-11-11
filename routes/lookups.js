var router = require('express').Router();
var checker = require('../services/domain_availability_checker');

router.post('/', function(req, res) {

  res.json(req.body);


});


module.exports = router;
