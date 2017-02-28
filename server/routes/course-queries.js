var pg = require('pg');
//  update conString once courses database is created
var conString = process.env.DATABASE_URL + "?ssl=true";
var client = pg.Client(conString);

function getAllCourses(req, res, next) {
	pg.connect(conString, function(err, client, done) {
    	client.query('SELECT * FROM university', function(err, result) {
      	done();
      	if (err)
	    	{ console.error(err); res.send("Error " + err); }
	    else
	    	//  placeholder response, replace once courses database is created
	    	{ res.json('get all courses' ); }
  		});
	});
};

function getSingleCourse(req, res, next) {
	pg.connect(conString, function(err, client, done) {
		var uniId = parseInt(req.params.id);
    	client.query("SELECT * FROM university where id = $1", [uniId], function(err, result) {
      	done();
      	if (err)
	    	{ console.error(err); res.send("Error " + err); }
	    else
	    	//  placeholder response, replace once courses database is created
	    	{ res.json('get single course by id'); }
  		});
	});
};

module.exports = {
	getAllCourses: getAllCourses,
	getSingleCourse: getSingleCourse
};
