var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', function(req, res, next) {
  res.json({ 
    id: '102492',
    courseName: 'Software Engineering Workshop',
    dept: 'School of Engineering and Applied Science',
    semester: 'Spring',
    universityId: '238033'
  });
});

module.exports = router;
