const Course = require('../models').Course;
const sequelize = require('sequelize');

module.exports = {

  create: (req, res) => {

    return Course
      .create({
        title: req.body.title,
        description: req.body.description,
        collegeId: req.body.collegeId,
        building: req.body.building,
        code: req.body.code,
        days: req.body.days,
        credits: req.body.credits,
        time: req.body.time,
        instructor: req.body.instructor,
        department: req.body.department,
        school: req.body.school,

      })
      .then(course => res.status(201).send(course))
      .catch(error => res.status(400).send(error));
  },

  find: (req, res) => {

    const universityId = req.query.u; // needs to be university name
    const title = req.query.t;
    const code = req.query.c;
    const dept = req.query.d;
    const l = req.query.l;
    const school = req.query.s;
    const cr = req.query.cr;
    const time = req.query.time;
    const days = req.query.days;
    const instructor = req.query.instructor;




    var queryOptions = {};
    var limitOptions = {};
    var courseOptions = {};




    if (universityId) {
      queryOptions.collegeId = universityId;
    }

    if (title) {
      queryOptions.title = {
        $iLike: '%'+ title +'%'
      };
    }

    if (cr) {
      queryOptions.credits = cr;
    }

    if (dept) {
      queryOptions.department = {
        $iLike: '%'+ dept +'%'
      };
    }

    if (school) {
      queryOptions.school = {
        $iLike: '%'+ school +'%'
      };
    }

    if (time) {
      queryOptions.time = {
        $iLike: '%'+ time +'%'
      };
    }

    if (days) {
      queryOptions.days = {
        $iLike: '%'+ days +'%'
      };
    }

    if (instructor) {
      queryOptions.instructor = {
        $iLike: '%'+ instructor +'%'
      };
    }

    if (code) {
      queryOptions.code = {
        $iLike: '%'+ code +'%'
      };
    }


    // console.log('=======================');
    // console.log('=======================');
    // console.log(queryOptions);
    // console.log('=======================');
    // console.log('=======================');


    Course.findAll({ 
      where: queryOptions,
      limit: l
    }).then((data) => {
      res.status(201).send(data);
    })
    .catch(error => res.status(400).send(error));

  }
};