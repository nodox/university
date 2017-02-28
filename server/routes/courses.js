var express = require('express');
var pg  = require('pg');
var router = express.Router();

var db = require('./course_queries');

router.get('/', db.getAllCourses);
router.get('/:id', db.getSingleCourse); 

router.get('/', function(req, res, next) {
	// var conString = process.env.DATABASE_URL + "?ssl=true";
	var conString = "postgres://notpfdixvpwqgg:5d9e16ff60f11b3594da8e7ccd010e843629a9ddb7976fa1519c611223c70ec8@ec2-54-163-234-140.compute-1.amazonaws.com:5432/d3nu6migmun6tt"+"?ssl=true";
	var client = new pg.Client(conString);
	pg.connect(conString, function(err, client, done) {
	    client.query('SELECT * FROM university', function(err, result) {
	      done();
	      if (err)
	       { console.error(err); res.send("Error " + err); }
	      else
	       { res.json(result.rows); }
	    });

	// res.json( { courses: [
	// 	{
	// 	name: 'Software engineering workshop',
	// 	course_id: 'CSE 437'
	// 	}
	// 	]
	});
});

module.exports = router;