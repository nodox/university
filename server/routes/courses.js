var express = require('express');
var pg  = require('pg');
var router = express.Router();

var db = require('./course-queries');

router.get('/', db.getAllCourses);
router.get('/:id', db.getSingleCourse); 

module.exports = router;