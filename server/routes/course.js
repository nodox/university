var express = require('express');
var pg = require('pg');
var router = express.Router();

const courseController = require('../controllers').course;


router.post('/', courseController.create);
router.get('/', courseController.find);

module.exports = router;
