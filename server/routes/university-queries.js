var pg = require('pg');
var conString = process.env.DATABASE_URL + "?ssl=true";
var client = pg.Client(conString);

function getAllUnis(req, res, next) {
	pg.connect(conString, function(err, client, done) {
    	client.query('SELECT * FROM university', function(err, result) {
      	done();
      	if (err)
	    	{ console.error(err); res.send("Error " + err); }
	    else
	    	{ res.json(result.rows); }
  		});
	});
};

function getSingleUni(req, res, next) {
	pg.connect(conString, function(err, client, done) {
		var uniId = parseInt(req.params.id);
    	client.query("SELECT * FROM university where id = $1", [uniId], function(err, result) {
      	done();
      	if (err)
	    	{ console.error(err); res.send("Error " + err); }
	    else
	    	{ res.json(result.rows); }
  		});
	});
};

module.exports = {
	getAllUnis : getAllUnis,
	getSingleUni: getSingleUni
};
