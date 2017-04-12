var express = require('express');
var pg = require('pg');
var router = express.Router();

const courseController = require('../controllers').course;

/* GET users listing. */
router.get('/', function(req, res, next) {
  
});

router.post('/', courseController.create);
router.get('/find', courseController.find);

module.exports = router;
