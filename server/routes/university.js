var express = require('express');
var pg = require('pg');
var router = express.Router();

const universityController = require('../controllers').university;

/* GET users listing. */
router.get('/', universityController.find)

router.post('/', universityController.create)

module.exports = router;
