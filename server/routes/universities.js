var express = require('express');
var pg = require('pg');
var router = express.Router();

var db = require('./university-queries');

router.get('/', db.getAllUnis);
router.get('/:id', db.getSingleUni)

module.exports = router;
