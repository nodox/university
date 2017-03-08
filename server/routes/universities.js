var express = require('express');
var pg = require('pg');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	
  var conString = process.env.DATABASE_URL + "?ssl=true";
	var client = new pg.Client(conString);
  pg.connect(conString, function(err, client, done) {
    client.query('SELECT * FROM university', function(err, result) {
      done();
      if (err)
       { console.error(err); res.send("Error " + err); }
      else
       { res.json(result.rows); }
    });
  });
});

module.exports = router;
